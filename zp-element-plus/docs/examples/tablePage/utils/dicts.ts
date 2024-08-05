// 字典集合

/**
 * @description 默认获取label值
 * @param {Array} options 字典数组
 * @param {Number} value value值，（如果是多个用','隔开，如:value:'1,2'）
 * @param {String} label 取某个key的值，默认label
 * @returns {String} 返回value对应的文本汉字值
 */
export const getLabelByValue = (options, value, label = 'label') => {
    if ([null, undefined, ''].includes(value)) {
        return '-';
    }
    let _list = options.filter((item) => String(value).split(',').includes(String(item.value)));
    let _label = _list.map((item) => item[label]).join('、');
    return _label;
};

// 【进度状态】
export const progressStatusDict = [
    { value: 1, label: '进行中' },
    { value: 2, label: '失败' },
    { value: 3, label: '成功' },
];
