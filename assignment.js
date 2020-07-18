//1. feetToMile Problem
function feetToMile(feet) {
  var oneFeet = 0.000189394;
  var mile = feet * oneFeet;
  return mile;
}
var result = feetToMile(5);
console.log(result);

// //2. woodCalculator problem
function woodCalculator(chair, table, bed) {
  var chairValue = 1;
  var tableValu = 3;
  var bedValu = 5;
  total = chairValue * chair + tableValu * table + bedValu * bed;
  return total;
}
console.log(woodCalculator(2, 2, 2));

//Brick calculator problem
function brickCalculator(floor) {
  var totalHeight;
  var totalBrick;
  if (floor <= 10) {
    totalHeight = floor * 15;
    totalBrick = totalHeight * 1000;
  } else if (floor <= 20) {
    totalHeight = 10 * 15 + 10 * 12;
    totalBrick = totalHeight * 1000;
  } else {
    moreFloor = 30 - 20;
    totalHeight = 10 * 15 + 10 * 12 + 30 * 10;
    totalBrick = totalHeight * 1000;
  }
  return totalBrick;
}
console.log(brickCalculator(30));

//  tinyFriend problem

function tinyFriend(friends) {
  if (friends.length == 0) {
    return "Please enter at least one name";
  } else {
    var smallest = friends[0];
    for (var i = 0; i < friends.length; i++) {
      if (friends[i].length == 0) {
        return "Please enter each name correctly";
      } else if (smallest.length > friends[i].length) {
        smallest = friends[i];
      }
    }
    return smallest;
  }
}

friendsList = ["pronoy", "Bappy", "himel", "sadat", "opel", "salma"];
var smallestName = tinyFriend(friendsList);
console.log(smallestName);
