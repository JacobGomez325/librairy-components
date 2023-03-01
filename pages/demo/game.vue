<template>
  <div class="h-screen  bg-gray-50 flex justify-center items-center">
    <div class="bg-white shadow w-1/2 h-80 p-4 ">
      <h1 class="text-lg italic font-semibold text-center text-gray-700">Bienvenue dans le jeu plus ou moins  !</h1>
      <div class="flex justify-center items-center my-3" >
        <ul class="w-1/2 shadow border p-4">
          <li class="font-bold cursor-pointer uppercase"> <nuxt-link :to="{name:'demo-level-play',params:{level:'facile'}}">1- facile</nuxt-link> </li>
          <li class="font-bold cursor-pointer uppercase"> <nuxt-link :to="{name:'demo-level-play',params:{level:'moyen'}}">2- moyen</nuxt-link> </li>
          <li class="font-bold cursor-pointer uppercase"> <nuxt-link :to="{name:'demo-level-play',params:{level:'difficle'}}">3- difficile</nuxt-link> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style  scoped>

</style>