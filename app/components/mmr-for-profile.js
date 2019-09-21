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

    let id = profile.id;
    let summary = yield profile.ladderSummary;
    let ladders = yield summary.ladders;

    let teams = ladders
      .toArray()
      .map(ladder => ladder.teams)
      .flat();

    let myTeam = teams.find(team =>
      team.teamMembers
          .find(teamMember => teamMember.id === id)
    );

    return myTeam.mmr;
  })
  calculateMMR;
}
