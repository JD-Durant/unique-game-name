var position;

function recordNote(note) {
  position = note.y;
};

export function inPosition(note, key) {
  recordNote(note);
  console.log(position + " <- Position | Key -> " + key);
};

export function moveNote(note, speed) {
    note.y += speed;        //updates the note position, requiring the specific note and then the speed at which the note will be travelling
    if (note.y > 775) {
      note.y = -25 
  };
}