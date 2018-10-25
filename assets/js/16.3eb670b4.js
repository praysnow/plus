(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{159:function(_,v,t){"use strict";t.r(v);var e=t(0),d=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),t("p",[_._v("请你先确认你的版本已经是 1.9.* 版本，这里的 "),t("code",[_._v("*")]),_._v(" 可以是 1.9 的任意修复版本。")])]),_._v(" "),t("h2",{attrs:{id:"更新代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新代码","aria-hidden":"true"}},[_._v("#")]),_._v(" 更新代码")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("1 小时")])]),_._v(" "),t("p",[_._v("这是你自我操作的步骤，确认将你的 1.9 版本代码升级到 2.0 版本，如果你做过一些自定义修改可能会出现代码冲突，你需要解决。")]),_._v(" "),t("h2",{attrs:{id:"升级依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级依赖","aria-hidden":"true"}},[_._v("#")]),_._v(" 升级依赖")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("3 分钟")])]),_._v(" "),t("p",[_._v("进入 Plus 程序目录，执行：")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("composer update -vvv\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("这个过程根据你的网速决定快慢。")]),_._v(" "),t("h2",{attrs:{id:"清理程序缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理程序缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 清理程序缓存")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("1 分钟")])]),_._v(" "),t("p",[_._v("不管你是否使用 Laravel 命令进行过程序优化，我们仍然建议你执行下面的命令：")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("php artisan view:clear "),t("span",{attrs:{class:"token operator"}},[_._v("&&")]),_._v(" \\\nphp artisan route:clear "),t("span",{attrs:{class:"token operator"}},[_._v("&&")]),_._v(" \\\nphp artisan config:clear\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("h2",{attrs:{id:"升级数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级数据库","aria-hidden":"true"}},[_._v("#")]),_._v(" 升级数据库")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("10 分钟")])]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("at_messages")]),_._v(" 增加表（无需操作）")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("users")]),_._v(" 用户")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("avatar")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("VARCHAR 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("用户头像")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("bg")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("VARCHAR 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("个人主页背景")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("email_verified_at")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("timestamp 类型")]),_._v(" "),t("td",[_._v("邮箱认证时间")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("phone_verified_at")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("timestamp 类型")]),_._v(" "),t("td",[_._v("手机号码认证时间")]),_._v(" "),t("td",[_._v("添加")])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("feed_topics")]),_._v(" 动态")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("logo")])]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("删除")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("logo")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("VARCHAR 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("话题 logo")]),_._v(" "),t("td",[_._v("添加")])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("feed_topic_user_links")]),_._v(" 动态")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("following_at")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("修改为 "),t("code",[_._v("timestamp")]),_._v(" 类型")]),_._v(" "),t("td",[_._v("关注话题时间")]),_._v(" "),t("td",[_._v("改变")])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("feeds")]),_._v(" 动态")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("表字段")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("repostable_type")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("VARCHAR 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("可转发的资源类型")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("repostable_id")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("0")])]),_._v(" "),t("td",[_._v("integer 类型，unsigned，长度 "),t("code",[_._v("10")])]),_._v(" "),t("td",[_._v("可转发的资源 ID")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("hot")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("0")])]),_._v(" "),t("td",[_._v("int 类型，unsigned，长度 "),t("code",[_._v("10")])]),_._v(" "),t("td",[_._v("热门排序值")]),_._v(" "),t("td",[_._v("添加")])])])])]),_._v(" "),t("li",[t("p",[_._v("索引")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("索引类型")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("hot")])]),_._v(" "),t("td",[_._v("index")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("created_at")])]),_._v(" "),t("td",[_._v("index")])])])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("groups")]),_._v(" "),t("strong",[_._v("授权")]),_._v("，圈子")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("im_group_id")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("varchar 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("环信群组 ID")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("excellen_posts_count")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("0")])]),_._v(" "),t("td",[_._v("integer 类型，unsigned ，长度 "),t("code",[_._v("10")])]),_._v(" "),t("td",[_._v("圈子精华贴统计")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("avatar")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("VARCHAR 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("圈子头像")]),_._v(" "),t("td",[_._v("添加")])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("group_posts")]),_._v(" "),t("strong",[_._v("授权")]),_._v("，圈子")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("表字段")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("excellent_at")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("timestamp 类型")]),_._v(" "),t("td",[_._v("设置精华时间，也表示是否是精华")]),_._v(" "),t("td",[_._v("添加")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("comment_updated_at")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("timestamp 类型")]),_._v(" "),t("td",[_._v("评论最后更新时间")]),_._v(" "),t("td",[_._v("添加")])])])])]),_._v(" "),t("li",[t("p",[_._v("索引")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("索引类型")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("index")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("index")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("excellent_at")])]),_._v(" "),t("td",[_._v("index")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("comment_updated_at")])]),_._v(" "),t("td",[_._v("index")])])])])])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("topics")]),_._v(" "),t("strong",[_._v("授权")]),_._v("，问答")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("可为空")]),_._v(" "),t("th",[_._v("默认值")]),_._v(" "),t("th",[_._v("其他")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("操作")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("avatar")])]),_._v(" "),t("td",[t("code",[_._v("true")])]),_._v(" "),t("td",[t("code",[_._v("null")])]),_._v(" "),t("td",[_._v("varchar 类型，长度 "),t("code",[_._v("255")])]),_._v(" "),t("td",[_._v("专题头像")]),_._v(" "),t("td",[_._v("添加")])])])])])]),_._v(" "),t("p",[_._v("上述数据表修改完成后进入 Plus 目录，执行下面的命令：")]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("php artisan migrate\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("至此，你的数据库已升级完成。")]),_._v(" "),t("h2",{attrs:{id:"设置新的存储系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置新的存储系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 设置新的存储系统")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("10 分钟")])]),_._v(" "),t("p",[_._v("现在，打开你的 Web 服务，然后在浏览器进入后台，然后从左边侧栏中找到「存储设置」，目前新的存储仅支持本地和阿里云 OSS 点击顶部菜单中的「文件系统」进行对应设置，设置完成后点击「频道设置」公开频道选择你使用的存储系统。")]),_._v(" "),t("p",[_._v("接下来，点击「基础设置」页面有三处设置，设置完成后接口可正常使用，如果不设置那么接口不会允许任何上传请求。")]),_._v(" "),t("p",[_._v("图片设置推荐宽高范围是 "),t("code",[_._v("20 - 4000")]),_._v(" 以兼容云存储。")]),_._v(" "),t("h2",{attrs:{id:"清理内容缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理内容缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 清理内容缓存")]),_._v(" "),t("p",[t("strong",[_._v("预计耗时：")]),_._v(" "),t("code",[_._v("1 分钟")])]),_._v(" "),t("p",[_._v("到了这一步，你已经将程序成功升级到 2.0 版本了，现在我们清理下历史数据缓存即可：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("php artisan cache:clear\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])])])}],!1,null,null,null);d.options.__file="1.9-to-2.0.md";v.default=d.exports}}]);