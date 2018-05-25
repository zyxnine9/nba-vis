<template>
    <div id="heatmap"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: { teamData: Array },
  methods: {
    drawHeatMap() {
      let heatmap = echarts.init(document.getElementById("heatmap"));
      let data = this.teamData;
      const hours = [
        "金州勇士",
        "迈阿密热火",
        "达拉斯小牛",
        "费城76人",
        "萨克拉门托国王",
        "菲尼克斯太阳",
        "芝加哥公牛",
        "纽约尼克斯",
        "犹他爵士",
        "洛杉矶湖人",
        "洛杉矶快船",
        "波特兰开拓者",
        "波士顿凯尔特人",
        "明尼苏达森林狼",
        "新奥尔良鹈鹕",
        "底特律活塞",
        "布鲁克林篮网",
        "密尔沃基雄鹿",
        "孟菲斯灰熊",
        "奥兰多魔术",
        "多伦多猛龙",
        "夏洛特黄蜂",
        "圣安东尼奥马刺",
        "印第安纳步行者",
        "华盛顿奇才",
        "克里夫兰骑士",
        "俄克拉荷马雷霆",
        "休斯顿火箭",
        "亚特兰大老鹰",
        "丹佛掘金"
      ];
      const days = [
        "投篮命中率",
        "投篮命中",
        "投篮出手",
        "三分命中率",
        "三分命中",
        "三分出手",
        "罚球命中率",
        "罚球命中",
        "罚球出手",
        "篮板",
        "前场",
        "后场",
        "助攻",
        "抢断",
        "盖帽",
        "失误",
        "犯规",
        "得分",
        "失分",
        "胜",
        "负"
      ];
      const option = {
        tooltip: {
          position: "top"
        },
        animation: true,
        grid: {
          y: "10%",
          left: "6%",
          height: "75%",
          right: "6%"
        },
        xAxis: {
          type: "category",
          data: hours,
          splitArea: {
            show: true
          },
          axisLabel: {
            show: true,
            rotate: 50,
            interval: 0,
            fontSize: 15,
            fontWeight: "bold"
          }
        },
        yAxis: {
          type: "category",
          data: days,
          splitArea: {
            show: true
          },
          axisLabel: {
            fontSize:15,
            fontWeight:'bold'
          }
        },

        visualMap: {
          min: 0,
          max: 10.1,
          calculable: true,
          type: "piecewise",
          left: "right",
          // bottom: "24%",
          orient: "vertical",
          textStyle: {
            fontSize: 20
          },
          pieces: [
            { gt: 9 },
            { gt: 7, lte: 9 },
            { gt: 4, lte: 7 },
            { gt: 2, lte: 4 },
            { gte: 0, lte: 2 }
          ]
        },
        series: [
          {
            name: "Punch Card",
            type: "heatmap",
            data: data,
            label: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      heatmap.setOption(option);
    }
  },
  mounted() {
    this.drawHeatMap();
    console.log("heatmap");
  }
};
</script>

<style scoped>
#heatmap {
  width: 100%;
  height: 700px;
}
</style>

