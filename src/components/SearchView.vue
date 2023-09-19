<script setup lang="ts">
interface IEmit {
  (e: 'cancel'): void
}
const emits = defineEmits<IEmit>()
</script>

<template>
  <div
    class="search-view"
    @click="emits('cancel')"
  ></div>
</template>

<style lang="less">
.search-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: aliceblue;
  z-index: 999;
}
</style>
