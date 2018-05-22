<template>
<v-content>
  this is top player
  <pos-neg-bar></pos-neg-bar>
  <pie-bar></pie-bar>
</v-content>

</template>

<script>
import PosNegBar from '../components/topplayer/PosNegBar'
import PieBar from '../components/topplayer/PieBar'
export default {
  components:{
    'pos-neg-bar': PosNegBar,
    'pie-bar': PieBar
  }
}
</script>
