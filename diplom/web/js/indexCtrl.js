app.controller('indexCtrl', function($scope, $routeParams, $location, $rootScope) {

	$rootScope.pageList = [
		{id: 1. , title: '1. Титульный лист'},
		{id: 2. , title: '2. Введение'},
		{id: 3  , title: '3. Эксперимент № 1: Введение'},
		{id: 4. , title: '4. Эксперимент № 1'},
		{id: 5  , title: '5. Эксперимент № 1: Резюме'},
		{id: 6  , title: '6. Эксперимент № 2: Введение'},
		{id: 7. , title: '7. Эксперимент № 2'},
		{id: 8. , title: '8. Эксперимент № 2: Резюме'},
		{id: 9. , title: '9. О Павел Фиттс'},
		{id: 10 , title: '10. Эксперимент № 3: Введение'},
		{id: 11 , title: '11. Эксперимент № 3'},
		{id: 12 , title: '12. Эксперимент № 3: Резюме'},
		{id: 13 , title: '13. Закон Фиттса'},
		{id: 14 , title: '14. Эксперимент № 4: Введение'},
		{id: 15 , title: '15. Эксперимент № 4'},
		{id: 16 , title: '16. Эксперимент № 4: Резюме'},
		{id: 17 , title: '17. Закон Фиттса (подробно)'},
		{id: 18 , title: '18. Следствие'},
		{id: 19 , title: '19. Первая мышь'},
		{id: 20 , title: '20. Эксперимент № 5: настройка'},
		{id: 21 , title: '21. Эксперимент № 5: Введение'},
		{id: 22 , title: '22. Эксперимент № 5'},
		{id: 23 , title: '23. Эксперимент № 5: Резюме'},
		{id: 24 , title: '24. Закон Фиттса (более подробно)'},
		{id: 25 , title: '25. Границы экрана'},
		{id: 26 , title: '26. Меню'},
		{id: 27 , title: '27. Меню, продолжение'},
		{id: 28 , title: '28. Углы экрана'},
		{id: 29 , title: '29. Заключение'},
		{id: 30 , title: '30. Спасибо за внимание'}
	]

	$rootScope.page = {
		current: 1,
		prev: 0,
		next: 2,
		min: 1,
		max: $rootScope.pageList.length,
		init: function () {
			this.current = +$location.path().substring(1)
			if (this.current == '')
				this.current = 1
			this.prev = this.current - 1
			this.next = this.current + 1
		}
	}

	$rootScope.page.init();
	var defRezult = [
		{type1:[], type2:[], type0:[]},
		{type1:[], type2:[], type0:[]},
		{type1:[], type2:[], type0:[]},
		{type1:[], type2:[], type0:[], type3:[]},
		{type1:[], type2:[], type0:[]}];

	$rootScope.rezult = ($rootScope.rezult) ? $rootScope.rezult : defRezult;

	$rootScope.countAbs = function (arr) {
		var sum = 0;

		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}

		var rez = Math.round(sum / arr.length);

		return (rez) ? rez : '?';
	}


	$rootScope.selectModel = $rootScope.pageList[$rootScope.page.current - 1].id;
	$rootScope.changeSelect = function (arg) {
		location.hash = '#/' + arg;
	}

	var rezNum = 0;
	function logData (data) {
		$rootScope.rezult[rezNum] = data;
		console.log($rootScope.rezult);
	}

	switch($rootScope.page.current) {
		case 4:
			rezNum = 0;
			var exp1 = new Experiment({callback: logData});
			break;
		case 7:
			rezNum = 1;
			var exp2 = new Experiment({changeDistance: true, callback: logData});
			break;
		case 11:
			rezNum = 2;
			var exp3 = new Experiment({size: true, callback: logData});
			break;
		case 15:
			rezNum = 3;
			var exp4 = new Experiment({changeDistance: true, size: true, callback: logData});
			break;
	}

});