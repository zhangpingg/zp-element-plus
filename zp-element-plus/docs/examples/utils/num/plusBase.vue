<template>
    <div>
        <p>原生js：0.1 + 0.2 = {{ 0.1 + 0.2 }}</p>
        <p>plus方法：0.1 + 0.2 = {{ plus(0.1, 0.2) }}</p>
    </div>
</template>

<script setup lang="ts">
import { utils } from '../../../../packages';

const { plus } = utils;
</script>
