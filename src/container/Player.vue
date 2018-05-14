<template>
  <v-content>
    this is player
    
    <v-container>
      <scatter
    :legendData="legend"
    :series="series"
    ></scatter>
    </v-container>
  </v-content>
</template>

<script>
import Scatter from "../components/Scatter";

export default {
  data() {
    return {
      legend: ["牛皮"],

      series: [{
        name: "牛皮", 
        data: [[70, 90,"老九"],[80,80,"母猪"],[88,78,"劲松"],[30,90,"钱德勒"],[90,30,"AI"]],
        description: "区域",
        average: 80
      }]
    };
  },
  components: {
    // word-cloud: WordCloud,
    "scatter": Scatter
  }
};
</script>

