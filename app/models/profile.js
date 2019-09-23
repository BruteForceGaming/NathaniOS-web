import DS from 'ember-data';
const { Model } = DS;

import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import { computed } from '@ember/object';

export default Model.extend(LoadableModel, {
  region: DS.attr('string'),
  timestamp: DS.attr('number'),
  career: DS.attr(),
  snapshot: DS.attr(),
  summary: DS.attr(),

  ladderSummary: DS.belongsTo('ladder-summary'),

  fullId: computed('summary', 'id', function() {
    return `${this.get('region')}-${this.get('summary.Realm')}-${this.get('id')}`;
  }),

  careerGames: computed('career', function(){
    return this.get('career.totalCareerGames');
  }),

  name: computed('summary', function() {
    let str = "";
    let summary = this.get('summary');
    if (summary.ClanTag !== '') {
      str = `[${summary.ClanTag}] `;
    }
    return `${str}${summary.displayName}`;
  }),

  seasonGames: computed('career', function() {
    return this.get('career.totalGamesThisSeason');
  }),

  seasonRankedGames: computed('snapshot.totalRankedSeasonGamesPlayed', function() {
    return this.get('snapshot.totalRankedSeasonGamesPlayed');
  }),
});
