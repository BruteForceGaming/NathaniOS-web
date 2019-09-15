import Service from '@ember/service';

export default Service.extend({
  searchKeyword: "",
  setSearchKeyword(keyword){
    this.set('searchKeyword', keyword);
  }
});
