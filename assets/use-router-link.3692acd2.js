import{e as K}from"./vm.1883c56a.js";import{c as a,g as j}from"./index.637ea388.js";function L(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function P(t,r){return(t.aliasOf||t)===(r.aliasOf||r)}function q(t,r){for(const l in r){const e=r[l],u=t[l];if(typeof e=="string"){if(e!==u)return!1}else if(Array.isArray(u)===!1||u.length!==e.length||e.some((g,d)=>g!==u[d]))return!1}return!0}function O(t,r){return Array.isArray(r)===!0?t.length===r.length&&t.every((l,e)=>l===r[e]):t.length===1&&t[0]===r}function B(t,r){return Array.isArray(t)===!0?O(t,r):Array.isArray(r)===!0?O(r,t):t===r}function V(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const l in t)if(B(t[l],r[l])===!1)return!1;return!0}const H={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function M({fallbackTag:t,useDisableForRouterLinkProps:r=!0}={}){const l=j(),{props:e,proxy:u,emit:g}=l,d=K(l),h=a(()=>e.disable!==!0&&e.href!==void 0),$=r===!0?a(()=>d===!0&&e.disable!==!0&&h.value!==!0&&e.to!==void 0&&e.to!==null&&e.to!==""):a(()=>d===!0&&h.value!==!0&&e.to!==void 0&&e.to!==null&&e.to!==""),f=a(()=>$.value===!0?A(e.to):null),i=a(()=>f.value!==null),m=a(()=>h.value===!0||i.value===!0),C=a(()=>e.type==="a"||m.value===!0?"a":e.tag||t||"div"),S=a(()=>h.value===!0?{href:e.href,target:e.target}:i.value===!0?{href:f.value.href,target:e.target}:{}),k=a(()=>{if(i.value===!1)return-1;const{matched:n}=f.value,{length:s}=n,o=n[s-1];if(o===void 0)return-1;const c=u.$route.matched;if(c.length===0)return-1;const v=c.findIndex(P.bind(null,o));if(v>-1)return v;const R=L(n[s-2]);return s>1&&L(o)===R&&c[c.length-1].path!==R?c.findIndex(P.bind(null,n[s-2])):v}),p=a(()=>i.value===!0&&k.value!==-1&&q(u.$route.params,f.value.params)),y=a(()=>p.value===!0&&k.value===u.$route.matched.length-1&&V(u.$route.params,f.value.params)),I=a(()=>i.value===!0?y.value===!0?` ${e.exactActiveClass} ${e.activeClass}`:e.exact===!0?"":p.value===!0?` ${e.activeClass}`:"":"");function A(n){try{return u.$router.resolve(n)}catch{}return null}function x(n,{returnRouterError:s,to:o=e.to,replace:c=e.replace}={}){if(e.disable===!0)return n.preventDefault(),Promise.resolve(!1);if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.button!==void 0&&n.button!==0||e.target==="_blank")return Promise.resolve(!1);n.preventDefault();const v=u.$router[c===!0?"replace":"push"](o);return s===!0?v:v.then(()=>{}).catch(()=>{})}function b(n){if(i.value===!0){const s=o=>x(n,o);g("click",n,s),n.defaultPrevented!==!0&&s()}else g("click",n)}return{hasRouterLink:i,hasHrefLink:h,hasLink:m,linkTag:C,resolvedLink:f,linkIsActive:p,linkIsExactActive:y,linkClass:I,linkAttrs:S,getLink:A,navigateToRouterLink:x,navigateOnClick:b}}export{M as a,H as u};
