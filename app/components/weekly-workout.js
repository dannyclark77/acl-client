import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  workouts: storageFor('workouts'),
  day: Ember.computed('workouts.data.day', function(){
    return this.get('workouts.data.day');
  }),
  actions: {
    toggleUpdateForm (target) {
      console.log('target.data is ', target.data);
      this.set('workouts', target);
      console.log('Storage workouts get is ', this.get('workouts'));
      console.log('day is ', this.get('day'));
      return this.toggleProperty('isUpdateSelected');
    },
    createWorkout(workout) {
      return this.sendAction('createWorkout', workout)
    },
    deleteWorkout(workout) {
      console.log(workout);
      return this.sendAction('deleteWorkout', workout);
    },
    updateWorkout(workout) {
      const storageID = this.get('workouts.id');
      console.log('Workout is ', workout);
      // console.log('updated workout is ', workout);
      // console.log('ID is ', id);
      return this.sendAction('updateWorkout', workout, storageID);
    }
  }
});
