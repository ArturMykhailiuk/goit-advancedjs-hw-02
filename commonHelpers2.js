import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const a=document.querySelector(".form");a.addEventListener("submit",e=>{e.preventDefault();const i=parseInt(e.target.delay.value),s=e.target.state.value;new Promise((t,r)=>{setTimeout(()=>{s==="fulfilled"?t(i):r(i)},i)}).then(t=>{o.success({title:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map