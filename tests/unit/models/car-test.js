import { moduleForModel, test } from 'ember-qunit';

moduleForModel('car', 'Unit | Model | car', {
  // Specify the other units that are required for this test.
  needs: ['model:dealership-id']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
