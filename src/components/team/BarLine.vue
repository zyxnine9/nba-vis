<template>
    <div 
    v-if="main_data"
    id="barline"></div>
</template>

<script>
import echarts from "echarts";
import axios from 'axios';

export default {
  props:{
    main_data: Object
  },
  methods: {
    draBarLine() {
      let barLine = echarts.init(document.getElementById("barline"));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true }
          }
        },
        legend: {
          data: ["得分", "篮板", "助攻"]
        },
        xAxis: [
          {
            type: "category",
            data: this.main_data.names,
            axisLabel: {
              show: true,
              rotate: 50,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: "value",

            min: 0,
            interval: 20,
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "助攻",
            type: "bar",
            data: this.main_data.assist,
          },
          {
            name: "得分",
            type: "bar",
            data: this.main_data.score,
          },
          {
            name: "篮板",
            type: "bar",
            data: this.main_data.rebound,
          }
        ]
      };
      barLine.setOption(option);
    }
  },
  mounted() {
    this.draBarLine();
  }
};
</script>

<style scoped>
#barline {
  width: 100%;
  height: 500px;
}
</style>


