import{t as f,s as u,c as _,r as g,a as h}from"./vendor.81c4e91b.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}};m();var p="/assets/logo.123b04bc.svg";const v="_App_9g4xh_1",$="_logo_9g4xh_5",y="_header_9g4xh_11",b="_link_9g4xh_22";var i={App:v,logo:$,"logo-spin":"_logo-spin_9g4xh_1",header:y,link:b};const x=f('<div><header><img alt="logo"><p>MoreThanTech</p><a href="https://morethantech.it" target="_blank" rel="noopener noreferrer">Back to MTT</a></header></div>'),N=()=>(()=>{const s=x.cloneNode(!0),r=s.firstChild,n=r.firstChild,l=n.nextSibling,t=l.nextSibling;return u(n,"src",p),_(e=>{const o=i.App,c=i.header,a=i.logo,d=i.link;return o!==e._v$&&(s.className=e._v$=o),c!==e._v$2&&(r.className=e._v$2=c),a!==e._v$3&&(n.className=e._v$3=a),d!==e._v$4&&(t.className=e._v$4=d),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),s})();g(()=>h(N,{}),document.getElementById("root"));
