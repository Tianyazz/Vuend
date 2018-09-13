### Layout Flexbox 弹性布局
#### 基础用法
::: demo 弹性布局, 默认1比1等分， end-col通过设置`justify`水平方向的对齐方式 `justify`是`justify-content`的属性，暂时只提供`center`,`flex-end`两个值，默认居左。
```html
<template>
  <end-row class="mb-20">
    <end-col justify="center" class="blue"><div>1</div></end-col>
    <end-col justify="end" class="red"><div>2</div></end-col>
  </end-row>
  <end-row class="mb-20">
    <end-col class="blue"><div>1</div></end-col>
    <end-col justify="center" class="red"><div>2</div></end-col>
    <end-col justify="end" class="green"><div>3</div></end-col>
  </end-row>
  <end-row class="mb-20">
    <end-col class="blue"><div>1</div></end-col>
    <end-col justify="center" class="red"><div>2</div></end-col>
    <end-col justify="center" class="blue"><div>3</div></end-col>
    <end-col justify="end" class="green"><div>4</div></end-col>
  </end-row>
  <end-row class="mb-20">
    <end-col class="blue"><div>1</div></end-col>
    <end-col justify="center" class="red"><div>2</div></end-col>
    <end-col justify="center" class="green"><div>3</div></end-col>
    <end-col justify="center" class="red"><div>4</div></end-col>
    <end-col justify="end" class="blue"><div>5</div></end-col>
  </end-row>
</template>
```
:::
#### 垂直方向的对齐方式
::: demo end-row, end-row 通过设置`align`实现垂直方向的对其方式，暂提供垂直居中，默认顶部对齐
```html
<template>
  <end-row class="mb-20 col-h3" align>
    <end-col justify="center" class="blue col-h2" align><div class="black">1</div></end-col>
    <end-col justify="center" class="red col-h1" align><div class="black">2</div></end-col>
  </end-row>
</template>
```
:::
#### 某列固定宽度，其他列自适应
::: demo end-col设置`span`分配固定宽度。类型`Number`，值区间[1-6]，值6位50%。不设置，所有end-col平分
```html
<template>
  <end-row class="mb-20">
    <end-col justify="center" :span="2" class="blue">2/12</end-col>
    <end-col justify="center" class="green">2</end-col>
  </end-row>
  <end-row>
    <end-col justify="center" :span="3" class="green">2/12</end-col>
    <end-col justify="center" class="blue">2</end-col>
    <end-col justify="center" :span="5" class="red">5/12</end-col>
  </end-row>
</template>
```
:::
#### 换行
::: demo 弹性盒元素必要的时候拆行，通过`wrap`设置数值，暂只有两列或三列
```html
<template>
  <end-row class="mb-10" :wrap="2">
    <end-col justify="center" class="blue"><div>1</div></end-col>
    <end-col justify="center" class="red"><div>2</div></end-col>
    <end-col justify="center" class="green"><div>3</div></end-col>
    <end-col justify="center" class="red"><div>4</div></end-col>
    <end-col justify="center" class="blue"><div>5</div></end-col>
  </end-row>
  <end-row :wrap="3">
    <end-col justify="center" class="blue"><div>1</div></end-col>
    <end-col justify="center" class="red"><div>2</div></end-col>
    <end-col justify="center" class="green"><div>3</div></end-col>
    <end-col justify="center" class="red"><div>4</div></end-col>
    <end-col justify="center" class="blue"><div>5</div></end-col>
  </end-row>
</template>
<style lang="scss" scoped>
@import '~global/global';
.end-col,
.end-col >div {
  height: $px30;
  @include radius(5px);
  color: #fff;
}
.blue {
  background: $blue;
}
.red {
  background: $red;
}
.green {
  background: $green;
}
.black {
  background: #000;
}
.col-h1 {
  height: px2rem(50px);
}
.col-h2 {
  height: px2rem(80px);
}
.col-h3 {
  height: px2rem(100px);
}
</style>
```
:::