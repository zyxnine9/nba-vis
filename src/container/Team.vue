<template>
  <v-content>
    <heat-map
    v-if="team_data"
    :teamData="team_data"
    ></heat-map>  
     <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple"></v-progress-circular>
  
    <single-scatter
    class="mag"
    v-if="rank_data"
    :data="rank_data"></single-scatter>
     <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple">
     </v-progress-circular>
    <inside
    v-if="rank_data"
    :rank="rank_data"></inside>
    <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple">
    </v-progress-circular>
  </v-content>
</template>

<script>
import HeatMap from "../components/team/HeatMap";
import SingleScatter from '../components/team/SingleScatter'
import BarLine from "../components/team/BarLine";
import Inside from '../components/team/Inside';
import axios from "axios";

export default {
  created() {
    axios.get('/api/team_data.json')
    .then(response=>{
      this.team_data = response.data;
    })
    axios.get('/api/team_rank.json')
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
    "inside": Inside,
    'single-scatter': SingleScatter,
  }
};
</script>

<style scoped>
.mag{
  margin-right: 40px;
}
</style>
