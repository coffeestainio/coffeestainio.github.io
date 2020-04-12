<template>
    <div>
        <hero></hero>
        <OurServices></OurServices>
        <OurClients></OurClients>
        <examples></examples>
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
