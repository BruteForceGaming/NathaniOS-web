import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Search: service(),
  actions: {
    updateSearch: function(evt) {
      this.get('Search').setSearchKeyword(evt.target.value);
    },
  }
});
