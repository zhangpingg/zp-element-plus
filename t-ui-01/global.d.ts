import TButton from "./lib/button/src/index.vue"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TButton: typeof TButton
  }
}

export {}
