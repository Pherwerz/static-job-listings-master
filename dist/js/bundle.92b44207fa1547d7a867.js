!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=114)}([function(t,n,r){var e=r(1),o=r(32),i=r(3),c=r(33),a=r(37),u=r(53),s=o("wks"),l=e.Symbol,f=u?l:l&&l.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(72))},function(t,n,r){var e=r(1),o=r(29).f,i=r(8),c=r(11),a=r(31),u=r(47),s=r(75);t.exports=function(t,n){var r,l,f,p,v,d=t.target,g=t.global,y=t.stat;if(r=g?e:y?e[d]||a(d,{}):(e[d]||{}).prototype)for(l in n){if(p=n[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(g?l:d+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(r,l,p,t)}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(7),o=r(43),i=r(9),c=r(21),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(4);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(7),o=r(6),i=r(13);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(30),o=r(20);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(1),o=r(8),i=r(3),c=r(31),a=r(45),u=r(22),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,n,r,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),l(r).source=f.join("string"==typeof n?n:"")),t!==e?(u?!p&&t[n]&&(s=!0):delete t[n],s?t[n]=r:o(t,n,r)):s?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,n){t.exports=[{id:1,company:"Photosnap",logo:"./img/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./img/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./img/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./img/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./img/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"FullStack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./img/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./img/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./img/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./img/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./img/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}]},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(35),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(19);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(20);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(7),o=r(4),i=r(3),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var r=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,l=i(n,0)?n[0]:u,f=i(n,1)?n[1]:void 0;return a[t]=!!r&&!o((function(){if(s&&!e)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,l,f)}))}},function(t,n){t.exports={}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(5);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e,o,i,c=r(73),a=r(1),u=r(5),s=r(8),l=r(3),f=r(23),p=r(25),v=a.WeakMap;if(c){var d=new v,g=d.get,y=d.has,h=d.set;e=function(t,n){return h.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var m=f("state");p[m]=!0,e=function(t,n){return s(t,m,n),n},o=function(t){return l(t,m)?t[m]:{}},i=function(t){return l(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!u(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(32),o=r(33),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(48),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(57),o=r(30),i=r(16),c=r(14),a=r(58),u=[].push,s=function(t){var n=1==t,r=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(v,d,g,y){for(var h,m,S=i(v),b=o(S),x=e(d,g,3),w=c(b.length),O=0,_=y||a,A=n?_(v,w):r?_(v,0):void 0;w>O;O++)if((p||O in b)&&(m=x(h=b[O],O,S),t))if(n)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:u.call(A,h)}else if(l)return!1;return f?-1:s||l?l:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,n,r){var e=r(4),o=r(0),i=r(59),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(7),o=r(42),i=r(13),c=r(10),a=r(21),u=r(3),s=r(43),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=c(t),n=a(n,!0),s)try{return l(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(4),o=r(19),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(1),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(24),o=r(46);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(49),o=r(36).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(4);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o=r(9),i=r(76),c=r(36),a=r(25),u=r(77),s=r(44),l=r(23),f=l("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=s("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete d.prototype[c[r]];return d()};a[f]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=d(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(6).f,o=r(3),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(21),o=r(6),i=r(13);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e={};e[r(0)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(7),o=r(4),i=r(44);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(5),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(46),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(1),o=r(31),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(3),o=r(74),i=r(29),c=r(6);t.exports=function(t,n){for(var r=o(n),a=c.f,u=i.f,s=0;s<r.length;s++){var l=r[s];e(t,l)||a(t,l,u(n,l))}}},function(t,n,r){var e=r(1);t.exports=e},function(t,n,r){var e=r(3),o=r(10),i=r(50).indexOf,c=r(25);t.exports=function(t,n){var r,a=o(t),u=0,s=[];for(r in a)!e(c,r)&&e(a,r)&&s.push(r);for(;n.length>u;)e(a,r=n[u++])&&(~i(s,r)||s.push(r));return s}},function(t,n,r){var e=r(10),o=r(14),i=r(51),c=function(t){return function(n,r,c){var a,u=e(n),s=o(u.length),l=i(c,s);if(t&&r!=r){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(35),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(37);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(49),o=r(36);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(0);n.f=e},function(t,n,r){var e=r(48),o=r(3),i=r(55),c=r(6).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,r){var e=r(79);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(5),o=r(15),i=r(0)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e,o,i=r(1),c=r(83),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(e=s.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){"use strict";var e=r(2),o=r(61);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){"use strict";var e=r(27).forEach,o=r(62),i=r(17),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){"use strict";var e=r(4);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(41),o=r(19),i=r(0)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(0),o=r(38),i=r(6),c=e("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},function(t,n,r){"use strict";var e=r(10),o=r(64),i=r(18),c=r(22),a=r(66),u=c.set,s=c.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,n){u(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,r){"use strict";var e=r(2),o=r(92),i=r(68),c=r(94),a=r(39),u=r(8),s=r(11),l=r(0),f=r(24),p=r(18),v=r(67),d=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,y=l("iterator"),h=function(){return this};t.exports=function(t,n,r,l,v,m,S){o(r,n,l);var b,x,w,O=function(t){if(t===v&&E)return E;if(!g&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},_=n+" Iterator",A=!1,j=t.prototype,T=j[y]||j["@@iterator"]||v&&j[v],E=!g&&T||O(v),P="Array"==n&&j.entries||T;if(P&&(b=i(P.call(new t)),d!==Object.prototype&&b.next&&(f||i(b)===d||(c?c(b,d):"function"!=typeof b[y]&&u(b,y,h)),a(b,_,!0,!0),f&&(p[_]=h))),"values"==v&&T&&"values"!==T.name&&(A=!0,E=function(){return T.call(this)}),f&&!S||j[y]===E||u(j,y,E),p[n]=E,v)if(x={values:O("values"),keys:m?E:O("keys"),entries:O("entries")},S)for(w in x)(g||A||!(w in j))&&s(j,w,x[w]);else e({target:n,proto:!0,forced:g||A},x);return x}},function(t,n,r){"use strict";var e,o,i,c=r(68),a=r(8),u=r(3),s=r(0),l=r(24),f=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),l||u(e,f)||a(e,f,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(3),o=r(16),i=r(23),c=r(93),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(1),o=r(70),i=r(61),c=r(8);for(var a in o){var u=e[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(2),o=r(1),i=r(26),c=r(24),a=r(7),u=r(37),s=r(53),l=r(4),f=r(3),p=r(15),v=r(5),d=r(9),g=r(16),y=r(10),h=r(21),m=r(13),S=r(38),b=r(54),x=r(34),w=r(78),O=r(52),_=r(29),A=r(6),j=r(42),T=r(8),E=r(11),P=r(32),L=r(23),C=r(25),F=r(33),M=r(0),k=r(55),I=r(56),R=r(39),D=r(22),N=r(27).forEach,J=L("hidden"),B=M("toPrimitive"),G=D.set,H=D.getterFor("Symbol"),U=Object.prototype,V=o.Symbol,W=i("JSON","stringify"),q=_.f,z=A.f,Y=w.f,$=j.f,K=P("symbols"),Q=P("op-symbols"),X=P("string-to-symbol-registry"),Z=P("symbol-to-string-registry"),tt=P("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,et=a&&l((function(){return 7!=S(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=q(U,n);e&&delete U[n],z(t,n,r),e&&t!==U&&z(U,n,e)}:z,ot=function(t,n){var r=K[t]=S(V.prototype);return G(r,{type:"Symbol",tag:t,description:n}),a||(r.description=n),r},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,n,r){t===U&&ct(Q,n,r),d(t);var e=h(n,!0);return d(r),f(K,e)?(r.enumerable?(f(t,J)&&t[J][e]&&(t[J][e]=!1),r=S(r,{enumerable:m(0,!1)})):(f(t,J)||z(t,J,m(1,{})),t[J][e]=!0),et(t,e,r)):z(t,e,r)},at=function(t,n){d(t);var r=y(n),e=b(r).concat(ft(r));return N(e,(function(n){a&&!ut.call(r,n)||ct(t,n,r[n])})),t},ut=function(t){var n=h(t,!0),r=$.call(this,n);return!(this===U&&f(K,n)&&!f(Q,n))&&(!(r||!f(this,n)||!f(K,n)||f(this,J)&&this[J][n])||r)},st=function(t,n){var r=y(t),e=h(n,!0);if(r!==U||!f(K,e)||f(Q,e)){var o=q(r,e);return!o||!f(K,e)||f(r,J)&&r[J][e]||(o.enumerable=!0),o}},lt=function(t){var n=Y(y(t)),r=[];return N(n,(function(t){f(K,t)||f(C,t)||r.push(t)})),r},ft=function(t){var n=t===U,r=Y(n?Q:y(t)),e=[];return N(r,(function(t){!f(K,t)||n&&!f(U,t)||e.push(K[t])})),e};(u||(E((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=F(t),r=function(t){this===U&&r.call(Q,t),f(this,J)&&f(this[J],n)&&(this[J][n]=!1),et(this,n,m(1,t))};return a&&rt&&et(U,n,{configurable:!0,set:r}),ot(n,t)}).prototype,"toString",(function(){return H(this).tag})),E(V,"withoutSetter",(function(t){return ot(F(t),t)})),j.f=ut,A.f=ct,_.f=st,x.f=w.f=lt,O.f=ft,k.f=function(t){return ot(M(t),t)},a&&(z(V.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),c||E(U,"propertyIsEnumerable",ut,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:V}),N(b(tt),(function(t){I(t)})),e({target:"Symbol",stat:!0,forced:!u},{for:function(t){var n=String(t);if(f(X,n))return X[n];var r=V(n);return X[n]=r,Z[r]=n,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,n){return void 0===n?S(t):at(S(t),n)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),e({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),W)&&e({target:"JSON",stat:!0,forced:!u||l((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!it(n))return n}),o[1]=n,W.apply(null,o)}});V.prototype[B]||T(V.prototype,B,V.prototype.valueOf),R(V,"Symbol"),C[J]=!0},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(1),o=r(45),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(26),o=r(34),i=r(52),c=r(9);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(4),o=/#|\.prototype\./,i=function(t,n){var r=a[c(t)];return r==s||r!=u&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(7),o=r(6),i=r(9),c=r(54);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),a=e.length,u=0;a>u;)o.f(t,r=e[u++],n[r]);return t}},function(t,n,r){var e=r(26);t.exports=e("document","documentElement")},function(t,n,r){var e=r(10),o=r(34).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e=r(2),o=r(7),i=r(1),c=r(3),a=r(5),u=r(6).f,s=r(47),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[n]=!0),n};s(p,l);var v=p.prototype=l.prototype;v.constructor=p;var d=v.toString,g="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=d.call(t);if(c(f,t))return"";var r=g?n.slice(7,-1):n.replace(y,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){r(56)("iterator")},function(t,n,r){"use strict";var e=r(2),o=r(27).filter,i=r(28),c=r(17),a=i("filter"),u=c("filter");e({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(26);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(2),o=r(85);e({target:"Array",stat:!0,forced:!r(89)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(57),o=r(16),i=r(86),c=r(87),a=r(14),u=r(40),s=r(88);t.exports=function(t){var n,r,l,f,p,v,d=o(t),g="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,m=void 0!==h,S=s(d),b=0;if(m&&(h=e(h,y>2?arguments[2]:void 0,2)),null==S||g==Array&&c(S))for(r=new g(n=a(d.length));n>b;b++)v=m?h(d[b],b):d[b],u(r,b,v);else for(p=(f=S.call(d)).next,r=new g;!(l=p.call(f)).done;b++)v=m?i(f,h,[l.value,b],!0):l.value,u(r,b,v);return r.length=b,r}},function(t,n,r){var e=r(9);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(0),o=r(18),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(63),o=r(18),i=r(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(2),o=r(50).includes,i=r(64);e({target:"Array",proto:!0,forced:!r(17)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n,r){r(2)({target:"Array",stat:!0},{isArray:r(15)})},function(t,n,r){"use strict";var e=r(67).IteratorPrototype,o=r(38),i=r(13),c=r(39),a=r(18),u=function(){return this};t.exports=function(t,n,r){var s=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),c(t,s,!1,!0),a[s]=u,t}},function(t,n,r){var e=r(4);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(9),o=r(95);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(2),o=r(5),i=r(15),c=r(51),a=r(14),u=r(10),s=r(40),l=r(0),f=r(28),p=r(17),v=f("slice"),d=p("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),y=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,n){var r,e,l,f=u(this),p=a(f.length),v=c(t,p),d=c(void 0===n?p:n,p);if(i(f)&&("function"!=typeof(r=f.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[g])&&(r=void 0):r=void 0,r===Array||void 0===r))return y.call(f,v,d);for(e=new(void 0===r?Array:r)(h(d-v,0)),l=0;v<d;v++,l++)v in f&&s(e,l,f[v]);return e.length=l,e}})},function(t,n,r){var e=r(11),o=Date.prototype,i=o.toString,c=o.getTime;new Date(NaN)+""!="Invalid Date"&&e(o,"toString",(function(){var t=c.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,r){var e=r(7),o=r(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;e&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,n,r){var e=r(41),o=r(11),i=r(100);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){"use strict";var e=r(41),o=r(63);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){"use strict";var e=r(11),o=r(9),i=r(4),c=r(102),a=RegExp.prototype,u=a.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in a)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(9);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(2),o=r(104),i=r(20);e({target:"String",proto:!0,forced:!r(106)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(105);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(5),o=r(19),i=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(0)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){"use strict";var e=r(108).charAt,o=r(22),i=r(66),c=o.set,a=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=a(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(35),o=r(20),i=function(t){return function(n,r){var i,c,a=String(o(n)),u=e(r),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(1),o=r(70),i=r(65),c=r(8),a=r(0),u=a("iterator"),s=a("toStringTag"),l=i.values;for(var f in o){var p=e[f],v=p&&p.prototype;if(v){if(v[u]!==l)try{c(v,u,l)}catch(t){v[u]=l}if(v[s]||c(v,s,f),o[f])for(var d in i)if(v[d]!==i[d])try{c(v,d,i[d])}catch(t){v[d]=i[d]}}}},function(t,n,r){},function(t,n,r){"use strict";var e=r(2),o=r(4),i=r(15),c=r(5),a=r(16),u=r(14),s=r(40),l=r(58),f=r(28),p=r(0),v=r(59),d=p("isConcatSpreadable"),g=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=f("concat"),h=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!g||!y},{concat:function(t){var n,r,e,o,i,c=a(this),f=l(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?c:arguments[n])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&s(f,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},function(t,n,r){"use strict";var e=r(2),o=r(30),i=r(10),c=r(62),a=[].join,u=o!=Object,s=c("join",",");e({target:"Array",proto:!0,forced:u||!s},{join:function(t){return a.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(2),o=r(27).map,i=r(28),c=r(17),a=i("map"),u=c("map");e({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";r.r(n);r(71),r(80),r(81),r(82),r(60),r(84),r(90),r(91),r(65),r(96),r(97),r(98),r(99),r(101),r(103),r(107),r(69),r(109),r(110);var e=r(12),o=r.n(e),i=(r(111),r(112),r(113),{filterList:document.querySelector(".header__filter"),filterBar:document.querySelector(".header__bar"),filterBtn:document.querySelector(".header__button"),main:document.querySelector(".main")}),c=function(t,n){return'\n    <li class="main__item">\n    <button class="main__clear" id="'.concat(n,'">').concat(t,"</button>\n    </li>")},a=function(t){i.main.innerHTML="",t.forEach((function(t){var n,r;r='\n        <div class="main__items" id="'.concat((n=t).id,'">\n        <div class="main__indicator" ').concat(1===n.id||2===n.id?"":'style="background-color:transparent"','></div>\n        <div class="main__sep">\n            <div class="main__right">\n            <img\n                src="').concat(n.logo,'"\n                alt="thumbnail"\n                class="main__thumb"\n            />\n            <div class="main__details">\n                <div class="main__top">\n                <span>').concat(n.company,"</span>\n                <span ").concat(n.new?"":'style="display:none"',">new!</span>\n                <span ").concat(n.featured?"":'style="display:none"','>Featured</span>\n                </div>\n                <h3 class="main__heading">').concat(n.position,'</h3>\n                <div class="main__bottom">\n                <span>').concat(n.postedAt,"</span> . \n                <span>").concat(n.contract,"</span> .\n                <span>").concat(n.location,'</span>\n                </div>\n            </div>\n            </div>\n            <div class="main__left">\n            <ul class="main__list">\n                \n                <li class="main__item">\n                <button class="main__clear" id="role">').concat(n.role,'</button>\n                </li>\n                <li class="main__item">\n                <button class="main__clear" id="level">').concat(n.level,"</button>\n                </li>\n\n                ").concat(n.languages.map((function(t){return c(t,"languages")})).join(""),"\n                ").concat(n.tools.map((function(t){return c(t,"tools")})).join(""),"\n                \n            </ul>\n            </div>\n        </div>\n        </div>\n    "),i.main.insertAdjacentHTML("beforeend",r)}))},u=function(t,n){var r='\n          <li class="header__list" id="'.concat(n,'">\n            ').concat(t,'\n            <button class="header__clear" id="').concat(n,'">\n              <img\n                src="./img/icon-remove.svg"\n                alt="clear"\n                class="header__image"\n                id="').concat(n,'"\n              />\n            </button>\n          </li>\n  ');i.filterList.insertAdjacentHTML("beforeend",r)};function s(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f=null,p=null,v=[],d=[],g=!1,y=!1,h=s(o.a),m=s(o.a),S=[1,1],b=function(t,n){h=h.filter((function(r){return"role"===t?r.role===n:"level"===t?r.level===n:"languages"===t?r.languages.includes(n):"tools"===t?r.tools.includes(n):void 0}))};window.addEventListener("load",(function(){a(o.a)})),i.main.addEventListener("click",(function(t){"main__clear"===t.target.className&&(i.filterBar.style.display="flex","role"===t.target.id?null===f&&(f=t.target.textContent,u(f,"role"),b("role",f)):"level"===t.target.id?null===p&&(p=t.target.textContent,u(p,"level"),b("level",p)):"languages"===t.target.id?v.length<3&&!v.includes(t.target.textContent)&&(v.push(t.target.textContent),u(v[v.length-1],"languages".concat(S[0])),b("languages",v[v.length-1]),S[0]++):"tools"===t.target.id&&d.length<2&&!d.includes(t.target.textContent)&&(d.push(t.target.textContent),u(d[d.length-1],"tools".concat(S[1])),b("tools",d[d.length-1]),S[1]++),a(h),g=!0)})),i.filterList.addEventListener("click",(function(t){if(t.target.closest(".header__list")){var n=document.getElementById(t.target.closest(".header__list").id);"role"===t.target.id?(n.parentNode.removeChild(n),f=null):"level"===t.target.id?(n.parentNode.removeChild(n),b("level",p=null)):t.target.id.includes("languages")?(v=v.filter((function(t){return!n.textContent.includes(t)})),n.parentNode.removeChild(n)):t.target.id.includes("tools")&&(d=d.filter((function(t){return!n.textContent.includes(t)})),n.parentNode.removeChild(n))}null===f&&null===p&&0===v.length&&0===d.length&&(y=!0),y&&(i.filterBar.style.display="none",y=!1),a((f&&(m=m.filter((function(t){return t.role===f}))),p&&(m=m.filter((function(t){return t.level===p}))),0!==v.length&&v.forEach((function(t){m=m.filter((function(n){return n.languages.includes(t)}))})),0!==d.length&&d.forEach((function(t){m=m.filter((function(n){return n.tools.includes(t)}))})),m)),m=s(o.a)})),i.filterBtn.addEventListener("click",(function(){g&&(f=null,p=null,v=[],d=[],h=s(o.a),S=[1,1],a(h),i.filterList.innerHTML="",i.filterBar.style.display="none",g=!1)}))}]);