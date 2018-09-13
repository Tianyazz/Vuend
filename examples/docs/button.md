### Button按钮
#### 基础用法
::: demo 通过`button-plain`class可以设置为朴素的按钮，通过`button-block`class可以设置为块级按钮, 提供四种颜色，默认蓝色
```html
<template>
  <button class="end-button mb-10">无特效</button>
  <end-button class="mb-10">波纹特效</end-button>
  <end-button class="button-plain mb-10">取消</end-button>
  <end-button class="button-red mb-10">红色</end-button>
  <end-button class="button-green mb-10">绿色</end-button>
  <end-button class="button-yellow mb-10">黄色</end-button>
  <end-button class="button-block mb-10">按钮块</end-button>
</template>
```
:::
#### Button 按钮圆角
::: demo 通过`button-radius`class可以设置为圆角的按钮
```html
<template>
  <end-button class="button-radius">确认</end-button>
  <end-button class="button-plain button-radius">取消</end-button>
  <end-button class="button-plain button-red button-radius">红色</end-button>
  <end-button class="button-plain button-green button-radius">绿色</end-button>
  <end-button class="button-plain button-yellow button-radius">黄色</end-button>
</template>
```
```
:::
#### Button 按钮禁用
::: demo 通过`disabled`禁用按钮
```html
<template>
  <end-button class="disabled button-block mb-10">禁用</end-button>
  <end-button class="button-radius disabled button-block mb-10">禁用</end-button>
  <end-button class="button-red button-radius disabled button-block mb-10">红色</end-button>
  <end-button class="button-green button-radius disabled button-block mb-10">绿色</end-button>
  <end-button class="button-yellow button-radius disabled button-block mb-10">黄色</end-button>
</template>
```
