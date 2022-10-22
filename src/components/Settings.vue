<script lang="ts">

import { defineComponent } from 'vue';
import settings from '../icons/settings.png';

export default defineComponent({
  data() {
    return {
        isSettingsClicked: false,
        isVisible: false,
        image: settings,
    }
  },
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
      <img class="image" :src="image" alt="settings"/>
    </div>
    <Transition>
      <ul v-if="isSettingsClicked" id="menu">
        <li>
          <span class="settings-label">Orbit</span>
          <div @click="orbitHandler" id="visibility-options">
            <span id="on" v-if="isVisible">On</span>
            <span id="off" v-if="!isVisible">Off</span>
          </div>
        </li>
        <li>
          <span class="settings-label">Speed</span>
          <div id="speed-options">
            <span>Slow</span>
            <span>Normal</span>
            <span>Fast</span>
          </div>
        </li>
      </ul>
    </Transition>
  </nav>

</template>


<style lang="scss">

  @import '@/scss/helpers/variables';

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

        .settings-label {
            width: 10vw;
        }

        #visibility-options {
          margin-left: 1vw;

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

        #speed-options {
            
            span {
                margin-left: 1vw;
                color: rgb(146, 146, 146);
                transition: all 0.1s;

                &:hover {
                    color: greenyellow;
                }
            }
        }
      }
    }

    #settings {
      width: 20px;
    }
  }

</style>