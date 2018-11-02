/*
Orbit options:
	Orbit 1 - 18 mega miles & 20 craters to cross
	Orbit 2 - 20 mega miles & 10 craters to cross
	Orbit 3 - 30 mega miles & 15 craters to cross
	Orbit 4 - 15 mega miles & 18 craters to cross
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
		Input: Orbit1 max traffic speed is 20 megamiles/hour
		Input: Orbit2 max traffic speed is 12 megamiles/hour
		Input: Orbit3 max traffic speed is 15 megamiles/hour
		Input: Orbit4 max traffic speed is 12 megamiles/hour
		Expected Output: Vehicle TukTuk to Hallitharam via Orbit1 and RK Puram via Orbit4
	
	Input: Weather is Windy
		Input: Orbit1 max traffic speed is 5 megamiles/hour
		Input: Orbit2 max traffic speed is 10 megamiles/hour
		Input: Orbit3 max traffic speed is 20 megamiles/hour
		Input: Orbit4 max traffic speed is 20 megamiles/hour
		Expected Output: Vehicle Car to RK Puram via Orbit3 and Hallitharam via Orbit4
*/


var possibilities = [
	{ "from" : "Hallitharam", "to" : "RK Puram" },
	{ "from" : "Hallitharam", "to" : "RK Puram" },
	{ "from" : "RK Puram", "to" : "Hallitharam" }
]

var bike 	= { "speed" : 10 , 'cratersTocross' : 2 };
var tuktuk 	= { "speed" : 12 , 'cratersTocross' : 1 };
var car 	= { "speed" : 20 , 'cratersTocross' : 3 };

var vehicles = { bike, tuktuk , car }

var sunny = { "craters" : -10 , vehiclesAllowed : [ "car", "tuktuk", "bike" ] };
var rainy = { "craters" : 20 , vehiclesAllowed : [ "car", "tuktuk" ] };
var windy = { "craters" : 0 , vehiclesAllowed : [ "car", "bike" ] };

var weatherList = {  sunny, rainy , windy } ;

var finalResult = [];

var orbits = [ 
	{ "from": 'orbit1', "speed": 18, 'craters' : 20 , "to" : "Hallitharam" } ,
	{ "from": 'orbit2', "speed": 20, 'craters' : 10 , "to" : "Hallitharam" } ,
	{ "from": 'orbit3', "speed": 30, 'craters' : 15 , "to" : "RK Puram" } ,
	{ "from": 'orbit4', "speed": 15, 'craters' : 18 , "to" : "Hallitharam" } 
];

function _trafficProblem1(weatherData, orbit1, orbit2, orbit3 , orbit4){
	
	var orbitVal = { "orbit1" : orbit1, "orbit2" : orbit2 , "orbit3" : orbit3 ,"orbit4" : orbit4 };

	weatherList[weatherData]["vehiclesAllowed"].forEach(function(val,i){

		orbits.forEach(function(orbit,orbitIndex){

			var considerSpeed = vehicles[val].speed <= orbitVal[orbit.from] ? vehicles[val].speed : orbitVal[orbit.from];

			var eff  = orbit.craters + (orbit.craters * (weatherList[weatherData]['craters']/100) );

			var finalValues = (orbit.speed / considerSpeed * 60) + (vehicles[val].cratersTocross * eff)
			
			constructedData = 'Vehicle ' + val + ' on ' + orbit.from;

			finalResult.push({ speed: finalValues , finalResult: constructedData , to : orbit.from , vehicalDetails : val , where : orbit.to });

		})
	})

	return finalResult; 
}

//var d = _trafficProblem1('sunny',20,12,15,12);
var d =  _trafficProblem1('windy',5,10,20,20);
//var d =  _trafficProblem1('rainy',20,12,15,20);

function chunk(arr, n) {
    return arr.reduce(function(p, cur, i) {
        (p[i/n|0] = p[i/n|0] || []).push(cur);
        return p;
    },[]);
}

var vehiclesOnAllOrbit = chunk(d, 4);
var constructedObject = [];

vehiclesOnAllOrbit.forEach( function(element, index) {
	for(i = 0 ; i < element.length - 1 ; i++){
		sum = element[i].speed + element[element.length - 1].speed;
		constructedObject.push({ constructedVal : 'Vehicle '+ element[i].vehicalDetails +' to '+ possibilities[i].from +' via '+element[i].to +' and '+ possibilities[i].to +' via '+ element[element.length - 1].to , speed : sum })
	}
});

var minimum = constructedObject[0].speed;
var expectedOutPut;

for ( i = 1 ; i < constructedObject.length ; i++ ) {
	if ( constructedObject[i].speed < minimum ) {
		minimum = constructedObject[i].speed;
		expectedOutPut = constructedObject[i].constructedVal;
	}
}
console.log('Expected Output: ',expectedOutPut)
