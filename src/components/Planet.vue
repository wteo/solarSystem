<script>

export default {
  data() {
    return {
      isClicked: false
    }
  },
  props: ['description', 'planet', 'orbit', 'imgLink'],
  methods: {
    clickHandler() {
      this.isClicked = !this.isClicked;
    }
  }
}

</script>


<template>
  <div v-if="isClicked" class="description_box">
    <button class="close-button" @click="clickHandler">X</button>
    <div class="description">
        <h3>{{`${planet.charAt(0).toUpperCase()}${planet.slice(1)}`}}</h3>
        <p>{{ description }}</p>
    </div>
  </div>
  <div :id="orbit" class="orbit">
    <div :id="planet" :class="{ planet : !isClicked, 'planet clicked' : isClicked }">
      <img class="planet-image" @click="clickHandler" :src="imgLink" :alt="planet" />
    </div>
  </div>  
</template>


<style>

.description {
    position: relative;
    top: 60px;
    background-color: rgba(1, 77, 116, 0.7);
    color: var(--font-color);
    width: 500px;
    z-index: 200;
    border-radius: 10px;
    padding: 3px 30px;
}

.close-button {
    position: relative;
    top: 85px;
    left: 470px;
    background-color: transparent;
    color: var(--font-color);
    border: 1px solid var(--font-color);
    border-radius: 5px;
    z-index: 250;
    transition: background-color 0.25s;
}

.close-button:hover {
    cursor:pointer;
    background-color: var(--font-color);
}


.orbit {
    position: absolute;
    border: var(--orbit-border);
    border-radius: 100%;
}

.planet-image {
    width: 100%;
    height: 100%;
    border-radius: 100%;  
}

.planet {
    position: relative;
    border-radius: 100%;
    transition: box-shadow 0.25s;
}

.planet:hover, .clicked {
    cursor: pointer;
    box-shadow: 0px 0px 20px white;
    
}

</style>



