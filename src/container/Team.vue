<template>
  <v-content>
    <heat-map
    v-if="team_data"
    :teamData="team_data"
    ></heat-map>
    <single-scatter></single-scatter>
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
  },
  data() {
    return {
      team_data: '',
    };
  },
  components: {
    "heat-map": HeatMap,
    "bar-line": BarLine,
    'single-scatter': SingleScatter,
  }
};
</script>
