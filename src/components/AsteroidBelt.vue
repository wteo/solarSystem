<script lang="ts">

import { defineComponent } from 'vue';
import { url } from '../store/url.js';

import Description from './Description.vue';

import asteroid from '../images/asteroid.png';

export default defineComponent({
  data() {
    return {
      name: '',
      description: '',
      isClicked: false,
      image: asteroid
    }
  },
  components: { Description },
  methods: {
    async getData() {
      
      const res = await fetch(url);
      const data =  await res.json();

      try {
        if (res.status == 200) {
          const { name, description } = data.asteroid;
          this.name = name;
          this.description = description;
        } else {
          throw new Error("Error: 404")
        }
      } catch(err: any) {
        throw new Error(err.message);
      }
    },
    clickHandler() {
      this.isClicked = !this.isClicked;
    },
  },
  mounted() {
    this.getData();
  },
})

</script>

<template>

    <Transition>
      <Description v-if="isClicked" @closeHandler="clickHandler">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </Description>
    </Transition>
    <div :class="{ orbit : !isClicked, 'orbit clicked' : isClicked }" id="asteroid-belt" >
      <img class="image" @click="clickHandler" :src="image" alt="asteroid belt" />
    </div>

</template>
