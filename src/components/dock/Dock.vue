<template>
  <div
    class="z-50 w-full bg-pistachio-700 shadow-md h-[15%] px-8 py-4 text-white select-none"
  >
    <ul>
      <li v-for="track in sheetStore.tracks" v-bind:key="track.index">
        <div class="grid grid-cols-[repeat(4,1fr)_4fr]">
          <span>
            <img
              src="../../assets/instrument/piano.png"
              alt="logo Guitarly"
              class="drop-shadow-xl w-8"
          /></span>
          <span class="font-thin">{{ track.index }}</span>
          <span>{{ track.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useSheetStore } from "@/store/sheet/sheet";

@Options({
  props: {},
})
export default class Dock extends Vue {
  sheetStore = useSheetStore();
}
</script>
