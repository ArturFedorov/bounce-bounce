<template>
  <div class="tab-navigation">
    <div class="tab-navigation-wrapper">
      <ul class="tab-navigation-items">
        <li :key="button" v-for="(button, index) in buttons">
          <button
            class="tab-navigation-button"
            :class="{ 'is-active': activeKey.button === button }"
            @click.prevent="setActiveKey(button, index)"
          >
            {{ button }}
          </button>
        </li>
      </ul>
      <div class="tab-navigation-slider" aria-hidden="true">
        <div
          :style="{ transform: `translateX(${activeKey.index * 100}%)` }"
          class="tab-navigation-slider-rect"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      buttons: {
        type: Array as () => Array<string>,
        default: () => ['New', 'Popular', 'Following']
      }
    },
    data() {
      return {
        activeKey: { button: 'New', index: 0 }
      }
    },
    methods: {
      setActiveKey(button: string, index: number) {
        this.activeKey = { button, index }
      }
    }
  })
</script>

<style scoped lang="scss">
  $button-height: 2.7rem;
  $filters-navigation-height: 3.8rem;
  $filters-wrapper-opacity: 1;
  $translate-filters-slider: 0;

  // colors
  $grey-900: #212121;
  $orange-50: #fff3e0;
  $orange-700: #f57c00;

  .tab-navigation {
    padding: 0 1rem;
    transition: max-height 0.4s ease-in-out, opacity 0.2s ease-in-out;
    max-height: $filters-navigation-height;
    width: 100%;

    &-button {
      display: flex;
      color: $orange-700;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      font-weight: 400;
      height: $button-height;
      padding: 0 1.5rem;
      border: none;
      cursor: pointer;
      background-color: transparent;
      outline: none;

      &.is-active {
        transition: color 0.4s ease-in-out;
        color: $grey-900;
      }
    }

    &-wrapper {
      position: relative;
      transition: opacity 0.2s ease-in-out;
      opacity: $filters-wrapper-opacity;
    }

    &-items {
      margin: 0;
      border-radius: 1rem;
      padding: 0.3rem;
      overflow: hidden;
      background-color: $orange-50;
      list-style-type: none;
      display: flex;

      li {
        position: relative;
        z-index: 1;
        display: flex;
        flex: 1 0 33.33%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    }

    &-slider {
      pointer-events: none;
      position: absolute;
      padding: 0.3rem 0.5rem;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;

      &-rect {
        height: $button-height;
        width: 33.33%;
        border-radius: 0.8rem;
        background-color: $white;
        box-shadow: 0 0.1rem 1rem -0.4rem rgba(0, 0, 0, 0.08);
        transition: transform 0.4s ease-in-out;
        transform: translateX($translate-filters-slider);
      }
    }
  }
</style>
