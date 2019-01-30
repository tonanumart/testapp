import { ICompany } from "../../models/company";
import { CompanyResource } from "../../services/company.resource";

export class ComapnyComponentController implements ng.IComponentController {

    public static $inject: string[] = ["companiesResource"];
    public company: ICompany;

    constructor(public companiesResource: CompanyResource) {
        console.log("ComapnyComponentController constructor");
    }

    public $onInit () {
      console.log("ComapnyComponentController onInit");
      this.company = {
         Name : "Anumart",
         Id : -1
      };
    }

    public getCompany(id: string) {
      this.companiesResource.get(id).then((value)=>{
          debugger;
          this.company = value;
      });
    }

  }