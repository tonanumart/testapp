import * as angular from 'angular';
import 'kendo-ui-core';

import { Components } from './components';
import { Factories } from './factories';
import { Directives } from './directives';

const MODULE_NAME: string = "mySuperAwesomeApp";
var module = angular.module(MODULE_NAME, ["kendo.directives"]);
Components.build(module);
Factories.build(module);
Directives.build(module);

angular.element(document).ready(function() {

  let app: ng.IModule = angular.module(MODULE_NAME);
  //bootstrap the application
  angular.bootstrap(document, [MODULE_NAME], {
    "strictDi": true,
  });
  //*/

});