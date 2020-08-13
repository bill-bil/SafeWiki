(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{155:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return u}));var n,r=a(95),b=(a(139),a(0),a(96));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,p,s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},i={},m="wrapper";function u(e){var t=e.components,a=o(e,["components"]);return Object(b.b)(m,c({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{className:"__internal",id:"漏洞挖掘步骤："},"漏洞挖掘步骤：",Object(b.b)("a",c({parentName:"h1"},{href:"#%E6%BC%8F%E6%B4%9E%E6%8C%96%E6%8E%98%E6%AD%A5%E9%AA%A4%EF%BC%9A","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"（1）枚举程序入口点（GET-URL、POST数据、Cookie、HTTP消息头、带外通道）"),Object(b.b)("p",{parentName:"blockquote"},"（2）思考可能出现的不安全状态（即漏洞）"),Object(b.b)("p",{parentName:"blockquote"},"（3）设法使入口点到达不安全状态")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"带外通道")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"处理并显示通过SMTP接受到的电子邮件消息的Web邮件应用程序；"),Object(b.b)("p",{parentName:"blockquote"},"具有通过HTTP从其它服务器获取内容功能的发布应用程序(SSRF、XML)"),Object(b.b)("p",{parentName:"blockquote"},"记录数据或日志显示在Web页面的入侵检测系统；"),Object(b.b)("p",{parentName:"blockquote"},"提供的API接口")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"从攻击面上来划分可以讲漏洞分为两大类，通用漏洞 和 上下文漏洞")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"通用型漏洞")),Object(b.b)("p",{parentName:"blockquote"},"是指在我们对应用的业务逻辑不是非常熟悉的情况下能够找出的漏洞；"),Object(b.b)("p",{parentName:"blockquote"},"例如一些RCE（远程代码执行）、SQLi、XSS、等。"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"上下文漏洞")),Object(b.b)("p",{parentName:"blockquote"},"是指需要在对应用的业务逻辑、认证方式等非常熟悉的情况下才能找到的漏洞，例如权限绕过等。"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"漏洞的复杂性："),"有时候需要多个漏洞一起结合利用")),Object(b.b)("h1",{className:"__internal",id:"owasp-top10"},"OWASP Top10",Object(b.b)("a",c({parentName:"h1"},{href:"#owasp-top10","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"1.注入："),"SQL注入、OS注入(命令执行)、LDAP注入\n",Object(b.b)("strong",{parentName:"p"},"2.失效的身份认证和会话管理："),"弱口令爆破、不安全的散列密码加密(MD5爆破)\n",Object(b.b)("strong",{parentName:"p"},"3.敏感数据泄漏："),"源码泄漏、配置文件暴露、www.zip备份文件、默认后台\n",Object(b.b)("strong",{parentName:"p"},"4.XML外部实体(XXE)"),"\n",Object(b.b)("strong",{parentName:"p"},"5.失效的访问控制："),"管理页面仅能管理员权限访问；越权漏洞(垂直越权、水平越权); JWT-Cookie伪造\n",Object(b.b)("strong",{parentName:"p"},"6.安全配置错误："),"开放了不必要的功能(445端口、网页-默认安装页面未删除、页面报错)、默认密码或空密码\n",Object(b.b)("strong",{parentName:"p"},"7.跨站脚本(XSS)"),"\n",Object(b.b)("strong",{parentName:"p"},"8.不安全的反序列化："),"java、php、python\n",Object(b.b)("strong",{parentName:"p"},"9.使用含有已知漏洞的组件："),"未打补丁的系统和组件、使用有已知漏洞的框架版本\n",Object(b.b)("strong",{parentName:"p"},"10.不足的日志记录和监控："),"代码被删除，日志被修改，无法溯源；应该记录登陆失败次数；监控问题没被管理员响应")),Object(b.b)("h1",{className:"__internal",id:"渗透测试checklist"},"渗透测试CheckList",Object(b.b)("a",c({parentName:"h1"},{href:"#%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95checklist","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,Object(b.b)("img",c({parentName:"p"},{src:"/images/image-20200802124213681.png",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",c({parentName:"p"},{src:"/images/image-20200802125146066.png",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",c({parentName:"p"},{src:"/images/image-20200802130517963.png",alt:null}))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"这里并没有列全，反正就是各种Day去打就是了")),Object(b.b)("h1",{className:"__internal",id:"漏洞扫描"},"漏洞扫描",Object(b.b)("a",c({parentName:"h1"},{href:"#%E6%BC%8F%E6%B4%9E%E6%89%AB%E6%8F%8F","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"【AWVS爬虫 + Xray被动扫描】联动")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",c({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",c({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",c({parentName:"code"},{className:"token number"}),"1"),"、xray开启监听\n./xray webscan --listen ",Object(b.b)("span",c({parentName:"code"},{className:"token number"}),"0.0"),".0.0:1111 --html-output resualt.html\n\n",Object(b.b)("span",c({parentName:"code"},{className:"token number"}),"2"),"、AWVS添加任务，走xray代理,选择Crawl Only即仅使用爬虫"))),Object(b.b)("h1",{className:"__internal",id:"任意文件读取（下载）"},"任意文件读取（下载）",Object(b.b)("a",c({parentName:"h1"},{href:"#%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E8%AF%BB%E5%8F%96%EF%BC%88%E4%B8%8B%E8%BD%BD%EF%BC%89","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"JAVA站文件读取漏洞，下载网站源码工具")),Object(b.b)("p",null," ",Object(b.b)("a",c({parentName:"p"},{href:"https://github.com/LandGrey/ClassHound",target:"_blank"}),"https://github.com/LandGrey/ClassHound")," "),Object(b.b)("p",null," ",Object(b.b)("a",c({parentName:"p"},{href:"https://github.com/Artemis1029/Java_xmlhack",target:"_blank"}),"https://github.com/Artemis1029/Java_xmlhack")," "),Object(b.b)("h1",{className:"__internal",id:"社工打点"},"社工打点",Object(b.b)("a",c({parentName:"h1"},{href:"#%E7%A4%BE%E5%B7%A5%E6%89%93%E7%82%B9","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"邮件钓鱼"),Object(b.b)("p",null,"伪装求职者欺骗HR（传word或PDF马）"),Object(b.b)("p",null,"伪装客户欺骗销售（传木马）"),Object(b.b)("p",null,"伪装客户联系技术支持（获取系统密码）"))}u.isMDXComponent=!0,u=Object(r.hot)(e)(u),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"makeShortcode","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/hw/checklist.md"),l.register(i,"layoutProps","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/hw/checklist.md"),l.register(m,"MDXLayout","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/hw/checklist.md"),l.register(u,"MDXContent","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/hw/checklist.md")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,a(23)(e))}}]);