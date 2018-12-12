import * as angular from 'angular';
import Routes from './routes';
import Theme from './themes';
import Components from './components';
import {AppComponent} from "./app.component";

const App: ng.IModule = angular.module(
    'app', [
        'ngMessages',
        'ngAria',
        'ngAnimate',
        Routes,
        Theme,
        Components
    ]
).component('app',new AppComponent());