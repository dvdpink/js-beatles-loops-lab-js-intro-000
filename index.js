// add solution here
function theBeatlesPlay (musicians, instrument) {
  var musiciansArray = []

  for (var l = 0, i = musicians.length; l < i; l++) {
    musiciansArray.push(`${musicians[l]} plays ${instrument[l]}`)
  }
  return musiciansArray;
}
