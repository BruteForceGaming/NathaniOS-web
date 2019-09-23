import DS from 'ember-data';
const { Model } = DS;

import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  region: DS.attr('number'),
  timestamp: DS.attr('number'),
  showcase: DS.attr(),
  placement: DS.attr(),
  memberships: DS.attr(),
  ladders: DS.hasMany('ladder'),
});
