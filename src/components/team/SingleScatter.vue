<template>
    <v-content id="singlescatter"></v-content>
</template>


<script>
import echarts from "echarts";

export default {
  props:{
    data:Array
  },
  methods: {
    drawScatter() {
      let singleScatter = echarts.init(
        document.getElementById("singlescatter")
      );

      const hours = ["洛杉矶湖人", "波士顿凯尔特人", "迈阿密热火", "布鲁克林篮网", "纽约尼克斯", "奥兰多魔术", "费城76人", "华盛顿奇才", "底特律活塞", "印第安纳步行者", "新奥尔良鹈鹕", "密尔沃基雄鹿", "亚特兰大老鹰", "芝加哥公牛", "多伦多猛龙", "克里夫兰骑士", "达拉斯独行侠", "圣安东尼奥马刺", "明尼苏达森林狼", "犹他爵士", "休斯顿火箭", "孟菲斯灰熊", "丹佛掘金", "萨克拉门托国王", "波特兰开拓者", "菲尼克斯太阳", "金州勇士", "俄克拉荷马城雷霆", "洛杉矶快船", "夏洛特黄蜂"];
      let days = [
        "10-11赛季",
        "11-12赛季",
        "12-13赛季",
        "13-14赛季",
        "14-15赛季",
        "15-16赛季",
        "16-17赛季",
        "17-18赛季",
      ];

      let data = this.data;

      let option = {
        title: {
          text: "球队Rank值",
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
          left: 2,
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
            rotate: 60,
            interval:0
          }
        },
        yAxis: {
          type: "category",
          data: days,
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "论文数量",
            type: "scatter",
            symbolSize: function(val) {
              return val[2] * 4.2;
            },
            data: data,
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
  height: 550px;
}
</style>
