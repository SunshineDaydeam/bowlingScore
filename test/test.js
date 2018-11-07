const assert = require('chai').assert;
const bowlingScore = require('../app').bowlingScore;

describe('App', function(){
  const testScores = [
    {rolls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], score: 0},
    {rolls: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], score: 20},
    {rolls: [10,10,10,10,10,10,10,10,10,10,10,10], score: 300},
    {rolls: [10,8,0,5,1,10,3,5,3,6,7,0,9,0,10,8,0], score: 109},
    {rolls: [0,9,5,0,3,5,3,1,6,1,4,3,6,0,6,3,6,0,7,1], score: 69},
    {rolls: [10,6,3,8,0,3,6,10,10,6,0,7,1,8,2,10,10,8], score: 149},
    {rolls: [10,10,10,10,10,10,10,10,10,9,1,1], score: 270}
  ]

  it('rolls should be equal to score', function(){
    testScores.forEach(game=>{
      assert.equal(bowlingScore(game.rolls), game.score)
    })
  })

  it('score should be a number', function(){
    testScores.forEach(game=>{
      assert.typeOf(bowlingScore(game.rolls), 'number')
    })
  })
  
})