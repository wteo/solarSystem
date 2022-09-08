<script>

import Description from './Description.vue';

export default {
  data() {
    return {
      isClicked: false
    }
  },
  props: ['description', 'planet', 'orbit', 'imgLink'],
  components: { Description },
  methods: {
    clickHandler() {
      this.isClicked = !this.isClicked;
    }
  }
}

</script>


<template>

  <Description v-if="isClicked" @closeHandler="clickHandler">
    <h3>{{`${planet.charAt(0).toUpperCase()}${planet.slice(1)}`}}</h3>
    <p>{{ description }}</p>
  </Description>
  <div :id="orbit" class="orbit">
    <div :id="planet" :class="{ planet : !isClicked, 'planet clicked' : isClicked }">
      <img class="planet-image" @click="clickHandler" :src="imgLink" :alt="planet" />
    </div>
  </div> 

</template>


<style>

.orbit {
    position: absolute;
    border: var(--orbit-border);
    border-radius: 100%;
}

.planet-image {
    width: 100%;
    height: 100%;
    border-radius: 100%;  
}

.planet {
    position: relative;
    border-radius: 100%;
    transition: box-shadow 0.25s;
}

</style>



