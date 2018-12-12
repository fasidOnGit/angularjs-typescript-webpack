import * as angular from 'angular';
import {StateProvider, UrlRouterProvider} from "angular-ui-router";


function routeConfig($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
    "ngInject";
    $stateProvider
        .state('app', {
            redirectTo: 'app.home',
            abstract: true,
            component: 'app'
        })
        .state('app.home', {
            url: '/',
            component: 'parent'
        });

    $urlRouterProvider.otherwise('/')
}


const Routes: ng.IModule = angular.module(
    'app.routes', [
        'ui.router'
    ]
    ).config(routeConfig);

export default Routes.name;