<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  modelValue: String,
  placeholder: String
})
const emits = defineEmits(["update:modelValue"])

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits("update:modelValue", value)
  }
})

</script>

<template>
  <input type="text" :placeholder="props.placeholder" v-model="inputValue" />
</template>

<style>
</style>
