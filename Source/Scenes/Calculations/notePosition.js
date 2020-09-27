var position;
var score2 = 0
import {changeScore} from '../game'

function recordNote(note) {
  position = note.y;
};

export function inPosition(note, key) {
  recordNote(note);
  scoreCalc(position);
  console.log(position + " <- Position | Key -> " + key);
};

export function moveNote(note, speed) {
    note.y += speed;        //updates the note position, requiring the specific note and then the speed at which the note will be travelling
    if (note.y > 800) {
      note.y = -25 
  };
}

export function scoreCalc(position) {
  if (position <= 800 && position >= 760) {
    score2+= 20;
    console.log("0")
  } else if (position <= 760 && position >= 720) {
    score2+= 30;
    console.log("1")
    changeScore(score2)
  } else if (position <= 720 && position >= 680) {
    score2 = score2 + 20
    console.log("2")
    changeScore(score2)
  } else if (position <= 680 && position >= 640) {
    score2 = score2 + 10
    console.log("3")
    changeScore(score2)
  } else if (position < 640) {
    console.log("early")
  }
}