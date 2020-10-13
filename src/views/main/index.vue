<template>
  <div class="container-fluid main-container">
    <banner></banner>
    <dashboard></dashboard>
    <list></list>

    <div class="row">
      <div class="col text-center">
        <div class="security-tit">{{ $t("security.audit") }}</div>
        <img class="security-logo" :src="'./static/security/slowmist.png'" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/views/main/Banner";
import Dashboard from "@/views/main/Dashboard";
import List from "@/views/main/List";

export default {
  components: { Banner, Dashboard, List },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.main-container {
  height: 100%;

  .security-tit {
    margin-top: 45px;
    color: $titColor;
    font-size: 27px;
    font-weight: 900;
    font-family: $fontTit;
    text-shadow: 0 0 80px rgba(192,219,255,0.48), 0 0 32px rgba(65,120,255,0.24);
  }
  .security-logo {
    margin-top: 15px;
    margin-bottom: 30px;
    height: 35px;
  }
}
</style>
