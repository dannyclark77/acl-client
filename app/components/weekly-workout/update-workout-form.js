import Ember from 'ember';

export default Ember.Component.extend({
  updatedWorkout: {
    week: null,
    day: null,
    exercise: null,
    sets: null,
    reps: null
  },
  actions: {
    updateWorkout() {
      // console.log('ID is ', this.$().parent().parent().attr('id'));
      this.sendAction('updateWorkout', this.get('updatedWorkout'));
      this.set('updatedWorkout', null);
    }
  }
});
