import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('workout');
  },
  actions: {
    submitWeek (week) {
      let number = week.number
      this.transitionTo('week', number);
    }
  }
});
