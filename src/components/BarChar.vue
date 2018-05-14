<template>
  <div id="main"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    y: Array,
    data: Array,
    name: String,
    title: String
  },

  methods: {
    drawBarChart(option) {
      let barChart = echarts.init(document.getElementById("main"));
      barChart.setOption(option);
    },
    getOption() {
      const option = {
        title: {
          text: this.title,
          x: "center",
          textStyle: {
            fontSize: 23
          }
        },
        xAxis: {
          max: 100
        },
        tooltip: {
          show: true
        },
        yAxis: {
          data: this.y
        },
        max: 100,
        series: [
          {
            name: this.name,
            type: "bar",
            data: this.data,
            //设置柱子的宽度
            // barWidth: 30,
            //配置样式
            itemStyle: {
              //通常情况下：
              borderType: {},
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  var colorList = [
                    "rgb(164,205,238)",
                    "rgb(42,170,227)",
                    "rgb(25,46,94)",
                    "rgb(195,229,235)"
                  ];
                  return colorList[params.dataIndex % 4];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ], //控制边距
        grid: {
          left: "10%",
          right: "10%",
          // containLabel: true
        }
      };
      return option;
    }
  },
  mounted() {
    this.drawBarChart(this.getOption());
    console.log("bar");
  }
};
</script>

<style>
#main {
  width: 100%;
  height: 300px;

}
</style>
