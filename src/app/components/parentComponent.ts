import * as ts from "typescript/lib/tsserverlibrary";
import EventSender = ts.server.EventSender;

export class ParentComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;
    controllerAs: string
    constructor() {
        this.template = `
            <div>
                <h1>Parent API: {{parent.api.someKey }}</h1>
                <child 
                  api="api"
                  on-update="parent.someMethod($event);">
                </child>
            </div>
        `;
        this.controller = ParentController;
        this.controllerAs = 'parent';
    }
}

export class ParentController implements ng.IComponentController {
    constructor() {
        "ngInject";
    }

    $onInit() {

    }

    $onChanges(changes: ng.IOnChangesObject) { }

    api:object = {
        someKey: 123
    }

    someMethod (event) {
        this.api = event.message;
    }
}