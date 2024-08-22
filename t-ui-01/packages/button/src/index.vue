<template>
  <el-tooltip v-if="tip" :content="tip" :placement="placement" v-bind="tipProps">
    <el-button v-bind="$attrs" class="t-button-tip" @click="handleClick">
      <slot />
    </el-button>
  </el-tooltip>
  <el-button v-else v-bind="$attrs" @click="handleClick"> 前缀1+<slot /> </el-button>
</template>

<script setup lang="ts" name="TButton">
import { ref } from "vue"
const props = defineProps({
  time: {
    type: Number,
    default: 1000
  },
  tip: {
    type: String,
    default: ""
  },
  placement: {
    type: String,
    default: "top"
  },
  tipProps: {
    type: Object,
    default: () => ({})
  }
})
// 抛出事件
const emits = defineEmits(["click"])
const record = ref(0)
const handleClick = () => {
  let newTime = new Date()
  if (newTime.getTime() - record.value > props.time) {
    emits("click")
  }
  record.value = new Date().getTime()
}
</script>
<style lang="scss" scoped></style>
