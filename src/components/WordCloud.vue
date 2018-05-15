<template>
  <v-content id="main"></v-content>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
      title: String,
      seriesName: String,
      data: Array,//{name: ??, value: ??}
  },

  methods: {
    getOption() {
      let option = {
        title: {
          text: this.title,
          x: "center",
          textStyle: {
            fontSize: 23
          }
        },
        // backgroundColor: "#F7F7F7",
        tooltip: {
          show: true
        },
        series: 
          {
            name: this.seriesName,
            type: "wordCloud",
            //size: ['9%', '99%'],
            sizeRange: [6, 66],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            //shape: 'circle',
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 6
            },
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: this.data,
          }
      };
      return option;
    },

    drawWordCloud() {
    //   var echarts = require('echarts');
      require('echarts-wordcloud');
      let wordCloud = echarts.init(document.getElementById("main"));
      wordCloud.setOption(this.getOption());
    }
  },

  mounted() {
      console.log("word cloud");
      this.drawWordCloud();
  }
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 400px;
}
</style>


