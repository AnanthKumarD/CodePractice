// https://www.geektrust.in/coding-problem/backend/cricket

var Team =  { 
	"Lengaburu": 
    {
      "clear": "BATS",
      "cloudy": "BOWLS",
      "day": "BATS",
      "night": "BOWLS"
    },
    "Enchai":{
      "clear": "BOWLS",
      "cloudy": "BATS",
      "day": "BOWLS",
      "night": "BATS"
    }
}
//Taking the Weather and Day/Night condition from the command prompt while running
var param1 = process.argv[2] , param2 = process.argv[3];

//Randomly choose the team
var tossDecider = (Math.floor(Math.random() * 2) == 0) ? 'Lengaburu' : 'Enchai';

if((Team[tossDecider][param1]  && Team[tossDecider][param2]) == "BOWLS"){	
	console.log(tossDecider +' Win toss and BOWLS')
}else{
	console.log(tossDecider +' Win toss and BATS')
}

