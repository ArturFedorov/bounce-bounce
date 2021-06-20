<template>
  <div class="plugin-placeholder">
    <SvgIcon class="plugin-placeholder-icon" name="404" />
    <h3 class="plugin-placeholder-text">Component was not found</h3>
  </div>
</template>

<style scoped lang="scss">
  .plugin-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-icon {
      height: 95px;
      width: 170px;
    }
  }
</style>
