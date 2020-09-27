var position;

function recordNote(note) {
  position = note.y;
};

export function inPosition(note, key) {
  recordNote(note);
  console.log(position + " <- Position | Key -> " + key);
  scoreCalc(position);
};

export function moveNote(note, speed) {
    note.y += speed;        //updates the note position, requiring the specific note and then the speed at which the note will be travelling
    if (note.y > 775) {
      note.y = -25 
  };
}

export function scoreCalc(position) {
  if (position <= 775 && position >= 750) {
    console.log("30")
  } else if (position <= 750 && position >= 725) {
    console.log("20")
  } else if (position <= 725 && position >= 700) {
    console.log("10")
  } else {
    console.log("early")
  }
}