!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e){t.exports=require("@polymer/lit-element")},function(t,e){t.exports=require("chart.js")},,function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return i});var a=r(0),n=r(1),s=function(t,e,r,a){var n,s=arguments.length,o=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,a);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class i extends a.LitElement{constructor(){super(...arguments),this.chart=null,this.updateChart=(()=>{this.chart&&this.chart.update()})}firstUpdated(){const t="string"==typeof this.data?JSON.parse(this.data):this.data||{},e="string"==typeof this.options?JSON.parse(this.options):this.options||{};if(this.chart)this.chart.type=this.type,this.chart.data=t,this.chart.options=e,this.chart.update();else{const r=this.shadowRoot.querySelector("canvas").getContext("2d");this.chart=new n.Chart(r,{type:this.type,data:t,options:e})}this.chart.data=this.observe(this.chart.data);for(const t in this.chart.data)this.chart.data[t]=this.observe(this.chart.data[t]);this.chart.data.datasets=this.chart.data.datasets.map(t=>(t.data=this.observe(t.data),this.observe(t))),window.addEventListener("resize",()=>{this.chart&&this.chart.resize()})}observe(t){const{updateChart:e}=this;return new Proxy(t,{set:(t,r,a,n)=>(t[r]=a,Promise.resolve().then(()=>e()),!0)})}render(){return a["html"]`<style>.chart-size{position:relative}canvas{width:400px;height:400px}</style><div class="chart-size"><canvas></canvas></div>`}get updateComplete(){return(async()=>await super.updateComplete)()}get dataValue(){return this.chart?this.chart.data:{}}get optionsValue(){return this.chart?this.chart.options:{}}}s([Object(a.property)({type:String}),o("design:type",Object)],i.prototype,"type",void 0),s([Object(a.property)({type:Object}),o("design:type",Object)],i.prototype,"data",void 0),s([Object(a.property)({type:Object}),o("design:type",Object)],i.prototype,"options",void 0),customElements.get("base-chart")||customElements.define("base-chart",i)},function(t,e){t.exports=require("react")},function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return n});var a=r(4);r(3);class n extends a.Component{constructor(t){super(t),this.chart=null,this.ref=null,this.ref=btoa(Date.now()+parseInt(""+1e4*Math.random())+"").replace(/=/g,"")}componentDidMount(){this.chart=document.querySelector("#"+this.ref)}render(){return a.createElement("base-chart",{id:this.ref,type:this.props.type})}componentDidUpdate(t){Object.assign(this.chart.dataValue,this.props.data||{}),Object.assign(this.chart.optionsValue,this.props.options||{})}}}]);