const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");document.querySelector("body");let d;t.addEventListener("click",(()=>{d||(t.disabled=!0,e.disabled=!1,d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3))})),e.addEventListener("click",(()=>{d&&(clearInterval(d),d=null,t.disabled=!1,e.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.da0a0cd2.js.map