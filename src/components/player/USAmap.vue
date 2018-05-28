<template>
<div id="map">
</div>
</template>

<script>
import echarts from "echarts";
import usaJson from "../../../static/geoJson";
export default {
  props:{
    data: Array
  },

  methods: {
    drawMap() {
      echarts.registerMap("USA", usaJson, {
        Alaska: {
          // 把阿拉斯加移到美国主大陆左下方
          left: -131,
          top: 25,
          width: 15
        },
        Hawaii: {
          left: -110, // 夏威夷
          top: 28,
          width: 5
        },
        "Puerto Rico": {
          // 波多黎各
          left: -76,
          top: 26,
          width: 2
        }
      });
      let map = echarts.init(document.getElementById("map"));
      const option = {
        title: {
          text: "USA Population Estimates (2012)",
          subtext: "Data from www.census.gov",
          sublink: "http://www.census.gov/popest/data/datasets.html",
          left: "right"
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function(params) {
            var value = (params.value + "").split(".");
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
            return params.seriesName + "<br/>" + params.name + ": " + value;
          }
        },
        visualMap: {
          left: "right",
          // min: 500000,
          // max: ,
          color: [
            "#B71C1C",
            "#E53935",
            "#F9A825",
            "#FFEE58",
            "#0288D1",
            "#01579B"
          ],
          text: ["High", "Low"], // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: "left",
          top: "top",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "USA PopEstimates",
            type: "map",
            roam: true,
            map: "USA",
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            // 文本位置修正
            textFixed: {
              Alaska: [20, -20]
            },
            data: this.data,
          }
        ]
      };
      map.setOption(option);
    }
  },
  mounted() {
    this.drawMap();
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 400px;
}
</style>

