module.exports = {
  bowlingScore: function(roll){
    let firstFrame = true;
    let frame = 1;
    let totalScore = 0;
  
    // Loop Through the Bowling Score
    for (i=0; i<roll.length; i++){
      if (isNaN(roll[i])){
        console.log('Score must be between 0 and 10')
        return;
      }
      else if (roll[i] < 0){
        console.log('You cannot roll negative pins')
        return;
      }
      else if (roll[i] > 10){
        console.log('There are only 10 pins available')
        return;
      }
      //If Frame is less than 10
      else if (frame <= 10){
        if (firstFrame){
          // Not a Strike
          if (roll[i] < 10){
            totalScore += roll[i]
            firstFrame = false;
          }
          // Strike
          if (roll[i] === 10){
            totalScore+= roll[i] + roll[i+1] + roll[i+2]
            frame +=1
            if (isNaN(roll[i+1]) || isNaN(roll[i+2])){
              console.log('*ERROR: missing numbers in the array')
              return false;
            }
          }
          continue;
        }
        // Second Frame
        else{
          // Not a Spare
          if (roll[i] + roll[i-1] < 10){
            totalScore += roll[i]
          }
          // Spare
          if (roll[i] + roll[i-1] === 10){
            totalScore += roll[i] + roll[i+1]
            if (isNaN(roll[i+1])){
              console.log('*ERROR: missing numbers in the array')
              return false;
            }
          }
          // Too many Pins
          if (roll[i] + roll[i-1] > 10){
            console.log(`Impossible Score - The highest possible score for this frame is ${10-roll[i-1]}`)
            return false;
          }
          firstFrame = true;
          frame+=1
        }
      }
      else{
        break;
      }
    }
    return totalScore;
  }
}