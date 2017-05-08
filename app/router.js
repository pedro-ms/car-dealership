import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dealerships', function() {
    this.route('new');
  });
  this.route('cars');
});

export default Router;
