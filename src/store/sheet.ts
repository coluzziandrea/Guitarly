import { Sheet } from "@/model/Sheet";
import { defineStore } from "pinia";

export type SheetState = {
  sheet: Sheet;
};

export const useSheetStore = defineStore({
  id: "sheet",
  state: () => ({} as SheetState),

  actions: {
    createSheet(sheet: Sheet) {
      console.log("ci sono");
      if (!sheet) return;

      this.sheet = sheet;
    },
  },
});
