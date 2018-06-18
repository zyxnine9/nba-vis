<template>
  <v-app>
    
    <my-nav-bar></my-nav-bar>
    <transition name="component-fade" mode="out-in">

      <router-view></router-view>  
    </transition>     
      <div class="hei"></div>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "my-nav-bar": NavBar,
    "my-footer": Footer
  }
}
</script>

<style scoped>
.hei{
  height: 100%;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .25s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>



