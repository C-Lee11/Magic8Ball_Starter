/*
  Magic 8 Ball
  Name: Connor Lee
  Period: 4
*/

function askEightBall()
{

  // Get input values
  let userName = document.getElementById("nameInput").value;
  let userQuestion = document.getElementById("questionInput").value;

  console.log( userName, userQuestion);


  //Show the Question on the site

    document.getElementById("questionOut").textContent = "You asked: " + userQuestion;
  
  //Greet the user
  let greeting

  if (userName === "") {
    greeting = "Hello Mystery Person!"
  }
  else {
    greeting = `Hello ${userName}!`;
  }
  document.getElementById("greeting").textContent = greeting


  //Check the question

  if (userQuestion === "")
  {
    document.getElementById("questionOut").textContent = ""
    document.getElementById("answer").textContent = "The 8 Ball needs a question!"
    document.getElementById("answerType").innerHtml = ""
    return
  }


  //Get a random number
  
  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = '';

  //Get the magic eight ball's answer
  switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

  //Show the eight ball's answer type badge
  if (randomNumber <= 2) {
    document.getElementById("answerType").innerHTML = <span class = "yes">Yes</span>
    document.getElementById("answertype").innerHTML = <span class = "maybe">Maybe</span>
    document.getElementById("answertype").innerHTML = <span class = "no">No</span>
  }
}

