import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Search extends Service {
  @tracked
  keyword = "";

  @tracked
  useRegex = false;

  setKeyword(keyword) {
    this.keyword = keyword;
  };
};
