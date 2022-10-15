<script lang="ts">

import { defineComponent, ref } from 'vue'

import Description from './Description.vue';

import sun from '../images/sun.jpg';

export default defineComponent({
  setup() {
    const isClicked = ref<boolean>(false);
    const clickHandler = () => isClicked.value = !isClicked.value;
    return { isClicked, clickHandler, sunImage: sun };
  },
  components: { Description },
})

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