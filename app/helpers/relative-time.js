import { helper } from '@ember/component/helper';

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const MS_PER_MINUTE = 1000 * 60;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

export default helper(function relativeTime(params/*, hash*/) {
  if (params !== undefined) {
    var futureDate = new Date(params[0] * 1000);
    var nowDate = Date.now();
    var msDiff = futureDate - nowDate;

    if (msDiff < -MS_PER_DAY) {
      return rtf.format(msDiff / MS_PER_DAY, 'day');
    } else if (msDiff < -MS_PER_HOUR) {
      return rtf.format(msDiff / MS_PER_HOUR, 'hour');
    } else if (msDiff < -MS_PER_MINUTE) {
      return rtf.format(msDiff / MS_PER_MINUTE, 'minute');
    } else {
      return rtf.format(msDiff / 1000, 'second');
    }
  }

  return "";
});
