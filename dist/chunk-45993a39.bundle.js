(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45993a39"],{"1df6":function(t,a,s){var e=s("8754");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=s("499e").default;i("4782e643",e,!0,{sourceMap:!1,shadowMode:!1})},8754:function(t,a,s){a=t.exports=s("2350")(!1),a.push([t.i,'.view-app-ratings[data-v-38bb1212]{max-width:400px;width:calc(100% - 80px);margin:0 auto}.view-app-ratings .app-type[data-v-38bb1212]{margin-top:-20px;font-size:13px}.view-app-ratings .sub-title[data-v-38bb1212]{margin-top:-20px;font-size:14px}.logos[data-v-38bb1212]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%;margin-bottom:20px}.logos[data-v-38bb1212]:after{content:"";position:absolute;display:block;top:50%;left:-40px;right:-40px;height:1px;background:rgba(0,168,255,.08);z-index:-1}.logo[data-v-38bb1212]{background:#fff;position:relative;width:100px;height:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:20px;font-weight:700}.logo img[data-v-38bb1212]{width:calc(100% - 10px);max-height:calc(100% - 10px);-o-object-fit:contain;object-fit:contain;overflow:hidden;border-radius:16px}.ratings[data-v-38bb1212]{margin-top:50px}.ratings.less-margin[data-v-38bb1212]{margin-top:20px}.ratings .stars .star[data-v-38bb1212]{color:#999;font-size:28px;padding:0 4px;cursor:pointer}.ratings .stars .star.active[data-v-38bb1212]{color:#00a8ff}.ratings .stars.active .star.active[data-v-38bb1212]{color:#de4136}.ratings span[data-v-38bb1212]{cursor:pointer;margin:0 auto;display:table;padding:15px 35px 0;font-size:11px}.ratings span.notice[data-v-38bb1212]{color:red}.blue-steel .ratings .stars.active .star.active[data-v-38bb1212]{color:#ff0}',""])},"94e6":function(t,a,s){"use strict";var e=s("1df6"),i=s.n(e);i.a},ea72:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"view-app-ratings"},[s("section",{staticClass:"popup-content"},[s("section",{class:{logos:!!t.app.img}},[s("figure",{staticClass:"logo"},[t.app.img?s("img",{attrs:{src:t.app.img}}):t._e()])]),s("figure",{staticClass:"title"},[s("b",[t._v(t._s(t.app.name))])]),t.state===t.STATES.VIEW?s("section",[s("figure",{staticClass:"sub-title"},[t._v(t._s(t.app.description))]),s("section",{staticClass:"ratings"},[s("section",{staticClass:"stars",class:{active:null!==t.star},on:{mouseout:function(a){t.star=null}}},t._l([1,2,3,4,5],function(a){return s("figure",{staticClass:"star fas fa-star",class:{active:null!==t.star?t.star>=a:a<=t.rating},on:{click:function(s){return t.clickStar(a)},mouseover:function(s){return t.hoverStar(a)}}})}),0),s("span",{staticClass:"notice"},[t._v("Ratings aren't live yet, this is just a placeholder!")]),s("span",[t._v("Help keep Scatter users safe by adding your own rating to "),s("b",[t._v(t._s(t.app.name))]),t._v(", just tap a star to start.")])])]):t._e(),t.state===t.STATES.RATE?s("section",[s("section",{staticClass:"ratings less-margin"},[s("section",{staticClass:"stars active"},t._l([1,2,3,4,5],function(a){return s("figure",{staticClass:"star fas fa-star",class:{active:t.star>=a}})}),0),s("br"),s("Input",{staticStyle:{"margin-bottom":"0"},attrs:{textarea:"1",placeholder:"Do you want to let the world know why you think "+t.app.name+" deserves a "+t.star+" star rating?"}})],1)]):t._e(),t.state===t.STATES.RATED?s("section",[s("figure",{staticClass:"sub-title"},[t._v("Your rating has been sent to the network!")]),s("section",{staticClass:"ratings"},[s("section",{staticClass:"stars active"},t._l([1,2,3,4,5],function(a){return s("figure",{staticClass:"star fas fa-star",class:{active:t.star>=a}})}),0),s("span",[t._v("You have given "+t._s(t.app.name)+" a "+t._s(t.star)+" star rating. Thanks for your help!")])])]):t._e()]),t.state===t.STATES.VIEW?s("section",{staticClass:"popup-buttons"},[s("Button",{attrs:{text:"Close"},nativeOn:{click:function(a){return t.closer(null)}}}),s("Button",{attrs:{primary:"1",text:"Open App",icon:"fas fa-star"},nativeOn:{click:function(a){return t.open(a)}}})],1):t._e(),t.state===t.STATES.RATE?s("section",{staticClass:"popup-buttons"},[s("Button",{attrs:{disabled:t.submittingRating,text:"Back"},nativeOn:{click:function(a){return t.clearRating(a)}}}),s("Button",{attrs:{loading:t.submittingRating,primary:"1",text:"Submit Rating",icon:"fas fa-external-link-square"},nativeOn:{click:function(a){return t.submitRating(a)}}})],1):t._e(),t.state===t.STATES.RATED?s("section",{staticClass:"popup-buttons"},[s("Button",{attrs:{primary:"1",text:"Close"},nativeOn:{click:function(a){return t.closer(null)}}})],1):t._e()])},i=[],n=(s("96cf"),s("3b8d")),r=(s("2f62"),{VIEW:"view",RATE:"rate",RATED:"rated"}),o={props:["popin","closer"],data:function(){return{state:r.VIEW,STATES:r,star:null,rating:4,submittingRating:!1}},computed:{app:function(){return this.popin.data.props.app}},methods:{open:function(){this.openInBrowser(this.app.url),this.closer(!0)},hoverStar:function(t){this.star=t},clickStar:function(t){this.star=t,this.state=r.RATE},clearRating:function(){this.star=null,this.state=r.VIEW},submitRating:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.submittingRating=!0,t.next=3,new Promise(function(t){return setTimeout(function(){t(!0)},2e3)});case 3:this.state=r.RATED,this.submittingRating=!1;case 5:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}()}},c=o,p=(s("94e6"),s("2877")),l=Object(p["a"])(c,e,i,!1,null,"38bb1212",null);a["default"]=l.exports}}]);