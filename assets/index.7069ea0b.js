import{d,r as h,o as i,c as p,a as t,t as _,F as f,p as v,b as y,e as a,f as m,g as b}from"./vendor.0d16f679.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};x();var V="/assets/logo.03d6d6da.png";var g=(o,r)=>{const l=o.__vccOpts||o;for(const[n,e]of r)l[n]=e;return l};const c=o=>(v("data-v-8701d2a6"),o=o(),y(),o),k=c(()=>t("p",null,[a(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),S=c(()=>t("p",null,[a("See "),t("code",null,"README.md"),a(" for more information.")],-1)),D=c(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),a(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),I=c(()=>t("p",null,[a(" Edit "),t("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. test ")],-1)),E=d({props:{msg:null},setup(o){const r=h(0);return(l,n)=>(i(),p(f,null,[t("h1",null,_(o.msg),1),k,S,D,t("button",{type:"button",onClick:n[0]||(n[0]=e=>r.value++)},"count is: "+_(r.value),1),I],64))}});var N=g(E,[["__scopeId","data-v-8701d2a6"]]);const B={class:"px-4 py-2 rounded-md bg-indigo-600 text-white"},L=d({props:{title:{type:String,default:"",required:!0}},setup(o){const r=o;return(l,n)=>(i(),p("button",B,_(r.title),1))}});var O=g(L,[["__scopeId","data-v-b0711dd4"]]);const $=t("img",{alt:"Vue logo",src:V},null,-1),j=d({setup(o){return(r,l)=>(i(),p(f,null,[$,m(N,{msg:"Hello Vue 3 + TypeScript + Vite"}),m(O,{title:"hogehoge"})],64))}});b(j).mount("#app");
