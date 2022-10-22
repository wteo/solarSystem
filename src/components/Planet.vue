<script lang="ts">

import { defineComponent } from 'vue';

import Description from './Description.vue';

export default defineComponent({
  data() {
    return {
      isClicked: false
    }
  },
  props: {
    description: {
      required: true,
      type: String
    },
    planet: {
      required: true,
      type: String
    },
    orbit: {
      required: true,
      type: String
    },
    imgLink: {
      required: true,
      type: String
    },
    mass: {
      required: true,
      type: String
    },
    volume: {
      required: true,
      type: String
    },
    surfaceArea: {
      required: true,
      type: String
    },
    moonCount: {
      required: true,
      type: [Number, String]
    }
  },
  components: { Description },
  methods: {
    clickHandler() {
      this.isClicked = !this.isClicked;
    }
  }
})

</script>


<template>

  <Transition>
    <Description v-if="isClicked" @closeHandler="clickHandler">
      <h3>{{`${planet.charAt(0).toUpperCase()}${planet.slice(1)}`}}</h3>
      <p>{{ description }}</p>
      <div class="stats">
        <h4>Statistics</h4>
        <p><span class="label">Mass</span><span>: {{ mass }}</span></p>
        <p><span class="label">Volume</span><span>: {{ volume}}</span></p>
        <p><span class="label">Surface Area</span><span>: {{ surfaceArea }}</span></p>
        <p>
          <span class="label">How many moon(s) does {{ `${planet.charAt(0).toUpperCase()}${planet.slice(1)}` }} have?</span> 
          <span>{{ moonCount }}</span>
        </p>
      </div>
    </Description>
  </Transition>
  <div :id="orbit" class="orbit">
    <div :id="planet" :class="{ planet : !isClicked, 'planet clicked' : isClicked }">
      <img class="image" @click="clickHandler" :src="imgLink" :alt="planet" />
    </div>
  </div> 

</template>


<style lang="scss">

@import '@/scss/helpers/placeholders';

.planet {
    position: relative;
    border-radius: 100%;
    transition: box-shadow 0.25s;

    &:hover {
      @extend %clicked;
    }
}

.stats {
  font-size: 85%;
  padding: 1vh 0 3.5vh 0;

  p, h4 {
    margin: 1.5vh 0;

    .label {
      width: 25vw;
      float: left;
    }
  }
}

</style>



