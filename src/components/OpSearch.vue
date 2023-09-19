<script setup lang="ts">
interface IPros {
  background?: string
  plachholder?: string
  shape?: string
  shownAction?: boolean
  modelValue?: string | number
}
const props = defineProps<IPros>()

interface IEmits {
  (e: 'search', v?: string | number): void
  (e: 'cancel'): void
  (e: 'clear'): void
  (e: 'update:modelValue', v?: string | number): void
}
const emits = defineEmits<IEmits>()

function handleKeyPress() {
  console.log(12)
}
</script>

<template>
  <div
    class="op-search"
    :style="{ background }"
    :class="{ 'op-search--show-action': shownAction }"
  >
    <div class="op-search__content">
      <div class="op-cell op-search__input">
        <div class="op-input__left-icon"></div>
        <div class="op-input__value">
          <div class="op-input__body">
            <input
              type="search"
              class="op-input-control"
              :value="modelValue"
              :placeholder="plachholder"
              @keypress.enter="handleKeyPress"
              @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)"
            />
            <div
              v-if="$slots['right-icon']"
              class="op-input__right-icon"
            >
              <slot name="right-icon"></slot>
            </div>
            <span
              class="op-input__clear"
              v-else-if="modelValue"
              >x</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="shownAction"
      class="op-search__action"
    >
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<style></style>
