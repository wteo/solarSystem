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
    top: 205px;
    left: 210px;
    width: 200px;
    height: 200px;
    animation: orbiting 20s linear infinite;
    z-index: 90;
}

#mercury {
    top: 65px;
    left: -5px;
    height: 15px;
    width: 15px;
}


/* Venus */
#venus-orbit {
    top: 150px;
    left: 165px;
    width: 300px;
    height: 300px;
    animation: orbiting 40s linear infinite;
    z-index: 80;
}

#venus {
    top: 65px;
    left: -4px;
    height: 35px;
    width: 35px;
}


/* Earth */
#earth-orbit {
    top: 100px;
    left: 120px;
    width: 400px;
    height: 400px;
    animation: orbiting 60s linear infinite;
    z-index: 70;
}

#earth {
    top: 80px;
    left: 6.5px;
    height: 37.5px;
    width: 37.5px;
}


/* MARS */
#mars-orbit {
    top: 55px;
    left: 80px;
    width: 500px;
    height: 500px;
    animation: orbiting 80s linear infinite;
    z-index: 60;
}
  
#mars {
    top: 147.5px;
    left: 2px;
    height: 27.5px;
    width: 27.5px;
}

</style>