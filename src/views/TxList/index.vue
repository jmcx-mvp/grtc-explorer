<template>
  <div class="list-container">
    <div class="row">
      <div class="col text-center">
        <p class="list-title">{{ $t("txList.title") }}</p>
      </div>
    </div>

    <div class="row list-row">
      <div class="col list-tit text-center">{{ $t("list.time") }}</div>
      <div class="col list-tit text-center">{{ $t("list.addr") }}</div>
      <div class="col list-tit text-center">{{ $t("list.reward") }}</div>
    </div>

    <div class="row"
         v-for="(addr, index)  in lists.tradeList" :key="index"
         :class="index % 2 === 1 ? 'list-row' : 'list-row-2'"
    >
      <div class="col text-center"><div class="list-txt">{{ $HelperTools.getPRCTime(addr.time) }}</div></div>
      <div class="col text-center"><div class="list-txt">{{ addr.address.substr(0,6) + "..." + addr.address.substr(36) }}</div></div>
      <div class="col text-center"><div class="list-txt">{{ $HelperTools.toFinancialVal(addr.amount) }}</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
    this.$store.dispatch("getLists", {address: this.$route.params.address})
  },
  computed: {
    lists() {
      return this.$store.getters.lists || {};
    },
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.list-container {
  padding-top: 80px;
  padding-bottom: 80px;

  .list-title {
    color: $titColor;
    font-size: 27px;
    font-weight: 900;
    font-family: $fontTit;
    text-shadow: 0 0 80px rgba(192,219,255,0.48), 0 0 32px rgba(65,120,255,0.24);
    margin-bottom: 30px;
  }

  .list-row {
    background-color: $divBgOpacity;
  }
  .list-row-2 {
    background-color: $divBgOpacity2;
  }
  .list-tit,
  .list-txt {
    color: $txtColor;
    font-weight: 400;
    font-family: $fontTxt;
    padding: 12px;
  }
  .list-tit {
    font-family: $fontTit;
    font-weight: 700;
  }
}
</style>
