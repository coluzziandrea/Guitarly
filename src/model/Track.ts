import { Instrument } from "./Instrument";
import { Measure } from "./Measure";

export interface Track {
  name: string;
  instrument: Instrument;
  measures: Measure[];
}

export const createNewTrack = function (): Track {
  return {
    name: "Track 1",
    instrument: Instrument.ACOUSTIC_GUITAR,
    measures: [],
  };
};
