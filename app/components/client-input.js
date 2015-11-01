import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		createClient(companyName,phoneNumber,emailId,companyCity){
			companyName = this.get('companyName');
			phoneNumber = this.get('phoneNumber');
			emailId = this.get('emailId');
			companyCity = this.get('companyCity');
		this.sendAction('action',companyName,phoneNumber,emailId,companyCity);
		},
	}
});
