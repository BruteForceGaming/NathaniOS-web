import DS from 'ember-data';
const { Model } = DS;

import { computed } from '@ember/object';

export default Model.extend({
  ProfileID: DS.attr('number'),
  Region: DS.attr('string'),
  FetchTimestamp: DS.attr('number'),
  Snapshot: DS.attr(),
  Career: DS.attr(),
  Summary: DS.attr(),

  CareerGames: computed('Career', function() {
    let career = this.get("Career")
    return career.totalCareerGames;
  }),

  SeasonRankedGames: computed('Snapshot', function() {
    let snapshot = this.get("Snapshot")
    return snapshot.totalRankedSeasonGamesPlayed;
  }),

  SeasonGames: computed('Career', function() {
    let career = this.get("Career")
    return career.totalGamesThisSeason;
  }),

  Name: computed('Summary', function() {
    let str = "";
    let sum = this.get("Summary")
    if (sum.ClanTag !== "") {
      str = `[${sum.ClanTag}] `
    }
    return `${str}${sum.displayName}`;
  })
});
