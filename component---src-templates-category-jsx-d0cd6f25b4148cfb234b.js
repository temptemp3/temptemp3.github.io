(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1wty":function(t,e,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),s=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},n.render=function(){var t=this.getPostList();return o.a.createElement("div",null,t.map((function(t){return o.a.createElement(i.Link,{to:t.path,key:t.title},o.a.createElement("h2",null,t.title))})))},e}(o.a.Component);e.a=s},amwm:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("TJpk"),s=n.n(i),c=n("hpys"),p=n("1wty"),u=n("IpnI"),d=n.n(u),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"category-container"},o.a.createElement(s.a,{title:'Posts in category "'+t+'" | '+d.a.siteTitle}),o.a.createElement(p.a,{postEdges:e})))},e}(o.a.Component)}}]);
//# sourceMappingURL=component---src-templates-category-jsx-d0cd6f25b4148cfb234b.js.map