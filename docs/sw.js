if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const f=e=>i(e,c),t={module:{uri:c},exports:o,require:f};n[c]=Promise.all(r.map((e=>t[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-36afc740.css",revision:null},{url:"assets/index-fff8cf8c.js",revision:null},{url:"index.html",revision:"5866ba5b82d98784784c7f18aef3be91"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-launchericon-72-72.png",revision:"32d17a055d9e21ae80aa76f0d552fb47"},{url:"android-launchericon-192-192.png",revision:"364cea4a184f4f1627d2abc41c4989e5"},{url:"android-launchericon-512-512.png",revision:"15ab91f57b0909abde774196fa24ccc4"},{url:"manifest.webmanifest",revision:"cc6c3ff08fb6f2d5836d166b7f69fea7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
