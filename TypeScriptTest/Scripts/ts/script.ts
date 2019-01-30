//import { LoadingIndicatorBarDirective } from "./loading-indicator-bar";
//import { Factories } from './factories';
import { HerosComponent } from './components/hero/hero-component';
import * as angular from 'angular';


var module = angular.module("mySuperAwesomeApp", []);


module.component("heros", new HerosComponent());//.directive("loadingIndicatorBar", LoadingIndicatorBarDirective.Factory());

angular.element(document).ready(function() {

  angular.bootstrap(document, ["mySuperAwesomeApp"]);

  /*
  //module name
  const MODULE_NAME: string = "mySuperAwesomeApp";

  //create app module
  let app: ng.IModule = angular.module(MODULE_NAME);

  //create factories
  Factories.build(app);

  //bootstrap the application
  angular.bootstrap(document, [MODULE_NAME], {
    "strictDi": true
  });
  //*/

});