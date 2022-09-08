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

    <Description v-if="isClicked" @closeHandler="clickHandler">
      <h3>Sun</h3>
      <p>Our star!</p>
    </Description>
    <div id="sun" @click="clickHandler" :class="{ clicked : isClicked }"/>

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
