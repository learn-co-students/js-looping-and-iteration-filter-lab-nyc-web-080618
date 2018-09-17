function findMatching(drivers, name) {
  return drivers.filter(function(n) {
    return n.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(name) {
    return name.startsWith(letters);
  });
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name;
  });
}
