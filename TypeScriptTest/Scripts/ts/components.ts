import { HerosComponent } from './components/hero/hero-component';
import { ComapnyComponent } from './components/company/company-component';


export class Components {

    public static build(app: ng.IModule) {
        app.component("heros", new HerosComponent());
        app.component("company",new ComapnyComponent());
    }
}