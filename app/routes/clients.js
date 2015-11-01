import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('client');
	},
       actions: {
	       createClient: function(companyName,phoneNumber,emailId,companyCity){
		       var client = this.store.createRecord('client', {
			       companyName: companyName,
		       phoneNumber: phoneNumber,
		       email: emailId,
		       companyCity: companyCity,
		       noOfProjects: 0,
		       totalIncome: 0

		       }).save().catch(function(error){
			       console.log("Error");
			       console.log(error);
		       });
		       this.transitionTo('clients.client',client);
	       },


       }
});
