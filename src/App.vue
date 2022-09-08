<script>

import Planets from './components/Planets.vue';

export default {
  components: { Planets }
}

</script>

<template>

  <h1>The Solar System</h1>
  <div class="solarSystemContainer">
    <div id="sun" />
    <Planets />
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

#sun {
  position: absolute;
  top: 230px;
  left: 230px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: orange;
  z-index: 100;
}

</style>
