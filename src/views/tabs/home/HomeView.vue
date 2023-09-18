<script setup lang="ts">
import { fetchTest } from '../../../api/test.ts'

fetchTest()
</script>

<template>
  <div class="c">home component</div>
</template>

<style>
.c {
  width: 375px;
}
</style>
