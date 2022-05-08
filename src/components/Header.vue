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
      <p
        className="text-white select-none whitespace-nowrap font-semibold pr-3"
      >
        Test User
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Header extends Vue {}
</script>

<style>
.header-title {
  font-family: "Metal Mania", serif;
}
</style>
