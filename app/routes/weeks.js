import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    submitWeek (week) {
      this.transitionTo('weeks/' + week.number);
    }
  }
});
