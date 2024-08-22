import type { Component, App } from "vue"
import TButton from "./button"

const components: {
  [propName: string]: Component
} = {
  TButton
}
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
const install: any = (app: any) => {
  installComponents(app)
}

export { TButton }

export default {
  install
}
