<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
      <span class="demo-block-code-icon"
        v-if="!$slots.default"
        @click="showCode = !showCode">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="expand code" class="code-expand-icon-show">
      </span>
    </div>
    <div class="demo-block-meta" v-if="$slots.default">
      <slot></slot>
      <span class="demo-block-code-icon"
        v-if="$slots.default"
        @click="showCode = !showCode">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="expand code" class="code-expand-icon-show">
      </span>
    </div>
    <div class="demo-block-code" v-show="showCode">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>
<script type="text/bable">
export default {
  data () {
    return {
      showCode: false
    }
  }
}
</script>
<style>
.demo-block {
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 0 0 16pxx;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  -webkit-transition: all .2s;
  transition: all .2s;
}
.demo-block p {
  margin: 0;
  padding: 0;
}
.demo-block .demo-block-code-icon {
  position: absolute;
  right: 16px;
  bottom: 14px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
}
.demo-block .demo-block-code-icon img {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: baseline;
  -webkit-transition: all .4s;
  transition: all .4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.demo-block .demo-block-source {
  position: relative;
  border-bottom: 1px solid #ebedf0;
  padding: 20px 24px 20px;
  margin-bottom: -1px;
  color: #444;
}
.demo-block .demo-block-meta {
  position: relative;
  width: 100%;
  margin-bottom: -1px;
  border-radius: 0;
  border-bottom: 1px dashed #ebedf0;
  padding: 12px 50px 12px 20px;
  border-radius: 0 0 2px 2px;
  -webkit-transition: background-color .4s;
  transition:  background-color .4s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  color: #444;
  line-height: 2;
}
.demo-block .demo-block-meta code {
  display: inline-block;
  height: 18px;
  margin: 0 4px;
  padding: 3px 7px;
  border-radius: 3px;
  color: #444;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
  line-height: 18px;
  background-color: #e6effb;
}
.demo-block .demo-block-code pre {
  margin: 0;
  padding: 0;
}
.sh-checkbox {
  display: inline-block;
  position: relative;
  font-size: 14px;
  color: #444;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
}
</style>
