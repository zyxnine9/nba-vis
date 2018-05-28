<template>
    <div class="secondparallel"></div>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    drawParallel() {
      let parallel = echarts.init(document.getElementById("secondparallel"));
      let option = {
        parallelAxis: [
          { dim: 0, name: "得分" },
          { dim: 1, name: "助攻" },
          { dim: 2, name: "罚球" },
          { dim: 3, name: "前场篮板" },
          { dim: 4, name: "后场篮板" },
          { dim: 5, name: "犯规" },
          { dim: 6, name: "失误" },
          { dim: 7, name: "盖帽" },
          { dim: 8, name: "抢断" },
          { dim: 9, name: "三分命中" }
        ],
        series: {
          type: "parallel",
          lineStyle: {
            width: 3
          },
          data: []
        }
      };
    }
  }
};
</script>
