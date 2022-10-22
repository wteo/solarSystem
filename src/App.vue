<script lang="ts">

// To let TypeScript properly infer types inside component options
import { defineComponent } from 'vue';

import Settings from './components/Settings.vue';
import Description from './components/Description.vue';
import Sun from './components/Sun.vue';
import Planets from './components/Planets.vue';
import AsteroidBelt from './components/AsteroidBelt.vue';

export default defineComponent({
  components: { Settings, Description, Sun, Planets, AsteroidBelt },
})

</script>

<template>

  <Settings />
  <div class="solarSystemContainer">
    <Sun />
    <Planets />
    <AsteroidBelt />
  </div>

</template>


<style lang="scss">
  @import '@/scss/main.scss';
</style>
