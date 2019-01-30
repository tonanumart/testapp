

import { CompanyResource } from "./services/company.resource";

export class Factories {

  public static build(app: ng.IModule) {
    app.service("companiesResource",CompanyResource);
  }
}