<script lang="ts">

// To let TypeScript properly infer types inside component options
import { defineComponent } from 'vue';

import Description from './components/Description.vue';
import Sun from './components/Sun.vue';
import InnerPlanets from './components/InnerPlanets.vue';
import AsteroidBelt from './components/AsteroidBelt.vue';
import OuterPlanets from './components/OuterPlanets.vue';


export default defineComponent({
  data() {
    return {
      isSettingsClicked: false,
      isVisible: false
    }
  },
  components: { Description, Sun, InnerPlanets, AsteroidBelt, OuterPlanets },
  methods: {
    settingsHandler() {
      this.isSettingsClicked = !this.isSettingsClicked;
    },
    orbitHandler() {
      this.isVisible = !this.isVisible;
    }
  }
})

</script>

<template>
  <nav>
    <div id="settings" @click="settingsHandler">
      <img class="image" src="./icons/settings.png" alt=" +settings"/>
    </div>
    <Transition>
      <ul v-if="isSettingsClicked" id="menu">
        <li>
          <span>Orbit</span>
          <div @click="orbitHandler" id="orbit-visibility">
            <span id="on" v-if="isVisible">On</span>
            <span id="off" v-if="!isVisible">Off</span>
          </div>
        </li>
      </ul>
    </Transition>
  </nav>
  <div class="solarSystemContainer">
    <Sun />
    <InnerPlanets />
    <AsteroidBelt />
    <OuterPlanets />
  </div>

</template>


<style lang="scss">
  @import '@/scss/main.scss';

  .orbit {
    border: $orbit-border;
  }

  nav {

    position: fixed;
    z-index: 200;
    color: $font-color;
    top: 20px;
    left: 20px;

    > * {
      margin: 0;
      padding: 0;
    }

    ul {

      list-style-type: none;
      border: 1px solid white;
      background-color: $space-background-color;
      padding: 10px;
      border-radius: 5px;

      li {
        display: flex;
        flex-direction: row;

        #orbit-visibility {
          margin-left: 8px;

          &:hover {
            cursor: pointer;
          }

          #on {
            color: greenyellow;
          }
          #off {
            color: rgb(131, 64, 64);
          }
        }
      }
    }

    #settings {
      width: 20px;
    }

  }

</style>
