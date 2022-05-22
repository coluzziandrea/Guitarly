<template>
  <div class="h-screen overflow-hidden bg-gray-100">
    <Header />
    <main class="flex">
      <router-view />
    </main>
    <NewSheet v-show="newSheetStore.modalOpen" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewSheet from "@/components/popup/NewSheet.vue";
import Header from "@/components/Header.vue";

import { useNewSheetStore } from "@/store/new-sheet";

@Options({
  props: {},
  components: { Header, NewSheet },
})
export default class App extends Vue {
  newSheetStore = useNewSheetStore();
}
</script>
<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
}

@font-face {
  font-family: "Metal Mania";
  src: local("Metal Mania"),
    url(./fonts/Metal_Mania/MetalMania-Regular.ttf) format("truetype");
}

.header-title {
  font-family: "Metal Mania", serif;
}
</style>
