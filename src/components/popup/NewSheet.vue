<template>
  <div
    class="fixed inset-0 z-40 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  >
    <div class="relative top-40 mx-auto w-96">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow">
          <XIcon
            class="h-10 w-10 absolute top-3 right-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center cursor-pointer"
            @click="closeNewSheet"
          >
          </XIcon>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-pistachio-600">
              New Music Sheet
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Name</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pistachio-500 focus:border-pistachio-500 block w-full p-2.5"
                  placeholder="A Wonderfoul Song's Name"
                  required=""
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-pistachio-700 hover:bg-pistachio-800 focus:ring-4 focus:outline-none focus:ring-pistachio-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { XIcon } from "@heroicons/vue/solid";

@Options({
  props: {},
  components: { XIcon },
})
export default class NewSheet extends Vue {
  closeNewSheet() {
    this.$emit("close", {});
  }
}
</script>
