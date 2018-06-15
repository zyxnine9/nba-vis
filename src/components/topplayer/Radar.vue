<template>
    <v-content id="radar"></v-content>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    drawRadar() {
      let bar = echarts.init(document.getElementById("radar"));
      let option = {
        title:{
          text:'天赋'
        },
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
            { name: "行业信息", max: 6500 },
            { name: "企业规模", max: 16000 },
            { name: "企业信用", max: 30000 },
            { name: "创新能力", max: 38000 },
            { name: "人才潜力", max: 52000 },
            { name: "融资能力", max: 25000 }
          ],
          
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
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

  }
};
</script>


<style scoped>
#radar {
  width: 100%;
  height: 300px;
}
</style>

