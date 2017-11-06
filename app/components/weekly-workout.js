import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  // workouts: storageFor('workouts'),
  // day: Ember.computed('workouts.data.day', function(){
  //   return this.get('workouts.data.day');
  // }),
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
