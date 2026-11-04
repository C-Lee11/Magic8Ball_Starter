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
  
  Number(Math.random() * 7 ) + 1
  //Get the magic eight ball's answer

  //Show the eight ball's answer type badge
}

