import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | top-rated', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:top-rated');
    assert.ok(route);
  });
});
