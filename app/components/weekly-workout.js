import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedWorkout: Ember.computed.sort('workout', 'sortDefinition'),
  sortDefinition: ['day'],
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
