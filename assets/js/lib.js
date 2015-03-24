/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)}else{t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-tab.js, bootstrap-alert.js, bootstrap-button.js
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery)
//bOOTSTRAP MODAL

!function(e){"use strict";var t=function(e,t){this.init(e,t)};t.prototype={constructor:t,init:function(t,n){var r=this;this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote,function(){var t=e.Event("loaded");r.$element.trigger(t)});var i="function"==typeof this.options.manager?this.options.manager.call(this):this.options.manager;i=i.appendModal?i:e(i).modalmanager().data("modalmanager"),i.appendModal(this)},toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=e.Event("show");this.isShown||(this.$element.trigger(t),t.isDefaultPrevented()||(this.escape(),this.tab(),this.options.loading&&this.loading()))},hide:function(t){return t&&t.preventDefault(),t=e.Event("hide"),this.$element.trigger(t),!this.isShown||t.isDefaultPrevented()?this.isShown=!1:(this.isShown=!1,this.escape(),this.tab(),this.isLoading&&this.loading(),e(document).off("focusin.modal"),this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal(),void 0)},layout:function(){var t=this.options.height?"height":"max-height",n=this.options.height||this.options.maxHeight;if(this.options.width){this.$element.css("width",this.options.width);var r=this;this.$element.css("margin-left",function(){return/%/gi.test(r.options.width)?-(parseInt(r.options.width)/2)+"%":-(e(this).width()/2)+"px"})}else this.$element.css("width",""),this.$element.css("margin-left","");this.$element.find(".modal-body").css("overflow","").css(t,""),n&&this.$element.find(".modal-body").css("overflow","auto").css(t,n);var i=e(window).height()-10<this.$element.height();i||this.options.modalOverflow?this.$element.css("margin-top",0).addClass("modal-overflow"):this.$element.css("margin-top",0-this.$element.height()/2).removeClass("modal-overflow")},tab:function(){var t=this;this.isShown&&this.options.consumeTab?this.$element.on("keydown.tabindex.modal","[data-tabindex]",function(n){if(n.keyCode&&9==n.keyCode){var r=e(this),s=e(this);t.$element.find("[data-tabindex]:enabled:not([readonly])").each(function(t){r=t.shiftKey?r.data("tabindex")>e(this).data("tabindex")?r=e(this):s=e(this):r.data("tabindex")<e(this).data("tabindex")?r=e(this):s=e(this)}),r[0]!==e(this)[0]?r.focus():s.focus(),n.preventDefault()}}):this.isShown||this.$element.off("keydown.tabindex.modal")},escape:function(){var e=this;this.isShown&&this.options.keyboard?(this.$element.attr("tabindex")||this.$element.attr("tabindex",-1),this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()})):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this.options.height?"height":"max-height",t=this.options.height||this.options.maxHeight;t&&this.$element.find(".modal-body").css("overflow","").css(e,""),this.$element.hide().trigger("hidden")},removeLoading:function(){this.$loading.remove(),this.$loading=null,this.isLoading=!1},loading:function(t){t=t||function(){};var n=this.$element.hasClass("fade")?"fade":"";if(this.isLoading)if(this.isLoading&&this.$loading){this.$loading.removeClass("in");var r=this;e.support.transition&&this.$element.hasClass("fade")?this.$loading.one(e.support.transition.end,function(){r.removeLoading()}):r.removeLoading()}else t&&t(this.isLoading);else{var i=e.support.transition&&n;this.$loading=e('<div class="loading-mask '+n+'">').append(this.options.spinner).appendTo(this.$element),i&&this.$loading[0].offsetWidth,this.$loading.addClass("in"),this.isLoading=!0,i?this.$loading.one(e.support.transition.end,t):t()}},focus:function(){var e=this.$element.find(this.options.focusOn);e=e.length?e:this.$element,e.focus()},attention:function(){if(this.options.attentionAnimation){this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);var e=this;setTimeout(function(){e.$element.addClass("animated").addClass(e.options.attentionAnimation)},0)}this.focus()},destroy:function(){var t=e.Event("destroy");this.$element.trigger(t),t.isDefaultPrevented()||this.teardown()},teardown:function(){return this.$parent.length?(this.$parent!==this.$element.parent()&&this.$element.appendTo(this.$parent),this.$element.off(".modal"),this.$element.removeData("modal"),this.$element.removeClass("in").attr("aria-hidden",!0),void 0):(this.$element.remove(),this.$element=null,void 0)}},e.fn.modal=function(n,r){return this.each(function(){var s=e(this),o=s.data("modal"),u=e.extend({},e.fn.modal.defaults,s.data(),"object"==typeof n&&n);o||s.data("modal",o=new t(this,u)),"string"==typeof n?o[n].apply(o,[].concat(r)):u.show&&o.show()})},e.fn.modal.defaults={keyboard:!0,backdrop:!0,loading:!1,show:!0,width:null,height:null,maxHeight:null,modalOverflow:!1,consumeTab:!0,focusOn:null,replace:!1,resize:!1,attentionAnimation:"shake",manager:"body",spinner:'<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',backdropTemplate:'<div class="modal-backdrop" />'},e.fn.modal.Constructor=t,e(function(){e(document).off("click.modal").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})})}(window.jQuery);!function(e){"use strict";function t(e){return function(t){return this===t.target?e.apply(this,arguments):void 0}}var n=function(e,t){this.init(e,t)};n.prototype={constructor:n,init:function(t,n){if(this.$element=e(t),this.options=e.extend({},e.fn.modalmanager.defaults,this.$element.data(),"object"==typeof n&&n),this.stack=[],this.backdropCount=0,this.options.resize){var r,i=this;e(window).on("resize.modal",function(){r&&clearTimeout(r),r=setTimeout(function(){for(var e=0;e<i.stack.length;e++)i.stack[e].isShown&&i.stack[e].layout()},10)})}},createModal:function(t,n){e(t).modal(e.extend({manager:this},n))},appendModal:function(n){this.stack.push(n);var r=this;n.$element.on("show.modalmanager",t(function(){var t=function(){n.isShown=!0;var t=e.support.transition&&n.$element.hasClass("fade");r.$element.toggleClass("modal-open",r.hasOpenModal()).toggleClass("page-overflow",e(window).height()<r.$element.height()),n.$parent=n.$element.parent(),n.$container=r.createContainer(n),n.$element.appendTo(n.$container),r.backdrop(n,function(){n.$element.show(),t&&n.$element[0].offsetWidth,n.layout(),n.$element.addClass("in").attr("aria-hidden",!1);var i=function(){r.setFocus(),n.$element.trigger("shown")};t?n.$element.one(e.support.transition.end,i):i()})};n.options.replace?r.replace(t):t()})),n.$element.on("hidden.modalmanager",t(function(){if(r.backdrop(n),n.$backdrop){var t=e.support.transition&&n.$element.hasClass("fade");t&&n.$element[0].offsetWidth,e.support.transition&&n.$element.hasClass("fade")?n.$backdrop.one(e.support.transition.end,function(){r.destroyModal(n)}):r.destroyModal(n)}else r.destroyModal(n)})),n.$element.on("destroy.modalmanager",t(function(){r.removeModal(n)}))},destroyModal:function(e){e.destroy();var t=this.hasOpenModal();this.$element.toggleClass("modal-open",t),t||this.$element.removeClass("page-overflow"),this.removeContainer(e),this.setFocus()},getOpenModals:function(){for(var e=[],t=0;t<this.stack.length;t++)this.stack[t].isShown&&e.push(this.stack[t]);return e},hasOpenModal:function(){return this.getOpenModals().length>0},setFocus:function(){for(var e,t=0;t<this.stack.length;t++)this.stack[t].isShown&&(e=this.stack[t]);e&&e.focus()},removeModal:function(e){e.$element.off(".modalmanager"),e.$backdrop&&this.removeBackdrop(e),this.stack.splice(this.getIndexOfModal(e),1)},getModalAt:function(e){return this.stack[e]},getIndexOfModal:function(e){for(var t=0;t<this.stack.length;t++)if(e===this.stack[t])return t},replace:function(n){for(var r,i=0;i<this.stack.length;i++)this.stack[i].isShown&&(r=this.stack[i]);r?(this.$backdropHandle=r.$backdrop,r.$backdrop=null,n&&r.$element.one("hidden",t(e.proxy(n,this))),r.hide()):n&&n()},removeBackdrop:function(e){e.$backdrop.remove(),e.$backdrop=null},createBackdrop:function(t,n){var r;return this.$backdropHandle?(r=this.$backdropHandle,r.off(".modalmanager"),this.$backdropHandle=null,this.isLoading&&this.removeSpinner()):r=e(n).addClass(t).appendTo(this.$element),r},removeContainer:function(e){e.$container.remove(),e.$container=null},createContainer:function(n){var i;return i=e('<div class="modal-scrollable">').css("z-index",r("modal",this.getOpenModals().length)).appendTo(this.$element),n&&"static"!=n.options.backdrop?i.on("click.modal",t(function(){n.hide()})):n&&i.on("click.modal",t(function(){n.attention()})),i},backdrop:function(t,n){var i=t.$element.hasClass("fade")?"fade":"",s=t.options.backdrop&&this.backdropCount<this.options.backdropLimit;if(t.isShown&&s){var u=e.support.transition&&i&&!this.$backdropHandle;t.$backdrop=this.createBackdrop(i,t.options.backdropTemplate),t.$backdrop.css("z-index",r("backdrop",this.getOpenModals().length)),u&&t.$backdrop[0].offsetWidth,t.$backdrop.addClass("in"),this.backdropCount+=1,u?t.$backdrop.one(e.support.transition.end,n):n()}else if(!t.isShown&&t.$backdrop){t.$backdrop.removeClass("in"),this.backdropCount-=1;var a=this;e.support.transition&&t.$element.hasClass("fade")?t.$backdrop.one(e.support.transition.end,function(){a.removeBackdrop(t)}):a.removeBackdrop(t)}else n&&n()},removeSpinner:function(){this.$spinner&&this.$spinner.remove(),this.$spinner=null,this.isLoading=!1},removeLoading:function(){this.$backdropHandle&&this.$backdropHandle.remove(),this.$backdropHandle=null,this.removeSpinner()},loading:function(t){if(t=t||function(){},this.$element.toggleClass("modal-open",!this.isLoading||this.hasOpenModal()).toggleClass("page-overflow",e(window).height()<this.$element.height()),this.isLoading)if(this.isLoading&&this.$backdropHandle){this.$backdropHandle.removeClass("in");var n=this;e.support.transition?this.$backdropHandle.one(e.support.transition.end,function(){n.removeLoading()}):n.removeLoading()}else t&&t(this.isLoading);else{this.$backdropHandle=this.createBackdrop("fade",this.options.backdropTemplate),this.$backdropHandle[0].offsetWidth;var i=this.getOpenModals();this.$backdropHandle.css("z-index",r("backdrop",i.length+1)).addClass("in");var s=e(this.options.spinner).css("z-index",r("modal",i.length+1)).appendTo(this.$element).addClass("in");this.$spinner=e(this.createContainer()).append(s).on("click.modalmanager",e.proxy(this.loading,this)),this.isLoading=!0,e.support.transition?this.$backdropHandle.one(e.support.transition.end,t):t()}}};var r=function(){var t,n={};return function(r,i){if("undefined"==typeof t){var s=e('<div class="modal hide" />').appendTo("body"),o=e('<div class="modal-backdrop hide" />').appendTo("body");n.modal=+s.css("z-index"),n.backdrop=+o.css("z-index"),t=n.modal-n.backdrop,s.remove(),o.remove(),o=s=null}return n[r]+t*i}}();e.fn.modalmanager=function(t,r){return this.each(function(){var i=e(this),s=i.data("modalmanager");s||i.data("modalmanager",s=new n(this,t)),"string"==typeof t&&s[t].apply(s,[].concat(r))})},e.fn.modalmanager.defaults={backdropLimit:999,resize:!0,spinner:'<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',backdropTemplate:'<div class="modal-backdrop" />'},e.fn.modalmanager.Constructor=n}(jQuery)
/**
   @license
   Copyright (c) 2011-2014. Adobe Systems Incorporated.
   All rights reserved.
  
   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:
  
     * Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
     * Neither the name of Adobe Systems Incorporated nor the names of its
       contributors may be used to endorse or promote products derived from this
       software without specific prior written permission.
  
   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   POSSIBILITY OF SUCH DAMAGE.

//# sourceMappingURL=edge.5.0.1.min.map

   5.0.1.1998
*/
// yepnope.js
// Version - 1.5.4pre
//
// by
// Alex Sexton - @SlexAxton - AlexSexton[at]gmail.com
// Ralph Holzmann - @ralphholzmann - ralphholzmann[at]gmail.com
//
// http://yepnopejs.com/
// https://github.com/SlexAxton/yepnope.js/
//
// Tri-license - WTFPL | MIT | BSD
//
// Please minify before use.
// Also available as Modernizr.load via the Modernizr Project
//
;( function ( window, doc, undef ) {

var docElement            = doc.documentElement,
    sTimeout              = window.setTimeout,
    firstScript           = doc.getElementsByTagName( "script" )[ 0 ],
    toString              = {}.toString,
    execStack             = [],
    started               = 0,
    noop                  = function () {},
    // Before you get mad about browser sniffs, please read:
    // https://github.com/Modernizr/Modernizr/wiki/Undetectables
    // If you have a better solution, we are actively looking to solve the problem
    isGecko               = ( "MozAppearance" in docElement.style ),
    isGeckoLTE18          = isGecko && !! doc.createRange().compareNode,
    insBeforeObj          = isGeckoLTE18 ? docElement : firstScript.parentNode,
    // Thanks to @jdalton for showing us this opera detection (by way of @kangax) (and probably @miketaylr too, or whatever...)
    isOpera               = window.opera && toString.call( window.opera ) == "[object Opera]",
    isIE                  = !! doc.attachEvent && !isOpera,
    // isOlderWebkit fix for #95 - https://github.com/SlexAxton/yepnope.js/issues/95
    isOlderWebkit		  = ( 'webkitAppearance' in docElement.style ) && !( 'async' in doc.createElement('script') ),
    strJsElem             = isGecko ? "object" : (isIE || isOlderWebkit)  ? "script" : "img",
    strCssElem            = isIE ? "script" : (isOlderWebkit) ? "img" : strJsElem,
    isArray               = Array.isArray || function ( obj ) {
      return toString.call( obj ) == "[object Array]";
    },
    isObject              = function ( obj ) {
      return Object(obj) === obj;
    },
    isString              = function ( s ) {
      return typeof s == "string";
    },
    isFunction            = function ( fn ) {
      return toString.call( fn ) == "[object Function]";
    },
    readFirstScript       = function() {
        if (!firstScript || !firstScript.parentNode) {
            firstScript = doc.getElementsByTagName( "script" )[ 0 ];
        }
    },
    globalFilters         = [],
    scriptCache           = {},
    prefixes              = {
      // key value pair timeout options
      timeout : function( resourceObj, prefix_parts ) {
        if ( prefix_parts.length ) {
          resourceObj['timeout'] = prefix_parts[ 0 ];
        }
        return resourceObj;
      }
    },
    handler,
    yepnope;

  /* Loader helper functions */
  function isFileReady ( readyState ) {
    // Check to see if any of the ways a file can be ready are available as properties on the file's element
    return ( ! readyState || readyState == "loaded" || readyState == "complete" || readyState == "uninitialized" );
  }


  // Takes a preloaded js obj (changes in different browsers) and injects it into the head
  // in the appropriate order
  function injectJs ( src, cb, attrs, timeout, /* internal use */ err, internal ) {
	  
    var script = doc.createElement( "script" ),
        done, i;

    timeout = timeout || yepnope['errorTimeout'];

    script.src = src;

    // Add our extra attributes to the script element
    for ( i in attrs ) {
        script.setAttribute( i, attrs[ i ] );
    }

    cb = internal ? executeStack : ( cb || noop );

    // Bind to load events
    script.onreadystatechange = script.onload = function () {

      if ( ! done && isFileReady( script.readyState ) ) {

        // Set done to prevent this function from being called twice.
        done = 1;
        cb();

        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null;
      }
    };

    // 404 Fallback
    sTimeout(function () {
      if ( ! done ) {
        done = 1;
        // Might as well pass in an error-state if we fire the 404 fallback
        cb(1);
      }
    }, timeout );

    // Inject script into to document
    // or immediately callback if we know there
    // was previously a timeout error
    readFirstScript();
    err ? script.onload() : firstScript.parentNode.insertBefore( script, firstScript );
  }

  // Takes a preloaded css obj (changes in different browsers) and injects it into the head
  function injectCss ( href, cb, attrs, timeout, /* Internal use */ err, internal ) {

    // Create stylesheet link
    var link = doc.createElement( "link" ),
        done, i;

    timeout = timeout || yepnope['errorTimeout'];

    cb = internal ? executeStack : ( cb || noop );

    // Add attributes
    link.href = href;
    link.rel  = "stylesheet";
    link.type = "text/css";

    // Add our extra attributes to the link element
    for ( i in attrs ) {
      link.setAttribute( i, attrs[ i ] );
    }

    if ( ! err ) {
      readFirstScript();
      firstScript.parentNode.insertBefore( link, firstScript );
      sTimeout(cb, 0);
    }
  }

  function executeStack ( ) {
    // shift an element off of the stack
    var i   = execStack.shift();
    started = 1;

    // if a is truthy and the first item in the stack has an src
    if ( i ) {
      // if it's a script, inject it into the head with no type attribute
      if ( i['t'] ) {
        // Inject after a timeout so FF has time to be a jerk about it and
        // not double load (ignore the cache)
        sTimeout( function () {
          (i['t'] == "c" ?  yepnope['injectCss'] : yepnope['injectJs'])( i['s'], 0, i['a'], i['x'], i['e'], 1 );
        }, 0 );
      }
      // Otherwise, just call the function and potentially run the stack
      else {
        i();
        executeStack();
      }
    }
    else {
      // just reset out of recursive mode
      started = 0;
    }
  }

  function preloadFile ( elem, url, type, splicePoint, dontExec, attrObj, timeout ) {

    timeout = timeout || yepnope['errorTimeout'];

    // Create appropriate element for browser and type
    var preloadElem = doc.createElement( elem ),
        done        = 0,
        firstFlag   = 0,
        stackObject = {
          "t": type,     // type
          "s": url,      // src
        //r: 0,        // ready
          "e": dontExec,// set to true if we don't want to reinject
          "a": attrObj,
          "x": timeout
        };

    // The first time (common-case)
    if ( scriptCache[ url ] === 1 ) {
      firstFlag = 1;
      scriptCache[ url ] = [];
    }

    function onload ( first ) {
      // If the script/css file is loaded
      if ( ! done && isFileReady( preloadElem.readyState ) ) {

        // Set done to prevent this function from being called twice.
        stackObject['r'] = done = 1;

        ! started && executeStack();

        if ( first ) {
          if ( elem != "img" ) {
            sTimeout(function(){ insBeforeObj.removeChild( preloadElem ) }, 50);
          }

          for ( var i in scriptCache[ url ] ) {
            if ( scriptCache[ url ].hasOwnProperty( i ) ) {
              scriptCache[ url ][ i ].onload();
            }
          }
          
          // Handle memory leak in IE
           preloadElem.onload = preloadElem.onreadystatechange = null;
        }
      }
    }


    // Setting url to data for objects or src for img/scripts
    if ( elem == "object" ) {
      preloadElem.data = url;
	  
      // Setting the type attribute to stop Firefox complaining about the mimetype when running locally.
      // The type doesn't matter as long as it's real, thus text/css instead of text/javascript.
      preloadElem.setAttribute("type", "text/css");
    } else {
      preloadElem.src = url;

      // Setting bogus script type to allow the script to be cached
      preloadElem.type = elem;
    }

    // Don't let it show up visually
    preloadElem.width = preloadElem.height = "0";

    // Attach handlers for all browsers
    preloadElem.onerror = preloadElem.onload = preloadElem.onreadystatechange = function(){
      onload.call(this, firstFlag);
    };
    // inject the element into the stack depending on if it's
    // in the middle of other scripts or not
    execStack.splice( splicePoint, 0, stackObject );

    // The only place these can't go is in the <head> element, since objects won't load in there
    // so we have two options - insert before the head element (which is hard to assume) - or
    // insertBefore technically takes null/undefined as a second param and it will insert the element into
    // the parent last. We try the head, and it automatically falls back to undefined.
    if ( elem != "img" ) {
      // If it's the first time, or we've already loaded it all the way through
      if ( firstFlag || scriptCache[ url ] === 2 ) {
        readFirstScript();
        insBeforeObj.insertBefore( preloadElem, isGeckoLTE18 ? null : firstScript );

        // If something fails, and onerror doesn't fire,
        // continue after a timeout.
        sTimeout( onload, timeout );
      }
      else {
        // instead of injecting, just hold on to it
        scriptCache[ url ].push( preloadElem );
      }
    }
  }

  function load ( resource, type, dontExec, attrObj, timeout ) {
    // If this method gets hit multiple times, we should flag
    // that the execution of other threads should halt.
    started = 0;

    // We'll do 'j' for js and 'c' for css, yay for unreadable minification tactics
    type = type || "j";
    if ( isString( resource ) ) {
      // if the resource passed in here is a string, preload the file
      preloadFile( type == "c" ? strCssElem : strJsElem, resource, type, this['i']++, dontExec, attrObj, timeout );
    } else {
      // Otherwise it's a callback function and we can splice it into the stack to run
      execStack.splice( this['i']++, 0, resource );
      execStack.length == 1 && executeStack();
    }

    // OMG is this jQueries? For chaining...
    return this;
  }

  // return the yepnope object with a fresh loader attached
  function getYepnope () {
    var y = yepnope;
    y['loader'] = {
      "load": load,
      "i" : 0
    };
    return y;
  }

  /* End loader helper functions */
  // Yepnope Function
  yepnope = function ( needs ) {

    var i,
        need,
        // start the chain as a plain instance
        chain = this['yepnope']['loader'];

    function satisfyPrefixes ( url ) {
      // split all prefixes out
      var parts   = url.split( "!" ),
      gLen    = globalFilters.length,
      origUrl = parts.pop(),
      pLen    = parts.length,
      res     = {
        "url"      : origUrl,
        // keep this one static for callback variable consistency
        "origUrl"  : origUrl,
        "prefixes" : parts
      },
      mFunc,
      j,
      prefix_parts;

      // loop through prefixes
      // if there are none, this automatically gets skipped
      for ( j = 0; j < pLen; j++ ) {
        prefix_parts = parts[ j ].split( '=' );
        mFunc = prefixes[ prefix_parts.shift() ];
        if ( mFunc ) {
          res = mFunc( res, prefix_parts );
        }
      }

      // Go through our global filters
      for ( j = 0; j < gLen; j++ ) {
        res = globalFilters[ j ]( res );
      }

      // return the final url
      return res;
    }

     function getExtension ( url ) {
      //The extension is always the last characters before the ? and after a period.
      //The previous method was not accounting for the possibility of a period in the query string.
      var b = url.split('?')[0];
      return b.substr(b.lastIndexOf('.')+1);
    }

    function loadScriptOrStyle ( input, callback, chain, index, testResult ) {
      // run through our set of prefixes
      var resource     = satisfyPrefixes( input ),
          autoCallback = resource['autoCallback'],
          extension    = getExtension( resource['url'] );

      // if no object is returned or the url is empty/0 just exit the load
      if ( resource['bypass'] ) {
        return;
      }

      // Determine callback, if any
      if ( callback ) {
        callback = isFunction( callback ) ?
          callback :
          callback[ input ] ||
          callback[ index ] ||
          callback[ ( input.split( "/" ).pop().split( "?" )[ 0 ] ) ];
      }

      // if someone is overriding all normal functionality
      if ( resource['instead'] ) {
        return resource['instead']( input, callback, chain, index, testResult );
      }
      else {
        // Handle if we've already had this url and it's completed loaded already
        if ( scriptCache[ resource['url'] ] && resource['reexecute'] !== true) {
          // don't let this execute again
          resource['noexec'] = true;
        }
        else {
          scriptCache[ resource['url'] ] = 1;
        }

        // Throw this into the queue
        input && chain.load( resource['url'], ( ( resource['forceCSS'] || ( ! resource['forceJS'] && "css" == getExtension( resource['url'] ) ) ) ) ? "c" : undef, resource['noexec'], resource['attrs'], resource['timeout'] );

        // If we have a callback, we'll start the chain over
        if ( isFunction( callback ) || isFunction( autoCallback ) ) {
          // Call getJS with our current stack of things
          chain['load']( function () {
            // Hijack yepnope and restart index counter
            getYepnope();
            // Call our callbacks with this set of data
            callback && callback( resource['origUrl'], testResult, index );
            autoCallback && autoCallback( resource['origUrl'], testResult, index );

            // Override this to just a boolean positive
            scriptCache[ resource['url'] ] = 2;
          } );
        }
      }
    }

    function loadFromTestObject ( testObject, chain ) {
        var testResult = !! testObject['test'],
            group      = testResult ? testObject['yep'] : testObject['nope'],
            always     = testObject['load'] || testObject['both'],
            callback   = testObject['callback'] || noop,
            cbRef      = callback,
            complete   = testObject['complete'] || noop,
            needGroupSize,
            callbackKey;
            
        // Reusable function for dealing with the different input types
        // NOTE:: relies on closures to keep 'chain' up to date, a bit confusing, but
        // much smaller than the functional equivalent in this case.
        function handleGroup ( needGroup, moreToCome ) {
          if ( '' !== needGroup && ! needGroup ) {
            // Call the complete callback when there's nothing to load.
            ! moreToCome && complete();
          }
          // If it's a string
          else if ( isString( needGroup ) ) {
            // if it's a string, it's the last
            if ( !moreToCome ) {
              // Add in the complete callback to go at the end
              callback = function () {
                var args = [].slice.call( arguments );
                cbRef.apply( this, args );
                complete();
              };
            }
            // Just load the script of style
            loadScriptOrStyle( needGroup, callback, chain, 0, testResult );
          }
          // See if we have an object. Doesn't matter if it's an array or a key/val hash
          // Note:: order cannot be guaranteed on an key value object with multiple elements
          // since the for-in does not preserve order. Arrays _should_ go in order though.
          else if ( isObject( needGroup ) ) {
            // I hate this, but idk another way for objects.
            needGroupSize = (function(){
              var count = 0, i
              for (i in needGroup ) {
                if ( needGroup.hasOwnProperty( i ) ) {
                  count++;
                }
              }
              return count;
            })();

            for ( callbackKey in needGroup ) {
              // Safari 2 does not have hasOwnProperty, but not worth the bytes for a shim
              // patch if needed. Kangax has a nice shim for it. Or just remove the check
              // and promise not to extend the object prototype.
              if ( needGroup.hasOwnProperty( callbackKey ) ) {
                // Find the last added resource, and append to it's callback.
                if ( ! moreToCome && ! ( --needGroupSize ) ) {
                  // If this is an object full of callbacks
                  if ( ! isFunction( callback ) ) {
                    // Add in the complete callback to go at the end
                    callback[ callbackKey ] = (function( innerCb ) {
                      return function () {
                        var args = [].slice.call( arguments );
                        innerCb && innerCb.apply( this, args );
                        complete();
                      };
                    })( cbRef[ callbackKey ] );
                  }
                  // If this is just a single callback
                  else {
                    callback = function () {
                      var args = [].slice.call( arguments );
                      cbRef.apply( this, args );
                      complete();
                    };
                  }
                }
                loadScriptOrStyle( needGroup[ callbackKey ], callback, chain, callbackKey, testResult );
              }
            }
          }
        }

        // figure out what this group should do
        handleGroup( group, !!always || !!testObject['complete']);

        // Run our loader on the load/both group too
        // the always stuff always loads second.
        always && handleGroup( always );

	// If complete callback is used without loading anything
        !always && !!testObject['complete'] && handleGroup('');

    }

    // Someone just decides to load a single script or css file as a string
    if ( isString( needs ) ) {
      loadScriptOrStyle( needs, 0, chain, 0 );
    }
    // Normal case is likely an array of different types of loading options
    else if ( isArray( needs ) ) {
      // go through the list of needs
      for( i = 0; i < needs.length; i++ ) {
        need = needs[ i ];

        // if it's a string, just load it
        if ( isString( need ) ) {
          loadScriptOrStyle( need, 0, chain, 0 );
        }
        // if it's an array, call our function recursively
        else if ( isArray( need ) ) {
          yepnope( need );
        }
        // if it's an object, use our modernizr logic to win
        else if ( isObject( need ) ) {
          loadFromTestObject( need, chain );
        }
      }
    }
    // Allow a single object to be passed in
    else if ( isObject( needs ) ) {
      loadFromTestObject( needs, chain );
    }
  };

  // This publicly exposed function is for allowing
  // you to add functionality based on prefixes on the
  // string files you add. 'css!' is a builtin prefix
  //
  // The arguments are the prefix (not including the !) as a string
  // and
  // A callback function. This function is passed a resource object
  // that can be manipulated and then returned. (like middleware. har.)
  //
  // Examples of this can be seen in the officially supported ie prefix
  yepnope['addPrefix'] = function ( prefix, callback ) {
    prefixes[ prefix ] = callback;
  };

  // A filter is a global function that every resource
  // object that passes through yepnope will see. You can
  // of course conditionally choose to modify the resource objects
  // or just pass them along. The filter function takes the resource
  // object and is expected to return one.
  //
  // The best example of a filter is the 'autoprotocol' officially
  // supported filter
  yepnope['addFilter'] = function ( filter ) {
    globalFilters.push( filter );
  };

  // Default error timeout to 10sec - modify to alter
  yepnope['errorTimeout'] = 1e4;

  // Webreflection readystate hack
  // safe for jQuery 1.4+ ( i.e. don't use yepnope with jQuery 1.3.2 )
  // if the readyState is null and we have a listener
  if ( doc.readyState == null && doc.addEventListener ) {
    // set the ready state to loading
    doc.readyState = "loading";
    // call the listener
    doc.addEventListener( "DOMContentLoaded", handler = function () {
      // Remove the listener
      doc.removeEventListener( "DOMContentLoaded", handler, 0 );
      // Set it to ready
      doc.readyState = "complete";
    }, 0 );
  }

  // Attach loader &
  // Leak it
  window['yepnope'] = getYepnope();

  // Exposing executeStack to better facilitate plugins
  window['yepnope']['executeStack'] = executeStack;
  window['yepnope']['injectJs'] = injectJs;
  window['yepnope']['injectCss'] = injectCss;

})( this, document );
// yepnope.js - end

/**
 * Adobe Edge Animate - Core
 */

/*jslint plusplus:true, nomen: true, undef: true*/
/*global window: true, document: true, Image: true, CustomEvent: true, HTMLElement: true, console:true */
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
}

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

var aBootcompsLoaded = [];
window.AdobeEdge = window.AdobeEdge || {};

(function (an) {

    "use strict";

    var doc = document,
        win = window,
        props = {},
        comps = {},
        loadedURIs = {},
        defaultOptions = { imagesDir: "images/" },
        hasTransform,
        forEach = Array.prototype.forEach,
        fnTimer,
        docIsReady,
        payloadsToLoad = [],
        testEle,
        arr = [],
        push = arr.push,
        htLookup = {},
        // We have to close these tags to support XHTML (#13200) - Taken from jQuery
        wrapMap = {    
            // Support: IE 9
            option: [ 1, "<select multiple='multiple'>", "</select>" ],    
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    
            _default: [ 1, "", "" ]
        },	
        rtagName = /<([\w:]+)/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        supported = {},
        elementDisplay = {};
            
    an.doPlayWhenReady = false;
    an.readyAndWaiting = [];
    
    // Don't automatically add "px" to these possibly-unitless properties
	var cssNumber = {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	};
    
    var cssNormalTransform = {
        "letterSpacing": 0,
        "fontWeight": 400
    };
    
    /** Utilities **/

    function isArray(o) {
        //return (o instanceof Array);
        return Object.prototype.toString.call(o) === '[object Array]';
    }        

    //taken from zepto    
    function isFunction(value) { return typeof(value) == "function" };
    
    // Adapted from jQuery
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }
    
    function isDocument(obj) { 
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE 
    }
    
    // Adapted from jQuery
    function isNumeric(obj) {
		return !isNaN(parseFloat(obj)) && isFinite(obj);
	}

    // Adapted from jQuery | MIT
    function isArraylike(obj) {
        var length = obj.length;

        if (isWindow(obj)) {
            return false;
        }

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return (isArray(obj) || (typeof obj !== "function" && ( length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in obj)));
    }

    function wrapArray(a, b) {
        var i;
        for (i = 0; a && i < a.length; i++) {
            b[b.length++] = a[i];
        }
    }

    function each(o, fn) {
        var k, length;
        if (isArray(o)) {
            length = o.length;
            for (k = 0; k < length; k++) {
                fn(k, o[k]);
            }
        } else {
            for (k in o) {
                if (o.hasOwnProperty(k)) {
                    fn(k, o[k]);
                }
            }
        }
    }
    
    function dir(elem, dir) {
        var matched = [];
    
        while ((elem = elem[ dir ]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                matched.push(elem);
            }
        }
        return matched;
    }        

    function defaultDisplay(nodeName) {
        var element, display
        if (!elementDisplay[nodeName]) {
            element = document.createElement(nodeName)
            document.body.appendChild(element)
            display = getComputedStyle(element, '').getPropertyValue("display")
            element.parentNode.removeChild(element)
            display == "none" && (display = "block")
            elementDisplay[nodeName] = display
        }
        return elementDisplay[nodeName]
    }    

    // Modernizr 2.5.3 | MIT & BSD
    testEle = document.createElement('div');

    function isSupported(props) {
        var s = testEle.style, p, i;
        for ( i = 0; i < props.length; i++ ) {
            p = props[i];
            if ( s[p] !== undefined ) {
                return true;
            }
        }
        return false;
    }
    
    function supportsRGBA() {
        testEle.style.cssText = 'background-color:rgba(150,255,150,.5)';
        var sTest = '' + testEle.style.backgroundColor;
        if(sTest.indexOf('rgba') == 0) {
            return true;
        }
        return false;
    }    

    function safeColor(sVal) {
        sVal = '' + sVal;
        if(!supported.rgba && sVal.indexOf('rgba') == 0) {
            var iPos = sVal.lastIndexOf(',');
            if(iPos > 0) {
                sVal = 'rgb(' + sVal.substring(5, iPos) + ')';
            }
        }
        return sVal;
    }
    
    function supportedAudio() {
        var a = document.createElement('audio'),
            supported = {};

        if (a.canPlayType) {
            supported['m4a'] = !!a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, '');
            supported['aac'] = supported['m4a'];
            supported['mp3'] = !!a.canPlayType('audio/mpeg;').replace(/no/, '');
            supported['wav'] = !!a.canPlayType('audio/wav; codecs="1"').replace(/no/, '');
            supported['ogg'] = !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '');
            supported['oga'] = supported['ogg'];
        }

        return supported;
    }
    
    function supportedVideo() {
        var v = document.createElement('video'),
            supported = {};

        if (v.canPlayType) {
            supported['webm'] = !!v.canPlayType('video/webm').replace(/no/, '');
            supported['mp4'] = !!v.canPlayType('video/mp4;').replace(/no/, '');
    	    supported['ogv'] = !!v.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, '');
            supported['ogg'] = !!v.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, '');
        }

        return supported;
    }    
    
    function isCustomEventSupported() {
        if(!window.CustomEvent) return false;
        try {
            return new CustomEvent("testCustomEvent", false, false) !== undefined;
        } catch (e) {            
        }
        return false;
    }
    
    function isOpera() {
        return /Opera/.test(navigator.userAgent);
    }
    
    function isiOS() {
	    var ua = navigator.userAgent;
	    var isWebkit = ( 'webkitAppearance' in document.documentElement.style );
	    return (isWebkit && (/iPad/.test(ua) || /iPod/.test(ua) || /iPhone/.test(ua) ));
    }    

	function requestResource(type, aURLs, comp, preload) {	
        if (AdobeEdge.isIOS) return undefined;
        var j, ext;

        for (j = 0; j < aURLs.length; j++) {
            ext = aURLs[j].split('.');
            ext = ext[ext.length - 1].toLowerCase();
            if (AdobeEdge.supported[type][ext]) {
                //request the resource
                var bDoLoad = false;
    
                if (preload === null || preload == "")
                    bDoLoad = (type == "audio" ? comp.opts.gAudioPreloadPreference : comp.opts.gVideoPreloadPreference) == "auto";
                else {
                    bDoLoad = preload == "auto";
                }
                
                if(bDoLoad) {
                    preloadAsset(type, comp._getFullURL(aURLs[j]), comp);
                }
                return comp._getFullURL(aURLs[j]);
            }
        }

        return undefined;
    }
    
    //check o for existence of non-null properties
    function isEmpty(o) {
        var r;
        each(o, function (_, v) {
            if (v !== null) {
                r = true;
            }
        });
        return !r;
    }

    function extend(tgt, src) {
        each(src, function (k, v) {
            tgt[k] = v;
        });
        return tgt;
    }

    function splitUnits(s) {
        var o = {};
        o.num = parseFloat(s);
        o.units = String(s).match(/[a-zA-Z%]+$/);
        if (isArray(o.units)) {
            o.units = o.units[0];
        }
        return o;
    }


    hasTransform = isSupported(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);

    /** Document Selection **/

        // Camelize a dashed string

        //TBD: not sure which of these regex is better...
        //jqMobi's regex is shorter: /-+(.)?/g
        //than jQuery's            : /-([a-z]|[0-9])/ig

    function camelize(str) {
        return str.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/ig, function (s, l) {
            return String(l).toUpperCase();
        });
    }
    
    //based of jQuery
    function buildFragment(html) {
        var tmp = document.createElement("div");

        // Deserialize a standard representation
        var tag = ( rtagName.exec( html ) || ["", ""] )[ 1 ].toLowerCase();
        var wrap = wrapMap[ tag ] || wrapMap._default;
        tmp.innerHTML = wrap[ 1 ] + html.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

        // Descend through wrappers to the right content
        var j = wrap[ 0 ];
        while ( j-- ) {
            tmp = tmp.lastChild;
        }   
        return tmp;
    }

    function An$(sel) {
        var dom;
        AdobeEdge.Notifier.call(this);

        this.length = 0;
        if (!sel) {
            return this;
        }
        if (sel instanceof An$) {
            return sel;
        }
        if (typeof sel === 'string') {
            sel = sel.trim();

            //testing for ID selector
            // the reg-ex zepto uses (/^#([\w-]+)$/) doesn't pass JSLint - it complains about an unescaped dash
            if (/^#([\w\-]+)$/.test(sel)) {
                dom = doc.getElementById(sel.substring(1));
                if (dom) {
                    this[this.length++] = dom;
                }
            } else if(/<|&#?\w+;/.test(sel)) {
                //HTML fragment                      
                this[this.length++] = buildFragment(sel);
            } else {
                wrapArray(doc.querySelectorAll(sel), this);
            }
        } else if(isArraylike(sel)) {
            return wrapArray(sel, this);
        } else if (sel.nodeType) {
            this[this.length++] = sel;
        } else {
            push.call(this, sel);
        }

        return this;
    }

    function $(sel) {
        return new An$(sel);
    }

    $.each = each;
    $.extend = extend;
    $.data = function (ele, prop, val) {
        var propName = "an_" + prop;
        if (arguments.length > 2) {
            ele[propName] = val;
        }
        return ele[propName];
    };
    
    //Utility functions
    function isStageWrapped($stg) {
        return $stg.parent().hasClass('center-wrapper'); // we always double wrap so just check for inner wrap
    }

    function wrapForStageScaling($stage) {
        // Wrap in 2 divs. Inner is for centering. Outer is to push sibs in flow down below.
        // They both get their size adjusted when we scale the stage.
        // This has to be called before dom is built, because reparenting causes
        // audio autoplay to be disabled (at least on some browsers)
        if(!isStageWrapped($stage)) {
            $stage.wrap("<div class='flow-wrapper' style='width:1px'><div class='center-wrapper'></div></div>");
        }
    }
    
    
    function bindStageScaling($stage, scaleToFit, minWidth, maxWidth, bMainStage, bScaleToParent) {
  		function scaleStage() {
			var isWrapped = isStageWrapped($stage),
				parent = isWrapped ? $stage.parent().parent().parent() : $stage.parent(),
				parentWidth = parent.width(),
				parentHeight = parent.height(),
				stageWidth = $stage.width(),
				stageHeight = $stage.height(),
				browserHeight = $(window).height(),
				desiredWidth,
				desiredHeight,
				rescaleW,
				rescaleH,
				rescale = 1,
				orgX = '0',
				orgY = '0',
				val,
				origin,
				flowParent,
				isParentBody = parent[0].nodeName.toLowerCase() === 'body';
        if (isParentBody) {
          parentHeight = browserHeight;
        }

        if(!bScaleToParent)
        {
          parentHeight = $(window).height();
          parentWidth  = $(window).width();
        } 
			
			desiredWidth = Math.round(parentWidth);
			desiredHeight = Math.round(parentHeight);
			rescaleW = desiredWidth / stageWidth;
			rescaleH = desiredHeight / stageHeight;

			if (scaleToFit === 'both') {
				rescale = Math.min(rescaleW, rescaleH);
			} else if (scaleToFit === 'height') {
				rescale = rescaleH;
			} else if (scaleToFit === 'width') {
				rescale = rescaleW;
			}
			if (maxWidth !== undefined) {
				rescale = Math.min(rescale, maxWidth / stageWidth);
			}
			if (minWidth !== undefined) {
				rescale = Math.max(rescale, minWidth / stageWidth);
			}
			origin = orgX + ' ' + orgY;
			$stage.css('-o-transform-origin', origin);
			$stage.css('-ms-transform-origin', origin);
			$stage.css('-webkit-transform-origin', origin);
			$stage.css('-moz-transform-origin', origin);
			$stage.css('-o-transform-origin', origin);
			$stage.css('transform-origin', origin);
			
			val = 'scale(' + rescale + ')';
			$stage.css('-o-transform', val);
			$stage.css('-ms-transform', val);
			$stage.css('-webkit-transform', val);
			$stage.css('-moz-transform', val);
			$stage.css('-o-transform', val);
			$stage.css('transform', val);
			if (!isParentBody || isWrapped) {
				// Handle the centering wrapper so it's the same size - without this wrapper, centering would try to work on
				// the non-transformed size, so it would break when the parent gets smaller than the stage
				$stage.parent().height(Math.round(stageHeight * rescale)).width(Math.round(stageWidth * rescale));
			}
			if (isWrapped) {
				// Flowparent
				flowParent = $stage.parent().parent();
				flowParent.height(Math.round(stageHeight * rescale + $stage.offset().top - flowParent.offset().top));
			}
		}
        
		if (bMainStage) {
			if (!($.data($stage[0], "alreadyWrapped"))) {
				$.data($stage[0], "alreadyWrapped", true);
				$(window).bind('resize', function () {
					scaleStage();
				});
				documentReady(function () {
					scaleStage();
				});
			}
		}
		else {
			if (!isStageWrapped($stage)) {
				wrapForStageScaling($stage);
				$(window).bind('resize', function () {
					scaleStage();
				});
				scaleStage();
			}
		}
	}
    
    function centerTheStage(stage, ctrStage) {
        var $stage = $(stage);
        if (isStageWrapped($stage)) {
            $stage = $stage.parent();
        }
        if (ctrStage === 'both' || ctrStage === 'horizontal') {
            $stage.css('position', 'absolute');
            $stage.css('margin-left', 'auto');
            $stage.css('margin-right', 'auto');
            $stage.css('left', '0');
            $stage.css('right', '0');
        }
        if (ctrStage === 'both' || ctrStage === 'vertical') {
            // Note we assume the stage height is already specified to make this work
            $stage.css('position', 'absolute');
            $stage.css('margin-top', 'auto');
            $stage.css('margin-bottom', 'auto');
            $stage.css('top', '0');
            $stage.css('bottom', '0');
        }
    }    
    //
    // Notifier
    //

    function Notifier() {
        var notifier = this.notifier = {};
        notifier.obs = []; // observers
        notifier.lvl = 0;   // notification level
    }

    // Used a lot in this file - extract from Notifier object so we can call directly
    function notifyObservers(notifierObject, methodName, data) {
        if (!methodName) {
            return;
        }

        if (!data) {
            data = {};
        }

        data.methodName = methodName;
        var notifier = notifierObject.notifier,
            observers = notifier.obs,
            i,
            o,
            obs,
            len;
        notifier.lvl++; // Defer removals

        // We need to retest length in case of addObserver during notification
        for (i = 0; i < observers.length; i++) {
            o = observers[i];
            obs = o && !o.deleted ? o.o : undefined;
            if (obs) {
                if (typeof obs === "function") {
                    obs(methodName, notifierObject, data);
                } else if (obs[methodName]) {
                    obs[methodName](notifierObject, data);
                }
            }
        }

        notifier.lvl--;
        if (notifier.lvl === 0) {
            len = observers.length;
            // Do deferred removeObserver
            for (i = len - 1; i >= 0; i--) {
                if (observers[i].deleted) {
                    observers.splice(i, 1);
                }
            }
        }
    }

    extend(Notifier.prototype, {
        addObserver: function (observer) {
            if (!observer) {
                return;
            }

            var notifier = this.notifier,
                observers = notifier.obs,
                len,
                i;

            // Make sure the observer isn't already on the list.
            len = observers.length;
            for (i = 0; i < len; i++) {
                if (observers[i].o === observer) {
                    return;
                }
            }
            observers[len] = {o: observer};
        },

        removeObserver: function (observer) {
            if (!observer) {
                return;
            }
            var notifier = this.notifier,
                observers = notifier.obs,
                i;

            for (i = 0; i < observers.length; i++) {
                if (observers[i].o === observer) {
                    if (notifier.lvl === 0) {
                        observers.splice(i, 1);
                        break;
                    } else {
                        // defer removal
                        observers[i].deleted = true;
                    }
                }
            }
        },

        notifyObservers: function (methodName, data) {
            return notifyObservers(this, methodName, data);
        },
        removeObservers: function () {
            var observers = this.notifier ? this.notifier.obs : null;
            if (observers) {
                observers.splice(0, observers.length);
            }
        }

    });


    function setAttr(e, k, v) {
        return v ? e.setAttribute(k, v) : e.removeAttribute(k);
    }

	function setClass($e, value, bRemove) {
		var classes, elem, cur, clazz, j,
			defStr = (bRemove ? "" : " "),
			proceed = (bRemove ? ((typeof value === "undefined") || typeof value === "string" && value) : (typeof value === "string" && value)),
			core_rnotwhite = /\S+/g,
			rclass = /[\t\r\n\f]/g;

		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];
			$e.each(function (_, elem) {
				cur = elem.nodeType === 1 && ( elem.className ? ( " " + elem.className + " " ).replace( rclass, " " ) : defStr );
				
				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if (bRemove) {
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
						else {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
					}
					if (bRemove) {
						elem.className = value ? cur.trim() : "";
					}
					else {
						elem.className = cur.trim();
					}
				}
			});
		}
	}
    
    //taken from zepto
    function qsa(element, selector) {
        var simpleSelectorRE = /^[\w-]*$/;
        var found,
            maybeID = selector[0] == '#',
            maybeClass = !maybeID && selector[0] == '.',
            nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
            isSimple = simpleSelectorRE.test(nameOnly);
        
        return (isDocument(element) && isSimple && maybeID) ?
          ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
          (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
          Array.prototype.slice.call(
            isSimple && !maybeID ?
              maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
              element.getElementsByTagName(selector) : // Or a tag
              element.querySelectorAll(selector) // Or it's not simple, and we need to query all
          );
    }
    
    function matches(element, selector) {
        selector = selector.replace(/=#\]/g, '="#"]')
        var filter, arg, match = filterRe.exec(selector);
        if (match && match[2] in filters) {
          filter = filters[match[2]], arg = match[3];
          selector = match[1];
          if (arg) {
            var num = Number(arg)
            if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
            else arg = num;
          }
        }        
        
        if(!selector) {
            return (!filter || filter.call(element, null, arg) === element);
        }
        
        if (!selector || !element || element.nodeType !== 1) return false;
        var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                              element.oMatchesSelector || element.matchesSelector;
        if (matchesSelector) return matchesSelector.call(element, selector);
        // fall back to performing a selector:
        var match, parent = element.parentNode, temp = !parent;
        if (temp) (parent = tempParent).appendChild(element);
        match = ~qsa(parent, selector).indexOf(element);
        temp && tempParent.removeChild(element);
        return match;
    }
    
    function visible(elem){
        elem = $(elem)
        return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
    }
    
    An$.expr = { }
    
    var filters = An$.expr[':'] = {
        visible:  function(){ if (visible(this)) return this },
        hidden:   function(){ if (!visible(this)) return this },
        selected: function(){ if (this.selected) return this },
        checked:  function(){ if (this.checked) return this },
        parent:   function(){ return this.parentNode },
        first:    function(idx){ if (idx === 0) return this },
        last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
        eq:       function(idx, _, value){ if (idx === value) return this },
        has:      function(idx, _, sel){ if (qsa(this, sel).length) return this }
    }        
    
    var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*');
    var propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    };
    
    function funcArg(context, arg, idx, payload) {
        return isFunction(arg) ? arg.call(context, idx, payload) : arg
    }    
    
    extend(An$.prototype, {
        css: function (k, v) {
            if (this.length < 1) {
                return undefined;
            }

            if (typeof k == 'string') {
                var i,
                    kk = camelize(k);
                if (arguments.length > 1) {
                    // If a number was passed in, add 'px' to the (except for certain CSS properties)
                    if (isNumeric(v) && !cssNumber[kk]) {
                        v += "px";
                    }
    
                    for (i = 0; i < this.length; i++) {
                        this[i].style[kk] = v;
                    }
                    return this;
                }
                var val = win.getComputedStyle ? (win.getComputedStyle(this[0])[kk] || this[0].style[kk]) : this[0].style[kk];
                //convert "normal" to computed value
                if (val === "normal" && kk in cssNormalTransform) {
                    val = cssNormalTransform[ kk ];
                }
                return val;
            } else if (isArray(k)) {
                var props = {}, element = this[0]
                $.each(isArray(k) ? k: [k], function(_, prop){
                    var _prop = camelize(prop);
                    props[prop] = (element.style[_prop] || win.computedStyle.getPropertyValue(element)[_prop]);
                })
                return props;
            }
            
            for(var item in k) {
                this.css(item, k[item]);
            }
            
            return this;
        },
        prop: function(name, value){
            name = propMap[name] || name
                return (1 in arguments) ?
                    this.each(function(_, idx){
                        this[name] = funcArg(this, value, idx, this[name])
                }) :
            (this[0] && this[0][name]);
        },
        //add one class at a time
        addClass: function (value) {
            setClass(this, value);
            return this;
        },
        //remove one class at a time
        removeClass: function (value) {
            setClass(this, value, true);
            return this;
        },
        hasClass: function( selector ) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length,
                rclass = /[\t\r\n\f]/g;
            for ( ; i < l; i++ ) {
                if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
                    return true;
                }
            }
    
            return false;
        },
        attr: function (k, v) {
            if (typeof k !== 'string' || !this.length) {
                return null;
            }
            if (v === undefined) {
                return this[0].getAttribute(k);
            }
            this.each(function (_, e) {
                setAttr(this, k, v);
            });

            return this;
        },
        each: function (fn) {

            // Note that forEach does not set 'this' in strict mode
            var f = function (val, index) {
                fn.call(val, index, val);
            };
            forEach.call(this, f);
            return this;
        },
        get: function(index) {
            if(this.length && index < this.length) return this[index];
            return undefined;
        },
        _s: function (s, propTarget) {
            if (!this.length) {
                return undefined;
            }
            if (s === undefined) {
                return this[0][propTarget];
            }
            this.each(function (_, e) {
                this[propTarget] = s;
            });
            return this;
        },
        parent: function() {
            var parent = this[0].parentNode;
            return parent && parent.nodeType !== 11 ? $(parent) : null;
        },
        parents: function() {
            return dir(this[0], "parentNode");
        },        
        text: function (s) {
            return this._s(s, "textContent");
        },
        html: function (s) {
            return this._s(s, "innerHTML");
        },
        show: function(){
            return this.each(function() {
                this.style.display == "none" && (this.style.display = '')
                if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName)
            })
        },
        hide: function(){
            return this.css("display", "none")
        },
        wrap: function(structure){
            var func = isFunction(structure)
            if (this[0] && !func)
                var dom   = $(structure).get(0),
                    clone = dom.parentNode || this.length > 1;
            
            return this.each(function(index) {
                $(this).wrapAll(
                    func ? structure.call(this, index) :
                    clone ? dom.cloneNode(true) : dom
                );
            })
        },
        wrapAll: function(structure){
            if (this[0]) {
                this[0].parentElement.insertBefore(structure, this[0]);                
                while (structure.firstElementChild) structure = structure.firstElementChild;
                $(structure).append(this);
            }
            return this;
        },
        dimension: function (dim) {
            var offset, ele = this[0],
                d = dim[0] ? dim[0].toUpperCase() + dim.substr(1) : "",
                rect;
            
            if (ele === ele.window) {
                return ele.document.documentElement['client' + d];
            }
            if (ele.nodeType === 9) { // The element is the document element
                return Math.max(
					ele.body[ "scroll" + d ], doc[ "scroll" + d ],
					ele.body[ "offset" + d ], doc[ "offset" + d ],
					doc[ "client" + d ]
                );
            }
            var val = this.css(dim) || "";
            if(val != "auto") {
                val = splitUnits(val);
                if(!val.units || val.units == "px")
                    return val.num;
            }
            rect = ele.getBoundingClientRect();
            if (dim === "width") {
                return Math.round(rect.width);
            }
            if (dim === "height") {
                return Math.round(rect.height);
            }
        },        
        width: function(val) {
            return (val != undefined) ? this.css("width", val) : this.dimension("width");
        },
        height: function (val) {
            return (val != undefined) ? this.css("height", val) : this.dimension("height");
        },
        offset: function() {
            if (!this.length) return null;
            var obj = this[0].getBoundingClientRect();
            return {
                left: obj.left + window.pageXOffset,
                top: obj.top + window.pageYOffset,
                width: Math.round(obj.width),
                height: Math.round(obj.height)
            }
        },
        is: function(selector){
            return this.length > 0 && matches(this[0], selector);
        }        
    });


    /** Property Setting **/

    /*
     function _setIfNotNull($ele, prop, val, negOk) {

     if (val || (negOk && val === 0)) {
     var valNum = getNumber(val);
     if (negOk || valNum > 0 || val === "auto") {
     $ele.css(prop, formatUnits(val));
     }
     }
     }
     */


    /** Preload the asset **/
    function preloadAsset(type, url, comp) {
        if(!AdobeEdge.supported.addEventListener) return url;
        
        function assetLoadHandler(e) {
            comp._l[url] = null;
            if (isEmpty(comp._l)) {
                notifyObservers(comp, "assetsLoaded", {inst: e.target});
            }
        }
        
        if (comp && typeof url === 'string') {
            if (!comp._l[url]) {
                
                switch(type) {
                    case "image":
                        var img = new Image();    
                        //treat onerror the same as onload
                        img.addEventListener("error", assetLoadHandler);
                        img.addEventListener("load", assetLoadHandler);
                        img.src = url;                        
                        comp._l[url] = img;                                        
                    break;
                                                
                    case "audio":
                        var aud = new Audio();
                        aud.addEventListener("error", assetLoadHandler);
                        aud.addEventListener("canplaythrough", assetLoadHandler);
                        aud.src = url;
                        comp._l[url] = aud;                                        
                    break;
                        
                    case "video":
                        var vid = document.createElement('video');
                        vid.addEventListener("error", assetLoadHandler);
                        vid.addEventListener("canplaythrough", assetLoadHandler);
                        vid.src = url;
                        comp._l[url] = vid;                
                    break;
                }
                
            }
        }
    }

    /** Prop class - driven by configuration for additive property support **/

    function Prop(n, conf) {
        var self = extend({
            name: n,
            conf: conf,
            apply: function ($ele, val) {
                if (this.conf.a === 1) {
                    $ele.attr(this.name, val);
                } else {
                    if (this.conf.cb === 1) {
                        $ele.css("-webkit-" + this.name, val);
                        $ele.css("-ms-" + this.name, val);
                        $ele.css("-moz-" + this.name, val);
                        $ele.css("-o-" + this.name, val);
                    }
                    $ele.css(this.name, val);
                }
            },

            //formerly formatUnits from transform tween
            units: function (v) {
                var oV;
                if (v !== "auto" && this.conf.u) {
                    if (typeof v === "string") {
                        oV = splitUnits(v);
                    }
                    if (!oV || !oV.units) {
                        v = v + this.conf.u;
                    }
                }
                return v;
            },
            prep: function ($ele, oN, nm, i, j, ii, comp) {
                var val;
                if (i !== undefined && oN[nm]) {
                    if (oN[nm][i] === undefined && ii) {
                        i = ii;
                    }
                    if (j !== undefined && oN[nm][i]) {
                        val = oN[nm][i][j];
                    } else {
                        val = oN[nm][i];                        
                        if(val === undefined) val = this.conf.d;
                    }
                } else {
                    val = oN[nm];
                }

                //
                if (val !== undefined) {
                    val = this.units(val);

                    //this is a preloaded asset
                    if (this.conf.p === 1) {
                        preloadAsset(oN.type, comp._getFullURL(val), comp);
                    }

                    if (this.conf.t) {
                        val = this.conf.t.replace("@@0", val);
                    }
                }
                return val;
            },

            //comp is optional - it is only used if rendering requires loading an asset
            render: function ($ele, oN, comp) {
                var nm = this.conf.f || this.name,
                    val;
                if (oN[nm] !== undefined && (this.conf.o === undefined || this.conf.o === oN.tag) && (this.conf.e === undefined || this.conf.e !== oN.tag)) {
                    val = this.prep($ele, oN, nm, this.conf.i, this.conf.j, this.conf.ii, comp);
                    if (val !== null && val !== undefined) {
                        this.apply($ele, val, oN, comp);
                    }
                }
            }
        }, Prop.prototype);

        Prop.splitUnits = splitUnits;
        
        if (conf.x) {
            self = extend(self, conf.x);
        }
        return self;
    }

    function defineProps(oP) {
        each(oP, function (n, o) {
            props[n] = new Prop(n, o);
        });
    }

    /**
     Property definition fields:

     JSON DOM related fields:
     - f: the field name in oN.  if not provided, property name is used
     - i: if the field is stored in an array, the offset of the value in that array
     - ii: the index for i to use if val[i] === undefined
     - j: if the field is stored in a nested array, the offset of the value in the nested array
     - a: if === 1 then then set an attribute with this.name
     - o: only apply if the oN.tag == o
     - e: apply the tag except in the case that oN.tag == e
     - p: sets a preloaded asset if === 1

     Generic fields:
     - u: the default units of the property
     - t: a template used to set the property value
     **/

    defineProps({
        "opacity": {
        },
        "left": {
            f: "rect",
            i: 0,
            u: "px"
        },
        "top": {
            f: "rect",
            i: 1,
            u: "px"
        },
        "width": {
            f: "rect",
            i: 2,
            u: "px"
        },
        "height": {
            f: "rect",
            i: 3,
            u: "px"
        },
        "right": {
            f: "rect",
            i: 4,
            u: "px"
        },
        "bottom": {
            f: "rect",
            i: 5,
            u: "px"
        },
        "src": {
            o: "img",
            f: "fill",
            i: 1,
            a: 1,
            p: 1,
            x: {                
                apply: function ($ele, val, oN, comp) {
					val = comp ? comp._getFullURL(val) : val;
                    $ele.attr('src', val);
                }
            }    
        },
        "poster": {
            f: "poster",
            o: "video",
            a: 1
        },
        "preload": {
            f: "preload",
            a: 1
        },
        "medsrc": {
            e: "img",
            f: "source",
            a: 1,
            x: {                
                apply: function ($ele, val, oN, comp) {
                    var supportedURL = requestResource(oN.type, val, comp, oN.preload);
                    if(!$.isArray(val) || val.length == 1) {   
                        if(supportedURL) {
                            $ele.attr('src', supportedURL);
                        } else {
                            $ele.attr('src', $.isArray(val) ? comp._getFullURL(val[0]) : comp._getFullURL(val));
                        }
                    } else {
                        for (var iS = 0; iS < val.length; iS++) {
                            var eleSrc = document.createElement("source");
                            $(eleSrc).attr("src", comp._getFullURL(val[iS]));
                            $ele.get(0).appendChild(eleSrc);
                        }                        
                    }   
                    
                    if (oN.tag == "audio") {
                        $ele.attr("controls", oN.display == "block");
                    }
                }
            }            
        },                        
        "background-image": {
            e: "img",
            f: "fill",
            i: 1,
            t: "url(@@0)",
            p: 1,
            x: {
                prep: function ($ele, oN, nm, i, j, ii, comp) {
                    var val;
                    if (oN[nm]) {                    
                        val = oN[nm][i];                        
                    } 
    
                    if (val !== undefined) {
                        val = comp._getFullURL(val);
                        //this is a preloaded asset
                        preloadAsset(oN.type, val, comp);
                        val = this.conf.t.replace("@@0", val);
                    }
                    return val;
                }   
            }
        },
        "background-color": {
            f: "fill",
            i: 0,
            x: {
                apply : function($ele, val) {
                    $ele.css("background-color", safeColor(val));
                }
            }
        },
        "text": {
            x: {
                apply: function ($ele, val) {
                    $ele.html(val);
                }
            }
        },        
        "min-width": {
            f: "sizeRange",
            i: 0
        },
        "max-width": {
            f: "sizeRange",
            i: 1
        },
        "min-height": {
            f: "sizeRange",
            i: 2
        },
        "max-height": {
            f: "sizeRange",
            i: 3
        },
        "overflow": {
            x: {
                apply: function ($ele, val) {
                    $ele.css("overflow", val);
                    if (val === "hidden" || val === "scroll") {
                        $ele.css("text-overflow", "clip");
                    }
                }
            }
        },
        "background-repeat": {
            e: "img",
            f: "fill",
            x: {
                apply: function ($ele, val) {
                    if(!val || val.length == 1) return;
                    if ($.isArray(val[1])) return;
                    $ele.css("background-repeat", val[6] || "no-repeat" );
                }
            }
        },
        "background-attachment": {
            f: "fill",
            i: 7,
            x: {
                apply: function ($ele, val) {
                    if (val !== "scroll") {
                        $ele.css("background-attachment", val);
                    }
                }
            }
        },
        "background-size": {
            f: "fill",
            i: 4,
            d: "100% 100%"
        },
        "autoOrient": {
            x: {
                apply: function ($ele, val) {
                    AdobeEdge.$.data($ele[0], "doAutoOrient", val);
                }
            }
        },
        "clip": {
            //happens to work
        },
        "display": {
            //TBD
        },
        "border-top-left-radius": {
            f: "borderRadius",
            i: 0
        },
        "border-top-right-radius": {
            f: "borderRadius",
            i: 1,
            ii: 0
        },
        "border-bottom-right-radius": {
            f: "borderRadius",
            i: 2,
            ii: 0
        },
        "border-bottom-left-radius": {
            f: "borderRadius",
            i: 3,
            ii: 0
        },
        "border-width": {
            f: "stroke", //stroke
            i: 0,
            d: 0,
            u: "px"            
        },
        "border-color": {
            f: "stroke",
            i: 1,
            d: "rgba(0,0,0,0)"
        },
        "border-style": {
            f: "stroke",
            i: 2,
            d: "none"
        },
        "cursor": {
            f: "cursor"
        },
        "transform-origin": {
            cb: 1,
            f: "transform",
            i: 4,
            x: {
                prep: function ($ele, oN, nm, i, j, ii) {
                    if (oN.transform && oN.transform[4] != undefined) {
                        if(oN.transform[4].length == 1) {
                            return oN.transform[4][0] + " " + "50%";
                        }
                        return oN.transform[4][0] + " " + oN.transform[4][1];
                    } 
                }
            }
        },
        "font-family": {
            f: "font",
            i: 0
        },
        "font-size": {
            f: "font",
            i: 1,
            u: "px",
            x: {
                prep: function ($ele, oN, nm, i, j, ii, comp) {
                    if(oN.type != 'text') return;
                    var i = this.conf.i, j = 0, f = this.conf.f, val = oN[f][i][j], unit = oN[f][i][j + 1];
                    if (!unit || unit == "") unit = this.conf.u;
                    return val + unit;
                }
            }
        },
        "font-weight": {
            f: "font",
            i: 3
        },
        "letter-spacing": {
            f: "textStyle",
            i: 0
        },
        "word-spacing": {
            f: "textStyle",
            i: 1
        },
        "line-height": {
            f: "textStyle",
            i: 2
        },
        "text-indent": {
            f: "textStyle",
            i: 3
        },
        //?? color tween should maybe define this?
        "color": {
            f: "font",
            i: 2,
            x: {
                apply : function($ele, val) {
                    $ele.css("color", safeColor(val));
                }
            }			
        },
        "text-decoration": {
            f: "font",
            i: 4
        },
        "font-style": {
            f: "font",
            i: 5
        },
        "word-wrap": {
            f: "font",
            i: 6
        },
        "text-align": {
            f: "align"
        },
        "white-space": {
            f: "rect",
            x: {
                prep: function($ele, val) {
                    if(val.font) { if(val.font.length > 7) return val.font[7]; else return val.rect; }
                },
                apply: function ($ele, val) {
                    if($.isArray(val)) {
                        if ((!val[2] || val[2] <= 0 || val[2] == "auto") && (!val[3] || val[3] <= 0 || val[3] == "auto")) {
                            $ele.css("white-space", "nowrap");
                            $ele.css("wordWrap", "break-word");
                        }
                    } else {
                        $ele.css("white-space", val);
						if(val == "nowrap") $ele.css("wordWrap", "break-word");
                    }
                }
            }
        },
		//PROPERTIES
		 "volume": {
            f: "volume",
            x: {
                apply: function ($ele, val) {
                    $ele.get(0).volume = val;
                }
            }
        },
        //ATTRIBUTES
        "className": {
            f: "uc",
            x: {
                apply: function ($ele, val) {
                    $ele.addClass(val);
                }
            }
        },
        "controls": {
            a: 1
        },
        "alt": {
            a: 1
        },
        "title": {
            //f: "tt",
            a: 1
        },
        "tabindex": {
            //f: "ti",
            a: 1
        },
        "autoplay": {
            a: 1
        },
        "loop": {
            a: 1
        },
        "linkURL": {
            f: "linkURL",
            a: 1,
            x: {
                prep: function($ele, oN) {
                    htLookup[$ele[0].id] = oN;
                    $ele[0].onclick=function() {
                        var oNE = htLookup[this.id];
                        if(oNE.linkTarget) {
                            window.open(oNE.linkURL, oNE.linkTarget);
                        }
                        else {
                            window.location.href=oNE.linkURL;
                        }
                    };
                    $ele[0].style.cursor = "pointer";                
                }
            }
        }
    });

    var shortLongNameMap = {
      "c":"children",
      "r":"rect",
      "zr":"sizeRange", 
      "br": "borderRadius", 
      "cl":"clip", 
      "al":"alt", 
      "tt":"title", 
      "ti":"tabindex",
      "cn":"controls",
      "sr":"source",
      "ps":"poster",
      "pr":"preload", 
      "cu":"cursor",
      "ap":"autoplay", 
      "lp":"loop", 
      "n":"font",
      "tf":"transform", 
      "sh":"boxShadow", 
      "ts":"textStyle",
      "o":"opacity",
      "uc":"userClass",
      "s":"stroke",
      "f":"fill",
      "v":"display",
      "fi":"filter", 
      "sN":"symbolName",
      "tr":"trigger"
    };

    function renderEle(comp, sym, oN, style, parent, cls, zInd, disableDOMEvents) {

        var tag = oN.tag || "div", 
            $ele = $(document.createElement(tag)),
            ele = $ele[0],
            comp;

        //stash the dom definition on the element
        AdobeEdge.$.data(ele, "domDef", oN);
        $ele.attr("id", oN.id);

        $ele.css("position", "absolute");
        //Force zero margin
        $ele.css("margin", "0px");
        
        //Apply the base styles
        if(sym && oN.symbolName) {
            sym._applyBaseStyles($ele, oN.symbolName);
        }
                
        each(props, function (_, prop) {
            prop.render($ele, oN, comp);
        });

        // Prevent highlighting in Webkit mobile - Taken from R1
        $ele.css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");

        if (sym) {
            var parentId = sym.ele ? sym.ele.id : "";
            sym.register(ele, oN, parentId);
        }

        //Add the class name similar to R1
        $ele.addClass($ele.attr("id") + "_id");

        if(!disableDOMEvents) notifyObservers(AdobeEdge, 'beginEle', { sym: sym, ele: ele, defn: {dom: oN, style: style}});
        
        if (cls) {
            $ele.addClass(cls);
        }

        var statEle = document.getElementById(ele.id);        
        if(statEle) {
            var $parent = $(statEle).parent();
            if($parent && $parent[0] == parent) {
                parent.removeChild(statEle);
            } 
        }
        
        if (parent.children && zInd >= 0 && zInd < parent.children.length) {
            parent.insertBefore(ele, parent.children[zInd]);
        } else {
            parent.appendChild(ele);
        }

        AdobeEdge.$.data(ele, "originalId", oN.id);
        AdobeEdge.$.data(ele, "symParent", sym);
        
        if(sym) {
            var wkt = ele.style.webkitTransform;
            if (sym.gpuAccelerate && ele.style && (typeof(wkt) === "undefined" || wkt === "" || wkt === "none")) {
                if (!window.edge_authoring_mode || ele.nodeName !== "BODY") {
                    ele.style.webkitTransform = "translateZ(0)";
                }
            } else if (!ele.style.zIndex && window.edge_authoring_mode) {
                ele.style.zIndex = 0;
            }
        }
        
        if (sym) {
            if(!disableDOMEvents) notifyObservers(sym, 'newEle', { ele: ele, defn: oN });
        }
        
        return $ele;
    }

  function normalizeDomNode(oN) {       
        if (oN.t) {
            oN.t = oN.t.toLowerCase();
            oN.type = oN.t;
        }
        
        if (oN.cs) {
            oN.className = oN.cs;
        }
                
        for (var shorty in shortLongNameMap) {        
            if (oN[shorty] != null) {
                oN[ shortLongNameMap[shorty]]= oN[shorty];
                oN[shorty] = null;
            }
        }
        
        if (!oN.rect) { oN.rect = []; }
        while (oN.rect.length < 4) {
            oN.rect[oN.rect.length] = 0;
        }
        
        if (oN.transform) {
            //[x,y,z],[rx,ry,rz],[skewX,skewY],[scaleX,scaleY,scaleZ]
            if (oN.transform.length < 1) {
                oN.transform[0] = [0,0,0];
            }
            if (oN.transform.length < 2) {
                oN.transform[1] = [0,0,0];
            }
            if (oN.transform.length < 3) {
                oN.transform[2] = [0,0,0];
            }
            if (oN.transform.length < 4) {
                oN.transform[3] = [1,1,1];
            }
        }
        
        if(oN.children) {
            oN.c = oN.children; //Authoring needs .c also
            each(oN.children, function (_, oN) {
                normalizeDomNode(oN);
            });
        }
    };

    function renderDOM(comp, sym, dom, style, stg, cls, zInd) {
        if (!stg && !sym && !sym.id) return;
        
        stg = stg || $("." + sym.id)[0];

        each(dom, function (_, oN) {
                               
            var ele = renderEle(comp, sym, oN, style, stg, cls, zInd++),
                data = { sym: sym, ele: ele[0], defn: oN };

            if (oN.c) {
                renderDOM(comp, sym, oN.c, undefined, ele[0], cls, 0);
            }
            notifyObservers(AdobeEdge, 'endEle', data);
        });
    }

    /* Stub for Symbol */
    function Symbol(oS, nm, comp, parent, variables) {
        Notifier.call(this);
        comp._s.push(this);

        extend(this, {
            name: nm,
            composition: comp,
            data: oS,
            prnt: parent,
            tl: [],
            variables: variables || {}
        });
                
        notifyObservers(comp, 'newSymbol', {symbol: this, parent: parent});
        return this;
    }

    extend(Symbol.prototype, Notifier.prototype);
    extend(Symbol.prototype, {
        init: function (stg, cls) {
            var s = this.data[this.name];
            if (s) {
                renderDOM(this.composition, this, s.content.dom, s.content.style, stg, cls);
            }
        },
        register: function (ele, obj) { // noop overridden in Symbol
        },
        play: function (ms) { // noop overridden in Symbol
        }
    });

    /** Composition **/

    function getComposition(compId) {
        return comps[compId];
    }
    
    function playAuto(sym, playNested) {
        
        if(playNested && sym.ci) {
            for(var i=0; i<sym.ci.length; ++i) {
                var inst = sym.ci[i];
                if(inst) playAuto(inst, playNested);
            }
        }
        
        var state = sym._getTimeline() ? sym._getTimeline().getState() : {'playing': undefined};
        
        if (sym.autoPlay == undefined || sym.autoPlay) {
            if(state.playing == undefined) {
                sym.play(0);
            }
        } else {
            if(state.playing == undefined) {
                sym.stop(-1, false);    //Make sure that base state is applied
            }
        }
     
    }

   function registerSymbols(comp, symbolData) {

      var symbolName, tlName, i, tw;
      for (symbolName in symbolData) {
          if (symbolData.hasOwnProperty(symbolName)) {
              var oD = symbolData[symbolName];
              oD.typeName = symbolName;
              /*jshint eqeqeq:false */
              /*jshint eqnull:true */

              //patch short names...
              if (oD.v) {
                  oD.version = oD.v;
              }
              if (oD.mv) {
                  oD.minimumCompatibleVersion = oD.mv;
              }
              if (oD.b) {
                  oD.build = oD.b;
              }
              if (oD.bS) {
                  oD.baseState = oD.bS;
              }
              if (oD.iS) {
                  oD.initialState = oD.iS;
              }
              if (oD.gpu != null) {
                  oD.gpuAccelerate = oD.gpu;
              }
              if (oD.rI != null) {
                  oD.resizeInstances = oD.rI;
              }
              if (oD.cn) {
                  oD.content = oD.cn;
              }
              if (oD.content) {
                  var oDC = oD.content;
                  if (oDC.sI != null) {
                      oDC.symbolInstances = oD.content.sI;
                  }
                  if (oDC.symbolInstances) {
                      for (var iS = 0; iS < oDC.symbolInstances.length; iS++) {
                          var oSI = oDC.symbolInstances[iS];
                          if (oSI.sN != null) {
                              oSI.symbolName = oSI.sN;
                          }
                          if (oSI.a != null) {
                              oSI.autoPlay = oSI.a;
                          }
                          if (oSI.x != null) {
                              oSI.variables = oSI.x;
                          }
                      }
                  }
              }

              each(oD.content.dom, function (_, oN) {
                  normalizeDomNode(oN);                        
              });

              var sElem;
              for ( sElem in oD.content.style) {
                if(oD.content.style.hasOwnProperty(sElem))
                  normalizeDomNode(oD.content.style[sElem]);
              }

              if (oD.cg) {
                  oD.centerStage = oD.cg;
              }
              if (oD.stf) {
                  oD.scaleToFit = oD.stf;
              }
              if (oD.x) {
                  oD.variables = oD.x;
              }
              if (oD.tt) {
                  oD.timeline = oD.tt;
              }
             
              var oTL = oD.timeline;

              if(oTL != null)
              {
             
                      if (oTL.d != null) {
                          oTL.duration = oTL.d;
                      }
                      if (oTL.a != null) {
                          oTL.autoPlay = oTL.a;
                      }
                      if (oTL.l) {
                          oTL.labels = oTL.l;
                      }

                      for (var i = 0; i < oTL.data.length; i++) {
                          if(oTL.data[i] && oTL.data[i][8] && oTL.data[i][8].vt)
                          {
                            oTL.data[i][8].valueTemplate = oTL.data[i][8].vt;
                          }

                          if(oTL.data[i] && oTL.data[i][1] && oTL.data[i][1]==="tr")
                          {
                            oTL.data[i][1]=shortLongNameMap["tr"];
                          }
                      }


              }
          }
      }


      comp.sym = symbolData;
    };
    
    function Composition(compId, opts) {
        Notifier.call(this);

        this.$ = $;
    
        extend(this, {
            id: compId,

            opts: extend(opts || {}, defaultOptions),
            
            _urlRegExp: new RegExp('^(?:[a-z]+:)?//', 'i'),

            _l: {},//hashtable of uris in the process of loading

            _s: [],//array of symbol instances

            loaded: function (uri, result, key) {
                //at this time the comp JS has been loaded, but we still need to exhaust the composition's loading queue...
                this._l[uri] = null;
                
                if (isEmpty(this._l)) {
                    this.ready();
                }
            },

            load: function (uri, cbk) {
                if(!cbk) this._l[uri] = true;
                var me=this;
                yepnope({load: this._getFullURL(uri), callback: function(ri, result, key){ cbk ? cbk(uri,result,key) : me.loaded(uri,result,key);}});
            },

            define: function (opts, symbols, fonts, scripts, resources, effects) {
                //console.log("define comp with id = " + this.id);
                registerSymbols(this,symbols);
                this.fnt = fonts;
                this.res = resources;
                this.fx = effects;
                mapToTranslate(symbols);
                this.registerFonts(fonts);
                
                var self = this;
                if(scripts && scripts.length > 0) {
                    scripts.forEach(function(s) {
                        self.load(s);
                    });
                }
            },
            
            _getFullURL: function(url) {
                if(this._urlRegExp.test(url)) return url;
                return (this.opts.htmlRoot || "") + url;
            },

			definePreloader: function(preloaderDOM) {
				this.preloaderDOM = preloaderDOM;
			},
			
			defineDownLevelStage: function(downLevelStageDOM) {
				this.downLevelStageDOM = downLevelStageDOM;
			},

            getStage: function () {
                return this.stage;
            },

            registerFonts: function(fonts) {
                if (!fonts) {
                    return;
                }
                var iTKPos,
                    iTKEnd,
                    eleTK,
                    fnTypeKitInit,
                    bFontExists,
                    bEWF,
                    fontName,
                    sInclude,
                    sExistingFont,
                    iScriptStart,
                    iScriptEnd,
                    sScript,
                    sTKURL;
        
                an.fonts = an.fonts || {};
        
                for (fontName in fonts) {
                    if (fonts.hasOwnProperty(fontName)) {
                        if (!an.fonts[fontName]) {
        
                            sInclude = fonts[fontName];
        
                            if (sInclude && sInclude !== "") {
        
                                //see if an.fonts already has this include... if so we don't need to instantiate it again...
                                bFontExists = false;
                                for (sExistingFont in an.fonts) {
                                    if (an.fonts.hasOwnProperty(sExistingFont)) {
                                        if (an.fonts[sExistingFont] === sInclude) {
                                            bFontExists = true;
                                        }
                                    }
                                }
        
                                if (!bFontExists) {
                                    an.fonts[fontName] = sInclude;
        
                                    /*
                                     <script type="text/javascript" src="//use.typekit.com/pza4jbg.js"></script>
                                     <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
                                     */
                                    iTKPos = sInclude.indexOf("//use.typekit.com/");
                                    if (iTKPos < 0) {
                                        iTKPos = sInclude.indexOf("//use.typekit.net/");
                                    }
                                    if (iTKPos < 0) {
                                        iTKPos = sInclude.indexOf("//use.edgefonts.net/");
                                        bEWF = (iTKPos > 0);
                                        window._adobewebfontsappname_ = "Animate";
                                    }
        
                                    if (iTKPos > 0) {
        
                                        iTKEnd = sInclude.indexOf("\"", iTKPos + 1);
                                        if (iTKEnd > 0) {
                                            sTKURL = sInclude.substring(iTKPos, iTKEnd);
        
                                            if (bEWF && window.location.protocol === 'file:') {
                                                sTKURL = "http:" + sTKURL;
                                            }
        
                                            eleTK = document.createElement("script");
                                            eleTK.src = this._getFullURL(sTKURL);
                                            eleTK.type = "text/javascript";
                                            document.getElementsByTagName("head")[0].appendChild(eleTK);
                                            if (!bEWF) {
        
                                                fnTypeKitInit = function () {
                                                    try {
                                                        window.Typekit.load();
                                                    } catch (e) {
                                                        window.setTimeout(fnTypeKitInit, 100);
                                                    }
                                                };
                                                window.setTimeout(fnTypeKitInit, 100);
                                            }
                                        }
                                    } else if ((sInclude.indexOf("<script") < 0) && (sInclude.indexOf("<link") < 0)) {
                                        $('head').append(document.createTextNode(sInclude));
                                    } else if (sInclude.indexOf("<script") < 0) {
                                        //for non-script includes - we can just append to the head
                                        $('head').append(sInclude);
                                    } else {
                                        //we can try to eval their script...
                                        iScriptStart = sInclude.indexOf(">");
                                        iScriptEnd = sInclude.indexOf("</script>");
        
                                        if (iScriptStart > 0 && iScriptEnd > 0) {
                                            sScript = sInclude.substring(iScriptStart + 1, iScriptEnd);
                                            try {
                                                window.eval(sScript);
                                            } catch (exFnt) {
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            
            getSymbols: function (symbolName) {
                if(!symbolName) return this._s;
                
                var aRet = [];
                each(this._s, function (i, inst) {
                    if (inst.name === symbolName) {
                        aRet.push(inst);
                    }
                });
                return aRet;
            },

            //0 - render:calibrate
            rC: function (ms) {
                //extended in an.prop.js to traverse symbols to figure out if any triggers want to resync this time
                return ms;
            },
            //1 - render:prepare (rP)

            //TBD: add render prepare

            //2 - render:render
            rR: function (ms) {
                //execute timeline rendering
                if(this.stage) tick(this.stage, ms);
            },
            //3 - render:apply (rA)

            //TBD: finalize the update ???


            ready: function () {
                var self = this;
                AdobeEdge.ready(function () {
                    if (win.AdobeEdge && win.AdobeEdge.bootstrapLoading) {
                        opts = opts || {};
                        opts.bootstrapLoading = true;
                    }

			        //TODO - make sure that we redefine this only if jQuery is loaded from the edge composition. 
					//Enabling a basic flow right now for testing and feedback on the upgrade workflow
            		if (!window.edge_authoring_mode) {                        
                        if (opts && opts.framework$) {
                            an.$ = opts.framework$;
                        } if(window.jQuery) {
                            an.$ = window.jQuery;
                        }
                    }
                    
                    AdobeEdge.addTouchSupport();
                    
                    if(self.bindingFn) self.bindingFn(an.$);
                                        
                    //dismiss the preloader
                    var s = self.stage = new Symbol(self.sym, 'stage', self),
                        fnLaunch;

                    var className = "." + self.id;
                    var $stg = $(className);
                    if(!$stg[0]) $stg = $("body").addClass(className);                    
                    s.init($stg[0], "edgeLoad-" + self.id);
                    s._applyBaseStyles($stg, 'stage');                    
                    $stg.css("position", "relative");
                    
                    if (!window.edge_authoring_mode || opts.sym) {
                        var stageData = s.data.stage;
                        
                        if (stageData && (stageData.scaleToFit === 'height' || stageData.scaleToFit === 'width' || stageData.scaleToFit === 'both')) {
                            wrapForStageScaling($(className));
                        }
                        if (stageData && (stageData.centerStage === 'vertical' || stageData.centerStage === 'horizontal' || stageData.centerStage === 'both')) {
                            centerTheStage(s.ele, stageData.centerStage);
                        }                                                
                        if (stageData.scaleToFit === 'height' || stageData.scaleToFit === 'width' || stageData.scaleToFit === 'both') {
							var baseStateForStage = stageData.content.style['${Stage}'],
								minWidth, maxWidth, rePx = /px|^0$/;
							if (baseStateForStage && baseStateForStage.sizeRange) {
								minWidth = baseStateForStage.sizeRange[0];
								minWidth = rePx.test(minWidth) ? parseInt(minWidth, 10) : undefined;
								maxWidth = baseStateForStage.sizeRange[1];
								maxWidth = rePx.test(maxWidth) ? parseInt(maxWidth, 10) : undefined;
							}
                            bindStageScaling(s.$('Stage'), stageData.scaleToFit, minWidth, maxWidth, true, self.opts.bScaleToParent);
                        }
                    }

                    //preload fonts & images then launch

                    fnLaunch = function () {
                        if (self.launchCalled || (self.opts.bootstrapLoading && !an.doPlayWhenReady)) {
                            an.readyAndWaiting.push(fnLaunch);
                            return;
                        }
                        self.launchCalled = true;
                        $(".edgePreload-" + self.id).css("display", "none");
						//Keep the behavior same as R1
                        $(".edgeLoad-" + self.id).removeClass("edgeLoad-" + self.id);

                        aBootcompsLoaded.push(self.id);
                        var len = window.AdobeEdge.bootstrapListeners.length;
                        for (var i = 0; i < len; i++) {
                            try {
                                window.AdobeEdge.bootstrapListeners[i](self.id);
                            }
                            catch(e) {
                                console.log("bootstrap error " + e);
                            }
                        }
                        
                        var evt = $.Event("compositionReady");
                        evt.compId = self.id;

                        $(document).trigger(evt);
                        
                        self.readyCalled = true;

                        if(!window.edge_authoring_mode) {
                            playAuto(s, true);
                        } else {
                            s.stopAll(0);
                        }
                    };

                    if (isEmpty(self._l)) {
                        //nothing else to load, we can go ahead and launch
                        fnLaunch();
                    } else {
                        //wait for the assets to load then then launch
                        self.addObserver({ "assetsLoaded": function (e, data) {
                            fnLaunch();
                        }});
                    }
                });
            },
            getCompId: function () {
                return this.id;
            }
        });
        return this;
    }

    extend(Composition.prototype, Notifier.prototype);
    Composition._playAuto = playAuto;

    //the first phase of comp rendering is special, so it can't use renderU
    function renderCalibrate(msElapsed) {
        each(comps, function (_, comp) {
            msElapsed = Math.min(comp.rC(msElapsed), msElapsed);
        });
        return msElapsed;
    }

    //comp rendering phase utility
    function renderU(msElapsed, fn) {
        each(comps, function (_, comp) {
            var f = comp[fn];
            if (f) {
                f.call(comp, msElapsed);
            }
        });
    }
    
    function tick(sym, ms) {
    
        if(sym.ci) {
            for(var i=0; i<sym.ci.length; ++i) {
                var inst = sym.ci[i];
                if(inst) tick(inst, ms);
            }
        }

        if(sym) sym._getTimeline().tick(ms);
    }

    function startClock() {

        //tick at roughly 60fps
        var t = 17,
            requestAnimationFrame;

        if (!fnTimer) {
            requestAnimationFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame ||
                win.mozRequestAnimationFrame || win.msRequestAnimationFrame || win.oRequestAnimationFrame ||
                function (cb) {
                    win.setTimeout(cb, t);
                };

            fnTimer = function () {

                var msElapsed = 0;//TBD

                //Phase 0 - calibrate: compositions have a chance to wind-back time here in case we missed a trigger or other important time-sync event
                msElapsed = renderCalibrate(msElapsed);

                //Phase 1 - prepare: compositions all have a chance to setup rendering
                renderU(msElapsed, "rP");

                //checkpoint - we may have decided to cancel rendering by now, that can be done per-composition

                //Phase 2 - render: compositions render each property
                renderU(msElapsed, "rR");

                //Phase 3 - apply: compositions apply net property changes
                renderU(msElapsed, "rA");

                //console.log(".");

                requestAnimationFrame.call(win, fnTimer);
            };
            requestAnimationFrame.call(win, fnTimer);
        }
    }

    startClock();

    function documentReady(fn) {
        if (docIsReady || doc.readyState === "complete") {
            //win.setTimeout(fn, 0);
            fn();
        } 
        else if (doc.addEventListener) {

            var fired=false;
            // Use the handy event callback
            doc.addEventListener("DOMContentLoaded", function (e) {
                docIsReady = true;
                if(!fired)
                { 
                  fn();
                  fired=true;
                }
            }, false);

            doc.onreadystatechange = function () {
            if(document.readyState == "complete") 
                docIsReady = true;
                doc.onreadystatechange=null;
                if(!fired)
                { 
                  fn();
                  fired=true;
                }
          }
        } else if (doc.attachEvent) {
            doc.attachEvent("onreadystatechange", function (e) {
                docIsReady = true;
                fn(e);
            });
        }
    }
    
    function registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts) {
        var comp = comps[compId];
        comp.define(opts, symbols, fonts, scripts, resources);
    }
    
    function isPx(val) {
        if (val && typeof(val) === "string" && (val.indexOf("%") > 0 || val.indexOf("em") > 0 || val === "auto" || val === "null")) {
            return false;
        }
        return true;
    }    
    
    function getPxValue(sPxVal) {
            
        if (!sPxVal) {
            return 0;
        }
        
        if (typeof(sPxVal) === "number") {
            return sPxVal;
        }
        
        var pos = sPxVal.indexOf("px").
            val;
        if (pos > 0) {
            val = sPxVal.substring(0, pos);
            return parseFloat(val);
        }
        return parseFloat(sPxVal);
    }  
    
    function mapSymToTranslate (sym) {
        var sStateName,
            oState,
            sActorName,
            aKeyframes,
            aNewKeyframes,
            i,
            sNewPropName,
            aKF,
            sTimelineName,
            oTimeline,
            aTimeline,
            oTween,
            htLeft = {},
            htTop = {},
            bHasLeft,
            bHasTop,
            bHasTxfm,
            htManagedIDs = {},
            htHasPxAni = {};


        //timelines
        if (sym.timeline) {
            aTimeline = sym.timeline;
            for (i = 0; i < aTimeline.data.length; i++) {
                oTween = aTimeline.data[i];
                if (!oTween || (oTween[1] != "left" && oTween[1] != "top") || !isPx(oTween[7])) {
                    continue;
                }
                htHasPxAni[oTween[5]] = true;
            }
        }

        if (sym.content && sym.content.dom) {
            mapContentToTranslate(sym.content.dom, htManagedIDs, htHasPxAni, htLeft, htTop);
        }

        //timelines
        if (sym.timeline) {
            aTimeline = sym.timeline
            for (i = 0; i < aTimeline.data.length; i++) {
                oTween = aTimeline.data[i];
                if (!oTween || (oTween[1] != "left" && oTween[1] != "top") || !isPx(oTween[7])) {
                    continue;
                }
                if (!htManagedIDs[oTween[5]]) {
                    continue;
                }

                if (oTween[1] === "left") {
                    sNewPropName = "translateX";
                }
                else if (oTween[1] === "top") {
                    sNewPropName = "translateY";
                }

                oTween[1] = sNewPropName;
            }
        }
    }
    
    function mapContentToTranslate(aDom, htManagedIDs, htHasPxAni, htLeft, htTop) {
        var i,
            oN,
            sId;

        for (i = 0; i < aDom.length; i++) {
            oN = aDom[i];
            sId = "${" + oN.id + "}";

            if (htHasPxAni[sId]) {

                htManagedIDs[sId] = true;

                if (!oN.rect) {
                    oN.rect = oN.r;
                    oN.r = undefined;
                    if (!oN.rect) {
                        oN.rect = [0, 0, 0, 0];
                    }
                }

                if (oN.rect) {

                    if (!oN.transform) {
                        oN.transform = oN.tf;
                        oN.tf = undefined;
                        if (!oN.transform) {
                            oN.transform = [];
                        }
                    }
                    if (!oN.transform[0]) {
                        oN.transform[0] = [0, 0];
                    }

                    if (isPx(oN.rect[0])) {
                        oN.transform[0][0] = getPxValue(oN.rect[0]);
                        htLeft[sId] = oN.transform[0][0];
                        oN.rect[0] = "0px";
                    }

                    if (isPx(oN.rect[1])) {
                        oN.transform[0][1] = getPxValue(oN.rect[1]);
                        htTop[sId] = oN.transform[0][1];
                        oN.rect[1] = "0px";
                    }
                }
            }

            if (oN.children) {
                mapContentToTranslate(oN.children, htManagedIDs, htHasPxAni, htLeft, htTop);
            }
            else if (oN.c) {
                mapContentToTranslate(oN.c, htManagedIDs, htHasPxAni, htLeft, htTop);
            }
        }
    }
    
    function mapToTranslate(symbolData) {
        var sym;
        if (!window.edge_authoring_mode) {
            for (var symName in symbolData) {
                if (symbolData.hasOwnProperty(symName)) {
                    mapSymToTranslate(symbolData[symName]);
                }
            }
        }
    }
    
    function registerEventBinding(compId, bindingFn) {
        comps[compId].bindingFn = bindingFn;        
    }

    //TBD: remove loadComp (or loadComposition depending on which way we lean)
    function loadComposition(projectPrefix, compId, opts, preloaderDOM, downLevelStageDOM) {
	
		function preprocessStageInfo(stg, stageInfo) {
			var rePx = /px|^0$/;
			var plSTF	 = stageInfo.scaleToFit,
				ctrPlS 	 = stageInfo.centerStage,
				minPlW 	 = stageInfo.minW,
				maxPlW 	 = stageInfo.maxW,
				plWidth  = stageInfo.width,
				plHeight = stageInfo.height;
			
			var oS = stg || document.getElementsByTagName('body')[0];
			
			if (oS.style.position != 'absolute' && oS.style.position != 'relative') {
				oS.style.position = 'relative';
			}
			if (plHeight) {
				oS.style.height = plHeight;
			}
			if (plWidth) {
				oS.style.width = plWidth;
			}
			// preloadScaleToFit flag is written out as plSTF
			if (/^height$|^width$|^both$/.test(plSTF)) {
				minPlW = rePx.test(minPlW) ? parseInt(minPlW, 10) : undefined;
				maxPlW = rePx.test(maxPlW) ? parseInt(maxPlW, 10) : undefined;
				bindStageScaling($(oS), plSTF, minPlW, maxPlW, false, opts.bScaleToParent);
			}
			// centerPreloaderStage flag is written out as ctrPlS
			if (/^vertical$|^horizontal$|^both$/.test(ctrPlS)) {
				centerTheStage(oS, ctrPlS);
			}
		}
		
        function processContent(content, prefix) {
			documentReady(function() {
				var $stg = $("." + compId);
				
				preprocessStageInfo($stg[0], opts);

                if (content) {
					renderDOM(comps[compId], null, content.dom, content.style, $stg[0], prefix + compId);
				}
				//show the content
				$stg.removeClass("edgeLoad-" + compId);
			});            
        }
        
		function processPreloader() {
            processContent(comp.preloaderDOM, "edgePreload-");
		}

        function processDownLevelStage() {
            processContent(comp.downLevelStageDOM, "edgeDownLevel-");
		}
	
        var comp = comps[compId] = AdobeEdge.compositions[compId] = new Composition(compId, opts);
        notifyObservers(AdobeEdge, 'newComp', {comp: comp});
        //check to see if this is a downlevel browser
        if (hasTransform) {

            if(!window.edge_authoring_mode) {
                if(!preloaderDOM) {
                    comp.load(projectPrefix + "_edgePreload.js", processPreloader);
                } else {
                    comp.definePreloader(preloaderDOM);
                    processPreloader();
                }
            }

            if (projectPrefix) {
                if (opts && opts.bootstrapLoading) {
                    //load when loadResources is called...
                    payloadsToLoad.push(projectPrefix);
                } else {
                    //should this be a "payload" file???"
                    if(window.edge_authoring_mode && opts.sym) {
						//request the resource with the symbol query parameter - required for library preview
                        //TODO - get rid of this from the runtime code
                        comp.load(projectPrefix + "_edge.js?symbol="+opts.sym)                        
                    } else {
                        comp.load(projectPrefix + "_edge.js");
                    }
                }
            }

        } else {
            //load the downlevel stage
            if(!window.edge_authoring_mode) {
                if(!downLevelStageDOM) {
                    comp.load(projectPrefix + "_edgePreload.js", processDownLevelStage);
                } else {
                    comp.defineDownLevelStage(downLevelStageDOM);
                    processDownLevelStage();
                }
            }
        }
    }


    function registerFonts(fonts) {
        AdobeEdge.getCurrentComposition().registerFonts(fonts);
    }
    
    function playWhenReady() {
        an.doPlayWhenReady = true;
        for (var i = 0; i < an.readyAndWaiting.length; i++) {
            an.readyAndWaiting[i]();
        }        
    }

    supported.cssTransform = isSupported( ['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'] );
    // Use our own detection instead of Modernizr.csstransforms3d
    supported.cssTransform3d = isSupported( ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'] );
    supported.audio = supportedAudio();
    supported.video = supportedVideo();
    supported.customEvent = isCustomEventSupported();
    supported.addEventListener = window.addEventListener !== undefined;    
    supported.rgba = supportsRGBA();

    extend(an, {
        version: "5.0.0",
        Composition: Composition,
        defaultOpt: defaultOptions,

        $: $,
        An$: An$,
        renderDOM: renderDOM,

        ready: documentReady,

        camelize: camelize,
        splitUnits: splitUnits,

        loadComposition: loadComposition,
        registerCompositionDefn: registerCompositionDefn,
        registerEventBinding: registerEventBinding,

        getComposition: getComposition,
        defineProps: defineProps,
        props: props,
        Symbol: Symbol,
        Notifier: Notifier,
        isSupported: isSupported,
        supported: supported,
        isIOS: isiOS(),
        isOpera: isOpera(),
        registerFonts: registerFonts,
        playWhenReady: playWhenReady,
        
        _: {
            c: comps, //all comps
            P: Prop, // the Prop class
            p: props, //all the props

            rE: renderEle,
            nO: notifyObservers,
            nDN: normalizeDomNode
        }

    });
    extend(an, Notifier.prototype);
    Notifier.call(an);
    
})(window.AdobeEdge);

if(!window.AdobeEdge.bootstrapListeners) {
    window.AdobeEdge.bootstrapListeners=[];
}
window.AdobeEdge.bootstrapCallback=function(fnCallback) {
    window.AdobeEdge.bootstrapListeners.push(fnCallback);
    if(aBootcompsLoaded.length > 0) {
        for(var i=0;i<aBootcompsLoaded.length;i++) {
            fnCallback(aBootcompsLoaded[i]);
        }
    }
};    

if(!window.AdobeEdge.compositions) {
    window.AdobeEdge.compositions=[];
}

window.AdobeEdge.yepnope = window.yepnope;// an.timeline.js - version  2.0
//
// Copyright (c) 2010. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
/*global window: false, document: false, CustomEvent: false, HTMLElement: false, console:false, alert: false, Object: false, undefined: false */

(function (Edge) {


    // Note: all functions or vars prefixed by '_' are to be considered to be non-public and should be only accessed
    // by the defining 'class' and its derived 'classes'.

    "use strict";

    var $ = Edge.$,
        tweenFactories = {},
        tweenTypes = {},   // map properties to tween types - each type must register theirs
        tweenDefaultType = "style", // use this if property name isn't found
        timelineDefaultConfig = {
            dropFrames: true,
            fps: 60, // milliseconds
            pauseThreshold: 250
        },
        tweenDefaultConfig = {
            duration: 500 // milliseconds
        },
        triggerPattern = /^(trigger|@)$/;

//////////////////////////////////////////////////////////////////////
//
// Animation
//
//////////////////////////////////////////////////////////////////////

    $.isArray = function (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    };

    $.easing = $.easing || {};

    $.extend($.easing, {
        linear: function (p, n, firstNum, diff) {
            return firstNum + diff * p;
        },
        swing: function (p, n, firstNum, diff) {
            return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
        }
    });


    function Animation() {
        Edge.Notifier.call(this);
        this.animationID = "animID-" + Animation.nextID;
        Animation.nextID += 1;
    }

    Animation.nextID = 1;

    $.extend(Animation.prototype, Edge.Notifier.prototype);
    $.extend(Animation.prototype, {
        constructor: Animation,

        setup: function () {
        },
        update: function (elapsed, easingConst) {
        },
        getDuration: function () {
            return 0;
        }
    });

//////////////////////////////////////////////////////////////////////
//
// Trigger
//
//////////////////////////////////////////////////////////////////////


    function Trigger(handler, data, handlerContext) {
        Edge.Animation.call(this);
        if (typeof handler === 'function') {
            this.handler = handler;
        } else if (typeof handler === 'string') {
            this.eventType = handler;
        }
        this.handlerContext = handlerContext;
        this.data = data;
        this.isTrigger = true;
    }

    $.extend(Trigger.prototype, Animation.prototype);
    $.extend(Trigger.prototype, {
        constructor: Trigger,

        update: function (elapsed) {
            if (!this.fired) {
                this.fired = true;
                if (this.handler) {
                    this.handler.call(this.handlerContext, elapsed, this.data);
                } else if (this.eventType && this.timeline) {
                    this.timeline.notifyObservers(this.eventType, { elapsed: elapsed, data: this.data });
                }
            }
        },
        setup: function (timeline, position) {
            var useAutoForExecuteTriggers = timeline.executeTriggers === undefined || timeline.executeTriggers === null;

            if ((timeline.startingFromCurrent && useAutoForExecuteTriggers) || (!useAutoForExecuteTriggers && !timeline.executeTriggers)) {
                this.fired = ((timeline.playDirection !== "reverse") ? timeline.currentPosition >= position : timeline.currentPosition <= position);
            } else {
                this.fired = ((timeline.playDirection !== "reverse") ? timeline.currentPosition > position : timeline.currentPosition < position);
            }
            this.timeline = timeline;
        }

    });


//////////////////////////////////////////////////////////////////////
//
// TimelineObject
//
//////////////////////////////////////////////////////////////////////

    function TimelineObject(animation, position, duration, easing, opts) {
        Edge.Notifier.call(this);

        this.animation = animation;
        this.position = 0;  // msecs relative to the start of the timeline.
        this.duration = -1; // The amount of time this object is active within the timeline.
        this.opts = {};
        $.extend(this.opts, opts);
        if (typeof easing === "function") {
            this.easing = easing;
        } else {
            this.easing = easing && $.easing[easing] ? easing : TimelineObject.defaultEasing;
        }

        if (position !== undefined) {
            this.position = position;
        }
        if (duration !== undefined) {
            this.duration = duration;
        }

        // These properties get set up when the timeline is in play mode.

        this.timeline = null;
        this.dScale = 1;     // The ratio between the animation's duration and the override.
        this.dDuration = 0;
        this.done = false;
    }

    TimelineObject.defaultEasing = "linear";
    $.extend(TimelineObject.prototype, Edge.Notifier.prototype);
    $.extend(TimelineObject.prototype, {
        constructor: TimelineObject,

        setup: function (timeline) {
            this.timeline = timeline;
            var oDuration = this.duration,
                sDuration = null;
            if (this.animation && this.animation.getDuration) {
                sDuration = this.animation.getDuration();
            }
            this.dScale = (oDuration !== -1 && oDuration !== 0) ? sDuration / oDuration : 1;
            this.dDuration = oDuration !== -1 ? oDuration : sDuration;
            this.done = false;
            if (this.animation && this.animation.setup) {
                this.animation.setup(timeline, this.position);
            }
        },

        update: function (elapsed) {
            if (!this.done) {
                var e = elapsed,
                    d = this.dDuration,
                    easingConst,
                    complete;

                if (this.animation) {
                    // Prevent a divide by zero for zero-length tweens.
                    if (d === 0) {
                        if (e >= 0) {
                            // seek anywhere in or beyond tween yields toval
                            easingConst = 1;
                        } else {
                            easingConst = 0;
                        }
                    } else {
                        if (e >= d) {
                            e = d;
                        }
                        if (e <= 0) {
                            e = 0;
                        }

                        easingConst = $.easing[this.easing](e / d, e, 0, 1, d);
                    }

                    this.animation.update(e * this.dScale, easingConst);
                }

                complete = this.timeline.playDirection === "reverse" ? e <= 0 : e >= d;
                if (complete) {
                    this.complete();
                }
            }
        },

        complete: function () {
            this.done = true;
            if (this.timeline) {
                this.timeline.updateComplete(this);
            }
        },

        getPosition: function () {
            return this.position;
        },

        setPosition: function (pos) {
            this.position = pos;
        },

        getDuration: function () {
            return this.duration !== -1 ? this.duration : (this.animation && this.animation.getDuration ? this.animation.getDuration() : 0);
        },

        setDuration: function (duration) {
            this.duration = duration >= 0 ? duration : -1;
        }
    });


//////////////////////////////////////////////////////////////////////
//
// Timeline
//
//////////////////////////////////////////////////////////////////////

    function Timeline(opts) {
        Edge.Animation.call(this);

        $.extend(this, Edge.Timeline.config);
        $.extend(this, opts);

        this.timer = 0;
        this.timerStart = 0;
        this.startPosition = 0;
        this.currentPosition = -1;
        this.playing = undefined;
        this.duration = 0;
        this.iteration = 0;

        this.interval = 1000 / this.fps;

        this.objects = [];
    }

    Timeline.config = timelineDefaultConfig;

    /**
     Update all timelines driven by an external clock. To use an external clock, pass 'externalClock:true'
     as an option to play() for any timelines to be driven. Then, call this function to update all of them,
     based on whatever external time source you are using.
     @name tick
     @memberOf AdobeEdge.Timeline
     @function
     @return nothing
     */
    Timeline.prototype.tick = function (ms) {            
        this._handleTimer(ms);
    };

    function loop(timeline) {
        var animations = timeline.objects,
            alen = animations.length,
            i;
        for (i = 0; i < alen; i += 1) {
            animations[i].done = false;
        }
        timeline.tick();
    }

    $.extend(Timeline.prototype, Animation.prototype);
    $.extend(Timeline.prototype, {

        constructor: Timeline,

        /**
         Play this timeline
         @name play
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @param {object} opts Options for running timeline.
         @return nothing
         */
        play: function (opts) {
            opts = opts || {};
            this.notifyObservers("play");
            this.playing = true;
            this._stop({});
            
            if (typeof opts.pos === "undefined" || opts.pos === null) {
                if(opts.playDirection == "reverse") {
                    opts.pos = this.currentPosition;
                    if (opts.pos <= 0) {
                        opts.pos = this.getDuration();
                    }
                } else if (this.currentPosition < 0 || this.currentPosition >= this.getDuration()) {
                    opts.pos = 0;
                }
            }            

            //TODO - Get rid of opts.pos, its unnecessarily adding a variable in timeline which may be confused for something else
            $.extend(this, opts);

            this.seek(opts.pos, opts);            
            this.sort(opts);

            this.iteration = 0;

            this.setup(this);

            this.timerStart = (new Date()).getTime();
            this.startPosition = this.currentPosition;

            this.lastUpdateTime = this.timerStart;

            this.firstUpdate = true;
            this._handleTimer();
            this.firstUpdate = false;
            return this;
        },

        /**
         Stop playing this timeline
         @name stop
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @return nothing
         */
        stop: function (opts) {
            this.playing = false;
            if(opts && opts.bSeek) {
                this.seek(opts.pos, opts);
            } else {
                this._stop(opts);
            }                        
        },

        /**
         Seek to a time in this timeline
         @name seek
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @param {number} pos Milliseconds to seek to.
         @param {object} opts Options for running timeline.
         @return nothing
         */
        seek: function (pos, opts) {
            this.notifyObservers("seek");
            this.sort(opts);
            var oldPosition = this.currentPosition;
            this._stop(opts);
            $.extend(this, opts);
            if(pos !== undefined) this.currentPosition = pos;

            if (typeof pos === "number" && oldPosition !== this.currentPosition) {
                this.startingFromCurrent = false;
            } else {
                this.startingFromCurrent = true;
            }
            this.setup(this);

            /* Note the extra oldPosition arg in this call to update. That allows optimization of multiple seeks
             *  if updateSeek supports it
             */
            this.firstUpdate = true;
            this.updateSeek(this.currentPosition, 1, oldPosition);
            this.firstUpdate = false;
            return this;
        },

        /**
         Add a TimelineObject to this timeline
         @name add
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @param {Animation} animation Animation to add as a TLO.
         @param {number} position Start position of animation in ms.
         @param {number} duration Duration of animation in ms.
         @param {string} easing Name of easing to use.
         @param {object} opts Options for new TimelineObject.
         @return nothing
         */
        add: function (animation, position, duration, easing, opts) {
            var o = new TimelineObject(animation, position, duration, easing, opts);
            this.objects.push(o);
            this.sorted = false;
        },

        sort: function (opts) {
            
            var sortPref = { "width": 1, "height": 2, "-webkit-transform-origin": 3, "transform-origin": 4, "-moz-transform-origin": 5, "-ms-transform-origin": 6, "left": 7, "top": 8, "bottom": 9, "right": 10, "motion": 11 };
            
            if (!this.sorted) {
                this.objects.sort(function (a, b) {
                    var aniA = a.animation,
                        aniB = b.animation;
                    
                    //this is just defensive, it should never execute
                    if (!aniA && !aniB) {
                        return a.position - b.position;
                    } else if (!aniA) {
                        return -1;
                    } else if (!aniB) {
                        return 1;
                    }
                    
                    //triggers don't have a property, so they all get grouped together and sorted by position
                    if (!aniA.property && !aniB.property) {
                        return a.position - b.position;
                    } else if (!aniA.property) {
                        return -1;
                    } else if (!aniB.property) {
                        return 1;
                    }
                    
                    var srtA = sortPref[aniA.property],
                        srtB = sortPref[aniB.property];
                    
                    if (aniA.sourceElements !== aniB.sourceElements) {
                        if (aniA.sourceElements > aniB.sourceElements) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                    
                    //sorted properties first
                    if (srtA && (!srtB || srtB < srtA)) {
                        return 1;
                    }
                    if(srtB && (!srtA || srtB > srtA)) {
                        return -1;
                    }
                    
                    //sort the transitions within the property
                    return a.position - b.position;
                });
                this.sorted = true;
            }
            
            //now link them
            for (var i = 1; i < this.objects.length; i++) {
                var prev = this.objects[i - 1];
                var obj = this.objects[i];
                
                if (prev.animation && obj.animation && prev.animation.property === obj.animation.property && prev.animation.sourceElements === obj.animation.sourceElements) {
                    prev.animation._nextObj = obj.animation;
                    obj.animation._prevObj = prev.animation;
                }
                else {
                    if (prev.animation) {
                        prev.animation._nextObj = null;
                    }
                    if (obj.animation) {
                        obj.animation._prevObj = null;
                    }
                }
            }            
        },
        /**
         Get the duration of a timeline
         @name getDuration
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @return {number} Duration of the timeline in milliseconds
         */
        getDuration: function () {
            var duration = this.duration,
                objs = this.objects,
                ocnt = this.objects.length,
                m = Math.max,
                i,
                o;
            for (i = 0; i < ocnt; i += 1) {
                o = objs[i];
                duration = m(duration, o.position + o.getDuration());
            }
            return duration;
        },
        /**
         Get the current position of a timeline
         @name getCurrentPosition
         @memberOf AdobeEdge.Timeline.prototype
         @function
         @return Position of the timeline in milliseconds
         */
        getCurrentPosition: function () {
            return this.currentPosition;
        },

        update: function (elapsed, easingConst) {
            this.sort();

            this.notifyObservers("preUpdate", { elapsed: elapsed, easingConst: easingConst });

            var objs = this.objects, triggers = this.triggers,
                ocnt = objs.length, tcnt = triggers.length,
                forward = this.playDirection !== "reverse",
                updatedTweens = false,
                j,
                okToProceed = true,
                executeTriggers = !window.edge_authoring_mode && this.executeTriggers,
                useAutoForExecuteTriggers = !window.edge_authoring_mode && (this.executeTriggers === undefined || this.executeTriggers === null),
                o,
                p,
                directionMatches,
                i,
                t,
                shouldAutoFire,
                pos,
                state;
            this.currentDirection = forward ? "forward" : "reverse";
            // possible values for executeTriggers is true, false, or either null or undefined to be auto
            //first fire triggers - they have potential to reset the clock
            for (i = 0; i < tcnt; i += 1) {
                t = triggers[forward ? i : tcnt - i - 1];
                shouldAutoFire = t.animation.isTrigger && !(this.startingFromCurrent && this.firstUpdate);
                if (((useAutoForExecuteTriggers && shouldAutoFire) || executeTriggers || !this.firstUpdate) &&
                        (!t.animation.fired) &&
                        (forward ? elapsed >= t.position : elapsed <= t.position + t.duration)) {
                    pos = this.currentPosition = t.position;
                    state = this.getState();

                    //now update all the transitions
                    for (j = 0; j < ocnt; j += 1) {
                        o = objs[forward ? j : ocnt - j - 1];
                        directionMatches = (forward && !o.opts.reverseOnly) || (!forward && !o.opts.forwardOnly);
                        if (directionMatches && !o.animation.isTrigger && (forward ? pos >= o.position : pos <= o.position + o.duration)) {
                            p = pos - o.position;
                            if (!p && !o.duration && !forward) {
                                p -= 1;
                            }
                            o.update(p);
                        }
                    }
                    updatedTweens = true;
                    // Fire the trigger
                    t.animation.update(pos); // Pass in real total elapsed time

                    if (!this.equalState(state)) {
                        // Trigger changed the timeline state
                        okToProceed = false;
                        break;
                    }
                }
            }
            if (!updatedTweens) {
                // No triggers fired
                for (j = 0; j < ocnt; j += 1) {
                    o = objs[forward ? j : ocnt - j - 1];
                    directionMatches = (forward && !o.opts.reverseOnly) || (!forward && !o.opts.forwardOnly);
                    if (directionMatches && !o.animation.isTrigger && (forward ? elapsed >= o.position : elapsed <= o.position + o.duration)) {
                        p = elapsed - o.position;
                        if (!p && !o.duration && !forward) {
                            p -= 1;
                        }
                        o.update(p);
                    }
                }
            }
            this.notifyObservers("fxUpdate", { elapsed: elapsed });
            this.notifyObservers("postUpdate", { elapsed: elapsed, easingConst: easingConst });
            this.notifyObservers("update", { elapsed: elapsed, easingConst: easingConst });
            
            return okToProceed;
        },

        setLoop: function (loop) {
            this.loopCount = loop;
        },
        getState: function () {
            return {pos: this.currentPosition, dir: this.playDirection, playing: this.playing};
        },

        equalState: function (state) {
            var statePlaying = !!state.playing, thisPlaying = !!this.playing;   // Coerce to a boolean
            // If you do the negation in the expression, JsHint complains
            // about confusing use of ! and there's no switch to turn it off
            return state.pos === this.currentPosition && state.dir === this.playDirection && statePlaying === thisPlaying;
        },

        _handleTimer: function (tickTime) {

            //maybe optimize if not playing - stop updating?
            //if (!this.playing) return;

            tickTime = tickTime || (new Date()).getTime();
            // TODO: figure out exactly how to loop when you start at position other than 0
            // This assumes you loop from startPosition to end, and go back to same position each time
            var reversed = this.playDirection === "reverse",
                iterationLength = reversed ? this.startPosition : this.duration - this.startPosition,
                ms = tickTime - this.timerStart - this.iteration * iterationLength,
                elapsed = this.startPosition + (reversed ? -ms : ms),
                okToProceed,
                stillPlaying;

            if (tickTime - this.lastUpdateTime > this.pauseThreshold) {
                // We must have missed some updates, probably because the browser suspended us while the tab was hidden
                this.timerStart += tickTime - this.lastUpdateTime + this.interval;
                ms = tickTime - this.timerStart;
            }
            if (!this.playing) {
                this.notifyObservers("fxUpdate", { elapsed: ms });
                return;
            }

            elapsed = Math.max(0, Math.min(elapsed, this.duration));
            this.currentPosition = elapsed;
            okToProceed = this.update(elapsed, 1);
            this.lastUpdateTime = tickTime;

            reversed = this.playDirection === "reverse";
            stillPlaying = (!reversed ? this.currentPosition < this.duration : this.currentPosition > 0);
            if (!stillPlaying) {
                if (this.loopCount) {
                    this.iteration += 1;
                    this.notifyObservers("iterationComplete", { elapsed: ms, count: this.iteration });
                    if (this.loopCount === 'forever' || this.iteration < this.loopCount) {
                        loop(this);
                        return;
                    }
                }
                
                this.stop();
                this.notifyObservers("complete", { elapsed: ms });
            } 
        },

        setup: function (timeline) {
            Edge.Animation.prototype.setup.call(this, timeline);

            this.triggers = [];
            var animations = this.objects,
                alen = this.objects.length,
                i,
                a;
            for (i = 0; i < alen; i += 1) {
                a = animations[i];
                a.done = false;
                a.setup(this);
                if (a.animation.isTrigger) {
                    this.triggers.push(a);
                }
            }

            this.duration = this.getDuration();
        },

        updateComplete: function (timelineObj) {
            timelineObj.done = true;
        },
        
        //Internal API
        _stop: function(opts) {
            var dontNotify = opts ? opts.dontNotify : false,
                i;

            if (!dontNotify) {
                this.notifyObservers("stop");
            }
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = 0;
            this.timerStart = 0;
            return this;   
        }
    });

    Timeline.prototype.updateSeek = Timeline.prototype.update;

////////////////////////////////////

    Edge.Animation = Animation;
    Edge.TimelineObject = TimelineObject;
    Edge.Timeline = Timeline;


    /**
     Create a new timeline
     @name createTimeline
     @memberOf AdobeEdge.Timeline
     @function
     @param {object} opts Options for timeline.
     @return new Timeline
     */
    Edge.Timeline.createTimeline = function (opts) {
        return new Edge.Timeline(opts);
    };

    /**
     Create a new tween
     @name createTimeline
     @memberOf AdobeEdge.Timeline
     @function
     @param {string or ident} tweenType Type of tween as registered by addTweenType.
     @param {variable}  tweenData Data for tween - depends upon tween type
     @return new tween Animation - precise type depends on tweenType
     */
    Edge.Timeline.createTween = function (tweenType) {
        var factory = tweenFactories[tweenType];
        if (factory) {
            return factory.func.apply(factory.context, Array.prototype.slice.call(arguments, 1));
        }

        return null;
    };


    /**
     Add a new Tween type factory
     @name createTimeline
     @memberOf AdobeEdge.Timeline
     @function
     @param {object} opts Options for timeline.
     @return nothing
     */
    Edge.Timeline.addTweenType = function (tweenType, factoryFunc, context) {
        tweenFactories[tweenType] = { func: factoryFunc, context: context };
    };

    Edge.Timeline.addTweenProperty = function (propertyName, tweenType) {
        tweenTypes[propertyName] = tweenType;
    };

    Edge.Timeline.getTweenType = function (propertyName) {
        return tweenTypes[propertyName] || tweenDefaultType;
    };

    /**
     Create a new Trigger
     @name createTrigger
     @memberOf AdobeEdge.Timeline
     @function
     @param {string or function} handler Either the name of the event to fire, or a handler function to be called.
     @return new Trigger
     */
    Edge.Timeline.createTrigger = function (handler, data) {
        var handlerContext = arguments[arguments.length - 1];
        return new Trigger(handler, data, handlerContext);
    };


    function isTrigger(data) {
        return triggerPattern.test(data[1]);
    }

    Edge.Timeline.isTrigger = isTrigger;
    Edge.Timeline.isTween = function (data) {
        return !isTrigger(data);
    };

    /**
     Create a new timeline from JSON data
     @name createTimeline
     @memberOf AdobeEdge.Timeline
     @function
     @param {arr} opts Array of TLO JSON objects for timeline.
     @return new Timeline
     */
    Edge.Timeline.createTL = function (arr, context, options) {
        var tl = Edge.Timeline.createTimeline(),
            alen = arr.length,
            i,
            d,
            s,
            tweenType,
            args,
            opts,
            duration = arr.duration ? arr.duration : 0,
            easing;

        tl.duration = duration;
        
        if (options && options.loop) {
            tl.setLoop(options.loop);
        }
        for (i = 0; i < alen; i += 1) {
            d = arr[i];
            s = null;
            duration = -1;

            // We currently don't support nested timelines here,
            // but if/when we do, d[3] and d[4] are the same as in a
            // tween and d[5] should be a timeline array
            if (isTrigger(d)) {
                args = d.slice(3, 5);
                args.push(context);
                s = Edge.Timeline.createTrigger.apply(null, args);
                opts = d[5];
                easing = 'none';
            } else if (d[1]) {
                tweenType = tweenTypes[d[1]] || tweenDefaultType;
                args = [tweenType, d[1]].concat(d.slice(5));
                s = Edge.Timeline.createTween.apply(null, args);
                duration = d[3];
                easing = d[4];
                opts = d[8];
            }

            if (s) {
                s.id = d[0];
                tl.add(s, d[2], duration, easing, opts); // Note that opts is now part of trigger data
            }
        }

        return tl;
    };

})(window.AdobeEdge);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * This is wrapped in a function closure for protection and adapted to use in the Edge Animate (EdgeAn) framework
 */
(function (Edge) {

    "use strict";

    var $ = Edge.$,
        jQuery = $;

// t: current time, b: begInnIng value, c: change In value, d: duration
    $.easing['jswing'] = $.easing['swing'];

    $.extend(jQuery.easing,
        {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                }
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t == 0) {
                    return b;
                }
                if (t == d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                }
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) {
                    return b;
                }
                if ((t /= d) == 1) {
                    return b + c;
                }
                if (!p) {
                    p = d * .3;
                }
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else {
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) {
                    return b;
                }
                if ((t /= d) == 1) {
                    return b + c;
                }
                if (!p) {
                    p = d * .3;
                }
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else {
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) {
                    return b;
                }
                if ((t /= d / 2) == 2) {
                    return b + c;
                }
                if (!p) {
                    p = d * (.3 * 1.5);
                }
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else {
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                if (t < 1) {
                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                }
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) {
                    s = 1.70158;
                }
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) {
                    s = 1.70158;
                }
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) {
                    s = 1.70158;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                }
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d / 2) {
                    return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                }
                return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        });
})(window.AdobeEdge);

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 *//**
 * Adobe Edge Animate - Symbol Core
 */

/*jslint plusplus:true, nomen: true*/
/*global window: false, document: false, CustomEvent: false, HTMLElement: false, console:false, alert: false */
/*properties AdobeEdge, $, Symbol, makeId, triggerDict, _, variableValue, originalEvent, methodName, composition, extend,
 createEvent, initEvent, _getTimeline, addObserver, timeline, symbol, length, type, getComposition, compId, bindings,
 data, name, actions, sym, getSymbols, newSymbol, bindElementAction, AnListeners, bind, EdgeAn$, element, each, creationComplete,
 getSymbolElement, isTween, isTrigger, Timeline,  comp, userClass, addClass, loop,
 init, symbolName, ci, prnt, defn, ele, isArray, newSymbol, newEle, newComp, cloneJSONObject, css,
 */
/* EdgeAn Core */
/*properties renderDOM, notifyObservers,
 */

/* Symbols and Properties */
/*properties id, children, props,prep, i, j, content, dom, tlCached, getSymbol, setSymbol, bindTimelineAction,
 bindTriggerAction, bindSymbolAction, bindVariableAction, performDefaultAction, autoPlay,  register, find$,
 variables, _rebuild, _seek, bldTL, getTimelineData, executeTriggers, labels, p2n, x, y, Stage, style, render,
 p, trimString, parseVariableName, substituteVariables */
/* Timelines */
/*properties duration, position, sort, reverseOnly, createTL, seek, play, stop, */
/*properties CustomEvent, bubbles, cancelable, dispatchEvent, Event, concat,
 console, log, prototype, slice, call, unshift, apply,
 test, splice, push, addEventListener, removeEventListener, hasOwnProperty,
 replace, max, preventDefault, join, split, sqrt, search */
(function (Edge) {

    "use strict";

    var $ = window.jQuery ? window.jQuery : Edge.$,
        Symbol = Edge.Symbol,
        Timeline = Edge.Timeline,
        isTween = Timeline.isTween,
        isTrigger = Timeline.isTrigger,
        idCounter = 0;

    function makeUniqueId(id, parentID) {
        if(parentID) return parentID + "_" + id;
        else return id + "_" + idCounter++;
    }

    Symbol._makeUniqueID = makeUniqueId;

    function registerId(sym, id, parentId) {
        var sel = makeUniqueId(id, parentId);
        sym._variables[id] = "#" + sel;
        return sel;
    }    

    function getSymbol(ele) {
        if (ele.length) {
            ele = ele[0];
        }
        return ele ? ele.edgeSymbol : null;
    }

    function setSymbol(ele, sym) {
        if (ele.length) {
            ele = ele[0];
        }
        if (ele) {
            ele.edgeSymbol = sym;
        }
    }
    
    Edge.symbol = Symbol;   // Keep lowercase as an alias for now - but its use is deprecated
    Symbol.get = Symbol.getSymbol = getSymbol;
    Symbol.setSymbol = setSymbol;
    /*
     function unRegisterId(sym, id) {

     sym.map[id] = undefined; // Don't use delete, as it can have bad perf issues
     }
     */

    function extendElement(sym, $ele, oN) {
        var comp = sym.composition,
            s;
        // Add all the attributes and goodies not supported in EdgeAn core.
        if (oN.userClass) {
            $ele.addClass(oN.userClass);
        }
        Edge.$.data($ele[0], "defn", oN);  // save the initialization data
        if (oN.symbolName) {
            s = new Symbol(comp.sym, oN.symbolName, comp, sym); // ?? sym.stage = ??
            //comp.notifyObservers(comp, 'newSymbol', {symbol: s, parent: sym});
            s.init($ele[0]);
            sym.ci = sym.ci || [];
            sym.ci.push(s);
            s.prnt = sym;
        }
    }

    // Install observers to override core as needed
    Edge.addObserver({newComp: function (an, data) {
        data.comp.addObserver({newSymbol: function (comp, dat) {
            dat.symbol.addObserver({newEle: function (sym, da) {
                extendElement(sym, $(da.ele), da.defn);
            }});
        }});
    }});

    function cloneJSONObject(obj) {
        var o, v, i, cnt = obj.length, p;
        if ($.isArray(obj)) {
            o = [];
            for (i = 0; i < cnt; i++) {
                v = obj[i];
                o[i] = (v != null && typeof v === "object") ? cloneJSONObject(v) : v;
            }
        } else {// isObject
            o = {};
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    if (p !== 'prototype') {
                        v = obj[p];
                        o[p] = (v != null && typeof v === "object") ? cloneJSONObject(v) : v;
                    }
                }
            }
        }
        return o;
    }

    Edge.cloneJSONObject = cloneJSONObject;

    function _getTimelineData(sym) {
        var s = sym.data[sym.name];
        return s.timeline ? s.timeline.data : null;
    }
    
    function _getTimelineDuration(sym) {
        var s = sym.data[sym.name];
        return s.timeline ? s.timeline.duration : 0;
    }

    function getTimelineDefn(sym) {
        return sym.data[sym.name].timeline;
    }

    function getInitialValue(sym, sel, cssProp) {
        var id = sel.replace(/[\{\}\$]/g, ""),
            s = sym.data[sym.name],
            i,
            dom = s.content ? s.content.dom : null,
            oN,
            oProp;

        function findDefn(dom, id) {
            for (i = 0; i < dom.length; i += 1) {
                if (dom[i].id === id) {
                    return dom[i];
                }
                if (dom[i].children) {
                    return findDefn(dom[i].children, id);
                }
            }
            return null;
        }

        if (dom) {
            oN = findDefn(dom, id);
            if (oN) {
                oProp = Edge.props[cssProp];
                if (oProp) {
                    return oProp.prep(null, oN, cssProp, oProp.i, oProp.j);
                }
            }

        }
        return null;
    }

    function createSimpleMotionPathData(selector, beginPt, endPt, start, duration) {
        var mpd = [
                "generated",
                "location",
                start,
                duration,
                'linear',
                selector,
                [
                    [beginPt.x, beginPt.y, 0, 0],
                    [endPt.x, endPt.y, 0, 0]
                ]
            ];
        return mpd;
    }


    function buildTimeline(sym, force) {
        var currentPosition, observers;

        if (force) {
            sym.tlCached = undefined;
        }
        
        var tld = _getTimelineData(sym);
        if (!tld) {
            return null;
        }
        
        tld.duration = _getTimelineDuration(sym);

        if(tld.dirty && sym.tlCached) {
            currentPosition = sym.tlCached.currentPosition; 
            observers = sym.tlCached.notifier.obs;
            sym.tlCached = undefined;            
        }

        if (!sym.tlCached) {
            // Predeclare vars for JSHint
            var newO,
                val,
                defn = getTimelineDefn(sym),
                cnt,
                sdict = {},
                tdict = {},
                t,
                o,
                duration = tld.duration,
                sel,
                d,
                last,
                fullDuration,
                symData = sym.data[sym.name],
                i,
                ii,
                cmp,
                endTime,
                pt,
                index;

            cnt = tld.length;

            // Clean out any injected tweens
            for (ii = tld.length - 1; ii >= 0; ii--) {
                if (tld[ii][0] === 'injected') {
                    tld.splice(ii, 1);
                }
            }

            cnt = tld.length;
            if (typeof symData.timeline.duration !== 'number') {
                symData.timeline.duration = 0;
            }

            for (i = 0; i < cnt; i++) {
                o = tld[i];

                if (o && isTween(o)) {
                    sel = o[5];
                    if (!sdict[sel]) {
                        sdict[sel] = [];
                    }
                    sdict[sel].push(o);

                    t = sel + ":" + (o[1] === 'motion' ? 'location' : o[1]);
                    if (!tdict[t]) {
                        tdict[t] = [];
                    }
                    tdict[t].push(o);
                }
                if (o && isTween(o)) {
                    d = o[3] || 0;
                    duration = Math.max(duration, o[2] + d);
                }
            }
            fullDuration = Math.max(symData.timeline.duration, duration);

            cmp = function (a, b) {
                return a[2] - b[2];
            };
            for (t in tdict) {
                if (tdict.hasOwnProperty(t)) {
                    tdict[t].sort(cmp);
                }
            }

            for (t in tdict) {
                if (tdict.hasOwnProperty(t)) {
                    o = tdict[t][0];
                    if (o[2] > 0) {
                        val = getInitialValue(sym, o[5], o[1]);
                        if (val == null) {
                            val = o[6];
                        }

                        if (o[1] === "location") {
                            o = tdict[t][0];
                            pt = {
                                x: o[6][0][0],
                                y: o[6][0][1]
                            };
                            newO = createSimpleMotionPathData(o[5], pt, pt, 0, Math.max(0, o[2] - 1));
                            newO[0] = 'injected';
                            tld.push(newO);
                        } else if (val !== undefined) {
                            o = Edge.cloneJSONObject(tdict[t][0]);
                            o[6] = o[7] = val;
                            o[3] = o[2];
                            o[2] = 0;
                            o[0] = 'injected';
                            if(o[8] && o[8].valueTemplate != "" && typeof val == "string") {
                                //Template is already applied
                                o[8].valueTemplate = "";
                            }
                            tld.push(o);
                        }
                    }
                    last = tdict[t].length - 1;
                    if (last >= 0) {
                        o = tdict[t][last];
                        endTime = o[2] + o[3];
                        if (endTime < duration) {
                            if (o[1] === "location") {
                                index = o[6].length - 1;
                                pt = {
                                    x: o[6][index][0],
                                    y: o[6][index][1]
                                };
                                newO = createSimpleMotionPathData(o[5], pt, pt, endTime, fullDuration - endTime);
                                newO[0] ='injected';
                                tld.push(newO);
                            } else {
                                newO = Edge.cloneJSONObject(tdict[t][last]);
                                newO[6] = o[7];
                                newO[2] = fullDuration;
                                newO[3] = 0;
                                newO[0] = 'injected';
                                newO[8] = newO[8] || {};
                                newO[8].reverseOnly = true;
                                tld.push(newO);
                            }
                        }
                    }
                }
            }

            // Append a dummy tween if the declared timeline duration is greater than the final tween or trigger
            // This guarantees the complete event is fired at the right time
            if (duration < fullDuration) {
                o = ["injected", "-an_resting", duration, fullDuration - duration, "linear", "${Stage}", '0', '100' ];
                tld.push(o);
            }

            sym.tlCached = Timeline.createTL(tld, sym, {loop: defn.loop});
            if(tld.dirty) {
                sym.tlCached.currentPosition = currentPosition;
                sym.tlCached.notifier.obs = observers || sym.tlCached.notifier.obs;
            }
            sym.tlCached.sort();
        }
    }

    Symbol.bldTL = buildTimeline;
    function posToNum(sym, posInMsOrLabel) {
        if (typeof posInMsOrLabel === "string") {
            var s = sym.data ? sym.data[sym.name] : 0,
                tld = s ? s.timeline : 0;
            if (!tld || !tld.labels) {
                return 0;
            }
            return tld.labels[posInMsOrLabel];
        }
        return posInMsOrLabel;
    }
    Symbol.p2n = posToNum;

    // TOD - assess whether we keep performDefaultAction or change to preventDefault()
    function createEvent(sym, eventName, opts) {
        var e = { Symbol: sym, element: sym.ele, performDefaultAction: true };
        $.extend(e, opts);
        return e;
    }

    function lookup$(sym, sel) {
        var re = /^\$\{/;
        if (re.test(sel)) {
            sel = sel.replace(re, '');
            sel = sel.replace(/\}/, '');
            return sym.find$(sel);
        }
        return Edge.$(sel);
    }

    function applyBaseStyles(sym, $ele, baseStyles) {
        var propName;
        if ($ele && $ele[0]) {
            for (propName in Edge._.p) {
                if (Edge._.p.hasOwnProperty(propName)) {
                    if(propName == "width" || propName == "height") {
                        var val = $ele[0].style[propName];
                        //If width/height is already set on the instance, don't change it
                        if(val != null && val != "" && val != "auto") {
                            continue;
                        }
                    }
                    
                    Edge._.p[propName].render($ele, baseStyles, sym.composition);
                }
            }
        }
    }    
    
    function applyInstanceStyles(sym, styles) {
        var $ele,
            sel,
            propName;
        for (sel in styles) {
            if(sel == "${symbolSelector}") continue;
            
            if (styles.hasOwnProperty(sel)) {
                $ele = lookup$(sym, sel);
                if ($ele) {
                    for (propName in Edge._.p) {
                        if (Edge._.p.hasOwnProperty(propName)) {
                            Edge._.p[propName].render($ele, styles[sel], sym.composition);
                        }
                    }
                }
            }
        }
    }

    Edge.trimString = function (str) {
        return str.replace(/^\s+|\s+$/g, "");
    };

    function parseVariableName(str) {
        var varName = str,
            start,
            end;
        if (typeof str === "string" && str.search(/\$\{/) !== -1) {
            start = str.search(/\$\{/);
            end = str.search(/\}/);
            varName = str.slice(start + 2, end);
            //if (!varName)
            //    alert("Invalid variable name: " + varName);

            if (typeof varName === "string") {
                varName = Edge.trimString(varName);
                varName = varName.replace(/["']/g, "");
            }
        }
        return varName;
    }
    Symbol.parseVariableName = parseVariableName;

    /**
     Substitute variables into string
     @name substituteVariable
     @memberOf AdobeEdge.Symbol
     @function
     @param {string} s String to be substituted into - left unchanged. Tokens of form '${var}' will be substituted from entry for 'var' in variables
     @param {object}  variables Dictionary of substitution values
     @return {string} Substituted string
     */
    function substituteVariables(s, variables) {
        var str = s,
            varName;
        while (variables && typeof str === "string" && str.search(/\$\{/) !== -1) {
            varName = parseVariableName(str);

            if (variables[varName] === undefined) {
                //console.log("Animation variable ${" + varName + "} is undefined!");
                str = undefined;
            } else {
                /*jslint regexp: true */
                str = str.replace(/\$\{[^\}]*\}/, variables[varName]);
                /*jslint regexp: false */
            }
        }
        return str;
    }

    Symbol.substituteVariables = substituteVariables;

    $.extend(Symbol.prototype, {
        init: function (stg, cls) { // Overrides core
            var s = this.data[this.name],
                e,
                $stg = $(stg),
                id = $stg[0].id,
                sel;
            this.gpuAccelerate = s.gpuAccelerate;
            if (typeof(this.gpuAccelerate) === "undefined") {
                this.gpuAccelerate = true;
            }
            this.gpuAccelerate = this.gpuAccelerate && Edge.supported.cssTransform3d;
            
            this.variables = this.variables || {};
            this._variables = this._variables || {};
            stg = stg || $("." + cls)[0];
            this.autoPlay = s.timeline ? s.timeline.autoPlay : false;

            setSymbol(stg, this);
            this.ele = stg;
            if (stg) {
                if (!id || id === "") {
                    id = makeUniqueId("Stage");
                    $stg[0].id = id;
                }
                sel = "#" + id;
                this._variables[id] = this._variables["Stage"] = sel;
                this._variables["symbolStage"] = sel;
                this._variables["symbolSelector"] = sel;
                $stg.css("position", "absolute");
                $stg.css("z-index", "0");                
            }
            if (s) {
                Edge.renderDOM(this.composition, this, s.content.dom, s.content.style, stg, cls);
                applyInstanceStyles(this, s.content.style);
            }
            e = createEvent(this, "creationComplete");
            this.notifyObservers("creationComplete", e);
        },
        lookupSelector: function (eleName) {
            if (typeof eleName !== "string") {
                return undefined;
            }
            try {
                return substituteVariables("${" + eleName + "}", this._variables);
            }
            catch (e) {

            }
        },        
        getSymbolTypeName: function () {
            return this.name;
        },        
        getComposition: function() {
            return this.composition;
        },
        find$: function (id) {
            var ids = id.split(" "), sel = this._variables[ids[0]], ele, tail, s;
            if (ids.length < 2 || !sel) {
                return sel ? Edge.$(sel) : null;
            }
            ele = Edge.$(sel);
            if (!ele || !ele.length) {
                return null;
            }
            ids.splice(0, 1);
            tail = ids.join(' ');
            s = getSymbol(ele);
            return s ? s.find$(tail) : undefined;
        },
        $: function (selector) {
            var ele = selector,
                $ele;
            if (typeof selector === 'string') {
                try {
                    if (selector.search(/\$\{/) === -1) {
                        ele = this.lookupSelector(selector);
                        if (typeof ele === "undefined") {
                            ele = selector;
                        }
                    }
                    else {
                        ele = substituteVariables(selector, this._variables);
                    }
                } catch (e) {

                }
            }
            if (ele === undefined) {
                ele = parseVariableName(selector);
            }
            return Edge.$(ele);
        },
        register: function (ele, obj, parentId) { // Overrides core
            var sel = registerId(this, obj.id, parentId);
            obj.oldId = obj.id;
            ele.id = sel;
        },
        seek: function(pos, opts) {
            buildTimeline(this);
            this.tlCached.seek(pos, opts);
        },
        play: function (pos, executeTriggers, playDirection) {
            buildTimeline(this);

            if (this.tlCached) {
                pos = posToNum(this, pos);                
                var opts = {pos: pos, variables: this._variables, executeTriggers: executeTriggers, playDirection: playDirection};                
                this.tlCached.play(opts);
            }
        },
        stop: function (ms, executeTriggers) {
            buildTimeline(this);
            if (this.tlCached) {
                ms = posToNum(this, ms);
                var opts = {pos: ms, variables: this._variables, executeTriggers: executeTriggers, bSeek: ms != undefined};
                this.tlCached.stop(opts);
            }
        },
        playReverse: function(pos, executeTriggers) {
            this.play(pos, executeTriggers, "reverse");
        },
        isPlaying: function () {
            var tl = this._getTimeline();
            return (tl && !!tl.playing);
        },
        isPlayDirectionReverse: function () {
            var tl = this._getTimeline();

            //if the timeline is not in the process of an update, report the last direction played
            if (tl && tl.currentDirection === "reverse") {
                return true;
            }

            return false;
        },
        //For backward compatibility
        getTimelinePosition: function() {
            return this.getPosition();
        },
        getPosition: function () {
            buildTimeline(this);
            if (this.tlCached) {
                return this.tlCached.getCurrentPosition();
            }
            return 0;
        },
        getDuration: function () {
            buildTimeline(this);
            if (this.tlCached) {
                return this.tlCached.getDuration();
            }

            return undefined;
        },        
        getLabelPosition: function (label) {
            return posToNum(this, label);
        },
        // Called from authoring layer so needs to be available as method
        _getTimeline: function () {
            buildTimeline(this);
            return this.tlCached;
        },
        _rebuild: function () {
            buildTimeline(this, true);
        },
        getTimelineData: function() {
            return _getTimelineData(this);
        },
        //Deprecated - use getTimelineData instead. This will be removed in future
        getTLD: function () {
            return this.getTimelineData();
        },
        _applyBaseStyles: function($ele, name) {
            var s = this.data[name];
            if(s.content && s.content.style && s.content.style["${symbolSelector}"]) {                
                applyBaseStyles(this, $ele, s.content.style["${symbolSelector}"]);
            }
        },
        getAutoPlay: function() {            
            return this.autoPlay;
        },
        setAutoPlay: function(autoPlay) {
            this.autoPlay = autoPlay;
        }
    });

})(window.AdobeEdge);
// An.property-tween.js - version 0.2 - An Release 1.0
//
// Copyright (c) 2010. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//


(function (Edge) {
    "use strict";

// Builtin tween types handled by PropertyTween - other type requires a subclass that overloads setValue.
    var $ = Edge.$,
        tweenTypes = { style: 0, attribute: 1, property: 2 },
        isWebkit = 'webkitAppearance' in document.documentElement.style;

    Edge.trimString = function (str) {
        return str.replace(/^\s+|\s+$/g, "");
    };

    /**
     @name AdobeEdge.PropertyTween
     @class Animation for a single property on a set of elements.
     This class is designed to be extended. In particular, overriding setValue, getValue  will
     enable the animation of your own properties. Overriding  getElementSet or resolveElementSelector will permit
     application to arbitrary objects or object sets.
     Note that only the methods likely to be overridden by derived classes are documented.

     **/

    /**
     PropertyTween constructor
     @name PropertyTween
     @memberOf AdobeEdge.PropertyTween
     @function
     @param {string or ident} tweenType Type of tween as registered by addTweenType.
     @param {string, jQuery object, DOM element, or object}  elements The object or objects to be tweened. Strings will be $'d
     @param {string or ident} property Property, data member or attribute name
     @param {string, number or array} val Value to animate to
     @param {object} opts Additional tween-type specific options
     @return nothing
     */

    function PropertyTween(tweenType, property, elements, fromVal, val, opts) {
        Edge.Animation.call(this);

        this.name = "prop tween";
        this.elements = elements;
        this.sourceElements = elements;
        this.deferElementResolution = true;
        this.tweenType = tweenTypes[tweenType];
        this.updateTriggered = false;
        this.property = property;
        this.fromValue = fromVal;
        this.toValue = val;
        this.duration = 1000; // msecs
        this.valueTemplate = null;
        this.tokens = null;
        this.fromValues = null;

        if (opts) {
            $.extend(this, opts);
        }

        // We need to force a deferred resolution of our element set
        // if we were given a selector that contains a placeholder
        // reference.

        /*jslint regexp: true */
        this.deferElementResolution = this.deferElementResolution || (typeof elements === "string" && elements.search(/\$\{[^\{\}]+\}/) !== -1);
        /*jslint regexp: false */

        if (!this.deferElementResolution) {
            this.elements = this.resolveElementSelector(elements);
        }

        // Convert all "to" values specified into an array of objects
        // that specify the value and unit to drive to.
        // TODO - move all the value setting to setupForAnimation

        var values = this.toValues = [],
            valueArray = this.parseValue(val),
            i,
            v,
            len,
            o,
            fvs,
            parsedValues,
            f;

        if (!$.isArray(val)) {
            val = [ val ];
        }

        if (!valueArray || valueArray.length === 0) {
            valueArray = val;
        }

        len = valueArray.length;
        for (i = 0; i < len; i += 1) {
            v = valueArray[i];
            if (Edge.props[property]) {
                v = Edge.props[property].units(v);
            }
            o = {};
            if (typeof v === 'string') {
                o.value = parseFloat(v.replace(/[a-zA-Z%]+$/, ""));
                o.unit = v.replace(/^-?[0-9]*(\.[0-9]+)?/, "");
                if (isNaN(o.value)) {
                    o.value = v;
                    o.unit = "";
                }
            } else {
                if (typeof v === 'number') {
                    v = parseFloat(v);
                }
                o.value = v;
                o.unit = "";
            }
            values.push(o);
        }

        if (this.fromValue != null) {
            fvs = this.fromValues = [];

            parsedValues = this.parseValue(this.fromValue);
            if (parsedValues && parsedValues.length > 0) {
                this.fromValue = parsedValues;
            } else if (!$.isArray(this.fromValue)) {
                // If any "from" values were specified and we could not parse them, convert them into an
                // array of numeric values.
                this.fromValue = [ this.fromValue ];
            }

            len = this.fromValue.length;
            for (i = 0; i < len; i += 1) {
                v = this.fromValue[i];
                if (typeof v === 'string') {
                    fvs[i] = parseFloat(v.replace(/[a-zA-Z%]+$/, ""));
                    if (isNaN(fvs[i])) {
                        fvs[i] = v;
                    }
                } else {
                    if (typeof v === 'number') {
                        v = parseFloat(v);
                    }
                    fvs[i] = v;
                }
            }

            //if (this.toValues.length != this.fromValues.length)
            //    alert("Number of 'from' and 'to' values does not match for " + this.tweenType + " tween.");
        }

        // Make sure filter is an array and convert strings to functions
        // TODO - consider whether we should support parameterized filters and valueTemplates - if so move them to setupForAnimation
        if (this.filter) {
            if (!$.isArray(this.filter)) {
                this.filter = [ this.filter ];
            }
            f = this.filter;
            len = f.length;
            for (i = 0; i < len; i += 1) {
                if (typeof f[i] === 'string') {
                    f[i] = Math[f[i]];
                }
                if (typeof f[i] !== 'function') {
                    f[i] = null;
                }
            }
        }


        if (this.valueTemplate) {
            this.tokens = this.parseTemplate(this.valueTemplate);
        }
    }


    PropertyTween.Token = function (value, isPlaceholder) {
        this.value = value;
        this.isPlaceholder = isPlaceholder;
    };

    PropertyTween.parseVariableName = function (str) {
        var varName = str,
            start,
            end;
        if (typeof str === "string" && str.search(/\$\{/) !== -1) {
            start = str.search(/\$\{/);
            end = str.search(/\}/);
            varName = str.slice(start + 2, end);
            //if (!varName)
            //    alert("Invalid variable name: " + varName);

            if (typeof varName === "string") {
                varName = Edge.trimString(varName);
                varName = varName.replace(/["']/g, "");
            }
        }
        return varName;
    };

    /**
     Substitute variables into string
     @name substituteVariable
     @memberOf AdobeEdge.PropertyTween
     @function
     @param {string} s String to be substituted into - left unchanged. Tokens of form '${var}' will be substituted from entry for 'var' in variables
     @param {object}  variables Dictionary of substitution values
     @return {string} Substituted string
     */
    PropertyTween.substituteVariables = function (s, variables) {
        var str = s,
            varName;
        while (variables && typeof str === "string" && str.search(/\$\{/) !== -1) {
            varName = PropertyTween.parseVariableName(str);

            if (variables[varName] === undefined) {
                //console.log("Animation variable ${" + varName + "} is undefined!");
                str = undefined;
            } else {
                /*jslint regexp: true */
                str = str.replace(/\$\{[^\}]*\}/, variables[varName]);
                /*jslint regexp: false */
            }
        }
        return str;
    };

    $.extend(PropertyTween.prototype, Edge.Animation.prototype);
    $.extend(PropertyTween.prototype, {
        constructor: PropertyTween,

        setup: function (timeline) {
            this.updateTriggered = false;
            this.timeline = timeline;
            this.animData = undefined;
        },

        update: function (elapsed, easingConst) {
            var elements = this.getElementSet(),
                tween = this,
                tt = this.tweenType,
                prop = this.property,
                i;

            if (!this.updateTriggered) {
                this.updateTriggered = true;
                this.setupForAnimation();
            }

            elements.each(function (index, ele) {
                // We only want to tween if the property data has a
                // matching animation id. If the ids don't match, that
                // means another animation has started which is modifying
                // this same property.

                var td = tween.getPropertyTweenData(ele, tt, prop),
                    fvs,
                    tvs,
                    tkns,
                    filters,
                    cnt,
                    results,
                    f,
                    v,
                    t,
                    val,
                    formattedValue,
                    tlen,
                    a,
                    o;

                if (td.animationID !== tween.animationID) {
                    return;
                }

                fvs = td.fromValues;
                tvs = td.toValues;
                tkns = td.tokens;
                filters = tween.filter;

                cnt = fvs.length;
                results = [];

                for (i = 0; i < cnt; i += 1) {
                    f = fvs[i];
                    t = tvs[i];

                    if (typeof f === "string") {
                        v = (easingConst === 0 && tween.duration > 0) ? f : t.value;
                    } else {
                        v = (f + ((t.value - f) * easingConst));
                    }
                    if (filters && filters[i]) {
                        v = filters[i](v, tween, this, prop, t.unit, elapsed);
                    }
                    if (typeof v === "number" && v < 1) {
                        // protect against exponential notation
                        v = v.toFixed(6);
                    }
                    results.push(v + t.unit);
                }

                val = "";

                formattedValue = tween.formatValue(results);

                if (formattedValue.length > 0) {
                    val = formattedValue;
                } else if (tkns) {
                    tlen = tkns.length;
                    a = [];
                    for (i = 0; i < tlen; i += 1) {
                        o = tkns[i];
                        if (o.isPlaceholder) {
                            a.push(results[o.value]);
                        } else {
                            a.push(o.value);
                        }
                    }

                    val = a.join("");
                } else {
                    val = results.join("");
                }

                //console.log(this.id + ": " + prop + " = " + val);
                tween.setValue.call(this, tt, prop, val);
                tween.notifyObservers("onUpdate", { elapsed: elapsed, easingConst: easingConst, property: prop, value: val, element: this });
            });

        },
        /**
         Set a value for a property on an animated object. Override this method for a custom property
         @name setValue
         @memberOf AdobeEdge.PropertyTween
         @function
         @param (animated object) this Note that setValue is called for each animated object/property pair
         @param {integer} tt Type of tween. Undefined for tweenTypes not defined in the tweenTypes object
         @param {string}  prop The name of the property
         @param {any} val New value. Type depends on what the animated property is
         @return nothing
         */
        setValue: function (tt, prop, val) {
            switch (tt) {
            case 0:
                var $this = $(this);
                $this.css(prop, val);
                if( isWebkit && prop === 'background-size' ) {
                    $this.css('-webkit-background-size', val);
                }
                else if (prop === "display" && (this.nodeName == "AUDIO")) {
                    $this.attr("controls", val === "none" ? null : "controls");
                }
                break;
            case 1:
                this.setAttribute(prop, val);
                break;
            case 2:
                this[prop] = val;
                break;
            }
        },

        getDuration: function () {
            return this.duration;
        },

        /**
         Resolve the tween's selector (this.elements) to the set of objects to be animated by this tween.
         Override this method to use a custom lookup method.
         @name resolveElementSelector
         @memberOf AdobeEdge.PropertyTween
         @function
         @return {jQuery object} jQuery object containing the actual objects or DOM elements
         */
        resolveElementSelector: function () {
            var ele = PropertyTween.substituteVariables(this.elements, this.timeline.variables);
            if (!ele) {
                ele = this.elements;
            }
            if (/^\$\{/.test(ele)) {
                ele = "bad_selector";
            }
            return $(ele);
        },

        getElementSet: function () {
            // The actual set of elements each tween operates on is cached in the
            // timeline. This is done because the
            // same timeline can be invoked with different variables that change
            // what each animation operates on.

            var id = this.animationID,
                animData;

            this.timeline.animData = this.timeline.animData || {};

            animData = this.timeline.animData[id];
            if (!animData) {
                animData = this.timeline.animData[id] = this.deferElementResolution ? this.resolveElementSelector() : this.elements;
            }

            return animData;
        },

        /**
         Get the current value for a property on an animated object. Note that this is called with this set to the
         animated object, not a PropertyTween. Override this method for a custom property
         @name getValue
         @memberOf AdobeEdge.PropertyTween
         @function
         @param (animated object) this Note that getValue is called for each animated object/property pair
         @param {string}  prop The name of the property
         @param {integer} tt Type of tween. Undefined for tweenTypes not defined in the tweenTypes object
         @return {any} val Current value. Type depends on what the animated property is
         */
        getValue: function (prop, tt) {
            var fv;
            switch (tt) {
            case 0:
                fv = $(this).css(prop);
                break;
            case 1:
                fv = this.getAttribute(prop);
                break;
            case 2:
                fv = String(this[prop]);
                break;
            }
            return fv;
        },
        setupForAnimation: function () {
            // This function needs to get called just before the tween starts
            // to make sure we don't disable other tween animations that run
            // before this one.

            var tween = this,
                tt = this.tweenType,
                prop = this.property,
                elements = this.getElementSet();
            elements.each(function (index, ele) {
                var d = tween.getPropertyTweenData(ele, tt, prop),
                    fv,
                    fromValues,
                    fvs,
                    fromLen,
                    i,
                    v;
                d.animationID = tween.animationID;
                d.toValues = tween.toValues;
                d.tokens = tween.tokens;

                // There's a big assumption being made here, which is that
                // if there is a valueTemplate in use, which is the only case
                // where we can have multiple toValues, the tween fromValues
                // property will be non-null.

                // The above comment is not true for color tweens anymore.
                // They are not templated values but they do have an array of values.

                if (tween.fromValues) {
                    d.fromValues = tween.fromValues;
                } else {
                    fv = tween.getValue.call(this, prop, tt);
                    if (fv === undefined) {
                        fv = "0";
                    }

                    fromValues = tween.parseValue(fv);

                    if (fromValues && fromValues.length > 0) {
                        fvs = d.fromValues = [];

                        fromLen = fromValues.length;
                        for (i = 0; i < fromLen; i += 1) {
                            v = fromValues[i];
                            if (typeof v === 'string') {
                                fvs[i] = parseFloat(v.replace(/[a-zA-Z%]+$/, ""));
                            } else {
                                fvs[i] = v; // hope it's a number
                            }
                            if (isNaN(fvs[i])) {
                                fvs[i] = v;
                            }
                        }
                    } else {
                        d.fromValues = [ parseFloat(fv.replace(/[a-zA-Z%]+$/, "")) ];
                    }

                }
            });
        },

        parseTemplate: function (templateStr) {
            var tlen = templateStr.length,
                results = [],
                startIndex = 0,
                re = /@@[0-9]+@@/g,
                m = null;
            if (startIndex < tlen) {
                m = re.exec(templateStr);
            }
            while (m) {
                if (m.index !== startIndex) {
                    results.push(new PropertyTween.Token(templateStr.substring(startIndex, m.index), false));
                }
                results.push(new PropertyTween.Token(parseInt(m[0].replace(/@@/g, ""), 10), true));
                startIndex = re.lastIndex;
                m = null;
                if (startIndex < tlen) {
                    m = re.exec(templateStr);
                }
            }

            if (startIndex < tlen) {
                results.push(new PropertyTween.Token(templateStr.substring(startIndex, tlen), false));
            }

            return results;
        },
        /**
         Parse the from and to values into an array of values. Override this function to provide custom
         formats. When overriding this method, the formatValue method should also be implemented.
         @name parseValue
         @memberOf AdobeEdge.PropertyTween
         @function
         @param {val}  prop value The value of the property
         @return {Array} Array of values for a property.
         */
        parseValue: function (val) {
            return [];
        },
        /**
         Format the given array of values into a string that can be used as a css property value. Invoked
         by update to get the formatted string value. Used in conjunction with parseValue.
         @name formatValue
         @memberOf AdobeEdge.PropertyTween
         @function
         @param {values}  Array of values of a property.
         @return {string} Formatted string value.
         */
        formatValue: function (values) {
            return "";
        },
        getPropertyTweenData: function (ele, tweenType, propertyName) {
            // The data for a tween is stored on each element, with a key
            // of "tweenData". The stored data is actually a dictionary
            // of dictionaries, where the outer dictionary is indexed by
            // tween type, and the dictionary for that type uses property
            // names as the index/key. The structure of the data stored
            // for each property is as follows:
            //
            //        tweenData = {
            //            style: {
            //                opacity: {
            //                    animationID: <animation/tween id>,
            //                    fromValues: [ ... ],
            //                    toValues: [ ... ],
            //                    tokens: [ ... ]
            //                }
            //            },
            //
            //            attribute: {
            //                // Data for attribute tweens are stored in this
            //                // dictionary. Like the style example above, the key
            //                // is the attribute name, and the value is an object
            //                // exactly like the one used in the style case above.
            //            },
            //
            //            property: {
            //                // Data for property tweens are stored in this
            //                // dictionary. Like the style example above, the key
            //                // is the property name, and the value is an object
            //                // exactly like the one used in the style case above.
            //            }
            //        }

            var td = Edge.$.data(ele, "tweenData"),
                tt,
                data;
            if (!td) {
                td = {};
                Edge.$.data(ele, "tweenData", td);
            }

            tt = td[tweenType];
            if (!tt) {
                tt = td[tweenType] = {};
            }

            data = tt[propertyName];
            if (!data) {
                data = tt[propertyName] = { animationID: -1 };
            }
            return data;
        }
    });

    Edge.PropertyTween = PropertyTween;

    Edge.Timeline.addTweenType("style", function (prop, ele, fromVal, toVal, opts) {
        return new PropertyTween("style", prop, ele, fromVal, toVal, opts);
    });
    AdobeEdge.Timeline.addTweenType("attribute", function (prop, ele, fromVal, toVal, opts) {
        return new PropertyTween("attribute", prop, ele, fromVal, toVal, opts);
    });
    AdobeEdge.Timeline.addTweenType("property", function (prop, ele, fromVal, toVal, opts) {
        return new PropertyTween("property", prop, ele, fromVal, toVal, opts);
    });     

    Edge.Timeline.addTweenProperty("volume", "property");
})(window.AdobeEdge);
(function(Edge){


    // Note: all functions or vars prefixed by '_' are to be considered to be non-public and should be only accessed
    // by the defining 'class' and its derived 'classes'.

    "use strict";

    var $ = Edge.$,/** @name UpdateFinalizer
     @description Register a set of handlers added by tweens (or other objects) during an update to be called when a timeline
     update is final. At the conclusion of the     update, all handlers are removed.
     When the timeline is complete, this UpdateFinalizer is removed.

     */

    UpdateFinalizer = function(timeline){
        this.handlers = {};
        this.timeline = timeline;
    };

    UpdateFinalizer.Register = function(timeline, id, handlerObject){
        var finalizer = timeline.updateFinalizer;
        if(typeof finalizer === 'undefined'){
            finalizer = new UpdateFinalizer(timeline);
            timeline.updateFinalizer = finalizer;
            timeline.addObserver(finalizer);
        }
        finalizer.handlers[id] = handlerObject;
    };

    UpdateFinalizer.unRegister = function(timeline, id){		
        var finalizer = timeline.updateFinalizer;
        if(typeof finalizer !== 'undefined') {
            delete finalizer.handlers[id];
		}
    };

    $.extend(UpdateFinalizer.prototype, {
        _finalizeUpdate : function(elapsed, context){
            var data = {elapsed:elapsed, context:context};
            var methodName = "onFinalUpdate";
            var h;
            for(h in this.handlers){
                if(this.handlers.hasOwnProperty(h)){
                    var obj = this.handlers[h];
                    // Note that we call the handler function with 'this' set to the handler object
                    if (obj[methodName])
                        obj[methodName](data);
                }
            }
			
			// TBD: Jim to review and potentially solve differently
			// does it matter that we don't call delete on each handler?
			// prevent a handlers leak
			this.handlers = {};
        },
        // Called by timeline notifyObservers
        postUpdate: function(tween, data){
            this._finalizeUpdate(data.elapsed, data.context);
        },
        // Called by timeline notifyObservers
        complete: function(data){
            if(this.timeline) {
                this.timeline.removeObserver(this);
			}
            this.timeline.updateFinalizer = undefined;
        }
        /*,
        applyTransform : function(updateData){
            // Note that this is called with 'this' set to the handler object
            var data = Edge.$.data(this.element, TransformTween.dataName);
            if ( data && updateData ) {
                TransformTween.applyTransform( this.element, data, data.tween, updateData.context );
            }
        }
        */

    });

    Edge.UpdateFinalizer = UpdateFinalizer;
})(window.AdobeEdge);
/**
 * Adobe Edge Animate - Symbol Trigger and Event Support
 */

// Copyright (c) 2013. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/*jslint plusplus:true, nomen: true, browser: true */
/*global window: false, document: false, CustomEvent: false, HTMLElement: false, console:false, alert: false, indent: false  */
/*properties EdgeAn, $, Symbol, makeId, triggerDict, _, variableValue, originalEvent, methodName, composition, extend,
 createEvent, initEvent, _getTimeline, addObserver, timeline, symbol, length, type, getComposition, compId, bindings,
 data, name, actions, sym, getSymbols, newSymbol, bindElementAction, bindTimelineAction, bindTriggerAction,
 bindSymbolAction, bindVariableAction, AnListeners, bind, EdgeAn$, find$, element, each, creationComplete, An$,
  eSA, executeSymbolAction*/
/*properties CustomEvent, bubbles, cancelable, dispatchEvent, Event, concat,
 console, log, prototype, slice, call, unshift, apply,
 test, splice, push, addEventListener, removeEventListener */
(function (Edge) {

    "use strict";

    var An = window.EdgeAn,
        $ = Edge.$,
        Symbol = Edge.Symbol,
        makeId = Edge.Symbol._makeUniqueID,
        triggerDict = Edge.triggerDict = {
            // These are intended to be called with 'this' being a symbol
            "timeline": function (actionFunc, unused, triggerEvent) { // , triggerData
                if (actionFunc) {
                    var tlProxy = {},
                        tl = this._getTimeline();

                    tlProxy[triggerEvent] = actionFunc;

                    tl.addObserver(tlProxy);
                }
            },
            // TODO supporting stuff for these not implemented yet
            // also, change order of tfunc params
            "element": function (actionFunc, selector, triggerEvent) {
                if (actionFunc) {
                    if (selector === "document") {
                        $(document).bind(triggerEvent, actionFunc);
                    } else if (selector === "window") {
                        $(window).bind(triggerEvent, actionFunc);
                    } else {
                        var re = /^\$\{/;
                        if (re.test(selector)) {
                            selector = selector.replace(re, '');
                            selector = selector.replace(/\}/, '');
                        }
                        var $ele = this.find$(selector);
                        if(!$ele) {
                            //Discard the binding right now, but continue processing 
                            //console.log("Error: Couldn't find the element: " + selector);
                            return;
                        }
                        $ele.bind(triggerEvent, actionFunc);
                    }
                }
            },
            "symbol": function (actionFunc, unused, triggerEvent) { //, triggerData
                if (actionFunc) {
                    var symProxy = {};
                    symProxy[triggerEvent] = actionFunc;
                    this.addObserver(symProxy);
                }
            }
        },
        binderObserver,
        newSymbolObserver;
           
    // We're only on modern browsers (IE9 and above)
    // So DOM3 events are available.
    $.Event = function (evtName) {
        if (Edge.supported.customEvent) {
            return new CustomEvent(evtName, {bubbles: true, cancelable: true});
        }
        // Fallback for no CustomEvent support
        var e = document.createEvent('Event');
        e.initEvent(evtName, true, true);
        return e;
    };
    
    $.event = {};
    $.event.special = {};    

    function bind(ele, eventName, listener) {
        var special = $.event.special[eventName];
        if (special && special.setup) {
            special.setup.call(ele, eventName, listener);
        }
        
        if(ele.addEventListener) ele.addEventListener(eventName, listener);
        else if(ele.attachEvent) ele.attachEvent(eventName, listener);
        
        var listeners = ele.AnListeners = ele.AnListeners || {};
        listeners[eventName] = listeners[eventName] || [];
        listeners[eventName].push(listener);
    }

    function unbind(ele, eventName, listener) {
        var special = $.event.special[eventName];
        if (special && special.teardown) {
            special.teardown.call(ele, eventName, listener);
        }
                
        var listeners = ele.AnListeners = ele.AnListeners || {},
            rememberedListener,
            i;
        rememberedListener = listeners[eventName] = listeners[eventName] || [];
        
        if(listener != null) {
            if(ele.removeEventListener) ele.removeEventListener(eventName, listener);
            else if(ele.detachEvent) ele.detachEvent(eventName, listener);
            
            for (i = listeners.length - 1; i >= 0; i--) {
                if (rememberedListener[i] === listener) {
                    listeners.splice(i, 1);
                }
            }
        } else if(eventName) {            
            listeners[eventName].forEach(function(l) {
                if(ele.removeEventListener) ele.removeEventListener(eventName, l);
                else if(ele.detachEvent) ele.detachEvent(eventName, l);
            });
            listeners[eventName] = [];                      
        }
    }
    
    $.extend(Edge.An$.prototype, {
        bind: function (eventName, listener) {            	
            this.each(function (index, ele) {
                bind(ele, eventName, listener);
            });
            return this;
        },
        unbind: function (eventName, listener) {            	
            this.each(function (index, ele) {
                unbind(ele, eventName, listener);
            });
            return this;
        },
        trigger: function(evt) {
            var $this = document;
            if(this[0]) $this = this[0];
            $this.dispatchEvent(evt);
            return this;
        }        
    });

    function _getActionCallbackFunc(sym, eventType, selectorOrTL, funcName) {
        var f = sym[funcName[0]],
            ff;

        function dispatchError(args) {

            if (args.length >= 2 && typeof args[0] === 'object' && typeof args[1] === 'object' && args[1].type !== 'onError') {
                var evt;
                evt = $.Event("onError");
                if (sym) {
                    evt.compId = sym.getComposition().compId;
                }
                evt.originalEvent = args[1];
                document.dispatchEvent(evt);
            }
            window.console.log("Javascript error in event handler! Event Type = " + eventType);
        }

        if (typeof f === "function") {
            if (eventType === 'element') {

                ff = function () {
                    var args;
                    args = Array.prototype.slice.call(arguments);
                    args.unshift(sym);
                    if (args.length >= 2 && typeof args[0] === 'object' && typeof args[1] === 'object' && args[1].type === 'compositionReady') {
                        // This is a hack but need a fix for multiple compositionReady messages when there are multiple comps in a page
                        // and today is last day of Preview 6 fixes
                        if (typeof args[1].compId === 'string' && typeof args[0].composition === 'object' && args[1].compId !== args[0].composition.id) {
                            return null;
                        }
                    }
                    try {
                        return f.apply(sym, args);
                    } catch (err) {
                        dispatchError(args);
                        return undefined;
                    }
                };
            } else if (eventType === 'timeline') {
                ff = function (tl, data) {
                    var args,
                        e;
                    if (data && data.methodName && /^trig_/.test(data.methodName)) {
                        // Triggers fire custom timeline events
                        e = $.Event("trigger");
                    } else {
                        e = $.Event(eventType);
                    }
                    if (data) {
                        $.extend(e, data);
                    }
                    e.timeline = tl;
                    args = Array.prototype.slice.call(arguments);
                    args.splice(0, 0, e);
                    args.unshift(sym);
                    try {
                        return f.apply(sym, args);
                    } catch (err) {
                        dispatchError(args);
                        return undefined;
                    }
                };
            } else if (eventType === 'symbol') {
                ff = function (sym, data) {
                    var args,
                        e,
                        variableValue;
                    if (data && data.methodName) {
                        e = $.Event(data.methodName);
                    } else {
                        e = $.Event(eventType);
                    }

                    if (data) {
                        $.extend(e, data);
                        if (data.variableValue) {
                            variableValue = data.variableValue;
                        }
                    }

                    args = Array.prototype.slice.call(arguments);
                    args.splice(0, 0, e, variableValue);
                    args.unshift(sym);
                    try {
                        return f.apply(sym, args);
                    } catch (err) {
                        dispatchError(args);
                        return undefined;
                    }
                };
            }
            return ff;
        }
        return null;
    }

    function _addBindingFromData(sym, bd) {
        var td = bd[0],
            tfunc = triggerDict[td[0]],
            afunc;
        /*if (td[0] === 'element') {
         var newEle = substituteVariables(td[1], sym.variableValues);
         if (newEle !== td[1]) {
         td = Edge.cloneJSONObject(td);
         td[1] = newEle;
         }
         }*/
        if (tfunc) {
            afunc = _getActionCallbackFunc(sym, td[0], td[1], bd.slice(1));
            if (afunc) {
                tfunc.apply(sym, [afunc].concat(td.slice(1)));
            }
        }
    }

    function _addBindingsFromData(sym, bindingData) {
        bindingData = bindingData || sym.data[sym.name].bindings || [];
        var cnt = bindingData.length,
            i,
            bd;
        for (i = 0; i < cnt; i++) {
            bd = bindingData[i];
            _addBindingFromData(sym, bd);
        }
    }

    function _addActionsFromData(sym, actionData) {
        actionData = actionData || sym.data[sym.name].actions || {};
        $.extend(sym, actionData); // this puts the actions right on object - this makes aSymbol.anAction() work and you can use 'this'
        // maybe putting it in Symbol.actions would be better to prevent collisions, then setting a member variable of actions to point to the Symbol
    }

    function binderCallback(sym, data) {
        _addActionsFromData(sym);
        _addBindingsFromData(sym);
    }

    binderObserver = {'creationComplete': binderCallback};

    function newSymbolCallback(comp, data) {
        var sym = data.symbol;
        sym.addObserver(binderObserver);
    }
    newSymbolObserver = {'newSymbol': newSymbolCallback};

    function bindHelper(compId, symbolName, elementOrTimelineSelector, eventName, eventFunction, bindType) {
        var symbolDefn = Edge.getComposition(compId).sym[symbolName],
            name = makeId("binding"),
            bd = [
                [bindType, elementOrTimelineSelector, eventName],
                name
            ],
            theComp,
            aSymbolInstances,
            instLen,
            symbolInstance,
            i,
            currSymName,
            actions;
        
        if(!symbolDefn)
            return; 

        symbolDefn.actions = symbolDefn.actions || {};
        symbolDefn.actions[name] = eventFunction;
        symbolDefn.bindings = symbolDefn.bindings || [];

        symbolDefn.bindings.push(bd);

        //patch any existing symbols

        theComp = Edge.getComposition(compId);
        if (!theComp) {
            return;
        }

        theComp.addObserver(newSymbolObserver);

        aSymbolInstances = theComp.getSymbols();
        if (aSymbolInstances) {
            instLen = aSymbolInstances.length;

            for (i = 0; i < instLen; i++) {
                symbolInstance = aSymbolInstances[i];
                currSymName = symbolInstance.name;
                if (symbolName === currSymName) {
                    actions = {};
                    actions[name] = eventFunction;
                    _addActionsFromData(symbolInstance, actions);
                    _addBindingFromData(symbolInstance, bd);
                }
            }
        }
    }

    Symbol.bindElementAction = function (compId, symbolName, elementSelector, eventName, eventFunction) {
        bindHelper(compId, symbolName, elementSelector, eventName, eventFunction, 'element');
    };

    Symbol.bindTimelineAction = function (compId, symbolName, unused, eventName, eventFunction) {
        bindHelper(compId, symbolName, unused, eventName, eventFunction, 'timeline');
    };

    Symbol.bindTriggerAction = function (compId, symbolName, unused, delay, triggerFunction) {
        var symbolDef = Edge.getComposition(compId).sym[symbolName],
            tl,
            customEventName,
            tlod;
        if (!symbolDef) {
            //Edge.logError( "$.Edge.Symbol.bindTriggerAction: symbol not found" );
            return;
        }

        tl = symbolDef.timeline ? symbolDef.timeline.data : null;

        if (!tl) {
            //Edge.logError( "$.Edge.Symbol.bindTriggerAction: timeline not found" );
            return;
        }

        customEventName = makeId("trig");
        tlod = [ customEventName, 'trigger', delay, customEventName];
        tl.push(tlod);
        //Mark timeline as dirty
        tl.dirty = true;
        bindHelper(compId, symbolName, unused, customEventName, triggerFunction, 'timeline');
        //Timeline rebuilt for all instances, now mark it as not dirty
        tl.dirty = false;        
    };

    Symbol.bindSymbolAction = function (compId, symbolName, eventName, eventFunction) {
        bindHelper(compId, symbolName, "", eventName, eventFunction, 'symbol');
    };

    Symbol.bindVariableAction = function (compId, symbolName, varName, eventFunction) {
        var eventName = "variableChanged:" + varName;
        bindHelper(compId, symbolName, "", eventName, eventFunction, 'symbol');
    };
    /*
     Symbol.bindVariableActionToSymbol = function (sym, varName, actionFunc) {
     var symbolInstance = Symbol.getSymbol(sym);
     if (!symbolInstance) {
     return;
     }

     varName = Symbol._parseVariableName(varName);

     var eventName = "variableChanged:" + varName;
     var name = Symbol._makeUniqueID();

     var bd = [
     ["symbol", "", eventName],
     name
     ];

     var aActions = {};
     aActions[name] = actionFunc;
     _addActionsFromData.call(symbolInstance, aActions);
     _addBindingFromData.call(symbolInstance, bd);
     };
     */
    $.extend(Symbol.prototype, {
        executeSymbolAction: function (e, data) {
            if (typeof data !== "object" || data.length < 3) {
                return;
            }
            // symInstanceSelector is data[1],
            var actionFunction = data[0],
                $ele = this.$(data[1]),
                args = data[2],
                symInstance;

            if (!$ele || $ele.length < 1) {
                return;
            }
            symInstance = Symbol.getSymbol($ele[0]);
            if (!symInstance || !actionFunction) {
                return;
            }

            if (!args || typeof args !== "object") {
                args = null;
            }

            symInstance[actionFunction].apply(symInstance, args);
        },
        //Alias for _executeSymbolAction used when writing minified content
        eSA: function (e, data) {
            this.executeSymbolAction(e, data);
        }
    });

})(window.AdobeEdge);
/*
* Based on http://jquerymobile.com
*
* Copyright 2010, 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
*/

//Copyright (c) 2011-2014. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
//

(function( Edge, window, undefined ) {
	"use strict";
	  	        
	if(!document.createEvent) return;
	    
    Edge.addTouchSupport = function() {
        var $ = Edge.$;
        var An$ = Edge.An$;
    
        $.fn = $.fn || {};
        
        // add new event shortcuts
        $.each(("touchstart touchmove touchend " +
            "swipe swipeleft swiperight " ).split( " " ), function(i, name) {
            An$.prototype[name] = $.fn[ name ] = function( fn ) {
                return fn ? this.bind( name, fn ) : this.trigger( name );
            };
    
            // jQuery < 1.8
            if ( $.attrFn ) {
                $.attrFn[ name ] = true;
            }
        });
    
        var supportTouch = "ontouchend" in document; // $.mobile.support.touch,
            var msTouch = !supportTouch && window.navigator.msPointerEnabled;
            var touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
            
        // also handles swipeleft, swiperight
        $.event.special.swipe = {
            scrollSupressionThreshold: 30, // More than this horizontal displacement, and we will suppress scrolling.
            durationThreshold: 1000, // More time than this, and it isn't a swipe.
            horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.
            verticalDistanceThreshold: 75,  // Swipe vertical displacement must be less than this.
    
            swipeEvent: $.Event("swipe"),
            swipeLeftEvent: $.Event("swipeleft"),
            swipeRightEvent: $.Event("swiperight"),
            
            setup: function() {
                if(this.setupDone) {
                    return;
                }

                var thisObject = this,
                    $this = $( thisObject );
    
                if(msTouch) {
                    $this.css("-ms-touch-action", "pan-y pinch-zoom double-tap-zoom");
                }
                $this.bind( touchStartEvent, function( event ) {
                    var data = event.touches ? event.touches[0] : (event.originalEvent.touches ? event.originalEvent.touches[0] : event),
                        start = {
                            time: ( new Date() ).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $( event.target )
                        },
                        stop;
    
                    function moveStopHandler (event) {
                        $this.unbind( touchStopEvent, moveStopHandler );
                        $this.unbind( touchMoveEvent, moveHandler );
    
                        if ( start && stop ) {
                            if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
                                Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
                                Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
    
                                $this.trigger( $.event.special.swipe.swipeEvent )
                                    .trigger( start.coords[0] > stop.coords[ 0 ] ? $.event.special.swipe.swipeLeftEvent : $.event.special.swipe.swipeRightEvent );
                            }
                        }
                        start = stop = undefined;                    
                    }
                    
                    function moveHandler( event ) {
                        if ( !start ) {
                            return;
                        }
    
                        var data = event.touches ? event.touches[0] : (event.originalEvent.touches ? event.originalEvent.touches[0] : event);
    
                        stop = {
                            time: (new Date()).getTime(),
                            coords: [data.pageX, data.pageY]
                        };
    
                        // prevent scrolling
                        if ( Math.abs(start.coords[0] - stop.coords[0] ) > $.event.special.swipe.scrollSupressionThreshold ) {
                            event.preventDefault();
                        }
                    }
    
                    $this.bind(touchMoveEvent, moveHandler).bind(touchStopEvent, moveStopHandler);
                });
                
                this.setupDone = true;                
            }
        };
        $.each({
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function( event, sourceEvent ) {
            $.event.special[ event ] = {
                setup: function() {
                    $( this ).bind( sourceEvent, $.noop );
                },
                teardown: function(ele, eventName, listener) {
                    $( ele ).unbind( sourceEvent );
                }                
            };
        });
    }
})(AdobeEdge, window);
/// an.subproperty-tween.js - version 0.2 - An Release 1.0
//
// Copyright (c) 2011-2014. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/***
 @name SubpropertyTween
 @class Defines a complex tween that can animate the multiple sub-properties of a complex CSS property.
 This defines a tween type of "subproperty' which can parse multiple properties with multiple types.
 It also extends the framework's Property setting for constructed dom elements for the supported subproperties.
 */

(function (Edge) {
	"use strict";
    
    var $ = Edge.$,
            PropertyTween = Edge.PropertyTween,
            UpdateFinalizer = Edge.UpdateFinalizer,
            subprop;
    
    var propTemplates = {
        'box-shadow': {
            def: 'box-shadow',
            '-webkit-box-shadow': "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(' '),
            '-moz-box-shadow': "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(' '),
            'box-shadow': "boxShadow.color boxShadow.offsetH boxShadow.offsetV boxShadow.blur boxShadow.spread boxShadow.inset".split(' ')
        },
        'text-shadow': {
            def: 'text-shadow',
            'text-shadow': ["textShadow.color", "textShadow.offsetH", "textShadow.offsetV", "textShadow.blur"] // using split costs bytes for less than 5 items
        },
        'filter': {
            def: '-webkit-filter',
            '-webkit-filter': "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(' '),
            '-moz-filter': "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(' '),
            'filter': "filter.invert filter.hue-rotate filter.contrast filter.saturate filter.brightness filter.sepia filter.grayscale filter.blur filter.drop-shadow.color filter.drop-shadow.offsetH filter.drop-shadow.offsetV filter.drop-shadow.blur".split(' ')
        },
        'background-size': {
            def: 'background-size',
            'background-size': ["background-size.x", "background-size.y"]
        },
        'background-position': {
            def: 'background-position',
            'background-position': ["background-position.x", "background-position.y"]
        }
    };

    // u: default units
    // i: index in dom declaration
    // j: subindex in dom declaration
    // cssProp: actual css property to set
    // domProp: name of parent prop field in dom. Defaults to camelized cssProp if not supplied
    var subpropLookup = {
        'boxShadow.offsetH': {cssProp: "box-shadow", type: "style", def: "0px", u: "px", i: 1},
        'boxShadow.offsetV': {cssProp: "box-shadow", type: "style", def: "0px", u: "px", i: 2},
        'boxShadow.blur': {cssProp: "box-shadow", type: "style", def: "0px", u: "px", i: 3},
        'boxShadow.spread': {cssProp: "box-shadow", type: "style", def: "0px", u: "px", i: 4},
        'boxShadow.color': {cssProp: "box-shadow", type: "color", def: "rgba(0,0,0,0)", i: 5},
        'boxShadow.inset': {cssProp: "box-shadow", def: "", i: 0},
        'textShadow.offsetH': {cssProp: "text-shadow", type: "style", def: "0px", u: "px", i: 1},
        'textShadow.offsetV': {cssProp: "text-shadow", type: "style", def: "0px", u: "px", i: 2},
        'textShadow.blur': {cssProp: "text-shadow", type: "style", def: "0px", u: "px", i: 3},
        'textShadow.color': {cssProp: "text-shadow", type: "color", def: "rgba(0,0,0,0)", i: 0},
        // Note that filter.drop-shadow is an array in dom declaration
        'filter.drop-shadow.color': {cssProp: "filter", type: "color", def: "rgba(0,0,0,0)", strReplace: "drop-shadow(%1", combinedNum: 4, i: 8},
        'filter.drop-shadow.offsetH': {cssProp: "filter", type: "style", def: "0px", u: "px", i: 9},
        'filter.drop-shadow.offsetV': {cssProp: "filter", type: "style", def: "0px", u: "px", i: 10},
        'filter.drop-shadow.blur': {cssProp: "filter", type: "style", def: "0px", strReplace: "%1)", u: "px", i: 11},
        'filter.grayscale': {cssProp: "filter", type: "style", def: "0", strReplace: "grayscale(%1)", i: 6},
        'filter.sepia': {cssProp: "filter", type: "style", def: "0", strReplace: "sepia(%1)", i: 5},
        'filter.saturate': {cssProp: "filter", type: "style", def: "1", strReplace: "saturate(%1)", i: 3},
        'filter.hue-rotate': {cssProp: "filter", type: "style", def: "0deg", strReplace: "hue-rotate(%1)", u: "deg", i: 1},
        'filter.invert': {cssProp: "filter", type: "style", def: "0", strReplace: "invert(%1)", i: 0},
        'filter.brightness': {cssProp: "filter", type: "style", def: "0", strReplace: "brightness(%1)", i: 4},
        'filter.contrast': {cssProp: "filter", type: "style", def: "1", strReplace: "contrast(%1)", i: 2},
        'filter.blur': {cssProp: "filter", type: "style", def: "0px", strReplace: "blur(%1)", u: "px", i: 7},
        'background-position.x': {cssProp: 'background-position', type: 'style', def: '0px', u: 'px', i: 2, domProp: 'fill'},
        'background-position.y': {cssProp: 'background-position', type: 'style', def: '0px', u: 'px', i: 3, domProp: 'fill'},
        'background-size.x': {cssProp: 'background-size', type: 'style', def: '100%', u: '%', i: 4, domProp: 'fill'},
        'background-size.y': {cssProp: 'background-size', type: 'style', def: '100%', u: '%', i: 5, domProp: 'fill'}
    };

    var subpropertyId = 1,
            funcs = {
                setValue:function (tt, prop, val) {
                    var data = Edge.$.data(this, subpropLookup[prop].cssProp);
                    data[prop] = val;
                },
                getValue:function (prop, tt) {
                    var data = Edge.$.data(this, subpropLookup[prop].cssProp);
                },
                setupForAnimation:function () {
                    var elements = this.getElementSet();
                    var tween = this;
                    elements.each(function () {
                        var data = Edge.$.data(this, tween.superProperty);
                        if (!data) {
                            // Get the current values on the element and save
                            data = tween.buildProp(this);
                            Edge.$.data(this, tween.superProperty, data);
                        }
                    });

                    PropertyTween.prototype.setupForAnimation.call(this);
                },
                buildProp:function (ele) {
                    var j;
                    var data = {};
                    var propName = this.superProperty;
                    
					// add the retrieved values
                    var props = Edge.getSubProps(ele, propName);
                    for (j in props) {
                        if (props.hasOwnProperty(j)) {
                            data[j] = props[j];
                        }
                    }
                    data.id = this.superProperty + subpropertyId;
                    subpropertyId += 1;
                    data.element = ele;
                    data.prop = propName;
                    data.onFinalUpdate = _applySubproperty;

                    return data;
                },
                update:function (elapsed, easingConst) {
                    PropertyTween.prototype.update.call(this, elapsed, easingConst);
                    var elements = this.getElementSet();
                    var tween = this;
                    var prop = this.property;
                    var tt = this.tweenType;

                    elements.each(function () {
                        // We only want to tween if the property data has a
                        // matching animation id. If the ids don't match, that
                        // means another animation has started which is modifying
                        // this same property.

                        var td = tween.getPropertyTweenData(this, tt, prop);
                        if (td.animationID !== tween.animationID) {
                            return;
                        }

                        var data = Edge.$.data(this, tween.superProperty);
                        data.timeline = tween.timeline;
                        data.tween = tween;
                        UpdateFinalizer.Register(tween.timeline, data.id, data);
                    });
                }
            };

    function SubpropertyTween (tweenType, property, elements, fromVal, val, opts) {
        if (subpropLookup[property] !== null) {
            this.superProperty = subpropLookup[property].cssProp;
            tweenType = subpropLookup[property].type;
            if (tweenType === "color") {
                if (Edge.ColorTween) {
                    $.extend(this, Edge.ColorTween.prototype);
                    $.extend(this, funcs);
                    Edge.ColorTween.call(this, tweenType, property, elements, fromVal, val, opts);
                }
                // TODO throw something if no color-tween
            } else {
                $.extend(this, PropertyTween.prototype);
                $.extend(this, funcs);
                Edge.PropertyTween.call(this, tweenType, property, elements,  fromVal, val, opts);
            }
        }
        // TODO: Error?
        this.name = "subpropertyTween";
    }

    SubpropertyTween.prototype.constructor = SubpropertyTween;
    
    function decomposeFilterSubprops(style, prop, propOrder) {
        // Just in case there is a color property, we need to strip out the spaces first...
        style = style.replace(/,\s*/g, ",");
        var styles = [], val;
        styles["filter.invert"] = (val = style.match(/invert\((.*?)\)/)) ? val[1] : null;
        styles["filter.hue-rotate"] = (val = style.match(/hue-rotate\((.*?)\)/)) ? val[1] : null;
        styles["filter.contrast"] = (val = style.match(/contrast\((.*?)\)/)) ? val[1] : null;
        styles["filter.saturate"] = (val = style.match(/saturate\((.*?)\)/)) ? val[1] : null;
        styles["filter.brightness"] = (val = style.match(/brightness\((.*?)\)/)) ? val[1] : null;
        styles["filter.sepia"] = (val = style.match(/sepia\((.*?)\)/)) ? val[1] : null;
        styles["filter.grayscale"] = (val = style.match(/grayscale\((.*?)\)/)) ? val[1] : null;
        styles["filter.blur"] = (val = style.match(/blur\((.*?)\)/)) ? val[1] : null;
        var dropShadow = (val = style.match(/drop-shadow\((.*?\)\s*.*?)\)/)) ? val[1].split(" ") : [null, null, null, null];
        styles["filter.drop-shadow.color"] = dropShadow[0];
        styles["filter.drop-shadow.offsetH"] = dropShadow[1];
        styles["filter.drop-shadow.offsetV"] = dropShadow[2];
        styles["filter.drop-shadow.blur"] = dropShadow[3];
        
        var returnValue = [];
        var i;
        for (i = 0; i < propOrder.length; i += 1) {
            returnValue[propOrder[i]] = styles[propOrder[i]] || subpropLookup[propOrder[i]].def;
        }
        
        return returnValue;        
    }

    function decomposeSubprops(style, prop, propOrder) {
        // Just in case there is a color property, we need to strip out the spaces first...
        style = style.replace(/,\s*/g, ",");
        var styles = style.split(" ");
        var returnValue = [];
        var i;
        for (i = 0; i < propOrder.length; i += 1) {
            returnValue[propOrder[i]] = styles[i] || subpropLookup[propOrder[i]].def;
        }
        return returnValue;
    }

    function getSubProps(ele, prop) {
        var $ele = $(ele);
        var style, i;
        for (i in propTemplates[prop]) {
            if (propTemplates[prop].hasOwnProperty(i)) {
                style = $ele.css(i);
                if (style && style !== "" && style !== "none") {
                    if(prop == "filter") return decomposeFilterSubprops(style, prop, propTemplates[prop][i]);
                    return decomposeSubprops(style, prop, propTemplates[prop][i]);
                }
            }
        }

        return [];
    }
    Edge.getSubProps = getSubProps;

    function getSubType (s) {
        return subpropLookup[s] ? subpropLookup[s].type : undefined;
    }

    SubpropertyTween.getSubType = getSubType;

    function getStyle (s) {
        return subpropLookup[s] ? subpropLookup[s].cssProp : undefined;
    }

    SubpropertyTween.getStyle = getStyle;

    SubpropertyTween.applySubproperty = function (ele, data, tween) {
        var val, prop, i, subVal,
                $ele = $(ele);

        // Set up the CSS string to set
        // loop through all the browser specific css props and set them
        for (prop in propTemplates[data.prop]) {
            if (prop !== "def" && propTemplates[data.prop].hasOwnProperty(prop)) {
                val = "";
                var combinedSubIsDefault = true;
                for (i = 0; i < propTemplates[data.prop][prop].length; i += 1) {
                    subVal = data[propTemplates[data.prop][prop][i]];
                    if (subVal === undefined) {
                        subVal = subpropLookup[propTemplates[data.prop][prop][i]].def;
                    }
                    if ("combinedNum" in subpropLookup[propTemplates[data.prop][prop][i]]) {
                        combinedSubIsDefault = true;
                        for (var j = i; j < i + subpropLookup[propTemplates[data.prop][prop][i]].combinedNum; j++) {
                            if (data[propTemplates[data.prop][prop][j]] !== undefined && data[propTemplates[data.prop][prop][j]] != subpropLookup[propTemplates[data.prop][prop][j]].def) {
                                combinedSubIsDefault = false;
                            }
                        }
                    }
                    if (!propTemplates[data.prop][prop][i].match(/^filter./) || (subVal != subpropLookup[propTemplates[data.prop][prop][i]].def || !combinedSubIsDefault)) {
                        if ("strReplace" in subpropLookup[propTemplates[data.prop][prop][i]]) {
                            subVal = subpropLookup[propTemplates[data.prop][prop][i]].strReplace.replace("%1", subVal);
                        }
                        val += subVal;
                        if (i !== propTemplates[data.prop][prop].length - 1) {
                            val += " ";
                        }
                    }
                }
                if ((window.edge_authoring_mode && prop === propTemplates[data.prop].def) || !window.edge_authoring_mode) {
                    $ele.css(prop, val);
                }
            }
        }

        if (tween && tween.notifier.obs.length) {
            tween.notifyObservers("onUpdate", {elapsed:0, easingConst:0, property:prop, value:val, element:$ele[0]});
        }
    };

    function _applySubproperty () {
        // Note that this is called with 'this' set to the handler object
        var data = Edge.$.data(this.element, this.prop);
        if (data) {
            SubpropertyTween.applySubproperty(this.element, data, data.tween);
        }
    }

    // Monkey patch for Prop's apply method
    function applySubprop ($ele, val) {
        var ele = $ele[0],
                prop = this.name;

        var data = Edge.$.data(ele, subpropLookup[prop].cssProp);
        if (!data) {
            data = funcs.buildProp.call({superProperty:subpropLookup[prop].cssProp}, ele);
            Edge.$.data(ele, subpropLookup[prop].cssProp, data);
        }
        data[prop] = val;
        data.onFinalUpdate.call({element:ele, prop:subpropLookup[prop].cssProp});
    }


    Edge.SubpropertyTween = SubpropertyTween;

    var subpropertyTweenName = "subproperty";
    Edge.Timeline.addTweenType(subpropertyTweenName, function (prop, ele, fromVal, toVal, opts) {
        return new SubpropertyTween(subpropertyTweenName, prop, ele, fromVal, toVal, opts);
    });

    // Now register all our subproperty names
    var defn, sp;

    for (subprop in subpropLookup) {
        defn = {};
        if (subpropLookup.hasOwnProperty(subprop)) {
            Edge.Timeline.addTweenProperty(subprop, subpropertyTweenName);
            sp = subpropLookup[subprop];
            defn[subprop] = {
                f:sp.domProp || Edge.camelize(sp.cssProp),
                i:sp.i,
                j:sp.j,
                def:sp.def
            };
            if (subpropLookup[subprop].u) {
                defn[subprop].u = subpropLookup[subprop].u;
            }

            Edge.defineProps(defn);
            Edge._.p[subprop].apply = applySubprop;
        }
    }

})(window.AdobeEdge);
/// an.transform-tween.js - version 0.2 - An Release 2.0
//
// Copyright (c) 2011. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/***
 @name TransformTween
 @class Defines a tween that can separately animate the components of a CSS3 3d transform (later
 improvements are planned to support 2d transforms on browsers that don't support 3d). This defines a tween type of
 "transform' which permits the separate animation of the following transform properties:
 translateX, translateY, translateZ, rotateX, rotateY, rotateZ, skewX, skewY, scaleX, scaleY, and scaleZ.
 The individual component functions are combined in a single transform on each update, in the order just listed.
 */
/*jslint regexp: true */
(function (Edge) {
    "use strict";

    var $ = Edge.$,
        PropertyTween = Edge.PropertyTween,
        UpdateFinalizer = Edge.UpdateFinalizer,
        asin = Math.asin,
        sin = Math.sin,
        cos = Math.cos,
        tan = Math.tan,
        atan2 = Math.atan2,
        deg2Rad = Math.PI / 180.0,
        rad2Deg = 180.0 / Math.PI,
        i,
        sSubpropNames = 'translateX translateY translateZ scaleX scaleY rotateX rotateY rotateZ skewX skewY',
        subpropNames = sSubpropNames.split(' '),
        supported = Edge.supported = Edge.supported || {},
        TransformIdRoot = "transform_",
        TransformId = 1,
        canonOrder = {
            translate3d: 0,
            translate: 0,
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotate: 1,
            rotateZ: 1,
            rotateX: 1,
            rotateY: 1,
            rotate3d: 1,
            skew: 2,
            skewX: 2,
            skewY: 2,
            scale3d: 3,
            scale: 3,
            scaleX: 3,
            scaleY: 3,
            scaleZ: 3,
            perspective: 4
        },
		isWebkit = 'webkitAppearance' in document.documentElement.style;;

    supported.cssTransform = Edge.isSupported(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);
    supported.cssTransform3d = Edge.isSupported(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']);

    Edge.An$.prototype.hasClass = Edge.An$.prototype.hasClass || function (cls) {
        if (this[0]) {
            var className = this[0].className || "",
                classNames = className.split(/\s+/),
                i;
            for (i = 0; i < classNames.length; i += 1) {
                if (cls === classNames[i]) {
                    return true;
                }
            }

        }
        return false;
    };
    // prop, ele, fromVal, toVal, opts
    function TransformTween(tweenType, property, elements, fromVal, val, opts) {
        Edge.PropertyTween.call(this, tweenType, property, elements, fromVal, val, opts);
        this.name = "transformTween";

    }

    TransformTween.removeData = function (ele) {
        var data = Edge.$.data(ele, TransformTween.dataName);
        if (data) {
            if (data.timeline) {
                UpdateFinalizer.unRegister(data.timeline, data.id);
            }
            Edge.$.data(ele, TransformTween.dataName, undefined);
        }
    };

    function getNumber(numWithUnits) {
        var num = 0;
        if (typeof numWithUnits === 'string') {
            num = parseFloat(numWithUnits.replace(/[a-zA-Z%]+$/, ""));
        } else if (typeof numWithUnits === 'number') {
            num = numWithUnits;
        }
        return num;
    }
    TransformTween.getNumber = getNumber;

    TransformTween.splitUnits = Edge.splitUnits;

    function formatNumber(num) {
        if (num !== 0 && Math.abs(num) < 1e-6) {
            return num.toFixed(6);
        }
        return num.toString();
    }

    function combineTranslation(parentDim, translate1, translate2) {
        if (translate1 === undefined) {
            return translate2;
        }
        if (translate2 === undefined) {
            return translate1;
        }
        var number1 = getNumber(translate1),
            number2 = getNumber(translate2),
            units1,
            units2,
            units;
        if (!number1) {
            return translate2;
        }
        if (!number2) {
            return translate1;
        }

        units1 = Edge.splitUnits(translate1).units;
        units2 = Edge.splitUnits(translate2).units;
        units = units1;

        if (units1 !== units2) {
            if (units1 === '%') {
                units = units2;
                number1 = number1 / 100 * parentDim;
            }
            if (units2 === '%') {
                number2 = number2 / 100 * parentDim;
            }
        }
        return number1 + number2 + units;
    }

    TransformTween.applyTransform = function (ele, data, tween, opts) {
        if (Edge.applyCount !== undefined) {
            Edge.applyCount += 1;
        }

        var $ele = $(ele),
            val,
            forceZ = true,
            prop = 'transform',
            translateX,
            translateY,
            supports3d,
            num,
            ua,
            rotateX,
            rotateY,
            rotateZ,
            scaleX,
            scaleY;

        if (opts) {
            forceZ = !opts.dontForceZ;
        }

        translateX = combineTranslation(1, data.translateX, data.motionTranslateX);
        translateY = combineTranslation(1, data.translateY, data.motionTranslateY);
        rotateZ = combineTranslation ( 1, data.rotateZ, data.motionRotateZ);
        
        supports3d = Edge.supported.cssTransform3d;

        if (isWebkit) {
            // Z transforms make some Android browsers sick, so don't write out unless necessary
            val = "translate(" + translateX + "," + translateY + ")";
            num = getNumber(data.translateZ);
            if ((num !== 0 || forceZ) && supports3d) {
                val += " translateZ(" + data.translateZ + ")";
            }
            val += " rotate(" + rotateZ + ") "; // don't call it rotateZ - android gets ill

            if (supports3d) {
                num = getNumber(data.rotateY);
                if (num !== 0) {
                    val += " rotateY(" + data.rotateY + ")";
                }

                num = getNumber(data.rotateX);
                if (num !== 0) {
                    val += " rotateX(" + data.rotateX + ")";
                }
            }

            if (data.skewX && data.skewX !== "0deg") {
                val += " skewX(" + data.skewX + ") ";
            }
            if (data.skewY && data.skewY !== "0deg") {
                val += " skewY(" + data.skewY + ") ";
            }

            val += " scale(" + data.scaleX + "," + data.scaleY + ") ";

            num = getNumber(data.scaleZ);
            if (num !== 1 && supports3d) {
                val += " scaleZ(" + data.scaleZ + ")";
            }

            ua = navigator.userAgent;

            // Don't do this in tool!
            if (!window.edge_authoring_mode && supports3d) {
                $ele.css('-webkit-transform-style', 'preserve-3d');
            }

            $ele.css('-webkit-transform', val);

            if (tween && tween.notifier.obs.length) {
                tween.notifyObservers("onUpdate", { elapsed: 0, easingConst: 0, property: prop, value: val, element: $ele[0] });
            }

        } else {
            rotateX = getNumber(data.rotateX);
            rotateY = getNumber(data.rotateY);
            scaleX = data.scaleX * cos(deg2Rad * rotateY);
            scaleY = data.scaleY * cos(deg2Rad * rotateX);

            val = "translate(" + translateX + "," + translateY + ")";
            val += " rotate(" + rotateZ + ")";
            if (data.skewX && data.skewX !== "0deg") {
                val += " skewX(" + data.skewX + ") ";
            }
            if (data.skewY && data.skewY !== "0deg") {
                val += " skewY(" + data.skewY + ") ";
            }
            val += " scale(" + scaleX + "," + scaleY + ")";

            $ele.css('-moz-transform', val);

            $ele.css('-o-transform', val);

            $ele.css('-ms-transform', val);// This is here in case MS changes ie9 for bug 8346

            $ele.css('msTransform', val); // work around jquery bug #8346 - IE9 uses wrong camel case
            if (tween && tween.notifier.obs.length) {
                tween.notifyObservers("onUpdate", { elapsed: 0, easingConst: 0, property: prop, value: val, element: $ele[0] });
            }
        }
        $ele.css("transform", val);
    };


    TransformTween.dataName = "EdgeTransformData";
    $.extend(TransformTween.prototype, PropertyTween.prototype);
    $.extend(TransformTween.prototype, {

        constructor: TransformTween,

        setup: function (timeline) {
            this.timeline = timeline;
            this.updateTriggered = false;
        },
        setValue: function (tt, prop, val) {
            var data = Edge.$.data(this, TransformTween.dataName);
            data[prop] = val;
        },
        getValue: function (prop, tt) {
            var data = Edge.$.data(this, TransformTween.dataName);
        },
        setupForAnimation: function () {
            var elements = this.getElementSet(),
                tween = this,
                data;
            elements.each(function () {
                //var $this = $(this);
                data = Edge.$.data(this, TransformTween.dataName);
                if (!data) {
                    // Get the current values on the element and save
                    data = tween.buildTransformData(this);
                    Edge.$.data(this, TransformTween.dataName, data);
                }
            });

            PropertyTween.prototype.setupForAnimation.call(this);

        },
        update: function (elapsed, easingConst) {
            PropertyTween.prototype.update.call(this, elapsed, easingConst);
            var elements = this.getElementSet(),
                tween = this,
                prop = this.property,
                tt = this.tweenType;

            elements.each(function () {
                // We only want to tween if the property data has a
                // matching animation id. If the ids don't match, that
                // means another animation has started which is modifying
                // this same property.

                var td = tween.getPropertyTweenData(this, tt, prop),
                    data;
                if (td.animationID !== tween.animationID) {
                    return;
                }

                data = Edge.$.data(this, TransformTween.dataName);
                data.timeline = tween.timeline;
                data.tween = tween;
                UpdateFinalizer.Register(tween.timeline, data.id, data);
            });
        },
        buildTransformData: function (ele) {

            var data = Edge.parseCanonicalTransform(ele);
            if (!data) {
                data = {};
                data.translateX = "0px";
                data.translateY = "0px";
                data.translateZ = "0px";
                data.scaleX = 1;
                data.scaleY = 1;
                data.scaleZ = 1;
                data.rotateX = "0deg";
                data.rotateY = "0deg";
                data.rotateZ = "0deg";
                data.skewXZ = 0;
                data.skewXY = 0;
                data.skewYZ = 0;
                data.skewX = '0deg';
                data.skewY = '0deg';
                if (data.matrix) {
                    delete data.matrix;
                }
            }
            if (data === null) {
                data = {};
            }

            data.id = TransformIdRoot + TransformId;
            TransformId += 1;
            data.element = ele;
            data.onFinalUpdate = UpdateFinalizer.prototype.applyTransform;

            return data;
        },
        buildDefaultTransformData: function (ele) {
            var data = {};
            data.translateX = "0px";
            data.translateY = "0px";
            data.translateZ = "0px";
            data.scaleX = 1;
            data.scaleY = 1;
            data.scaleZ = 1;
            data.rotateX = "0deg";
            data.rotateY = "0deg";
            data.rotateZ = "0deg";
            data.skewXZ = 0;
            data.skewXY = 0;
            data.skewYZ = 0;
            data.skewX = '0deg';
            data.skewY = '0deg';

            data.id = TransformIdRoot + TransformId;
            TransformId += 1;
            data.element = ele;
            data.onFinalUpdate = UpdateFinalizer.prototype.applyTransform;

            return data;
        }
        // End of TransformTween extend
    });

    function getTransform(ele) {
        var $ele = $(ele),
            style = $ele[0].style,
            xform;
        if (isWebkit) {
            xform = $ele[0].style.webkitTransform;
            if (!xform) {
                xform = $ele.css("-webkit-transform");
            }
        }

        if (xform) {
            return xform;
        }

        xform = $ele[0].style.msTransform;
        if (!xform) {
            xform = $ele.css("-ms-transform");
        }
        if (!xform) {
            xform = $ele.css("msTransform");
        }
        if (!xform) {
            xform = style.MozTransform;
        }
        if (!xform) {
            xform = style["-moz-transform"];
        }
        if (!xform) {
            xform = $ele.css("-moz-transform");
        }
        if (!xform) {
            xform = style.oTransform;
        }
        if (!xform) {
            xform = $ele.css("-o-transform");
        }
        if (!xform) {
            xform = style.transform;
        }
        if (!xform) {
            xform = $ele.css("transform");
        }

        return xform || "";
    }

    function parseCanonicalTransform(ele, xformString) {
        var xform = typeof xformString === 'string' ? xformString : Edge.getTransform(ele),
            re = /(\w+\s*\([^\)]*\))/g,
            funcs = xform.match(re),
            found = {},
            hiWater = 0,
            data = {},
            i,
            func,
            params,
            angle;

        if (!funcs) {
            return null;
        }

        data.translateX = "0px";
        data.translateY = "0px";
        data.translateZ = "0px";
        data.scaleX = 1;
        data.scaleY = 1;
        data.scaleZ = 1;
        data.rotateX = "0deg";
        data.rotateY = "0deg";
        data.rotateZ = "0deg";
        data.skewXZ = 0;
        data.skewXY = 0;
        data.skewYZ = 0;
        data.skewX = '0deg';
        data.skewY = '0deg';

        for (i = 0; i < funcs.length; i += 1) {
            func = funcs[i].match(/\w+/);
            if (found[func[0]] || canonOrder[func[0]] < hiWater) {
                return null;
            }
            params = funcs[i].match(/\([^\)]*\)/);
            params = params[0].replace(/[\(\)]/g, '');
            params = params.split(',');
            switch (func[0]) {
            case ('matrix'):
                return null;
            case ('translate3d'):
                data.translateX = params[0];
                data.translateY = params.length > 1 ? params[1] : '0px';
                data.translateZ = params.length > 2 ? params[2] : '0px';

                found.translate3d = found.translate = found.translateX = found.translateY = found.translateZ = true;
                break;
            case ('translate'):
                data.translateX = params[0];
                data.translateY = params.length > 1 ? params[1] : '0px';

                found.translate3d = found.translate = found.translateX = found.translateY = true;
                break;
            case ('translateX'):
                data.translateX = params[0];

                found.translate3d = found.translate = found.translateX = true;
                break;
            case ('translateY'):
                data.translateY = params[0];

                found.translate3d = found.translate = found.translateY = true;
                break;
            case ('translateZ'):
                data.translateZ = params[0];

                found.translate3d = found.translateZ = true;
                break;
            case ('rotate3d'):
                found.rotate3d = found.rotate = found.rotateX = found.rotateY = found.rotateZ = true;
                return null;
            case ('rotateX'):
                data.rotateX = params[0];
                found.rotate3d = found.rotateX = true;
                break;
            case ('rotateY'):
                data.rotateY = params[0];
                found.rotate3d = found.rotateY = true;
                break;
            case ('rotateZ'):
            case ('rotate'):
                data.rotateZ = params[0];
                found.rotate3d = found.rotate = found.rotateZ = true;
                break;
            case ('skew'):
                data.skewX = params[0];
                data.skewY = params.length > 1 ? params[1] : '0px';
                found.skew = found.skewX = found.skewY = true;
                break;
            case ('skewX'):
                data.skewX = params[0];
                found.skew = found.skewX = true;
                break;
            case ('skewY'):
                data.skewY = params[0];
                found.skew = found.skewY = true;
                break;
            case ('scale3d'):
                // Note that according to spec y and z default to 1 in scale3d, but y defaults to the x value in scale!
                data.scaleX = params[0];
                data.scaleY = params.length > 1 ? params[1] : 1;
                data.scaleZ = params.length > 2 ? params[2] : 1;

                found.scale3d = found.scale = found.scaleX = found.scaleY = found.scaleZ = true;
                break;
            case ('scale'):
                data.scaleX = params[0];
                data.scaleY = params.length > 1 ? params[1] : params[0];
                found.scale = found.scaleX = found.scaleY = true;
                break;
            case ('scaleX'):
                data.scaleX = params[0];
                found.scale3d = found.scale = found.scaleX = true;
                break;
            case ('scaleY'):
                data.scaleY = params[0];
                found.scale3d = found.scale = found.scaleY = true;
                break;
            case ('scaleZ'):
                data.scaleZ = params[0];
                found.scale3d = found.scaleZ = true;
                break;
            case ('perspective'):
                found.perspective = true;
                break;
            }
        }
        return data;
    }

    Edge.getTransform = getTransform;
    Edge.parseCanonicalTransform = parseCanonicalTransform;
    Edge.TransformTween = TransformTween;

    $.extend(UpdateFinalizer.prototype, {
        applyTransform: function (updateData) {
            // Note that this is called with 'this' set to the handler object
            var data = Edge.$.data(this.element, TransformTween.dataName);
            if (data && updateData) {
                TransformTween.applyTransform(this.element, data, data.tween, updateData.context);
            }
        }

    });

    /* transformSubprop is only here to work properly with use strict */
    function transformSubprop() {
    }

    transformSubprop.applySubprop = function ($ele, val) {
        var ele = $ele[0],
            prop = this.name,
            data = TransformTween.prototype.buildTransformData(ele);
        data[prop] = val;
        TransformTween.applyTransform(ele, data, null, {});
    };

    Edge.Timeline.addTweenType("transform", function (prop, ele, fromVal, toVal, opts) {
        return new TransformTween("transform", prop, ele, fromVal, toVal, opts);
    });

    for (i = 0; i < subpropNames.length; i += 1) {
        Edge.Timeline.addTweenProperty(subpropNames[i], 'transform');
    }

    //   subpropNames = 'translateX translateY translateZ scaleX scaleY rotateX rotateY rotateZ skewX skewY'

    Edge.defineProps({
        translateX: {
            f: 'transform',
            i: 0,
            j: 0,
            u: "px"
        },
        translateY: {
            f: 'transform',
            i: 0,
            j: 1,
            u: "px"
        },
        translateZ: {
            f: 'transform',
            i: 0,
            j: 2,
            u: "px"
        },
        // Notice that rotate is in the order [z, x, y] - this saves 4 bytes for the majority of usages
        rotateZ: {
            f: 'transform',
            i: 1,
            j: 0,
            u: "deg"
        },
        rotateX: {
            f: 'transform',
            i: 1,
            j: 1,
            u: "deg"
        },
        rotateY: {
            f: 'transform',
            i: 1,
            j: 2,
            u: "deg"
        },
        skewX: {
            f: 'transform',
            i: 2,
            j: 0,
            u: "deg"
        },
        skewY: {
            f: 'transform',
            i: 2,
            j: 1,
            u: "deg"
        },
        scaleX: {
            f: 'transform',
            i: 3,
            j: 0
        },
        scaleY: {
            f: 'transform',
            i: 3,
            j: 1
        },
        scaleZ: {
            f: 'transform',
            i: 3,
            j: 2
        }
    });

    /*jslint nomen: true */
    for (i = 0; i < subpropNames.length; i += 1) {
        Edge._.p[subpropNames[i]].apply = transformSubprop.applySubprop;
    }

})(window.AdobeEdge);
/// edge.color-tween.js - version 0.2 - An Release 1.0
//
// Copyright (c) 2011. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/***
 @name ColorTween
 @class Defines a tween that can animate the background-color and color properties in rgb or hsl color space.
 This defines a tween type of "color' which can parse color properties in RGB or HSL css formats and convert them
 to the desired animation color space - HSL or RGB. (It is also planned to later support color names as css property
 values.
 */

(function (Edge) {

    "use strict";

    var $ = Edge.$,
        PropertyTween = Edge.PropertyTween,
        sPropNames = 'color background-color',
        propNames = sPropNames.split(' '),
        i,
        supportTested = false,
        supportRGB = false,
        supportHSL = false,
        supportRGBA = false,
        supportHSLA = false,
        oneThird = 1.0 / 3.0,
        oneSixth = 1.0 / 6.0,
        twoThirds = 2.0 / 3.0;

    function testSupport() {
        if (!supportTested) {

            var ele = document.createElement("div"), $ele = $(ele),
                val,
                transparent;
            $ele.css("background-color", "transparent");
            transparent = $ele.css("background-color");
            $ele.css("background-color", "rgb(100, 100, 100)");
            val = $ele.css("background-color");
            supportRGB = val !== transparent;

            $ele.css("background-color", "transparent");
            $ele.css("background-color", "hsl(100, 100%, 100%)");
            val = $ele.css("background-color");
            supportHSL = val !== transparent;

            $ele.css("background-color", "transparent");
            $ele.css("background-color", "rgba(100, 100, 100,.5)");
            val = $ele.css("background-color");
            supportRGBA = val !== transparent;

            $ele.css("background-color", "transparent");
            $ele.css("background-color", "hsla(100, 100%, 100%, .5)");
            val = $ele.css("background-color");
            supportHSLA = val !== transparent;

            supportTested = true;
        }
    }

    function ColorTween(tweenType, property, elements, fromVal, val, opts) {
        Edge.PropertyTween.call(this, tweenType, property, elements, fromVal, val, opts);
        this.name = "colorTween";
        testSupport();
    }

    $.extend(ColorTween.prototype, PropertyTween.prototype);
    $.extend(ColorTween.prototype, {

        constructor: ColorTween,

        getValue: function (prop, tt) {
            return $(this).css(prop);
        },
        setValue: function (tt, prop, val) {
            $(this).css(prop, val);
        },
        parseValue: function (val) {
            var colorValueObj = Edge.parseColorValue(val),
                values,
                colorFn,
                patternRGB = /rgb/gi,
                patternHSL = /hsl/gi,
                valueRGB,
                valueHSL,
                opacity;

            if (!colorValueObj || !colorValueObj.colorFunction || !colorValueObj.values) {
                return;
            }

            values = colorValueObj.values;

            colorFn = colorValueObj.colorFunction;

            if (colorFn.match(patternRGB)) {
                if (this.animationColorSpace && this.animationColorSpace === 'HSL') {
                    valueRGB = {r: values[0], g: values[1], b: values[2]};
                    valueHSL = Edge.rgbToHSL(valueRGB);
                    if (!valueHSL) {
                        values = [];
                    } else if (values.length > 3) {
                        opacity = values[3];
                        values = [valueHSL.h, valueHSL.s, valueHSL.l, opacity];
                    } else {
                        values = [valueHSL.h, valueHSL.s, valueHSL.l];
                    }
                } else if (!this.animationColorSpace) {
                    this.animationColorSpace = 'RGB';
                } else if (this.animationColorSpace !== 'RGB') {
                    //Unexpected value, Not yet implemented
                    return values;
                }
            } else if (colorFn.match(patternHSL)) { //HSL
                if (this.animationColorSpace && this.animationColorSpace === 'RGB') {
                    valueHSL = {h: values[0], s: values[1], l: values[2]};
                    valueRGB = Edge.hslToRGB(valueHSL);
                    if (!valueRGB) {
                        values = [];
                    } else if (values.length > 3) {
                        opacity = values[3];
                        values = [valueRGB.r, valueRGB.g, valueRGB.b, opacity];
                    } else {
                        values = [valueRGB.r, valueRGB.g, valueRGB.b];
                    }
                } else if (!this.animationColorSpace) {
                    this.animationColorSpace = 'HSL';
                } else if (this.animationColorSpace !== 'HSL') {
                    //Unexpected value, Not yet implemented
                    return values;
                }

            }

            if (values.length === 3) {
                values[3] = 1; // Normalize to rgba or hsla, set the opacity to 1
            }

            return values;
        },
        formatValue: function (values) {
            testSupport();
            if (!values) {
                return;
            }

            var formattedValue,
                colorFn,
                val,
                r,
                g,
                b,
                rgb;
            if (this.animationColorSpace === 'HSL' && supportHSLA) {
                colorFn = 'hsl';
                if (values.length === 4 && supportHSLA) {
                    formattedValue = colorFn + 'a(' + values[0] + ',' + values[1] + '%,' + values[2] + '%,' + values[3] + ')';
                } else {
                    formattedValue = colorFn + '(' + values[0] + ',' + values[1] + '%,' + values[2] + '%)';
                }
            } else if (supportRGBA) {
                colorFn = 'rgb';
                if (values.length === 4 && supportRGBA) {
                    formattedValue = colorFn + 'a(' + values[0] + '%,' + values[1] + '%,' + values[2] + '%,' + values[3] + ')';
                } else {
                    formattedValue = colorFn + '(' + values[0] + '%,' + values[1] + '%,' + values[2] + '%)';
                }
            } else {
                // Downlevel support
                r = values[0];
                g = values[1];
                b = values[2];
                if (this.animationColorSpace === 'HSL') {
                    rgb = Edge.hslToRGB({h: values[0], g: values[1], b: values[2]});
                    r = rgb.r;
                    g = rgb.g;
                    b = rgb.b;
                }
                r *= 255 / 100;
                g *= 255 / 100;
                b *= 255 / 100;
                val = Math.floor(r) * 256 * 256 + Math.floor(g) * 256 + Math.floor(b);
                formattedValue = "#" + val.toString(16);
            }
            return formattedValue;
        }
    });

    Edge.ColorTween = ColorTween;

    Edge.Color = { formatValue: ColorTween.prototype.formatValue, parseValue: ColorTween.prototype.parseValue };

    Edge.parseColorValue = function (val) {
        if (!val) {
            return;
        }

        var values = [],

            colorFn,
            params,
        // Tests for #ffffff
            colorExpHex6 = /^\s*#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})\s*$/,
        // Tests for #fff
            colorExpHex3 = /^\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])\s*$/,
            patternRGB = /rgb/gi,
            patternHSL = /hsl/gi,
            i,
            splitParams,
            colorValueObj;

        params = colorExpHex6.exec(val);
        if (params) {
            values = [((parseInt(params[1], 16)) / 255) * 100, ((parseInt(params[2], 16)) / 255) * 100, ((parseInt(params[3], 16)) / 255) * 100];
            colorFn = 'rgb';
        } else {
            params = colorExpHex3.exec(val);
            if (params) {
                values = [((parseInt(params[1] + params[1], 16)) / 255) * 100, ((parseInt(params[2] + params[2], 16)) / 255) * 100, ((parseInt(params[3] + params[3], 16)) / 255) * 100];
                colorFn = 'rgb';
            } else if (val === "transparent") {
                values = [0, 0, 0, 0];
                colorFn = 'rgb';
            }
        }

        if (!colorFn) {
            colorFn = val.toString().match(/\w+/);
            if ($.isArray(colorFn)) {
                colorFn = colorFn[0];
            } else if (!colorFn) {
                colorFn = "";
            }

            params = val.toString().match(/\([\d%,\.\s]*\)/);
            if (params && params.length > 0) {
                params = params[0].replace(/[\(\)]/g, '');
            }
        }

        if (values.length === 0) {
            if (colorFn.match(patternRGB)) {
                //Tests for % or ints
                // Test for numbers
                splitParams = /^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(params);
                if (splitParams && splitParams.length >= 4) {
                    for (i = 0; i < 3; i += 1) {
                        // if the number is an integer (from 0 -255) normalize to percent
                        values[i] = (splitParams[i + 1] / 255) * 100;
                    }
                    if (splitParams.length > 4) {
                        if (!splitParams[4]) {
                            splitParams[4] = 1;
                        }
                        values[3] = splitParams[4]; // opacity
                    }
                } else {
                    // Tests for float %
                    params = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(params);
                    if (params && params.length >= 4) {
                        /// Get rid of any unnecessary data captured
                        if (params.length >= 5) {
                            params.length = 5;
                            if (!params[4]) {
                                params[4] = 1;
                            }
                        }
                        for (i = 0; i < (params.length - 1); i += 1) {
                            // if the number is a percentage copy it as is
                            values[i] = params[i + 1];
                        }
                    }
                }
            } else if (colorFn.match(patternHSL)) { //HSL
                params = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(params);
                if (params && params.length >= 4) {
                    /// Get rid of any unnecessary data captured
                    if (params.length >= 5) {
                        params.length = 5;
                        if (!params[4]) {
                            params[4] = 1;
                        }
                    }
                    for (i = 0; i < (params.length - 1); i += 1) {
                        values[i] = params[i + 1];
                    }
                }
            }
        }

        // Round to 4 decimal places
        if (values) {
            for (i = 0; i < values.length; i += 1) {
                values[i] = (Math.round(values[i] * 10000)) / 10000;
            }
        }

        colorValueObj = {colorFunction: colorFn, values: values};

        return colorValueObj;
    };


    function normalizeColorComponent(c) {
        if (c < 0.0) {
            return c + 1.0;
        }
        if (c > 1) {
            return c - 1.0;
        }
        return c;

    }

    function rgbComponentFromIntermediate(p, q, multiplier, tC) {
        if (tC < oneSixth) {
            return p + multiplier * tC;
        }
        if (tC < 0.5) {
            return q;
        }
        if (tC < twoThirds) {
            return p + multiplier * (twoThirds - tC);
        }
        return p;
    }

    /** @name hslToRGB
     Assumes hsl values as (deg, %, %). Returns rgb as percentage
     */
    Edge.hslToRGB = function (hsl) {
        if (hsl === null || hsl.s < 0 || hsl.s > 100 || hsl.l < 0 || hsl.l > 100) {
            return null;
        }

        // Normalize the hue
        while (hsl.h > 360) {
            hsl.h = hsl.h - 360;
        }

        while (hsl.h < 0) {
            hsl.h = 360 + hsl.h;
        }

        var rgb = {},
            h = hsl.h / 360,
            s = hsl.s / 100,
            l = hsl.l / 100,
            q,
            p,
            tR,
            tG,
            tB,
            multiplier;

        if (s === 0) {
            rgb.r = rgb.g = rgb.b = l;
        } else {
            if (l <= 0.5) {
                q = l * (1 + s);
            } else {
                q = l + s - (l * s);
            }

            p = 2.0 * l - q;

            tR = normalizeColorComponent(h + oneThird);
            tG = normalizeColorComponent(h);
            tB = normalizeColorComponent(h - oneThird);

            multiplier = (q - p) * 6.0;

            rgb.r = rgbComponentFromIntermediate(p, q, multiplier, tR);
            rgb.g = rgbComponentFromIntermediate(p, q, multiplier, tG);
            rgb.b = rgbComponentFromIntermediate(p, q, multiplier, tB);
        }

        rgb.r = Math.min(rgb.r * 100, 100);
        rgb.g = Math.min(rgb.g * 100, 100);
        rgb.b = Math.min(rgb.b * 100, 100);

        // Round to 4 decimal places
        rgb.r = (Math.round(rgb.r * 10000)) / 10000;
        rgb.g = (Math.round(rgb.g * 10000)) / 10000;
        rgb.b = (Math.round(rgb.b * 10000)) / 10000;

        return rgb;
    };

    /** @name rgbToHSL
     Assumes rgb values as a percentage. Returns hsl as (deg, %,%)
     */
    Edge.rgbToHSL = function (rgb) {
        if (rgb === null || rgb.r < 0 || rgb.r > 100 || rgb.g < 0 || rgb.g > 100 || rgb.b < 0 || rgb.b > 100) {
            return null;
        }

        var hsl = {h: 0, s: 0, l: 0 },
            r = rgb.r / 100,
            g = rgb.g / 100,
            b = rgb.b / 100,
            maxColor = Math.max(r, g, b),
            minColor = Math.min(r, g, b),
            colorDiff;

        hsl.l = (maxColor + minColor) / 2.0;

        // If the max and min colors are the same (ie the color is some kind of grey), S is defined to be 0,
        // and H is undefined but in programs usually written as 0
        if (maxColor > minColor && hsl.l > 0.0) {
            colorDiff = maxColor - minColor;
            if (hsl.l <= 0.5) {
                hsl.s = colorDiff / (maxColor + minColor);
            } else {
                hsl.s = colorDiff / (2.0 - maxColor - minColor);
            }

            if (maxColor === b) {
                hsl.h = 4.0 + (r - g) / colorDiff;
            } else if (maxColor === g) {
                hsl.h = 2.0 + (b - r) / colorDiff;
            } else {  // maxColor == r
                hsl.h = (g - b) / colorDiff;
            }

            // Normalize hue
            hsl.h *= 60;
            if (hsl.h > 360) {
                hsl.h = hsl.h - 360;
            } else if (hsl.h < 0) {
                hsl.h = 360 + hsl.h;
            }
        }

        hsl.s = Math.min(hsl.s * 100, 100);
        hsl.l = Math.min(hsl.l * 100, 100);

        // Round to 4 decimal places
        hsl.h = (Math.round(hsl.h * 10000)) / 10000;
        hsl.s = (Math.round(hsl.s * 10000)) / 10000;
        hsl.l = (Math.round(hsl.l * 10000)) / 10000;

        return hsl;
    };

    Edge.colorToSupported = function (val) {
        testSupport();
        if ((!supportRGBA && /rgba/.test(val)) || (!supportRGB && /rgb/.test(val)) || (!supportHSLA && /hsla/.test(val)) || (!supportHSL && /hsl/.test(val))) {
            // Downlevel support
            var result = Edge.parseColorValue(val), values = result.values,
                r,
                g,
                b,
                rgb;
            if (values.length >= 4 && values[3] < 0.5) {
                return 'transparent';
            }
            r = values[0];
            g = values[1];
            b = values[2];
            if (/hsl/.test(val)) {
                rgb = Edge.hslToRGB({h: values[0], g: values[1], b: values[2]});
                r = rgb.r;
                g = rgb.g;
                b = rgb.b;
            }
            r *= 255 / 100;
            g *= 255 / 100;
            b *= 255 / 100;
            r = Math.floor(r);
            g = Math.floor(g);
            b = Math.floor(b);
            r = (r > 15 ? "" : "0") + r.toString(16);
            g = (g > 15 ? "" : "0") + g.toString(16);
            b = (b > 15 ? "" : "0") + b.toString(16);
            val = "#" + r + g + b;
        }
        return val;
    };

    Edge.Timeline.addTweenType("color", function (prop, ele, fromVal, toVal, opts) {
        return new ColorTween("color", prop, ele, fromVal, toVal, opts);
    });

    for (i = 0; i < propNames.length; i += 1) {
        Edge.Timeline.addTweenProperty(propNames[i], 'color');
    }
})(window.AdobeEdge);
/// edge.gradient-tween.js - version 0.2 - An Release 1.0
//
// Copyright (c) 2011. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/***
 @name GradientTween
 @class Defines a tween that can animate the background-image gradients.
 This defines a tween type of 'gradient' which can parse gradient properties.
 */

/*global window: true, document: true, EdgeAn: true */

(function (Edge) {

    "use strict";

    var $ = Edge.$,
        PropertyTween = Edge.PropertyTween,
        tweenTypes = { gradient: 0 },
        cssProp = "background-image",
        propLookup = { 'background-image': { cssProp: cssProp, def: "0px", u: "px", i: 1 } },
        prop,
        superApply = Edge._.p[cssProp].apply,
        superPrep = Edge._.p[cssProp].prep;

    // Helpers

    function forceGPU(ele) {
        if (document.documentElement.style.hasOwnProperty('webkitAppearance')) {
            var transform = $(ele).css('-webkit-transform');
            if (!transform.match(/translateZ/) && !transform.match(/matrix3d/)) {
                $(ele).css('-webkit-transform', transform + ' translateZ(0)');
            }
        }
    }
    Edge.forceGPU = forceGPU;

    function GradientTween(tweenType, property, elements, fromVal, val, opts) {
        var ci = null,
            i,
            lt,
            gt;
        if (val.length >= 2 && $.isArray(val[1]) && fromVal.length >= 2 && $.isArray(fromVal[1])) { // linear gradient
            ci = 1;
        } else if (val.length >= 2 && $.isArray(val[4]) && fromVal.length >= 2 && $.isArray(fromVal[4])) { // radial gradient
            ci = 4;
        }
        if (ci) {
            // Generate color stops when one of the tween ends has less than the other
            // Note:  For now, just duplicate the final color stop to get to the final set of colorstops.
            //        We might decide we need to interpolate values to get an approximate value at an interim position.
            lt = fromVal[ci].length < val[ci].length ? fromVal[ci] : val[ci];
            gt = lt === val[ci] ? fromVal[ci] : val[ci];

            for (i = lt.length; i < gt.length; i += 1) {
                lt[i] = lt[i - 1];
            }
        }
        Edge.PropertyTween.call(this, tweenType, property, elements, fromVal, val, opts);
        this.name = "GradientTween";
        this.tweenType = tweenTypes[tweenType];
    }

    $.extend(GradientTween.prototype, PropertyTween.prototype);
    $.extend(GradientTween.prototype, {

        constructor: GradientTween,

        setupForAnimation: function () {
            var elements = this.getElementSet();
            elements.each(function () {
                forceGPU(this);
            });

            PropertyTween.prototype.setupForAnimation.call(this);
        },
        getValue: function (prop, tt) {
            return $(this).css(prop);
        },
        setValuePre: function (tt, prop, val) {
            $(this).css(prop, '-webkit-' + val);
            $(this).css(prop, '-moz-' + val);
            $(this).css(prop, '-ms-' + val);
            $(this).css(prop, '-o-' + val);
        },
        setValue: function (tt, prop, val) {
            $(this).css(prop, val);
        },
        update: function (elapsed, easingConst) {
            var elements = this.getElementSet(),
                tween = this,
                tt = this.tweenType,
                i,
                fvs,
                tvs,
                filters,
                cnt,
                results;

            prop = propLookup[this.property].cssProp;

            if (!this.updateTriggered) {
                this.updateTriggered = true;
                this.setupForAnimation();
            }


            elements.each(function () {
                // We only want to tween if the property data has a
                // matching animation id. If the ids don't match, that
                // means another animation has started which is modifying
                // this same property.

                var td = tween.getPropertyTweenData(this, tt, tween.property),
                    f,
                    v,
                    t,
                    valPre,
                    val;
                if (td.animationID !== tween.animationID) {
                    return;
                }

                fvs = td.fromValues;
                tvs = td.toValues;
                filters = tween.filter;

                cnt = fvs.length;
                results = [];

                for (i = 0; i < cnt; i += 1) {
                    f = fvs[i];
                    t = tvs[i];
                    v = undefined;
                    if (typeof f === "string") {
                        v = (easingConst === 0 && tween.duration > 0) ? f : t.value;
                    } else {
                        v = (f + ((t.value - f) * easingConst));
                    }
                    if (filters && filters[i]) {
                        v = filters[i](v, tween, this, prop, t.unit, elapsed);
                    }
                    if (typeof v === "number" && v < 1) {
                        // protect against exponential notation
                        v = v.toFixed(6);
                    }
                    results.push(v + t.unit);
                }

                valPre = tween.formatValuePre(results);
                val = tween.formatValue(results);

                tween.setValuePre.call(this, tt, prop, valPre);
                tween.setValue.call(this, tt, prop, val);
                tween.notifyObservers("onUpdate", { elapsed: elapsed, easingConst: easingConst, property: prop, value: val, element: this });
            });

        },
        parseValue: function (val) {
            if (!val || val.length < 2) {
                return;
            }
            if (typeof val === "string") {
                val = JSON.parse(val);
            }
            function getStopPosition(colorstops, index) {
                if (colorstops[index].length > 1) {
                    return colorstops[index][1];
                }

                var colorstopPosition;
                if (index === 0) { // If this color is the first color, then we know it's at position 0%
                    colorstopPosition = 0;
                } else if (index === colorstops.length - 1) { // If this color is the last color, then we know it's at position 100%
                    colorstopPosition = 100;
                } else { // If this color is in the middle, then we average the two adjacent stops
                    colorstopPosition = (getStopPosition(colorstops, index - 1) + getStopPosition(colorstops, index + 1)) / 2;
                }
                colorstops[index].push(colorstopPosition);

                return colorstopPosition;
            }

            var angle = null,
                colorstops = null,
                centerPoint = null,
                ellipse = null,
                extent = null,
                colorstopValues = [],
                repeating = false,
                i,
                values = [],
                gradientValueObj,
                parsedColor;

            if ($.isArray(val[1])) { // Linear Gradient
                angle = val[0];
                colorstops = val[1];
                if (val[2]) {
                    repeating = val[2];
                }
            } else { // Radial Gradient
                centerPoint = [val[0], val[1]];
                ellipse = val[2];
                extent = val[3];
                colorstops = val[4];
                if (val[5]) {
                    repeating = val[5];
                }
            }

            for (i = 0; i < (colorstops.length); i += 1) {
                parsedColor = Edge.Color.parseValue(colorstops[i][0], i);
                if (parsedColor) {
                    colorstopValues = colorstopValues.concat(parsedColor);
                    colorstopValues.push(getStopPosition(colorstops, i));
                }
            }

            gradientValueObj = {angle: angle, colorstops: colorstopValues, centerPoint: centerPoint, ellipse: ellipse, extent: extent, repeating: repeating};

            if (!gradientValueObj || !gradientValueObj.colorstops) {
                return;
            }

            if (gradientValueObj.angle !== null) {
                values = values.concat(gradientValueObj.angle);
            } else if (gradientValueObj.centerPoint) {
                values = values.concat(gradientValueObj.centerPoint);
                values = values.concat([gradientValueObj.ellipse, gradientValueObj.extent]);
            }
            values = values.concat(gradientValueObj.colorstops);

            return values.concat(gradientValueObj.repeating);
        },
        formatValue: function (values) {
            return Edge.formatGradient(values, false);
        },
        formatValuePre: function (values) {
            return Edge.formatGradient(values, true);
        }
    });

    Edge.GradientTween = GradientTween;

    Edge.Gradient = { parseValue: GradientTween.prototype.parseValue };

    Edge.formatGradient = function (values, isPrefixed) {
        if (!values) {
            return;
        }
        var formattedValue = "",
            colorstopIndex = null,
            i,
            firstIndex,
            numberOfColors;

        if (values.length % 5 === 2) { // Linear Gradient
            // [0] - angle
            // [1-n]*5 - color stops
            colorstopIndex = 1;

            formattedValue += "linear-gradient(";
            formattedValue += (isPrefixed ? values[0] : (450 - values[0]) % 360) + 'deg,';
        } else { // values.length % 5 == 4 // Radial Gradient
            colorstopIndex = 4;
            formattedValue += "radial-gradient(";
            if (isPrefixed) {
                formattedValue += values[0] + "% " + values[1] + "%," + (values[2] == 1 ? "ellipse" : "circle") + " " + values[3] + ",";
            } else {
                formattedValue += values[3] + " " + (values[2] == 1 ? "ellipse" : "circle") + " at " + values[0] + "% " + values[1] + "%,";
            }
        }

        // repeating
        if (values[values.length - 1] == 1) {
            formattedValue = "repeating-" + formattedValue;
        }

        // Format color stops
        if (values.length < 12 || (values.length - colorstopIndex - 1) % 5 !== 0) { // 1 for the angle, 4 per color and 1 for the stop x 2 colors = 11
            return;
        }

        numberOfColors = Math.floor((values.length - colorstopIndex - 1) / 5);
        for (i = 0; i < numberOfColors; i += 1) {
            firstIndex = i * 5 + colorstopIndex;
            formattedValue += Edge.Color.formatValue(values.slice(firstIndex, firstIndex + 4)); // format the color using the color-tween formatting code
            if (values[firstIndex + 4] !== -1) {
                formattedValue += " " + values[firstIndex + 4] + '%';
            } // add the stop
            if (i !== numberOfColors - 1) {
                formattedValue += ',';
            }
        }
        formattedValue += ")"; // close the gradient function

        return formattedValue;
    };


    Edge.Timeline.addTweenType("gradient", function (prop, ele, fromVal, toVal, opts) {
        return new GradientTween("gradient", prop, ele, fromVal, toVal, opts);
    });

    // Monkey patch for Prop's prep and apply methods
    function applyProp($ele, val) {
        var parsedValue,
            formattedValue,
            formattedValueStandard;
        if (typeof val === 'string') {
            return superApply.call(Edge._.p[cssProp], $ele, val);
        }
        parsedValue = Edge.Gradient.parseValue(val);
        formattedValueStandard = Edge.formatGradient(parsedValue, false);
        formattedValue = Edge.formatGradient(parsedValue, true);

        $ele.css(cssProp, '-webkit-' + formattedValue);
        $ele.css(cssProp, '-moz-' + formattedValue);
        $ele.css(cssProp, '-ms-' + formattedValue);
        $ele.css(cssProp, '-o-' + formattedValue);
        $ele.css(cssProp, formattedValueStandard);
    }

    function prepProp($ele, oN, nm, i, j, ii, comp) {
        return (oN[nm] == undefined || typeof oN[nm][i] === 'string') ? superPrep.call(Edge._.p[cssProp], $ele, oN, nm, i, j, ii, comp) : oN[nm][i]; // the gradient definition object
    }


    Edge._.p[cssProp].apply = applyProp;
    Edge._.p[cssProp].prep = prepProp;

    for (prop in propLookup) {
        if (propLookup.hasOwnProperty(prop)) {
            Edge.Timeline.addTweenProperty(prop, "gradient");
        }
    }

})(window.AdobeEdge);
/// Edge.motion-tween.js - version 0.2 - Edge Release 1.0
//
// Copyright (c) 2011. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/***
 @name MotionTween
 @class Defines a tween that can animate an object along a path described by a cubic spline
 */

/*jslint plusplus: true */
/*global window: true */
/*global document: true */
(function (Edge) {
    "use strict";

    var $ = Edge.$,
        PropertyTween = Edge.PropertyTween,
        TransformTween = Edge.TransformTween,
        UpdateFinalizer = Edge.UpdateFinalizer;

    function originIncludesBorders() {
        var ele = document.createElement('div'),
            ele$ = $(ele),
            sOrigin,
            sOrigin2;
        if (document.body !== null) {
            document.body.appendChild(ele);
        }
        ele$.css("left", "-9999px").css("width", "100px");
        ele$.css("transform-origin", "50% 50%").css("-webkit-transform-origin", "50% 50%").css("-moz-transform-origin", "50% 50%").css("-ms-transform-origin", "50% 50%").css("-o-transform-origin", "50% 50%");

        sOrigin = ele$.css("transform-origin") || ele$.css("-webkit-transform-origin") || ele$.css("-moz-transform-origin") || ele$.css("-ms-transform-origin") || ele$.css("-o-transform-origin");
        ele$.css("border-width", "10px").css("border-style", "solid");
        sOrigin2 = ele$.css("transform-origin") || ele$.css("-webkit-transform-origin") || ele$.css("-moz-transform-origin") || ele$.css("-ms-transform-origin") || ele$.css("-o-transform-origin");

        if (ele.parentNode !== null) {
            ele.parentNode.removeChild(ele);
        }

        return sOrigin !== sOrigin2;
    }

    function MotionTween(tweenType, property, elements, path, keyframes, opts) {
        TransformTween.call(this, tweenType, 'motion', elements, undefined, undefined, opts);

        this.name = "motionTween";
        this.path = path;
        if (path && path.length > 1 && path[0].length < 6) {
            path[0][4] = path[0][5] = 0; // append lowerdx
            path[path.length - 1].splice(2, 0, 0, 0); // insert upperdx
        }
        this.keyframes = [];

        this.originIncludesBorders = originIncludesBorders();
    }

    function formatNumber(num) {
        if (num !== 0 && Math.abs(num) < 1e-6) {
            return num.toFixed(6);
        }
        return num.toString();
    }

    function cubic(s0, s1, b) {
        // see http://en.wikipedia.org/wiki/Hermite_curve
        // s = { x, y, upperdx/db, upperdy/db, lowerdx/db, lowerdy/db }
        try {
            if (s0[0] === s1[0] && s0[1] === s1[1]) {
                return { x: s1[0], y: s1[1] };
            }
        } catch (e) {
            //debugger;
        }

        var o = {},
            b2 = b * b,
            b3 = b2 * b,
            h00 = 2 * b3 - 3 * b2 + 1,
            h10 = b3 - 2 * b2 + b,
            h01 = -2 * b3 + 3 * b2,
            h11 = b3 - b2;
        /*  For comparison to article ref'd above:
            x0 = s0[0]
            y0 = s0[1]
            x1 = s1[0]
            y1 = s1[1]
            m0x = s0[2];
            m0y = s0[3];
            m1x = s1[4];
            m1y = s1[5];
         */
        o.x = h00 * s0[0] + h10 * s0[2] + h01 * s1[0] + h11 * s1[4];
        o.y = h00 * s0[1] + h10 * s0[3] + h01 * s1[1] + h11 * s1[5];
        return o;
    }

    function derivative(s0, s1, b) {

        // see http://en.wikipedia.org/wiki/Hermite_curve
        // LUA: s = { t, x, y, udx/dt, udy/dt, lowerdx, lowerdy }
        // s = { x, y, upperdx/db, upperdy/db, lowerdx/db, lowerdy/db }

        if (s0[0] === s1[0] && s0[1] === s1[1]) {
            return { dx: 0, dy: 0};
        }

        var o = {},
            b2 = b * b,
            h00 = 6 * b2 - 6 * b,
            h10 = 3 * b2 - 4 * b + 1,
            h01 = -6 * b2 + 6 * b,
            h11 = 3 * b2 - 2 * b,
            m0x = s0[2],
            m0y = s0[3],
            m1x = s1[4],
            m1y = s1[5];

        o.dx = h00 * s0[0] + h10 * m0x + h01 * s1[0] + h11 * m1x;
        o.dy = h00 * s0[1] + h10 * m0y + h01 * s1[1] + h11 * m1y;
        return o;
    }

    function distance2(pt1, pt2) {
        var dx = pt1.x - pt2.x,
            dy = pt1.y - pt2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function dot2(pt1, pt2) {
        return pt1.x * pt2.x + pt1.y * pt2.y;
    }

    function refinePoints(s0, s1, points, startIndex, tolerance) {
        var baseB = Math.floor(points[startIndex].b),
            b = (points[startIndex].b + points[startIndex + 1].b) / 2 - baseB,
            val = cubic(s0, s1, b),
            linearPoint = {x : (points[startIndex].x + points[startIndex + 1].x) / 2, y : (points[startIndex].y + points[startIndex + 1].y) / 2},
            inserted = 0;

        if (distance2(linearPoint, val) > tolerance) {
            // subdivide and recurse
            val.b = b + baseB;
            points.splice(startIndex + 1, 0, val);
            inserted = refinePoints(s0, s1, points, startIndex + 1, tolerance);
            inserted = inserted + refinePoints(s0, s1, points, startIndex, tolerance) + 1;
        }
        return inserted;
    }

    function createEasingTable(points) {
        //console.log("createEasingTable called")
        // convert points of a curve in (0,0)-(1,1) to be a lookup table from t to easing value
        var minStep = 1, i, t, numSteps, step, easingTable, index, e;

        for (i = 0; i < points.length - 1; i++) {
            if (points[i + 1].x - points[i].x > 0) {
                minStep = Math.min(minStep, points[i + 1].x - points[i].x);
            }
        }
        numSteps = Math.ceil(1 / minStep);
        step = 1 / numSteps;
        easingTable = [];
        index = 0;

        easingTable[0] = {t : 0, e : 0};

        for (i = 0; i < numSteps; i++) {
            t = i * step;
            while (t > points[index + 1].x && index < points.length - 2) {
                index++;
            }
            e = points[index + 1].y;
            if ((points[index + 1].x - points[index].x) > 0) {
                e = points[index].y + (t - points[index].x) * (points[index + 1].y - points[index].y) / (points[index + 1].x - points[index].x);
            }
            easingTable[i] = {t : t, e : e};
            // compare to easeinoutquad
            //easingTable[i + 1].eioq = Easing.easeInOutQuad(t, t, 0, 1, 1)
        }
        if (easingTable[easingTable.length - 1].t < 1) {
            easingTable[easingTable.length] = {t : 1, e : 1};
        }
        return easingTable;
    }

    function isStraightLine(points, toleranceInRadians) {
        var len = distance2(points[points.length - 1], points[0]),
            i,
            pt1,
            dot,
            denom,
            pt2 = {x: points[points.length - 1].x - points[0].x, y: points[points.length - 1].y - points[0].y};
        for (i = 1; i < points.length - 1; i++) {
            pt1 = {x: points[i].x - points[0].x, y: points[i].y - points[0].y};
            dot = dot2(pt1, pt2);
            denom = len * distance2(points[i], points[0]);
            if (Math.abs(Math.acos(dot / denom)) > toleranceInRadians) {
                return false;
            }
        }
        return true;
    }

    function setUpEasings(aKfs) {
        var i, j, k, s0, s1, points, b, o, val;
        for (i = 0; i < aKfs.length - 1; i++) {
            // convert from bezier to hermite
            s0 = [0, 0, aKfs[i].upper.x * 3, aKfs[i].upper.y * 3, aKfs[i].lower.x * 3, aKfs[i].lower.y * 3];
            s1 = [1, 1, aKfs[i + 1].upper.x * 3, aKfs[i + 1].upper.y * 3, (1 - aKfs[i + 1].lower.x) * 3, (1 - aKfs[i + 1].lower.y) * 3];
            points = [];

            for (j = 0; j < 5; j++) {
                b = j / 4;
                o = { b: b };
                val = cubic(s0, s1, b);
                o.x = val.x;
                o.y = val.y;
                o.b = b;
                points[j] = o;
            }
            if (isStraightLine(points, 0.005)) {
                // discard unneeded intermediate points
                points.splice(1, 3);
            } else {
                for (j = 0; j < 4; j++) {
                    k = 3 - j;
                    refinePoints(s0, s1, points, k, 0.01);
                }
            }
            aKfs[i].easingTable = createEasingTable(points);
        }
    }

    $.extend(MotionTween.prototype, TransformTween.prototype);
    $.extend(MotionTween.prototype, {

        constructor: MotionTween,

        /*setValue: use the inherited one from TransformTween */
        getValue: function (prop, tt) {
        },
        setupForAnimation: function () {
            //this.duration = this.path[this.path.length-1][0];
            TransformTween.prototype.setupForAnimation.call(this);
            if (!this.points) {
                this.setUpPoints();
                this.setUpLen2bMap();
                setUpEasings(this.keyframes);
            }

            if (!this.deltas && !window.edge_authoring_mode) {
                this.getElementSet().each(function () {
                    var $this = $(this),
                        propX = Edge.$.data(this, "p_x") || "left",
                        propY = Edge.$.data(this, "p_y") || "top",
                        parentEle = this.parentElement,
                        $parent = $(parentEle),
                        deltaX = +parseFloat($this.css(propX)) || 0,
                        deltaY = +parseFloat($this.css(propY)) || 0;

                    if (Edge.$.data(this, "u_x") === "%") {
                        deltaX = (deltaX / 100) * +$parent.width();
                    }
                    if (Edge.$.data(this, "u_y") === "%") {
                        deltaY = (deltaY / 100) * +$parent.height();
                    }

                    Edge.$.data(this, "deltaX", deltaX);
                    Edge.$.data(this, "deltaY", deltaY);
                    $this.css(propX, "0px").css(propY, "0px");
                });
                this.deltas = true;
            }

            var firstT = this,
                dxy0;

            while (firstT._prevObj) {
                //ignore "filler" transitions
                if (firstT._prevObj.path.length == 2 && (firstT._prevObj.path[0][0] === firstT._prevObj.path[1][0] && firstT._prevObj.path[0][1] === firstT._prevObj.path[1][1])) {
                    break;
                }
                firstT = firstT._prevObj;
            }

            dxy0 = derivative(firstT.path[0], firstT.path[1], 0.000001);
            this.deltaRotate = Math.atan2(dxy0.dx, dxy0.dy) * 180 / Math.PI;

        },
        computeEasing: function (ms) {
            var aKfs = this.keyframes,
                t = ms / this.getDuration(),
                index = 0,
                i,
                easingTable,
                segLen,
                segDuration,
                tableIndex,
                e;

            for (i = 0; i < aKfs.length - 1; i++) {
                index = i;
                if (t <= aKfs[i + 1].t) {
                    break;
                }
            }
            easingTable = aKfs[index].easingTable;
            segLen = aKfs[index + 1].l - aKfs[index].l;
            segDuration = aKfs[index + 1].t - aKfs[index].t;

            // lookup e in the table, interpolating linearly
            t = (t  - aKfs[index].t) / segDuration;
            tableIndex = Math.floor(t / (easingTable[1].t - easingTable[0].t));
            tableIndex = Math.min(easingTable.length - 2, Math.max(tableIndex, 0));
            // e is easing per segment
            e = easingTable[tableIndex].e + (t - easingTable[tableIndex].t) * (easingTable[tableIndex + 1].e - easingTable[tableIndex].e) / (easingTable[tableIndex + 1].t - easingTable[tableIndex].t);
            return aKfs[index].l + e * segLen;
        },
        originInPx: function (ele$) {

            var sOrigin,
                aOrigin,
                oOrigin = {},
                w = ele$.width(),
                h = ele$.height(),
                bdlW,
                bdtW,
                originXp,
                originYp;
            sOrigin = ele$.css("transform-origin") || ele$.css("-webkit-transform-origin") || ele$.css("-moz-transform-origin") || ele$.css("-ms-transform-origin") || ele$.css("-o-transform-origin") || "50% 50%";

            aOrigin = sOrigin.split(" ");
            if (aOrigin[0].indexOf("%") > 0) {
                originXp = parseFloat(aOrigin[0].substring(0, aOrigin[0].length - 1)) / 100;
                originYp = parseFloat(aOrigin[1].substring(0, aOrigin[1].length - 1)) / 100;
                oOrigin.x = w * originXp;
                oOrigin.y = h * originYp;
            } else {
                //already in pixels...
                oOrigin.x = parseFloat(aOrigin[0].substring(0, aOrigin[0].length - 2));
                oOrigin.y = parseFloat(aOrigin[1].substring(0, aOrigin[1].length - 2));
            }

            if (!this.originIncludesBorders) {
                originXp = originXp || oOrigin.x / w;
                originYp = originYp || oOrigin.y / h;

                //adjust for border
                bdlW = Edge.splitUnits(ele$.css("border-left-width")).num + Edge.splitUnits(ele$.css("border-right-width")).num || 0;
                bdlW = bdlW * originXp;
                bdtW = Edge.splitUnits(ele$.css("border-top-width")).num + Edge.splitUnits(ele$.css("border-bottom-width")).num || 0;
                bdtW = bdtW * originYp;
                oOrigin.x += bdlW;
                oOrigin.y += bdtW;
            }

            return oOrigin;
        },

        update: function (elapsed, easingConst, context) {

            if (!this.updateTriggered) {
                this.updateTriggered = true;
                this.setupForAnimation(context);
            }

            var elements = this.getElementSet(context),
                tween = this,
                prop = this.property,
                tt = this.tweenType,
                e = easingConst,
                seg = this.findSegment(e),
                path = this.path,
                b = this.easeToB(e),
                len = this.points[this.points.length - 1].l,
                deltaB,
                angle,
                overshoot;

            b = b - seg;
            b = Math.min(1.0, Math.max(0, b));
            deltaB = Math.max(0.000001, Math.min(0.999999, b));

            var o = cubic(path[seg], path[seg + 1], b),
                deltaXY = derivative(path[seg], path[seg + 1], deltaB),
                rotation1 = Math.atan2(deltaXY.dx, deltaXY.dy) * 180 / Math.PI,
                rotation,
                skipRotation;

            if (this._prevObj && path.length === 2 && path[0][0] === path[1][0] && path[0][1] === path[1][1]) {
                skipRotation = true;
                rotation = 0;//we don't know what it really is, this path shouldn't change it
            } else {
                rotation = (this.deltaRotate - rotation1);
            }

            if (e < 0 || e > 1) {
                angle = Math.atan2(deltaXY.dy, deltaXY.dx);
                overshoot = (e > 1) ? e - 1 : e;
                o.x += Math.cos(angle) * len * overshoot;
                o.y += Math.sin(angle) * len * overshoot;
            }

            elements.each(function () {
                // We only want to tween if the property data has a
                // matching animation id. If the ids don't match, that
                // means another animation has started which is modifying
                // this same property.

                var $this = $(this),
                    oOrigin,
                    td = tween.getPropertyTweenData(this, tt, prop),
                    data = Edge.$.data(this, TransformTween.dataName),
                    parentEle = this.parentElement,
                    $parent,
                    parentW,
                    parentH;

                data.tween = tween;

                if (td.animationID !== tween.animationID) {
                    return;
                }

                oOrigin = tween.originInPx($this);

                //step 1: calculate the offset of the origin point from the corner
                var propX = Edge.$.data(this, "p_x") || "left",
                    propY = Edge.$.data(this, "p_y") || "top",
                    valX = o.x,
                    valY = o.y,
                    uX = Edge.$.data(this, "u_x") || "px",
                    uY = Edge.$.data(this, "u_y") || "px",
                    deltaX = /*Edge.$.data(this, "deltaX") ||*/ 0,
                    deltaY = /*Edge.$.data(this, "deltaY") ||*/ 0,
                    //pushToTranslate = !window.edge_authoring_mode || !Edge.$.data(this, "domDef"),
                    pushToTranslate = !window.edge_authoring_mode,
                    doAutoRotate = Edge.$.data(this, "doAutoOrient");

                doAutoRotate = doAutoRotate === "true" ? true : doAutoRotate === "false" ? false : doAutoRotate;

                if (pushToTranslate) {

                    $parent = $(parentEle);
                    parentW = $parent.width();
                    parentH = $parent.height();

                //if in % then we need to calculate value in px
                    if (uX === "%") {
                        valX = (valX / 100.0) * parentW;
                    }
                    if (uY === "%") {
                        valY = (valY / 100.0) * parentH;
                    }
                }

                valX = valX + (propX === "right" ? oOrigin.x : -1 * oOrigin.x);
                valY = valY + (propY === "bottom" ? oOrigin.y : -1 * oOrigin.y);

                if (pushToTranslate) {
                    valX = valX + deltaX;
                    valY = valY + deltaY;
                }

                valX = formatNumber(valX);
                valY = formatNumber(valY);

                if (!skipRotation) {
                    if (!doAutoRotate) {
                        rotation = 0;
                    }
                    rotation = Math.abs(rotation) > .01 ? rotation: 0; // Handle tiny numbers that might go to exp notation

                    Edge.$.data(this, "motionRotateZ", rotation + "deg");
                    tween.setValue.call(this, undefined, "motionRotateZ", rotation + "deg");
                    UpdateFinalizer.Register(tween.timeline, data.id, data);
                }

                if (!pushToTranslate) {
                    $(this).css(propX, valX + uX);
                    tween.notifyObservers("onUpdate", { elapsed: elapsed, easingConst: easingConst, property: propX, value: valX + uX, element: data.tween });
                    $(this).css(propY, valY + uY);
                    tween.notifyObservers("onUpdate", { elapsed: elapsed, easingConst: easingConst, property: propY, value: valY + uY, element: this });
                } else {
                    tween.setValue.call(this, undefined, "motionTranslateX", valX + "px");
                    tween.setValue.call(this, undefined, "motionTranslateY", valY + "px");
                    UpdateFinalizer.Register(tween.timeline, data.id, data);
                }
            });

        },
        findSegment : function (e) {
            var b = this.len2b(e * this.points[this.points.length - 1].l);
            b = Math.floor(b);
            return Math.min(Math.max(b, 0), this.path.length - 2);
        },
        // Return the b value for whole curve
        easeToB : function (e) {
            return this.len2b(e * this.points[this.points.length - 1].l);
        },
        setUpLen2bMap : function () {
            var len = 0,
                i,
                index = 0,
                totalLength,
                numTicks = (this.getDuration() * 60) / 1000.0,
                lenPerTick,
                len2bMap = this.len2bMap = [],
                points = this.points,
                b;

            for (i = 0; i < points.length - 1; i++) {
                points[i].l = len;
                len = len + distance2(points[i], points[i + 1]);
            }
            points[points.length - 1].l = len;
            totalLength = len;
            lenPerTick = totalLength / numTicks;
            this.len2bStep = lenPerTick;

            len = 0;
            i = 0;
            if (totalLength > 0) {
                while (len <= totalLength) {
                    while (i < points.length - 1 && len > points[i + 1].l) {
                        i = i + 1;
                    }
                    if (i >= points.length - 1) {
                        break;
                    }
                    // assume samples are dense enough to do linear interpolation
                    b = points[i].b + (len - points[i].l) * (points[i + 1].b - points[i].b) / (points[i + 1].l - points[i].l);
                    len2bMap.push({l: len, b: b});

                    len = len + lenPerTick;
                }
                if (len2bMap[len2bMap.length - 1].b < points[points.length - 1].b) {
                    len2bMap.push({l: points[points.length - 1].l, b: points[points.length - 1].b});
                }
            } else {
                // Special case for 0 length
                len2bMap.push({l: 0, b: points[0].b});
            }
        },

        setUpPoints: function () {
            var curve = this.path,
                tolerance = 2,
                i,
                j,
                k,
                b,
                o,
                val,
                seg;

            this.points = [];

            for (i = 0; i < curve.length - 1; i++) {
                for (j = 0; j < 5; j++) {
                    if (j < 4 || i === curve.length - 2) {
                        b = j / 4;
                        o = { b: i + b };
                        val = cubic(curve[i], curve[i + 1], b);
                        o.x = val.x;
                        o.y = val.y;

                        this.points.push(o);
                    }
                }
            }
            for (i = 1; i < curve.length; i++) {
                seg = curve.length - i - 1;
                for (j = 0; j < 4; j++) {
                    k = 3 - j + seg * 4;
                    refinePoints(curve[seg], curve[seg + 1], this.points, k, tolerance);
                }
            }
            return this.points;
        },

        len2b: function (len) {
            if (!this.len2bMap) {
                this.setUpLen2bMap();
            }

            var len2bMap = this.len2bMap,
                index = Math.min(Math.max(0, Math.floor(len / this.len2bStep)), this.len2bMap.length - 2),
                b;

            if (len2bMap.length === 0) {
                return 0;
            }
            if (len2bMap.length === 1) {
                return len2bMap[0].b;
            }
            b = (len - len2bMap[index].l) * (len2bMap[index + 1].b - len2bMap[index].b) / (len2bMap[index + 1].l - len2bMap[index].l) + len2bMap[index].b;

            return b;
        }
    });

    Edge.MotionTween = MotionTween;
    Edge.Timeline.addTweenType("motion", function (prop, ele, fromVal, toVal, keyframes, opts) {
        return new MotionTween("motion", prop, ele, fromVal, toVal, keyframes, opts);
    });
    Edge.Timeline.addTweenProperty("motion", "motion");
    Edge.Timeline.addTweenProperty("location", "motion");

})(window.AdobeEdge);
/**
 * Adobe Edge Animate - Symbol Dynamic Extensions
 * Supports apis to create, delete child instances
 * Requires an.symbol.js and an.event.js
 */

/*jslint plusplus:true, nomen: true*/
/*global window: false, document: false, CustomEvent: false, HTMLElement: false, console:false, alert: false */

(function (Edge) {

    "use strict";

    var $ = Edge.$,
        An$ = Edge.An$,
        Symbol = Edge.Symbol,
        Composition = Edge.Composition,
        Notifier = Edge.Notifier;

    function addChildSymbol(parent, sym) {
        var instances = parent.ci = parent.ci || [];
        instances.push(sym);
    }

    function createSymbolChild(comp, sym, symbolName, parentSelector, index, variables) {

        if (!symbolName || !parentSelector) {
            return;
        }
        if (!comp || !comp._s || !comp.sym || !comp.sym[symbolName]) {
            return;
        }
        var createdInstances = [],
            $parentSelector,
            i;
        if(typeof parentSelector == 'object') { 
            $parentSelector = parentSelector;
        } else {
            $parentSelector = sym.find$(parentSelector);
            if(!$parentSelector) {
                $parentSelector = sym.$(parentSelector);
            }
        }
        $parentSelector.each(function () {
            var $this = $(this),
                newEle = document.createElement('div'),
                $children = $this._children(),
                autoPlayTimelines,
                opts = {},
                autoPlay,
                symbInstance,
                parentSym;
            //opts.variables = variables;
            parentSym = Symbol.getParentSymbol(this, true);
            symbInstance = new Symbol(comp.sym, symbolName, comp, parentSym, variables);
            if (symbInstance) {
                if ((index || index === 0) && $this._children().eq(index)[0]) {
                    if (index < 0) {
                        $children.get(index).insertAfter(newEle);
                    } else {
                        $children.get(index).insertBefore(newEle);
                    }
                } else {
                    $this.append(newEle);
                }

                symbInstance.opts = symbInstance.opts || {};
                $.extend(symbInstance.opts, opts);
                symbInstance.init(newEle);
                symbInstance._applyBaseStyles($(newEle), symbolName);
                if (typeof autoPlay === 'boolean') {
                    symbInstance.setAutoPlay(autoPlay);
                }

                //go through and display any of the items that are supposed to be displayed
                // Is this still necessary ?? jwd 3.4.13
                //comp.instanceReady(symbInstance);

                addChildSymbol(parentSym, symbInstance);
                createdInstances.push(symbInstance);
            }
        });

        if (comp.readyCalled) {
            createdInstances.forEach(function (sym) {
                Composition._playAuto(sym, true);
                //Set the position as relative for the main element
                sym.getSymbolElement().css("position", "relative");
            });
        }
        return createdInstances;
    }


    // remove all instances of an object/element from an array
    function removeFromArray(ary, o) {
        var i, id = o.getSymbolElementNode().id;
        for (i = ary.length - 1; i >= 0; i--) {
            if (ary[i].getSymbolElementNode().id === id) {
                ary.splice(i, 1);
            }
        }
    }

    // Remove a symbol from comp and parent, and break its back-refs
    function removeSymbol(sym) {
        // Remove from comp and parent lists, along with back pointers
        if (sym.prnt && sym.prnt.ci) {
            removeFromArray(sym.prnt.ci, sym);
        }
        removeFromArray(sym.composition._s, sym);
        sym.composition = undefined;
        sym.prnt = undefined;
    }

    function parents(ele, result) {
        result = result || [];
        var p = ele.parentNode;
        if (ele && ele.nodeType === 1) {
            result.push(p);
            parents(p, result);
        }
        return result;
    }

    function children(ele, result) {
        result = result || [];
        var c = ele.firstElementChild;
        while (c) {
            result.push(c);
            c = c.nextElementSibling;
        }
        return result;
    }

    $.extend(An$.prototype, {
        _parents: function () {
            // We hide this because it's not as full featured as the jquery one
            // We don't support an optional selector arg to filter by
            var result = [];
            this.each(function (i, ele) {
                parents(ele, result);
            });
            return $(result);
        },
        _children: function () {
            // We hide this because it's not as full featured as the jquery one
            // We don't support an optional selector arg to filter by
            var result = [];
            this.each(function (i, ele) {
                children(ele, result);
            });
            return $(result);
        },
        eq: function (index) {
            return $(this[index]);
        },
        append: function (ele) {
            var $ele = $(ele),
                self = this;
            $ele.each(function (i, e) {
                self.each(function (j, selfEle) {
                    selfEle.appendChild(e);
                });
            });
        }
    });

    Symbol.getParentSymbol = function (ele, includeSelf) {
        var $ele = $(ele),
            parents = $ele._parents(),
            parentLen = parents.length,
            i,
            sym;

        sym = Symbol.getSymbol($ele[0]);
        if (sym && includeSelf) {
            return sym;
        }
        for (i = 0; i < parentLen; i++) {
            sym = Symbol.getSymbol(parents[i]);
            if (sym) {
                return sym;
            }
        }
        return null;
    };

    function createSymbolEvent(eventName, sym, opts) {
        var e = $.Event(eventName);
        $.extend(e, { Symbol: sym, element: sym.ele, performDefaultAction: true });
        if (opts) {
            $.extend(e, opts);
        }
        return e;
    }

    $.extend(An$.prototype, {
        //TODO add removeEventListener to these when we start adding them for events
        empty: function () {
            var index,
                node,
                ele;
            this.each(function (index, ele) {
                node = ele.firstChild;
                while (node) {
                    ele.removeChild(node);
                    node = ele.firstChild;
                }
            });
        },
        remove: function () {
            var index,
                ele,
                parent;
            this.empty();
            this.each(function (index, ele) {
                parent = ele.parentNode;
                if (parent) {
                    parent.removeChild(ele);
                }
            });
        }
    });
    // Remove this instance from its element
    // and the global list of instances. It will be eligible for gc as soon
    // as user code lets go of references.
    function deleteSymbol(sym, opts) {
        opts = opts || {};
        var symbolInstances = sym.composition ? sym.composition._s : null,
            i,
            instLen,
            instanceSelector,
            evt = createSymbolEvent('beforeDeletion', sym, {  }),
            parentSymbol,
            sel,
            ele,
            childInstances = sym.ci,
            len,
            child;

        if (!symbolInstances) {
            return;
        }

        sym.notifyObservers('beforeDeletion', evt);
        if (!evt.performDefaultAction) {
            return;
        }

        sym.stop(0);

        // Remove all nested symbol instances
        if (childInstances) {
            instLen = childInstances.length;
            while (childInstances.length > 0) {
                deleteSymbol(childInstances[0], opts); // was comp.removeSymbol
            }
        }

        removeSymbol(sym);
        ele = sym.ele;
        Symbol.setSymbol($(ele)[0], undefined);

        if (opts._keepElement) {
            $(ele).empty();
        } else {
            $(ele).remove();
        }

        sym.tlCached = null;
        sym.ele = null;
        sym.removeObservers();
    }

    function createEvent(sym, eventName, opts) {
        var evt = $.Event(eventName);

        $.extend(evt, { Symbol: sym, element: sym.ele, performDefaultAction: true });
        $.extend(evt, opts);
        return evt;
    }

    function notifyVariableBindings(sym, varName) {
        if (!varName) {
            return;
        }
        // process bindings
        var value = sym.getVariable(varName),
            eventName = "variableChanged:" + varName,
            evt = createEvent(sym, eventName, {variableValue: value});
        sym.notifyObservers(eventName, evt);
    }


    $.extend(Symbol.prototype, {
        deleteSymbol: function (opts) {
            return deleteSymbol(this, opts);
        },
        createChildSymbol: function (symbolName, parentSelector, index, variables) {
            if (!symbolName || !parentSelector) {
                return;
            }
            var parentEle,
                aSymbolInstances,
                self = this;;
            if(typeof parentSelector == 'object') { 
                parentEle = parentSelector;
            } else {
                parentEle = this.find$(parentSelector);
                if(!parentEle) {
                    parentEle = this.$(parentSelector);
                }
            }
                
            if (!parentEle || !parentEle[0]) {
                return;
            }

            aSymbolInstances = createSymbolChild(this.composition, this, symbolName, parentSelector, index, variables);
            if (aSymbolInstances) {
                aSymbolInstances.forEach(function (val) {
                    //addChildSymbol(self, val);
                });
                return aSymbolInstances[0];
            }
        },
        /**
         Get a variable from this instance
         @name getVariable
         @memberOf Edge.Symbol.prototype
         @function
         @param {string} variable Name of the variable to fetch.
         @return The value of the variable.
         */
        getVariable: function (varName) {
            return this.variables[varName];
        },

        /**
         Set a variable on this instance
         @name setVariable
         @memberOf Edge.Symbol.prototype
         @function
         @param {string} variable Name of the variable to set. The variable does not have to be predefined by the Symbol.
         @param value The value to set
         */
        setVariable: function (varName, value) {
            this.variables[varName] = value;
            if (window.edge_authoring_mode) {
	            this._variables[varName] = value;
			}
            // process bindings
            notifyVariableBindings(this, varName);
            return this;
        },
        
        getSymbol: function (selector) {
            var $ele = this.$(selector);
            return Symbol.getSymbol($ele);
        },
        
        getParentSymbol: function () {
            return Symbol.getParentSymbol(this.ele, false);
        },
        
        getChildSymbols: function () {
            return this.ci ? this.ci.slice(0) : [];    //return a copy
        },
        
        playAll: function () {
        	this.play();
        	var childSymbols = this.getChildSymbols();
        	for(var i=0; i<childSymbols.length; i++) {
        	   childSymbols[i].playAll(); // play all of the children
        	}
        	return;
        },

        stopAll: function (ms, executeTriggers) {
        	this.stop(ms, executeTriggers);
        	var childSymbols = this.getChildSymbols();
        	for(var i=0; i<childSymbols.length; i++) {
        	   childSymbols[i].stopAll(ms, executeTriggers); // stop all of the children
        	}
        	return;
        },
        
        /**
        Get the corresponding DOM element node for this Symbol
        @memberOf Edge.Symbol.prototype
        @function
        @return The DOM element node corresponding to this instance.
        @deprecated Use getSymbolElement instead
        */
        getSymbolElementNode: function () {
            return this.ele;
        },

        /**
        Get the corresponding wrapper element object for this Symbol
        @memberOf Edge.Symbol.prototype
        @function
        @return The jQuery element object corresponding to this instance.
        */
        getSymbolElement: function () {
            return Edge.$(this.ele);
        },
        
        // Used in commands inserted in generated file
        _executeMediaAction: function (e, data) {
            if (typeof data !== "object" || data.length < 3) {
                return;
            }

            var actionFunction = data[0];
            var medInstanceSelector = data[1];
            var medInstance = this.$(medInstanceSelector)[0];
            if (!medInstance || !actionFunction) {
                return;
            }

            var args = data[2];
            if (!args || typeof args !== "object") {
                args = null;
            }

            if (actionFunction === "play") {
                if (args && args.length > 0 && typeof args[0] === "number") {
                    medInstance.currentTime = args[0];
                }
                medInstance.play();
            }
            else if (actionFunction === "pause") {
                medInstance.pause();
            }
        },
        // Used in commands inserted in generated file
        _executeSymbolAction: function (e, data) {
            if (typeof data !== "object" || data.length < 3) {
                return;
            }

            var actionFunction = data[0];
            var symInstanceSelector = data[1];
            var symInstance = Edge.Symbol.get(this.$(symInstanceSelector));
            if (!symInstance || !actionFunction) {
                return;
            }

            var args = data[2];
            if (!args || typeof args !== "object") {
                args = null;
            }

            symInstance[actionFunction].apply(symInstance, args);
        },        
        //Alias for _executeSymbolAction used when writing minified content
        eMA: function (e, data) {
            this._executeMediaAction(e, data);
        }
    });
    
    /**
    Get a parameter of this instance
    @name getParameter
    @memberOf Edge.Symbol.prototype
    @function
    @param {string} param Name of the parameter to fetch.
    @return The value of the parameter.
    @deprecated Use sym.getVariable instead.
    */
    Symbol.prototype.getParameter = Symbol.prototype.getVariable;

    /**
    Set a parameter this instance
    @name setParameter
    @memberOf Edge.Symbol.prototype
    @function
    @param {string} param Name of the parameter to set. The parameter does not have to be predefined by the Symbol.
    @param value The value to set
    @deprecated Use sym.setVariable instead
    */
    Symbol.prototype.setParameter = Symbol.prototype.setVariable;        

    $.extend(Composition.prototype, {
        createSymbolChild: function (symbolName, parentSelector, index, variables) {
            return createSymbolChild(this, this.stage, symbolName, parentSelector, index, variables);
        },
        removeSymbol: function (sSelector, opts) {
            if (!this.symbolInstances) {
                return;
            }

            var symInstance = Symbol.get(sSelector);
            if (symInstance) {
                symInstance.deleteSymbol(opts);
            }
        }
    });
}(window.AdobeEdge));
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

;(function () {
	

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new EventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;

});
// Ion.RangeSlider
// version 2.0.1 Build: 276
// © Denis Ineshin, 2014    https://github.com/IonDen
//
// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
// GitHub page:     https://github.com/IonDen/ion.rangeSlider
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

;(function ($, document, window, navigator, undefined) {
    "use strict";

    // =================================================================================================================
    // Service

    var plugin_count = 0;

    var is_old_ie = (function () {
        var n = navigator.userAgent,
            r = /msie\s\d+/i,
            v;
        if (n.search(r) > 0) {
            v = r.exec(n).toString();
            v = v.split(" ")[1];
            if (v < 9) {
                $("html").addClass("lt-ie9");
                return true;
            }
        }
        return false;
    } ());

    var is_touch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


    // IE8 fix
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;
            var slice = [].slice;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function(){};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }



    // =================================================================================================================
    // Template

    var base_html =
        '<span class="irs">' +
        '<span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' +
        '<span class="irs-min">0</span><span class="irs-max">1</span>' +
        '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' +
        '</span>' +
        '<span class="irs-grid"></span>' +
        '<span class="irs-bar"></span>';

    var single_html =
        '<span class="irs-bar-edge"></span>' +
        '<span class="irs-shadow shadow-single"></span>' +
        '<span class="irs-slider single"></span>';

    var double_html =
        '<span class="irs-shadow shadow-from"></span>' +
        '<span class="irs-shadow shadow-to"></span>' +
        '<span class="irs-slider from"></span>' +
        '<span class="irs-slider to"></span>';

    var disable_html =
        '<span class="irs-disable-mask"></span>';



    // =================================================================================================================
    // Core

    var IonRangeSlider = function (input, options, plugin_count) {
        this.VERSION = "2.0.0";
        this.input = input;
        this.plugin_count = plugin_count;
        this.current_plugin = 0;
        this.calc_count = 0;
        this.old_from = 0;
        this.old_to = 0;
        this.raf_id = null;
        this.dragging = false;
        this.force_redraw = false;
        this.is_key = false;
        this.is_update = false;
        this.is_start = true;
        this.is_active = false;
        this.is_resize = false;
        this.is_click = false;

        this.$cache = {
            win: $(window),
            body: $(document.body),
            input: $(input),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            grid: null,
            grid_labels: []
        };

        // get config data attributes
        var $inp = this.$cache.input;
        var data = {
            type: $inp.data("type"),

            min: $inp.data("min"),
            max: $inp.data("max"),
            from: $inp.data("from"),
            to: $inp.data("to"),
            step: $inp.data("step"),

            min_interval: $inp.data("minInterval"),
            max_interval: $inp.data("maxInterval"),

            values: $inp.data("values"),

            from_fixed: $inp.data("fromFixed"),
            from_min: $inp.data("fromMin"),
            from_max: $inp.data("fromMax"),
            from_shadow: $inp.data("fromShadow"),

            to_fixed: $inp.data("toFixed"),
            to_min: $inp.data("toMin"),
            to_max: $inp.data("toMax"),
            to_shadow: $inp.data("toShadow"),

            prettify_enabled: $inp.data("prettifyEnabled"),
            prettify_separator: $inp.data("prettifySeparator"),

            force_edges: $inp.data("forceEdges"),

            keyboard: $inp.data("keyboard"),
            keyboard_step: $inp.data("keyboardStep"),

            grid: $inp.data("grid"),
            grid_margin: $inp.data("gridMargin"),
            grid_num: $inp.data("gridNum"),
            grid_snap: $inp.data("gridSnap"),

            hide_min_max: $inp.data("hideMinMax"),
            hide_from_to: $inp.data("hideFromTo"),

            prefix: $inp.data("prefix"),
            postfix: $inp.data("postfix"),
            max_postfix: $inp.data("maxPostfix"),
            decorate_both: $inp.data("decorateBoth"),
            values_separator: $inp.data("valuesSeparator"),

            disable: $inp.data("disable")
        };
        data.values = data.values && data.values.split(",");
        options = $.extend(data, options);

        // get config from options
        this.options = $.extend({
            type: "single",

            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,

            min_interval: 0,
            max_interval: 0,

            values: [],
            p_values: [],

            from_fixed: false,
            from_min: null,
            from_max: null,
            from_shadow: false,

            to_fixed: false,
            to_min: null,
            to_max: null,
            to_shadow: false,

            prettify_enabled: true,
            prettify_separator: " ",
            prettify: null,

            force_edges: false,

            keyboard: false,
            keyboard_step: 5,

            grid: false,
            grid_margin: true,
            grid_num: 4,
            grid_snap: false,

            hide_min_max: false,
            hide_from_to: false,

            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: true,
            values_separator: " — ",

            disable: false,

            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, options);

        this.validate();

        this.result = {
            input: this.$cache.input,
            slider: null,

            min: this.options.min,
            max: this.options.max,

            from: this.options.from,
            from_percent: 0,
            from_value: null,

            to: this.options.to,
            to_percent: 0,
            to_value: null
        };

        this.coords = {
            // left
            x_gap: 0,
            x_pointer: 0,

            // width
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,

            // percents
            p_gap: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single: 0,
            p_single_real: 0,
            p_from: 0,
            p_from_real: 0,
            p_to: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,

            // grid
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };

        this.labels = {
            // width
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,

            // percents
            p_min: 0,
            p_max: 0,
            p_from: 0,
            p_from_left: 0,
            p_to: 0,
            p_to_left: 0,
            p_single: 0,
            p_single_left: 0
        };

        this.init();
    };

    IonRangeSlider.prototype = {
        init: function (is_update) {
            this.coords.p_step = this.options.step / ((this.options.max - this.options.min) / 100);
            this.target = "base";

            this.toggleInput();
            this.append();
            this.setMinMax();

            if (is_update) {
                this.force_redraw = true;
                this.calc(true);

                if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                    this.options.onUpdate(this.result);
                }
            } else {
                this.force_redraw = true;
                this.calc(true);

                if (this.options.onStart && typeof this.options.onStart === "function") {
                    this.options.onStart(this.result);
                }
            }

            this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
        },

        append: function () {
            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
            this.$cache.input.before(container_html);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;

            this.$cache.cont.html(base_html);
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");

            if (this.options.type === "single") {
                this.$cache.cont.append(single_html);
                this.$cache.s_single = this.$cache.cont.find(".single");
                this.$cache.from[0].style.visibility = "hidden";
                this.$cache.to[0].style.visibility = "hidden";
                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
            } else {
                this.$cache.cont.append(double_html);
                this.$cache.s_from = this.$cache.cont.find(".from");
                this.$cache.s_to = this.$cache.cont.find(".to");
                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");
            }

            if (this.options.hide_from_to) {
                this.$cache.from[0].style.display = "none";
                this.$cache.to[0].style.display = "none";
                this.$cache.single[0].style.display = "none";
            }

            this.appendGrid();

            if (this.options.disable) {
                this.appendDisableMask();
            } else {
                this.$cache.cont.removeClass("irs-disabled");
                this.bindEvents();
            }
        },

        appendDisableMask: function () {
            this.$cache.cont.append(disable_html);
            this.$cache.cont.addClass("irs-disabled");
        },

        remove: function () {
            this.$cache.cont.remove();
            this.$cache.cont = null;

            this.$cache.input.off("keydown.irs_" + this.plugin_count);

            if (is_touch) {

                this.$cache.body.off("touchmove.irs_" + this.plugin_count);
                this.$cache.win.off("touchend.irs_" + this.plugin_count);

            } else {

                this.$cache.body.off("mousemove.irs_" + this.plugin_count);
                this.$cache.win.off("mouseup.irs_" + this.plugin_count);

                if (is_old_ie) {
                    this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                    this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
                }

            }

            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];

            cancelAnimationFrame(this.raf_id);
        },

        bindEvents: function () {
            if (is_touch) {

                this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));

                this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                if (this.options.type === "single") {
                    this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                    this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                } else {
                    this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                    this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                    this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                    this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                }

            } else {

                if (this.options.keyboard) {
                    this.$cache.input.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
                }

                this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

                if (is_old_ie) {
                    this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                    this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
                }

                this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                if (this.options.type === "single") {
                    this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                    this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                } else {
                    this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                    this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                    this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                    this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                }

            }
        },

        pointerMove: function (e) {
            if (!this.dragging) {
                return;
            }
            var e_base = is_touch ? e.originalEvent.touches[0] : e;
            this.coords.x_pointer = e_base.pageX - this.coords.x_gap;

            this.calc();
        },

        pointerUp: function (e) {
            if (this.current_plugin !== this.plugin_count) {
                return;
            }

            if (this.is_active) {
                this.is_active = false;
            } else {
                return;
            }

            var is_function = this.options.onFinish && typeof this.options.onFinish === "function",
                is_original = $.contains(this.$cache.cont[0], e.target) || this.dragging;

            if (is_function && is_original) {
                this.options.onFinish(this.result);
            }

            this.force_redraw = true;
            this.dragging = false;

            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }
        },

        pointerDown: function (target, e) {
            e.preventDefault();
            var e_base = is_touch ? e.originalEvent.touches[0] : e;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_active = true;
            this.dragging = true;

            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = e_base.pageX - this.coords.x_gap;

            this.calcPointer();

            switch (target) {
                case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single);
                    break;
                case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to);
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
            }

            if (is_old_ie) {
                $("*").prop("unselectable", true);
            }

            this.$cache.input.trigger("focus");
        },

        pointerClick: function (target, e) {
            e.preventDefault();
            var e_base = is_touch ? e.originalEvent.touches[0] : e;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_click = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = +(e_base.pageX - this.coords.x_gap).toFixed();

            this.force_redraw = true;
            this.calc();

            this.$cache.input.trigger("focus");
        },

        key: function (target, e) {
            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }

            switch (e.which) {
                case 83: // W
                case 65: // A
                case 40: // DOWN
                case 37: // LEFT
                    e.preventDefault();
                    this.moveByKey(false);
                    break;

                case 87: // S
                case 68: // D
                case 38: // UP
                case 39: // RIGHT
                    e.preventDefault();
                    this.moveByKey(true);
                    break;
            }

            return true;
        },

        // Move by key beta
        // TODO: refactor than have plenty of time
        moveByKey: function (right) {
            var p = this.coords.p_pointer;

            if (right) {
                p += this.options.keyboard_step;
            } else {
                p -= this.options.keyboard_step;
            }

            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
            this.is_key = true;
            this.calc();
        },

        setMinMax: function () {
            if (this.options.hide_min_max) {
                this.$cache.min[0].style.display = "none";
                this.$cache.max[0].style.display = "none";
                return;
            }

            if (this.options.values.length) {
                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            } else {
                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
            }

            this.labels.w_min = this.$cache.min.outerWidth(false);
            this.labels.w_max = this.$cache.max.outerWidth(false);
        },



        // =============================================================================================================
        // Calculations

        calc: function (update) {
            this.calc_count++;

            if (this.calc_count === 10 || update) {
                this.calc_count = 0;
                this.coords.w_rs = this.$cache.rs.outerWidth(false);
                if (this.options.type === "single") {
                    this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                } else {
                    this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                }
            }

            if (!this.coords.w_rs) {
                return;
            }

            this.calcPointer();

            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            var real_width = 100 - this.coords.p_handle,
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

            if (this.target === "click") {
                real_x = this.toFixed(this.coords.p_pointer - (this.coords.p_handle / 2));
                this.target = this.chooseHandle(real_x);
            }

            if (real_x < 0) {
                real_x = 0;
            } else if (real_x > real_width) {
                real_x = real_width;
            }

            switch (this.target) {
                case "base":
                    var w = (this.options.max - this.options.min) / 100,
                        f = (this.result.from - this.options.min) / w,
                        t = (this.result.to - this.options.min) / w;

                    this.coords.p_single_real = this.toFixed(f);
                    this.coords.p_from_real = this.toFixed(f);
                    this.coords.p_to_real = this.toFixed(t);

                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

                    this.coords.p_single = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_from = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_to = this.toFixed(t - (this.coords.p_handle / 100 * t));

                    this.target = null;

                    break;

                case "single":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_single_real = this.calcWithStep(real_x / real_width * 100);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_single = this.toFixed(this.coords.p_single_real / 100 * real_width);

                    break;

                case "from":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_from_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_from_real > this.coords.p_to_real) {
                        this.coords.p_from_real = this.coords.p_to_real;
                    }
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);

                    break;

                case "to":
                    if (this.options.to_fixed) {
                        break;
                    }

                    this.coords.p_to_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_to_real < this.coords.p_from_real) {
                        this.coords.p_to_real = this.coords.p_from_real;
                    }
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);

                    break;
            }

            if (this.options.type === "single") {
                this.coords.p_bar_x = (this.coords.p_handle / 2);
                this.coords.p_bar_w = this.coords.p_single;

                this.result.from_percent = this.coords.p_single_real;
                this.result.from = this.calcReal(this.coords.p_single_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                }
            } else {
                this.coords.p_bar_x = this.toFixed(this.coords.p_from + (this.coords.p_handle / 2));
                this.coords.p_bar_w = this.toFixed(this.coords.p_to - this.coords.p_from);

                this.result.from_percent = this.coords.p_from_real;
                this.result.from = this.calcReal(this.coords.p_from_real);
                this.result.to_percent = this.coords.p_to_real;
                this.result.to = this.calcReal(this.coords.p_to_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                    this.result.to_value = this.options.values[this.result.to];
                }
            }

            this.calcMinMax();
            this.calcLabels();
        },

        calcPointer: function () {
            if (!this.coords.w_rs) {
                this.coords.p_pointer = 0;
                return;
            }

            if (this.coords.x_pointer < 0) {
                this.coords.x_pointer = 0;
            } else if (this.coords.x_pointer > this.coords.w_rs) {
                this.coords.x_pointer = this.coords.w_rs;
            }

            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
        },

        chooseHandle: function (real_x) {
            if (this.options.type === "single") {
                return "single";
            } else {
                var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
                if (real_x >= m_point) {
                    return "to";
                } else {
                    return "from";
                }
            }
        },

        calcMinMax: function () {
            if (!this.coords.w_rs) {
                return;
            }

            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
        },

        calcLabels: function () {
            if (!this.coords.w_rs || this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = this.coords.p_single + (this.coords.p_handle / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);

            } else {

                this.labels.w_from = this.$cache.from.outerWidth(false);
                this.labels.p_from = this.labels.w_from / this.coords.w_rs * 100;
                this.labels.p_from_left = this.coords.p_from + (this.coords.p_handle / 2) - (this.labels.p_from / 2);
                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from);

                this.labels.w_to = this.$cache.to.outerWidth(false);
                this.labels.p_to = this.labels.w_to / this.coords.w_rs * 100;
                this.labels.p_to_left = this.coords.p_to + (this.coords.p_handle / 2) - (this.labels.p_to / 2);
                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to);

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to) / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);

            }
        },



        // =============================================================================================================
        // Drawings

        updateScene: function () {
            this.drawHandles();

            this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
        },

        drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(false);

            if (this.coords.w_rs !== this.coords.w_rs_old) {
                this.target = "base";
                this.is_resize = true;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                this.setMinMax();
                this.calc(true);
                this.drawLabels();
                if (this.options.grid) {
                    this.calcGridMargin();
                    this.calcGridLabels();
                }
                this.force_redraw = true;
                this.coords.w_rs_old = this.coords.w_rs;
                this.drawShadow();
            }

            if (!this.coords.w_rs) {
                return;
            }

            if (!this.dragging && !this.force_redraw && !this.is_key) {
                return;
            }

            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

                this.drawLabels();

                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

                if (this.options.type === "single") {
                    this.$cache.s_single[0].style.left = this.coords.p_single + "%";

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value);
                        this.$cache.input.data("from", this.result.from_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from);
                        this.$cache.input.data("from", this.result.from);
                    }
                } else {
                    this.$cache.s_from[0].style.left = this.coords.p_from + "%";
                    this.$cache.s_to[0].style.left = this.coords.p_to + "%";

                    if (this.old_from !== this.result.from || this.force_redraw) {
                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                    }
                    if (this.old_to !== this.result.to || this.force_redraw) {
                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                    }

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value + ";" + this.result.to_value);
                        this.$cache.input.data("from", this.result.from_value);
                        this.$cache.input.data("to", this.result.to_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from + ";" + this.result.to);
                        this.$cache.input.data("from", this.result.from);
                        this.$cache.input.data("to", this.result.to);
                    }
                }
                this.$cache.input.trigger("change");

                this.old_from = this.result.from;
                this.old_to = this.result.to;

                var is_function = this.options.onChange && typeof this.options.onChange === "function" && !this.is_resize;
                if (is_function && !this.is_update && !this.is_start) {
                    this.options.onChange(this.result);
                }

                var is_finish = this.options.onFinish && typeof this.options.onFinish === "function";
                if (is_finish && (this.is_key || this.is_click)) {
                    this.options.onFinish(this.result);
                }

                this.is_update = false;
                this.is_resize = false;
            }

            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        },

        drawLabels: function () {
            var values_num = this.options.values.length,
                p_values = this.options.p_values,
                text_single,
                text_from,
                text_to;

            if (this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                if (values_num) {
                    text_single = this.decorate(p_values[this.result.from]);
                    this.$cache.single.html(text_single);
                } else {
                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                    this.$cache.single.html(text_single);
                }

                this.calcLabels();

                if (this.labels.p_single_left < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (this.labels.p_single_left + this.labels.p_single > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            } else {

                if (values_num) {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(p_values[this.result.from]);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(p_values[this.result.to]);
                    } else {
                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                    }
                    text_from = this.decorate(p_values[this.result.from]);
                    text_to = this.decorate(p_values[this.result.to]);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                } else {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(this._prettify(this.result.from));
                        text_single += this.options.values_separator;
                        text_single += this.decorate(this._prettify(this.result.to));
                    } else {
                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.from);
                    }
                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                }

                this.calcLabels();

                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                    single_left = this.labels.p_single_left + this.labels.p_single,
                    to_left = this.labels.p_to_left + this.labels.p_to,
                    max = Math.max(single_left, to_left);

                if (this.labels.p_from_left + this.labels.p_from >= this.labels.p_to_left) {
                    this.$cache.from[0].style.visibility = "hidden";
                    this.$cache.to[0].style.visibility = "hidden";
                    this.$cache.single[0].style.visibility = "visible";

                    if (this.result.from === this.result.to) {
                        this.$cache.from[0].style.visibility = "visible";
                        this.$cache.single[0].style.visibility = "hidden";
                        max = to_left;
                    } else {
                        this.$cache.from[0].style.visibility = "hidden";
                        this.$cache.single[0].style.visibility = "visible";
                        max = Math.max(single_left, to_left);
                    }
                } else {
                    this.$cache.from[0].style.visibility = "visible";
                    this.$cache.to[0].style.visibility = "visible";
                    this.$cache.single[0].style.visibility = "hidden";
                }

                if (min < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (max > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            }
        },

        drawShadow: function () {
            var o = this.options,
                c = this.$cache,
                from_min,
                from_max,
                to_min,
                to_max;

            if (o.type === "single") {
                if (o.from_shadow && (o.from_min || o.from_max)) {
                    from_min = this.calcPercent(o.from_min || o.min);
                    from_max = this.calcPercent(o.from_max || o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_single[0].style.display = "block";
                    c.shad_single[0].style.left = from_min + "%";
                    c.shad_single[0].style.width = from_max + "%";
                } else {
                    c.shad_single[0].style.display = "none";
                }
            } else {
                if (o.from_shadow && (o.from_min || o.from_max)) {
                    from_min = this.calcPercent(o.from_min || o.min);
                    from_max = this.calcPercent(o.from_max || o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_from[0].style.display = "block";
                    c.shad_from[0].style.left = from_min + "%";
                    c.shad_from[0].style.width = from_max + "%";
                } else {
                    c.shad_from[0].style.display = "none";
                }

                if (o.to_shadow && (o.to_min || o.to_max)) {
                    to_min = this.calcPercent(o.to_min || o.min);
                    to_max = this.calcPercent(o.to_max || o.max) - to_min;
                    to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
                    to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
                    to_min = to_min + (this.coords.p_handle / 2);

                    c.shad_to[0].style.display = "block";
                    c.shad_to[0].style.left = to_min + "%";
                    c.shad_to[0].style.width = to_max + "%";
                } else {
                    c.shad_to[0].style.display = "none";
                }
            }
        },



        // =============================================================================================================
        // Service methods

        toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input");
        },

        calcPercent: function (num) {
            var w = (this.options.max - this.options.min) / 100,
                percent = (num - this.options.min) / w;

            return this.toFixed(percent);
        },

        calcReal: function (percent) {
            var min = this.options.min,
                max = this.options.max,
                abs = 0;

            if (min < 0) {
                abs = Math.abs(min);
                min = min + abs;
                max = max + abs;
            }

            var number = ((max - min) / 100 * percent) + min,
                string = this.options.step.toString().split(".")[1];

            if (string) {
                number = +number.toFixed(string.length);
            } else {
                number = number / this.options.step;
                number = number * this.options.step;
                number = +number.toFixed(0);
            }

            if (abs) {
                number -= abs;
            }

            if (number < this.options.min) {
                number = this.options.min;
            } else if (number > this.options.max) {
                number = this.options.max;
            }

            if (string) {
                return +number.toFixed(string.length);
            } else {
                return this.toFixed(number);
            }
        },

        calcWithStep: function (percent) {
            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

            if (rounded > 100) {
                rounded = 100;
            }
            if (percent === 100) {
                rounded = 100;
            }

            return this.toFixed(rounded);
        },

        checkInterval: function (p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.min_interval && !o.max_interval) {
                return p_current;
            }

            current = this.calcReal(p_current);
            next = this.calcReal(p_next);

            if (type === "from") {

                if (o.min_interval && next - current < o.min_interval) {
                    current = next - o.min_interval;
                }
                if (o.max_interval && next - current > o.max_interval) {
                    current = next - o.max_interval;
                }

            } else {

                if (o.min_interval && current - next < o.min_interval) {
                    current = next + o.min_interval;
                }
                if (o.max_interval && current - next > o.max_interval) {
                    current = next + o.max_interval;
                }

            }

            return this.calcPercent(current);
        },

        checkDiapason: function (p_num, min, max) {
            if (!min && !max) {
                return p_num;
            }

            var num = this.calcReal(p_num);

            if (typeof min === "number" && num < min) {
                num = min;
            }

            if (typeof max === "number" && num > max) {
                num = max;
            }

            return this.calcPercent(num);
        },

        toFixed: function (num) {
            num = num.toFixed(5);
            return +num;
        },

        _prettify: function (num) {
            if (!this.options.prettify_enabled) {
                return num;
            }

            if (this.options.prettify && typeof this.options.prettify === "function") {
                return this.options.prettify(num);
            } else {
                return this.prettify(num);
            }
        },

        prettify: function (num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        },

        checkEdges: function (left, width) {
            if (!this.options.force_edges) {
                return this.toFixed(left);
            }

            if (left < 0) {
                left = 0;
            } else if (left > 100 - width) {
                left = 100 - width;
            }

            return this.toFixed(left);
        },

        validate: function () {
            var o = this.options,
                r = this.result,
                v = o.values,
                vl = v.length,
                value,
                i;

            if (typeof o.min === "string") o.min = +o.min;
            if (typeof o.max === "string") o.max = +o.max;
            if (typeof o.from === "string") o.from = +o.from;
            if (typeof o.to === "string") o.to = +o.to;
            if (typeof o.step === "string") o.step = +o.step;

            if (typeof o.from_min === "string") o.from_min = +o.from_min;
            if (typeof o.from_max === "string") o.from_max = +o.from_max;
            if (typeof o.to_min === "string") o.to_min = +o.to_min;
            if (typeof o.to_max === "string") o.to_max = +o.to_max;

            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

            if (o.max <= o.min) {
                if (o.min) {
                    o.max = o.min * 2;
                } else {
                    o.max = o.min + 1;
                }
                o.step = 1;
            }

            if (vl) {
                o.p_values = [];
                o.min = 0;
                o.max = vl - 1;
                o.step = 1;
                o.grid_num = o.max;
                o.grid_snap = true;


                for (i = 0; i < vl; i++) {
                    value = +v[i];

                    if (!isNaN(value)) {
                        v[i] = value;
                        value = this._prettify(value);
                    } else {
                        value = v[i];
                    }

                    o.p_values.push(value);
                }
            }

            if (typeof o.from !== "number" || isNaN(o.from)) {
                o.from = o.min;
            }

            if (typeof o.to !== "number" || isNaN(o.from)) {
                o.to = o.max;
            }

            if (o.from < o.min || o.from > o.max) {
                o.from = o.min;
            }

            if (o.to > o.max || o.to < o.min) {
                o.to = o.max;
            }

            if (o.from > o.to) {
                o.from = o.to;
            }

            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                o.step = 1;
            }

            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
                o.keyboard_step = 5;
            }

            if (o.from_min && o.from < o.from_min) {
                o.from = o.from_min;
            }

            if (o.from_max && o.from > o.from_max) {
                o.from = o.from_max;
            }

            if (o.to_min && o.to < o.to_min) {
                o.to = o.to_min;
            }

            if (o.to_max && o.from > o.to_max) {
                o.to = o.to_max;
            }

            if (r) {
                if (r.min !== o.min) {
                    r.min = o.min;
                }

                if (r.max !== o.max) {
                    r.max = o.max;
                }

                if (r.from < r.min || r.from > r.max) {
                    r.from = o.from;
                }

                if (r.to < r.min || r.to > r.max) {
                    r.to = o.to;
                }
            }

            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                o.min_interval = 0;
            }

            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                o.max_interval = 0;
            }

            if (o.min_interval && o.min_interval > o.max - o.min) {
                o.min_interval = o.max - o.min;
            }

            if (o.max_interval && o.max_interval > o.max - o.min) {
                o.max_interval = o.max - o.min;
            }
        },

        decorate: function (num, original) {
            var decorated = "",
                o = this.options;

            if (o.prefix) {
                decorated += o.prefix;
            }

            decorated += num;

            if (o.max_postfix) {
                if (o.values.length && num === o.p_values[o.max]) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                } else if (original === o.max) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                }
            }

            if (o.postfix) {
                decorated += o.postfix;
            }

            return decorated;
        },

        updateFrom: function () {
            this.result.from = this.options.from;
            this.result.from_percent = this.calcPercent(this.result.from);
            if (this.options.values) {
                this.result.from_value = this.options.values[this.result.from];
            }
        },

        updateTo: function () {
            this.result.to = this.options.to;
            this.result.to_percent = this.calcPercent(this.result.to);
            if (this.options.values) {
                this.result.to_value = this.options.values[this.result.to];
            }
        },

        updateResult: function (options) {
            this.result.min = this.options.min;
            this.result.max = this.options.max;

            if (options) {

                if (typeof options.from === "string") options.from = +options.from;
                if (typeof options.to === "string") options.to = +options.to;

                if (typeof options.from === "number" && !isNaN(options.from)) {
                    this.updateFrom();
                }

                if (typeof options.to === "number" && !isNaN(options.to)) {
                    this.updateTo();
                }

            } else {

                this.updateFrom();
                this.updateTo();

            }
        },


        // =============================================================================================================
        // Grid

        appendGrid: function () {
            if (!this.options.grid) {
                return;
            }

            var o = this.options,
                i, z,

                total = o.max - o.min,
                big_num = o.grid_num,
                big_p = 0,
                big_w = 0,

                small_max = 4,
                local_small_max,
                small_p,
                small_w = 0,

                result,
                html = '';



            this.calcGridMargin();

            if (o.grid_snap) {
                big_num = total / o.step;
                big_p = this.toFixed(o.step / (total / 100));
            } else {
                big_p = this.toFixed(100 / big_num);
            }

            if (big_num > 4) {
                small_max = 3;
            }
            if (big_num > 7) {
                small_max = 2;
            }
            if (big_num > 14) {
                small_max = 1;
            }
            if (big_num > 28) {
                small_max = 0;
            }

            for (i = 0; i < big_num + 1; i++) {
                local_small_max = small_max;

                big_w = this.toFixed(big_p * i);
                if (big_w > 100) {
                    big_w = 100;

                    local_small_max -= 2;
                    if (local_small_max < 0) {
                        local_small_max = 0;
                    }
                }
                this.coords.big[i] = big_w;

                small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

                for (z = 1; z <= local_small_max; z++) {
                    if (big_w === 0) {
                        break;
                    }

                    small_w = this.toFixed(big_w - (small_p * z));

                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                }

                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

                result = this.calcReal(big_w);
                if (o.values.length) {
                    result = o.p_values[result];
                } else {
                    result = this._prettify(result);
                }

                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
            }
            this.coords.big_num = Math.ceil(big_num + 1);



            this.$cache.cont.addClass("irs-with-grid");
            this.$cache.grid.html(html);
            this.cacheGridLabels();
        },

        cacheGridLabels: function () {
            var $label, i,
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                $label = this.$cache.grid.find(".js-grid-text-" + i);
                this.$cache.grid_labels.push($label);
            }

            this.calcGridLabels();
        },

        calcGridLabels: function () {
            var i, label, start = [], finish = [],
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
            }

            if (this.options.force_edges) {
                if (start[0] < this.coords.grid_gap) {
                    start[0] = this.coords.grid_gap;
                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

                    this.coords.big_x[0] = this.coords.grid_gap;
                }

                if (finish[num - 1] > 100 - this.coords.grid_gap) {
                    finish[num - 1] = 100 - this.coords.grid_gap;
                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                }
            }

            this.calcGridCollision(2, start, finish);
            this.calcGridCollision(4, start, finish);

            for (i = 0; i < num; i++) {
                label = this.$cache.grid_labels[i][0];
                label.style.marginLeft = -this.coords.big_x[i] + "%";
            }
        },

        // Collisions Calc Beta
        // TODO: Refactor then have plenty of time
        calcGridCollision: function (step, start, finish) {
            var i, next_i, label,
                num = this.coords.big_num;

            for (i = 0; i < num; i += step) {
                next_i = i + (step / 2);
                if (next_i >= num) {
                    break;
                }

                label = this.$cache.grid_labels[next_i][0];

                if (finish[i] <= start[next_i]) {
                    label.style.visibility = "visible";
                } else {
                    label.style.visibility = "hidden";
                }
            }
        },

        calcGridMargin: function () {
            if (!this.options.grid_margin) {
                return;
            }

            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }

            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle  / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        },



        // =============================================================================================================
        // Public methods

        update: function (options) {
            this.is_update = true;
            this.options = $.extend(this.options, options);
            this.validate();
            this.updateResult(options);

            this.toggleInput();
            this.remove();
            this.init(true);
        },

        reset: function () {
            this.updateResult();
            this.update();
        },

        destroy: function () {
            this.toggleInput();
            $.data(this.input, "ionRangeSlider", null);

            this.remove();
            this.input = null;
            this.options = null;
        }
    };

    $.fn.ionRangeSlider = function (options) {
        return this.each(function() {
            if (!$.data(this, "ionRangeSlider")) {
                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
            }
        });
    };



    // =================================================================================================================
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

} (jQuery, document, window, navigator));

/*!
 * Isotope PACKAGED v2.1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */

( function( window ) {



// -------------------------- utils -------------------------- //

var slice = Array.prototype.slice;

function noop() {}

// -------------------------- definition -------------------------- //

function defineBridget( $ ) {

// bail if no jQuery
if ( !$ ) {
  return;
}

// -------------------------- addOptionMethod -------------------------- //

/**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
function addOptionMethod( PluginClass ) {
  // don't overwrite original option method
  if ( PluginClass.prototype.option ) {
    return;
  }

  // option setter
  PluginClass.prototype.option = function( opts ) {
    // bail out if not an object
    if ( !$.isPlainObject( opts ) ){
      return;
    }
    this.options = $.extend( true, this.options, opts );
  };
}

// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

/**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
function bridge( namespace, PluginClass ) {
  // add to jQuery fn namespace
  $.fn[ namespace ] = function( options ) {
    if ( typeof options === 'string' ) {
      // call plugin method when first argument is a string
      // get arguments for method
      var args = slice.call( arguments, 1 );

      for ( var i=0, len = this.length; i < len; i++ ) {
        var elem = this[i];
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( "cannot call methods on " + namespace + " prior to initialization; " +
            "attempted to call '" + options + "'" );
          continue;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
          logError( "no such method '" + options + "' for " + namespace + " instance" );
          continue;
        }

        // trigger method with arguments
        var returnValue = instance[ options ].apply( instance, args );

        // break look and return first value if provided
        if ( returnValue !== undefined ) {
          return returnValue;
        }
      }
      // return this if no return value
      return this;
    } else {
      return this.each( function() {
        var instance = $.data( this, namespace );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( this, options );
          $.data( this, namespace, instance );
        }
      });
    }
  };

}

// -------------------------- bridget -------------------------- //

/**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
$.bridget = function( namespace, PluginClass ) {
  addOptionMethod( PluginClass );
  bridge( namespace, PluginClass );
};

return $.bridget;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );
} else if ( typeof exports === 'object' ) {
  defineBridget( require('jquery') );
} else {
  // get jquery from browser global
  defineBridget( window.jQuery );
}

})( window );

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {



var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function onReady( event ) {
  // bail if already triggered or IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }

  trigger();
}

function trigger() {
  docReady.isReady = true;
  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  // trigger ready if page is ready
  if ( document.readyState === 'complete' ) {
    trigger();
  } else {
    // listen for events
    eventie.bind( document, 'DOMContentLoaded', onReady );
    eventie.bind( document, 'readystatechange', onReady );
    eventie.bind( window, 'load', onReady );
  }

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

/*!
 * EventEmitter v4.2.9 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
    

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter',[],function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'get-style-property/get-style-property',[],function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

/**
 * matchesSelector v1.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  

  var matchesMethod = ( function() {
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',[],function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

/**
 * Outlayer Item
 */

( function( window ) {



// ----- get style ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDash( str ) {
  return str.replace( /([A-Z])/g, function( $1 ){
    return '-' + $1.toLowerCase();
  });
}

// -------------------------- Outlayer definition -------------------------- //

function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  if ( layoutOptions.isOriginLeft ) {
    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
    // reset other property
    style.right = '';
  } else {
    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
    style.left = '';
  }

  if ( layoutOptions.isOriginTop ) {
    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
    style.bottom = '';
  } else {
    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
    style.top = '';
  }

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.on( 'transitionEnd', function() {
    _this.removeElem();
    return true; // bind once
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true
  });
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: {
      opacity: function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if ( this.isHidden ) {
          this.css({ display: 'none' });
        }
      }
    }
  });
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/item',[
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'get-style-property/get-style-property'
    ],
    outlayerItemDefinition );
} else if (typeof exports === 'object') {
  // CommonJS
  module.exports = outlayerItemDefinition(
    require('wolfy87-eventemitter'),
    require('get-size'),
    require('desandro-get-style-property')
  );
} else {
  // browser global
  window.Outlayer = {};
  window.Outlayer.Item = outlayerItemDefinition(
    window.EventEmitter,
    window.getSize,
    window.getStyleProperty
  );
}

})( window );

/*!
 * Outlayer v1.3.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window ) {



// ----- vars ----- //

var document = window.document;
var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}


var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// http://stackoverflow.com/a/384380/182183
var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj === 'object' &&
      obj.nodeType === 1 && typeof obj.nodeName === 'string';
  };

// index of helper cause IE8
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

function removeFrom( obj, ary ) {
  var index = indexOf( ary, obj );
  if ( index !== -1 ) {
    ary.splice( index, 1 );
  }
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDashed( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
}


function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  // use element as selector string
  if ( typeof element === 'string' ) {
    element = document.querySelector( element );
  }

  // bail out if not proper element
  if ( !element || !isElement( element ) ) {
    if ( console ) {
      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
    }
    return;
  }

  this.element = element;

  // options
  this.options = extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  // make array of elems
  elems = makeArray( elems );
  var itemSelector = this.options.itemSelector;
  var itemElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have an item selector
    if ( itemSelector ) {
      // filter siblings
      if ( matchesSelector( elem, itemSelector ) ) {
        itemElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( itemSelector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        itemElems.push( childElems[j] );
      }
    } else {
      itemElems.push( elem );
    }
  }

  return itemElems;
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  var _this = this;
  function onItemsLayout() {
    _this.emitEvent( 'layoutComplete', [ _this, items ] );
  }

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    onItemsLayout();
    return;
  }

  // emit layoutComplete when done
  this._itemsOn( items, 'layout', onItemsLayout );

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * trigger a callback for a collection of items events
 * @param {Array} items - Outlayer.Items
 * @param {String} eventName
 * @param {Function} callback
 */
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
  var doneCount = 0;
  var count = items.length;
  // event callback
  var _this = this;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      callback.call( _this );
    }
    return true; // bind once
  }
  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.on( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    removeFrom( elem, this.stamps );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  if ( !elems || !elems.length ) {
    return;
  }
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  elems = makeArray( elems );

  var removeItems = this.getItems( elems );
  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  this._itemsOn( removeItems, 'remove', function() {
    this.emitEvent( 'removeComplete', [ this, removeItems ] );
  });

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    removeFrom( item, this.items );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = extend( {}, Outlayer.defaults );
  // apply new options
  extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  /**
   * allow user to initialize Outlayer via .js-namespace class
   * options are parsed from data-namespace-option attribute
   */
  docReady( function() {
    var dashedNamespace = toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new Layout( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/outlayer',[
      'eventie/eventie',
      'doc-ready/doc-ready',
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'matches-selector/matches-selector',
      './item'
    ],
    outlayerDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = outlayerDefinition(
    require('eventie'),
    require('doc-ready'),
    require('wolfy87-eventemitter'),
    require('get-size'),
    require('desandro-matches-selector'),
    require('./item')
  );
} else {
  // browser global
  window.Outlayer = outlayerDefinition(
    window.eventie,
    window.docReady,
    window.EventEmitter,
    window.getSize,
    window.matchesSelector,
    window.Outlayer.Item
  );
}

})( window );

/**
 * Isotope Item
**/

( function( window ) {



// -------------------------- Item -------------------------- //

function itemDefinition( Outlayer ) {

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

Item.prototype = new Outlayer.Item();

Item.prototype._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  Outlayer.Item.prototype._create.call( this );
  this.sortData = {};
};

Item.prototype.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = Item.prototype.destroy;
Item.prototype.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'isotope/js/item',[
      'outlayer/outlayer'
    ],
    itemDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = itemDefinition(
    require('outlayer')
  );
} else {
  // browser global
  window.Isotope = window.Isotope || {};
  window.Isotope.Item = itemDefinition(
    window.Outlayer
  );
}

})( window );

( function( window ) {



// --------------------------  -------------------------- //

function layoutModeDefinition( getSize, Outlayer ) {

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  ( function() {
    var facadeMethods = [
      '_resetLayout',
      '_getItemLayoutPosition',
      '_manageStamp',
      '_getContainerSize',
      '_getElementOffset',
      'needsResizeLayout'
    ];

    for ( var i=0, len = facadeMethods.length; i < len; i++ ) {
      var methodName = facadeMethods[i];
      LayoutMode.prototype[ methodName ] = getOutlayerMethod( methodName );
    }

    function getOutlayerMethod( methodName ) {
      return function() {
        return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
      };
    }
  })();

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  LayoutMode.prototype.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight !== this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  LayoutMode.prototype._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  LayoutMode.prototype.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  LayoutMode.prototype.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  LayoutMode.prototype.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  LayoutMode.prototype.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  LayoutMode.prototype.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  LayoutMode.prototype.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = new LayoutMode();

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };


  return LayoutMode;

}

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'isotope/js/layout-mode',[
      'get-size/get-size',
      'outlayer/outlayer'
    ],
    layoutModeDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = layoutModeDefinition(
    require('get-size'),
    require('outlayer')
  );
} else {
  // browser global
  window.Isotope = window.Isotope || {};
  window.Isotope.LayoutMode = layoutModeDefinition(
    window.getSize,
    window.Outlayer
  );
}


})( window );

/*!
 * Masonry v3.2.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

var indexOf = Array.prototype.indexOf ?
  function( items, value ) {
    return items.indexOf( value );
  } :
  function ( items, value ) {
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      if ( item === value ) {
        return i;
      }
    }
    return -1;
  };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
function masonryDefinition( Outlayer, getSize ) {
  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    this.columnWidth += this.gutter;

    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
    this.cols = Math.max( this.cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth !== this.containerWidth;
  };

  return Masonry;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'masonry/masonry',[
      'outlayer/outlayer',
      'get-size/get-size'
    ],
    masonryDefinition );
} else if (typeof exports === 'object') {
  module.exports = masonryDefinition(
    require('outlayer'),
    require('get-size')
  );
} else {
  // browser global
  window.Masonry = masonryDefinition(
    window.Outlayer,
    window.getSize
  );
}

})( window );

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
function masonryDefinition( LayoutMode, Masonry ) {
  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  // save on to these methods
  var _getElementOffset = MasonryMode.prototype._getElementOffset;
  var layout = MasonryMode.prototype.layout;
  var _getMeasurement = MasonryMode.prototype._getMeasurement;

  // sub-class Masonry
  extend( MasonryMode.prototype, Masonry.prototype );

  // set back, as it was overwritten by Masonry
  MasonryMode.prototype._getElementOffset = _getElementOffset;
  MasonryMode.prototype.layout = layout;
  MasonryMode.prototype._getMeasurement = _getMeasurement;

  var measureColumns = MasonryMode.prototype.measureColumns;
  MasonryMode.prototype.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // HACK copy over isOriginLeft/Top options
  var _manageStamp = MasonryMode.prototype._manageStamp;
  MasonryMode.prototype._manageStamp = function() {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft;
    this.options.isOriginTop = this.isotope.options.isOriginTop;
    _manageStamp.apply( this, arguments );
  };

  return MasonryMode;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'isotope/js/layout-modes/masonry',[
      '../layout-mode',
      'masonry/masonry'
    ],
    masonryDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = masonryDefinition(
    require('../layout-mode'),
    require('masonry-layout')
  );
} else {
  // browser global
  masonryDefinition(
    window.Isotope.LayoutMode,
    window.Masonry
  );
}

})( window );

( function( window ) {



function fitRowsDefinition( LayoutMode ) {

var FitRows = LayoutMode.create('fitRows');

FitRows.prototype._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

FitRows.prototype._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

FitRows.prototype._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'isotope/js/layout-modes/fit-rows',[
      '../layout-mode'
    ],
    fitRowsDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = fitRowsDefinition(
    require('../layout-mode')
  );
} else {
  // browser global
  fitRowsDefinition(
    window.Isotope.LayoutMode
  );
}

})( window );

( function( window ) {



function verticalDefinition( LayoutMode ) {

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

Vertical.prototype._resetLayout = function() {
  this.y = 0;
};

Vertical.prototype._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

Vertical.prototype._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'isotope/js/layout-modes/vertical',[
      '../layout-mode'
    ],
    verticalDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = verticalDefinition(
    require('../layout-mode')
  );
} else {
  // browser global
  verticalDefinition(
    window.Isotope.LayoutMode
  );
}

})( window );

/*!
 * Isotope v2.1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

( function( window ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

var docElem = document.documentElement;

var getText = docElem.textContent ?
  function( elem ) {
    return elem.textContent;
  } :
  function( elem ) {
    return elem.innerText;
  };

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// index of helper cause IE8
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

function removeFrom( obj, ary ) {
  var index = indexOf( ary, obj );
  if ( index !== -1 ) {
    ary.splice( index, 1 );
  }
}

// -------------------------- isotopeDefinition -------------------------- //

// used for AMD definition and requires
function isotopeDefinition( Outlayer, getSize, matchesSelector, Item, LayoutMode ) {
  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: "masonry",
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  Isotope.prototype._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  Isotope.prototype.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  Isotope.prototype._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  Isotope.prototype._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  Isotope.prototype.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this.options.isInitLayout ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  Isotope.prototype._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  Isotope.prototype.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout
    this.filteredItems = this._filter( this.items );
    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  Isotope.prototype._init = Isotope.prototype.arrange;

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  Isotope.prototype._getIsInstant = function() {
    var isInstant = this.options.isLayoutInstant !== undefined ?
      this.options.isLayoutInstant : !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // -------------------------- filter -------------------------- //

  Isotope.prototype._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    var _this = this;
    function hideReveal() {
      _this.reveal( hiddenMatched );
      _this.hide( visibleUnmatched );
    }

    if ( this._isInstant ) {
      this._noTransition( hideReveal );
    } else {
      hideReveal();
    }

    return matches;
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  Isotope.prototype._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter === 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  Isotope.prototype.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  Isotope.prototype._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  Isotope.prototype._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter !== 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      var getValue;
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        getValue = function( elem ) {
          return elem.getAttribute( attr );
        };
      } else {
        // otherwise, assume its a querySelector, and get its text
        getValue = function( elem ) {
          var child = elem.querySelector( query );
          return child && getText( child );
        };
      }
      return getValue;
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  Isotope.prototype._sort = function() {
    var sortByOpt = this.options.sortBy;
    if ( !sortByOpt ) {
      return;
    }
    // concat all sortBy and sortHistory
    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
    // sort magic
    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
    // keep track of sortBy History
    if ( sortByOpt !== this.sortHistory[0] ) {
      // add to front, oldest goes in last
      this.sortHistory.unshift( sortByOpt );
    }
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0, len = sortBys.length; i < len; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  Isotope.prototype._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  Isotope.prototype._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  Isotope.prototype._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  Isotope.prototype._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  Isotope.prototype._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  Isotope.prototype.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  Isotope.prototype.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  Isotope.prototype.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // add items to beginning of collection
    var previousItems = this.items.slice(0);
    this.items = items.concat( previousItems );
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // layout new stuff without transition
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( previousItems );
    // add to filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
  };

  Isotope.prototype._filterRevealAdded = function( items ) {
    var filteredItems = this._noTransition( function() {
      return this._filter( items );
    });
    // layout and reveal just the new items
    this.layoutItems( filteredItems, true );
    this.reveal( filteredItems );
    return items;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  Isotope.prototype.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    /*
    // this way adds hides new filtered items with NO transition
    // so user can't see if new hidden items have been inserted
    var filteredInsertItems;
    this._noTransition( function() {
      filteredInsertItems = this._filter( items );
      // hide all new items
      this.hide( filteredInsertItems );
    });
    // */
    // this way hides new filtered items with transition
    // so user at least sees that something has been added
    var filteredInsertItems = this._filter( items );
    // hide all newitems
    this._noTransition( function() {
      this.hide( filteredInsertItems );
    });
    // */
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = Isotope.prototype.remove;
  Isotope.prototype.remove = function( elems ) {
    elems = makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    if ( !removeItems || !removeItems.length ) {
      return;
    }
    // remove elems from filteredItems
    for ( var i=0, len = removeItems.length; i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      removeFrom( item, this.filteredItems );
    }
  };

  Isotope.prototype.shuffle = function() {
    // update random sortData
    for ( var i=0, len = this.items.length; i < len; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @returns ret
   * @private
   */
  Isotope.prototype._noTransition = function( fn ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.call( this );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  Isotope.prototype.getFilteredItemElements = function() {
    var elems = [];
    for ( var i=0, len = this.filteredItems.length; i < len; i++ ) {
      elems.push( this.filteredItems[i].element );
    }
    return elems;
  };

  // -----  ----- //

  return Isotope;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'outlayer/outlayer',
      'get-size/get-size',
      'matches-selector/matches-selector',
      'isotope/js/item',
      'isotope/js/layout-mode',
      // include default layout modes
      'isotope/js/layout-modes/masonry',
      'isotope/js/layout-modes/fit-rows',
      'isotope/js/layout-modes/vertical'
    ],
    isotopeDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = isotopeDefinition(
    require('outlayer'),
    require('get-size'),
    require('desandro-matches-selector'),
    require('./item'),
    require('./layout-mode'),
    // include default layout modes
    require('./layout-modes/masonry'),
    require('./layout-modes/fit-rows'),
    require('./layout-modes/vertical')
  );
} else {
  // browser global
  window.Isotope = isotopeDefinition(
    window.Outlayer,
    window.getSize,
    window.matchesSelector,
    window.Isotope.Item,
    window.Isotope.LayoutMode
  );
}

})( window );

jQuery(document).ready(function($) {
	//Initialize login and register links.
	$('.login-link').click(function(){
		$('.tab-content .tab-pane').removeClass('active');
		$('.tab-content #login_tab').addClass('active');
		jQuery('#alimir_bootmodal').modal('show');
	});
	$('.add-more').click(function(){
		jQuery(this).next('.add_more_popup').modal('show');
	});
	$('.wine').click(function(){
		jQuery('#wine_popup').modal('show');
	});
	$('.register-link').click(function(){
		$('.tab-content .tab-pane').removeClass('active');
		$('.tab-content #register_tab').addClass('active');
		jQuery('#alimir_bootmodal').modal('show');
	});    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
			var checkbox_value = "";
			if ($('#rememberme').is(":checked")) {
				checkbox_value = $('form#login #rememberme').val();
			}
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: {
					'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
					'username': $('form#login #username').val(), 
					'password': $('form#login #password').val(),
					'login_captcha': $('form#login #login_captcha').val(),
					'rememberme': checkbox_value,
					'security': $('form#login #security').val() },
				beforeSend:function(){
					$('#wp-submit').button('loading');
					$('body').modalmanager('loading');
				},	
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#wp-submit').button('reset');
					$('form#login div.status').html(data.message).fadeIn();
					if (data.loggedin == true){
						window.location.href = ajax_login_object.loginRedirectURL;
					}
				}
			});
        e.preventDefault();
    });
	// Perform AJAX register on form submit
	$('form#regform').on('submit', function(e) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: { 
					'action': 'ajaxregister', //calls wp_ajax_nopriv_ajaxlogin
					'user_login': $('form#regform #user_login').val(), 
					'first_name': $('form#regform #first_name').val(),
					'surname': $('form#regform #surname').val(),
					'publication': $('form#regform #publication').val(),
					'job_title': $('form#regform #job_title').val(),
					'user_pass': $('form#regform #user_pass').val(),
					'security2': $('form#regform #security2').val() },
				beforeSend:function(){
					$('#pass-submit').button('loading');
					$('body').modalmanager('loading');
				},						
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#pass-submit').button('reset');
					$('form#regform div.status').html(data.message).fadeIn();
					if (data.registered == true && ajax_login_object.registerRedirectURL!=''){
						window.location.href = ajax_login_object.registerRedirectURL;
					}					
				}
			});
		e.preventDefault();
	});
	// Perform AJAX resetpass on form submit
	$('form#passform').on('submit', function(e) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: {
					'action'     : 	'ajaxlostpass', // Calls our wp_ajax_nopriv_ajaxlogin
					'lost_pass'   : 	$('form#passform #lost_pass').val(),
					'lostpass_captcha'   : 	$('form#passform #lostpass_captcha').val(),
					'security3'   : 	$('form#passform #security3').val()
				},
				beforeSend:function(){
					$('#user-submit').button('loading');
					$('body').modalmanager('loading');
				},								
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#user-submit').button('reset');
					$('form#passform div.status').html(data.message).fadeIn();
				}
			});
			e.preventDefault();
	});
	// refresh login captcha
	$("#login_captcha_img").click(function() {
		document.getElementById('login_captcha_img').src=ajax_login_object.captchaLink + "log-captcha.php";
	});
	// refresh register captcha
	$("#register_captcha_img").click(function() {
		document.getElementById('register_captcha_img').src=ajax_login_object.captchaLink + "reg-captcha.php";
	});
	// refresh lostpass captcha
	$("#lostpass_captcha_img").click(function() {
		document.getElementById('lostpass_captcha_img').src=ajax_login_object.captchaLink + "lost-captcha.php";
	});
	// enable tooltip
	$(function () {
		$("[data-toggle='tooltip']").tooltip();
	});
	// remove status box
	$("#register_tab a,#lostpass_tab a,#login_tab a,.close").click(function(){
		$('div.status').slideUp();
	});
});
/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));