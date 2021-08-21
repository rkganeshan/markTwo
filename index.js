const readlineSync = require('readline-sync');
const chalk = require('chalk');

const playerName=readlineSync.question('Hey!Enter your name:');
console.log(`${chalk.green(`Welcome ${playerName}`)}`);
console.log(' ');

console.log(`${chalk.bgCyan('I challenge you to take this quiz CRICKET CHAUPAL... Let\'s see how many runs(points) you would score!...Let\'s get started!!!')}`);

console.log(' ');

console.log(`${chalk.bgMagenta('Rules are easy peasy,\n For every right answer, you get a boundary,4 points\n And for every wrong answer, I shall take a wicket costing 2 points.')}`);
console.log(' ');

console.log("Before we begin,you may have an eye on your competitors! Here's the leaderboard. Let's see if you can beat them...");
console.log('     Contender  ||  Points     ');
console.log('-----------------------------');
var scoreBoard = [
  {
    name: 'Raju',
    score: 20,
  },
  {
    name: 'Kaju',
    score: 14,
  },
];

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}    ||  ${scoreBoard[i].score}     `);
  console.log('-----------------------------');
}

console.log(`${chalk.cyan.bold("Chaliye Shuru Karte Hain!")}`);

var questionBank = [
  {
    question: 'Who is known as the God of Cricket?',
    answer: 'Sachin Tendulkar',
  },
  {
    question: 'Name of the captain to win all formats of ICC trophy?',
    answer: 'MS Dhoni',
  },
  {
    question: 'Who is known as the Run Machine?',
    answer: 'Virat Kohli',
  },
  {
    question: 'Which team won the first edition of WTC?',
    answer: 'New Zealand',
  },
  {
    question: "Can you guess the name of Mr.Cricket?",
    answer: 'Mike Hussey',
  },
  {
    question: 'The team to win most number of IPL titles?',
    answer: 'Mumbai Indians',
  },
  {
    question: "At which stadium of Australia did India seal it's victory in Border Gavaskar Trophy 2021?",
    answer: 'Gabba',
  }
];
var score=0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (
    userAnswer == answer ||
    userAnswer == answer.toUpperCase() ||
    userAnswer == answer.toLowerCase()
  ) {
    console.log(`${chalk.green('Correct')}`);
    score += 4;
  } else {
    console.log(`${chalk.red('Incorrect')}`);
    score -= 2;
  }
}

for (var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer);
}

console.log(`Your score is: ${score}`);

scoreBoard.push({ name: `${playerName}`, score: `${score}` });

function scorecomparator(a, b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
}
scoreBoard.sort(scorecomparator);

console.log("Here's the final leaderboard. ");

console.log('     NAMES  ||  SCORES     ');
console.log('-----------------------------');

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}  ||  ${scoreBoard[i].score}     `);
  console.log('-----------------------------');
}