var position;
import { scoreCalc } from "./scoreCalculator";
import { changeHealth } from '../game';

export function recordNote(note) {
  if (note.y > 900) {
    note.y = -25;
    console.log("Miss");
    changeHealth(-15);
  };
};

export function resetNote(note) {note.y = -25;}; //called during hit detection in order to reset the note

export function inPosition(note, key) {
  position = note.y;
  scoreCalc(position, note);
  console.log(position + " <- Position | Key -> " + key);
};

export function moveNote(note, speed) {
  note.y += speed;
  recordNote(note);
 // if (note.y > 900) {
   // note.y = -25;
   // console.log("Miss"); 
  };