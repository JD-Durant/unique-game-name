var position;
import { scoreCalc } from "./scoreCalculator";

function recordNote(note) {position = note.y;};

export function resetNote(note) {note.y = -25;};

export function inPosition(note, key) {
  recordNote(note);
  scoreCalc(position, note);
  console.log(position + " <- Position | Key -> " + key);
};

export function moveNote(note, speed) {
  note.y += speed;
  if (note.y > 900) {
    note.y = -25;
    console.log("Miss");
  };
};