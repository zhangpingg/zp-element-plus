import ZcSearchForm from "./searchForm/src/index.vue"
import ZcTablePage from "./tablePage/src/index.vue"
import ZcUploadFile from "./uploadFile/src/index.vue"

declare module "vue" {
  export interface GlobalComponents {
    ZcSearchForm: typeof ZcSearchForm,
    ZcTablePage: typeof ZcTablePage,
    ZcUploadFile: typeof ZcUploadFile,
  }
}