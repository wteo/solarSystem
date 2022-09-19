<script>

import Planet from './Planet.vue';

import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';
import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';

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
        }],
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
    v-for="innerPlanet of innerPlanets"
    :description="innerPlanet.description"
    :planet="innerPlanet.planet"
    :orbit="innerPlanet.orbitId"
    :imgLink="innerPlanet.imageLink"
  />
  <div class="orbit" id="asteroid-belt"></div>
  <Planet 
    v-for="outerPlanet of outerPlanets"
    :description="outerPlanet.description"
    :planet="outerPlanet.planet"
    :orbit="outerPlanet.orbitId"
    :imgLink="outerPlanet.imageLink"
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

/* Asteroid Belt */
#asteroid-belt {
    top: -10px;
    left: 40px;
    width: 625px;
    height: 625px;
    border: 20px dashed gray;
    animation: orbiting 100s linear infinite;
    z-index: 50;
}

#asteroid-belt:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px white; 
}


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


@keyframes orbiting {
    0% {
        transform: rotate(135deg);
    }
    50% {
        transform: rotate(315deg);
    }
    100% {
        transform: rotate(495deg);
    }
  }
  

</style>