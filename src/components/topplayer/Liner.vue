<template>
    <v-content id="top-line"></v-content>
</template>

<script>
import echarts from "echarts";
export default {
  props:{
    players: Array,
    title: String
  },
  methods: {
    getNames(){
      return this.players.map(e=>e.name);
    },

    drawLine() {
      let line = echarts.init(document.getElementById("top-line"));
      let option = {
        title: {
          text: this.title,
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.getNames(),
          bottom: '0%',
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        },
        yAxis: {
          type: "value",
          min: 10,
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: this.players.map(e=>{
          return {
            name: e.name,
            type: 'line',
            data: e.data,

          }
        }),

        
      };
      line.setOption(option);
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script>

<style scoped>
#top-line {
  width: 100%;
  height: 500px;
}
</style>
