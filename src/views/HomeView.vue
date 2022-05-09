<template>
  <Header @open-new-sheet="showModal" />
  <NewSheet v-show="isModalVisible" @close="closeModal" />
  <Tablature />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import NewSheet from "@/components/popup/NewSheet.vue";
import Tablature from "@/components/tablature/Tablature.vue";

@Options({
  components: {
    Header,
    Tablature,
    NewSheet,
  },
})
export default class HomeView extends Vue {
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
</script>
