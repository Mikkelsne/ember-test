import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact-mathias', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contact-mathias');
    assert.ok(route);
  });
});
