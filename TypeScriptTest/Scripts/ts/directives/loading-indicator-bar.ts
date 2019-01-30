
import * as angular from "angular";

export class LoadingIndicatorBarDirective implements ng.IDirective {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public restrict: string = "E";


    constructor(){
      this.controller = LoadingIndicatorBarController;
      this.controllerAs = "$indCtrl";
    }

    /**
     * The link function is responsible for registering DOM listeners as well as updating the DOM.
     *
     * @class LoadingIndicatorBarDirective
     * @method link
     * @param $scope {ng.IScope} The scope for this directive
     * @param $element {ng.IAugmentedJQuery} The JQuery instance members object.
     * @param $attributes {ng.IAttributes} An object containing normalized DOM element attributes.
     * @param loadingIndicatorBarController {LoadingIndicatorBarController} A new instance of the controller.
     */
    public link: ng.IDirectiveLinkFn = (
      scope: ng.IScope,
      element: ng.IAugmentedJQuery,
      attributes: ng.IAttributes,
      loadingIndicatorBarController: LoadingIndicatorBarController
    ) => {
      loadingIndicatorBarController.init(element);
    };

    /**
     * Create the directive.
     *
     * @class LoadingIndicatorBarDirective
     * @method Factory
     * @static
     * @return {ng.IDirectiveFactory} A function to create the directive.
     */
    public static Factory(): ng.IDirectiveFactory {
      return () => new LoadingIndicatorBarDirective();
    }
  }

  interface ILoadingIndicatorController {

  }

  export class LoadingIndicatorBarController implements ILoadingIndicatorController {

    public static $inject: string[] = ["$timeout"];

    private $element: ng.IAugmentedJQuery;
    private $loading: ng.IAugmentedJQuery;

    /**
     * Create the loading bar controller.
     *
     * @class LoadingIndicatorBarController
     * @param $timeout {ng.ITimeoutService} The $timeout service.
     * @constructor
     */
    constructor(
      private $timeout: ng.ITimeoutService
    ) { }

    /**
     * Initialize the controller.
     *
     * @class LoadingIndicatorBarController
     * @method init
     * @param $element {ng.IAugmentedJQuery} The JQuery instance members.
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    public init($element: ng.IAugmentedJQuery): ILoadingIndicatorController {
      //store reference the $element in this scope
      this.$element = $element;

      //create container element
      var container: ng.IAugmentedJQuery = angular.element("<div class=\"loading-container\">");

      //append loading indicator bar
      this.$loading = angular.element("<div class=\"loading\">");
      container.append(this.$loading);

      //append container
      this.$element.append(container);

      return this;
    }

    /**
     * Hide the loading bar.
     *
     * @class LoadingIndicatorBarController
     * @method hide
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    public hide(): ILoadingIndicatorController {
      this.$loading.css({
        opacity: 0
      });
      this.$timeout(() => {
        this.$element.addClass("ng-hide");
      }, 3000);
      return this;
    }

    /**
     * Set the width of the bar.
     *
     * @class LoadingIndicatorBarController
     * @method setWidth
     * @param width {number} The percentage width of the loading indicator bar.
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    public setWidth(width: number): ILoadingIndicatorController {
      this.$loading.css({ width: `${width}%` });
      return this;
    }

    /**
     * Show the loading indicator.
     *
     * @class LoadingIndicatorBarController
     * @method show
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    public show(): ILoadingIndicatorController {
      this.$element.removeClass("ng-hide");
      this.$loading.css({ opacity: 1 });
      return this;
    }
  }