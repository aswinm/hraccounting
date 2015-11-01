import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
        client: DS.belongsTo('client',{async: true}),
        totalCost: DS.attr('number'),
        totalDuration: DS.attr('string'),
        totalDurationNum: DS.attr('number'),
	timeDurations: DS.hasMany('time-duration',{async:true})
});
