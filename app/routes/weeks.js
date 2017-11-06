import Ember from 'ember';

export default Ember.Route.extend({
  id: Ember.inject.service(),
  actions: {
    submitWeek (week) {
      let number = week.number
      this.get('id').set('number', number);
      console.log(this.get('id').number);
      this.transitionTo('week', number);
    }
  }
});
