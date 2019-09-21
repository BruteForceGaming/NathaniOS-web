import Component from '@glimmer/component';
import { task } from 'ember-concurrency';

// interface Args {
//   profile: Profile
// }

export default class MMRForProfile extends Component {

  constructor() {
    super(...arguments);

    this.calculateMMR.perform();
  }

  @task(function*() {
    let { profile } = this.args;

    let mmr = 0;
    let id = profile.id;

    let summary = yield profile.ladderSummary;
    let ladders = yield summary.ladders;

    ladders.forEach(ladder => {
      if (ladder.teamMembers.length === 1) {
        let team = teamFor(ladder, profile);

        mmr = team.mmr;
      }
    });

    return mmr;
  })
  calculateMMR;
}
