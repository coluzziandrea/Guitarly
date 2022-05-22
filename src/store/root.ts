import { defineStore } from "pinia";

export type RootState = {
  newSheetModalOpen: boolean;
};

export const useRootStore = defineStore({
  id: "root",
  state: () =>
    ({
      newSheetModalOpen: false,
    } as RootState),

  actions: {
    toggleNewSheetModal(open: boolean) {
      this.newSheetModalOpen = open;
    },
  },
});
