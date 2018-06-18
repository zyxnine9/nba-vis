<template>
 
      <div id="parallel"></div>
  
</template>

<script>
import echarts from "echarts";
export default {
  props:{data: Array},
  methods: {
    getSeries(array) {
      let result = [];
      for (let item of array) {
        let serie = {
          lineStyle: { width: 5 },
          name: item.name,
          type: "parallel",
          data: item.data
        };
        result.push(serie)
      };
      return result;
    },
    drawParallel() {
      let parallel = echarts.init(document.getElementById("parallel"));
      let config = this.getSeries(this.data);
      let option = {
        parallelAxis: [
          { dim: 0, name: "常规赛-客场-胜" , max:40,min:10},
          { dim: 1, name: "常规赛-主场-胜" , max:40,min:10},
          { dim: 3, name: "季后赛-主场-胜",max:12,min:5 },
          { dim: 4, name: "季后赛-客场-胜",max:12,min:5 }
        ],
        legend: {
          data: [
            "金州勇士16-17",
            "克里夫兰骑士15-16",
            "金州勇士14-15",
            "圣安东尼奥马刺13-14",
            "迈阿密热火12-13",
            "迈阿密热火11-12",
            "达拉斯小牛10-11",
            "洛杉矶湖人09-10",
            "洛杉矶湖人08-09"
          ],
          bottom:-4,
        },
        series: config
      };
      parallel.setOption(option);
    }
  },
  mounted() {
    this.drawParallel();
  }
};
</script>

<style scoped>
#parallel {
  width: 100%;
  height: 400px;
}
</style>


