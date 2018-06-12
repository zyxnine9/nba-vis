<template>
  <v-content>
    this is playerhhhh
    <scatter
    class="scatter"
    v-if="series"
    :legendData="legend"
    :series="series"
    ></scatter>
    <v-flex xs8>
      <usa-map
      v-if="player_geo"
      :data="player_geo"
      ></usa-map>
    </v-flex>
  </v-content>
</template>

<script>
import Scatter from "../components/player/Scatter";
import USAmap from "../components/player/USAmap";
import axios from "axios";

export default {
  created() {
    axios.get('http://127.0.0.1:5000/api/player_geo.json').then(res=>{
      this.player_geo = res.data
    });

    axios.get('http://127.0.0.1:5000/api/player_scatter.json').then(res=>{
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
.scatter{
  height: 500px;
}
</style>

