module.exports = {
  'packages/module': (files) => `cd packages/module && yarn run lint:stage ${files.join(' ')}`,
};
