import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', {path: "/"})
  this.route('about');
  this.route('contact');
  this.route('ladders', function() {
    this.route('view', {path: ":ladder_id"});
  });
  this.route('metrics');
  this.route('profiles', function() {
    this.route('view', {path: ":profile_id"});
  });
  this.route('clans');
  this.route('servers');
  this.route('top-active');
  this.route('top-rated');
});

