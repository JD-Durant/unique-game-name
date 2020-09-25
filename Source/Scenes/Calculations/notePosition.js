var position;

function recordNote(note) {
  position = note.y;
};

export function inPosition(note, key) {
  recordNote(note);
  console.log(position + " <- Position | Key -> " + key);
};

export function moveNote(note, speed) {
    note.y += speed;     
    if (note.y > 850);
      note.y = -25;
  };
