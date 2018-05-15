<template>
<v-content>
   <v-layout>
    <v-flex xs12 >
      <v-card style="background: rgb(0, 188, 212)" class="mar">
        <p align='center' >
        <img 
        src="../../static/basketball.png" 
        width="9%"
        height="auto"
        alt="basketball">
        </p>

          <v-container fill-height fluid>
            <v-layout fill-height row>
              <v-flex xs12 align-center flexbox>
                <p class="text-xs-center display-3 white--text">
                  NBA的可视化分析
                </p>
                <p class="text-xs-center white--text title">
                  This is why we visualization</p>
                <p align="center">
                  <v-btn large>
                    <strong style="color: rgb(0, 188, 212)">
                      Let's Go
                    </strong>
                  </v-btn>
                </p>

              </v-flex>
            </v-layout>
          </v-container>

        <v-card-title>
          <div>
            <span class="white--text">NBA 常规赛</span><br>
            <span class="white--text"></span><br>
            <span class="white--text"> 季后赛</span><br>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</v-content>
</template>

<style scoped>
.mar {
  padding-top: 3%;
}
.title{
  text-shadow: black;
}
</style>

<script>
export default {
  mounted(){
    console.log("son")
  }
}
</script>


