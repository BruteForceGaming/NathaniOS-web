import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  //test('', async function (assert) {});
  test('should be able to load leaderboards page', async function (assert) {});
  test('should be able to load profiles page', async function (assert) {
    await visit('/profiles');
    assert.equal(currentURL(), '/profiles');
  });
  test('should be able to load clans page', async function (assert) {});
  test('should be able to load guilds page', async function (assert) {});
  test('should be able to load login page', async function (assert) {});
  test('should be able to login', async function (assert) {});
  test('should be able to search clans', async function (assert) {});
  test('should be able to search guilds', async function (assert) {});
  test('should be able to search profiles', async function (assert) {});
});
