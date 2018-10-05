
/* 
  Criteria To Satisfy
    1. Batsmen change strike end of every over. They also change strike when they score a 1,3 or 5
    2. When a player gets out, the new player comes in at the same position.
    3. Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore an over is always 6 balls.
*/

var TeamList1 = 
  [
    {
      "name":"Kirat Boli" ,
      "ballsPlayed":0,
      "score" : 0 ,
      "strikeRate":{0: 0.05,1: 0.1,2: 0.25,3: 0.1,4: 0.25,5: 0.01,6: 0.14,7: 0.1}
    },
    {
      "name":"N S Nodhi",
      "ballsPlayed":0,
      "score" : 0,
      "strikeRate":{0: 0.05,1: 0.15,2: 0.15,3: 0.1,4: 0.2,5: 0.01,6: 0.19,7: 0.15}
    }
  ];
var TeamList2 = [ 
    { 
      "name":"Db Vellyers" ,
      "ballsPlayed":0,
      "score" : 0 ,
      "strikeRate":{0: 0.05,1: 0.1,2: 0.25,3: 0.1,4: 0.25,5: 0.01,6: 0.14,7: 0.1}
    },
    {
      "name":"H Mamla",
      "ballsPlayed":0,
      "score" : 0 ,
      "strikeRate":{0: 0.1,1: 0.15,2: 0.15,3: 0.1,4: 0.2,5: 0.01,6: 0.19,7: 0.10}
    }
  ] ;

var remainingOvers = 1 , noOfBallsPerOver = 6 , wicketsRemaining = 1 ; 
var strikeBatsMen,nonStrikeBatsMen,battingFirst;

// for(i=0;i<TeamList.length;i++){
  
// }

function runScoredByTeam(battingFirst){
  var runScored = 0; 
  strikeBatsMen =  battingFirst[0].name , nonStrikeBatsMen = battingFirst[1].name;
  for(j = 0;j < remainingOvers * noOfBallsPerOver ; j++){
    runScored = weightedRand(battingFirst[0].strikeRate);   
    if([1,3,5].indexOf(runScored)!=-1){
      sentences = runScored > 1 ? 'runs' : 'run';
      console.log(j/10, strikeBatsMen,' scores',runScored ,sentences)
      var temp = strikeBatsMen;
      strikeBatsMen = nonStrikeBatsMen;
      nonStrikeBatsMen = temp;
    }
    if([0,2,4,6].indexOf(runScored)!=-1){
      sentences = runScored > 0 ? 'runs' : 'run'
      console.log(j/10, strikeBatsMen,' scores',runScored ,sentences)
    }
    if([7].indexOf(runScored)!=-1){
      console.log(j/10, strikeBatsMen,' is OUT');
      break;
    }
  }
  return runScored;
}


function test(){
  targetScored = runScoredByTeam(TeamList1);
  console.log('targetScored',targetScored)


}

test();

function weightedRand(spec) {
  var i , j, table=[];
  for (i in spec) {
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return parseInt(table[Math.floor(Math.random() * table.length)]);
}




