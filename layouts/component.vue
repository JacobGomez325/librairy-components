<template>
  <div>
    <div class="flex flex-wrap">
      <div>
       <sidebar></sidebar>
      </div>
      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
         <Nav />
        <div class="p-6 bg-gray-100 mb-20">
          <nuxt />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Component', 
}
</script>
<style>
* {
  font-family: "Work Sans", sans-serif;
}
</style>

