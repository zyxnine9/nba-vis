<template>
  <v-content>
    
    <bar-line
    v-if="team_data"
    :main_data="team_data"
    ></bar-line>
    <v-layout row>
      <v-flex xs6>
        <h1>haha</h1>
      </v-flex>
      <v-flex xs6>
        <h1>xixi</h1>
      </v-flex>
    </v-layout>
    <heat-map></heat-map>
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
    axios.get('http://127.0.0.1:5000/api/team_s_r_a.json')
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
