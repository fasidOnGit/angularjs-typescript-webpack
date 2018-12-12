import angular from 'angular';
var parentComponent = {
  controller: function (){
    var ctrl = this;
    ctrl.api = {
      someKey: 123
    };
    ctrl.someMethod = function (event) {
      ctrl.api = event.message;
    };
  },
  template: `
    	<div>
        <h1>Parent API: {{ $ctrl.api.someKey }}</h1>
        <child 
          api="$ctrl.api"
          on-update="$ctrl.someMethod($event);">
        </child>
      </div>
    `
};
export default parentComponent;
angular.module('demoApp').component(parentComponent)
