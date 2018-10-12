<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <div class="demo-block-mobile">
        <div class="header">
          <i class="icon">&#xe600;</i>
          <h3>vuend</h3>
          <i class="icon">&#xe8c4;</i>
        </div>
        <slot name="source"></slot>
      </div>
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

<style lang="scss">
@import '~global/global';
.demo-block {
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  border: 1px solid #ddd;
  border-radius: 2px;
  background: #fff;
  @include transition($s: .2s);
  header {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .demo-block-code-icon {
    position: absolute;
    right: 16px;
    bottom: 14px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    img {
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
  }
  .demo-block-source {
    border-bottom: 1px solid #ebedf0;
    padding: 20px 24px 20px;
    margin-bottom: -1px;
    color: #444;
    .demo-block-mobile {
      width: px2rem(480px);
      border: 1px solid #ddd;
      * {
        font-size: $px18;
      }
      .header {
        @include flexs;
        @include align-items;
        height: px2rem(60px);
        padding: 0 $px10;
        color: #fff;
        background: rgba(0, 0, 0, .9);
        i {
          font-size: $px30;
          font-weight: bold;
        }
        h3 {
          @include flex;
          margin: 0;
          font-size: px2rem(26px);
          line-height: px2rem(48px);
          text-align: center;
        }
      }
      .source {
        padding: px2rem(20px) px2rem(20px) px2rem(20px);
      }
    }
  }
  .demo-block-meta {
    position: relative;
    width: 100%;
    margin-bottom: -1px;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color .4s;
    transition:  background-color .4s;
    color: #444;
    line-height: 2;
    p {
      font-size: $px18;
    }
    code {
      display: inline-block;
      height: 18px;
      margin: 0 4px;
      padding: 3px 7px;
      border-radius: 3px;
      color: #444;
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      font-size: $px18;
      line-height: 18px;
      background-color: #e6effb;
    }
  }
  .demo-block-code code {
    padding: 20px;
    font-size: $px18;
    background: #F1F1F1;
    span {
      font-size: $px18;
    }
  }
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
