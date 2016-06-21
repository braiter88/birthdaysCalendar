(function () {
    
    angular
        .module('calendarCtrl', [])
        .controller('calendarCtrl', ['$scope', calendarCtrl])
        .filter('formatName', formatName);
    
        function calendarCtrl($scope) {
            $scope.birthdays = null;
            $scope.calendar = [];

            $scope.constructCalendar = function() {

                $scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
                $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                $scope.firstDayOfYear = new Date($scope.year);

                var calendar = [],
                    JSONobj = null,
                    birthdays = null;

                if ($scope.birthdays && $scope.birthdays.length) {
                    try {
                        JSONobj = JSON.parse($scope.birthdays);
                        birthdays = JSONobj.map(function(item){
                            return new Date(Date.parseExact(item.birthday, "M/d/yyyy")).getTime();
                        });
                    } catch(e) {
                        alert("Please, provide correct format for JSON data\n\n"+e);
                    }
                }

                return $scope.prepareCalendar(calendar, JSONobj, birthdays);
            };

            $scope.prepareCalendar = function(calendar, JSONobj, birthdays){
                for (var month = 0; month < 12; month++) {
                    calendar[month] = [];

                    for (var days = 0; days < new Date(new Date($scope.firstDayOfYear).getFullYear(), month + 1, 0).getDate(); days++) {
                        var day = new Date(
                            new Date($scope.firstDayOfYear).getFullYear(), month, days + 1
                        );

                        var persons = [];

                        if (birthdays.indexOf(day.getTime()) != -1) {
                            persons = JSONobj.filter(function(item){
                                return new Date(Date.parseExact(item.birthday, "M/d/yyyy")).getTime() == day.getTime();
                            });
                        }

                        calendar[month].push({
                            dayOfTheWeek: day.getDay(),
                            persons: persons
                        });
                    }
                }

console.log(calendar);
                return calendar;
            };

            $scope.getCalendar = function() {
                $scope.calendar = $scope.constructCalendar();
            };

            $scope.formatName = function(name){
                return name.replace(/\w(?=\w)/gi,'');
            }
        }

        function formatName(){
            return function (name) {
                return name.replace(/[a-z]/g,'');
            }
        }
    
})();


/*[
 {
 "name": "Tyrion Lannister",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }, {
 "name": "Boston Orlando",
 "birthday": "12/02/2016"
 }
 ]
* */