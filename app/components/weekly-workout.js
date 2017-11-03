import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  actions: {
    createWorkout(workout) {
      return this.sendAction('createWorkout', workout)
    }
  }
});
