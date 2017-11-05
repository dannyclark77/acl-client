import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  workouts: storageFor('workouts'),
  actions: {
    toggleUpdateForm (target) {
      this.set('workouts', target.id);
      console.log('Storage workouts get is ', this.get('workouts'));
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
      const storageID = this.get('workouts');
      console.log('Workout is ', workout);
      // console.log('updated workout is ', workout);
      // console.log('ID is ', id);
      return this.sendAction('updateWorkout', workout, storageID);
    }
  }
});
