const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=0;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",""),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.5d7adf52.js.map
