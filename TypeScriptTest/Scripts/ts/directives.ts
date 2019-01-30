
import { LoadingIndicatorBarDirective } from "./directives/loading-indicator-bar";

export class Directives {

    public static build(app: ng.IModule) {
        app.directive("loadingIndicatorBar", LoadingIndicatorBarDirective.Factory());
    }
}