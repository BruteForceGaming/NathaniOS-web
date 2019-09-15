import { helper } from '@ember/component/helper';

export default helper(function sc2Icon(params/*, hash*/) {
  if (params === undefined) {
    return "";
  }

  if (params[0] === undefined) {
    return "";
  }

  return params[0][0];
});
