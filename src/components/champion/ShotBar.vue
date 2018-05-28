<template>
    <div id="shotbar"></div>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    drawBar() {
      let bar = echarts.init(document.getElementById("shotbar"));
      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            return `球队：${params[0].name}</br>
            平均三分出手数:${params[0].value[0]}</br>
            平均投篮命中率:${params[0].value[2] * 100}%`;
          },
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            fontSize: 18
          }
        },
        legend: {
          top: 8,
          data: ["常规赛", "季后赛"],
          textStyle: {
            fontSize: 16
          }
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "10%",
          containLabel: true
        },
        visualMap: {
          dimension: 2,
          color: ["#0D47A1", "#1565C0", "#1976D2", "#42A5F5", "#90CAF9"],
          type: "piecewise",
          orient: "horizontal",
          max:0.5,
          min:0.44
        },
        xAxis: {
          type: "value",
          name: "三分球"
        },
        yAxis: {
          type: "category",
          data: [
            "湖人08-09",
            "湖人09-10",
            "小牛10-11",
            "热火11-12",
            "热火12-13",
            "马刺13-14",
            "勇士14-15",
            "骑士15-16",
            "勇士16-17"
          ]
        },
        series: [
          {
            name: "常规赛",
            type: "bar",
            data: [
              [18.487805, 0, 0.475366], //08-09
              [19.04878, 1, 0.459024], //09
              [22.181818, 2, 0.443636], //10
              [15.606061, 3, 0.47], //11
              [22.060976, 4, 0.497317], //12
              [21.426829, 5, 0.487683], //13
              [27.036585, 6, 0.479268], //14
              [29.585366, 7, 0.462317], //15
              [27.036585, 8, 0.479268] //16
            ]
          },
          {
            name: "季后赛",
            type: "bar",
            data: [
              [18.434783, 0, 0.468261], //08-09
              [20.695652, 1, 0.461739], //09
              [22.238095, 2, 0.460952], //10
              [19.652174, 3, 0.461739], //11
              [20.217391, 4, 0.47], //12
              [21.565217, 5, 0.494348], //13
              [30.52381, 6, 0.455714], //14
              [30.238095, 7, 0.469048], //15
              [32.882353, 8, 0.495294] //16
            ]
          }
        ]
      };
      bar.setOption(option);
    }
  },
  mounted() {
    this.drawBar();
  }
};
</script>


<style scoped>
#shotbar {
  width: 100%;
  height: 400px;
}
</style>

