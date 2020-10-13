<template>
  <div class="dashboard-container">
    <div class="dashboard-bg"></div>

    <div class="row">
      <div class="col text-center">
        <p class="dashboard-title">{{ $t("dashboard.title") }}</p>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="dashboard-data">
          <p class="dashboard-tit">{{ $t("dashboard.tit1") }}</p>
          <p class="dashboard-txt">{{ blockHeight }}</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="dashboard-data">
          <p class="dashboard-tit">{{ $t("dashboard.tit2") }}</p>
          <p class="dashboard-txt">{{ lists.tradeCount }}</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="dashboard-data">
          <p class="dashboard-tit">{{ $t("dashboard.tit3") }}</p>
          <p class="dashboard-txt">{{ nodes }}</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="dashboard-data">
          <p class="dashboard-tit">{{ $t("dashboard.tit4") }}</p>
          <p class="dashboard-txt">{{ lists.userCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "../../components/Countdown";

export default {
  name: "Dashboard",
  components: {Countdown},
  data() {
    return {
      blockHeight: "0",
      nodes: "10",
    }
  },
  created() {
    this.$store.dispatch("getInfos")
  },
  computed: {
    lists() {
      return this.$store.getters.infos || {};
    },
  },
  mounted() {
    this.getNow()
  },
  methods: {
    getNow() {
      let dateTime = "2020-10-01 10:00:00"
      let date = new Date()
      let now = date.getTime()
      let endDate = new Date(dateTime.replace(/\s/, 'T').concat('.000+08:00'))
      let end = endDate.getTime()

      let leftTime = now - end
      let retD = parseInt(leftTime / 6000);
      this.blockHeight = this.$HelperTools.toFinancialVal(retD)

      setTimeout(this.getNow, 3000)
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.dashboard-container {
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;

  .dashboard-bg {
    top: -40px;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    background-image: url("/grtc-explorer/static/icon/dashboard-bg.png");
    background-color: transparent;
    background-repeat: no-repeat;
    opacity: 0.1;
  }

  .dashboard-title {
    color: $titColor;
    font-size: 27px;
    font-weight: 900;
    font-family: $fontTit;
    text-shadow: 0 0 80px rgba(192,219,255,0.48), 0 0 32px rgba(65,120,255,0.24);
  }

  .dashboard-data {
    border-width: 1px;
    border-style: solid;
    border-color: $divBorderColor;
    border-image: initial;
    border-radius: 5px;
    padding: 30px 5px;
    margin: 15px 0;
    background-color: $divBg;
    color: $txtColor;
  }

  .dashboard-tit {
    opacity: 0.5;
    color: $txtColor;
    font-size: 14px;
    font-weight: 400;
    font-family: $fontTxt;
  }
  .dashboard-txt {
    text-shadow: 0 0 80px rgba(192,219,255,0.48), 0 0 32px rgba(65,120,255,0.24);
    color: $titColor;
    font-size: 24px;
    font-weight: 400;
    font-family: $fontTit;
  }
}
</style>
