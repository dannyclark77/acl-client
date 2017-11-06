import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weekly-workout/update-workout-form', 'Integration | Component | weekly workout/update workout form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weekly-workout/update-workout-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weekly-workout/update-workout-form}}
      template block text
    {{/weekly-workout/update-workout-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
