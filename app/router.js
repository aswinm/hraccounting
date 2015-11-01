import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('clients',{ path: '/clients'}, function(){
      this.route('createclient',{path: '/new'});
      this.route('client',{path: '/:client_id'});
      });
  this.route('projects',{ path: '/projects'},function(){
      this.route('project',{path: '/:project_id'});
  });
  this.route('time-duration', {});
});

export default Router;
