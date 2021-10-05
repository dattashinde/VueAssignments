<template>
  <div class="weather">
    <HeaderCmp></HeaderCmp>
    <CurrentWhtCmp :name="whetherData"></CurrentWhtCmp>
    <DailyWhtCmp :name="whetherData"></DailyWhtCmp>
    <HourlyWhtCmp :name="whetherData"> </HourlyWhtCmp>
  </div>
</template>

<script>
import HeaderCmp from "./HeaderComponent.vue";
import CurrentWhtCmp from "./CurrentWthComponent.vue";
import DailyWhtCmp from "./DailyWthComponent.vue";
import HourlyWhtCmp from "./HourlyWthComponent.vue";
import axios from "axios";

export default {
  name: "RootWeatherComponent",
  components: {
    HeaderCmp,
    CurrentWhtCmp,
    DailyWhtCmp,
    HourlyWhtCmp,
  },
  data() {
    return {
      whetherData: [],
      name: "sfsfs",
    };
  },
  created() {
    var that = this;
    // console.log('this.baseUrl ===',this.baseUrl)
    axios
      .get("http://localhost:8080/whether.json")
      .then((response) => {
        that.whetherData = response.data;
        console.log(' that.whetherData', that.whetherData)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.weather{
  margin-top: 50px;
  margin-left: 20%;
}
</style>