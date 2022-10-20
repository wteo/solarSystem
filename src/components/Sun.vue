<script lang="ts">

import { defineComponent, ref } from 'vue';
import { APIKey, APIHost } from '../keys/keys.js';

import Description from './Description.vue';

import sun from '../images/sun.jpg';

export default defineComponent({
  setup() {
    const isClicked = ref<boolean>(false);
    const clickHandler = () => isClicked.value = !isClicked.value;
    return { isClicked, clickHandler, sunImage: sun };
  },
  components: { Description },
  mounted() {
    const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';
    fetch(url, {
      method: 'GET',
      headers: { 
        'X-RapidApi-Key': APIKey,
        'X-RapidAPI-Host': APIHost
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  },
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