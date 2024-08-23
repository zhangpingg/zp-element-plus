import ZcSearchForm from "./lib/searchForm/src/index.vue"
import ZcTablePage from "./lib/tablePage/src/index.vue"
import ZcUploadFile from "./lib/uploadFile/src/index.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZcSearchForm: typeof ZcSearchForm,
    ZcTablePage: typeof ZcTablePage,
    ZcUploadFile: typeof ZcUploadFile,
  }
}