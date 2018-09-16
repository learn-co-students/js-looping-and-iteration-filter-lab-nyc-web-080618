// Code your solution in this file

// This function takes an array of drivers and a string as arguments,
// and returns the matching list of drivers.
// The function should be case insensitive.
function findMatching(drivers, str) {
  let list = []; //create new array

  for (var i = 0; i < drivers.length; i++) {
    if (drivers[i].toLowerCase() === str.toLowerCase()) {
      list.push(drivers[i])
    }
  }
    return list; // has to be returned outside of the for loop
}

//querying the array, and returns all drivers
//whose names begin with the provided letters.
function fuzzyMatch(drivers, str) {
  let list = [];

  for (var i = 0; i < drivers.length; i++) {
    if (drivers[i].toLowerCase().slice(0,1) === str.toLowerCase().slice(0,1)) {
      list.push(drivers[i]);
    }
  } // end of loop
      return list;
}


function matchName(drivers, str) {
  let list = [];

  for (var i = 0; i < drivers.length; i++) {
    if (drivers[i].name === str) {
      list.push(drivers[i])
    }
  }
    return list;
}
