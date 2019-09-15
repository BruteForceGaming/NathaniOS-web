import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: "/"})
  this.route('about');
  this.route('contact');
  this.route('metrics');
  this.route('profiles');
  this.route('clans');
  this.route('servers');
  this.route('top-active');
  this.route('top-rated');
});

export default Router;
