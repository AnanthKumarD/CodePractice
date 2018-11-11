var _details = {
	"space" : "gorilla",
	"land" : "panda",
	"water" : "octopus",
	"ice" : "mammoth",
	"air" : "owl",
	"fire" : "dragon"
}

// var inputData = [
// 	{ "input": [ "Air", "oaaawaala" ]},
// 	{ "input": [ "Land", "a1d22n333a4444p" ]},
// 	{ "input": [ "Ice", "zmzmzmzaztzozh" ]}
// ]

var inputData = [
	{ "input": [ "Air", "Let’s swing the sword together" ] },
	{ "input": [ "Land", "Die or play the tame of thrones" ] },
	{ "input": [ "Ice", "Ahoy! Fight for me with men and money" ] },
	{ "input": [ "Water", "Summer is coming" ] },
	{ "input": [ "Fire", "Drag on Martin!"  ] }
]

//King Shan need 3 max votes to rule the 7 kingdom

var toWin = 3;

inputData.forEach(function(inputValue, i) {
	//Based on the input finding the key in _details object

	var getStringCountOfDetailsObjectVal =  getWordCount(_details[inputValue["input"][0].toLowerCase()]);


	var getCountOfInputVal = getWordCount(inputValue["input"][1].toLowerCase())
    inputValue["passed"] = true;
	Object.keys(getStringCountOfDetailsObjectVal).forEach(function(key) {
		var value = getStringCountOfDetailsObjectVal[key];
		if(getCountOfInputVal[key] != undefined && getCountOfInputVal[key] >= value ){
			//cconsole.log('Value present');
		}else{
			console.log('notpresent');
			inputValue["passed"] = false;
		}
	});
});
var d = ""
inputData.forEach( function(element, index) {
    if(element.passed){
    	d = d + element["input"][0] + ',' 
    }
});

console.log('Allies of Ruler',d);

function getWordCount(data){
	var result = {};
	for(i = 0 ; i < data.length ; i++){
		if(result[data[i]]){
			result[data[i]] += 1;
		}else{
			result[data[i]] = 1;
		}
	}
	return result;
}