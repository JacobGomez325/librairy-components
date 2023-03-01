<template>
  <div
    class="
      w-1/2
      md:w-1/3
      lg:w-64
      fixed
      md:top-0
      md:left-0
      scrollbar-thumb-blue
      scrollbar-thumb-rounded
      scrollbar-track-blue-lighter
      scrollbar-w-2
      scrolling-touch
      h-screen
      overflow-auto
      lg:block
      bg-gray-100
      border-r
      z-30"
      :class="sideBarOpen ? '' : 'hidden'"
      id="main-nav">

    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <p class="font-semibold text-3xl text-gray-700"> <nuxt-link to="/">demo</nuxt-link> </p>
    </div>
    <div class="mb-4 px-4">
      <p class="px-0 lg:px-2 uppercase text-xs text-gray-900 mb-4 tracking-wider">Acceuil</p>
      <div class="w-full flex items-center text-gray-700 h-10 cursor-pointer">
        <nuxt-link to="/users/statistique"  class=" mb-3 font-medium text-xs hover:text-secondary transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary">
            <font-awesome-icon :icon="['fas', 'chart-pie']"/>
          </span>
          Données Statistiques
        </nuxt-link>
      </div>
      <div class=" w-full flex items-center text-gray-700  h-10 cursor-pointer">
        <nuxt-link  to="/users/all-projet" title="Mes projets" class="mb-3 font-medium  text-xs hover:text-secondary transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary">
            <font-awesome-icon :icon="['fas', 'archive']"/></span>
          gestionnaire de projet
        </nuxt-link>
      </div>
      <div class=" w-full  flex  items-center text-gray-700 h-10 cursor-pointer">
        <nuxt-link to="/users/materiel/validate/validate_responsable" title="Mes projets" class="mb-3 font-medium text-xs hover:text-secondary  transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary"><font-awesome-icon :icon="['fas', 'check-double']"/>
          </span>
          Valider retrait materiel
        </nuxt-link>
      </div>
    </div>

    <div class="mb-4 px-4"   >
      <p class="uppercase text-xs text-gray-900 mb-4 mt-4 tracking-wider"> Applications</p>
  
      <div class="w-full flex  items-center text-gray-700 h-10 cursor-pointer">
        <nuxt-link to="/users/newMembers" title="nouveau membre" class="mb-3 font-medium text-xs hover:text-secondary transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary"><font-awesome-icon :icon="['fas', 'lock']"/></span>
          Nouveau membre
        </nuxt-link>
      </div>
      <div class="w-full flex items-center text-gray-700 h-10 cursor-pointer">
        <nuxt-link to="/users/members" class=" mb-3 font-medium text-xs hover:text-secondary transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary"><font-awesome-icon :icon="['fas', 'users']"/></span>
          Mes agents
        </nuxt-link>
      </div>
    </div>
    <div class="mb-4 px-4"  >
      <p class="uppercase text-xs text-gray-900 mb-4 mt-4 tracking-wider"> configurations</p>
      <div class=" w-full flex items-center text-gray-700 h-10 cursor-pointer">
        <nuxt-link  to="/users/typeTask" class=" mb-3 font-medium text-xs hover:text-secondary transition ease-in-out duration-500">
          <span class="px-0 lg:px-2 text-gray-700 hover:text-secondary">
            <font-awesome-icon :icon="['fas', 'cogs']"/></span>
          Type taches
        </nuxt-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      currentUsers: null,
      userRule: null,
    };
  },
  computed: {
    ...mapState(['sideBarOpen'])
  },
  methods: {
    
  },

  
};
</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>