import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('project',params.project_id);
	}, 
       actions: {
		updateProject(project){
			project.save();
		},
       		deleteProject(project){
			project.destroyRecord();
			this.transitionTo('projects');
		},
       		addTimeDuration(project,fromTime,toTime){
			this.store.createRecord('timeDuration',{
				fromTime: fromTime,
				toTime: toTime,
				duration: "0",
				project: project
			}).save().then(function(){
				project.reload();
			}).catch(function(error){
				console.log(error);
			});
			
		},
		deleteTimeDuration(timeDuration,project){
			timeDuration.destroyRecord().then(function(){
				project.reload();
			});
		}

			
       },
	
});
