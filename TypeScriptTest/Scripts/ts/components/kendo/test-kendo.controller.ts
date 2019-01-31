/// <reference path="../../../../node_modules/@types/jquery/JQuery.d.ts" />
/// <reference path="../../../../node_modules/@types/kendo-ui/index.d.ts" />

interface ItemsViewModel {
    value : string;
    text : string;
}

export class TestKendoController {


    public options: kendo.ui.DropDownListOptions;
    public myData : ItemsViewModel[];

    constructor(){
        this.myData = [
            { value : "1" , text  : "1" },
            { value : "2" , text  : "2" },
        ];
        this.options = {
            dataTextField : "text",
            dataValueField : "value",
            dataSource : new kendo.data.DataSource({
              data : this.myData
            }),
            change : (e : any) => {
                console.log(e);
            }
        };
    }
}