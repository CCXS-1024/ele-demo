<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'vant'
import { ISearchRecomment } from '../../../../types'

interface IProps {
  recomments: ISearchRecomment[]
}

interface IEmit {
  (e: 'searchClick'): void
}

defineProps<IProps>()

const emits = defineEmits<IEmit>()
</script>

<template>
  <div class="home-top">
    <!-- top 组件 -->
    <div class="top">
      <img
        class="location-icon"
        src="../../../../assets/imgs/index_page/location.png"
        alt=""
      />
      <div class="location">幸福小区(北小区东一门)</div>
      <img
        class="shopcart-icon"
        src="../../../../assets/imgs/index_page/shopcart.png"
        alt=""
      />
      <img
        class="comments-icon"
        src="../../../../assets/imgs/index_page/comments.png"
        alt=""
      />
    </div>
    <!-- vant 搜索组件 -->
    <Search
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="请输入搜索关键词"
      @click-input="emits('searchClick')"
      @click-left-icon="emits('searchClick')"
      @click-right-icon="emits('searchClick')"
    >
      <template #right-icon>
        <span>搜索</span>
      </template>
    </Search>
    <div class="search-recommend">
      <span
        class="tag"
        v-for="(item, index) in recomments"
        :key="item.label"
        >{{ item.label }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="less">
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));

  color: white;
  .top {
    display: flex;
    align-items: center;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 10px 0;
    .location-icon {
      width: 24px;
      height: 24px;
    }

    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-size: 12px;
      border-radius: 10px;
      background-color: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>

<style lang="less">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
  .van-search {
    padding: 10px;
  }
}
</style>
