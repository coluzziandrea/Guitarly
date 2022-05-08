<template>
  <div
    className="sticky top-0 z-50 bg-pistachio flex items-center p-2 lg:px-5 shadow-md"
  >
    <div className="flex items-center">
      <img
        height="45"
        width="45"
        src="../assets/logo/logo_white_large.png"
        alt="logo Guitarly"
        class="drop-shadow-xl"
      />

      <div className="flex space-x-6 ml-4 md:space-x-2">
        <router-link to="/"
          ><h1
            class="header-title drop-shadow-xl text-white tracking-wider select-none font-semibold leading-normal text-2xl"
          >
            Guitarly
          </h1></router-link
        >
      </div>
    </div>

    <div className="flex justify-center flex-grow"></div>

    <div className="flex items-center sm:space-x-2 justify-end">
      <DocumentAddIcon class="h-6 w-6 text-white mr-4 cursor-pointer" />
      <NewSheet v-show="isModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DocumentAddIcon } from "@heroicons/vue/solid";

import NewSheet from "./popup/NewSheet.vue";

@Options({
  props: {},
  components: { DocumentAddIcon, NewSheet },
})
export default class Header extends Vue {
  isModalVisible = true;

  closeModal() {
    this.isModalVisible = false;
  }
}
</script>

<style>
.header-title {
  font-family: "Metal Mania", serif;
}
</style>
