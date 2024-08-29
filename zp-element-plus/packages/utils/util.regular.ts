// 手机号 1开头，第二位3-9，后面9位数字
const MOBILE_REG = /^1([3-9])\d{9}$/;
// 邮箱
const EMAIL_REG =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// 身份证
const CARD_REG = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
// 验证码正则
const CODE_REG = /^\d{6}$/;

// 银行卡正则
const BANK_CARD = /^([0-9])(\d{3,35})$/;

// MOBILE_REG.test(value)
export { MOBILE_REG, EMAIL_REG };
