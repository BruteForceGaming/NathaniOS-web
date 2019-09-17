import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Search: service(),
  actions: {
    updateSearch: function(evt) {
      if (evt.target.value.includes("https://starcraft2.com/")) {
        let parts = evt.target.value.split('/')
        let l = parts.length
        if (l > 7) {
          evt.target.value = `${parts[l-3]}-${parts[l-2]}-${parts[l-1]}`
        }
      }
      
      this.get('Search').setSearchKeyword(evt.target.value);
    },
  }
});
