const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased(){
  return tutorials.map(function (tutorial) {
    let strings = tutorial.split(" ");
    for (let i = 0; i <strings.length; i++){
      strings[i] = strings[i][0].toUpperCase() + strings[i].slice(1);
    }
    return strings.join(" ");
  })

}
