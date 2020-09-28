import {resetNote} from './notePosition'
import {changeScore} from '../game'
var score2 = 0

export function scoreCalc(position, note) {
  if (position <= 860 && position >= 820){
    score2+= 20;
    console.log("-1")
    changeScore(score2)
    resetNote(note)
  } else if (position <= 820 && position >= 780) {
    score2+= 30;
    console.log("0")
    changeScore(score2)
    resetNote(note)
  } else if (position <= 780 && position >= 740) {
    score2+= 20;
    console.log("1")
    changeScore(score2)
    resetNote(note)
  } else if (position <= 740 && position >= 700) {
    score2 = score2 + 10
    console.log("2")
    changeScore(score2)
    resetNote(note)
  } else if (position <= 700 && position >= 660) {
    score2 = score2 + 5
    console.log("3")
    changeScore(score2)
    resetNote(note)
  } else if (position < 660) {
    console.log("early")
  };
};