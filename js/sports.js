(function () {
    'use strict';

    angular
        .module('sports', [ ]);
})();

(function() {
    'use strict';

    angular
        .module('sports')
        .controller('sportsController', sportsController);

    
    function sportsController($http){
        var vm = this;
        
        vm.preview = preview;
        activate();
            
        function activate() {
            $http.get('js/sports.json').success(function(data) { 
               vm.sportData = data.sportData;
            });
        }
        
        function preview(index){
            if (index == vm.picked) {
                vm.picked=null;
                return;
            }
            vm.picked = index;
            console.log(index);
        }
    }
})();
