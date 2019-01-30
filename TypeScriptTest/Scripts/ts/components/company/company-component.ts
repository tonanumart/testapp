import { ComapnyComponentController } from "./company-controller";

export class ComapnyComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    //public template: string;
    public templateUrl: string = "Template/Component/comapny-component.view.html";

    constructor() {
      //console.log("ComapnyComponent constructor");
      this.controller = ComapnyComponentController;
      //console.log("ComapnyComponent ==> ComapnyComponentController ok!");
      this.controllerAs = "$ctrl";
      /*this.template = `
        <hr />
        <input type="button" value="refresh" ng-click="$ctrl.getCompany('1')" >
        <ul>
          <li>Id : {{$ctrl.company.Id }} </li>
          <li>Name :  {{$ctrl.company.Name }}  </li>
        </ul>
      `;*/
    }
}