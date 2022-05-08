import { Sheet } from "@/model/Sheet";
import { defineStore } from "pinia";

export type RootState = {
  sheet: Sheet;
};

export const useSheetStore = defineStore({
  id: "sheet",
  state: () => ({} as RootState),

  actions: {
    createSheet(sheet: Sheet) {
      if (!sheet) return;

      this.sheet = sheet;
    },
  },
});
