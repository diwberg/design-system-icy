import{j as e}from"./jsx-runtime-6db5783a.js";function l({token:t,hasRemValue:a=!1,hasGraphicShow:i=!1,hasGraphicFont:d=!1}){function s(r){return String(Number(r.replace("rem",""))*16)+"px"}return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Value"}),a&&e.jsx("th",{children:"Pixels"}),i&&e.jsx("th",{children:"Space"})]})}),e.jsx("tbody",{children:Object.entries(t).map(([r,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:r}),e.jsx("td",{children:n}),a&&e.jsx("td",{children:s(n)}),i&&e.jsx("td",{children:e.jsx("span",{style:{paddingLeft:s(n)}})}),d&&e.jsx("td",{children:e.jsx("p",{style:{fontSize:s(n)},children:"ABCD"})})]},r))})]})}try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{token:{defaultValue:null,description:"",name:"token",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}},hasGraphicShow:{defaultValue:{value:"false"},description:"",name:"hasGraphicShow",required:!1,type:{name:"boolean"}},hasGraphicFont:{defaultValue:{value:"false"},description:"",name:"hasGraphicFont",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid-b5850cd0.js.map