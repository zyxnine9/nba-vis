<template>
  <div id="main">
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    legendData: Array,
    series: Array
  },

  methods: {
    makeSeries(item) {
      /* item 是一个对象
    // name 是图例的名字
    // data 是二维数组
    // description 是区域的描述
    // average 是一个平均值
    */
      let series = {
        name: item.name,
        type: "scatter",
        data: item.data,
        markArea: {
          silent: true,
          itemStyle: {
            normal: {
              color: "transparent",
              borderWidth: 1,
              borderType: "dashed"
            }
          },
          data: [
            [
              {
                name: item.description,
                xAxis: "min",
                yAxis: "min"
              },
              {
                xAxis: "max",
                yAxis: "max"
              }
            ]
          ]
        },
      };
      return series;
    },

    getOption() {
      const configs = this.series.map(this.makeSeries);
      let option = {
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function(params) {
            if (params.value.length > 1) {
              return (
                `球员 : ${params.value[2]} <br/>` +
                `进攻 : ${params.value[0]} <br/>` +
                `防守 : ${params.value[1]} <br/>`
              );
            }
          },
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1
            }
          }
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ["rect", "polygon", "clear"]
            }
          }
        },
        brush:{},
        legend: {
          data: this.legendData,
          left: "center"
        },
        xAxis: [
          {
            type: "value",
            scale: true,
            min:0,
            name: "进攻",
            nameTextStyle:{
              fontSize: 16 
            },
            axisLabel: {
              formatter: "{value} 分"
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            min: 0,
            name: "防守",
            nameTextStyle:{
              fontSize: 16 
            },
            axisLabel: {
              formatter: "{value} 分"
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: configs
      };
      return option;
    },
    drawScatter() {
      let scatter = echarts.init(document.getElementById("main"));
      scatter.setOption(this.getOption());
    }
  },

  mounted() {
    this.drawScatter();
  }
};
</script>

<style>
#main {
  width: 100%;
  height: 500px;
}
</style>


