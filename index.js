// Code your solution in this file
function findMatching(collection,name) {
  return collection.filter(function (dName) {
    return dName.toLowerCase() == name.toLowerCase();
  })
}

function fuzzyMatch(collection,string) {
  return collection.filter(function (dName) {
    return string.toLowerCase() == dName.toLowerCase().slice(0,string.length)
  })
}

function matchName(drivers,string) {
  return drivers.filter(function (dName){
    return dName.name == string;
  })
}
