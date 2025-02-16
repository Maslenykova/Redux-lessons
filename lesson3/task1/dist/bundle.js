(()=>{"use strict";var e,r,t={478:()=>{const e="USERS/ADDUSERS ",r="USERS/DELETEUSERS",t="USERS/UPDSTE_USERS",n=r=>({type:e,payload:{userData:r}}),o=e=>({type:r,payload:{userId:e}}),i="COUNTER/INCREMENT",c="COUNTER/DECREMENT",a="COUNTER/RESET",d=()=>({type:i});function s(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var u=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),f=()=>Math.random().toString(36).substring(7).split("").join("."),l={INIT:`@@redux/INIT${f()}`,REPLACE:`@@redux/REPLACE${f()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${f()}`};const p={usersList:[]},h=function e(r,t,n){if("function"!=typeof r)throw new Error(s(2));if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(s(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(s(1));return n(e)(r,t)}let o=r,i=t,c=new Map,a=c,d=0,f=!1;function p(){a===c&&(a=new Map,c.forEach(((e,r)=>{a.set(r,e)})))}function h(){if(f)throw new Error(s(3));return i}function y(e){if("function"!=typeof e)throw new Error(s(4));if(f)throw new Error(s(5));let r=!0;p();const t=d++;return a.set(t,e),function(){if(r){if(f)throw new Error(s(6));r=!1,p(),a.delete(t),c=null}}}function v(e){if(!function(e){if("object"!=typeof e||null===e)return!1;let r=e;for(;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r||null===Object.getPrototypeOf(e)}(e))throw new Error(s(7));if(void 0===e.type)throw new Error(s(8));if("string"!=typeof e.type)throw new Error(s(17));if(f)throw new Error(s(9));try{f=!0,i=o(i,e)}finally{f=!1}return(c=a).forEach((e=>{e()})),e}return v({type:l.INIT}),{dispatch:v,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(s(10));o=e,v({type:l.REPLACE})},[u]:function(){const e=y;return{subscribe(r){if("object"!=typeof r||null===r)throw new Error(s(11));function t(){const e=r;e.next&&e.next(h())}return t(),{unsubscribe:e(t)}},[u](){return this}}}}}(function(e){const r=Object.keys(e),t={};for(let n=0;n<r.length;n++){const o=r[n];"function"==typeof e[o]&&(t[o]=e[o])}const n=Object.keys(t);let o;try{!function(e){Object.keys(e).forEach((r=>{const t=e[r];if(void 0===t(void 0,{type:l.INIT}))throw new Error(s(12));if(void 0===t(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(s(13))}))}(t)}catch(e){o=e}return function(e={},r){if(o)throw o;let i=!1;const c={};for(let o=0;o<n.length;o++){const a=n[o],d=t[a],u=e[a],f=d(u,r);if(void 0===f)throw r&&r.type,new Error(s(14));c[a]=f,i=i||f!==u}return i=i||n.length!==Object.keys(e).length,i?c:e}}({counter:(e=0,r)=>{switch(r.type){case i:return e+1;case c:return e-1;case a:return 0;default:return e}},users:(n=p,o)=>{switch(o.type){case e:return{...n,usersList:n.usersList.concat(o.payload.userData)};case r:{const e=n.usersList.filter((e=>e.id!==o.payload.userId));return{...n,usersList:e}}case t:{const e=n.usersList.map((e=>e.id===o.payload.userId?{...e,...o.payload.userData}:e));return{...n,usersList:e}}default:return n}}}));h.subscribe((()=>console.log(h.getState()))),h.dispatch(d()),h.dispatch({type:c}),h.dispatch(d()),h.dispatch(d()),h.dispatch({type:a}),h.dispatch(o(1)),h.dispatch(n({id:1,name:"John"})),h.dispatch(n({id:2,name:"Anna"})),h.dispatch({type:t,payload:{userId:1,userData:{name:"John Doe",age:25}}}),h.dispatch(o(2))}},n={};function o(e){var r=n[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=n[e]={exports:{}};try{var c={id:e,module:i,factory:t[e],require:o};o.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}o.m=t,o.c=n,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.miniCssF=e=>{},o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"27ad1f977190015e872c",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="solution:",o.l=(t,n,i,c)=>{if(e[t])e[t].push(n);else{var a,d;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+i){a=f;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+i),a.src=t),e[t]=[n];var l=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},(()=>{var e,r,t,n={},i=o.c,c=[],a=[],d="idle",s=0,u=[];function f(e){d=e;for(var r=[],t=0;t<a.length;t++)r[t]=a[t].call(null,e);return Promise.all(r).then((function(){}))}function l(){0==--s&&f("ready").then((function(){if(0===s){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return f("check").then(o.hmrM).then((function(t){return t?f("prepare").then((function(){var n=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](t.c,t.r,t.m,e,r,n),e}),[])).then((function(){return r=function(){return e?y(e):f("ready").then((function(){return n}))},0===s?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):f(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):y(e)}function y(e){e=e||{},v();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return f("abort").then((function(){throw o[0]}));var i=f("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var c,a=f("apply"),d=function(e){c||(c=e)},s=[];return n.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)s.push(r[t])}})),Promise.all([i,a]).then((function(){return c?f("fail").then((function(){throw c})):t?y(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):f("idle").then((function(){return s}))}))}function v(){if(t)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(t){o.hmrI[e](t,r)}))})),t=void 0,!0}o.hmrD=n,o.i.push((function(u){var y,v,m,E,g=u.module,w=function(r,t){var n=i[t];if(!n)return r;var o=function(o){if(n.hot.active){if(i[o]){var a=i[o].parents;-1===a.indexOf(t)&&a.push(t)}else c=[t],e=o;-1===n.children.indexOf(o)&&n.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+t),c=[];return r(o)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(o,u,a(u));return o.e=function(e,t){return function(e){switch(d){case"ready":f("prepare");case"prepare":return s++,e.then(l,l),e;default:return e}}(r.e(e,t))},o}(u.require,u.id);g.hot=(y=u.id,v=g,E={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:m=e!==y,_requireSelf:function(){c=v.parents.slice(),e=m?void 0:y,o(y)},active:!0,accept:function(e,r,t){if(void 0===e)E._selfAccepted=!0;else if("function"==typeof e)E._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)E._acceptedDependencies[e[n]]=r||function(){},E._acceptedErrorHandlers[e[n]]=t;else E._acceptedDependencies[e]=r||function(){},E._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)E._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)E._declinedDependencies[e[r]]=!0;else E._declinedDependencies[e]=!0},dispose:function(e){E._disposeHandlers.push(e)},addDisposeHandler:function(e){E._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=E._disposeHandlers.indexOf(e);r>=0&&E._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](y,r)})),f("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](y,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(y)}},check:p,apply:h,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:n[y]},e=void 0,E),g.parents=c,g.children=[],c=[],u.require=w})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{if("undefined"!=typeof document){var e=[],r=[],t=t=>({dispose:()=>{for(var r=0;r<e.length;r++){var t=e[r];t.parentNode&&t.parentNode.removeChild(t)}e.length=0},apply:()=>{for(var e=0;e<r.length;e++)r[e].rel="stylesheet";r.length=0}});o.hmrC.miniCss=(n,i,c,a,d,s)=>{d.push(t),n.forEach((t=>{var n=o.miniCssF(t),i=o.p+n,c=((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(c=t[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var c;if((o=(c=i[n]).getAttribute("data-href"))===e||o===r)return c}})(n,i);c&&a.push(new Promise(((n,a)=>{var d=((e,r,t,n,i)=>{var c=document.createElement("link");return c.rel="stylesheet",c.type="text/css",o.nc&&(c.nonce=o.nc),c.onerror=c.onload=t=>{if(c.onerror=c.onload=null,"load"===t.type)n();else{var o=t&&t.type,a=t&&t.target&&t.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=a,c.parentNode&&c.parentNode.removeChild(c),i(d)}},c.href=r,t?t.parentNode.insertBefore(c,t.nextSibling):document.head.appendChild(c),c})(t,i,c,(()=>{d.as="style",d.rel="preload",n()}),a);e.push(c),r.push(d)})))}))}}})(),(()=>{var e,r,t,n,i,c=o.hmrS_jsonp=o.hmrS_jsonp||{792:0},a={};function d(r,t){return e=t,new Promise(((e,t)=>{a[r]=e;var n=o.p+o.hu(r),i=new Error;o.l(n,(e=>{if(a[r]){a[r]=void 0;var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,t(i)}}))}))}function s(e){function a(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),c=i.id,a=i.chain,s=o.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<s.parents.length;u++){var f=s.parents[u],l=o.c[f];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([f]),moduleId:c,parentId:f};-1===r.indexOf(f)&&(l.hot._acceptedDependencies[c]?(t[f]||(t[f]=[]),d(t[f],[c])):(delete t[f],r.push(f),n.push({chain:a.concat([f]),id:f})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,r=void 0;var s={},u=[],f={},l=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(o.o(t,p)){var h=t[p],y=h?a(p):{type:"disposed",moduleId:p},v=!1,m=!1,E=!1,g="";switch(y.chain&&(g="\nUpdate propagation: "+y.chain.join(" -> ")),y.type){case"self-declined":e.onDeclined&&e.onDeclined(y),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+y.moduleId+g));break;case"declined":e.onDeclined&&e.onDeclined(y),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+y.moduleId+" in "+y.parentId+g));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(y),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":e.onAccepted&&e.onAccepted(y),m=!0;break;case"disposed":e.onDisposed&&e.onDisposed(y),E=!0;break;default:throw new Error("Unexception type "+y.type)}if(v)return{error:v};if(m)for(p in f[p]=h,d(u,y.outdatedModules),y.outdatedDependencies)o.o(y.outdatedDependencies,p)&&(s[p]||(s[p]=[]),d(s[p],y.outdatedDependencies[p]));E&&(d(u,[y.moduleId]),f[p]=l)}t=void 0;for(var w,b=[],I=0;I<u.length;I++){var _=u[I],O=o.c[_];O&&(O.hot._selfAccepted||O.hot._main)&&f[_]!==l&&!O.hot._selfInvalidated&&b.push({module:_,require:O.hot._requireSelf,errorHandler:O.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete c[e]})),n=void 0;for(var r,t=u.slice();t.length>0;){var i=t.pop(),a=o.c[i];if(a){var d={},f=a.hot._disposeHandlers;for(I=0;I<f.length;I++)f[I].call(null,d);for(o.hmrD[i]=d,a.hot.active=!1,delete o.c[i],delete s[i],I=0;I<a.children.length;I++){var l=o.c[a.children[I]];l&&(e=l.parents.indexOf(i))>=0&&l.parents.splice(e,1)}}}for(var p in s)if(o.o(s,p)&&(a=o.c[p]))for(w=s[p],I=0;I<w.length;I++)r=w[I],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var t in f)o.o(f,t)&&(o.m[t]=f[t]);for(var n=0;n<i.length;n++)i[n](o);for(var c in s)if(o.o(s,c)){var a=o.c[c];if(a){w=s[c];for(var d=[],l=[],p=[],h=0;h<w.length;h++){var y=w[h],v=a.hot._acceptedDependencies[y],m=a.hot._acceptedErrorHandlers[y];if(v){if(-1!==d.indexOf(v))continue;d.push(v),l.push(m),p.push(y)}}for(var E=0;E<d.length;E++)try{d[E].call(null,w)}catch(t){if("function"==typeof l[E])try{l[E](t,{moduleId:c,dependencyId:p[E]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:p[E],error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:p[E],error:t}),e.ignoreErrored||r(t)}}}for(var g=0;g<b.length;g++){var I=b[g],_=I.module;try{I.require(_)}catch(t){if("function"==typeof I.errorHandler)try{I.errorHandler(t,{moduleId:_,module:o.c[_]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:_,error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:_,error:t}),e.ignoreErrored||r(t)}}return u}}}self.webpackHotUpdatesolution=(r,n,c)=>{for(var d in n)o.o(n,d)&&(t[d]=n[d],e&&e.push(d));c&&i.push(c),a[r]&&(a[r](),a[r]=void 0)},o.hmrI.jsonp=function(e,r){t||(t={},i=[],n=[],r.push(s)),o.o(t,e)||(t[e]=o.m[e])},o.hmrC.jsonp=function(e,a,u,f,l,p){l.push(s),r={},n=a,t=u.reduce((function(e,r){return e[r]=!1,e}),{}),i=[],e.forEach((function(e){o.o(c,e)&&void 0!==c[e]?(f.push(d(e,p)),r[e]=!0):r[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,t){r&&o.o(r,e)&&!r[e]&&(t.push(d(e)),r[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(478)})();