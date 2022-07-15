<template>
  <div class="tablature"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useSheetStore } from "../../store/sheet/sheet";

@Options({
  components: {},
  props: {},
})
export default class Tablature extends Vue {
  mounted() {
    const store = useSheetStore();
  }
}
</script>
