import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  Region: DS.attr('number'),
  FetchTimestamp: DS.attr('number'),
  // Profile: DS.belongsTo('profile'),
  Showcase: DS.attr(),
  Placement: DS.attr(),
  Memberships: DS.attr(),
});
