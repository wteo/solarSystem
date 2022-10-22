<script lang="ts">

import { defineComponent } from 'vue';
import { url } from '../store/url.js';

import Description from './Description.vue';

import sun from '../images/sun.jpg';

export default defineComponent({
  data() {
    return {
      name: '',
      description: '',
      image: sun,
      isClicked: false,
    }
  },
  components: { Description },
  methods: {
    async getData() {

      const res = await fetch(url);
      const data =  await res.json();

      try {
        if (res.status == 200) {
          const { name, description } = data.sun;
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
    }
  },
  mounted() {
    this.getData();
  }
})

</script>

<template>

    <Transition>
      <Description v-if="isClicked" @closeHandler="clickHandler">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </Description>
    </Transition>
    <div id="sun" :class="{ clicked : isClicked }">
      <img class="image" @click="clickHandler" :src="image" alt="sun" />
    </div>

</template>