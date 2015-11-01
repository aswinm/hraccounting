import Ember from 'ember';

export default Ember.Component.extend({
        edit: false,
        addTime: false,
        actions: {
		deleteProject(project){
			this.sendAction('deleteProject',project);
		},
		editProject(){
			this.toggleProperty('edit');
		},
       		updateProject(project,client){
			this.sendAction('updateProject',project);
			this.toggleProperty('edit');
			
		},
       		addTimeDuration(){
			this.toggleProperty('addTime');
		},
       		createTimeDuration(project){
			var fromTime = this.get('fromTime');
			var toTime = this.get('toTime');
			this.sendAction('addTimeDuration',project,fromTime,toTime);
		},
		deleteTimeDuration(timeDuration,project){
			this.sendAction('deleteTimeDuration',timeDuration,project);
		}
	}
});
