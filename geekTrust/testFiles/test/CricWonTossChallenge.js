var Team =  { 
	"Lengaburu": 
    {
      "Clear": "BATS",
      "Cloudy": "BOWLS",
      "Day": "BATS",
      "Night": "BOWLS"
    },
    "Enchai":{
      "Clear": "BOWLS",
      "Cloudy": "BATS",
      "Day": "BOWLS",
      "Night": "BATS"
    }
}
var param1 = process.argv[2] , param2 = process.argv[3];
var tossDecider = (Math.floor(Math.random() * 2) == 0) ? 'Lengaburu' : 'Enchai';

if((Team[tossDecider][param1]  && Team[tossDecider][param2]) == "BOWLS"){	
	console.log(tossDecider +' Win toss and BOWLS')
}else{
	console.log(tossDecider +' Win toss and BATS')
}

