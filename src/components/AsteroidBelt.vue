<script>

import Description from './Description.vue';

import asteroid from './images/asteroid.png';

export default {
  data() {
    return {
      isClicked: false,
      imgLink: asteroid
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
    <div :class="{ orbit : !isClicked, 'orbit clicked' : isClicked }" id="asteroid-belt" >
      <img class="image" @click="clickHandler" :src="imgLink" alt="asteroid belt" />
    </div>

</template>

<style>

/* Asteroid Belt */
#asteroid-belt {
    top: -70px;
    left: -30px;
    width: 750px;
    height: 750px;
    border: 0px solid transparent;
    animation: orbiting 100s linear infinite;
    z-index: 50;
}

</style>
