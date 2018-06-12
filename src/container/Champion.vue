<template>
<v-content>
<v-layout row>
    <v-flex xs6>
        <parallel 
v-if="parallelData"
:data="parallelData"
></parallel>

    </v-flex>
    <v-flex xs6>

<shot-bar></shot-bar>
    </v-flex>
</v-layout>
</v-content>
</template>

<script>
import Parallel from "../components/champion/Parallel";
import ShotBar from "../components/champion/ShotBar";
import axios from "axios";
export default {
  data() {
    return {
      parallelData: false
    };
  },
  created() {
    axios.get(" http://127.0.0.1:5000/api/parallel.json").then(res => {
      this.parallelData = res.data;
    });
  },
  components: {
    parallel: Parallel,
    "shot-bar": ShotBar
  }
};
</script>
