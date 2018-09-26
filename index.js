function findMatching(array,string){
  return array.filter(item => item.toLowerCase()===string.toLowerCase())
}

function fuzzyMatch(array,string){
  return array.filter(item => item.startsWith(string))
}

function matchName(array,string){
  return array.filter(item => item.name == string)
}
