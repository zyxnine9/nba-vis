<template>

  <v-toolbar
  fixed 
  app
  dark 
  color="cyan lighten-1 "
  elevation-2>
    <v-icon>home</v-icon>

    <v-toolbar-title 
      class="white--text">
    <router-link 
      tag="span" 
      style="cursor:pointer; font-size:1.3em"
      to="/">
        Welcome
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn  
      dark 
      color="cyan lighten-1 "
      depressed
      v-for="item in items"
      :key=item.key
      :to="item.to">
      <v-icon>{{ item.icon }}</v-icon>
      <span class="large">{{ item.description }}</span>
    </v-btn>
   
  </v-toolbar>

</template>

<script>
export default {
  data(){
    return{
      items:[
        {
          description: "球员",
          icon: "accessibility",
          to: "/player"
        },
        {
          description: "顶尖球员",
          icon: "whatshot",
          to: "/topplayer"
        },
        {
          description: "冠军球队",
          icon: "grade",
          to: "/champion"
        }],
    }
  }
}
</script>


<style scoped>
  .large{
      font-size: medium;
  }
</style>
