import type { Component } from 'vue';
import type { FormItemProps } from 'element-plus';

// type 枚举
type TypeProps =
    | 'input'
    | 'select'
    | 'cascader'
    | 'year'
    | 'month'
    | 'monthrange'
    | 'daterange'
    | 'datetimerange'
    | 'custom';

// formList 的每一项自定义的部分
interface FormListItemCustomProps {
    type: TypeProps;
    value: string | number | string[] | number[];
    prop: string | string[];
    options: any[];
    customComponent: Component;
    isConvertToBoolean: boolean;
    isJoinTimeSuffix: boolean;
    onChange: () => void;
}

// formList 的每一项
type FormListItemProps = FormItemProps & FormListItemCustomProps;

export type { FormListItemProps };
