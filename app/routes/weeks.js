import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitWeek (week) {
      let number = week.number
      this.transitionTo('week', number);
    }
  }
});
