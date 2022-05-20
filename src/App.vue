<template>
  <div class="h-screen overflow-hidden bg-gray-100">
    <Header @open-new-sheet="showModal" />
    <main class="flex">
      <router-view />
    </main>
    <NewSheet v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewSheet from "@/components/popup/NewSheet.vue";
import Header from "@/components/Header.vue";

@Options({
  props: {},
  components: { Header, NewSheet },
})
export default class App extends Vue {
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
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
