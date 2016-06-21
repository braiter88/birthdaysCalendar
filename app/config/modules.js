function initModules($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [

            /*Controllers*/
            {
                name: 'calendarCtrl',
                files: ['/app/modules/calendar/controllers/calendarCtrl.js']
            }


            /*Providers*/

            /*Filters*/

            
        ]
    });
}