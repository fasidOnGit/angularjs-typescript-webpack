import * as angular from 'angular';

function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
    "ngInject";
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('green');
}

const Theme: ng.IModule = angular.module('app.themes', [
    'ngMaterial',
    'ngAnimate'
]).config(themeConfig);

export default Theme.name;