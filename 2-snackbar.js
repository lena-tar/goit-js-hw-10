import"./assets/styles-C0wZFPNr.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector(".form"),i=s=>`data:image/svg+xml,${encodeURIComponent(s)}`,a=i(`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="10"
    cy="10"
    r="8.5"
    stroke="white"
    stroke-width="1.5"
  />
  <path
    d="M6 10.5L9 13.5L14 7.5"
    stroke="white"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`),l=i(`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="8.5"
          stroke="white" stroke-width="1.5"/>
  <path d="M7 7L13 13M13 7L7 13"
        stroke="white" stroke-width="1.5"
        stroke-linecap="round"/>
</svg>
`);e.addEventListener("submit",s=>{s.preventDefault();const o=Number(e.delay.value),n=e.state.value;new Promise((t,c)=>{setTimeout(()=>{n==="fulfilled"?t(o):c(o)},o)}).then(t=>{r.show({class:"toast toast--success",position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:a,message:`Fulfilled promise in ${t}ms`})}).catch(t=>{r.show({class:"toast toast--error",position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:l,message:`Rejected promise in ${t}ms`})}),e.reset()});
//# sourceMappingURL=2-snackbar.js.map
