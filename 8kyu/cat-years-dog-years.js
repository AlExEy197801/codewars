// DESCRIPTION:

//Kata Task
//I have a cat and a dog.

//I got them at the same time as kitten/puppy. That was humanYears years ago.

//Return their respective ages now as [humanYears,catYears,dogYears]

//NOTES:

//humanYears >= 1
//humanYears are whole numbers only
//Cat Years
//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that
//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that

// SOLUTION:

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  var catYears=15;
  var dogYears=15;
  switch humanYears {
    case 0:
      return [0,0,0];
      break;
    case 1:
      return [humanYears,catYears,dogYears];
      break;
    case 2:
      return [humanYears,catYears+9,dogYears+9];
      break;
    default :
      catYears=(catYears+9)+4*(humanYears-2)
      dogYears=(dogYears+9)+4*(humanYears-2)
      return [humanYears,catYears+9,dogYears+9];
      break;
  }
}

//TEST

const Test = require('@codewars/test-compat');

describe("Example Tests", function() {

  it("one", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});




