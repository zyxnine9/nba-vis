<template>
    <v-content id="salary"></v-content>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    drawLine() {
      let line = echarts.init(document.getElementById("salary"));
      const data = [
        [0, 7193.366666666667],
        [1, 7042.7],
        [2, 6748.033333333334],
        [3, 6861.4],
        [4, 7042.366666666667],
        [5, 7121.766666666666],
        [6, 7360.7],
        [7, 7853.6],
        [8, 9870.6],
        [9, 11279.333333333334]
      ];

      const data2 = [
        [0, 6100.819393939394],
        [1, 6486.723232323233],
        [2, 6872.627070707071],
        [3, 7258.5309090909095],
        [4, 7644.434747474748],
        [5, 8030.338585858586],
        [6, 8416.242424242424],
        [7, 8802.146262626264],
        [8, 9188.050101010102],
        [9, 9573.95393939394]
      ];

      const data3 = [
        [0, 7825],
        [1, 9138],
        [2, 8541],
        [3, 7412],
        [4, 8177],
        [5, 6463],
        [6, 7355],
        [7, 10596],
        [8, 10129],
        [9, 13749]
      ];

      const data4 = [
        [0, 9664],
        [1, 9138],
        [2, 9143],
        [3, 9169],
        [4, 10045],
        [5, 11206],
        [6, 9222],
        [7, 10596],
        [8, 12945],
        [9, 14905]
      ];
      const option = {
        title: {
          text: "球队薪金",
          left: "left"
        },
        legend:{
            data:['当年平均薪资','当年最多薪资','冠军球队薪资']
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          },
          data: [
            "08-09",
            "09-10",
            "10-11",
            "11-12",
            "12-13",
            "13-14",
            "14-15",
            "15-16",
            "16-17",
            "17-18"
          ],
          axisLabel: {
            formatter: function(val) {
              return val + "赛季";
            }
          }
        },
        yAxis: {
          type: "value",
          min: 5000,
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "当年平均薪资",
            type: "scatter",

            data: data
          },
          {
            name: "当年最多薪资",
            type: "scatter",

            data: data4
          },
          {
            name: "冠军球队薪资",
            type: "scatter",

            data: data3
          },
          {
            name: "回归曲线",
            type: "line",
            showSymbol: false,
            data: data2
          }
        ]
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
#salary {
  width: 100%;
  height: 400px;
}
</style>
