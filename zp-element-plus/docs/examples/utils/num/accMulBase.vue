<template>
    <div>
        <p>原生js：0.34 * 10000 = {{ 0.34 * 10000 }}</p>
        <p>plus方法：0.34 * 10000 = {{ accMul(0.34, 10000, 10) }}</p>
    </div>
</template>

<script setup lang="ts">
import { utils } from '../../../../packages';

const { accMul } = utils;
</script>
