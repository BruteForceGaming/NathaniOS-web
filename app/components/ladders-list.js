import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { filter, sortBy } from 'lodash';

export default class LaddersList extends Component {
  @service
  search;

  get sortedLadders() {
    let sortProp = this.args.sortProperty;

    return sortBy(this.args.model.toArray(), [function(item) {
      // handle descending sort
      if (sortProp[0] === '-') {
        return -item[sortProp.substr(1)];
      }

      return item[sortProp];
    }]);
  };

  get filteredLadders() {
    let keyword = this.search.keyword;
    let useRegex = this.search.useRegex;

    return filter(this.sortedLadders, function(item, idx, col) {
      if (useRegex === true) {
        var re = new RegExp(keyword, 'i');
        return keyword === "" ||
          re.test(item.id) ||
          re.test(item.format);
      }

      /* regular fulltext search */
      return keyword === "" ||
        item.id.includes(keyword) ||
        item.format.includes(keyword);
    });
  };
};
