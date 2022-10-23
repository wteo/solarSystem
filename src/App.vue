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
      // console.log(value);
      this.isHidden = value;
    },
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
  <div id="play-box">
    <audio controls autoplay>
      <source src="./audio/alone.mp3" type="audio/mpeg">
      Your browser doesn't support the audio element.
    </audio>
  </div>

</template>


<style lang="scss">
  @import '@/scss/main.scss';

  #play-box {

    height: 85px;
    position: fixed;
    bottom: -20px;
    left: 20px;
    z-index: 200;
    width: 95%;
    transition: all 0.5s;
    opacity: 0;

    &:hover {
      opacity: 1;
      transform: translateY(-20px);
      cursor: pointer;
    }

    audio {
      height: 15px;
      width: 100%;
      margin-top: 50px;
    }
  }

</style>
