import { ICompany } from "../models/company";
import { IHttpResponse, IPromise } from "angular";


export class CompanyResource {

    public static $inject: string[] = ["$http"];

    private static COMPANIES: string = "api/company/";

    constructor(public $http: ng.IHttpService){

    }

    public get(id : string): IPromise<ICompany> {

        return this.$http.get(CompanyResource.COMPANIES+id).then((value : IHttpResponse<ICompany>) =>{
            return value.data;
        });
       /* return {
            id : 99,
            name : "Anumart IV"
        }*/
    }

}