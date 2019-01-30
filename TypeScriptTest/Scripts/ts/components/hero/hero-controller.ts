import { IHero, HEROS } from "../../models/hero";


export class HerosComponentController implements ng.IComponentController {

    public heros: IHero[];

    constructor() {
        console.log("HerosComponentController constructor");
    }

    public $onInit () {
      this.heros = HEROS;
      console.log("HerosComponentController onInit");
    }
  }