!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){t.exports=require("@polymer/lit-element")},function(t,e){t.exports=require("chart.js")},function(t,e){t.exports=require("vue-property-decorator")},function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return s});var a=r(0),n=r(1),o=function(t,e,r,a){var n,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i},i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class s extends a.LitElement{constructor(){super(...arguments),this.chart=null,this.updateChart=(()=>{this.chart&&this.chart.update()})}firstUpdated(){const t="string"==typeof this.data?JSON.parse(this.data):this.data||{},e="string"==typeof this.options?JSON.parse(this.options):this.options||{};if(this.chart)this.chart.type=this.type,this.chart.data=t,this.chart.options=e,this.chart.update();else{const r=this.shadowRoot.querySelector("canvas").getContext("2d");this.chart=new n.Chart(r,{type:this.type,data:t,options:e})}this.chart.data=this.observe(this.chart.data);for(const t in this.chart.data)this.chart.data[t]=this.observe(this.chart.data[t]);this.chart.data.datasets=this.chart.data.datasets.map(t=>(t.data=this.observe(t.data),this.observe(t))),window.addEventListener("resize",()=>{this.chart&&this.chart.resize()})}observe(t){const{updateChart:e}=this;return new Proxy(t,{set:(t,r,a,n)=>(t[r]=a,Promise.resolve().then(()=>e()),!0)})}render(){return a["html"]`<style>.chart-size{position:relative}canvas{width:400px;height:400px}</style><div class="chart-size"><canvas></canvas></div>`}get updateComplete(){return(async()=>await super.updateComplete)()}get dataValue(){return this.chart?this.chart.data:{}}get optionsValue(){return this.chart?this.chart.options:{}}}o([Object(a.property)({type:String}),i("design:type",Object)],s.prototype,"type",void 0),o([Object(a.property)({type:Object}),i("design:type",Object)],s.prototype,"data",void 0),o([Object(a.property)({type:Object}),i("design:type",Object)],s.prototype,"options",void 0),customElements.get("base-chart")||customElements.define("base-chart",s)},,,function(t,e,r){"use strict";r.r(e);var a=r(2),n=(r(3),function(t,e,r,a){var n,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}),o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let i=class extends a.Vue{constructor(){super(...arguments),this.chart=null,this.ref=null}created(){this.ref=btoa(Date.now()+parseInt(""+1e4*Math.random())+"").replace(/=/g,"")}mounted(){this.chart=this.$refs[this.ref]}render(t){return t("base-chart",{attrs:{type:this.type},ref:this.ref})}onDataChange(t){Object.assign(this.chart.dataValue,t||{})}onOptionsChange(t){Object.assign(this.chart.optionsValue,t||{})}};n([Object(a.Prop)(Object),o("design:type",Object)],i.prototype,"data",void 0),n([Object(a.Prop)(Object),o("design:type",Object)],i.prototype,"options",void 0),n([Object(a.Prop)(String),o("design:type",Object)],i.prototype,"type",void 0),n([Object(a.Watch)("data",{deep:!0}),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],i.prototype,"onDataChange",null),n([Object(a.Watch)("options",{deep:!0}),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],i.prototype,"onOptionsChange",null),i=n([Object(a.Component)({})],i),e.default=i}]);