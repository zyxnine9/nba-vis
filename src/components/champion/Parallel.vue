<template>
    <v-content>
      <div id="parallel"></div>
    </v-content>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    drawParallel() {
      let parallel = echarts.init(document.getElementById("parallel"));
      let option = {
        parallelAxis: [
          { dim: 0, name: "Price" },
          { dim: 1, name: "Net Weight" },
          { dim: 2, name: "母猪" },
          { dim: 3, name: "继而" }
        ],
        legend: {
          data: ["regular", "filly"]
        },
        series: [
          {
            type: "parallel",
            name: "filly",
            lineStyle: {
              width: 4
            },
            data: [[12.99, 100, 12, 14], [9.99, 12, 18, 19], [20, 120, 66, 33]]
          },
          {
            type: "parallel",
            name: "regular",
            lineStyle: {
              width: 4
            },
            data: [[13, 19, 13, 64], [9.99, 77, 19, 75], [14, 110, 88, 7]]
          }
        ]
      };
      parallel.setOption(option);
    }
  },
  mounted(){
      this.drawParallel()
  }
};
</script>

<style scoped>
#parallel{
    width: 100%;
    height: 300px
}
</style>


