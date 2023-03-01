<template>
 
<div class="bg-indigo-900 relative overflow-hidden h-screen">
    <nuxt-img src="/img/landing-page.jpg" class="absolute h-full w-full object-cover" />
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>

    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
      <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
        <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
          Component library 
          <br/>
          Tailwind + Vue
        </h1>
        <nuxt-link to="#" class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
          Get started
        </nuxt-link>
      </div>
    </div>
</div>

</template>

<script>
export default {}
</script>
