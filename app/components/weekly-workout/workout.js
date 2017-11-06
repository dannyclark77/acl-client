import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteWorkout(workout) {
      return this.sendAction('deleteWorkout', workout);
    },
  toggleUpdateForm () {
    return this.toggleProperty('isUpdateSelected');
  },
  updateWorkout(workout, id) {
    this.toggleProperty('isUpdateSelected');
    return this.sendAction('updateWorkout', workout, id)

  }
  }
});
