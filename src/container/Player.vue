<template>
  <v-content>
    this is player
    <scatter
    v-if="series"
    :legendData="legend"
    :series="series"
    ></scatter>
    <usa-map></usa-map>
  </v-content>
</template>

<script>
import Scatter from "../components/player/Scatter";
import USAmap from "../components/player/USAmap";
import axios from "axios";

export default {
  created() {
    axios.get("http://127.0.0.1:5000/api/attack_defense.json").then(res => {
      this.series = [
        { name: "SG", data: res.data.SG },
        { name: "C", data: res.data.C },
        { name: "PF", data: res.data.PF },
        { name: "PG", data: res.data.PG },
        { name: "SF", data: res.data.SF }
      ];
      console.log(this.series)
    });
  },

  data() {
    return {
      legend: ["SG", "PF", "C", "SF", "PG"],
      //进攻，防守，名字
      series: false,
    };
  },
  components: {
    // word-cloud: WordCloud,
    'scatter': Scatter,
    "usa-map": USAmap
  }
};
</script>

