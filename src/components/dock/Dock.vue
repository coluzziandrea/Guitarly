<template>
  <div
    class="z-50 w-full bg-pistachio-700 shadow-md h-[15%] px-8 py-4 text-white select-none"
  >
    <ul>
      <li v-for="track in sheetStore.tracks" v-bind:key="track.index">
        <div class="grid grid-cols-[1fr_1fr_3fr_1fr_1fr_4fr_16fr]">
          <span>
            <img
              :src="
                require(`@/assets/instrument/${getInstrumentImage(
                  track.instrument
                )}`)
              "
              alt="track instrument"
              class="drop-shadow-xl w-8"
          /></span>
          <span class="font-thin">{{ track.index }}</span>
          <span>{{ track.name }}</span>
          <span>
            <img
              src="@/assets/img/mute.png"
              alt="mute track"
              class="drop-shadow-xl w-6"
          /></span>
          <span>
            <img
              src="@/assets/img/solo.png"
              alt="solo track"
              class="drop-shadow-xl w-6"
          /></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useSheetStore } from "@/store/sheet/sheet";
import { Instrument } from "@/model/Instrument";

@Options({
  props: {},
})
export default class Dock extends Vue {
  sheetStore = useSheetStore();

  getInstrumentImage(instrument: Instrument) {
    return `${instrument}.png`;
  }
}
</script>
