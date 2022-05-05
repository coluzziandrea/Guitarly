<template>
  <div class="tablature">
    <Measure />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Measure from "./measure/Measure.vue";

@Options({
  components: {
    Measure,
  },
  props: {},
})
export default class Tablature extends Vue {}
</script>
