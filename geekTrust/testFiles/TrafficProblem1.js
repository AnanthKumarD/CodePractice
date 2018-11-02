/*
Orbit options:
	Orbit 1 - 18 mega miles & 20 craters to cross
	Orbit 2 - 20 mega miles & 10 craters to cross
Vehicle options:
	Bike - 10 megamiles/hour & takes 2 min to cross 1 crater
	Car - 20 mm/hour & takes 3 min to cross 1 crater
	Tuktuk - 12 mm/hour & takes 1 min to cross 1 crater
Weather conditions (affects the number of craters in an orbit):
	Sunny - craters reduce by 10%. Car, bike and tuktuk can be used in this weather.
	Rainy - craters increase by 20%. Car and tuktuk can be used in this weather.
	Windy - no change to number of craters. Car and bike can be used in this weather.


	Input Criteria:-
		Input: Weather is Sunny
		Input: Orbit1 traffic speed is 12 megamiles/hour
		Input: Orbit2 traffic speed is 10 megamiles/hour
		Expected Output: Vehicle TukTuk on Orbit1
	
	Input: Weather is Windy
		Input: Orbit1 traffic speed is 14 megamiles/hour
		Input: Orbit2 traffic speed is 20 megamiles/hour
		Expected Output: Vehicle Car on Orbit2

*/


var bike 	= { "speed" : 10 , 'cratersTocross' : 2 };
var tuktuk 	= { "speed" : 12 , 'cratersTocross' : 1 };
var car 	= { "speed" : 20 , 'cratersTocross' : 3 };
var vehicles = { bike, tuktuk , car }

var sunny = { "craters" : -10 , vehiclesAllowed : [ "car", "tuktuk", "bike" ] };
var rainy = { "craters" : 20 , vehiclesAllowed : [ "car", "tuktuk" ] };
var windy = { "craters" : 0 , vehiclesAllowed : [ "car", "bike" ] };
var weatherList = {  sunny, rainy , windy } ;

var finalResult = [];

var orbits = [ { "from": 'orbit1', "speed": 18, 'craters' : 20 } , { "from": 'orbit2', "speed": 20, 'craters' : 10 } ];

function _trafficProblem1(weatherData, orbit1, orbit2){
	var orbitVal = { "orbit1" : orbit1, "orbit2" : orbit2 };
	
	weatherList[weatherData]["vehiclesAllowed"].forEach(function(val,i){

		orbits.forEach(function(orbit,orbitIndex){

			var considerSpeed = vehicles[val].speed <= orbitVal[orbit.from] ? vehicles[val].speed : orbitVal[orbit.from];

			var eff  = orbit.craters+(orbit.craters * (weatherList[weatherData]['craters']/100) );

			var finalValues = (orbit.speed / considerSpeed * 60) + (vehicles[val].cratersTocross * eff)
			
			constructedData = 'Vehicle ' + val + ' on ' + orbit.from;

			finalResult.push({ speed: finalValues , finalResult: constructedData});

		})
	})

	return finalResult; 
}


var d = _trafficProblem1('sunny',12,10);
//var d = _trafficProblem1('rainy',14,20);

var minimum = d[0].speed;
var expectedOutPut;

for ( i = 1 ; i < d.length ; i++ ) {
	if ( d[i].speed < minimum ) {
		minimum = d[i].speed;
		expectedOutPut = d[i].finalResult;
	}
}
console.log('Expected Output: ',expectedOutPut)