import { helper } from '@ember/component/helper';

function myTeam(params/*, hash*/) {
  let found = undefined;
  if (params.length < 2) {
    return found;
  }

  let expected = params[1];
  if (params[0] === undefined) {
    return found;
  }

  let i = 0;
  params[0].forEach(function(val) {
    val.teamMembers.forEach(function(member) {
      if (member.id == expected) {
        // val.set('rank', i);
        val.rank = i;
        found = val;
        return;
      }
    });
    if (found !== undefined) {
      return;
    }
    i++;
  });

  return found;
}

export default helper(myTeam);
