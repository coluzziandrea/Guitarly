import { Sheet } from "@/model/Sheet";
import { createNewTrack, Track } from "@/model/Track";
import { defineStore } from "pinia";

export type SheetState = {
  sheet: Sheet;
  tracks: Track[];
  currentTrackIndex: number;
};

export const useSheetStore = defineStore({
  id: "sheet",
  state: () => ({} as SheetState),

  actions: {
    createSheet(sheet: Sheet) {
      if (!sheet) return;

      this.sheet = sheet;
      this.tracks = [createNewTrack()];
      this.currentTrackIndex = 0;
    },
  },
});
