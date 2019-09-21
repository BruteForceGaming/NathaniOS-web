import DS from 'ember-data';
const { Model } = DS;

import { computed } from '@ember/object';

export default Model.extend({
  timestamp: DS.attr('number'),
  teams: DS.attr(),

  averageMMR: computed('teams', function() {
    let teams = this.get("teams");
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

  teamCount: computed('teams', function() {
    let teams = this.get("teams");
    return teams.length;
  }),

  format: computed('teams', function() {
    let teams = this.get("teams");
    if (teams === undefined ||
        teams.length == 0 ||
        teams[0].teamMembers === undefined) {
      return "N/A";
    }

    let members = teams[0].teamMembers.length;
    return `${members}v${members}`;
  })
});
