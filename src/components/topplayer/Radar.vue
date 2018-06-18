<template>
    <v-content id="radar">
      <p>{{player}}</p>
    </v-content>
</template>

<script>
import echarts from "echarts";
export default {
  props:{
    player: Object,
  },
  methods: {
    drawRadar() {
      let bar = echarts.init(document.getElementById("radar"));
      let option = {
        title:{
          text:'天赋'
        },
        tooltip: {}, 
        radar: {
          axisLabel:{
            fontWeight:'bold',
            fontSize:30,
          },
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#999999"
            }
          },
          splitArea: {
            areaStyle: {
              color: ["#fff", "#fff", "#fff", "#fff"],
              shadowColor: "rgba(0, 100, 0, 0.3)"
            }
          },
          indicator: [
            { name: "得分", max: 27 },
            { name: "篮板", max: 11 },
            { name: "助攻", max: 8.2 },
            { name: "三分", max: 3.4 },
            { name: "出手", max: 19 },
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [this.player["得分"],this.player['篮板'],this.player['助攻'],
                this.player['命中'],this.player['出手']],
                name: "数据",
                itemStyle: {
                  normal: {
                    color: "rgba(5, 128, 242, 0.8)"
                  },
                },
                areaStyle: {
                  normal: {
                    color: "#0580f2"
                  }
                }
              }
            ]
          }
        ]
      };
      bar.setOption(option);
    }
  },
 
  mounted() {
    this.drawRadar();
  },
  updated(){
    this.drawRadar();
  },

};
</script>


<style scoped>
#radar {
  width: 100%;
  height: 300px;
}
</style>

