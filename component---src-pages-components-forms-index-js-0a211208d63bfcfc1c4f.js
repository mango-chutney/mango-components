(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(e,t,n){"use strict";var a=n(37),r=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Form=void 0,n(247),n(62);var l=r(n(38)),s=r(n(79)),o=r(n(80));n(78);var i=r(n(302)),c=a(n(1)),u=n(146),d=r(n(566)),b=n(248),m=r(n(246)),p=function(e){var t=e.meta,n=(0,i.default)(e,["meta"]);return c.createElement(b.TextArea,Object.assign({},n,{meta:t}),c.createElement(b.Tootlip,{visible:t.touched&&t.error},"There is an error with this field."))},f=[{name:"apple",color:"red"},{name:"orange",color:"orange"},{name:"pear",color:"green"},{name:"banana",color:"yellow"}],h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,s.default)((0,s.default)(t)),"submit",function(){return new Promise(function(e){return setTimeout(function(){return e()},3e3)})}),t}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.submitting,n=e.submitSucceeded,a=e.handleSubmit,r=e.reset;return n&&setTimeout(function(){return r()},3e3),c.createElement(m.default,null,c.createElement("h2",null,"Forms"),c.createElement("h3",null,"Input"),c.createElement("form",null,c.createElement(u.Field,{type:"email",name:"email",placeholder:"Email",label:"email",component:b.Input}),c.createElement(u.Field,{type:"password",name:"password",placeholder:"Password",label:"password",component:b.Input}),c.createElement(u.Field,{type:"text",name:"invalid-text",placeholder:"invalid field",label:"invalid field",component:b.Input}),c.createElement(u.Field,{type:"text",name:"disabled-text",placeholder:"disabled field",label:"disabled field",component:b.Input,disabled:!0}),c.createElement(u.Field,{type:"text",name:"async-validating-text",placeholder:"async-validating-text",label:"async validating field",component:b.Input}),c.createElement(u.Field,{name:"textarea",label:"TextArea",placeholder:"TextArea",component:b.TextArea}),c.createElement(u.Field,{name:"invalid-textarea",label:"Invalid TextArea",placeholder:"Invalid TextArea",component:p}),c.createElement(u.Field,{name:"disabled-textarea",label:"Disabled TextArea",placeholder:"Disabled TextArea",component:b.TextArea,disabled:!0}),c.createElement("div",null,c.createElement(u.Field,{name:"checken",label:"This guy has no children, but a label prop.",placeholder:"checken",component:b.Checkbox})),c.createElement("div",null,c.createElement(u.Field,{name:"checken2",placeholder:"checken2",component:b.Checkbox},"This guy has a link:"," ",c.createElement("a",{href:"http://mangochutney.com.au"},"http://mangochutney.com.au"))),c.createElement("div",null,c.createElement(u.Field,{name:"checken3",placeholder:"checken3",component:b.Checkbox},"This guy has a Button:"," ",c.createElement("button",{type:"button",onClick:function(){alert("Thanks for following the instructions.")}},"press me"))),c.createElement("div",null,c.createElement(u.Field,{name:"invalid-checken",label:"This guy is invalid.",placeholder:"invalid checken",component:b.Checkbox})),c.createElement("div",null,c.createElement(u.Field,{name:"disabled-checken",label:"This guy is disabled.",placeholder:"disabled checken",component:b.Checkbox,disabled:!0})),c.createElement("div",null,c.createElement(u.Field,{name:"select",label:"select",placeholder:"select",component:b.Select},c.createElement("option",{value:"option-1"},"Option 1"),c.createElement("option",{value:"option-2"},"Option 2"))),c.createElement("div",null,c.createElement(u.Field,{name:"disabled-select",label:"disabled select",placeholder:"disabled select",component:b.Select,disabled:!0},c.createElement("option",{value:"option-1"},"Option 1"),c.createElement("option",{value:"option-2"},"Option 2"))),c.createElement("div",null,c.createElement(u.Field,{name:"invalid-select",label:"invalid select",placeholder:"invalid select",component:b.Select},c.createElement("option",{value:"option-1"},"Option 1"),c.createElement("option",{value:"option-2"},"Option 2"))),c.createElement(u.Field,{name:"fruit",label:"Enter fruit name",items:f,placeholder:"Enter fruit name",filterItems:function(e,t){return(0,d.default)(e,t,{keys:["name"],maxRanking:d.default.rankings.STARTS_WITH})},renderItem:function(e){return c.createElement("span",{style:{color:e.color}},e.name)},mapItemToString:function(e){return e?e.name:""},component:b.TypeaheadInput}),c.createElement(u.Field,{name:"soup",label:"Enter soup date",autoComplete:"off",component:b.DatePicker,placeholder:"DD/MM/YYYY"}),c.createElement(u.Field,{name:"invalid-soup",label:"Enter soup date invalid",autoComplete:"off",component:b.DatePicker,placeholder:"DD/MM/YYYY"}),c.createElement(u.Field,{name:"disabled-soup",label:"Enter soup date disabled",disabled:!0,autoComplete:"off",component:b.DatePicker,placeholder:"DD/MM/YYYY"}),c.createElement(b.Button,{onClick:a(this.submit)},"Go",c.createElement(b.Tootlip,{visible:t},"OK, please wait a moment…"),c.createElement(b.Tootlip,{visible:n},"Thanks for submitting the form"," ",c.createElement("span",{role:"img","aria-label":"Thumbs up sign"},"👍")))))},t}(c.Component);t.Form=h;var E=(0,u.reduxForm)({form:"Form",validate:function(e){var t={};return e.password||(t.password="Please enter a password!"),e.email||(t.email="Please enter your email address!"),e.fruit||(t.fruit="Please enter your fruit!"),f.some(function(t){return t.name===e.fruit})||(t.fruit="That is not one of the available fruits!"),t["invalid-select"]=!0,t["invalid-soup"]=!0,t["invalid-text"]=!0,t["invalid-textarea"]=!0,t["invalid-checken"]=!0,t},asyncValidate:function(){return new Promise(function(e){return setTimeout(e,1e3)}).then(function(){throw{"async-validating-text":":("}})},asyncBlurFields:["async-validating-text"]})(h);t.default=E},566:function(e,t,n){"use strict";n.r(t),n.d(t,"rankings",function(){return s});var a=function(e,t){return function(e){
// @license MIT
!function(t,n){e.exports?e.exports=n():this.Diacritics=n()}(0,function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],n=0,a=t.length;n<a;n++)for(var r=t[n].letters.split(""),l=0,s=r.length;l<s;l++)e.map[r[l]]=t[n].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var n,a="",r=t.split(""),l=0,s=r.length;l<s;l++)a+=(n=r[l])in e.map?e.map[n]:n;return a},e})}(t={exports:{}}),t.exports}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s={CASE_SENSITIVE_EQUAL:9,EQUAL:8,STARTS_WITH:7,WORD_STARTS_WITH:6,STRING_CASE:5,STRING_CASE_ACRONYM:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},o={CAMEL:.8,PASCAL:.6,KEBAB:.4,SNAKE:.2,NO_CASE:0};function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return e;var a=n.keys,o=n.threshold,i=void 0===o?s.MATCHES:o;return e.reduce(function(e,o,u){var d=function(e,t,n,a){return t?function(e,t){return t.reduce(function(t,n){var a=function(e,t){"object"===(void 0===t?"undefined":r(t))&&(t=t.key);var n;return null!=(n="function"==typeof t?t(e):-1!==t.indexOf(".")?t.split(".").reduce(function(e,t){return e?e[t]:null},e):e[t])?[].concat(n):null}(e,n);return a&&a.forEach(function(e){t.push({itemValue:e,attributes:function(e){return"string"==typeof e&&(e={key:e}),l({maxRanking:1/0,minRanking:-1/0},e)}(n)})}),t},[])}(e,t).reduce(function(e,t,r){var l=e.rank,o=e.keyIndex,i=t.itemValue,u=t.attributes,d=c(i,n,a),b=u.minRanking,m=u.maxRanking;return d<b&&d>=s.MATCHES?d=b:d>m&&(d=m),d>l&&(l=d,o=r),{rank:l,keyIndex:o}},{rank:s.NO_MATCH,keyIndex:-1}):{rank:c(e,n,a),keyIndex:-1}}(o,a,t,n),b=d.rank,m=d.keyIndex;return b>=i&&e.push({item:o,rank:b,index:u,keyIndex:m}),e},[]).sort(u).map(function(e){return e.item})}function c(e,t,n){if(e=d(e,n),(t=d(t,n)).length>e.length)return s.NO_MATCH;if(e===t)return s.CASE_SENSITIVE_EQUAL;var a,r,l=function(e){var t=e.toLowerCase()!==e,n=e.indexOf("-")>=0,a=e.indexOf("_")>=0;return t||a||!n?t||!a||n?!t||n||a?o.NO_CASE:e[0].toUpperCase()===e[0]?o.PASCAL:o.CAMEL:o.SNAKE:o.KEBAB}(e),i=function(e,t,n){var a=e.toLowerCase().indexOf(t.toLowerCase());switch(n){case o.SNAKE:return"_"===e[a-1];case o.KEBAB:return"-"===e[a-1];case o.PASCAL:case o.CAMEL:return-1!==a&&e[a]===e[a].toUpperCase();default:return!1}}(e,t,l),c=function(e,t,n){var a=null;switch(l){case o.SNAKE:a="_";break;case o.KEBAB:a="-";break;case o.PASCAL:case o.CAMEL:a=/(?=[A-Z])/;break;default:a=null}var r=e.split(a);return t.toLowerCase().split("").reduce(function(e,t,n){var a=r[n];return e&&a&&a[0].toLowerCase()===t},!0)}(e,t);return(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL+l:0===e.indexOf(t)?s.STARTS_WITH+l:-1!==e.indexOf(" "+t)?s.WORD_STARTS_WITH+l:i?s.STRING_CASE+l:l>0&&c?s.STRING_CASE_ACRONYM+l:-1!==e.indexOf(t)?s.CONTAINS+l:1===t.length?s.NO_MATCH:-1!==(a=e,r="",a.split(" ").forEach(function(e){e.split("-").forEach(function(e){r+=e.substr(0,1)})}),r).indexOf(t)?s.ACRONYM+l:function(e,t){var n=0;function a(e,t,n){for(var a=n;a<t.length;a++){if(t[a]===e)return a+1}return-1}var r=a(t[0],e,0);if(r<0)return s.NO_MATCH;n=r;for(var l=1;l<t.length;l++){if(!((n=a(t[l],e,n))>-1))return s.NO_MATCH}return function(e){var n=e-t.length+1;return s.MATCHES+1/n}(n-r)}(e,t)}function u(e,t){var n=e.rank,a=e.index,r=e.keyIndex,l=t.rank,s=t.index,o=t.keyIndex;return n===l?r===o?a<s?-1:1:r<o?-1:1:n>l?-1:1}function d(e,t){return e=""+e,t.keepDiacritics||(e=a.clean(e)),e}i.rankings=s,i.caseRankings=o,t.default=i}}]);
//# sourceMappingURL=component---src-pages-components-forms-index-js-0a211208d63bfcfc1c4f.js.map