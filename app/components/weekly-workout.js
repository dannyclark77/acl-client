import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  actions: {
    createWorkout(workout) {
      console.log('store user_id is ', this.get('session.data.authenticated'));
      // workout.user_id = this.get('store').user_id
      return this.sendAction('createWorkout', workout)
    }
  }
});
