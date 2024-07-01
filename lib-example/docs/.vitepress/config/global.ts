/** 全局变量定义 */

import { resolve } from 'path';

// 项目目录
export const projRoot = resolve(__dirname, '..', '..', '..'); // 外层没有import过

// 项目名称
export const docsDirName = 'docs'; // 外层没有import过

// 文档库目录 C:\Users\86136\Desktop\private\zc-elementPlus\lib-example\docs
export const docRoot = resolve(projRoot, docsDirName);
