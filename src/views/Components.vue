<template>
    <div>
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <OurServices></OurServices>
        <OurClients></OurClients>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import OurServices from "./components/OurServices";
import OurClients from "./components/OurClients";


export default {
  name: "components",
  components: {
    Hero,
    Icons,
    Examples,
    OurServices
  }
};
</script>
