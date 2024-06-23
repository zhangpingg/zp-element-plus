
import Button from './src/Button.vue'

// 定义一个vue插件（用户安装的时候，其实就是把组件当做插件，安装在用户的项目上）
const install = (app) => {
  app.component(Button.name, Button)
}

export default {
  install
}
