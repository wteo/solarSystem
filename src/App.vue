<script lang="ts">

// To let TypeScript properly infer types inside component options
import { defineComponent } from 'vue';

import Settings from './components/Settings.vue';
import Description from './components/Description.vue';
import Sun from './components/Sun.vue';
import Planets from './components/Planets.vue';
import AsteroidBelt from './components/AsteroidBelt.vue';

export default defineComponent({
  data() {
    return {
      isHidden: false,
    }
  },
  components: { Settings, Description, Sun, Planets, AsteroidBelt },
  methods: {
    onHide(value: boolean) {
      console.log(value);
      this.isHidden = value;
    }
  },
})

</script>

<template>

  <Settings @clicked="onHide"/>
  <div class="solarSystemContainer">
    <Sun />
    <Planets :hide="isHidden" />
    <AsteroidBelt />
  </div>

</template>


<style lang="scss">
  @import '@/scss/main.scss';
</style>
