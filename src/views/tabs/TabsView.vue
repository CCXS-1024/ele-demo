<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
const router = useRouter()
const routes = useRoute()

const active = ref(routes.name as string)

const handleRouter = (active: string): void => {
  router.push({
    name: active,
  })
}
</script>

<template>
  <RouterView />
  <footer class="tabs-footer">
    <Tabbar
      @change="handleRouter"
      v-model="active"
      :fixed="true"
    >
      <TabbarItem
        name="home"
        icon="home-o"
        >首页</TabbarItem
      >
      <TabbarItem
        name="order"
        icon="bars"
        >订单</TabbarItem
      >
      <TabbarItem
        name="user"
        icon="contact"
        >我的</TabbarItem
      >
    </Tabbar>
  </footer>
</template>

<style scope>
.tabs-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
