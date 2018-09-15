const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers,search_driver){
  var final_array = [];
  for (var i = 0; i < drivers.length; i++){
    if(drivers[i].toLowerCase() == search_driver.toLowerCase()){
      final_array.push(drivers[i])
    }
  }
  return final_array;
}


function fuzzyMatch(drivers,search_driver){
  var final_array = [];
  for (var i = 0; i < drivers.length; i++){
    if(drivers[i].toLowerCase().substring(0,1) == search_driver.toLowerCase().substring(0,1)){
      final_array.push(drivers[i])
    }
  }
  return final_array;
}

function matchName(drivers,search_drivers){
  var final_object = {}
  var final_array = []

  for (var i = 0; i < drivers.length; i++){
    if (drivers[i].name == search_drivers){
      final_array.push(drivers[i])
    }
  }

  return final_array
}
