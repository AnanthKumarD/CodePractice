/*
	Rules:-
		Rule #1. The Power Rule: Each Lengaburu army unit is 2X more powerful than their Falcornia counterpart. 
			Example: 1
				Lengaburu Horse can counter 2 Falicornia Horses, 1 Lengaburu Elephant can counter 2 Falicornia Elephants and so on.
		
		Rule #2. The Like-to-Like Rule: Falicornia Horses battalion should be countered with Lengaburu horses battalion,
			Elephants with elephants and so on. Except when the battalion is completely exhausted (see Rule #3).
		 	Example: If Falicornia deploys 2 H, 4 E, 0 AT and 6 SG, Lengaburu should counter with 1 H, 2 E, 0 AT and 3 SG

		Rule #3. The Substitution Rule: When all units of a particular Lengaburu battalion is exhausted, an adjacent battalion can be used. 1 Elephant can replace 2 Horses (and 2 Horses can replace 1 Elephant), 1 Armoured Tank can replace 2 Elephants (and vice versa) and 1 Sling Gun can replace 2 Armoured Tanks (and vice versa). Note that only adjacent battalions can be used for substituting. Horses cannot replace Sling Guns as they are not adjacent.
			Example: If Falicornia deploys 204 H, 20 E, 0 AT and 0 SG, Lengaburu should counter with 100 H, 11 E (1 Elephant has substituted 2 Horses which got exhausted at 100)
			Example: If Falicornia deploys 0 H, 0 E, 14 AT and 12 SG, Lengaburu should counter with 0 H, 0 E, 9 AT and 5 SG (2 AT has substituted for 1 SG which got exhausted at 5) 


		Rule #4. The Substitution Choice Rule: When there are 2 possibilities of substitution, then always a lower ranked battalion should be used (Horses is lower than Elephants, is lower than Armoured Tanks, is lower than Sling Guns)
			Example: If Falicornia deploys 50 H, 104 E, 6 AT and 2 SG, Lengaburu should counter with 29 H, 50 E, 3 AT and 1 SG (4 Horses substituted for 2 Elephants instead of the higher ranked Armoured Tanks)


	Input: Falicornia attacks with 100 H, 101 E, 20 AT, 5 SG
	Expected Output: Lengaburu deploys 52 H, 50 E, 10 AT, 3 SG and wins

	Input: Falicornia attacks with 150 H, 96 E, 26 AT, 8 SG
	Expected Output: Lengaburu deploys 75 H, 50 E, 10 AT, 5 SG and wins

	Input: Falicornia attacks with 250 H, 50 E, 20 AT, 15 SG
	Expected Output: Lengaburu deploys 100 H, 38 E, 10 AT, 5 SG and loses
*/


var details = [
	{
		planet: "Lengaburu",
		king : "King Shan",
		H : 100,
		E : 50,
		AT : 10,
		SG : 5
	},
	{
		planet: "Falicornia",
		king : "Al Falcone" ,
		H : 300,
		E : 200,
		AT : 40,
		SG : 20
	}
]
var a = []
function _twoPlanets(horse,elephants,armouredTanks,slingGuns){
	var sentFromEnymy = {}
	for( argData in arguments){
		var b = arguments[argData].split(/([0-9]+)/).filter(Boolean);
		sentFromEnymy[b[1]] = parseInt(b[0]);
	}

	for(falicorniaForce in sentFromEnymy){
		totalForce = details[0][falicorniaForce];

		var usedArmy = sentFromEnymy[falicorniaForce]/2 
		var rem = totalForce - usedArmy;

		usedArmy = rem > 0 ? Math.ceil(usedArmy) : Math.floor(usedArmy);
		rem = rem > 0 ? Math.floor(rem) : Math.floor(rem);
		
		a.push({
			"weaponsUsed" : falicorniaForce,
			"usedArmy" : usedArmy < totalForce ? usedArmy : totalForce,
			"remaining" : rem
		});
	}

	return a;
}


//var  b =_twoPlanets("100H","101E","20AT","5SG")
var  b =_twoPlanets("150H","96E","26AT","8SG")
//var  b =_twoPlanets("90H","96E","40AT","20SG")
//var  b = _twoPlanets("250H","50E","20AT","15SG");
//var  b = _twoPlanets("300H","200E","40AT","20SG");
console.log('before>>>>',b)
for( i = 0 ; i < b.length ; i++){
	if(b[i-1] == undefined && i ==0 ){
		/*
			if index 0 
				Prev val is undefined ,
				currentval.remaining check if it is -ve
					if yes
						so calculate the b[i+1].remaining
		*/
		//console.log('Before index', i ,'\n Current',b[i] ,'\n Ncext',b[i+1] );
		
		if( b[i].remaining < 0 && b[i+1].remaining > 0){
			// accessing the power from next items
			b[i+1].usedArmy = b[i+1].usedArmy - Math.floor( b[i].remaining / 2 );
			b[i+1].remaining = b[i+1].remaining + Math.floor( b[i].remaining / 2 );

			//updating the Current Status of remaing Army
			b[i].remaining = Math.abs(Math.floor(b[i+1].remainig * 2)) < b[i+1].remaining ? 0 : 0; // make ternary condition 0 to correct value 
		}
		console.log('After index', i ,'\n Current',b[i] ,'\n Ncext',b[i+1] );
	}
	
	if(i > 0 && i < b.length-1){
		/*
			Currentval.remaining check if it is -ve

				Check Prev val is +ve ,
					if yes
						get b[i-1].remaining * 2
	
				Still current val is -ve then go for Next
					Check Next val is +ve
						if yes
							get b[i+1].remaining / 2

				Check "Prev" || "Next"  val is -ve ,
					dont do any operations

				
		*/

		if(b[i].remaining <=0 && b[i+1].remaining >= 0){
			console.log('last is +ve and current is -ve')


		}

		
		console.log('index', i ,'\n Prev',b[i-1] ,'\n Current',b[i] ,'\n Next',b[i+1] );
	}

	if(b[b.length-1] != undefined && i == b.length-1 ){
		/*
			if index last 
				Prev val is not undefined ,
				currentval.remaining check if it is -ve
					if yes
						so calculate the b[i+1].remaining
				next val is undefined
		*/
		//console.log('index', i ,'\n Prev',b[i-1] ,'\n Current',b[i] ,'\n Next',b[i+1] );
	}
	
	//Step 1 : Before

	//Step 2 : Now

	//Step 3 : After
}

