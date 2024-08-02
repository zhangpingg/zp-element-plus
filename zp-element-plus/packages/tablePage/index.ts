import { withInstall } from '../withInstall';
import TablePage from './src/index.vue';
import type { Component } from 'vue';

const ZpTablePage: Component = withInstall(TablePage);

export default ZpTablePage;
