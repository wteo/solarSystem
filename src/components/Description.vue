<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    closeHandler() {
        this.$emit('closeHandler');
    }
  }
})

</script>


<template>

    <div>
        <button class="close-button" @click="closeHandler">X</button>
        <div class="description">
            <slot />
        </div>
    </div>

</template>


<style lang="scss">

@import '@/scss/helpers/variables';

.description {
    position: relative;
    top: 80px;
    background-color: rgba(1, 77, 116, 0.7);
    color: $font-color;
    width: 60%;
    z-index: 200;
    border-radius: 10px;
    padding: 3px 2%;
}

.close-button {
    position: relative;
    top: 105px;
    left: 58%;
    background-color: transparent;
    color: $font-color;
    border: 1px solid $font-color;
    border-radius: 5px;
    z-index: 250;
    transition: background-color 0.25s;

    &:hover {
        cursor:pointer;
        background-color: $font-color;
    }
}

@each $width, $percentage in $screen-widths {
    @media only screen and (max-width: $width) {
        .close-button {
            left: $percentage;
        }
    }
}

</style>