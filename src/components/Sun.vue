<script>

import Description from './Description.vue';

import sun from './images/sun.jpg';

export default {
  data() {
    return {
      isClicked: false,
      sunImage: sun
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
        <h3>Sun</h3>
        <p>Our star!</p>
      </Description>
    </Transition>
    <div id="sun" :class="{ clicked : isClicked }">
      <img class="image" @click="clickHandler" :src="sunImage" alt="sun" />
    </div>

</template>


<style>

#sun {
  position: absolute;
  top: 230px;
  left: 230px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: orange;
  z-index: 100;
} 

</style>
