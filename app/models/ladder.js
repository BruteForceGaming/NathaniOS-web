import DS from 'ember-data';
const { Model } = DS;

import { computed } from '@ember/object';

export default Model.extend({
  FetchTimestamp: DS.attr('number'),
  Teams: DS.attr(),

  AverageMMR: computed('Teams', function() {
    let teams = this.get("Teams");
    let count = teams.length;
    let total = 0;

    teams.forEach(function(t) {
      total += t.mmr;
    });

    if (total > 0 && count > 0) {
      return Math.round(total / count);
    }

    return "N/A";
  }),

  MemberCount: computed('Teams', function() {
    let teams = this.get("Teams");
    return teams.length;
  }),

  Type: computed('Teams', function() {
    let teams = this.get("Teams");
    if (teams === undefined ||
        teams.length == 0 ||
        teams[0].teamMembers === undefined) {
      return "N/A";
    }

    let members = teams[0].teamMembers.length;
    return `${members}v${members}`;
  })
});
