<template>
  <Sheet />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Sheet from "@/components/sheet/Sheet.vue";

@Options({
  components: { Sheet },
})
export default class SheetView extends Vue {}
</script>
