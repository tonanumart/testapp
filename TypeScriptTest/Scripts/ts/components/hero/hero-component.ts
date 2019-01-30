import { HerosComponentController } from './hero-controller';

export class HerosComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;

    constructor() {
      console.log("HerosComponent constructor");
      this.controller = HerosComponentController;
      debugger;
      console.log("HerosComponent ==> HerosComponentController ok!");
      this.controllerAs = "$ctrl";
      this.template = `
        <ul>
          <li ng-repeat="hero in $ctrl.heros">{{ hero.name }}</li>
        </ul>
      `;
    }
}