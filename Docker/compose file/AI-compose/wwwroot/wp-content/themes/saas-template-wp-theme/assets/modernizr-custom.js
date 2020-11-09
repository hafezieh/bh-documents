/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscalc-cssfilters-cssgrid_cssgridlegacy-csstransforms-cssvhunit-cssvwunit-flexbox-inlinesvg-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,i,o,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function i(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?T.className.baseVal=n:T.className=n)}function o(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var i=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(i){var o=i.error?"error":"log";i[o].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function l(e,n){return e-1===n||e===n||e+1===n}function u(){var e=n.body;return e||(e=o(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,s){var i,a,l,f,d="modernizr",c=o("div"),p=u();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=s?s[r]:d+(r+1),c.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),a=t(c,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=f,T.offsetHeight):c.parentNode.removeChild(c),!!a}function d(e,n){return!!~(""+e).indexOf(n)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var s;for(var i in e)if(e[i]in n)return t===!1?e[i]:(s=n[e[i]],r(s,"function")?p(s,t||n):s);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(v(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+v(n[s])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return t}function h(e,n,s,i){function a(){u&&(delete I.style,delete I.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var l=g(e,s);if(!r(l,"undefined"))return l}for(var u,f,p,m,v,h=["modernizr","tspan","samp"];!I.style&&h.length;)u=!0,I.modElem=o(h.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=I.style[m],d(m,"-")&&(m=c(m)),I.style[m]!==t){if(i||r(s,"undefined"))return a(),"pfx"==n?m:!0;try{I.style[m]=s}catch(y){}if(I.style[m]!=v)return a(),"pfx"==n?m:!0}return a(),!1}function y(e,n,t,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(o+" ")+o).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,s,i):(a=(e+" "+A.join(o+" ")+o).split(" "),m(a,n,t))}function w(e,n,r){return y(e,t,t,n,r)}var C=[],S=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var T=n.documentElement,_="svg"===T.nodeName.toLowerCase(),b=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=b,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=o("a");return t.style.cssText=e+b.join(n+e),!!t.style.length}),Modernizr.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",z||P);var E=x.testStyles=f;E("#modernizr { height: 50vh; }",function(n){var t=parseInt(e.innerHeight/2,10),r=parseInt(a(n,null,"height"),10);Modernizr.addTest("cssvhunit",l(r,t))}),E("#modernizr { width: 50vw; }",function(n){var t=parseInt(e.innerWidth/2,10),r=parseInt(a(n,null,"width"),10);Modernizr.addTest("cssvwunit",l(r,t))});var N="Moz O ms Webkit",j=x._config.usePrefixes?N.split(" "):[];x._cssomPrefixes=j;var A=x._config.usePrefixes?N.toLowerCase().split(" "):[];x._domPrefixes=A;var k={elem:o("modernizr")};Modernizr._q.push(function(){delete k.elem});var I={style:k.elem.style};Modernizr._q.unshift(function(){delete I.style}),x.testAllProps=y,x.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("cssgridlegacy",w("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",w("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return w("filter","blur(2px)");var e=o("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),s(),i(C),delete x.addTest,delete x.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);