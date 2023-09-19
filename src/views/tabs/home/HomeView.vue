<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '../../../components/SearchView.vue'
import { useToggle } from '../../../use/useToggle'
const recomments = [
  { value: 'ccxs', label: 'ccxs' },
  { value: 'ccxs', label: 'ccxs' },
  { value: 'ccxs', label: 'ccxs' },
]

const [isSearchViewShown, toggleSearchView] = useToggle(false)
</script>

<template>
  <div class="home-page">
    <SearchView
      v-if="isSearchViewShown"
      @cancel="toggleSearchView"
    />
    <TheTop
      :recomments="recomments"
      @searchClick="toggleSearchView"
    />
  </div>
</template>
<style></style>
