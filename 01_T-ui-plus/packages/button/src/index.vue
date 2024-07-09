<template>
  <el-button v-bind="$attrs" @click="fn1"> 按钮组件前缀+<slot /> </el-button>
</template>

<script setup lang="ts" name="TButton">
const fn1 = () => {
  console.log('按钮点击');
};
</script>

<style lang="scss" scoped></style>
