// Code your solution in this file

function findMatching(list,name){
  return list.filter( function(d) {
    return d.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name){
  let lengthOfName = name.length;
  return drivers.filter( function(d) {
    return d.slice(0, lengthOfName) === name;
  })

}

function matchName(drivers, name){
  return drivers.filter(function(ob){
    return ob.name === name;
  })
}
