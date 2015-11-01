import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  companyCity: DS.attr('string'),
  noOfProjects: DS.attr('number'),
  totalIncome: DS.attr('number'),
  projects: DS.hasMany('project',{async: true}),
});
