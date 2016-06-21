function initStates($stateProvider, $ocLazyLoadProvider) {
    $stateProvider
        .state('landing', {
            url: '/',
            views: {
                'layout': {
                    controller: 'calendarCtrl',
                    templateUrl: '/app/modules/calendar/views/birthdays.html',
                    resolve: resolveModule (['calendarCtrl'])
                }
            }
        });
    
    function resolveModule(moduleName) {
        return {
            loadModules: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load(moduleName);
            }]
        }
    }
}