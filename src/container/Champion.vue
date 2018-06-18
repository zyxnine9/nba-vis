<template>
<v-content>
<v-layout row>
    <v-flex xs6>
        <parallel 
v-if="parallelData"
:data="parallelData"
></parallel>
 <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple"></v-progress-circular>
    </v-flex>
    <v-flex xs6>

<shot-bar></shot-bar>
    </v-flex>
</v-layout>
<salary ></salary>
</v-content>
</template>

<script>
import Parallel from "../components/champion/Parallel";
import ShotBar from "../components/champion/ShotBar";
import axios from "axios";
import Salary from '../components/champion/Salary'
export default {
  data() {
    return {
      parallelData: false
    };
  },
  created() {
    axios.get("/api/parallel.json").then(res => {
      this.parallelData = res.data;
    });
  },
  components: {
    'parallel': Parallel,
    "shot-bar": ShotBar,
    'salary': Salary,
  }
};
</script>
