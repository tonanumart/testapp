import { TestKendoController } from "./test-kendo.controller";


export class TestKendoComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string = "Template/Component/test-kendo-component.view.html";

    constructor() {
      this.controller = TestKendoController;
      this.controllerAs = "vm";
    }
}