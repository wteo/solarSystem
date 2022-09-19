<script>

import Description from './components/Description.vue';
import Sun from './components/Sun.vue';
import InnerPlanets from './components/InnerPlanets.vue';
import AsteroidBelt from './components/AsteroidBelt.vue';
import OuterPlanets from './components/OuterPlanets.vue';


export default {
  components: { Description, Sun, InnerPlanets, AsteroidBelt, OuterPlanets },

}

</script>

<template>

  <h1>The Solar System</h1>
  <div class="solarSystemContainer">
    <Sun />
    <InnerPlanets />
    <AsteroidBelt />
    <OuterPlanets />
  </div>

</template>


<style lang="scss">
  @import '@/scss/main.scss';
</style>
