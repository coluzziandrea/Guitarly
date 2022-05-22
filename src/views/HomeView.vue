<template>
  <div
    class="flex-grow h-screen flex flex-col items-center justify-start mt-14 gap-10"
  >
    <h1
      class="font-medium leading-7 tracking-wide text-5xl mt-0 mb-2 text-pistachio-600 drop-shadow-md"
    >
      Guitarly
    </h1>
    <h4 class="font-normal leading-5 text-xl text-gray-400">
      Music Notation Software. Made Easy.
    </h4>
    <button
      @click="openNewSheetModal"
      class="p-5 bg-pistachio-500 rounded-full text-white text-center drop-shadow-md"
    >
      Create New Sheet
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useNewSheetStore } from "@/store/new-sheet";

import Tablature from "@/components/tablature/Tablature.vue";

@Options({
  components: {},
})
export default class HomeView extends Vue {
  newSheetStore = useNewSheetStore();

  openNewSheetModal() {
    this.newSheetStore.toggleModal(true);
  }
}
</script>
