(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],c=0,v=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5c191bb6"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4743:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"roll-dice-page"},[t("div",[e._v("备选:"+e._s(e.bakHeroes))]),t("div",{staticClass:"content"},[t("div",{staticClass:"hero-list"},[e._l(e.leftHeroes,(function(r){return t("div",{key:r.id},[e._v(e._s(r.name))])})),t("button",{on:{click:function(t){return e.changeHero(e.item)}}},[e._v("random")])],2),t("div",{staticClass:"hero-list"},e._l(e.rightHeroes,(function(r){return t("div",{key:r.id},[e._v(e._s(r.name))])})),0)])])},a=[],s=(r("14d9"),r("0643"),r("9a9a"),r("b16e")),i={data(){return{playerNum:10,selectedHeroes:[],bakHeroes:[]}},computed:{leftHeroes(){return this.selectedHeroes.slice(0,5)},rightHeroes(){return this.selectedHeroes.slice(5,10)}},mounted(){this.getAllHero()},methods:{getAllHero(){let e=0;do{let t=this.getHero();this.selectedHeroes.push(t),e++}while(e<this.playerNum)},getHero(){const e=Math.floor(Math.random()*s.length);let t=s[e];return this.selectedHeroes.some(e=>e.id===t.id)?this.getHero():t},changeHero(e){this.bakHeroes.push(e);const t=this.selectedHeroes.findIndex(t=>t.id===e.id);this.selectedHeroes.splice(t,1)}}},l=i,u=(r("c183"),r("2877")),c=Object(u["a"])(l,o,a,!1,null,"56b6d0a3",null),p=c.exports,v=r("8c4f"),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},_=g,b=(r("a69f"),Object(u["a"])(_,f,m,!1,null,"5cc7f8f0",null)),k=b.exports,j={name:"Home",components:{HelloWorld:k}},y=j,H=Object(u["a"])(y,h,d,!1,null,null,null),w=H.exports;n["a"].use(v["a"]);const x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],O=new v["a"]({routes:x});var C=O,P=r("2f62");n["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:S,render:e=>e(p)}).$mount("#app")},a69f:function(e,t,r){"use strict";r("4743")},b16e:function(e){e.exports=JSON.parse('[{"name":"A","id":1},{"name":"B","id":2},{"name":"C","id":3},{"name":"D","id":4},{"name":"E","id":5},{"name":"F","id":6},{"name":"G","id":7},{"name":"H","id":8},{"name":"I","id":9},{"name":"J","id":10},{"name":"K","id":11},{"name":"L","id":12},{"name":"M","id":13}]')},c183:function(e,t,r){"use strict";r("eddf")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},eddf:function(e,t,r){}});
//# sourceMappingURL=app.8935ba78.js.map