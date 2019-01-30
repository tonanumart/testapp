
//import "angular-resource";

export class Factories {

  private static COMPANIES: string = "/api/companies/:id.json";

  public static build(app: ng.IModule) {

    /*app.factory("companiesResource", ["$resource", function($resource: ng.resource.IResourceService) {
      return $resource(Factories.COMPANIES, {
        "id": "@id"
      });
    }]);*/
  }
}