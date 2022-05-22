import { defineStore } from "pinia";

export type NewSheetState = {
  modalOpen: boolean;
};

export const useNewSheetStore = defineStore({
  id: "root",
  state: () =>
    ({
      modalOpen: false,
    } as NewSheetState),

  actions: {
    toggleModal(open: boolean) {
      this.modalOpen = open;
    },
  },
});
