import { HerosComponent } from './components/hero/hero-component';
import { ComapnyComponent } from './components/company/company-component';
import { TestKendoComponent } from './components/kendo/test-kendo.component';


export class Components {

    public static build(app: ng.IModule) {
        app.component("heros", new HerosComponent());
        app.component("company",new ComapnyComponent());
        app.component("testKendo", new TestKendoComponent());
    }
}