const viewGenerator = require('./plop-templates/view/prompt');
const componentGenerator = require('./plop-templates/component/prompt');
const tsComponentGenrator = require('./plop-templates/ts-component/prompt');
const tsViewGenrator = require('./plop-templates/ts-view/prompt');

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('view-typescript', tsViewGenrator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('component-typescript', tsComponentGenrator);
};
