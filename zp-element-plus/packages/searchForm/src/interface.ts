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
    | 'datetimerang'
    | 'custom';

// formList 的每一项自定义的部分
interface FormListItemCustomProps {
    type: TypeProps;
    customComponent: Component;
    isConvertToBoolean: boolean;
    isJoinTimeSuffix: boolean;
    value: string | number | string[] | number[];
    prop: string | string[];
}

// formList 的每一项
type FormListItemProps = FormItemProps & FormListItemCustomProps;

export type { FormListItemProps };
