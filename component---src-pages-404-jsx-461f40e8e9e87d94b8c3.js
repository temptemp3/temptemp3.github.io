(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(9),a=n.n(r),i=n(0),o=n.n(i),s=n(164),l=n.n(s),p=n(56),c=n(167),m=(n(179),n(202)),u=n(163),f=n.n(u),h=(n(299),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"container 404-container"},o.a.createElement(l.a,{title:f.a.siteTitle}),o.a.createElement(m.a,null),"Oops! Page not found. Go to ",o.a.createElement(p.Link,{to:"/"},"home"),"."))},t}(o.a.Component))},163:function(e,t,n){n(36);var r={siteTitle:"temp23",siteTitleShort:"temp23",siteTitleAlt:"Temptemp3's blog",siteLogo:"/logos/logo-1024.png",siteUrl:"https://temptemp3.github.io",pathPrefix:"/",siteDescription:"Articles written by Temptemp3",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-104620931-1",disqusShortname:"temptemp3",postDefaultCategoryID:"blog",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"",userEmail:"",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"",userLinks:[{label:"GitHub",url:"https://github.com/temptemp3",iconClassName:"fa fa-github"}],copyright:"Copyright © 2019. temptemp3",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},167:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(0),o=n.n(i),s=n(164),l=n.n(s),p=n(163),c=n.n(p),m=(n(190),n(191),n(56)),u=n(192),f=n.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{bg:"light",expand:"lg",fixed:this.props.fixed},o.a.createElement(f.a.Brand,{onClick:function(){Object(m.navigate)("/")}},c.a.siteTitle)))},t}(i.Component),g=n(193),d=n.n(g);n.d(t,"a",function(){return E});var E=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:c.a.siteDescription})),o.a.createElement(d.a,{className:"pt-3"},e))},t}(o.a.Component)},174:function(e,t,n){var r,a,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)},179:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(0),o=n.n(i),s=n(56),l=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(s.Link,{to:e.path,key:e.title},o.a.createElement("h1",null,e.title))}))},t}(o.a.Component);t.a=l},202:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(0),o=n.n(i),s=n(164),l=n.n(s),p=n(174),c=n.n(p),m=n(163),u=n.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t,n,r,a=this.props,i=a.postNode,s=a.postPath,p=a.postSEO;if(p){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,n=m.cover,r=c()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=c()(u.a.siteUrl,u.a.pathPrefix,n);var f=c()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return p&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:p?r:f}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-jsx-461f40e8e9e87d94b8c3.js.map