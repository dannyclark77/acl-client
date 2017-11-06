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
      console.log('this get workout is ', this.get('workout.id'));
      console.log('updated Week is ', this.get('updatedWeek'));
      console.log('updated Day is ', this.get('updatedDay'));
      console.log('updated Exercise is ', this.get('updatedExercise'));
      console.log('updated Sets is ', this.get('updatedSets'));
      console.log('updated Reps is ', this.get('updatedReps'));
      this.get('updatedWorkout').week = this.get('updatedWeek');
      this.get('updatedWorkout').day = this.get('updatedDay');
      this.get('updatedWorkout').exercise = this.get('updatedExercise');
      this.get('updatedWorkout').sets = this.get('updatedSets');
      this.get('updatedWorkout').reps = this.get('updatedReps');
      console.log(this.get('updatedWorkout'));
      // console.log('ID is ', this.$().parent().parent().attr('id'));
      this.sendAction('updateWorkout', this.get('updatedWorkout'), this.get('workout.id'));

    }
  }
});
