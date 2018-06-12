<template>
<v-content>
  this is top player
  <pie-bar></pie-bar>
  <radar></radar>
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
  },

  data(){
    return{
      players_time: false,
      players_score: false
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
