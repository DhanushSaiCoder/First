var score = 0;
var over = 0;
var ball = 0;
var overCounter = document.getElementById('over-counter');
var wicketsCount = 0;
var wicketsText = document.getElementById('wickets');
var text = document.getElementById('score');
var buttons = document.getElementsByClassName('button');

function dot() {
  score += 0;
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }


}

function one() {
  score += 1;
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }

}

function two() {
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  score += 2;
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }
}

function three() {
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  score += 3;
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }
}

function four() {
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  score += 4;
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }
}

function six() {
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  score += 6;
  if (wicketsText.innerHTML != "All Out") {
    text.innerHTML = score;
  }
}

function out() {
  ball++;
  overCounter.innerHTML = ('(' + parseInt(ball / 6) + '.' + (ball - (6 * parseInt(ball / 6))) + ')');
  score += 0;
  text.innerHTML = score;
  if (wicketsCount < 9) {
    wicketsCount++;
    wickets.innerHTML = wicketsCount;

  } else {
    wickets.innerHTML = "All Out";
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;

    }
    if (document.getElementById('wickets').innerHTML === 'All Out') {
      document.getElementById('use').innerHTML = 'Innings Completed Reset to try again!';
    }
    else { document.getElementById('use').innerHTML = 'Use Buttons Below to score:'; }
  }

}

function reset() {
  var buttons = document.getElementsByClassName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById('use').innerHTML = 'Use Buttons Below to score:';
  text.innerHTML = '0';
  score = 0;
  ball = 0;
  over = 0;
  wicketsCount = 0;
  wicketsText.innerHTML = '0';
  overCounter.innerHTML = ('(' + '0' + '.' + '0' + ')')
}