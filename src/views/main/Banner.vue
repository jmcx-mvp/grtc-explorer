<template>
  <div class="banner-container">
    <div class="row">
      <div class="col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div class="col">
            <p class="banner-tit">{{ $t("banner.tit") }}</p>
            <p class="banner-txt">{{ $t("banner.txt1") }}</p>
            <p class="banner-txt">{{ $t("banner.txt2") }}</p>
            <p class="banner-txt">{{ $t("banner.txt3") }}</p>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
        <div class="row"><div class="col"><img class="banner-logo" :src="'./static/icon/banner.png'" alt=""></div></div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div>
          <input type="text" v-model="address" :placeholder="$t('input.address')" class="grtc-input">
        </div>
        <div>
          <input type="submit" class="btn grtc-btn" :value="$t('common.confirm')" @click="findData">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      address: ""
    }
  },
  methods: {
    findData() {
      this.$router.push({name: "TxList", params: {address: this.address}})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.banner-container {
  padding-top: 40px;
  padding-bottom: 40px;

  .banner-tit,
  .banner-txt {
    max-width: 600px;
    text-shadow: 0 0 80px rgba(192,219,255,0.48), 0 0 32px rgba(65,120,255,0.24);
  }
  .banner-tit {
    color: $titColor;
    font-size: 72px;
    font-weight: 900;
    font-family: $fontTit;
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .banner-txt {
    color: $txtColor;
    font-size: 18px;
    font-family: $fontTxt;
  }

  .btn-swap {
    margin-top: 30px;
    padding: 12px 36px;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    opacity: 1;
    cursor: pointer;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: $divBorderColor;
    border-image: initial;
    color: $btnFontColor;
    background-color: $btnBg;
    transition: all 0.1s ease 0s;
    outline: $walletBtnOutline;
    margin-bottom: 15px;
    font-size: 18px;
    font-family: $fontTxt;
  }
  .btn-swap:hover {
    cursor: pointer;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: $btnFontColor;
    border-image: initial;
    color: $btnBg;
    background-color: $btnFontColor;
    font-family: $fontTit;
  }

  .grtc-input {
    color: $notesColor;
    background-color: $btnFontColor;
    font-family: $fontTxt;
    width: 50%;
    min-width: 320px;
    height: 54px;
    font-size: 18px;
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: $inputBorder;
    border-image: initial;
    border-radius: 5px;
    outline: none;
    margin-top: 65px !important;
    margin-bottom: 15px !important;
  }

  .grtc-btn {
    padding: 12px 48px;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    opacity: 1;
    cursor: pointer;
    border-radius: 27px;
    border-width: 1px;
    border-style: solid;
    border-color: $inputBorder;
    border-image: initial;
    color: $btnFontColor;
    background-color: $divBg;
    transition: all 0.1s ease 0s;
    outline: $walletBtnOutline;
    margin-bottom: 15px;
    font-size: 18px;
    font-family: $fontTxt;
  }
  .grtc-btn:hover {
    cursor: pointer;
    border-radius: 27px;
    border-width: 1px;
    border-style: solid;
    border-color: $inputBorder;
    border-image: initial;
    color: $divBg;
    background-color: $btnFontColor;
    font-family: $fontTit;
  }

  .banner-logo {
    width: 100%;
    max-width: 480px;
  }
}
</style>
