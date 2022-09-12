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
    top: -7vw;
    left: -4vw;
    width: 68vw;
    height: 68vw;
    animation: orbiting 120s linear infinite;
    z-index: 40;
}
  
#jupiter {
    top: 11vw;
    left: 3vw;
    height: 7vw;
    width: 7vw;
}


/* Saturn */
#saturn-orbit {
    top: -15vw;
    left: -11vw;
    width: 85vw;
    height: 85vw;
    animation: orbiting 140s linear infinite;
    z-index: 30;
}
  
#saturn {
    top: 9vw;
    left: 2vw;
    height: 14vw;
    width: 14vw;
}


/* Uranus */
#uranus-orbit {
    top: -22.5vw;
    left: -17vw;
    width: 100vw;
    height: 100vw;
    animation: orbiting 160s linear infinite;
    z-index: 20;
}
  
#uranus {
    top: 20.5vw;
    left: 6vw;
    height: 4vw;
    width: 4vw;
}

/* Neptune */
#neptune-orbit {
    top: -34vw;
    left: -28vw;
    width: 120vw;
    height: 120vw;
    animation: orbiting 180s linear infinite;
    z-index: 10;
}
  
#neptune {
    top: 22.5vw;
    left: 9.5vw;
    height: 3.8vw;
    width: 3.8vw;
}

</style>