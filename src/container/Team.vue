<template>
  <v-content>
    <heat-map
    v-if="team_data"
    :teamData="team_data"
    ></heat-map>  
   <p>{-1: ['布鲁克林篮网', '孟菲斯灰熊', '俄克拉荷马雷霆', '休斯顿火箭'],
 0: ['金州勇士', '新奥尔良鹈鹕'],</p>
    <single-scatter
    class="mag"
    v-if="rank_data"
    :data="rank_data"></single-scatter>
  </v-content>
</template>

<script>
import HeatMap from "../components/team/HeatMap";
import SingleScatter from '../components/team/SingleScatter'
import BarLine from "../components/team/BarLine";
import axios from "axios";

export default {
  created() {
    axios.get('http://127.0.0.1:5000/api/team_data.json')
    .then(response=>{
      this.team_data = response.data;
    })
    axios.get('http://127.0.0.1:5000/api/team_rank.json')
    .then(response=>{
      this.rank_data = response.data;
    })
  },
  data() {
    return {
      team_data: '',
      rank_data: false,
    };
  },
  components: {
    "heat-map": HeatMap,
    "bar-line": BarLine,
    'single-scatter': SingleScatter,
  }
};
</script>

<style scoped>
.mag{
  margin-right: 40px;
}
</style>
