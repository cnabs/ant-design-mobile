webpackJsonp([20],{9:function(n,a,t){"use strict";t(15),t(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(23),p=s(e),o=t(22),l=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,c=(0,l["default"])(n);!(s=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(u){e=!0,p=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},20:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},t=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return t}Object.defineProperty(a,"__esModule",{value:!0});var p=t(7),o=s(p);a["default"]=e;var l=t(1),c=s(l),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},22:function(n,a,t){n.exports={"default":t(24),__esModule:!0}},23:function(n,a,t){n.exports={"default":t(25),__esModule:!0}},24:function(n,a,t){t(21),t(19),n.exports=t(26)},25:function(n,a,t){t(21),t(19),n.exports=t(27)},26:function(n,a,t){var s=t(33),e=t(36);n.exports=t(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},27:function(n,a,t){var s=t(45),e=t(28)("iterator"),p=t(34);n.exports=t(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},29:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(7),p=s(e),o=t(1),l=s(o);a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return l["default"].createElement("i",(0,p["default"])({},n,{className:(s+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},30:function(n,a,t){"use strict";t(9),t(39)},31:function(n,a,t){"use strict";t(37)},32:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(38),m=s(f),g=t(3),h=s(g),v=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.children,e=a.className,o=a.style,l=a.renderHeader,c=a.renderFooter,u=(0,h["default"])((n={},(0,p["default"])(n,t,!0),(0,p["default"])(n,e,e),n));return d["default"].createElement("div",{className:u,style:o},l?d["default"].createElement("div",{className:t+"-header"},l()):null,s?d["default"].createElement("div",{className:t+"-body"},s):null,c?d["default"].createElement("div",{className:t+"-footer"},c()):null)},a}(d["default"].Component);a["default"]=v,v.Item=m["default"],v.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},37:function(n,a){},38:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a.Brief=void 0;var e=t(7),p=s(e),o=t(8),l=s(o),c=t(17),u=s(c),i=t(4),r=s(i),k=t(6),d=s(k),f=t(5),m=s(f),g=t(1),h=s(g),v=t(3),y=s(v),b=t(12),w=s(b),x=t(18),E=s(x),_=t(20),N=s(_),C=a.Brief=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){return h["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},a}(h["default"].Component),B=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a,t,s=(0,E["default"])(this.props,["prefixCls","className","touchFeedback","activeStyle","error","align","wrap","children","multipleLine","thumb","extra","arrow"]),e=(0,u["default"])(s,2),o=e[0],c=o.prefixCls,i=o.className,r=o.touchFeedback,k=o.activeStyle,d=o.error,f=o.align,m=o.wrap,g=o.children,v=o.multipleLine,b=o.thumb,x=o.extra,_=o.arrow,N=e[1],C=(n={},(0,l["default"])(n,i,i),(0,l["default"])(n,c+"-item",!0),(0,l["default"])(n,c+"-item-error",d),(0,l["default"])(n,c+"-item-top","top"===f),(0,l["default"])(n,c+"-item-middle","middle"===f),(0,l["default"])(n,c+"-item-bottom","bottom"===f),n),B=(0,w["default"])({},this.props.style);r&&(B=(0,w["default"])(B,k),C[c+"-item-active"]=!0);var M=(0,y["default"])((a={},(0,l["default"])(a,c+"-line",!0),(0,l["default"])(a,c+"-line-multiple",v),(0,l["default"])(a,c+"-line-wrap",m),a)),j=(0,y["default"])((t={},(0,l["default"])(t,c+"-arrow",!0),(0,l["default"])(t,c+"-arrow-horizontal","horizontal"===_),(0,l["default"])(t,c+"-arrow-vertical","down"===_||"up"===_),(0,l["default"])(t,c+"-arrow-vertical-up","up"===_),t));return h["default"].createElement("div",(0,p["default"])({},N,{className:(0,y["default"])(C),style:B}),b?h["default"].createElement("div",{className:c+"-thumb"},"string"==typeof b?h["default"].createElement("img",{src:b}):b):null,h["default"].createElement("div",{className:M},g?h["default"].createElement("div",{className:c+"-content"},g):null,x?h["default"].createElement("div",{className:c+"-extra"},x):null,_?h["default"].createElement("div",{className:j}):null))},a}(h["default"].Component);B.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1};var M=(0,N["default"])(B,{Brief:C});a["default"]=M},39:function(n,a){},48:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&S(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(S(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=t(7),l=s(o),c=t(8),u=s(c),i=t(17),r=s(i),k=t(4),d=s(k),f=t(6),m=s(f),g=t(5),h=s(g),v=t(1),y=s(v),b=t(3),w=s(b),x=t(12),E=s(x),_=t(29),N=s(_),C=t(18),B=s(C),M=t(20),j=s(M),T=/^[\u4e00-\u9fa5]{2}$/,S=T.test.bind(T),F=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,B["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),t=(0,r["default"])(a,2),s=t[0],e=s.children,o=s.className,c=s.prefixCls,i=s.type,k=s.size,d=s.inline,f=s.across,m=s.disabled,g=s.icon,h=s.loading,v=s.touchFeedback,b=s.activeStyle,x=t[1],_=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===k),(0,u["default"])(n,c+"-inline",d),(0,u["default"])(n,c+"-across",f),(0,u["default"])(n,c+"-disabled",m),(0,u["default"])(n,c+"-loading",h),n),C=(0,E["default"])({},this.props.style);v&&(C=(0,E["default"])(C,b),_[c+"-active"]=!0);var M=h?"loading":g,j=y["default"].Children.map(e,p);return M&&(_[c+"-icon"]=!0),delete x.htmlType,y["default"].createElement("button",(0,l["default"])({},x,{type:this.props.htmlType||"button",style:C,className:(0,w["default"])(_),disabled:m}),M?y["default"].createElement(N["default"],{type:M}):null,j)},a}(y["default"].Component);F.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,j["default"])(F),n.exports=a["default"]},49:function(n,a,t){"use strict";t(9),t(31),t(53)},53:function(n,a){},64:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,o=a.align,l=a.alignContent,c=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,f=(0,m["default"])((n={},(0,p["default"])(n,i,!0),(0,p["default"])(n,i+"-dir-row","row"===t),(0,p["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,p["default"])(n,i+"-dir-column","column"===t),(0,p["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,p["default"])(n,i+"-nowrap","nowrap"===s),(0,p["default"])(n,i+"-wrap","wrap"===s),(0,p["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,p["default"])(n,i+"-justify-start","start"===e),(0,p["default"])(n,i+"-justify-end","end"===e),(0,p["default"])(n,i+"-justify-center","center"===e),(0,p["default"])(n,i+"-justify-between","between"===e),(0,p["default"])(n,i+"-justify-around","around"===e),(0,p["default"])(n,i+"-align-top","top"===o||"start"===o),(0,p["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,i+"-align-baseline","baseline"===o),(0,p["default"])(n,i+"-align-stretch","stretch"===o),(0,p["default"])(n,i+"-align-content-start","start"===l),(0,p["default"])(n,i+"-align-content-end","end"===l),(0,p["default"])(n,i+"-align-content-center","center"===l),(0,p["default"])(n,i+"-align-content-between","between"===l),(0,p["default"])(n,i+"-align-content-around","around"===l),(0,p["default"])(n,i+"-align-content-stretch","stretch"===l),(0,p["default"])(n,c,c),n));return d["default"].createElement("div",{className:f,style:r,onClick:k},u)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},65:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,o=a.style,l=a.onClick,c=(0,m["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,s,s),n));return d["default"].createElement("div",{className:c,style:o,onClick:l},t)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},66:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(64),p=s(e),o=t(65),l=s(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},67:function(n,a,t){"use strict";t(9),t(76)},76:function(n,a){},662:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(67),t(66)),p=s(e),o=(t(49),t(48)),l=s(o),c=t(1),u=s(c),i=t(2);s(i);n.exports={content:[["p","\u6309\u94ae"]],meta:{order:0,title:"\u7c7b\u578b\u3001\u5c3a\u5bf8",filename:"components/button/demo/basic.md",id:"components-button-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ButtonExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0 0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token keyword">default</span> \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>disabled \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>loading \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning \u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u65e0\u70b9\u51fb\u53cd\u9988<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u81ea\u5b9a\u4e49\u70b9\u51fb\u53cd\u9988 style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline <span class="token operator">/</span> small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.16rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>inline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>inline small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"ButtonExample",render:function(){return u["default"].createElement("div",{className:"btn-container"},u["default"].createElement("div",{style:{margin:"0 0.16rem"}},u["default"].createElement(l["default"],{className:"btn","data-seed":"logId",onClick:function(n){return console.log(n)}},"default \u6309\u94ae"),u["default"].createElement(l["default"],{className:"btn",type:"primary"},"primary \u6309\u94ae"),u["default"].createElement(l["default"],{className:"btn",disabled:!0},"disabled \u6309\u94ae"),u["default"].createElement(l["default"],{className:"btn",loading:!0},"loading \u6309\u94ae"),u["default"].createElement(l["default"],{className:"btn",type:"warning"},"warning \u6309\u94ae"),u["default"].createElement("div",{style:{height:"0.16rem"}}),u["default"].createElement(l["default"],{className:"btn",activeStyle:!1},"\u65e0\u70b9\u51fb\u53cd\u9988"),u["default"].createElement(l["default"],{className:"btn",activeStyle:{backgroundColor:"red"}},"\u81ea\u5b9a\u4e49\u70b9\u51fb\u53cd\u9988 style"),u["default"].createElement("p",{style:{margin:10,color:"#999"}},"inline / small"),u["default"].createElement(p["default"],{style:{marginBottom:"0.16rem"}},u["default"].createElement(l["default"],{inline:!0,style:{marginRight:"0.08rem"}},"inline"),u["default"].createElement(l["default"],{inline:!0,size:"small"},"inline small"))))}});return u["default"].createElement(n,null)},style:".btn-container {\n  margin: 0.32rem 0;\n}\n.btn-container .btn {\n  margin: 0.16rem 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.btn-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0.32</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.btn-container</span> <span class="token class">.btn</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0.16</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},663:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(30),t(32)),p=s(e),o=(t(49),t(48)),l=s(o),c=t(1),u=s(c),i=t(2);s(i);n.exports={content:[["p","\u548c List / Flex \u7ed3\u5408\u4f7f\u7528\u793a\u4f8b"]],meta:{order:1,title:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",filename:"components/button/demo/complex.md",id:"components-button-demo-complex"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'10px 0\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">extra={&lt;Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      multipleLine\n    <span class="token operator">></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return u["default"].createElement(p["default"],{style:{margin:"10px 0",backgroundColor:"white"}},u["default"].createElement(p["default"].Item,{
extra:u["default"].createElement(l["default"],{type:"ghost",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",u["default"].createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")),u["default"].createElement(p["default"].Item,{extra:u["default"].createElement(l["default"],{size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",u["default"].createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")))}}},864:function(n,a,t){n.exports={basic:t(662),complex:t(663)}}});