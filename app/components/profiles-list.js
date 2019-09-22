import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { filter, sortBy } from 'lodash';

export default class ProfilesList extends Component {
  @service
  search;

  get sortedProfiles() {
    let sortProp = this.args.sortProperty;

    return sortBy(this.args.model.toArray(), [function(item) {
      // handle descending sort
      if (sortProp[0] === '-') {
        return -item[sortProp.substr(1)];
      }

      return item[sortProp];
    }]);
  };

  get filteredProfiles() {
    let keyword = this.search.keyword;
    let useRegex = this.search.useRegex;

    return filter(this.sortedProfiles, function(item, idx, col) {
      if (useRegex === true) {
        var re = new RegExp(keyword, 'i');
        return keyword === "" ||
          re.test(item.name) ||
          re.test(item.fullId) ||
          re.test(item.summary.ClanName);
      }

      /* regular fulltext search */
      return keyword === "" ||
        item.name.includes(keyword) ||
        item.fullId.includes(keyword) ||
        item.summary.ClanName.includes(keyword);
    });
  };
};
