(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{140:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c}),n.d(e,"pageQuery",function(){return l});var r=n(0),a=n.n(r),u=n(153),o=n(174),f=n(151),i=n(179);function c(t){var e=t.pageContext,n=t.data,r=e.tag,c=n.allMarkdownRemark,l=c.edges,s=c.totalCount,d=s+" post"+(1===s?"":"s")+' tagged with "'+r+'"';return a.a.createElement(o.a,null,a.a.createElement(u.a,{title:r}),a.a.createElement("div",{className:"container generic-page"},a.a.createElement("h1",{className:"section-top"},r),a.a.createElement("ul",{className:"list-inline space--large"},a.a.createElement("li",null,d),a.a.createElement("li",null,a.a.createElement(f.Link,{to:"/tags"},"See all tags"))),a.a.createElement("div",{className:"article"},l.map(function(t){var e=t.node,n=e.frontmatter,r=n.path;n.title;return a.a.createElement(i.a,{key:r,post:e})}))))}var l="3874891862"},150:function(t,e,n){var r=n(161).Symbol;t.exports=r},152:function(t,e,n){var r=n(160);t.exports=function(t){return null==t?"":r(t)}},154:function(t,e,n){var r=n(155)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},155:function(t,e,n){var r=n(156),a=n(157),u=n(170),o=RegExp("['’]","g");t.exports=function(t){return function(e){return r(u(a(e).replace(o,"")),t,"")}}},156:function(t,e){t.exports=function(t,e,n,r){var a=-1,u=null==t?0:t.length;for(r&&u&&(n=t[++a]);++a<u;)n=e(n,t[a],a,t);return n}},157:function(t,e,n){var r=n(158),a=n(152),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(u,r).replace(o,"")}},158:function(t,e,n){var r=n(159)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},159:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},160:function(t,e,n){var r=n(150),a=n(163),u=n(164),o=n(165),f=1/0,i=r?r.prototype:void 0,c=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return a(e,t)+"";if(o(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-f?"-0":n}},161:function(t,e,n){var r=n(162),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();t.exports=u},162:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(73))},163:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},164:function(t,e){var n=Array.isArray;t.exports=n},165:function(t,e,n){var r=n(166),a=n(169),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==u}},166:function(t,e,n){var r=n(150),a=n(167),u=n(168),o="[object Null]",f="[object Undefined]",i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?f:o:i&&i in Object(t)?a(t):u(t)}},167:function(t,e,n){var r=n(150),a=Object.prototype,u=a.hasOwnProperty,o=a.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=u.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(i){}var a=o.call(t);return r&&(e?t[f]=n:delete t[f]),a}},168:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},169:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},170:function(t,e,n){var r=n(171),a=n(172),u=n(152),o=n(173);t.exports=function(t,e,n){return t=u(t),void 0===(e=n?void 0:e)?a(t)?o(t):r(t):t.match(e)||[]}},171:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},172:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},173:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",u="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+o+"|"+f+")",d="(?:"+l+"|"+f+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,c].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),m="(?:"+[u,i,c].join("|")+")"+p,v=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,l+s,"$"].join("|")+")",l+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");t.exports=function(t){return t.match(v)||[]}},175:function(t,e,n){"use strict";var r=n(0),a=n.n(r),u=n(151),o=n(154),f=n.n(o);e.a=function(t){var e=t.tag;return a.a.createElement(u.Link,{className:"theme-link theme-border-link pill",to:"/tags/"+f()(e)},e)}},177:function(t,e,n){"use strict";var r=n(0),a=n.n(r),u=n(175);e.a=function(t){var e=t.post,n=t.stacked,r=void 0!==n&&n;return a.a.createElement("ul",{className:"small font-primary "+(r?"list-unstyled":"list-inline")},a.a.createElement("li",null,e.frontmatter.date),e.frontmatter.tags.map(function(t){return a.a.createElement("li",{key:t},a.a.createElement(u.a,{tag:t}))}))}},179:function(t,e,n){"use strict";var r=n(0),a=n.n(r),u=n(151),o=n(177);e.a=function(t){var e=t.post,n=t.hideBlurb,r=void 0!==n&&n;return a.a.createElement("div",{className:"post-listing space"},a.a.createElement("h3",{className:"post-listing__heading"},a.a.createElement(u.Link,{className:"theme-link",to:e.frontmatter.path},e.frontmatter.title)),!r&&a.a.createElement("p",{className:"post-listing__blurb font-primary"},e.frontmatter.blurb),a.a.createElement(o.a,{post:e}))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-c60c74372b9b3e93ce23.js.map