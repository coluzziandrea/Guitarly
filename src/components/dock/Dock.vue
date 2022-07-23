<template>
  <div
    class="z-50 w-full bg-pistachio shadow-md h-[15%] px-8 py-4 text-white select-none"
  >
    <ul>
      <li v-for="track in sheetStore.tracks" v-bind:key="track.id">
        <div class="grid grid-cols-[repeat(4,1fr)_4fr]">
          <span></span>
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
