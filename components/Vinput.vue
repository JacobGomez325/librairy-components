<template>
  <div>
    <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
    </label>
    <input  v-model='inputValue' @keyup.enter="$emit('validate')"  :placeholder="placeholdere" :class="`${padding} ${aroundi} ${textsize} ${graissage} ${size} ${bordere} ${bgcolor} ${textcolor} `" :type="type" class="outline-none " :required="required"  @keyup="$emit('update', inputValue)"  >
    
  </div>
</template>

<script>
export default {

 // eslint-disable-next-line vue/require-prop-types
 props:['vmodel','type','padding', 'aroundi','textcolor', 'textsize','graissage','placeholdere','placeholderecolor','size','bordere','bgcolor','label','labelposition','required'],
  data() {
    return {
      localValue: null,
      inputValue: this.vmodel,
    }
  },
   watch: {
    value: {
      handler(vmodel){
        this.localValue = vmodel
        this.inputValue = vmodel
      },
      immediate: true,
    },
  },
  methods: {
    
  }
}
</script>

<style>

</style>