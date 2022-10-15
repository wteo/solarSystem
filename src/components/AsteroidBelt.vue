<script lang="ts">

import { defineComponent } from 'vue';

import Description from './Description.vue';

import asteroid from '../images/asteroid.png';

export default defineComponent({
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
})

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
