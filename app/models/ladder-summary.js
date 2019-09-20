import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  region: DS.attr('number'),
  timestamp: DS.attr('number'),
  showcase: DS.attr(),
  placement: DS.attr(),
  memberships: DS.attr(),
  ladders: DS.hasMany('ladder'),
});
