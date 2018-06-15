<template>
    <v-content id="singlescatter"></v-content>
</template>


<script>
import echarts from "echarts";

export default {
  props:{
    data:Object
  },
  methods: {
    drawScatter() {
      let singleScatter = echarts.init(
        document.getElementById("singlescatter")
      );

      const hours = ["克里夫兰骑士", "波士顿凯尔特人", "迈阿密热火", "布鲁克林篮网", "纽约尼克斯", "奥兰多魔术", "费城76人", "华盛顿奇才", "底特律活塞", "印第安纳步行者", "夏洛特黄蜂", "密尔沃基雄鹿", "亚特兰大老鹰", "芝加哥公牛", "多伦多猛龙", "洛杉矶湖人", "达拉斯独行侠", "圣安东尼奥马刺", "明尼苏达森林狼", "犹他爵士", "休斯顿火箭", "孟菲斯灰熊", "丹佛掘金", "萨克拉门托国王", "波特兰开拓者", "菲尼克斯太阳", "金州勇士", "俄克拉荷马城雷霆", "洛杉矶快船", "新奥尔良鹈鹕",''];
      let days = [
        "10-11",
        "11-12",
        "12-13",
        "13-14",
        "14-15",
        "15-16",
        "16-17",
        "17-18",
      ];

      let data = this.data;

      let option = {
        title: {
          text: "球队Rank值",
        },
        legend:{
          data:['东部','西部']
        },
       
        tooltip: {
          position: "top",
          formatter: function(params) {
            return (
              `
              ${days[params.value[1]]}
              </br>
              ${hours[params.value[0]]}
              </br>
              rank值是${params.value[2].toFixed(2)}`
            );
          }
        },
        grid: {
          left: 10,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: hours,
    
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#999",
              type: "dashed"
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            rotate: 40,
            fontSize:15,
            fontWeight:'bold',
          },
        },
        yAxis: {
          type: "category",
          data: days,axisLabel: {
            fontSize:15,
            fontWeight:'bold'
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "西部",
            type: "scatter",
            symbolSize: function(val) {
              return val[2] * 4.2;
            },
            data: data.xibu,
            animationDelay: function(idx) {
              return idx * 5;
            }
          },
          {
            name: "东部",
            type: "scatter",
            symbolSize: function(val) {
              return val[2] * 4.2;
            },
            data: data.dongbu,
            animationDelay: function(idx) {
              return idx * 5;
            }
          }
        ]
      };
      singleScatter.setOption(option);
    }
  },
  mounted() {
    this.drawScatter();
  }
};
</script>

<style scoped>
#singlescatter {
  width: 100%;
  margin-right: 4%;
  height: 550px;
}
</style>
