<script>

export default {
  methods: {
    closeHandler() {
        this.$emit('closeHandler');
    }
  }
}

</script>


<template>

    <div>
        <button class="close-button" @click="closeHandler">X</button>
        <div class="description">
            <slot />
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

</style>