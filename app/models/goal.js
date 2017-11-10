import DS from 'ember-data';

export default DS.Model.extend({
  week: DS.attr('number'),
  goal: DS.attr('string')
});
