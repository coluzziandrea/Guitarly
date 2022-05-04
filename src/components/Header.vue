<template>
  <div class="header">
    <nav><router-link to="/">Home</router-link></nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Header extends Vue {}
</script>
