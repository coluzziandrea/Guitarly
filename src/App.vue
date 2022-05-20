<template>
  <Header @open-new-sheet="showModal" />
  <router-view />

  <NewSheet v-show="isModalVisible" @close="closeModal" />
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
