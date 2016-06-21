(function () {

    angular
        .module('app', ['ui.router',
            'oc.lazyLoad',
            'ngResource',
            'uiRouterStyles'])

        .config(mainConfig);

            mainConfig.$inject = [
                '$interpolateProvider',
                '$ocLazyLoadProvider',
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider'
            ];
    
            function mainConfig($interpolateProvider, $ocLazyLoadProvider,
                                $stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider.html5Mode(true).hashPrefix('!');
                $interpolateProvider.startSymbol('[[').endSymbol(']]');
                initModules($ocLazyLoadProvider);
                initStates($stateProvider);
                $urlRouterProvider.otherwise('/');
            }

})();