import ZpSearchForm from './searchForm';
import ZpTablePage from './tablePage';
import ZpUploadFile from './uploadFile';
import * as utils from './utils'; // 通用方法

// 组件列表
const components: {
    [propName: string]: any;
} = {
    ZpSearchForm,
    ZpTablePage,
    ZpUploadFile,
};

const installComponents: any = (app: any) => {
    for (const key in components) {
        app.component(key, components[key]);
    }
};
// vue 插件中的 install 方法（app：Vue应用程序实例）
const install: any = (app: any) => {
    installComponents(app);
};

// 【1-全局安装组件库】导出vue插件（如果插件是一个对象，必须提供 install 方法，并且参数是Vue对象，即应用实例）
// 把组件库当做一个插件去安装，即使用 Vue.use() 方法安装
// import TuiPlus from "@wocwin/t-ui-plus"   （TuiPlus就是导出的插件对象）
// app.use(TuiPlus)
export default {
    install,
};

// 【2-按需引用】导出各个组件
export { ZpSearchForm, ZpTablePage, ZpUploadFile, utils };

