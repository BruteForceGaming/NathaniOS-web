import Component from '@ember/component';

import { computed } from '@ember/object';
import { sort, filter } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  Search: service(),

  laddersSortProps: computed('sortProperty', function() {
    return [this.sortProperty];
  }),
  sortedLadders: sort('model', 'laddersSortProps'),

  searchRegex: false,
  filteredLadders: filter('sortedLadders', ['sortedLadders', 'Search.searchKeyword', 'searchRegex'], function(item) {
    let keyword = this.get('Search.searchKeyword');

    /* regular expression search */
    if (this.get('searchRegex') === true) {
      var re = new RegExp(keyword, 'i');
      return keyword === "" ||
        re.test(item.id) ||
        re.test(item.Type);
    }

    /* regular fulltext search */
    return keyword === "" ||
      item.id.includes(keyword) ||
      item.Type.includes(keyword);
  }),
});
