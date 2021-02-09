const withTranspile = require('next-transpile-modules')(['react-spring'])
const withSvgr = require("next-svgr");

module.exports = withSvgr({
  ...withTranspile()
});