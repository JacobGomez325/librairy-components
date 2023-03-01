<template>
  <div>
    <button v-if="template === 'none'" :class="`${padding} ${aroundi} ${textsize} ${graissage} ${size} ${bordere} ${bgcolor} ${textcolor} `" :type="type" class=" hover:opacity-80 transition-all duration-500 " @click="$emit('click')" >
      <slot></slot>
    </button>
    <button v-if="template==='default'" class="bg-gray-500 py-2 px-4 border text-white border-gray-500 rounded-md font-semibold outline-none" @click="$emit('click')">
      <slot></slot>
    </button>
    <button v-if="template==='success'" type="submit" class="bg-green-500 py-2 px-4 border text-white border-green-500 rounded-md font-semibold outline-none" @click="$emit('click')">
      <slot></slot>
    </button>
    <button v-if="template==='danger'"  type="reset" class=" bg-red-500 py-2 px-4 border text-white border-red-500 rounded-md font-semibold outline-none" @click="$emit('click')">
      <span v-if="!isloading">
        <slot></slot>
      </span>
      <span v-else class="flex justify-between">
        <svg  xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-center animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </span>
    </button>
  </div>
  
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props:['type','padding', 'aroundi','textcolor', 'textsize','graissage','size','bordere','bgcolor','label','template'],
  data() {
    return { 
      isloading:false
    }
  }

}
</script>

<style>

</style>