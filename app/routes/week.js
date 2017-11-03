import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createWorkout(workout) {
      let newWorkout = this.get('store').createRecord('workout', workout);
      newWorkout.save();
    }
  }
});
