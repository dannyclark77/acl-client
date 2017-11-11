import Ember from 'ember';

export default Ember.Component.extend({
  previousWeek: Ember.computed.alias('prevWeek'),
  tagName: 'ul',
  sortedWorkout: Ember.computed.sort('workout', 'sortDefinition'),
  sortDefinition: ['day'],
  numberNotZero: Ember.computed('previousWeek', function () {
    if (this.get('previousWeek') > 0) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    createWorkout(workout) {
      return this.sendAction('createWorkout', workout);
    },
    deleteWorkout(workout) {
      return this.sendAction('deleteWorkout', workout);
    },
    updateWorkout(workout, id) {
      return this.sendAction('updateWorkout', workout, id);
    }
  }
});
