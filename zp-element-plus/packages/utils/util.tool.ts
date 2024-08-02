import _ from 'lodash';

/**
 * @description 判断-是否是有效的数据
 * @param {any} val 传入的值
 * @returns {boolean} 返回boolean
 */
const isValidVal = (val: any) => {
    if ([null, undefined, ''].includes(val)) {
        return false;
    }
    return true;
};


/**
 * @description 判断-是否是有效的非空数组
 * @param {any} list 传入的值
 * @returns {boolean} 返回boolean
 */
const isValidArr = (list: any): boolean => {
    if (_.isArray(list) && !_.isEmpty(list)) {
        return true;
    }
    return false;
};

/**
 * @description 清空无效的key，删除对象中value为 null, undefined，'', 空数组的 key
 * @param {Object} data 传入的对象
 * @param {Boolean} isCLearEmptyArray 是否删除空数组
 * @returns {Object} 返回value有值的key对象
 */
const clearInvalidKey = (data: any, isCLearEmptyArray = true) => {
    let _data: any = { ...data };
    for (let key in _data) {
        if (
            _data[key] === '' ||
            _data[key] === null ||
            _data[key] === 'null' ||
            _data[key] === undefined ||
            _data[key] === 'undefined'
        ) {
            delete _data[key];
        }
        if (isCLearEmptyArray && _.isArray(data[key]) && _.isEmpty(data[key])) {
            delete _data[key];
        }
    }
    return _data;
};


export { isValidVal, isValidArr, clearInvalidKey }