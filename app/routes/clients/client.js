import Ember from 'ember';

export default Ember.Route.extend({
	edit: true,
	model: function(params){
		return this.store.find('client', params.client_id);
	},
        actions: {
       		deleteClient(client) {
			var projects = client.get('projects').toArray();
			for(var i = 0; i < projects.length; i++){
				projects[i].destroyRecord();
			}
			client.destroyRecord();
			this.transitionTo('clients');
		},
       		submitProject(projectName,projectCost,client){
			var clid = parseInt(client.get('id'));
			var project = this.store.createRecord('project',{
				name: projectName,
				totalCost: projectCost,
				client: client,
			   	totalDuration: "0",
			    	totalDurationNum: 0,
			});

			project.save().catch(function(error){
				console.log("Error at Submit Project");
				console.log(error);
			});
			var curIncome = parseInt(client.get('totalIncome'));
			var noOfProjects = parseInt(client.get('noOfProjects'));
			noOfProjects += parseInt(1);
			curIncome += parseInt(projectCost);
			client.set('noOfProjects',noOfProjects);
			client.set('totalIncome',curIncome);
			client.save().catch(function(error){
				console.log("Error at Saving Client");
				console.log(error);
			});



		},
		 updateClient(client){
		                client.save();
		        },

	}

});
