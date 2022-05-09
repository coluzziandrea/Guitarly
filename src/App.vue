<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  components: {},
})
export default class App extends Vue {}
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
