(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{245:function(e,t,n){"use strict";n.r(t),n(86);var r=n(0),a=(n(252),n(144),n(87),n(314),n(315)),o=n.n(a),c=n(275),i=n(394),l=n.n(i),u=n(396),s=n.n(u);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i.UNMOUNTED,i.EXITED,i.ENTERING,i.ENTERED;var m=i.EXITING,h={createToast:s.a},v=r.createContext(h),b=v.Consumer,g=function(e,t,n){return function(r){var a;return Object.assign({},r,{toasts:Object.assign({},r.toasts,(a={},a[n]={options:t,toast:e,in:!0},a))})}},y=function(e){return function(t){return Object.assign({},t,{toasts:Object.entries(t.toasts).filter(function(t){var n=t[0];return String(e)!==n}).reduce(function(e,t){var n,r=t[0],a=t[1];return Object.assign({},e,((n={})[r]=a,n))},{})})}},E=function(e){return function(t){var n;return Object.assign({},t,{toasts:Object.assign({},t.toasts,(n={},n[e]=Object.assign({},t.toasts[e],{in:!t.toasts[e].in}),n))})}},w=-1,O=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return d(f(f(t=e.call.apply(e,[this].concat(a))||this)),"state",{toasts:{}}),d(f(f(t)),"createToastContextValue",function(){return{createToast:function(e,n){var r=t.props.defaultToastOptions;w+=1,t.setState(g(e,Object.assign({},r,n),w))}}}),d(f(f(t)),"renderToasts",function(){var e=t.state.toasts;return r.createElement(r.Fragment,null,Object.keys(e).map(function(n){var a=e[n],c=a.toast,i=a.options,u=a.in,s=o()(function(){return t.setState(E(n))}),f=Object.assign({},i,{in:u,onEntered:function(){"function"==typeof i.onEntered&&i.onEntered.apply(i,arguments),i.persistent||s()},onExited:function(){"function"==typeof i.onExited&&i.onExited.apply(i,arguments),t.setState(y(n))}});return r.createElement(l.a,p({},f,{key:n}),function(e){return r.createElement(c,{transitionState:e,dismiss:s})})}))}),t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.children,n=e.PortalComponent;return r.createElement(v.Provider,{value:this.createToastContextValue()},r.createElement(n,null,this.renderToasts()),t)},a}(r.Component);d(O,"defaultProps",{PortalComponent:c.a,defaultToastOptions:{timeout:{enter:1e3,exit:1e3},unmountOnExit:!0,appear:!0}});var j=O,x=n(255),C=function(e){var t=e.ToastPortalComponent,n=e.children,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["ToastPortalComponent","children"]);return r.createElement(c.a,null,r.createElement(t,a,n))},k=n(397),T=n(400),P=n.n(T),M=n(415),V=n.n(M),S=n(469);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var q=function(e){var t=e.colors,n=e.duration;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",width:"100px",height:"100px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},r.createElement("defs",null,r.createElement("linearGradient",{id:"gradient",y2:"1",spreadMethod:"reflect"},t.map(function(e,t,r){return{stopProps:{stopColor:e,offset:Math.floor(t/r.length*100)+"%"},animateProps:{values:r.slice(t,r.length).concat(r.slice(0,t),[e]).join(";"),attributeName:"stop-color",repeatCount:"indefinite",dur:n}}}).map(function(e){var t=e.stopProps,n=e.animateProps;return r.createElement("stop",z({},t,{key:t.offset}),r.createElement("animate",n))}))),r.createElement("rect",{fill:"url(#gradient)",width:"100",height:"100",x:"0",y:"0",strokeWidth:"16",strokeLinecap:"round",strokeLinejoin:"round"}))};q.defaultProps={colors:["red","orange","yellow","green","blue","indigo","violet"],duration:"3s"};var G=q,R=n(265),_=n(263),I={enter:Object(x.d)(["0%{transform:translateY(-100%);opacity:0;}85%{opacity:0.5;}100%{opacity:1;transform:translateY(0%);}"]),exit:Object(x.d)(["0%{opacity:1;}50%{color:transparent;opacity:0;}100%{padding:0 1rem;height:0;margin:0;opacity:0;}"])},N=function(e){return{ToastComponent:x.b.button.withConfig({componentId:"s3rftr-0"})(["animation:"," 0.15s ease-out normal forwards;background:#fff;border-radius:",";box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.2);cursor:pointer;display:inline-block;margin:0.25rem;overflow:hidden;padding:0.5rem 1rem;pointer-events:all;user-select:none;transition:all 15ms ease;",";",";",";",";"],I.enter,Object(R.b)(4),function(e){return e.transitionState===m&&Object(x.a)(["animation:"," 0.3s ease-out normal forwards;"],I.exit)},function(e){return e.alert&&Object(x.a)(["background:",";color:white;"],_.e.alert)},function(e){return e.success&&Object(x.a)(["background:",";color:white;"],_.e.success)},function(e){return e.inactive&&Object(x.a)(["background:",";color:white;"],_.e.inactive)})}},D=function(e){var t=e.children,n=e.ToastComponent,a=e.transitionState,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","ToastComponent","transitionState"]);return r.createElement(n,Object.assign({},o,{transitionState:a}),t)},H=function(){var e=N().ToastComponent;return function(t){return r.createElement(D,Object.assign({ToastComponent:e},t))}};function L(){var e=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  /* fallback for old browsers */\n  background: linear-gradient(135deg, ",");\n  background: url(data:image/svg+xml;base64,",");\n  background-size: cover;\n  color: white;\n  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\n"]);return L=function(){return e},e}var A=N().ToastComponent,Q=A.extend(L(),function(e){return e.colors.join(", ")},function(e){return Object(S.btoa)(Object(k.renderToStaticMarkup)(r.createElement(G,V()(e,P()(G.defaultProps)))))});Q.defaultProps=Object.assign({},G.defaultProps,A.defaultProps);var F=Q;function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var U=H(),W=N().ToastComponent,J=function(e){var t,n;function a(){for(var t,n,r,a,c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return n=B(B(t=e.call.apply(e,[this].concat(i))||this)),r="handleClick",a=o()(function(){(0,t.props.dismiss)()}),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.createElement(U,Object.assign({onClick:this.handleClick,ToastComponent:W},this.props))},a}(r.Component),X=n(264),Y=H(),K=function(){var e=x.b.div.withConfig({componentId:"s1ypsezo-0"})(["align-items:center;display:flex;flex-flow:column nowrap;nleft:0;margin:0;pointer-events:none;position:fixed;text-align:center;top:0;width:100%;"]);return function(t){return r.createElement(C,Object.assign({ToastPortalComponent:e},t))}}(),Z=N().ToastComponent,$=function(){return r.createElement("span",{role:"img","aria-label":"unicorn"},"🦄")},ee=function(e){return r.createElement(Y,e,"Easy come, easy go. ",r.createElement($,null))},te=function(e){return r.createElement(J,Object.assign({ToastComponent:Z},e),"I’ll stick around. ",r.createElement($,null))},ne=function(e){return r.createElement(J,Object.assign({ToastComponent:F},e),"See you space cowboy. ",r.createElement($,null))};t.default=function(){return r.createElement(X.a,null,r.createElement(j,{PortalComponent:K},r.createElement("h1",null,"Toast"),r.createElement(b,null,function(e){var t=e.createToast;return r.createElement(r.Fragment,null,r.createElement("section",null,r.createElement("h2",null,"Transient toast"),r.createElement("button",{type:"button",onClick:function(){t(ee)}},"Click")),r.createElement("section",null,r.createElement("h2",null,"Persistent toast"),r.createElement("button",{type:"button",onClick:function(){t(te,{persistent:!0})}},"Click")),r.createElement("section",null,r.createElement("h2",null,"Cool toast"),r.createElement("button",{type:"button",onClick:function(){t(ne,{persistent:!0})}},"Click")))})))}},254:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(253),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(256),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var p=n(64);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),d=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},256:function(e,t,n){var r;e.exports=(r=n(259))&&r.default||r},258:function(e){e.exports={data:{site:{siteMetadata:{title:"mango-components"}}}}},259:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(65),l=n(3),u=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return a.a.createElement(i.a,{location:t,pageResources:n})};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},260:function(e){e.exports={data:{site:{siteMetadata:{name:"mango-components",version:"1.1.0",revision:"1d3dee294451b8d46cccf88011bcdb3523083fa2",repository:"https://github.com/mango-chutney/mango-components"}}}}},261:function(e){e.exports={b:["M158.15","3.44c-1.009.014-1.845.338-2.484.96-.636.624-.97","1.477-.991","2.542v4.098c0",".372.308.675.695.675a.683.683","0","0","0",".688-.675v-4.1c.014-.655.225-1.189.622-1.591.399-.4.894-.609","1.47-.62a2.07","2.07","0","0","1","1.472.62c.397.4.606.935.625","1.587v4.104c0",".372.307.675.687.675h.007a.683.683","0","0","0",".688-.675v-4.1c-.02-1.06-.355-1.913-.995-2.54-.638-.622-1.472-.946-2.483-.96M144.44","11.731c1.01-.013","1.847-.338","2.486-.962.635-.626.97-1.48.991-2.546V4.117a.685.685","0","0","0-.694-.677.684.684","0","0","0-.689.677v4.108c-.015.656-.225","1.191-.622","1.594-.399.4-.894.61-1.47.621a2.064","2.064","0","0","1-1.473-.621c-.397-.4-.606-.937-.623-1.591V4.117a.683.683","0","0","0-.688-.677h-.008a.683.683","0","0","0-.686.677v4.107c.02","1.063.354","1.918.994","2.545.637.624","1.472.949","2.483.962M130.152","10.385h-2.437c-1.296-.031-2.349-1.282-2.349-2.787","0-1.536","1.078-2.787","2.405-2.787h2.372a.68.68","0","0","0",".686-.673.68.68","0","0","0-.686-.67h-2.372c-2.08","0-3.768","1.852-3.768","4.13","0","1.082.379","2.105","1.07","2.883.708.802","1.669","1.242","2.702","1.242h2.377c.38","0",".689-.3.689-.67a.68.68","0","0","0-.689-.668M138.448","4.428c-.637-.625-1.472-.949-2.483-.963H135.428l-1.078.003-.009-.002h-.47V.72a.685.685","0","0","0-.697-.676c-.38","0-.687.304-.687.718V11.08c0",".331.308.634.696.634a.683.683","0","0","0",".687-.676l.004-6.228h2.087c.581.013","1.077.166","1.476.568.397.402.607.896.622","1.548v4.112c0",".373.309.676.686.676h.01a.684.684","0","0","0",".687-.676V6.931c-.02-1.063-.355-1.876-.994-2.503M152.661","4.784h-1.773v3.934c0",".594.263","1.065.804","1.356.455.245.938.275.956.276a.697.697","0","0","1",".67.718.7.7","0","0","1-.729.664","3.948","3.948","0","0","1-1.514-.415c-1.027-.528-1.593-1.472-1.593-2.6V.692c0-.382.314-.69.702-.69.388","0",".704.308.704.69v2.75H152.66c.379","0",".687.285.687.634","0",".349-.308.709-.687.709M179.257","4.12a.685.685","0","0","0-.696-.677.681.681","0","0","0-.686.677v4.05c-.018.656-.227","1.191-.626","1.594a2.053","2.053","0","0","1-2.942","0c-.398-.403-.606-.938-.622-1.592V4.12a.686.686","0","0","0-.696-.677.682.682","0","0","0-.686.677v4.05c.018","1.062.353","1.918.993","2.543.638.625","1.473.949","2.484.964a3.946","3.946","0","0","0","2.14-.635c-.01.727-.175","1.27-.497","1.607-.275.29-.488.466-1.09.466l-2.207.001c-.382","0-.688.289-.688.645","0",".355.306.645.688.645h2.165c1.11","0","1.826-.612","2.23-1.128.36-.455.747-1.404.747-2.407l-.011-6.75zM170.998","7.706c0-2.98-2.095-4.338-4.022-4.338-1.965","0-3.955","1.425-3.955","4.146","0","2.082","1.276","4.308","4.86","4.308.695","0","1.25-.112","2.012-.395","1.003-.371.375-1.377-.25-1.193-.701.207-1.164.326-1.84.326-1.862","0-3.023-.733-3.283-2.066h5.626c.583","0",".852-.332.852-.788zm-6.606-.49c.047-1.8","1.365-2.62","2.59-2.62","1.251","0","2.596.822","2.645","2.62l-.001.004-5.234-.005zM91.845","10.673h-2.85c-.978","0-1.77-.77-1.77-1.732","0-.974.796-1.732","1.81-1.738h2.814l-.004","3.47zm-.222-6.677a3.289","3.289","0","0","0-1.373-.277l-2.23.002c-.378","0-.685.29-.685.644","0",".357.307.645.687.645h2.353c.498.003.9.161","1.194.469.087.094.167.207.271.433h-2.872c-1.679.016-3.046","1.375-3.046","3.029","0","1.655","1.379","3.012","3.075","3.024h3.728a.683.683","0","0","0",".689-.675V7.257c0-1.004-.389-1.952-.748-2.407-.402-.514-.637-.672-1.043-.854zM107.128","5.05l2.096.003v5.569l-2.15.002c-1.298-.031-2.352-1.28-2.352-2.788","0-1.536","1.078-2.786","2.406-2.786m2.68-1.344h-2.68c-2.079","0-3.769","1.852-3.769","4.13","0","1.082.38","2.104","1.07","2.878.709.796","1.668","1.234","2.712","1.234h1.989c-.101.412-.309.74-.479.918-.275.29-.643.446-1.088.467l-2.209.002c-.38","0-.688.29-.688.644","0",".355.309.644.688.644h2.256a3.135","3.135","0","0","0","1.096-.274c.405-.181.639-.339","1.044-.852.359-.456.746-1.402.746-2.408V4.383a.683.683","0","0","0-.688-.677M98.516","3.71c-1.01.013-1.845.336-2.484.957-.637.622-.97","1.473-.993","2.533v4.085c0",".371.309.673.696.673a.681.681","0","0","0",".687-.673V7.198c.016-.652.226-1.186.623-1.586a2.07","2.07","0","0","1","1.469-.618c.58.012","1.076.218","1.474.618.396.399.606.932.624","1.583v4.09a.68.68","0","0","0",".687.673h.007a.681.681","0","0","0",".688-.673V7.199c-.02-1.058-.355-1.908-.994-2.532-.638-.62-1.473-.944-2.484-.957M116.023","10.626c-1.477","0-2.678-1.26-2.678-2.81s1.2-2.81","2.678-2.81c1.475","0","2.675","1.26","2.675","2.81s-1.2","2.81-2.675","2.81m0-7.044c-2.272","0-4.118","1.9-4.118","4.234s1.846","4.234","4.118","4.234c2.27","0","4.118-1.9","4.118-4.234s-1.849-4.234-4.118-4.234M83.9","4.508c-.535-.51-1.232-.778-2.074-.798-.467","0-.914.094-1.327.277-.384.171-.82.427-1.084.762l-.006.004-.005-.004c-.265-.335-.702-.59-1.085-.762a3.268","3.268","0","0","0-1.327-.277c-.841.02-1.54.288-2.075.798-.533.51-.813","1.152-.829","1.913v4.863c0",".372.308.674.694.674.38","0",".687-.302.687-.674V6.757c.008-.537.149-.967.425-1.278.276-.316.658-.477","1.162-.483.505","0",".91.156","1.207.467.3.313.457.829.462","1.531v4.29a.68.68","0","0","0",".676.672v.002l.008-.001h.007v-.001a.68.68","0","0","0",".676-.672v-4.29c.006-.702.162-1.218.463-1.531.295-.311.702-.467","1.207-.467.504.006.885.167","1.162.483.276.31.417.74.424","1.278v4.527c0",".372.308.674.688.674a.683.683","0","0","0",".694-.674V6.421c-.016-.76-.296-1.403-.83-1.913"],a:["M67.556","4.428c-.636-.625-1.471-.949-2.482-.963H64.537l-1.079.003-.008-.002h-.471V.72a.685.685","0","0","0-.696-.676c-.38","0-.687.304-.687.718V11.08c0",".331.307.634.695.634a.683.683","0","0","0",".688-.676l.003-6.228h2.088c.58.013","1.077.166","1.476.568.396.402.606.896.621","1.548v4.112c0",".373.31.676.687.676h.009a.684.684","0","0","0",".688-.676V6.931c-.02-1.063-.356-1.876-.995-2.503M55.063","4.395a.686.686","0","0","0-.698-.676c-.378","0-.686.304-.686.718v6.643c0",".332.308.635.695.635a.684.684","0","0","0",".689-.677V4.395zM59.879","4.784h-1.774v3.934c0",".594.264","1.065.804","1.356.455.245.94.275.957.276a.697.697","0","0","1",".67.718.7.7","0","0","1-.73.664","3.948","3.948","0","0","1-1.513-.415c-1.027-.528-1.594-1.472-1.594-2.6V.692c0-.382.315-.69.703-.69.388","0",".703.308.703.69v2.75h1.774c.378","0",".686.285.686.634","0",".349-.308.709-.686.709M42.23","11.16c.535.51","1.233.778","2.075.798.466","0",".913-.094","1.326-.277.384-.171.82-.428","1.085-.762l.005-.004.005.004c.265.334.702.59","1.086.762.414.183.86.277","1.326.277.841-.02","1.54-.288","2.075-.798.533-.51.813-1.153.829-1.913V4.383a.682.682","0","0","0-.694-.673.681.681","0","0","0-.687.673v4.528c-.008.537-.149.967-.424","1.278-.277.315-.659.477-1.163.483-.505","0-.91-.156-1.206-.467-.301-.314-.458-.829-.463-1.531v-4.29a.68.68","0","0","0-.676-.672V3.71h-.015v.002a.68.68","0","0","0-.676.671v4.29c-.005.703-.162","1.218-.463","1.532-.295.31-.701.467-1.207.467-.503-.006-.885-.168-1.162-.483-.276-.31-.417-.74-.424-1.278V4.383a.681.681","0","0","0-.687-.673.683.683","0","0","0-.695.673v4.864c.016.76.296","1.403.83","1.913M36.788","7.706c0-2.98-2.095-4.338-4.023-4.338-1.965","0-3.954","1.425-3.954","4.146","0","2.082","1.275","4.308","4.86","4.308.694","0","1.25-.112","2.011-.395","1.004-.371.376-1.377-.25-1.193-.7.207-1.163.326-1.84.326-1.861","0-3.023-.733-3.283-2.066h5.627c.583","0",".852-.332.852-.788zm-6.607-.49c.048-1.8","1.366-2.62","2.59-2.62","1.252","0","2.597.822","2.646","2.62","0",".002","0",".003-.002.004l-5.234-.005zM17.908","10.673H14.97c-.977","0-1.77-.77-1.77-1.732","0-.974.796-1.732","1.811-1.738h2.9l-.004","3.47zM17.6","3.996a3.285","3.285","0","0","0-1.373-.277l-2.23.002c-.378","0-.686.29-.686.644","0",".357.308.645.688.645h2.354c.498.003.898.161","1.193.469.087.094.168.207.27.433h-2.872c-1.678.016-3.045","1.375-3.045","3.029","0","1.655","1.379","3.012","3.074","3.024h3.729c.378","0",".689-.302.689-.675V7.257c0-1.004-.388-1.952-.747-2.407-.402-.514-.638-.672-1.044-.854zM9.813","4.508c-.536-.51-1.233-.778-2.075-.798-.466","0-.913.094-1.327.277-.384.171-.82.427-1.084.762l-.006.004-.005-.004c-.265-.335-.701-.59-1.085-.762a3.268","3.268","0","0","0-1.327-.277c-.841.02-1.54.288-2.075.798C.296","5.018.016","5.66","0","6.42v4.863c0",".372.308.674.694.674.38","0",".688-.302.688-.674V6.757c.008-.537.148-.967.424-1.278.276-.316.658-.477","1.162-.483.505","0",".91.156","1.207.467.3.313.457.829.462","1.531v4.29a.68.68","0","0","0",".677.672v.002l.007-.001h.007v-.001a.68.68","0","0","0",".677-.672v-4.29c.005-.702.161-1.218.462-1.531.295-.311.702-.467","1.208-.467.503.006.885.167","1.161.483.276.31.417.74.424","1.278v4.527c0",".372.309.674.688.674a.683.683","0","0","0",".694-.674V6.421c-.015-.76-.296-1.403-.83-1.913M21.905","7.835c0-1.508","1.055-2.757","2.352-2.788l2.038.002v5.57l-1.984.002c-1.328","0-2.406-1.25-2.406-2.786m5.077-7.79c-.378","0-.687.303-.687.718v2.96h-1.97c-1.045","0-2.004.438-2.712","1.233-.692.775-1.07","1.797-1.07","2.879","0","2.277","1.69","4.13","3.768","4.13h2.68a.684.684","0","0","0",".688-.677V.721a.686.686","0","0","0-.697-.676"]}},262:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/dev-404-page/"}},{node:{path:"/404/"}},{node:{path:"/components/avatar/"}},{node:{path:"/components/button/"}},{node:{path:"/components/forms/"}},{node:{path:"/components/panel/"}},{node:{path:"/components/radial-progress-bar/"}},{node:{path:"/components/toast/"}},{node:{path:"/components/tootlip/"}},{node:{path:"/components/tristicon/"}},{node:{path:"/"}},{node:{path:"/404.html"}}]}}}},263:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return l});var r=n(265),a={primary:"#2ea1f8",secondary:"#1bb934",tertiary:"#222c3c",lightGray:"#fafbfc",mediumGray:"#cacaca",darkGray:"#7f8fa4",white:"#fefefe",black:"#354052",body:"#7f8fa4",heading:"#354052",subheading:"#7f8fa4",border:"#e2e7ee",success:"#00D161",alert:"#F85359",inactive:"#C5D0DE"},o={light:300,normal:"normal",medium:500,semibold:600,bold:800,extrabold:900},c="proxima-nova,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif",i=Object(r.b)(4),l=Object(r.b)(1)+" solid "+a.border},264:function(e,t,n){"use strict";var r=n(267),a=n.n(r),o=n(258),c=n(0),i=n(254),l=n(268),u=n.n(l),s=n(255),p=(n(266),n(260)),f=function(){return c.createElement("header",null,c.createElement(i.StaticQuery,{query:"110885827",render:function(e){var t=e.site.siteMetadata,n=t.name,r=t.version,a=t.revision,o=t.repository;return c.createElement("div",null,c.createElement("h1",null,c.createElement(i.Link,{to:"/"},n),"@",r," ",c.createElement("a",{alt:"Browse this revision on GitHub",href:o+"/commit/"+a},"(",a.slice(0,7),")")))},data:p}))},d=(n(144),n(87),n(252),n(86),n(257),n(261));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=d.b.join(" "),v=d.a.join(" "),b=function(e){var t=e.width,n=e.height,r=e.fill,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["width","height","fill"]);return c.createElement("svg",m({width:t,height:n,viewBox:"0 0 "+t+" "+n},a),c.createElement("g",{fill:r,fillRule:"evenodd"},c.createElement("g",{opacity:.75},c.createElement("path",{d:h})),c.createElement("g",{opacity:.2},c.createElement("path",{d:v}))))};b.defaultProps={width:180,height:15,fill:"#222C3C"};var g=b;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e){var t=e.AnchorComponent,n=e.DivComponent,r=e.href,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["AnchorComponent","DivComponent","href"]);return c.createElement(n,null,c.createElement(t,y({},a,{href:r,target:"_blank",rel:"noopener noreferrer"}),c.createElement(g,null)))}E.defaultProps={href:"http://mangochutney.com.au"};var w=function(){var e={AnchorComponent:s.b.a.withConfig({componentId:"s1srkjmy-0"})(["width:180px;height:15px;display:inline-block;"]),DivComponent:s.b.div.withConfig({componentId:"s1srkjmy-1"})(["margin:2rem 0;text-align:center;"])};return function(t){return c.createElement(E,Object.assign({},e,t))}}(),O=function(){return c.createElement("footer",null,c.createElement(w,null))},j=(n(269),n(145),n(262)),x=function(){return c.createElement("nav",null,c.createElement(i.StaticQuery,{query:"453145417",render:function(e){var t=e.allSitePage.edges.filter(function(e){var t=e.node.path;return t.startsWith("/components")||"/"===t}).sort(function(e,t){var n=e.node.path,r=t.node.path;return n.localeCompare(r)});return c.createElement("ul",null,t.map(function(e){var t=e.node.path;return c.createElement("li",{key:t},c.createElement(i.Link,{to:t},t))}))},data:j}))};function C(){var e=a()(["\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n"]);return C=function(){return e},e}Object(s.c)(C());var k=s.b.div.withConfig({displayName:"Layout__Wrapper"})(["margin:1rem;"]);t.a=function(e){var t=e.children;return c.createElement(i.StaticQuery,{query:"1242692094",render:function(e){var n=e.site.siteMetadata.title;return c.createElement(c.Fragment,null,c.createElement(u.a,{title:n}),c.createElement(k,null,c.createElement(f,null),c.createElement(x,null),c.createElement("main",null,t),c.createElement(O,null)))},data:o})}}}]);
//# sourceMappingURL=component---src-pages-components-toast-index-js-07c8e92b832188f7676c.js.map