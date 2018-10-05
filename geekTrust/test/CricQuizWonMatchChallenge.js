
/* 
  Criteria To Satisfy
    1. Batsmen change strike end of every over. They also change strike when they score a 1,3 or 5
    2. When a player gets out, the new player comes in at the same position.
    3. Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore an over is always 6 balls.
*/
var batsmanList = ["Kirat Boli","N S Nodhi","R Rumrah","Shashi Henra"];
var totalScoreResult = [
{ "name":"Kirat Boli" ,"ballsPlayed":0, "score" : 0 , "strikeRate":{0: 0.05,1: 0.3,2: 0.25,3: 0.1,4: 0.15,5: 0.01,6: 0.09,7: 0.05}},
{"name":"N S Nodhi"   ,"ballsPlayed":0, "score" : 0 , "strikeRate":{0: 0.1,1: 0.4,2: 0.2,3: 0.05,4: 0.1,5: 0.01,6: 0.04,7: 0.1}},
{"name":"R Rumrah"    ,"ballsPlayed":0, "score" : 0 , "strikeRate":{0: 0.2,1: 0.3,2: 0.15,3: 0.05,4: 0.05,5: 0.01,6: 0.04,7: 0.2}},
{"name":"Shashi Henra","ballsPlayed":0, "score" : 0 , "strikeRate":{0: 0.3,1: 0.25,2: 0.05,3: 0.0,4: 0.05,5: 0.01,6: 0.04,7: 0.3}}];

var remainingOvers = 4 , noOfBallsPerOver = 6 , wicketsRemaining = 3 , runsRequired = 40 , runScored = 0; 
var strikeBatsMen =  batsmanList[0] , nonStrikeBatsMen = batsmanList[1];
var scoredValueOfPlayer = totalScoreResult[0].strikeRate;

for( var i= 0 ; i < remainingOvers ; i++){
  
  if( wicketsRemaining == 0){
    console.log('Lengaburu Lost the Match');
    break; 
  }
  if(runsRequired <=0){
    console.log('Lengaburu Won  the Match');
    runsRequired <=0;
    break; 
  }
  console.log(remainingOvers-i,' Overs left.' , runsRequired ,'runs to win')
  for(j = 1 ; j <= noOfBallsPerOver ; j++){
    if( wicketsRemaining == 0){
      console.log('Lengaburu Lost the Match');
      break; 
    }
    if( runsRequired <=0 ){
      console.log('Lengaburu Won  the Match');
      break;
    }
    runScored = weightedRand(scoredValueOfPlayer);
    if(batsmanList.indexOf(strikeBatsMen)!= -1 && runScored != 7){
      totalScoreResult[batsmanList.indexOf(strikeBatsMen)].score += runScored;
      totalScoreResult[batsmanList.indexOf(strikeBatsMen)].ballsPlayed += 1;
    }
    
    if([1,3,5].indexOf(runScored)!=-1){
      sentences = runScored > 1 ? 'runs' : 'run'
      console.log(i+j/10, strikeBatsMen,' scores',runScored ,sentences)
      runsRequired = runsRequired - runScored;
      var temp = strikeBatsMen;
      strikeBatsMen = nonStrikeBatsMen;
      nonStrikeBatsMen = temp;
      if(batsmanList.indexOf(nonStrikeBatsMen)!=-1 &&  totalScoreResult[batsmanList.indexOf(strikeBatsMen)]){
        scoredValueOfPlayer = totalScoreResult[batsmanList.indexOf(strikeBatsMen)].strikeRate;
      }
    }
    if([0,2,4,6].indexOf(runScored)!=-1){
      runsRequired = runsRequired - runScored;
      sentences = runScored > 0 ? 'runs' : 'run'
      console.log(i+j/10, strikeBatsMen,' scores',runScored ,sentences)
      if(totalScoreResult[batsmanList.indexOf(strikeBatsMen)]){
        scoredValueOfPlayer = totalScoreResult[batsmanList.indexOf(strikeBatsMen)].strikeRate;
      }
    }
    if([7].indexOf(runScored)!=-1){
      runsRequired = runsRequired - 0;
      nextBatsmenforStrike = ( batsmanList.length - wicketsRemaining)+1;
      wicketsRemaining = wicketsRemaining - 1;
      console.log(i+j/10, strikeBatsMen,' is OUT')
      totalScoreResult[batsmanList.indexOf(strikeBatsMen)].ballsPlayed += 1;
      totalScoreResult[batsmanList.indexOf(strikeBatsMen)].out = "out";
      strikeBatsMen = batsmanList[nextBatsmenforStrike];
      if(totalScoreResult[batsmanList.indexOf(strikeBatsMen)]){
        scoredValueOfPlayer = totalScoreResult[batsmanList.indexOf(strikeBatsMen)].strikeRate;
      }
    }
  }
  temp = strikeBatsMen;
  strikeBatsMen = nonStrikeBatsMen;
  nonStrikeBatsMen = temp;
}
console.log('\n');

totalScoreResult.forEach(function(v,i){
  delete v.strikeRate
  if(v.out){
    console.log(v.name ,'-',v.score,'(',v.ballsPlayed,' balls)')
  }else if(v.name == strikeBatsMen || v.name == nonStrikeBatsMen) {
    console.log(v.name ,'-',v.score,'*(',v.ballsPlayed,' balls)')
  }
})


function weightedRand(spec) {
  var i , j, table=[];
  for (i in spec) {
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return parseInt(table[Math.floor(Math.random() * table.length)]);
}