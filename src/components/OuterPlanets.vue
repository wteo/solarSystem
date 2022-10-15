<script lang="ts">

import { defineComponent } from 'vue';

import Planet from './Planet.vue';

import jupiter from '../images/jupiter.png';
import saturn from '../images/saturn.png';
import uranus from '../images/uranus.png';
import neptune from '../images/neptune.png';

export default defineComponent({
    data() {
      return {
        outerPlanets: [{
          planet: 'jupiter',
          description: 'The largest planet in the Solar System.',
          orbitId: 'jupiter-orbit',
          imageLink: jupiter,
          id: 5
        }, {
          planet: 'saturn',
          description: 'The second largest planet in the Solar System. Famous for its ice rings orbiting around the planet.',
          orbitId: 'saturn-orbit',
          imageLink: saturn,
          id: 6
        }, {
          planet: 'uranus',
          description: 'Uranus is a weird planet. Instead of rotating vertically like other planets, Uranus rotates on its side.',
          orbitId: 'uranus-orbit',
          imageLink: uranus,
          id: 7
        }, {
          planet: 'neptune',
          description: 'The planet furthest from the sun.',
          orbitId: 'neptune-orbit',
          imageLink: neptune,
          id: 8
        }]
      }
    },
    components: { Planet }
})

</script>

<template>

  <Planet 
    v-for="outerPlanet of outerPlanets"
    :description="outerPlanet.description"
    :planet="outerPlanet.planet"
    :orbit="outerPlanet.orbitId"
    :imgLink="outerPlanet.imageLink"
    :key="outerPlanet.id"
  />

</template>
