import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      workouts: this.get('store').query('workout', {week: params.id}),
      week: params.id,
      prevWeek: params.id - 1,
      nextWeek: ++params.id,
      exercises: this.get('store').query('exercise', {week: params.id}),
    });
  },
  actions: {
    createWorkout(workout) {
      let newWorkout = this.get('store').createRecord('workout', workout);
      newWorkout.save();
    },
    deleteWorkout(workout) {
      workout.destroyRecord();
    },
    updateWorkout(updatedWorkout, id) {
      this.get('store').findRecord('workout', id)
        .then((workout) => {
          workout.set('week', updatedWorkout.week);
          workout.set('day', updatedWorkout.day);
          workout.set('exercise', updatedWorkout.exercise);
          workout.set('sets', updatedWorkout.sets);
          workout.set('reps', updatedWorkout.reps);
          workout.save();
        })
      },
      sessionChanged() {
        this.refresh();
      }
    }
});
