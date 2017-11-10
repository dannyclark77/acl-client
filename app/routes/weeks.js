import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').query('exercise', {week: 2})
  },
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
