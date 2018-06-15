<template>
<div>
    <v-container>
    <v-layout row  justify-space-around>
         <v-flex xs6 >
             <v-slider v-model="beta" label="调整beta的值"></v-slider>
         </v-flex>
         <v-flex offset xs2>
             <v-card dark color="accent">
          <v-card-text>现在beta的值是{{beta/100}}</v-card-text>
        </v-card>
         </v-flex>
    </v-layout>
    <v-layout row  justify-center>
        <img src="../../../static/formula.png" alt="" srcset="">
    </v-layout>
    <v-layout row justify-center>
        <span>beta越大，以前rank值的影响越大</span>
    </v-layout>
    </v-container>
    
    <v-content id="inside"></v-content>
</div>
  
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    rank: Object
  },
  data() {
    return {
      beta: 50
    };
  },
  methods: {
    drawBar() {
      let bar = echarts.init(document.getElementById("inside"));
      let option = {
        title: {
          textStyle: {
            fontSize: 34,
            fontStyle: "normal",
            fontWeight: "normal"
          },
          text: "球队底蕴",

          x: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        calculable: false,
        xAxis: [
          {
            type: "category",
            axisLabel: {
              show: true,
              rotate: 40,
              fontSize: 15,
              fontWeight: "bold"
            },
            data: [
              "克里夫兰骑士",
              "波士顿凯尔特人",
              "迈阿密热火",
              "布鲁克林篮网",
              "纽约尼克斯",
              "奥兰多魔术",
              "费城76人",
              "华盛顿奇才",
              "底特律活塞",
              "印第安纳步行者",
              "夏洛特黄蜂",
              "密尔沃基雄鹿",
              "亚特兰大老鹰",
              "芝加哥公牛",
              "多伦多猛龙",
              "洛杉矶湖人",
              "达拉斯独行侠",
              "圣安东尼奥马刺",
              "明尼苏达森林狼",
              "犹他爵士",
              "休斯顿火箭",
              "孟菲斯灰熊",
              "丹佛掘金",
              "萨克拉门托国王",
              "波特兰开拓者",
              "菲尼克斯太阳",
              "金州勇士",
              "俄克拉荷马城雷霆",
              "洛杉矶快船",
              "新奥尔良鹈鹕",
              ""
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "数值",
            type: "bar",
            data: this.getInside(
              this.getEastAndWest(this.rank),
              this.beta / 100
            ),
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值"
                },
                {
                  type: "min",
                  name: "最小值"
                }
              ]
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值"
                }
              ]
            }
          }
        ]
      };
      bar.setOption(option);
    },
    getEastAndWest(data) {
      return data.dongbu.concat(data.xibu);
    },
    getInside(data, beta) {
      let result = [];
      for (let a = 0; a < 30; ++a) {
        let team = data.filter(e => e[0] == a); //一个球队
        team = team.sort((e1, e2) => e1[1] - e2[1]); //赛季从0-7排序，0是10-11，7是17-18
        let team_rank = team.map(e => e[2]);
        const inside = team_rank.reduce(
          (e1, e2) => e1 * beta + e2 * (1 - beta)
        );
        result.push(inside);
      }
      return result;
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
#inside {
  width: 100%;
  height: 480px;
}
</style>
