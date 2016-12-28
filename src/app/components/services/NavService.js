(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
//    var menuItems = [
//      {
//        name: 'Dashboard',
//        icon: 'dashboard',
//        sref: '.dashboard'
//      },
//      {
//        name: 'Profile',
//        icon: 'person',
//        sref: '.profile'
//      },
//      {
//        name: 'Table',
//        icon: 'view_module',
//        sref: '.table'
//      }
//    ];
      var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Users',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Terminal',
        icon: 'view_module',
        sref: '.terminals'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
