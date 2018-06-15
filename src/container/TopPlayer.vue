<template>
<v-content>
  this is top player
  <v-layout row >
    <v-flex xs5>
      <pie-bar
      v-if="players_pie"
     :score=getPlayerScore
     :shot=getPlayerShot></pie-bar>
    </v-flex>
    <v-flex xs3>
      <radar></radar>
    </v-flex>
    <v-flex xs2> 
       <v-radio-group v-if="players_pie" v-model="name" hide-details>
        <v-radio v-for="item in players_one" :key="item"  :value="item" :label="item"></v-radio>
        </v-radio-group>
    </v-flex>
    <v-flex xs2>
      <v-radio-group v-if="players_pie" v-model="name" hide-details>
        <v-radio  v-for="item in players_two" :key="item" :value="item" :label="item"></v-radio>
      </v-radio-group>
      </v-flex>   
  </v-layout>
  <v-layout row>
  <v-flex xs6>
    <liner v-if="players_time"
    :players="players_time"
    title="上场时间"></liner>
  </v-flex>
  <v-flex xs6>
    <line-two v-if="players_score"
    :players="players_score"
    title="得分"></line-two>
  </v-flex>
  </v-layout>
</v-content>


</template>

<script>
import PieBar from '../components/topplayer/PieBar'
import Radar from '../components/topplayer/Radar'
import axios from 'axios'
import Liner from '../components/topplayer/Liner'
import LineTwo from '../components/topplayer/LineTwo'
export default {
  created(){
    axios.get('http://127.0.0.1:5000/api/players_time.json').then(res=>{
      this.players_time = res.data;
    });
    axios.get('http://127.0.0.1:5000/api/players_score.json').then(res=>{
      this.players_score = res.data;
    })
    axios.get("http://127.0.0.1:5000/api/top_score_shot.json").then(res=>{
      this.players_pie = res.data;
    })
  },
  computed:{
    getPlayerScore(){
      if(!this.players_pie){return "shenme"}
      return this.players_pie['得分'][this.name]
    },
    getPlayerShot(){
      if(!this.players_pie){return "shenme"}
      return this.players_pie['出手'][this.name]
    }
  },

  data(){
    return{
      name: '库里',
      players_time: false,
      players_score: false,
      players_pie: false,
      players_one:["C.J.迈克鲁姆", "保罗-乔治", "凯文-杜兰特", "凯里-欧文", "勒布朗-詹姆斯", "安东尼-戴维斯", "布拉德利-比尔", "库里", "德玛尔-德罗赞"],
      players_two: ["德马库斯-考辛斯", "扬尼斯-阿德托昆博", "拉塞尔-威斯布鲁克", "拉玛库斯-阿尔德里奇", "维克多-奥拉迪波", "肯巴-沃克", "詹姆斯-哈登", "达米安-利拉德"],
    }
  },

  components:{
    'pie-bar': PieBar,
    'radar': Radar,
    'liner': Liner,
    'line-two': LineTwo,
  }
}
</script>
