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


<style>

* {
  box-sizing: border-box;
  --space-background-color: rgb(22, 16, 58);
  --orbit-border: 2px #4A437F dashed;
  --font-color: white;
}

#body {
  background-color: var(--space-background-color);
}

h1 {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 300%;
  z-index: 200;
  color: var(--font-color);
}

.solarSystemContainer {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 100%;
  width: 100%;
}

#sun:hover, #asteroid-belt:hover, .planet:hover, .clicked {
    cursor: pointer;
    box-shadow: 0px 0px 20px white; 
}

@keyframes orbiting {
    0% {
        transform: rotate(135deg);
    }
    50% {
        transform: rotate(315deg);
    }
    100% {
        transform: rotate(495deg);
    }
  }
  

</style>
