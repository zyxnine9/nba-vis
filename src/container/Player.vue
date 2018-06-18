<template>
  <v-content>
    <scatter
    v-if="series && attribute"
    :legendData="legend"
    :series="series"
    :attribute="attribute"
    ></scatter>
     <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple"></v-progress-circular>
    <v-layout row>
    <v-flex xs6>
      <usa-map
      v-if="player_geo"
      :data="player_geo"
      ></usa-map>
       <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple"></v-progress-circular>
    </v-flex>  
    <v-flex xs2></v-flex> 
    <v-flex xs4>
      <img src="../../static/USA.png" alt="">
    </v-flex>
    </v-layout>

  </v-content>
</template>

<script>
import Scatter from "../components/player/Scatter";
import USAmap from "../components/player/USAmap";
import axios from "axios";

export default {
  created() {
    axios.get('/api/player_geo.json').then(res=>{
      this.player_geo = res.data
    });
    
    axios.get('/api/player_a_d.json').then(res=>{
      this.attribute = res.data
    })

    axios.get('/api/player_scatter.json').then(res=>{
      this.series = [
        {name:'G', data: res.data.G},
        {name:'C', data: res.data.C},
        {name:'F', data: res.data.F},
        {name:'G-F', data: res.data['G-F']},
        {name:'C-F', data: res.data['C-F']},
        ]
    })
  },

  data() {
    return {
      legend: ["G", "F", "C", "C-F", "G-F"],
      //进攻，防守，名字
      series: false,
      player_geo: false,
      attribute: false,
    };
  },
  components: {
    // word-cloud: WordCloud,
    'scatter': Scatter,
    "usa-map": USAmap
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
