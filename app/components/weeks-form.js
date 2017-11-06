import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  week: {},
  actions: {
    submit () {
      this.sendAction('submit', this.get('week'));
      this.set('week.number', null);
    },
    reset () {
      this.set('week', {});
    }
  }
});
