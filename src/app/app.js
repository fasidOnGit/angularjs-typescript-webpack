import parentComponent from './parentComponent';

var childComponent = {
  bindings: {
    api: '<',
    onUpdate: '&'
  },
  template: `
  	<div>
      Child component
      <input ng-model="$ctrl.api.someKey">
      <button ng-click="$ctrl.doSomething();">
        Click me
      </button>
    </div>
  `,
  controller: function(){
    var ctrl = this;
    ctrl.$onChanges = function (changes) {
      if (changes.api) {
        ctrl.api = angular.copy(ctrl.api);
      }
    };
    ctrl.doSomething = function () {
      ctrl.onUpdate({
        $event: {
          message: ctrl.api
        }
      });
    };
  }
};

angular.module('demoApp', [])
  // .component('parent', parentComponent)
  .component('child', childComponent);
