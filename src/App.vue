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
  --orbit-border: 0.1vw #2b2369 dashed;
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

/* Animation for box description */
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

.solarSystemContainer {
  position: fixed;
  top: 15px;
  left: 20px;
  height: 100%;
  width: 100%;
}

.orbit {
    position: absolute;
    border: var(--orbit-border);
    border-radius: 100%;
}

.image {
    width: 100%;
    height: 100%;
    border-radius: 100%;  
}

#sun:hover, #asteroid-belt:hover, .planet:hover, .clicked {
    cursor: pointer;
    box-shadow: 0vw 0vw 2vw white; 
}

@keyframes orbiting {
    0% {
        transform: rotate(115deg);
    }
    50% {
        transform: rotate(295deg);
    }
    100% {
        transform: rotate(475deg);
    }
  }
  

</style>
