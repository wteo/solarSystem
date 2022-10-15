<script lang="ts">

import { defineComponent } from 'vue';

import Planet from './Planet.vue';

import mercury from '../images/mercury.png';
import venus from '../images/venus.png';
import earth from '../images/earth.png';
import mars from '../images/mars.png';

export default defineComponent({
    data() {
      return {
        innerPlanets: [{
          planet: 'mercury',
          description: 'The smallest planet in the Solar System and the closest to the Sun',
          orbitId: 'mercury-orbit',
          imageLink: mercury,
          id: 1
        }, {
          planet: 'venus',
          description: 'Known as the yellow planet. Venus has a poisonous atmosphere full of sulphur.',
          orbitId: 'venus-orbit',
          imageLink: venus,
          id: 2
        }, {
          planet: 'earth',
          description: 'Our home!',
          orbitId: 'earth-orbit',
          imageLink: earth,
          id: 3
        }, {
          planet: 'mars',
          description: 'The Red planet!',
          orbitId: 'mars-orbit',
          imageLink: mars,
          id: 4
        }]
      }
    },
    components: { Planet }
})

</script>

<template>

  <Planet 
    v-for="innerPlanet of innerPlanets"
    :description="innerPlanet.description"
    :planet="innerPlanet.planet"
    :orbit="innerPlanet.orbitId"
    :imgLink="innerPlanet.imageLink"
    :key="innerPlanet.id"
  />

</template>
