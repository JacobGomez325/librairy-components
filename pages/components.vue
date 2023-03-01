<template>
  <div>
    <h1 class="text-2xl font-semibold py-4">Mes composants</h1>
    <form @submit.prevent="" >
      <div class="grid grid-cols-2 gap-3">
        <div class="form-group">
          <vinput 
            :vmodel="firstName" 
            label="Entrez votre nom"
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
            @update="datas" />
        </div>
        <div class="form-group">
          <vinput 
            :vmodel="lastName" 
            label="Entrez votre prenom"
            labelposition="y" 
            bordere="border border-gray-700" 
            bgcolor="bg-gray-500" 
            type="text" 
            padding="px-4 py-2" 
            aroundi="rounded-md" 
            textcolor="text-white" 
            textsize="text-sm" 
            graissage="font-semibold" 
            placeholdere="Entrez votre prenom"  
            size="w-full" 
            required="required"
            @update="datas" />
        </div>
        <div class="form-group">
          <vinput 
            :vmodel="age" 
            label="Entrez votre age"
            labelposition="y" 
            bordere="border border-gray-700" 
            bgcolor="bg-gray-500" 
            type="number" 
            padding="px-4 py-2" 
            aroundi="rounded-md" 
            textcolor="text-white" 
            textsize="text-sm" 
            graissage="font-semibold" 
            placeholdere="Entrez votre age"  
            size="w-full" 
            required="required"
            @update="datas" />
        </div>
        <div class="form-group">
          <vinput 
            :vmodel="email" 
            label="Entrez votre email"
            labelposition="y" 
            bordere="border border-gray-700" 
            bgcolor="bg-gray-500" 
            type="email" 
            padding="px-4 py-2" 
            aroundi="rounded-md" 
            textcolor="text-white" 
            textsize="text-sm" 
            graissage="font-semibold" 
            placeholdere="Entrez votre email"  
            size="w-full" 
            required="required"
            @update="datas" />
        </div>
         
      </div>
      <div class="my-4">
        <vbutton   type="submit" template="success"  >enregistrer</vbutton>
      </div>
     
    </form>
  </div>
</template>

<script>

export default {
 
  layout:"component",
  data() {
    return { 
      demo:'',
      updateDemo:'',
     
    }
  },
  methods: {
    datas(data) {
      this.updateDemo = data
    }
  }
}
</script>

<style>

</style>