import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  week: {},
  actions: {
    submit () {
      this.sendAction('submit', this.get('week'));
    },
    reset () {
      this.set('week', {});
    }
  }
});
