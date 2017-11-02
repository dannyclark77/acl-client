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
      console.log(this.get('newWorkout'));
    }
  }
});
