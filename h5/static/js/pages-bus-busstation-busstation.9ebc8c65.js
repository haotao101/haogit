(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bus-busstation-busstation"],{"1b47":function(t,e,i){"use strict";i.r(e);var a=i("ff44"),n=i("37b3");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("2da4");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"e89aa67a",null);e["default"]=r.exports},"1cc8":function(t,e,i){var a=i("ce67");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("22be139c",a,!0,{sourceMap:!1,shadowMode:!1})},"2da4":function(t,e,i){"use strict";var a=i("1cc8"),n=i.n(a);n.a},"37b3":function(t,e,i){"use strict";i.r(e);var a=i("d612"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},ce67:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".input[data-v-e89aa67a]{width:100%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?26?%}.input_box[data-v-e89aa67a]{border:%?1?% solid #f6f6f6;line-height:%?80?%}.city_box[data-v-e89aa67a]{padding:%?20?%;font-size:%?26?%;line-height:%?80?%;margin-bottom:%?20?%}.city_minbox[data-v-e89aa67a]{width:%?240?%;height:%?60?%;text-align:center;line-height:%?60?%;background:#eaeaea;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?24?%;position:relative}.del_box[data-v-e89aa67a]{background:#00adef;color:#fff;width:%?30?%;height:%?30?%;line-height:%?30?%;text-align:center;-webkit-border-radius:50%;border-radius:50%;position:absolute;right:%?-10?%;top:%?-10?%}.city-title[data-v-e89aa67a]{width:100%}.city-titletext[data-v-e89aa67a]{width:100%;height:%?100?%;background:#f2f3f8;padding-left:3%;line-height:%?100?%}.bigcity_box[data-v-e89aa67a]{width:100%}.city-contenttext[data-v-e89aa67a]{padding-left:5%;border-bottom:%?1?% solid #f6f6f6;height:%?100?%;line-height:%?100?%;font-size:%?28?%}",""])},d612:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("3efb"));function a(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{cityList:"",city:"",flag:""}},methods:{toback:function(t,e){var i=getCurrentPages(),a=(i[i.length-1],i[i.length-2]);2==this.flag?(a._data.cityName=t,a._data.toCityId=e):1==this.flag&&(a._data.stationList.siteName=t,a._data.stationList.id=e),a._data.isshow=!1,uni.navigateBack()},setItem:function(t){var e={name:"",value:"",expires:"",startTime:(new Date).getTime()},i={};Object.assign(i,e,t);var a=Object.assign(i,e,t);if(i.expires)uni.setStorageSync(i.name,a);else{Object.prototype.toString.call(i.value);"[object Object]"==Object.prototype.toString.call(i.value)&&(i.value=JSON.stringify(i.value)),"[object Array]"==Object.prototype.toString.call(i.value)&&(i.value=JSON.stringify(i.value)),uni.setStorageSync(i.name,a)}},getItem:function(t){var e=uni.getStorageSync(t);try{e=JSON.parse(e)}catch(a){e=e}if(e.startTime){var i=(new Date).getTime();return console.log("相减",i-e.startTime),i-e.startTime>e.expires?(uni.removeStorageSync(t),!1):e.value}return e}},onLoad:function(t){this.flag=t.flag;var e=this.getItem("name");if(0==e){var i=this;this.$url.get("/major/all/citys",null,function(t){i.city=t.data.bean,i.setItem({name:"name",value:i.city,expires:"259200000"})})}else this.city=e,console.log("城市",this.city)}};e.default=n},ff44:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"input_box"},[i("v-uni-input",{staticClass:"input",attrs:{placeholder:"搜索上下车地点","placeholder-style":"line-height: 80upx;"}})],1),i("v-uni-view",{staticClass:"city_box"},[i("v-uni-view",[t._v("常用地点")]),i("v-uni-view",{staticClass:"city_minbox"},[i("v-uni-view",[t._v("深圳宝安国际机场")]),i("v-uni-view",{staticClass:"del_box"},[t._v("×")])],1)],1),i("v-uni-view",{staticClass:"bigcity_box"},t._l(t.city,function(e,a){return i("v-uni-view",{key:a,staticClass:"city-title"},[i("v-uni-view",{staticClass:"city-titletext"},[t._v(t._s(e.citys))]),t._l(e.lists,function(e,a){return i("v-uni-view",{key:a,staticClass:"city-contenttext",on:{click:function(i){i=t.$handleEvent(i),t.toback(e.siteName,e.id)}}},[t._v(t._s(e.siteName))])})],2)}),1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}}]);