(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.component=t.TootlipExample=void 0,n(52),n(53);var o,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(1)),i=n(237),r=(o=n(236))&&o.__esModule?o:{default:o};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(){var e,n,o,l,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,p=new Array(a),m=0;m<a;m++)p[m]=arguments[m];return this,r={exampleBottomPlacementButtonIsActive:!1,exampleButtonIsActive:!1,exampleLeftPlacementButtonIsActive:!1,exampleRightPlacementButtonIsActive:!1,exampleTopPlacementButtonIsActive:!1,isHovering:!1},(i="state")in(l=s(s(n=!(o=(e=u(t)).call.apply(e,[this].concat(p)))||"object"!==c(o)&&"function"!=typeof o?s(this):o)))?Object.defineProperty(l,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[i]=r,n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l.Component),n=t,(o=[{key:"render",value:function(){var e=this,t=this.state,n=t.exampleBottomPlacementButtonIsActive,o=t.exampleButtonIsActive,c=t.exampleLeftPlacementButtonIsActive,a=t.exampleRightPlacementButtonIsActive,u=t.exampleTopPlacementButtonIsActive,p=t.isHovering;return l.createElement(r.default,null,l.createElement("h2",null,"Tootlip"),l.createElement("p",null,l.createElement("span",{onMouseOver:function(){e.setState({isHovering:!0})},onFocus:function(){e.setState({isHovering:!0})},onMouseOut:function(){e.setState({isHovering:!1})},onBlur:function(){e.setState({isHovering:!1})}},"Hover on me",l.createElement(i.Tootlip,{visible:p,placement:i.tootlipPlacements.auto},"Hey"))," ","for a tootlip."),l.createElement("p",null,"You can use it with buttons too."),l.createElement("div",null,l.createElement("button",{type:"button",onClick:function(){e.setState({exampleButtonIsActive:!o})}},"Press (･ω´･ )́)",l.createElement(i.Tootlip,{visible:o,placement:i.tootlipPlacements.auto},"Thanks for following the instructions."))),l.createElement("p",null,"There are a couple of positioning options."),l.createElement("p",null,"If it looks like the tooltip is colliding with the edge of the viewport, it will try other positions."),l.createElement("div",null,l.createElement("button",{type:"button",onClick:function(){e.setState({exampleRightPlacementButtonIsActive:!a})}},"Right (･ω´･ )́)",l.createElement(i.Tootlip,{visible:a,placement:i.tootlipPlacements.right},"Mango Chutney")),l.createElement("button",{type:"button",onClick:function(){return e.setState({exampleLeftPlacementButtonIsActive:!c})}},"Left (･ω´･ )́)",l.createElement(i.Tootlip,{visible:c,placement:i.tootlipPlacements.left},"Among Chutney")),l.createElement("button",{type:"button",onClick:function(){e.setState({exampleTopPlacementButtonIsActive:!u})}},"Top (･ω´･ )́)",l.createElement(i.Tootlip,{visible:u,placement:i.tootlipPlacements.top},"Ace Gunny Moth")),l.createElement("button",{type:"button",onClick:function(){return e.setState({exampleBottomPlacementButtonIsActive:!n})}},"Bottom (･ω´･ )́)",l.createElement(i.Tootlip,{visible:n,placement:i.tootlipPlacements.bottom},"Cage Ohm Tunny"))))}}])&&a(n.prototype,o),t}();t.TootlipExample=m;var f=m;t.component=f;var b=f;t.default=b}}]);
//# sourceMappingURL=component---src-pages-components-tootlip-index-js-f9f05ba027565c580a09.js.map