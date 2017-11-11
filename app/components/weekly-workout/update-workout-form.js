import Ember from 'ember';

export default Ember.Component.extend({
  updatedWorkout: {},
  updatedWeek: Ember.computed.alias('workout.week'),
  updatedDay: Ember.computed.alias('workout.day'),
  updatedExercise: Ember.computed.alias('workout.exercise'),
  updatedSets: Ember.computed.alias('workout.sets'),
  updatedReps: Ember.computed.alias('workout.reps'),
  actions: {
    updateWorkout() {
      this.get('updatedWorkout').week = this.get('updatedWeek');
      this.get('updatedWorkout').day = this.get('updatedDay');
      this.get('updatedWorkout').exercise = this.get('updatedExercise');
      this.get('updatedWorkout').sets = this.get('updatedSets');
      this.get('updatedWorkout').reps = this.get('updatedReps');
      this.sendAction('updateWorkout', this.get('updatedWorkout'), this.get('workout.id'));
    }
  }
});
