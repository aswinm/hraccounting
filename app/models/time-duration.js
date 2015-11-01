import DS from 'ember-data';

export default DS.Model.extend({
  fromTime: DS.attr('string'),
  toTime: DS.attr('string'),
  duration: DS.attr('string'),
  project: DS.belongsTo('project',{async: true})
});
