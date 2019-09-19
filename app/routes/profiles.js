import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('profile');
  },
  // findLadder(i) {
  //   return this.store.find('ladder', i);
  // },
});
