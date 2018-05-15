<template>
<v-content>
  <word-cloud
  title="试一试"
  seriesName="看得见"
  :data="data"></word-cloud>
</v-content>
</template>

<script>
import WordCloud from '../components/WordCloud'
export default {
  data(){
    return{
      data: [
        { name: "张永旭", value: 80 },
        { name: "太强", value: 19 },
        { name: "老九", value: 77 },
        { name: "ZYX", value: 23 },
        { name: "退役", value: 90 },
        { name: "SKS", value: 80 },
        { name: "小郭", value: 66 },
        { name: "CBD", value: 53 },
        { name: "98k", value: 49 },
        { name: "卡尔玛", value: 47 },
        { name: "女警", value: 54 },
        { name: "金克丝", value: 34 },
        { name: "犀牛", value: 29 },
      ],
    }
  },
  components:{
    "word-cloud": WordCloud
  }
}
</script>
