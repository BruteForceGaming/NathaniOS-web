import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class Search extends Component {
  @service
  search;

  @action
  updateSearch(evt) {
    if (evt.target.value.includes("https://starcraft2.com/")) {
      let parts = evt.target.value.split('/');
      let l = parts.length;
      if (l > 7) {
        evt.target.value = `${parts[l-3]}-${parts[l-2]}-${parts[l-1]}`;
      }
    }

    this.search.setKeyword(evt.target.value);
  };
};
