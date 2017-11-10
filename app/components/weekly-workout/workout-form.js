import Ember from 'ember';

export default Ember.Component.extend({
  newWorkout: {
    week: null,
    day: null,
    exercise: null,
    sets: null,
    reps: null
  },
  actions: {
    createWorkout() {
      this.sendAction('createWorkout', this.get('newWorkout'));
      this.set('newWorkout.week', null);
      this.set('newWorkout.day', null);
      this.set('newWorkout.exercise', null);
      this.set('newWorkout.sets', null);
      this.set('newWorkout.reps', null);
      this.sendAction('sessionChanged');
    }
  }
});
