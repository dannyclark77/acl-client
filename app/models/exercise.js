import DS from 'ember-data';

export default DS.Model.extend({
  week: DS.attr('number'),
  exercise_name: DS.attr('string')
});
