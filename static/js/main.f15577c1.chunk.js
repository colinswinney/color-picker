(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),r=c.n(a),i=(c(15),c(2)),o=(c(16),c(6)),l=c(7),u=c(3),j=c(10),h=c(9),b=c(8),d=c.n(b),m=c(0),x=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).onSuccess=s.onSuccess.bind(Object(u.a)(s)),s.state={success:!1,successClass:""},s}return Object(l.a)(c,[{key:"onSuccess",value:function(){var e=this;console.info("successfully copied"),this.setState({success:!0,successClass:"success"}),setTimeout((function(){e.setState({success:!1,successClass:""})}),1500)}},{key:"render",value:function(){return Object(m.jsx)(d.a,{component:"span","data-clipboard-text":this.props.clipboardText,"button-title":this.props.btnTitle,onSuccess:this.onSuccess,className:"color-name ".concat(this.state.successClass),children:this.state.success?"Copied!":this.props.children})}}]),c}(s.Component);c(22);var O=function(e){var t=e.color,c=Object(s.useState)(!1),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){r(window.scrollY>50)}))}),[]),Object(m.jsx)("nav",{className:a?"nav scrolled":"nav",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("ul",{class:"menu",children:[Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)("a",{href:"/hsl-color-picker/#HSL",children:"HSL"})}),Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)("a",{href:"/hsl-color-picker/#Shades",children:"Shades"})}),Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)("a",{href:"/hsl-color-picker/#Tints",children:"Tints"})}),Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)("a",{href:"/hsl-color-picker/#Harmonies",children:"Harmonies"})}),Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)("a",{href:"/hsl-color-picker/#Preview",children:"Preview"})}),Object(m.jsxs)("li",{className:"menu-item",children:[Object(m.jsx)(x,{clipboardText:t,btnTitle:"Copy: ".concat(t),children:t}),Object(m.jsx)("span",{style:{backgroundColor:t},className:"swatch"})]})]})})})};function g(e,t,c){c/=100;var s=t*Math.min(c,1-c)/100,n=function(t){var n=(t+e/30)%12,a=c-s*Math.max(Math.min(n-3,9-n,1),-1);return Math.round(255*a).toString(16).padStart(2,"0")};return"#".concat(n(0)).concat(n(8)).concat(n(4))}function p(e,t,c){t/=100,c/=100;var s=(1-Math.abs(2*c-1))*t,n=s*(1-Math.abs(e/60%2-1)),a=c-s/2,r=0,i=0,o=0;return 0<=e&&e<60?(r=s,i=n,o=0):60<=e&&e<120?(r=n,i=s,o=0):120<=e&&e<180?(r=0,i=s,o=n):180<=e&&e<240?(r=0,i=n,o=s):240<=e&&e<300?(r=n,i=0,o=s):300<=e&&e<=360&&(r=s,i=0,o=n),"rgb("+(r=Math.round(255*(r+a)))+", "+(i=Math.round(255*(i+a)))+", "+(o=Math.round(255*(o+a)))+")"}function v(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)}c(23);var f=function(e){var t=e.color,c=e.hue,s=e.saturation,n=e.lightness,a=e.children;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{className:"title",children:"HSL Color Picker"}),Object(m.jsx)("p",{className:"subtitle",children:"Click on any HSL, HEX, or RGB value to copy to your clipboard!"}),Object(m.jsx)("div",{className:"color-window",style:{backgroundColor:t}}),a,Object(m.jsxs)("div",{className:"text-block",children:[Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:t,btnTitle:"Copy ".concat(t),children:t})}),Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:g(c,s,n),btnTitle:"Copy ".concat(g(c,s,n)),children:g(c,s,n)})}),Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:p(c,s,n),btnTitle:"Copy ".concat(p(c,s,n)),children:p(c,s,n)})})]})]})};c(24);var S=function(e){var t=e.textColor,c=e.bgColor,s=e.userText,n={color:t,backgroundColor:c};return Object(m.jsxs)("div",{style:n,className:"preview-window",children:[Object(m.jsx)("h2",{children:s||"HSL is the best thing ever"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum vel lorem posuere interdum ultricies sed lectus. Aliquam bibendum sapien ac elit ultricies egestas. Suspendisse sagittis vel magna at finibus. Phasellus interdum arcu et ornare dapibus."})]})};c(25);var N=function(e){var t=e.color,c=Object(s.useState)(""),n=Object(i.a)(c,2),a=n[0],r=n[1],o="hsl(0, 0%, 99%)",l="hsl(0, 0%, 7%)";return Object(m.jsxs)("section",{id:"Preview",children:[Object(m.jsx)("h2",{class:"title",children:"Preview"}),Object(m.jsx)("p",{children:"View your selection against light and dark text or backgrounds."}),Object(m.jsx)("label",{htmlFor:"heading",className:"text-label",children:"Heading:"}),Object(m.jsx)("input",{className:"text-input",name:"heading",type:"text",value:a,placeholder:"Type something",onChange:function(e){r(e.target.value)}}),Object(m.jsxs)("div",{className:"section-wrap",children:[Object(m.jsx)("section",{children:Object(m.jsx)(S,{bgColor:t,textColor:o,userText:a})}),Object(m.jsx)("section",{children:Object(m.jsx)(S,{bgColor:o,textColor:t,userText:a})}),Object(m.jsx)("section",{children:Object(m.jsx)(S,{bgColor:t,textColor:l,userText:a})}),Object(m.jsx)("section",{children:Object(m.jsx)(S,{bgColor:l,textColor:t,userText:a})})]})]})};c(26);var C=function(e){var t=e.color;return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("small",{children:["Created by ",Object(m.jsx)("a",{style:{borderColor:t},href:"https://colinswinney.com",children:"Colin Swinney"})]})})};c(27);var y=function(e){var t=e.name,c=e.max,s=e.value,n=e.onSliderChange;return Object(m.jsxs)("div",{className:"slider",children:[Object(m.jsx)("label",{className:"slider-label",htmlFor:t,children:function(e,t){return"hue"===e?"H: "+t:"saturation"===e?"S: "+t+"%":"lightness"===e?"L: "+t+"%":void 0}(t,s)}),Object(m.jsx)("input",{className:"slider-input",name:t,type:"range",min:"0",max:c,step:"1",value:s,onChange:n})]})};c(28),c(29);var T=function(e){var t=e.name,c=e.n,s=e.hue,n=e.saturation,a=e.lightness;function r(e,t){var c,s,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n?c=e:a&&(c=100-Number(e));var r=Number(c)/10,i=Number(r)*Number(t);return n?s=Number(e)-Number(i):a&&(s=Number(e)+Number(i)),v(s,2)}function i(e,t,c){return"Shades"===e?r(t,c,!0,!1):"Tints"===e?r(t,c,!1,!0):"Harmonies"===e?t:void 0}return Object(m.jsxs)("div",{className:"color-cell",children:[Object(m.jsx)("div",{className:"color-swatch",style:{backgroundColor:"hsl(".concat(s,", ").concat(n,"%, ").concat(i(t,a,c),"%)")}}),Object(m.jsxs)("div",{className:"color-text-block",children:[Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:"hsl(".concat(s,", ").concat(n,"%, ").concat(i(t,a,c),"%)"),btnTitle:"Copy ".concat("hsl(".concat(s,", ").concat(n,"%, ").concat(i(t,a,c),"%)")),children:"hsl(".concat(s,", ").concat(n,"%, ").concat(i(t,a,c),"%)")})}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:g(s,n,i(t,a,c)),btnTitle:"Copy ".concat(g(s,n,i(t,a,c))),children:g(s,n,i(t,a,c))})}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:Object(m.jsx)(x,{clipboardText:p(s,n,i(t,a,c)),btnTitle:"Copy ".concat(p(s,n,i(t,a,c))),children:p(s,n,i(t,a,c))})})]})]})};var k=function(e){var t=e.name,c=e.hue,s=e.saturation,n=e.lightness,a=Array.from({length:10},(function(e,t){return t+1}));function r(e,t){var c=Number(e)+Number(t);return c>360&&(c=Number(c)-Number(360)),c}return Object(m.jsxs)("section",{class:"colors-section",id:t,children:[Object(m.jsx)("h2",{className:"title",children:t}),Object(m.jsxs)("div",{className:"colors-container",children:["Harmonies"!==t?a.map((function(e){return Object(m.jsx)(T,{name:t,n:e,hue:c,saturation:s,lightness:n},e)})):"","Harmonies"===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:"Complimentary"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,180),saturation:s,lightness:n}),Object(m.jsx)("h4",{children:"Analogous"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,30),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,60),saturation:s,lightness:n}),Object(m.jsx)("h4",{children:"Triadic"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,120),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,240),saturation:s,lightness:n}),Object(m.jsx)("h4",{children:"Split-Complimentary"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,150),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,210),saturation:s,lightness:n}),Object(m.jsx)("h4",{children:"Square"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,90),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,180),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,270),saturation:s,lightness:n}),Object(m.jsx)("h4",{children:"Rectangular"}),Object(m.jsx)(T,{name:t,hue:c,saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,60),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,180),saturation:s,lightness:n}),Object(m.jsx)(T,{name:t,hue:r(c,240),saturation:s,lightness:n})]}):""]})]})};var w=function(){var e=Object(s.useState)((function(){var e=localStorage.getItem("hue");return e?JSON.parse(e):"180"})),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)((function(){var e=localStorage.getItem("saturation");return e?JSON.parse(e):"50"})),r=Object(i.a)(a,2),o=r[0],l=r[1],u=Object(s.useState)((function(){var e=localStorage.getItem("lightness");return e?JSON.parse(e):"50"})),j=Object(i.a)(u,2),h=j[0],b=j[1],d=Object(s.useState)((function(){var e=localStorage.getItem("color");return e?JSON.parse(e):"hsl(".concat(c,", ").concat(o,"%, ").concat(h,"%)")})),x=Object(i.a)(d,2),g=x[0],p=x[1];return Object(s.useEffect)((function(){localStorage.setItem("color",JSON.stringify(g)),localStorage.setItem("hue",JSON.stringify(c)),localStorage.setItem("saturation",JSON.stringify(o)),localStorage.setItem("lightness",JSON.stringify(h))}),[g,c,o,h]),Object(m.jsx)("div",{className:"app",id:"HSL",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(O,{color:g}),Object(m.jsxs)(f,{color:g,hue:c,saturation:o,lightness:h,children:[Object(m.jsx)(y,{name:"hue",max:"360",value:c,onSliderChange:function(e){n(e.target.value),p("hsl(".concat(e.target.value,", ").concat(o,"%, ").concat(h,"%)"))}}),Object(m.jsx)(y,{name:"saturation",max:"100",value:o,onSliderChange:function(e){l(e.target.value),p("hsl(".concat(c,", ").concat(e.target.value,"%, ").concat(h,"%)"))}}),Object(m.jsx)(y,{name:"lightness",max:"100",value:h,onSliderChange:function(e){b(e.target.value),p("hsl(".concat(c,", ").concat(o,"%, ").concat(e.target.value,"%)"))}})]}),Object(m.jsxs)("main",{children:[Object(m.jsx)(k,{name:"Shades",hue:c,saturation:o,lightness:h}),Object(m.jsx)(k,{name:"Tints",hue:c,saturation:o,lightness:h}),Object(m.jsx)(k,{name:"Harmonies",hue:c,saturation:o,lightness:h}),Object(m.jsx)(N,{color:g})]}),Object(m.jsx)(C,{color:g})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),H()}],[[30,1,2]]]);
//# sourceMappingURL=main.f15577c1.chunk.js.map