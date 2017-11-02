import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    submitWeek (week) {
      let number = week.number
      this.transitionTo('week', number);
    }
  }
});
