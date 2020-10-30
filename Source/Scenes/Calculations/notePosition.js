var position;
import { scoreCalc } from "./scoreCalculator";
import { changeHealth } from "../game";

export function resetNote(note) {note.y = -25;}; //called during hit detection in order to reset the note

export function recordNote(note) {
  if (note.y > 900) {
    note.y = -25;
    changeHealth(-15);
  };
};

export function inPosition(note, key) {
  position = note.y;
  scoreCalc(position, note);
};

export function moveNote(note, speed) {
  note.y += speed;
  recordNote(note);
};

export function setNoteSpeed(note) {
  
}