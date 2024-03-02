const resolve = (arr) => arr.map(require.resolve);

module.exports = {
  resolve,
};
