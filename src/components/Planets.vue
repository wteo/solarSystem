<script lang="ts">

import { defineComponent } from 'vue';
import { url } from '../store/url.js';

import Planet from './Planet.vue';

// Images of Planets
import mercury from '../images/mercury.png';
import venus from '../images/venus.png';
import earth from '../images/earth.png';
import mars from '../images/mars.png';
import jupiter from '../images/jupiter.png';
import saturn from '../images/saturn.png';
import uranus from '../images/uranus.png';
import neptune from '../images/neptune.png';

type Planet = {
          planet: string,
          description: string
          orbitId: string,
          imageLink: string,
          id: number,
          mass: string, 
          volume: string,
          surfaceArea: string,
          moonCount: number | string,
        };        

export default defineComponent({
    data() {
      return {
        planets: [] as Planet[],
      }
    },
    props: {
      visibility: {
        required: true,
        type: Boolean
      },
      animation: {
        required: true,
        type: Boolean
      },
    },
    components: { Planet },
    methods: {
      
      async getData() {

        const res = await fetch(url);
        const data =  await res.json();
        
        try {

          if (res.status == 200) {

            const planets = data.planets;
            const newArr: Planet[] = [];
            const images: string[] = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

            console.log(planets);

            for (let i = 0; i < planets.length; i++) {
              const { name, description, id, basicDetails } = planets[i];
              const { mass, volume, surfaceArea, moonCount } = basicDetails[0];
              newArr.push({
                planet: name.toLowerCase(),
                description,
                orbitId: `${name.toLowerCase()}-orbit`,
                imageLink: images[i],
                id,
                mass,
                volume,
                surfaceArea,
                moonCount
              });
            }

            this.planets = newArr;
            // console.log(this.planets);

          } else {
            throw new Error("Error: 404")
          }

        } catch(err: any) {
          throw new Error(err.message);
        }

      }
    },
    mounted() {
      this.getData();
    },
})

</script>

<template>

  <Planet 
    v-for="planet of planets"
    :description="planet.description"
    :planet="planet.planet"
    :orbit="planet.orbitId"
    :imgLink="planet.imageLink"
    :key="planet.id"
    :mass="planet.mass"
    :volume="planet.volume"
    :surfaceArea="planet.surfaceArea"
    :moonCount="planet.moonCount"
    :visibility="visibility"
    :animation="animation"
  />

</template>
