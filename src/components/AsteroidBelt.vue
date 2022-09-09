<script>

import Description from './Description.vue';

export default {
  data() {
    return {
      isClicked: false,
    }
  },
  components: { Description },
  methods: {
    clickHandler() {
      this.isClicked = !this.isClicked;
    },
  }
}

</script>

<template>

    <Transition>
      <Description v-if="isClicked" @closeHandler="clickHandler">
        <h3>The Asteroid Belt</h3>
        <p>The asteroid belt that separate our inner planets from the outer planets</p>
      </Description>
    </Transition>
    <div :class="{ orbit : !isClicked, 'orbit clicked' : isClicked }" id="asteroid-belt" @click="clickHandler" />

</template>

<style>

/* Asteroid Belt */
#asteroid-belt {
    top: -10px;
    left: 40px;
    width: 625px;
    height: 625px;
    border: 10px solid gray;
    animation: orbiting 100s linear infinite;
    z-index: 50;
}

</style>
