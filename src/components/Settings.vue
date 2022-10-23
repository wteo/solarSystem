<script lang="ts">

import { defineComponent } from 'vue';
import settings from '../icons/settings.png';

export default defineComponent({
  data() {
    return {
        isSettingsClicked: false,
        isVisible: false,
        image: settings,
        play: false,
    }
  },
  methods: {
    settingsHandler() {
      this.isSettingsClicked = !this.isSettingsClicked;
    },
    orbitHandler() {
      this.isVisible = !this.isVisible;
      this.$emit('clicked', { orbit: this.isVisible, animation: this.play });
    },
    animationHandler() {
      this.play = !this.play;
      this.$emit('clicked', { orbit: this.isVisible, animation: this.play });
    },
  }
})

</script>

<template>

  <nav>
    <div id="settings" @click="settingsHandler">
      <img class="image" :src="image" alt="settings"/>
    </div>
    <Transition>
      <ul v-if="isSettingsClicked" id="menu">
        <li>
          <span class="settings-label">Orbit</span>
          <div @click="orbitHandler" class="options">
            <span class="on" v-if="isVisible">On</span>
            <span class="off" v-if="!isVisible">Off</span>
          </div>
        </li>
        <li>
          <span class="settings-label">Speed</span>
          <div class="options">
            <span class="speed">Slow</span>
            <span class="speed">Normal</span>
            <span class="speed">Fast</span>
          </div>
        </li>
        <li>
          <span class="settings-label">Animation</span>
          <div @click="animationHandler" class="options">
            <span class="on" v-if="play">Continue</span>
            <span class="off" v-if="!play">Pause</span>
          </div>
        </li>
      </ul>
    </Transition>
  </nav>

</template>


<style lang="scss">

  @import '@/scss/helpers/variables';

  .visible {
    border: $orbit-border;
  }

  .hidden {
    border: $orbit-hidden;
  }

  .paused {
    animation-play-state: paused;
  }

  $selected: rgb(255, 255, 255);
  $notSelected: gray;

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
      border: 1px solid $font-color;
      background-color: $space-background-color;
      padding: 10px;
      border-radius: 5px;

      li {
        display: flex;
        flex-direction: row;

        .settings-label {
            width: 15vw;
        }

        .options {

            span {
                margin-left: 1vw;
                color: $notSelected;
                &:hover {
                    cursor: pointer;
                }
            }

            .on {
                color: $selected;
            }

            .off {
                color: $notSelected;
            }

            .speed {
                transition: all 0.2s;
                &:hover {
                    color: $selected;
                }
            }
        }
      }
    }

    #settings {
      width: 20px;
      cursor: pointer;
    }
  }

</style>