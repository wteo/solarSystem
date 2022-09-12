<script>

import Planet from './Planet.vue';

import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';

export default {
    data() {
      return {
        innerPlanets: [{
          planet: 'mercury',
          description: 'The smallest planet in the Solar System and the closest to the Sun',
          orbitId: 'mercury-orbit',
          imageLink: mercury
        }, {
          planet: 'venus',
          description: 'Known as the yellow planet. Venus has a poisonous atmosphere full of sulphur.',
          orbitId: 'venus-orbit',
          imageLink: venus
        }, {
          planet: 'earth',
          description: 'Our home!',
          orbitId: 'earth-orbit',
          imageLink: earth
        }, {
          planet: 'mars',
          description: 'The Red planet!',
          orbitId: 'mars-orbit',
          imageLink: mars
        }]
      }
    },
    components: { Planet }
};

</script>

<template>

  <Planet 
    v-for="innerPlanet of innerPlanets"
    :description="innerPlanet.description"
    :planet="innerPlanet.planet"
    :orbit="innerPlanet.orbitId"
    :imgLink="innerPlanet.imageLink"
  />

</template>


<style>

/* Mercury */
#mercury-orbit {
    top: 16vw;
    left: 18vw;
    width: 21vw;
    height: 21vw;
    animation: orbiting 20s linear infinite;
    z-index: 90;
}

#mercury {
    top: 2vw;
    left: 2.5vw;
    height: 1.5vw;
    width: 1.5vw;
}


/* Venus */
#venus-orbit {
    top: 12.25vw;
    left: 14.5vw;
    width: 28vw;
    height: 28vw;
    animation: orbiting 40s linear infinite;
    z-index: 80;
}

#venus {
    top: 2vw;
    left: 3.75vw;
    height: 2.5vw;
    width: 2.5vw;
}


/* Earth */
#earth-orbit {
    top: 9.0vw;
    left: 11.0vw;
    width: 35.0vw;
    height: 35.0vw;
    animation: orbiting 60s linear infinite;
    z-index: 70;
}

#earth {
    top: 3.0vw;
    left: 4.5vw;
    height: 2.7vwpx;
    width: 2.7vw;
}


/* MARS */
#mars-orbit {
    top: 5.25vw;
    left: 7.5vw;
    width: 42.5vw;
    height: 42.5vw;
    animation: orbiting 80s linear infinite;
    z-index: 60;
}
  
#mars {
    top: 10vw;
    left: 1.25vw;
    height: 2.3vw;
    width: 2.3vw;
}

</style>