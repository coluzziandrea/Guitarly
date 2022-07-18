<template>
  <div class="flex-grow m-4">
    <div>
      <h1
        class="text-center font-bold leading-5 text-2xl mb-2 text-pistachio-700"
      >
        {{ sheetStore.sheet.name }}
      </h1>
      <h2 class="text-center text-gray-500 text-xl">
        {{ sheetStore.sheet.author }}
      </h2>
    </div>
    <div class="flex justify-between gap-8 h-3/5">
      <Sidebar class="flex-1"></Sidebar>
      <Tablature class="flex-auto"></Tablature>
    </div>
  </div>
  <Dock></Dock>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tablature from "../tablature/Tablature.vue";
import Dock from "@/components/dock/Dock.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { useSheetStore } from "@/store/sheet/sheet";

import * as Tone from "tone";

@Options({
  props: {},
  components: { Tablature, Dock, Sidebar },
})
export default class Sheet extends Vue {
  sheetStore = useSheetStore();

  play() {
    const sampler = new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
        C1: "C1.mp3",
        E1: "E1.mp3",
        G1: "G1.mp3",
        B1: "B1.mp3",
      },
      baseUrl:
        "https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FluidR3_GM/acoustic_guitar_steel-mp3/",
      onload: () => {
        sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
      },
    }).toDestination();
  }
}
</script>
