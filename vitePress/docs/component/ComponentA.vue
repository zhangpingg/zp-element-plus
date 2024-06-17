<template>
    <div>组件-{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(1);
</script>

<style scoped></style>
