(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const l=function(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,l)}})(),(()=>{let r,n,e=0;const l=document.querySelector(".list-item__bestSeller"),t=document.querySelectorAll(".list-item__bestSeller").length,o=parseInt(l.clientHeight),c=document.querySelector(".box__bestSeller .text__module-title "),u=document.querySelector(".box__bestSeller-contents"),s=document.querySelector(".box__bestSeller .list__bestSeller"),d=document.querySelector(".text__product-number"),a=document.querySelector(".box__bestSeller .button__slide-start"),_=document.querySelector(".box__bestSeller .button__slide-stop");u.style.left=`${c.clientWidth+17}px`,d.textContent=t,n=(t-1)*o,s.setAttribute("style","top:0px");const i=()=>{e-=o,s.style.top=`${e}px`,s.style.transition="top 0.5s ease-in-out",e===-n&&setTimeout(()=>{s.style.transition="none",s.style.top="0",e=0},1500)};r=setInterval(i,1500),a.addEventListener("click",()=>{r&&clearInterval(r),r=setInterval(i,3e3)}),_.addEventListener("click",()=>{clearInterval(r)})})();
//# sourceMappingURL=bannerSlider-Zr-hmn09.js.map
