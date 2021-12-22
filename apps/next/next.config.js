const withTM = require("next-transpile-modules")(["ui", 'custom']);

module.exports = withTM({
  reactStrictMode: true,
});
