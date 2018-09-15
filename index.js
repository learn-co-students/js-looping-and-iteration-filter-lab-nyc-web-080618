// Code your solution in this file
function findMatching(drivers, string) {
  var array = [];
  for (var i = 0; i < drivers.length; i++){
    if (drivers[i].toLowerCase() === string.toLowerCase()){
      array.push(drivers[i])
    }
  }
  return array
}



function driverMatch(driver, string) {
  for (var i = 0; i < string.length; i++){
    if (driver[i] !== string[i]){
      return false;
    }
    else {
      return true
    }
  }
}

function fuzzyMatch(drivers, string) {
  var array = [];
  for (var i = 0; i < drivers.length; i++){
    if (driverMatch(drivers[i], string) === true){
      array.push(drivers[i]);
    }
  }
  return array;
}


function matchName(drivers, string) {
  var array = [];
  for (var i = 0; i < drivers.length; i++){
    var driver = drivers[i];
    if (driver.name === string){
      array.push(driver);
    }
  }
  return array;
}
