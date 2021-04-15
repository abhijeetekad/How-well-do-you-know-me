var readlineSync = require('readline-sync');
const chalk = require('chalk');
var myName = readlineSync.question("What is your Name? ")

console.log("Hello "+ chalk.red(myName) + " Welcome to this quiz")
console.log("Name of this quiz is "+ chalk.green("How well do you know me?"))
console.log("---------------------------------------------")


var score =0;

var question = [{question:"Where do I live?\n1. pune\n2.mumbai\n3.aurangabad\nwrite only option number\n",
answer:"1"},
{question:"What am I studing?\n1. BSc\n2.BE\n3.BA\nwrite only option number\n",
answer:"2"},
{question:"Which companies'phone I am using right now?\n1. I phone\n2.Mi\n3.Samsung\nwrite only option number\n",
answer:"2"},{question:"Which bike I have?\n1. Activa\n2.Pleasure\n3.Don't have bike\nwrite only option number\n",answer:"1"},
{question:"Who is my favorite YouTuber?\n1. Tanmay bhat\n2.Mr. Beast\n3.Flying Beast\nwrite only option number\n",
answer:"3"}]
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("Correct answer")
    score=score+2
  }else{
    console.log("Wrong answer")
  }
  console.log("Congratulation!!You have scored "+ score + " Out of 10")
}


for (var i=0;i<=question.length;i++){
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(score)

