import _ from 'lodash';

/**
 * @description 判断-是否是有效的数据
 * @param {any} val 传入的值
 * @returns {boolean} 返回boolean
 */
const isValidVal = (val: any) => {
    if ([null, undefined, 'null', 'undefined', ''].includes(val)) {
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
    const _data: any = { ...data };
    for (const key in _data) {
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

/**
 * @description 浏览器下载文件
 * @param {String} url 文件地址/文件流
 * @param {String } fileName 文件名（文件流必传）
 * @param {Boolean } isFileStream 是否是文件流
 */
const downloadFile = (url: any, fileName = '', isFileStream = false) => {
    const downloadByBlob = (blob: Blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName || url.split('/').pop().split('?')[0];
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
    };
    if (isFileStream) {
        const blob = new Blob([url], { type: 'application/octet-stream' });
        downloadByBlob(blob);
        return;
    }
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.blob();
        })
        .then((blob) => {
            downloadByBlob(blob);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

/**
 * @description 转换为合并单元格数据列表，添加【**RowSpan】字段，transToNergeCellList(list, ['a', 'b'])
 * @param {Array} 列表数据
 * @param {Array } 需要合并的字段key列表
 */
const transToMergeCellList = (dataList: { [key: string]: any }[], strList: string[]) => {
    let _dataList = [...dataList];
    const mergeCell = (cellList: { [key: string]: any }[], mergeType: string) => {
        const mergeTypeMap = cellList.reduce((prev, curr) => {
            const prevX = { ...prev };
            if (prevX[curr[mergeType]]) {
                prevX[curr[mergeType]].count += 1;
            } else {
                prevX[curr[mergeType]] = {
                    count: 1,
                    selected: false,
                };
            }
            return prevX;
        }, {});
        const newList = cellList.map((item) => {
            if (mergeTypeMap[item[mergeType]].selected) {
                return {
                    ...item,
                    [`${mergeType}RowSpan`]: 0,
                };
            }
            mergeTypeMap[item[mergeType]].selected = true;
            return {
                ...item,
                [`${mergeType}RowSpan`]: mergeTypeMap[item[mergeType]].count,
            };
        }, []);
        return newList;
    };
    strList.forEach((item) => {
        _dataList = mergeCell(_dataList, item);
    });
    return _dataList;
};

export { isValidVal, isValidArr, clearInvalidKey, downloadFile, transToMergeCellList };
