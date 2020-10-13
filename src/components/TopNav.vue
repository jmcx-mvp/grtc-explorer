<template>
  <nav
    class="navbar navbar-expand-md bg-light navbar-dark container"
  >
    <router-link class="navbar-brand" :to="{ path: '/' }">
      <img class="navbar-logo" :src="'./static/logo/logo.png'" alt=""/>
    </router-link>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse"  id="myNavbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown change-lang-btn">
          <a
            class="nav-link"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            <i class="fa fa-globe"></i>
            {{ $i18n.locale.toLocaleUpperCase() }}
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="setLang('en')">EN</a >
            <a class="dropdown-item" @click="setLang('zh')">ZH</a >
          </div>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "NavBar",
  methods: {
    setLang($lang) {
      this.$i18n.locale = $lang
      Cookies.set("language", $lang)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/colors.scss";
@import "../styles/fonts.scss";

.navbar {
  max-width: 1280px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: $fontTxt;
}
.navbar-toggler {
  border: 0;
}
.navbar-logo {
  height: 42px;
  //width: 40px;
}
.top-name {
  font-size: 16px;
  margin-left: 15px;
  color: $linkColor;
}
.bg-light,
.dropdown-menu {
  background-color: $bg !important;
}
.nav-item {
  margin: 12px 0;
}
.nav-link {
  padding: 0;
}
.nav-item > a,
.change-lang-btn > a,
.dropdown-item {
  font-size: 18px;
  color: $linkColor !important;
}
.nav-item > a:hover,
.change-lang-btn > a:hover {
  color: $linkHoverColor !important;
}
.scroll-bottom {
  margin: 24px 0 24px 48px;
}
.change-lang-btn {
  margin-left: 48px;
}
.scroll-bottom:hover {
  cursor: pointer;
}
</style>
