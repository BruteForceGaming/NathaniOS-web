import DS from 'ember-data';
const { Model } = DS;

import { computed } from '@ember/object';

export default Model.extend({
  Region: DS.attr('string'),
  FetchTimestamp: DS.attr('number'),
  Career: DS.attr(),
  Snapshot: DS.attr(),
  Summary: DS.attr(),

  SoloMMR: computed('Snapshot', function() {
    let snapshot = this.get('Snapshot.SeasonSnapshot.1v1');
    return "N/A";
  }),

  FullID: computed('Summary', 'ID', function() {
    return `${this.get('Region')}-${this.get('Summary.Realm')}-${this.get('id')}`;
  }),

  CareerGames: computed('Career', function(){
    return this.get('Career.totalCareerGames');
  }),

  Name: computed('Summary', function() {
    let str = "";
    let summary = this.get('Summary');
    if (summary.ClanTag !== '') {
      str = `[${summary.ClanTag}] `;
    }
    return `${str}${summary.displayName}`;
  }),

  SeasonGames: computed('Career', function() {
    return this.get('Career.totalGamesThisSeason');
  }),

  SeasonRankedGames: computed('Snapshot.totalRankedSeasonGamesPlayed', function() {
    return this.get('Snapshot.totalRankedSeasonGamesPlayed');
  }),

  Ladders: computed('Summary', function() {
    return this.store.find('ladder-summary', this.get('id'));
  }),
});
