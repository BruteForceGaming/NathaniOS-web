import Component from '@ember/component';

import { computed } from '@ember/object';
import { sort, filter } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  Search: service(),

  profilesSortProps: computed('sortProperty', function() {
    return [this.sortProperty];
  }),
  sortedProfiles: sort('model', 'profilesSortProps'),

  searchRegex: false,
  filteredProfiles: filter('sortedProfiles', ['sortedProfiles', 'Search.searchKeyword', 'searchRegex'], function(item) {
    let keyword = this.get('Search.searchKeyword');

    /* regular expression search */
    if (this.get('searchRegex') === true) {
      var re = new RegExp(keyword, 'i');
      return keyword === "" ||
        re.test(item.Name) ||
        re.test(item.FullID) ||
        re.test(item.Summary.ClanName);
    }

    /* regular fulltext search */
    return keyword === "" ||
      item.Name.includes(keyword) ||
      item.FullID.includes(keyword) ||
      item.Summary.ClanName.includes(keyword);
  }),
});
