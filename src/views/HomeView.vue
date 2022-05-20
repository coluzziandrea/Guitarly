<template>
  <Tablature />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Tablature from "@/components/tablature/Tablature.vue";

@Options({
  components: {
    Tablature,
  },
})
export default class HomeView extends Vue {}
</script>
