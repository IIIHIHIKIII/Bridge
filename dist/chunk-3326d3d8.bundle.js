(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3326d3d8"],{"1b9d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"dash-action-template dash-article"},[a("section",{staticClass:"dash-action-template-header"},[a("figure",{staticClass:"everipedia"},[t.loading?t._e():a("img",{attrs:{src:n("9668"),alt:""}}),t.loading?a("i",{staticClass:"loading fa fa-spinner animate-spin"}):t._e()]),t.loading?t._e():a("figure",{staticClass:"above-title"},[t._v("Trending Article")])]),!t.loading&&t.trending?a("section",{staticClass:"dash-action-template-content"},[a("figure",{staticClass:"bg"},[a("img",{attrs:{src:t.image}})]),a("section",[a("figure",{staticClass:"title"},[t._v(t._s(t.trending.page_title))]),a("figure",{staticClass:"text"},[t._v(t._s(t.text.substr(0,150)))])])]):t._e(),!t.loading&&t.trending?a("section",{staticClass:"dash-action-template-footer"},[a("Button",{attrs:{primary:"1",icon:"far fa-external-link-square",text:"Read"},nativeOn:{click:function(e){return t.viewArticle(e)}}}),a("Button",{attrs:{icon:"fas fa-redo-alt",text:"Next Article"},nativeOn:{click:function(e){return t.randomize(e)}}})],1):t._e()])},i=[],r=(n("28a5"),n("a481"),n("2f62"),n("d1f3"),n("7514"),n("96cf"),n("3b8d")),o=n("d225"),s=n("b0b4"),c="https://api.everipedia.org/v2",u=function(t){return fetch("".concat(c,"/").concat(t)).then(function(t){return t.json()}).catch(function(t){return console.error(t)})},d=null,l=null,g=function(){function t(){Object(o["a"])(this,t)}return Object(s["a"])(t,null,[{key:"getTrending",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(d){t.next=4;break}return t.next=3,u("recent-activity/trending?user_agent=scatter&limit=100").then(function(t){return t.map(function(t){return t.slug})});case 3:d=t.sent;case 4:if(d){t.next=6;break}return t.abrupt("return");case 6:return e=d[Math.floor(Math.random()*d.length)],n=function(){return d=d.filter(function(t){return t!==e}),a.getTrending()},t.next=10,u("wiki/slug/lang_en/".concat(e,"?cache=true")).then(function(t){if(t)return!t.metadata||t.metadata.find(function(t){return"is_adult_content"===t.key}).value?n():t.page_body.some(function(t){return t.paragraphs.some(function(t){return t.items.some(function(t){return!!t.text&&t.text.indexOf("porn")>-1})})})?n():t.page_body[0]&&t.page_body[0].paragraphs&&t.page_body[0].paragraphs[0].items&&t.page_body[0].paragraphs[0].items[0]&&t.page_title[0]&&t.main_photo[0]&&t.main_photo[0].thumb?l===e?n():(l=e,{page_body:t.page_body[0].paragraphs[0].items[0].text,page_title:t.page_title[0].text,slug:e,main_photo:t.main_photo[0].thumb}):n()});case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),f={data:function(){return{trending:null,loading:!0}},computed:{text:function(){if(this.trending){var t=this.trending.page_body;return t=t.replace(/\*\*/g,""),t=t.replace(/__/g,""),t.split("[[")[0]+t.split("[[").map(function(t){var e="";if(t.indexOf("]]")>-1){var n=t.split("]]");if(-1===n[0].indexOf("|http")){var a=n[0].split("|");e=a[a.length-1]+n[1]}}return e}).join("")}},slug:function(){if(this.trending)return this.trending.slug},image:function(){if(this.trending)return this.trending.main_photo}},mounted:function(){this.randomize()},methods:{viewArticle:function(){this.openInBrowser("https://everipedia.org/".concat(this.slug))},randomize:function(){var t=this;this.loading=!0,g.getTrending().then(function(e){if(t.loading=!1,!e)return console.error("No everipedia trending?");t.trending=e})}}},p=f,h=(n("6b92"),n("2877")),m=Object(h["a"])(p,a,i,!1,null,"eea7283c",null);e["default"]=m.exports},2268:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".dash-article[data-v-eea7283c]{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,168,255,0)),to(#fff));background-image:linear-gradient(180deg,rgba(0,168,255,0),#fff)}.dash-article .loading[data-v-eea7283c]{font-size:24px;color:#00a8ff}.dash-article .everipedia[data-v-eea7283c]{background:#fff;border-radius:50%;padding:2px;height:28px}.dash-article .bg[data-v-eea7283c]{position:absolute;width:100%;height:auto;z-index:-1;opacity:.25;top:0;bottom:0;left:0;right:0}.dash-article .bg img[data-v-eea7283c]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.dash-article .details[data-v-eea7283c]{line-height:1rem;overflow-y:auto}.blue-steel .dash-article[data-v-eea7283c]{background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(95%,rgba(2,27,46,.8)));background-image:linear-gradient(180deg,transparent 12%,rgba(2,27,46,.8) 95%)}",""])},"353c":function(t,e,n){var a=n("2268");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("67aa1157",a,!0,{sourceMap:!1,shadowMode:!1})},"6b92":function(t,e,n){"use strict";var a=n("353c"),i=n.n(a);i.a},9668:function(t,e,n){t.exports=n.p+"static/img/everipedia.svg"}}]);