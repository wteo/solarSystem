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
    top: -100px;
    left: -30px;
    width: 800px;
    height: 800px;
    animation: orbiting 120s linear infinite;
    z-index: 40;
}
  
#jupiter {
    top: 100px;
    left: 42.5px;
    height: 100px;
    width: 100px;
}


/* Saturn */
#saturn-orbit {
    top: -250px;
    left: -130px;
    width: 1100px;
    height: 1100px;
    animation: orbiting 140s linear infinite;
    z-index: 30;
}
  
#saturn {
    top:190px;
    left: 60px;
    height: 80px;
    width: 80px;
}


/* Uranus */
#uranus-orbit {
    top: -400px;
    left: -250px;
    width: 1400px;
    height: 1400px;
    animation: orbiting 160s linear infinite;
    z-index: 20;
}
  
#uranus {
    top: 300px;
    left: 70px;
    height: 65px;
    width: 65px;
}

/* Neptune */
#neptune-orbit {
    top: -550px;
    left: -350px;
    width: 1700px;
    height: 1700px;
    animation: orbiting 180s linear infinite;
    z-index: 10;
}
  
#neptune {
    top: 400px;
    left: 80px;
    height: 60px;
    width: 60px;
}

</style>