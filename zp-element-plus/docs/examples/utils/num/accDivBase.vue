<template>
    <div>
        <p>原生js：0.3 / 10000 = {{ 0.3 / 10000 }}</p>
        <p>plus方法：0.3 / 10000 = {{ accDiv(0.3, 10000) }}</p>
    </div>
</template>

<script setup lang="ts">
import { utils } from '../../../../packages';

const { accDiv } = utils;
</script>
