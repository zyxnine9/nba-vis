<template>
<div>
  <introduction></introduction>
  <div class="back">
    <div class="des">
      <h1 align="center">This is a website made for 2018 Sichuan University data-visualization course</h1>
    </div>
    <hr>
  </div>

  <bar-char 
  class="des"
  :name="name"
  :data="data"
  :y="y"
  title="项目进度"
  ></bar-char>

  <word-cloud
  v-if="words"
  title="NBA一览"
  seriesName="新闻"
  :data="words"></word-cloud>
  
  <v-container>
    <v-layout row justify-space-between ma-2>
      <v-flex xs3>
        <v-card hover height="100%">
          <h1 class="text-md-center">篮球</h1>
          <img src="../../static/dunk.png" alt="" width="100%">
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card hover height="100%">
          <h1 class="text-md-center">NBA</h1>
          <img src="../../static/nba.png" width="100%" max-height="200px">
        </v-card >
      </v-flex>
      <v-flex xs3>
        <v-card hover height="100%">
          <h1 class="text-md-center">冠军</h1>
          <img src="../../static/champion.png" width="100%" >
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>


<script>
import Introduction from "@/components/Introduction"
import BarChar from "@/components/BarChar"
import WordCloud from '../components/WordCloud'
import axios from 'axios'

export default {
  data(){
    return{
      y: ["爬取数据","数据处理","可视化"],
      data: [70,60,66],
      name: "进度",
      words: false,
    }
  },
  mounted(){
    console.log("mounted")
  },
  created(){
    console.log("haha")
     axios.get('http://127.0.0.1:5000/api/keywords.json')
    .then(response=>{
      this.words = response.data;
    })
  }
  ,
  components:{
    "introduction": Introduction,
    "bar-char": BarChar,
    "word-cloud": WordCloud,
  }
}
</script>

<style scoped>
.des{
  /* margin-left: 8px; */
  padding-top: 40px;
  padding-bottom: 32px;
  /* margin-right: 8px; */
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
hr{
  margin-left: 10%;
  margin-right: 10%;
}
</style>


