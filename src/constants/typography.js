// I like the idea of exporting mixins (i.e <heading.primary>, <heading.secondary>...)
// This pattern seems well suited for typograhy?

const { createStyle, createMixin } = require('immutable-styles');

const heading = {
  primary: createMixin(
    createStyle(
      'h1',
      null,
      `font-size: 50px;
      font-family: 'Muli', sans-serif;
      font-weight: 800;`
    )
  )
};

module.exports = {
  heading
}