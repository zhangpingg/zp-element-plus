<template>
  <t-button style="margin-top: 15px" color="#626aef" :time="time" @click="exportExcel"
    >导出</t-button
  >
</template>
<script setup lang="ts">
import { ref } from "vue"
const time = ref(1000)
const handleChange = val => {
  console.log("输入框的值：", val)
}
const exportExcel = () => {
  console.log("点击事件")
}
</script>
