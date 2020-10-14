import { resetNote } from "./notePosition";
import { changeScore } from "../game";
import { changeHealth } from "../game";

export function scoreCalc(position, note) {
  if (position <= 860 && position >= 820) {
    changeHealth(5);
    changeScore(20);
    resetNote(note);
  } else if (position <= 820 && position >= 780) {
    changeHealth(10);
    changeScore(30);
    resetNote(note);
  } else if (position <= 780 && position >= 740) {
    changeHealth(5);
    changeScore(20);
    resetNote(note);
  } else if (position <= 740 && position >= 700) {
    changeScore(10);
    resetNote(note);
  } else if (position <= 700 && position >= 660) {
    changeScore(5);
    resetNote(note);
  } else if (position <= 660 && position >= 600) {
    changeHealth(-10);
    resetNote(note);
  } else if (position < 600) {
  }
}
