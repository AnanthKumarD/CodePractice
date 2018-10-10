// Mini IPL
// 8 teams
// 20over match

// 8 team play 2 match per side
// if its weekend schedule 2 matches


var teamDetails = require('./teamDetails.json');

var  playerAccuracy = [
	{ "Virat Kholi" : { 0 : 0.5 , 1 : 0.30 , 2 : 0.25 , 3 : 0.10 ,4 : 0.15 , 5 : 0.01 , 6 : 0.09, 7 : 0.05 } },
	{ "Dhoni" : { 0 : 0.10 , 1 : 0.40 , 2 : 0.20 , 3 : 0.05 ,4 : 0.10 , 5 : 0.01 , 6 : 0.04, 7 : 0.10 } },
	{ "Bhumrah" : { 0 : 0.20 , 1 : 0.30 , 2 : 0.15 , 3 : 0.05 ,4 : 0.05 , 5 : 0.01 , 6 : 0.04, 7 : 0.20 } },
	{ "Gyale" : { 0 : 0.30 , 1 : 0.25 , 2 : 0.05 , 3 : 0.00 ,4 : 0.05 , 5 : 0.01 , 6 : 0.04, 7 : 0.30 } },
	{ "DB Velleyrs" : { 0 : 0.05 , 1 : 0.10 , 2 : 0.25 , 3 : 0.10 ,4 : 0.25 , 5 : 0.01 , 6 : 0.14, 7 : 0.10 } },
	{ "Bhuvi" : { 0 : 0.10 , 1 : 0.15 , 2 : 0.15 , 3 : 0.10 ,4 : 0.20 , 5 : 0.01 , 6 : 0.19, 7 : 0.10 } },
]
// var a = teamDetails.TeamAndPlayers
// for(i = 0 ; i < a.length ; i++){
// 	for( j = i+1 ; j< a.length; j++){
// 		console.log(a[i].shortName,'------',a[j].shortName ,'_--------',i,'------------',j)
// 	}

// }
// 	console.log(a ,'+++++++++++++++++++++++++++++++')


// Array.prototype.random = function () {
//   return this[Math.floor((Math.random()*this.length))];
// }

 
for(i = 1 ; i <= 56 ; i++){
	var currentDay = new Date();
	var nextDay = new Date(currentDay);
	nextDay.setDate(currentDay.getDate()+i);
	
	var n = nextDay.getDay();
	// 0 - sunday , 6 - saturday

	if( n == 6 || n == 0){ 
		console.log(nextDay,'nextDay----Weekend',i); 
	} else {
		console.log(nextDay,"Its not weekend",i);
	}
}





