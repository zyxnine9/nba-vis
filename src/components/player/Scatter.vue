<template>
<div>
  <div id="scattery">
  </div>

  <div id="scatter">
  </div>
 <v-layout row justify-center class="wodelayout">
    <v-flex xs4>
      <v-slider :max="100" v-model="rebound" label="篮板"></v-slider>
    </v-flex>
  
    <v-flex xs4>
      <v-slider :max="100" v-model="steal" label="抢断"></v-slider>
    </v-flex>
   
    <v-flex xs4>
      <v-slider :max="100" v-model="block" label="盖帽"></v-slider>
    </v-flex>
  
    <v-flex xs4>
      <v-card-text class="fon">y = {{rebound/100}}*篮板 + {{steal/100}}*抢断+ {{block/100}}*盖帽</v-card-text>
    </v-flex>
  </v-layout>
  <v-layout row justify-center class="wodelayout">
    <v-flex xs4>
      <v-slider :max="100" v-model="score" label="得分"></v-slider>
    </v-flex>

    <v-flex xs4>
      <v-slider :max="100" v-model="assist" label="助攻"></v-slider>
    </v-flex>

    <v-flex xs4>
      <v-slider :max="100" v-model="mistake" label="失误"></v-slider>
    </v-flex>

    <v-flex xs4>
      <v-card-text class="fon">x = {{score/100}}*得分 + {{assist/100}}*助攻 - {{mistake/100}}*失误</v-card-text>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    legendData: Array,
    series: Array,
    attribute: Array,
  },
  data() {
    return {
      rebound: 10,
      block: 30,
      steal: 40,
      mistake: 30,
      score: 60,
      assist: 40
    };
  },
  methods: {
    // item 是一个对象
    // name 是图例的名字
    // data 是二维数组
    // description 是区域的描述
    makeSeries(item) {
      let series = {
        name: item.name,
        type: "scatter",
        data: item.data,
        symbolSize: 12,
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
        }
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
        title: {
          text: "由PCA得到的数据"
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function(params) {
            if (params.value.length > 1) {
              return (
                `球员 : ${params.value[2]} <br/>` +
                `坐标x : ${Math.round(params.value[0])} <br/>` +
                `坐标y : ${Math.round(params.value[1])} <br/>`
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
        brush: {},
        legend: {
          data: this.legendData,
          left: "center"
        },
        xAxis: [
          {
            type: "value",
            scale: true,
            nameTextStyle: {
              fontSize: 16
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
            nameTextStyle: {
              fontSize: 16
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
      let scatter = echarts.init(document.getElementById("scattery"));
      scatter.setOption(this.getOption());
      return scatter;
    },
    drawSecondScatter() {
      let scatter = echarts.init(document.getElementById("scatter"));
      let seris = this.attribute.map(e=>{
        return {
            name: Object.keys(e)[0],
            type: "scatter",
            data: e[Object.keys(e)[0]].map(item=>{return [
              item.assist*this.assist/100 + item.score*this.score/100 - item.mistake*this.mistake/100,
              item.rebound*this.rebound/100 + item.steal*this.steal/100 + item.block*this.block/100,
              item.player_name
              ]}),
            symbolSize: 12,
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
                    xAxis: "min",
                    yAxis: "min"
                  },
                  {
                    xAxis: "max",
                    yAxis: "max"
                  }
                ]
              ]
            }
          }}
      );

      let option = {
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        title: {
          text: "攻防属性"
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function(params) {
            if (params.value.length > 1) {
              return (
                `球员 : ${params.value[2]} <br/>` +
                `坐标x : ${params.value[0]} <br/>` +
                `坐标y : ${params.value[1]} <br/>`
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
        brush: {},
        legend: {
          data: this.legendData,
          left: "center"
        },
        xAxis: [
          {
            type: "value",
            scale: true,
            nameTextStyle: {
              fontSize: 16
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
            nameTextStyle: {
              fontSize: 16
            },

            splitLine: {
              show: false
            }
          }
        ],
        series: seris,
      };
      scatter.setOption(option);
      return scatter;
    },

    
  },

  updated(){
    this.drawSecondScatter();
  },

  mounted() {
    let s1 = this.drawScatter();
    let s2 = this.drawSecondScatter();
    echarts.connect([s1,s2])
  }
};
</script>

<style>
#scattery {
  width: 100%;
  height: 500px;
}
#scatter {
  width: 100%;
  height: 500px;
}
.wodelayout {
  margin-left: 2%;
  margin-right: 2%;
}
.fon{
  font-size: 120%;
}
</style>


