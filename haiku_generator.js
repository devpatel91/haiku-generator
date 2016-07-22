var haiku = require('./haiku');

var structure = [[5],[7],[5]];



function createHaiku(structure, syllabelsArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

console.log(createHaiku(structure, haiku));