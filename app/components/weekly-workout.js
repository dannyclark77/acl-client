import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createWorkout(workout) {
      return this.sendAction('createWorkout', workout)
    },
    deleteWorkout(workout) {
      return this.sendAction('deleteWorkout', workout);
    },
    updateWorkout(workout, id) {
      return this.sendAction('updateWorkout', workout, id);
    }
  }
});
