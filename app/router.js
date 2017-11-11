import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('welcome');
  this.route('weeks');
  this.route('week', { path: '/weeks/:id' });
  this.route('goals');
});

export default Router;
