<template>
    <div>
        <el-form :model="formData" label-width="120px">
            <el-form-item label="正则类型">
                <el-select v-model="formData.regType" class="m-2" placeholder="请选择">
                    <el-option v-for="item in regOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="formData.content" placeholder="请输入" />
            </el-form-item>
            <el-form-item v-if="formData.content">
                <span style="color: green" v-if="regMap[formData.regType].test(formData.content)">正确</span>
                <span style="color: #f00" v-else>错误</span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { MOBILE_REG, EMAIL_REG, CARD_REG, CODE_REG, BANK_CARD } from '../../../../packages/utils';

const regOptions = [
    { value: 1, label: '手机号正则' },
    { value: 2, label: '邮箱正则' },
    { value: 3, label: '身份证正则' },
    { value: 4, label: '验证码正则' },
    { value: 5, label: '银行卡正则' },
];
const regMap = {
    1: MOBILE_REG,
    2: EMAIL_REG,
    3: CARD_REG,
    4: CODE_REG,
    5: BANK_CARD,
};

const formData = reactive({
    regType: 1,
    content: '',
});
</script>
