export class AppComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.templateUrl = './app/app.html'
        this.controller = AppController;
        // this.template = `
        //     <div>
        //         <h1>Deii</h1>
        //         <div class="content">
        //             <ui-view></ui-view>
        //         </div>
        //
        //     </div>
        // `;
    }

}

export class AppController implements ng.IComponentController {
    constructor() {
        "ngInject";
    }

    // api:object = {
    //   someKey: 123
    // };
    //
    // someMethod(event) {
    //     this.api = event.message;
    // }

    $onInit() {

    }

    $onChanges(changes: ng.IOnChangesObject) {

    }
}