<template>

    <div class="tradingview-widget-container__widget">

    </div>

</template>

<script>
export default {
  name: "BlogTable",
  mounted() {
    this.loadTradingViewScript();
  },
  methods: {
    loadTradingViewScript() {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: "100%",
        height: "600",
        colorTheme: "light",
        locale: "en"
      });
      document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
    }
  }
}
</script>

<style scoped>



</style>