import { Instrument } from "./Instrument";
import { Measure } from "./Measure";

export interface Track {
  index: number;
  name: string;
  instrument: Instrument;
  measures: Measure[];
}

export const createNewTrack = function (): Track {
  return {
    index: 1,
    name: "Track 1",
    instrument: Instrument.ACOUSTIC_GUITAR,
    measures: [],
  };
};
