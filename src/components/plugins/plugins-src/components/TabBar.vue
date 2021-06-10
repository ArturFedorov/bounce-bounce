<template>
  <div class="tab-bar">
    <TabNavigation />
    <div class="tab-bar-container">
      <div class="tab-bar-wrapper">
        <ul class="tab-bar-tabs">
          <li>
            <button class="tab-bar-button">
              <SvgIcon name="image" />
            </button>
          </li>
          <li>
            <button class="tab-bar-button">
              <SvgIcon name="plus_circled" />
            </button>
          </li>
          <li>
            <button class="tab-bar-button">
              <SvgIcon name="bell" />
            </button>
          </li>
          <li>
            <button class="tab-bar-button">
              <SvgIcon name="cart" />
            </button>
          </li>
        </ul>
        <div class="tab-bar-slider" aria-hidden="true">
          <div class="tab-bar-slider-circle">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style scoped lang="scss">
  $grey-900: #212121;
  $green-100: #c8e6c9;
  $green-A700: #00c853;

  $button-height: 3.5rem;

  .tab-bar {
    background-color: $white;
    border-radius: 1.8rem;
    user-select: none;
    padding-top: 1rem;
    width: 100%;
    margin: 0 1rem;

    &-button {
      border: none;
      cursor: pointer;
      background-color: transparent;
      outline: none;
      height: $button-height;
      width: $button-height;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: $grey-900;
      transition: color 0.2s ease-in-out;

      &:hover,
      &.active {
        color: $green-A700;
      }

      svg {
        pointer-events: none;
        transform: translate(0, 0);
      }
    }

    &-container {
      padding: 0 1rem;
    }

    &-tabs {
      list-style-type: none;
      display: flex;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        position: relative;
        padding: 1rem;
        z-index: 1;
      }
    }

    &-slider {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem 1.9rem;
      z-index: 0;
      transition: transform 0.4s ease-in-out;
      transform: translateX(0);

      &-circle {
        height: $button-height;
        width: $button-height;
        border-radius: 50%;
        transition: background-color 0.4s ease-in-out;
        background-color: $green-100;
      }
    }

    &-wrapper {
      position: relative;
    }
  }

  .animate-jello {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
</style>
