### dialog 对话框
#### 基础用法
::: demo 设置`content`提示框内的内容，设置`theme`按钮颜色（提供三种颜色: `red`, `green`, `yellow`），设置`title`提示框标题，alert设置`btnText`按钮文本。confirm设置`cancelText`,`okText`按钮文本
```html
<template>
  <end-list @click.native="showAlert()">
    <end-col>Alert</end-col>
    <end-col justify="end">提示框</end-col>
  </end-list>
  <end-list @click.native="showAlertRed()">
    <end-col>Alert Red</end-col>
    <end-col justify="end">提示框</end-col>
  </end-list>
  <end-list @click.native="showAlertYellow()">
    <end-col>Alert Yellow</end-col>
    <end-col justify="end">提示框</end-col>
  </end-list>
  <end-list @click.native="showConfirm()">
    <end-col>Confirm</end-col>
    <end-col justify="end">确认框</end-col>
  </end-list>
  <end-list @click.native="showConfirmGreen()">
    <end-col>Confirm</end-col>
    <end-col justify="end">确认框</end-col>
  </end-list>
</template>
<script>
export default {
  methods: {
    showAlert () {
      $dialog.alert({
        content: 'Hello END!'
      })
      .then((res) => {
        console.log('Bye bye!')
      })
    },
    showAlertRed () {
      $dialog.alert({
        content: 'Hello Red END!',
        title: '提示框2',
        theme: 'red'
      })
      .then((res) => {
        console.log('Bye bye!')
      })
    },
    showAlertYellow () {
      $dialog.alert({
        content: 'Hello Yellow END!',
        btnText: 'YES',
        theme: 'yellow'
      })
    },
    showConfirm () {
      $dialog.confirm({
        content: 'Hello Confirm End',
        title: '确认框'
      })
      .then((res) => {
        console.log(res ? `你确认了操作` : `你取消操作`)
      })
    },
    showConfirmGreen () {
      $dialog.confirm({
        content: 'Hello Confirm End',
        title: '确认框2',
        theme: 'green',
        cancelText: 'Cancel',
        okText: 'Ok'
      })
      .then((res) => {
        console.log(res ? `你确认了操作` : `你取消操作`)
      })
    }
  }
}
</script>
```
:::