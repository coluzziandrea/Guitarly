<template>
  <Header />
  <Tablature />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Tablature from "@/components/tablature/Tablature.vue";

@Options({
  components: {
    Header,
    Tablature,
  },
})
export default class HomeView extends Vue {}
</script>
