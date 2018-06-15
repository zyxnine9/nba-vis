<template>
   <v-layout>
     <p>{{shot.value}}</p>
     <v-flex xs6>
        <v-content id="pie-bar" class="pie-bar"></v-content>
     </v-flex>
     <v-flex xs6>
        <v-content id="pie-bar2" class="pie-bar"></v-content>
     </v-flex>  
   </v-layout>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    shot: Array,
    score: Array
  },
  methods: {
    drawBar() {
      let bar = echarts.init(document.getElementById("pie-bar"));
      let bar2 = echarts.init(document.getElementById("pie-bar2"));
      let option1 = {
        title: {
          text: "个人出手占球队出手"
        },
        tooltip: {
          trigger: "item",
          // center: 'right',
          position: ["50%", "100%"],
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          { 
            name: '出手',
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.shot,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      let option2 = {
        title: {
          text: "个人得分占球队得分"
        },
        tooltip: {
          trigger: "item",
          // center: 'right',
          position: ["50%", "100%"],
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            name: "得分",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.score,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      bar.setOption(option1);
      bar2.setOption(option2);
      echarts.connect([bar, bar2]);
    }
  },
  mounted() {
    this.drawBar();
  },
  updated() {
    this.drawBar();
  }
};
</script>


<style scoped>
.pie-bar {
  width: 100%;
  height: 300px;
}
</style>
