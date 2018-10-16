<p align="center">
  <a href="https://skinsty.github.io/Vuend/docs/">
    <img src="https://github.com/SkinsTY/Vuend/blob/master/examples/assets/img/logo2.png">
  </a>
</p>

<p align="center">Vuend is Mobile UI Components, based on Vue.js.</p>

## Demo
<p>
  <a href="https://skinsty.github.io/Vuend/docs/">https://skinsty.github.io/Vuend/docs/</a>
</p>

*****  

## 安装 Install
npm install vuend -D
### 本项目采用了rem可伸缩布局方案 lib-flexible，所以得安装 lib-flexible
npm install lib-flexible -D
### main.js导入使用css
``` javascriptimport Vue from 'vue'
import vuend from 'vuend'
import 'vuend/dist/vuend.min.css'
import 'lib-flexible'

Vue.use(vuend)
```
*****
## 2018-10-12 更新1.0.1版本
### vuend 组件

组件名称|组件标签|描述
---|:--:|---:
EndButton|`<end-button></end-button>`|按钮
EndRadio|`<end-radio></end-radio>`|单选框
EndLayout|`<end-row></end-row>`<br />`<end-col></end-col>`|flexbox弹性布局
EndInput|`<end-input></end-input>`|文本框
EndToggle|`<end-toggle></end-toggle>`|开关按钮
EndCheckbox|`<end-checkbox></end-checkbox>`|复选框
EndList|`<end-list></end-list>`|列表
EndSearch|`<end-search></end-search>`|搜索
EndTextarea|`<end-textarea></end-textarea>`|文本域
EndTabs|`<end-tabs></end-tabs>`|选项卡
EndSelect|`<end-select></end-select>`|选择列表
*****
### vuend 服务
服务名称（全局变量）|描述
:--|---:
$toast|文字提示
$dialog|对话框
$loading|加载提示
*****
### 项目结构
.
├── examples
│   ├── App.vue
│   ├── assets
│   │   ├── img
│   │   │   ├── logo.png
│   │   │   └── logo2.png
│   │   └── style
│   │       ├── common.scss
│   │       ├── global.scss
│   │       ├── reset.scss
│   │       └── scss
│   │           └── mobile.scss
│   ├── components
│   │   ├── demo-block.vue
│   │   └── header.vue
│   ├── docs
│   │   ├── button.md
│   │   ├── checkbox.md
│   │   ├── dialog.md
│   │   ├── flexbox.md
│   │   ├── input.md
│   │   ├── list.md
│   │   ├── loading.md
│   │   ├── log.md
│   │   ├── radio.md
│   │   ├── search.md
│   │   ├── select.md
│   │   ├── tabs.md
│   │   ├── textarea.md
│   │   ├── toast.md
│   │   └── toggle.md
│   ├── main.js
│   ├── router
│   │   └── index.js
│   └── views
│       ├── demo.vue
│       ├── detail.vue
│       ├── home
│       │   ├── components
│       │   │   ├── header.vue
│       │   │   └── sidebar.vue
│       │   └── home.vue
│       └── mobile.vue
├── index.html
├── package-lock.json
├── package.json
├── packages
│   ├── button
│   │   ├── index.js
│   │   └── src
│   │       └── button.vue
│   ├── checkbox
│   │   ├── index.js
│   │   └── src
│   │       └── checkbox.vue
│   ├── dialog
│   │   ├── index.js
│   │   ├── mixin.js
│   │   └── src
│   │       ├── alert.vue
│   │       └── confirm.vue
│   ├── flexbox
│   │   ├── index.js
│   │   └── src
│   │       ├── col.vue
│   │       └── row.vue
│   ├── index.js
│   ├── input
│   │   ├── index.js
│   │   └── src
│   │       └── input.vue
│   ├── list
│   │   ├── index.js
│   │   └── src
│   │       └── list.vue
│   ├── loading
│   │   ├── index.js
│   │   └── src
│   │       └── loading.vue
│   ├── radio
│   │   ├── index.js
│   │   └── src
│   │       └── radio.vue
│   ├── search
│   │   ├── index.js
│   │   └── src
│   │       └── search.vue
│   ├── select
│   │   ├── index.js
│   │   └── src
│   │       └── select.vue
│   ├── tabs
│   │   ├── index.js
│   │   └── src
│   │       └── tabs.vue
│   ├── textarea
│   │   ├── index.js
│   │   └── src
│   │       └── textarea.vue
│   ├── toast
│   │   ├── index.js
│   │   └── src
│   │       └── toast.vue
│   ├── toggle
│   │   ├── index.js
│   │   └── src
│   │       └── toggle.vue
│   └── utils.js
└── static

****

### Thanks to
- [voinc](https://github.com/wangdahoo/vonic)
- [element](https://github.com/ElemeFE/element)
- [vue-ui-docs](https://github.com/kitorv/vue-ui-docs)
