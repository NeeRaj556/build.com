(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3681],{9552:(t,e,n)=>{"use strict";n.d(e,{A:()=>v});var a=n(85573),c=n(45431),l=n(61388);let i=new a.Mo("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),r=t=>({height:t,lineHeight:(0,a.zA)(t)}),o=t=>Object.assign({width:t},r(t)),s=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:i,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),d=(t,e)=>Object.assign({width:e(t).mul(5).equal(),minWidth:e(t).mul(5).equal()},r(t)),g=t=>{let{skeletonAvatarCls:e,gradientFromColor:n,controlHeight:a,controlHeightLG:c,controlHeightSM:l}=t;return{[e]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},o(a)),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"},["".concat(e).concat(e,"-lg")]:Object.assign({},o(c)),["".concat(e).concat(e,"-sm")]:Object.assign({},o(l))}},u=t=>{let{controlHeight:e,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:c,controlHeightSM:l,gradientFromColor:i,calc:r}=t;return{[a]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:n},d(e,r)),["".concat(a,"-lg")]:Object.assign({},d(c,r)),["".concat(a,"-sm")]:Object.assign({},d(l,r))}},m=t=>Object.assign({width:t},r(t)),b=t=>{let{skeletonImageCls:e,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:c,calc:l}=t;return{[e]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:a,borderRadius:c},m(l(n).mul(2).equal())),{["".concat(e,"-path")]:{fill:"#bfbfbf"},["".concat(e,"-svg")]:Object.assign(Object.assign({},m(n)),{maxWidth:l(n).mul(4).equal(),maxHeight:l(n).mul(4).equal()}),["".concat(e,"-svg").concat(e,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"}}},p=(t,e,n)=>{let{skeletonButtonCls:a}=t;return{["".concat(n).concat(a,"-circle")]:{width:e,minWidth:e,borderRadius:"50%"},["".concat(n).concat(a,"-round")]:{borderRadius:e}}},h=(t,e)=>Object.assign({width:e(t).mul(2).equal(),minWidth:e(t).mul(2).equal()},r(t)),f=t=>{let{borderRadiusSM:e,skeletonButtonCls:n,controlHeight:a,controlHeightLG:c,controlHeightSM:l,gradientFromColor:i,calc:r}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:e,width:r(a).mul(2).equal(),minWidth:r(a).mul(2).equal()},h(a,r))},p(t,a,n)),{["".concat(n,"-lg")]:Object.assign({},h(c,r))}),p(t,c,"".concat(n,"-lg"))),{["".concat(n,"-sm")]:Object.assign({},h(l,r))}),p(t,l,"".concat(n,"-sm")))},O=t=>{let{componentCls:e,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:c,skeletonButtonCls:l,skeletonInputCls:i,skeletonImageCls:r,controlHeight:d,controlHeightLG:m,controlHeightSM:p,gradientFromColor:h,padding:O,marginSM:v,borderRadius:j,titleHeight:k,blockRadius:y,paragraphLiHeight:w,controlHeightXS:x,paragraphMarginTop:C}=t;return{[e]:{display:"table",width:"100%",["".concat(e,"-header")]:{display:"table-cell",paddingInlineEnd:O,verticalAlign:"top",[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:h},o(d)),["".concat(n,"-circle")]:{borderRadius:"50%"},["".concat(n,"-lg")]:Object.assign({},o(m)),["".concat(n,"-sm")]:Object.assign({},o(p))},["".concat(e,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",[a]:{width:"100%",height:k,background:h,borderRadius:y,["+ ".concat(c)]:{marginBlockStart:p}},[c]:{padding:0,"> li":{width:"100%",height:w,listStyle:"none",background:h,borderRadius:y,"+ li":{marginBlockStart:x}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(e,"-content")]:{["".concat(a,", ").concat(c," > li")]:{borderRadius:j}}},["".concat(e,"-with-avatar ").concat(e,"-content")]:{[a]:{marginBlockStart:v,["+ ".concat(c)]:{marginBlockStart:C}}},["".concat(e).concat(e,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},f(t)),g(t)),u(t)),b(t)),["".concat(e).concat(e,"-block")]:{width:"100%",[l]:{width:"100%"},[i]:{width:"100%"}},["".concat(e).concat(e,"-active")]:{["\n        ".concat(a,",\n        ").concat(c," > li,\n        ").concat(n,",\n        ").concat(l,",\n        ").concat(i,",\n        ").concat(r,"\n      ")]:Object.assign({},s(t))}}},v=(0,c.OF)("Skeleton",t=>{let{componentCls:e,calc:n}=t;return[O((0,l.oX)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:n(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"}))]},t=>{let{colorFillContent:e,colorFill:n}=t;return{color:e,colorGradientEnd:n,gradientFromColor:e,gradientToColor:n,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]})},11462:(t,e,n)=>{"use strict";n.d(e,{Flex:()=>a.A});var a=n(17238)},17238:(t,e,n)=>{"use strict";n.d(e,{A:()=>x});var a=n(12115),c=n(29300),l=n.n(c),i=n(17980),r=n(96249),o=n(15982),s=n(45431),d=n(61388);let g=["wrap","nowrap","wrap-reverse"],u=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],m=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],b=(t,e)=>{let n=!0===e.wrap?"wrap":e.wrap;return{["".concat(t,"-wrap-").concat(n)]:n&&g.includes(n)}},p=(t,e)=>{let n={};return m.forEach(a=>{n["".concat(t,"-align-").concat(a)]=e.align===a}),n["".concat(t,"-align-stretch")]=!e.align&&!!e.vertical,n},h=(t,e)=>{let n={};return u.forEach(a=>{n["".concat(t,"-justify-").concat(a)]=e.justify===a}),n},f=t=>{let{componentCls:e}=t;return{[e]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},O=t=>{let{componentCls:e}=t;return{[e]:{"&-gap-small":{gap:t.flexGapSM},"&-gap-middle":{gap:t.flexGap},"&-gap-large":{gap:t.flexGapLG}}}},v=t=>{let{componentCls:e}=t,n={};return g.forEach(t=>{n["".concat(e,"-wrap-").concat(t)]={flexWrap:t}}),n},j=t=>{let{componentCls:e}=t,n={};return m.forEach(t=>{n["".concat(e,"-align-").concat(t)]={alignItems:t}}),n},k=t=>{let{componentCls:e}=t,n={};return u.forEach(t=>{n["".concat(e,"-justify-").concat(t)]={justifyContent:t}}),n},y=(0,s.OF)("Flex",t=>{let{paddingXS:e,padding:n,paddingLG:a}=t,c=(0,d.oX)(t,{flexGapSM:e,flexGap:n,flexGapLG:a});return[f(c),O(c),v(c),j(c),k(c)]},()=>({}),{resetStyle:!1});var w=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>e.indexOf(a)&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]]);return n};let x=a.forwardRef((t,e)=>{let{prefixCls:n,rootClassName:c,className:s,style:d,flex:g,gap:u,children:m,vertical:f=!1,component:O="div"}=t,v=w(t,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:j,direction:k,getPrefixCls:x}=a.useContext(o.QO),C=x("flex",n),[q,E,A]=y(C),N=null!=f?f:null==j?void 0:j.vertical,R=l()(s,c,null==j?void 0:j.className,C,E,A,function(t,e){return l()(Object.assign(Object.assign(Object.assign({},b(t,e)),p(t,e)),h(t,e)))}(C,t),{["".concat(C,"-rtl")]:"rtl"===k,["".concat(C,"-gap-").concat(u)]:(0,r.X)(u),["".concat(C,"-vertical")]:N}),S=Object.assign(Object.assign({},null==j?void 0:j.style),d);return g&&(S.flex=g),u&&!(0,r.X)(u)&&(S.gap=u),q(a.createElement(O,Object.assign({ref:e,className:R,style:S},(0,i.A)(v,["justify","wrap","align"])),m))})},17980:(t,e,n)=>{"use strict";function a(t,e){var n=Object.assign({},t);return Array.isArray(e)&&e.forEach(function(t){delete n[t]}),n}n.d(e,{A:()=>a})},44043:(t,e,n)=>{"use strict";n.d(e,{default:()=>o});var a=n(12115),c=n(29300),l=n.n(c),i=n(15982),r=n(9552);let o=t=>{let{prefixCls:e,className:n,rootClassName:c,style:o,active:s}=t,{getPrefixCls:d}=a.useContext(i.QO),g=d("skeleton",e),[u,m,b]=(0,r.A)(g),p=l()(g,"".concat(g,"-element"),{["".concat(g,"-active")]:s},n,c,m,b);return u(a.createElement("div",{className:p},a.createElement("div",{className:l()("".concat(g,"-image"),n),style:o},a.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(g,"-image-svg")},a.createElement("title",null,"Image placeholder"),a.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(g,"-image-path")})))))}},60853:(t,e,n)=>{Promise.resolve().then(n.bind(n,11462)),Promise.resolve().then(n.bind(n,72878)),Promise.resolve().then(n.bind(n,44043)),Promise.resolve().then(n.t.bind(n,69806,23))},69806:t=>{t.exports={categoriesContainer:"style_categoriesContainer__Ydfqe",templateImagesContainer:"style_templateImagesContainer__NBlvs"}},72878:(t,e,n)=>{"use strict";n.d(e,{default:()=>d});var a=n(12115),c=n(29300),l=n.n(c),i=n(17980),r=n(15982),o=n(77730),s=n(9552);let d=t=>{let{prefixCls:e,className:n,rootClassName:c,active:d,block:g=!1,size:u="default"}=t,{getPrefixCls:m}=a.useContext(r.QO),b=m("skeleton",e),[p,h,f]=(0,s.A)(b),O=(0,i.A)(t,["prefixCls"]),v=l()(b,"".concat(b,"-element"),{["".concat(b,"-active")]:d,["".concat(b,"-block")]:g},n,c,h,f);return p(a.createElement("div",{className:v},a.createElement(o.A,Object.assign({prefixCls:"".concat(b,"-button"),size:u},O))))}},77730:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var a=n(12115),c=n(29300),l=n.n(c);let i=t=>{let{prefixCls:e,className:n,style:c,size:i,shape:r}=t,o=l()({["".concat(e,"-lg")]:"large"===i,["".concat(e,"-sm")]:"small"===i}),s=l()({["".concat(e,"-circle")]:"circle"===r,["".concat(e,"-square")]:"square"===r,["".concat(e,"-round")]:"round"===r}),d=a.useMemo(()=>"number"==typeof i?{width:i,height:i,lineHeight:"".concat(i,"px")}:{},[i]);return a.createElement("span",{className:l()(e,o,s,n),style:Object.assign(Object.assign({},d),c)})}},96249:(t,e,n)=>{"use strict";function a(t){return["small","middle","large"].includes(t)}function c(t){return!!t&&"number"==typeof t&&!Number.isNaN(t)}n.d(e,{X:()=>a,m:()=>c})}},t=>{var e=e=>t(t.s=e);t.O(0,[7577,4666,8441,1684,7358],()=>e(60853)),_N_E=t.O()}]);