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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useSheetStore } from "@/store/sheet";

@Options({
  props: {},
  components: {},
})
export default class Sheet extends Vue {
  sheetStore = useSheetStore();
}
</script>
