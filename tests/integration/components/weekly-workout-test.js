import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weekly-workout', 'Integration | Component | weekly workout', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weekly-workout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weekly-workout}}
      template block text
    {{/weekly-workout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
