import * as angular from 'angular';

export class ChildComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: ng.IControllerConstructor;
    bindings: {[boundProperty: string]: string};
    controllerAs: string;
    constructor() {
        this.templateUrl = './app/components/child.html'
        this.bindings = {
            api: '<',
            onUpdate: '&'
        };

        this.controller = ChildController;
        this.controllerAs = 'child';
    }
}

interface IChildComponentBindings {
    api: object;
    onUpdate: () => any
}

interface IChildControllerBindings extends IChildComponentBindings {
    doSomething(): void;
}

export class ChildController implements IChildControllerBindings {
    public api: object;
    public onUpdate: any;
    constructor() {
        "ngInject"
    }

    $onChanges(changes) {
        console.log('Clled');
        if(changes.api) {
            this.api = angular.copy(this.api);
        }
    }

    doSomething() {
        console.log('clikced')
        this.onUpdate({
            $event: {
                message: this.api
            }
        });
    }
}