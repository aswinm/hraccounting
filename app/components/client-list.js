import Ember from 'ember';

export default Ember.Component.extend({
        edit: false,
        addProject: false,
        actions: {
		deleteClient(client){
			this.sendAction('deleteClient',client);
		},
		editClient(){
			this.toggleProperty('edit');
		},
       		updateClient(client){
			this.sendAction('updateClient',client);
			this.toggleProperty('edit');
			
		},
       		createProject(){
			this.toggleProperty('addProject');
		},
       		submitProject(client){
			var projectName = this.get('projectName');
			var projectCost = this.get('projectCost');
			this.set('projectName','');
			this.set('projectCost','');
			this.sendAction('submitProject',projectName,projectCost,client);
			this.toggleProperty('addProject');
		}
	}
});
