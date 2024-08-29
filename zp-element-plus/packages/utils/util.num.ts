// formatNum(值, 保留有效数字位数， 是否补位)  待整理
const formatNum = (num, precision = 8, autoFill = false) => {
    const reg = /\B(?=(\d{3})+(?!\d))/g;
    if ([null, undefined].includes(num)) {
        return '';
    }
    const _num = String(num);
    const _suffix = autoFill ? Array(precision).fill(0).join('') : '';
    if (/\.{1}/g.test(_num)) {
        const arr = _num.split('.');
        return `${arr[0].replace(reg, ',')}.${`${arr[1]}${_suffix}`.substring(0, precision)}`;
    }
    if (autoFill) {
        return `${_num.replace(reg, ',')}.${_suffix}`;
    } else {
        return `${_num.replace(reg, ',')}`;
    }
};

export { formatNum };
