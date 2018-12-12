import * as angular from 'angular';
import {ParentComponent} from "./parentComponent";
import {ChildComponent} from "./childComponent";


const Components: ng.IModule = angular.module(
    'app.component',
    []
).component(
    'parent',
    new ParentComponent()
).component('child', new ChildComponent());

export default Components.name;