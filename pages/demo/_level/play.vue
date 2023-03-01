<template>
  <div class="h-screen  bg-gray-50 flex justify-center items-center">
    <div class="bg-white shadow w-1/2 h-80 p-4 ">
      <h1 class="text-lg italic font-semibold text-center text-gray-700">Bienvenue dans le niveau {{$route.params.level}} !</h1>
      <div class="my-4">
        <div class="flex justify-end">
          <vbutton template="danger" @click="generate($route.params.level)" > <span class="uppercase">regenerer</span> </vbutton>
        </div>
        <div>
          
          <div>
            <vinput 
            :vmodel="nbre" 
            label="Entrez le nbre mystere"
            labelposition="y" 
            bordere="border border-gray-700" 
            bgcolor="bg-gray-500" 
            type="text" 
            padding="px-4 py-2" 
            aroundi="rounded-md" 
            textcolor="text-white" 
            textsize="text-sm" 
            graissage="font-semibold" 
            placeholdere="Entrez votre nom"  
            size="w-full" 
            required="required"
            @validate="validate"
            @update="updateData" />
          </div>

          <div class="flex mt-5">
            <div class="w-5/6 bg-red-500 p-3 font-semibold text-white text-center ">
              c'est plus 
            </div>
            <div class="w-1/6 font-semibold shadow border p-3 text-center">
              10 coups 
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generateRamdom from '@/tools/fonction.js'
export default {
  data() {
    return {
      nbre:null,
      nbreMystere:null,
      max:{
        facile:100,
        moyen:500,
        difficile:100
      },
     
    }
  },
  methods: {
    demo() {
      alert('demo')
    },
    validate() {
      alert('demo')
    },
    updateData(data) {
      this.nbre = data
    },
    generate(level) {
      if(level ==='facile') {
        this.nbreMystere =  generateRamdom(this.max.facile)
      }else if(level ==='moyen') {
        this.nbreMystere =  generateRamdom(this.max.moyen)
      }else {
        this.nbreMystere =  generateRamdom(this.max.difficile)
      }
      
    }
  }
}
</script>

<style  scoped>

</style>