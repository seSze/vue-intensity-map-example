webpackJsonp([6],{"5VEl":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("md97"),a=s.n(n);e.default={name:"PostView",components:{SingleView:a.a},computed:{post:function(){return this.$store.state.current.item},cover:function(){if(this.post.photo)return this.post.photo.sizes.cover.src}},beforeCreate:function(){this.$store.dispatch("fetchPost",this.$route.params.id)}}},GQrF:function(t,e,s){var n=s("VU/8")(s("5VEl"),s("V25e"),!1,null,null,null);t.exports=n.exports},OXWv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"pt-18"},[t.header?s("header",{staticClass:"py-8"},[s("div",{staticClass:"container  flex justify-center"},[t._t("title",[t.title?s("div",{staticClass:"md:w-2/3"},[s("h1",{staticClass:"font-normal",domProps:{textContent:t._s(t.title)}})]):t._e()],{item:t.item})],2)]):t._e(),t._v(" "),t._t("cover",[t.cover?s("figure",{staticClass:"text-center"},[s("img",{attrs:{src:t.cover,alt:"title"}})]):t._e()]),t._v(" "),s("div",{staticClass:"py-8"},[s("div",{staticClass:"container flex justify-center"},[t._t("content:before"),t._v(" "),t._t("content",[s("div",{staticClass:"md:w-2/3 content"},[t._t("lead:before"),t._v(" "),t.lead?s("p",{staticClass:"text-2xl",domProps:{innerHTML:t._s(t.lead)}}):t._e(),t._v(" "),t._t("default"),t._v(" "),t.attachments.length?s("div",{staticClass:"mt-8 pt-8"},[s("h3",[t._v(" Załączniki")]),t._v(" "),s("ul",t._l(t.attachments,function(e){return s("li",[s("a",{attrs:{href:e.src}},[t._v("\n                                    "+t._s(e.caption)+"\n\n                                    "),s("small",{staticClass:"text-grey"},[t._v("[ pobierz ]")])])])}))]):t._e()],2)]),t._v(" "),t._t("content:after")],2)])],2)},staticRenderFns:[]}},V25e:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("single-view",{attrs:{cover:t.cover,lead:t.post.excerpt,attachments:t.post.attachments,header:!1}},[s("template",{slot:"lead:before"},[s("small",{staticClass:"text-grey",domProps:{textContent:t._s(t.post.published_at)}}),t._v(" "),s("h1",{staticClass:"font-normal mb-8",domProps:{textContent:t._s(t.post.title)}})]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.post.body)}})],2)},staticRenderFns:[]}},Vien:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SingleView",props:{title:{},lead:{},cover:{},attachments:{default:function(){return[]}},header:{default:!0},item:{}}}},md97:function(t,e,s){var n=s("VU/8")(s("Vien"),s("OXWv"),!1,null,null,null);t.exports=n.exports}});