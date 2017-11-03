import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('workout');
  },
  actions: {
    createWorkout(workout) {
      let newWorkout = this.get('store').createRecord('workout', workout);
      newWorkout.save();
    }
  }
});
