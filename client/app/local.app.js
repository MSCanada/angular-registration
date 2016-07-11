import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './local.route.js';
import navigation from './features/navigation';
import configApi from 'configApi';
import components from './features/components'

const modules=[
  uiRouter,
  navigation,
  components

];

export default angular.module("app", modules)
  .config(routes)
  .name;

