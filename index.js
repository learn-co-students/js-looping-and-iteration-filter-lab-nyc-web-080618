let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// returns all drivers that match the passed in name
function findMatching(drivers, name){
  return drivers.filter( function(driversName){
// returns matching drivers if case does not match but letters do
    return driversName.toLowerCase() === name.toLowerCase();
  });
}


// returns a driver if beginning provided letters match
function fuzzyMatch(drivers, beginningLetters){
  return drivers.filter(function (name){
// does not return drivers if only middle or ending letters match
    return beginningLetters.toLowerCase() === name.toLowerCase().slice(0, beginningLetters.length);
  });
}


// accesses the data structure to check if name matches
 function matchName(drivers, name) {
  return drivers.filter(function (driversName){
     return driversName.name.toLowerCase() === name.toLowerCase();
  });
}
