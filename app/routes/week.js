import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model (params) {
    return Ember.RSVP.hash({
      workouts: this.get('store').query('workout', {week: params.id}),
      week: params.id,
      prevWeek: params.id - 1,
      nextWeek: ++params.id,
      exercises: this.get('store').query('exercise', {week: params.id}),
      goals: this.get('store').query('goal', {week: params.id})
    });
  },
  actions: {
    createWorkout(workout) {
      let newWorkout = this.get('store').createRecord('workout', workout);
      return newWorkout.save()
      .then(() => this.get('flashMessages').success('Workout successfully created!'))
      .then(() => this.refresh())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      })
    },
    deleteWorkout(workout) {
      return workout.destroyRecord()
      .then(() => this.get('flashMessages').success('Workout successfully deleted.'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      })
    },
    updateWorkout(updatedWorkout, id) {
      this.get('store').findRecord('workout', id)
      .then((workout) => {
        workout.set('week', updatedWorkout.week);
        workout.set('day', updatedWorkout.day);
        workout.set('exercise', updatedWorkout.exercise);
        workout.set('sets', updatedWorkout.sets);
        workout.set('reps', updatedWorkout.reps);
        workout.save()
        .then(() => this.get('flashMessages').success('Workout successfully updated!'))
        .then(() => this.refresh())
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.')
        });
        })
      }
    }
});
