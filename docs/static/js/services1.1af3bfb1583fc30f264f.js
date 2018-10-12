webpackJsonp([1],{214:function(s,a,t){s.exports=t(285)},215:function(s,a,t){s.exports=t(287)},216:function(s,a,t){s.exports=t(289)},235:function(s,a,t){"use strict";a.a={methods:{loading:function(){$loading.show(),setTimeout(function(){$loading.hide()},2e3)}}}},236:function(s,a,t){"use strict";a.a={methods:{toast:function(s){$toast(s)}}}},237:function(s,a,t){"use strict";a.a={methods:{showAlert:function(){$dialog.alert({content:"Hello END!"}).then(function(s){console.log("Bye bye!")})},showAlertRed:function(){$dialog.alert({content:"Hello Red END!",title:"提示框2",theme:"red"}).then(function(s){console.log("Bye bye!")})},showAlertYellow:function(){$dialog.alert({content:"Hello Yellow END!",btnText:"YES",theme:"yellow"})},showConfirm:function(){$dialog.confirm({content:"Hello Confirm End",title:"确认框"}).then(function(s){console.log(s?"你确认了操作":"你取消操作")})},showConfirmGreen:function(){$dialog.confirm({content:"Hello Confirm End",title:"确认框2",theme:"green",cancelText:"Cancel",okText:"Ok"}).then(function(s){console.log(s?"你确认了操作":"你取消操作")})}}}},285:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(235),l=t(286),v=t(0)(n.a,l.a,!1,null,null,null);a.default=v.exports},286:function(s,a,t){"use strict";var n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("loading 加载提示")]),s._v(" "),t("h4",[s._v("基础用法")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("end-list",{nativeOn:{click:function(a){return s.loading(a)}}},[t("end-col",[s._v("Loading")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("加载提示")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表1")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表2")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表3")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1)]],2),s._v(" "),t("p",[s._v("调用方法"),t("code",[s._v("$loading")]),s._v("，"),t("code",[s._v("show")]),s._v("显示加载，"),t("code",[s._v("hide")]),s._v("关闭加载")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Loading"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("加载提示"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    loading () {\n      $loading.show()\n      setTimeout("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        $loading.hide()\n      }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]};a.a=n},287:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(236),l=t(288),v=t(0)(n.a,l.a,!1,null,null,null);a.default=v.exports},288:function(s,a,t){"use strict";var n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("toast 文字提示")]),s._v(" "),t("h4",[s._v("基础用法")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("end-list",{nativeOn:{click:function(a){s.toast("文字提示")}}},[t("end-col",[s._v("Toast")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("文字提示")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表1")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表2")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1),s._v(" "),t("end-list",[t("end-col",[s._v("列表3")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("内容")])],1)]],2),s._v(" "),t("p",[s._v("调用方法"),t("code",[s._v("$toast")]),s._v("，"),t("code",[s._v("show")]),s._v("显示，"),t("code",[s._v("hide")]),s._v("关闭，设置参数"),t("code",[s._v("msg")]),s._v("提示文字内容")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"toast('文字提示')\"")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Toast"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("文字提示"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("列表3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    toast (tips) {\n      $toast(tips)\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]};a.a=n},289:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(237),l=t(290),v=t(0)(n.a,l.a,!1,null,null,null);a.default=v.exports},290:function(s,a,t){"use strict";var n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("dialog 对话框")]),s._v(" "),t("h4",[s._v("基础用法")]),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("end-list",{nativeOn:{click:function(a){s.showAlert()}}},[t("end-col",[s._v("Alert")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("提示框")])],1),s._v(" "),t("end-list",{nativeOn:{click:function(a){s.showAlertRed()}}},[t("end-col",[s._v("Alert Red")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("提示框")])],1),s._v(" "),t("end-list",{nativeOn:{click:function(a){s.showAlertYellow()}}},[t("end-col",[s._v("Alert Yellow")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("提示框")])],1),s._v(" "),t("end-list",{nativeOn:{click:function(a){s.showConfirm()}}},[t("end-col",[s._v("Confirm")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("确认框")])],1),s._v(" "),t("end-list",{nativeOn:{click:function(a){s.showConfirmGreen()}}},[t("end-col",[s._v("Confirm")]),s._v(" "),t("end-col",{attrs:{justify:"end"}},[s._v("确认框")])],1)]],2),s._v(" "),t("p",[s._v("设置"),t("code",[s._v("content")]),s._v("提示框内的内容，设置"),t("code",[s._v("theme")]),s._v("按钮颜色（提供三种颜色: "),t("code",[s._v("red")]),s._v(", "),t("code",[s._v("green")]),s._v(", "),t("code",[s._v("yellow")]),s._v("），设置"),t("code",[s._v("title")]),s._v("提示框标题，alert设置"),t("code",[s._v("btnText")]),s._v("按钮文本。confirm设置"),t("code",[s._v("cancelText")]),s._v(","),t("code",[s._v("okText")]),s._v("按钮文本")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAlert()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Alert"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("提示框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAlertRed()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Alert Red"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("提示框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAlertYellow()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Alert Yellow"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("提示框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showConfirm()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Confirm"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("确认框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showConfirmGreen()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("Confirm"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("确认框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("end-list")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showAlert () {\n      $dialog.alert({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello END!'")]),s._v("\n      })\n      .then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(") =>")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'Bye bye!'")]),s._v(")\n      })\n    },\n    showAlertRed () {\n      $dialog.alert({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Red END!'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'提示框2'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n      })\n      .then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(") =>")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'Bye bye!'")]),s._v(")\n      })\n    },\n    showAlertYellow () {\n      $dialog.alert({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Yellow END!'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("btnText")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'YES'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v("\n      })\n    },\n    showConfirm () {\n      $dialog.confirm({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Confirm End'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'确认框'")]),s._v("\n      })\n      .then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(") =>")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(res ? "),t("span",{attrs:{class:"hljs-string"}},[s._v("`你确认了操作`")]),s._v(" : "),t("span",{attrs:{class:"hljs-string"}},[s._v("`你取消操作`")]),s._v(")\n      })\n    },\n    showConfirmGreen () {\n      $dialog.confirm({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Confirm End'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'确认框2'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cancelText")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Cancel'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("okText")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Ok'")]),s._v("\n      })\n      .then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(") =>")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(res ? "),t("span",{attrs:{class:"hljs-string"}},[s._v("`你确认了操作`")]),s._v(" : "),t("span",{attrs:{class:"hljs-string"}},[s._v("`你取消操作`")]),s._v(")\n      })\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]};a.a=n}});