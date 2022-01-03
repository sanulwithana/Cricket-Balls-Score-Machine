function generate() {
    //Result Section
    var ballOne = document.getElementById("ballOne");
    var ballTwo = document.getElementById("ballTwo")
    var ballThree = document.getElementById("ballThree")
    var ballFour = document.getElementById("ballFour")
    var ballFive = document.getElementById("ballFive")
    var ballSix = document.getElementById("ballSix")
    var safeOver = document.getElementById("safeOver")

    //Balls Inputs
    var ballA = document.getElementById("ballA").value;
    var ballB = document.getElementById("ballB").value;
    var ballC = document.getElementById("ballC").value;
    var ballD = document.getElementById("ballD").value;
    var ballE = document.getElementById("ballE").value;
    var ballF = document.getElementById("ballF").value;

    var a = +ballA + +ballB;
    var b = Number(ballA) + Number(ballB) + Number(ballC)
    var c = Number(ballA) + Number(ballB) + Number(ballC) + Number(ballD)
    var d = Number(ballA) + Number(ballB) + Number(ballC) + Number(ballD) + Number(ballE)
    var safe = Number(ballA) + Number(ballB) + Number(ballC) + Number(ballD) + Number(ballE) + Number(ballF)

    console.log("Button Clicked....")
    ballOne.innerHTML = "1st: " + 0
    ballTwo.innerHTML = "2nd: " + ballA
    ballThree.innerHTML = "3rd: " + a
    ballFour.innerHTML = "4th: " + b
    ballFive.innerHTML = "5th: " + c
    ballSix.innerHTML = "6th: " + d
    safeOver.innerHTML = "Safe: " + safe
}

//AutoFocus Input
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

//Clear Input if try to enter letters
var form = document.querySelector('form');

function detectChange() {
  var inputs = form.querySelectorAll('input');
  for (var input of inputs) {
    if (input.value != input.defaultValue) {
      return true;
    }
  }
}

form.querySelector('button').addEventListener('click', function() {
  if (detectChange() && confirm('Are you sure you want to reset?')) {
    form.reset();
  }
});