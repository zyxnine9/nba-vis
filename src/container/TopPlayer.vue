<template>
<v-content>
  <v-layout row >
    <v-flex xs5>
      <pie-bar
      v-if="players_pie"
     :score=getPlayerScore
     :shot=getPlayerShot></pie-bar>
      <v-progress-circular
        v-else
        :size="70" :width="7" indeterminate color="purple">
      </v-progress-circular>
    </v-flex>
    <v-flex xs3>
      <radar
      :player="Player">
      </radar>
    </v-flex>
    <v-flex xs2> 
       <v-radio-group v-if="players_pie" v-model="name" hide-details>
        <v-radio v-for="item in players_one" :key="item"  :value="item" :label="item"></v-radio>
        </v-radio-group>

        <v-progress-circular
         v-else
         :size="70" :width="7" indeterminate color="purple">
        </v-progress-circular>
    </v-flex>
    <v-flex xs2>
      <v-radio-group v-if="players_pie" v-model="name" hide-details>
        <v-radio  v-for="item in players_two" :key="item" :value="item" :label="item"></v-radio>
      </v-radio-group>
       <v-progress-circular
        v-else
        :size="70" :width="7" indeterminate color="purple">
      </v-progress-circular>
      </v-flex>   
  </v-layout>
  <v-layout row>
  <v-flex xs6>
    <liner v-if="players_time"
    :players="players_time"
    title="上场时间"></liner>
     <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple">
     </v-progress-circular>
  </v-flex>
  <v-flex xs6>
    <line-two v-if="players_score"
    :players="players_score"
    title="得分">
    </line-two>
     <v-progress-circular
     v-else
     :size="70" :width="7" indeterminate color="purple">
     </v-progress-circular>
  </v-flex>
  </v-layout>
</v-content>


</template>

<script>
import PieBar from "../components/topplayer/PieBar";
import Radar from "../components/topplayer/Radar";
import axios from "axios";
import Liner from "../components/topplayer/Liner";
import LineTwo from "../components/topplayer/LineTwo";
export default {
  created() {
    axios.get("/api/players_time.json").then(res => {
      this.players_time = res.data;
    });
    axios.get("/api/players_score.json").then(res => {
      this.players_score = res.data;
    });
    axios.get("/api/top_score_shot.json").then(res => {
      this.players_pie = res.data;
    });
  },
  computed: {
    getPlayerScore() {
      if (!this.players_pie) {
        return "shenme";
      }
      return this.players_pie["得分"][this.name];
    },
    getPlayerShot() {
      if (!this.players_pie) {
        return "shenme";
      }
      return this.players_pie["出手"][this.name];
    },
    Player() {

      return this.radarData[this.name];

    }
  },

  data() {
    return {
      name: "库里",
      players_time: false,
      players_score: false,
      players_pie: false,
      players_one: [
        "C.J.迈克鲁姆",
        "保罗-乔治",
        "凯文-杜兰特",
        "凯里-欧文",
        "勒布朗-詹姆斯",
        "安东尼-戴维斯",
        "布拉德利-比尔",
        "库里",
        "德玛尔-德罗赞"
      ],
      players_two: [
        "德马库斯-考辛斯",
        "扬尼斯-阿德托昆博",
        "拉塞尔-威斯布鲁克",
        "拉玛库斯-阿尔德里奇",
        "维克多-奥拉迪波",
        "肯巴-沃克",
        "詹姆斯-哈登",
        "达米安-利拉德"
      ],
      radarData: {
        "\u52d2\u5e03\u6717-\u8a79\u59c6\u65af": {
          得分: 27.2,
          篮板: 7.4,
          助攻: 7.2,
          命中: 1.4,
          出手: 19.6
        },
        "\u8a79\u59c6\u65af-\u54c8\u767b": {
          得分: 23.0,
          篮板: 5.1,
          助攻: 6.1,
          命中: 2.4,
          出手: 15.3
        },
        "\u62c9\u585e\u5c14-\u5a01\u65af\u5e03\u9c81\u514b": {
          得分: 23.0,
          篮板: 6.6,
          助攻: 8.2,
          命中: 1.1,
          出手: 18.4
        },
        "\u5b89\u4e1c\u5c3c-\u6234\u7ef4\u65af": {
          得分: 23.4,
          篮板: 10.3,
          助攻: 1.9,
          命中: 0.3,
          出手: 17.1
        },
        "C.J.\u8fc8\u514b\u9c81\u59c6": {
          得分: 17.2,
          篮板: 3.0,
          助攻: 2.9,
          命中: 1.9,
          出手: 14.4
        },
        "\u80af\u5df4-\u6c83\u514b": {
          得分: 18.9,
          篮板: 3.7,
          助攻: 5.4,
          命中: 2.0,
          出手: 15.8
        },
        "\u4fdd\u7f57-\u4e54\u6cbb": {
          得分: 18.6,
          篮板: 6.2,
          助攻: 3.2,
          命中: 2.2,
          出手: 14.7
        },
        "\u7ef4\u514b\u591a-\u5965\u62c9\u8fea\u6ce2": {
          得分: 17.4,
          篮板: 4.5,
          助攻: 3.8,
          命中: 1.5,
          出手: 14.4
        },
        "\u5e03\u62c9\u5fb7\u5229-\u6bd4\u5c14": {
          得分: 18.7,
          篮板: 3.7,
          助攻: 3.4,
          命中: 2.1,
          出手: 15.5
        },
        "\u5fb7\u739b\u5c14-\u5fb7\u7f57\u8d5e": {
          得分: 19.7,
          篮板: 4.1,
          助攻: 3.1,
          命中: 0.5,
          出手: 15.6
        },
        "\u62c9\u739b\u5e93\u65af-\u963f\u5c14\u5fb7\u91cc\u5947": {
          得分: 19.4,
          篮板: 8.3,
          助攻: 1.9,
          命中: 0.1,
          出手: 16.1
        },
        "\u8fbe\u7c73\u5b89-\u5229\u62c9\u5fb7": {
          得分: 23.1,
          篮板: 4.1,
          助攻: 6.2,
          命中: 2.7,
          出手: 17.8
        },
        "\u626c\u5c3c\u65af-\u963f\u5fb7\u6258\u6606\u535a": {
          得分: 17.2,
          篮板: 7.5,
          助攻: 3.8,
          命中: 0.4,
          出手: 12.4
        },
        "\u51ef\u91cc-\u6b27\u6587": {
          得分: 22.0,
          篮板: 3.4,
          助攻: 5.5,
          命中: 2.0,
          出手: 17.4
        },
        '库里': { 得分: 23.1, 篮板: 4.4, 助攻: 6.8, 命中: 3.4, 出手: 16.8 },
        "\u51ef\u6587-\u675c\u5170\u7279": {
          得分: 27.1,
          篮板: 7.1,
          助攻: 3.9,
          命中: 1.9,
          出手: 18.8
        },
        "\u5fb7\u9a6c\u5e93\u65af-\u8003\u8f9b\u65af": {
          得分: 21.5,
          篮板: 11.0,
          助攻: 3.2,
          命中: 0.6,
          出手: 16.7
        }
      }
    };
  },

  components: {
    "pie-bar": PieBar,
    radar: Radar,
    liner: Liner,
    "line-two": LineTwo
  }
};
</script>
