import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | ladder showcase', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('ladder-showcase', {});
    assert.ok(model);
  });
});
