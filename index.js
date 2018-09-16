// Code your solution in this file
function findMatching(drivers, name){
 return drivers.filter(function(driverName){
   return driverName.toLowerCase() === name.toLowerCase();
 });
}

function fuzzyMatch(drivers, partOfName){
  let lengthOfName = partOfName.length;
  return drivers.filter(function(driverName){
    return driverName.slice(0, lengthOfName) === partOfName;
  })

}


function matchName(driver, name){
  return driver.filter(function(driverName){
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
