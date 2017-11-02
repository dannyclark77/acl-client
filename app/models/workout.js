import DS from 'ember-data';

export default DS.Model.extend({
  week: DS.attr('integer'),
  day: DS.attr('string'),
  exercise: DS.attr('string'),
  sets: DS.attr('string'),
  reps: DS.attr('string'),
  user: DS.belongsTo('user')
});
