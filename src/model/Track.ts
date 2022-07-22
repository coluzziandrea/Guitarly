import { Instrument } from "./Instrument";
import { Measure } from "./Measure";

export interface Track {
  id: number;
  name: string;
  instrument: Instrument;
  measures: Measure[];
}

export const createNewTrack = function (): Track {
  return {
    id: 1,
    name: "Track 1",
    instrument: Instrument.ACOUSTIC_GUITAR,
    measures: [],
  };
};
