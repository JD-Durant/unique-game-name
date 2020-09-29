import {moveNote} from '../Calculations/notePosition'
import { note1, note2, note3, note4 } from "../game";

export async function song() {  //async allows me to use await, as await is a restricted word.
  moveNote(note1, 10);
  await sleep(1000);
  moveNote(note2, 10);
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};