(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(t,e,n){var o=n("NykK"),r=n("ExA7");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"4M6O":function(t,e,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var o=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,u=function(){o=null,n||t.apply(r,i)},a=n&&!o;window.clearTimeout(o),o=setTimeout(u,e),a&&t.apply(r,i)}},e.isReactElement=i,e.shallowComparison=function(t,e){var n=new Set(Object.keys(t),Object.keys(e)),o=Array.isArray(n),r=0;for(n=o?n:n[Symbol.iterator]();;){var u;if(o){if(r>=n.length)break;u=n[r++]}else{if((r=n.next()).done)break;u=r.value}var a=u;if(t[a]!==e[a]&&!i(t[a]))return!0}return!1};var r=o(n("q1tI"));function i(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return r.default.isValidElement(t)}))}},"6nK8":function(t,e,n){n("SRfc");var o=n("dVn5"),r=n("fo6e"),i=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=i(t),void 0===(e=n?void 0:e)?r(t)?u(t):o(t):t.match(e)||[]}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+o+"]",i="\\d+",u="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+o+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+a+"|"+s+")",p="(?:"+d+"|"+s+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),h="(?:"+[u,c,f].join("|")+")"+v,g=RegExp([d+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,d,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,d+l,"$"].join("|")+")",d+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,h].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},AP2z:function(t,e,n){n("a1Th"),n("Btvt");var o=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(s){}var r=u.call(t);return o&&(e?t[a]=n:delete t[a]),r}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("Btvt");var o=Object.prototype.toString;t.exports=function(t){return o.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},N1om:function(t,e,n){var o=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=o},NykK:function(t,e,n){var o=n("nmnc"),r=n("AP2z"),i=n("KfNM"),u=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?r(t):i(t)}},ORnI:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("VUT9"));e.Disqus=r.default;var i=o(n("qASQ"));e.CommentCount=i.default;var u=r.default;e.default=u},"TG/k":function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),i=n("TJpk"),u=n.n(i),a=n("hpys"),s=n("N1om"),c=n.n(s),f=n("Wbzz");var d=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props.tags;return r.a.createElement("div",{className:"post-tag-container"},t&&t.map((function(t){return r.a.createElement(f.Link,{key:t,style:{textDecoration:"none"},to:"/tags/"+c()(t)},r.a.createElement("button",null,t))})))},o}(o.Component),l=n("okzv"),p=n("IpnI"),m=n.n(p),v=(n("n7qR"),n("hBEi"),n("ORnI"));n.d(e,"default",(function(){return h})),n.d(e,"pageQuery",(function(){return g}));var h=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props,e=t.data,n=t.pageContext.slug,o=e.markdownRemark,i=o.frontmatter,s={url:""+(m.a.siteUrl+n),identifier:i.id,title:i.title};return i.id||(i.id=n),i.category_id||(i.category_id=m.a.postDefaultCategoryID),r.a.createElement(a.a,null,r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement("title",null,i.title+" | "+m.a.siteTitle)),r.a.createElement(l.a,{postPath:n,postNode:o,postSEO:!0}),r.a.createElement("div",null,r.a.createElement("h1",null,i.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.tableOfContents}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}),r.a.createElement("div",{className:"post-meta"},r.a.createElement(d,{tags:i.tags})),r.a.createElement("div",{className:"post-comments"},r.a.createElement(v.CommentCount,{config:s,placeholder:"..."}),r.a.createElement(v.Disqus,{config:s})))))},o}(r.a.Component),g="1677288357"},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var o=n("qRkn"),r=n("dt0z"),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(i,o).replace(u,"")}},VUT9:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),u=o(n("VbXa")),a=o(n("q1tI")),s=o(n("17x9")),c=n("4M6O"),f=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="temptemp3",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title},n}(0,u.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url},(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return a.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},e}(a.default.Component);e.default=f,f.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),identifier:s.default.string,title:s.default.string,url:s.default.string}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},asDA:function(t,e){t.exports=function(t,e,n,o){var r=-1,i=null==t?0:t.length;for(o&&i&&(n=t[++r]);++r<i;)n=e(n,t[r],r,t);return n}},dVn5:function(t,e,n){n("SRfc");var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(o)||[]}},dt0z:function(t,e,n){var o=n("zoYe");t.exports=function(t){return null==t?"":o(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},qASQ:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),u=o(n("VbXa")),a=o(n("q1tI")),s=o(n("17x9")),c=n("4M6O"),f=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="temptemp3",n}(0,u.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?f():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,o=(0,i.default)(t,["config","placeholder"]);return a.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},o,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},e}(a.default.Component);e.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},qRkn:function(t,e,n){var o=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=o},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var o=n("asDA"),r=n("TKrE"),i=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return o(i(r(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("Btvt");var o=n("nmnc"),r=n("eUgh"),i=n("Z0cm"),u=n("/9aa"),a=o?o.prototype:void 0,s=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return r(e,t)+"";if(u(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-f12f743054c78de223b3.js.map