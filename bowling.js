//Test Rolls and Expected Scores
const scoreArray = [
	{rolls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], score: 0},
	{rolls: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], score: 20},
	{rolls: [10,10,10,10,10,10,10,10,10,10,10,10], score: 300},
	{rolls: [10,8,0,5,1,10,3,5,3,6,7,0,9,0,10,8,0], score: 109},
	{rolls: [0,9,5,0,3,5,3,1,6,1,4,3,6,0,6,3,6,0,7,1], score: 69},
	{rolls: [10,6,3,8,0,3,6,10,10,6,0,7,1,8,2,10,10,8], score: 149},
	{rolls: [10,10,10,10,10,10,10,10,10,9,1,1], score: 270}
]

// Current Score
var score = 0;

// Method to take an array and calculate the bowler's score
// Returns errors if impossible score
bowlingScore = (roll) => {
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
	console.log(
		`
  rolls = ${roll}
  total score = ${totalScore}
	`)
	return score = totalScore;
}

// Test Method to check bowlingScore method
testScore = (testArray) => {;
	for (let i=0; i<testArray.length; i++){

		bowlingScore(testArray[i].rolls);

		if (score !== testArray[i].score){
			console.log('TEST FAILED')
			return false;
		}
	}
	console.log('TEST PASSED')
}

testScore(scoreArray)
