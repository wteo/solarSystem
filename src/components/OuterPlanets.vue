<script>

import Planet from './Planet.vue';

import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';

export default {
    data() {
      return {
        outerPlanets: [{
          planet: 'jupiter',
          description: 'The largest planet in the Solar System.',
          orbitId: 'jupiter-orbit',
          imageLink: jupiter
        }, {
          planet: 'saturn',
          description: 'The second largest planet in the Solar System. Famous for its ice rings orbiting around the planet.',
          orbitId: 'saturn-orbit',
          imageLink: saturn
        }, {
          planet: 'uranus',
          description: 'Uranus is a weird planet. Instead of rotating vertically like other planets, Uranus rotates on its side.',
          orbitId: 'uranus-orbit',
          imageLink: uranus
        }, {
          planet: 'neptune',
          description: 'The planet furthest from the sun.',
          orbitId: 'neptune-orbit',
          imageLink: neptune
        }]
      }
    },
    components: { Planet }
};

</script>

<template>

  <Planet 
    v-for="outerPlanet of outerPlanets"
    :description="outerPlanet.description"
    :planet="outerPlanet.planet"
    :orbit="outerPlanet.orbitId"
    :imgLink="outerPlanet.imageLink"
  />

</template>


<style>

/* Jupiter */
#jupiter-orbit {
    top: -140px;
    left: -80px;
    width: 900px;
    height: 900px;
    animation: orbiting 120s linear infinite;
    z-index: 40;
}
  
#jupiter {
    top: 125px;
    left: 42.5px;
    height: 100px;
    width: 100px;
}


/* Saturn */
#saturn-orbit {
    top: -300px;
    left: -180px;
    width: 1200px;
    height: 1200px;
    animation: orbiting 140s linear infinite;
    z-index: 30;
}
  
#saturn {
    top: 210px;
    left: -30px;
    height: 200px;
    width: 200px;
}


/* Uranus */
#uranus-orbit {
    top: -450px;
    left: -300px;
    width: 1500px;
    height: 1500px;
    animation: orbiting 160s linear infinite;
    z-index: 20;
}
  
#uranus {
    top: 300px;
    left: 95px;
    height: 65px;
    width: 65px;
}

/* Neptune */
#neptune-orbit {
    top: -600px;
    left: -430px;
    width: 1800px;
    height: 1800px;
    animation: orbiting 180s linear infinite;
    z-index: 10;
}
  
#neptune {
    top: 405px;
    left: 95px;
    height: 60px;
    width: 60px;
}

</style>