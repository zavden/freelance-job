import{c as k,a as N,h as be,f as Be,i as Oe,e as Re,j as Le,Q as $e}from"./vm.1883c56a.js";import{u as we,a as Se,Q as Ne}from"./QBanner.8c9d16a6.js";import{g as Me,Q,a as Ve}from"./QBtn.5dce0480.js";import{c as h,h as p,r as A,p as R,o as J,X as le,Y as Fe,Z as W,n as De,_ as Ge,P as K,$ as te,S as ce,s as ae,Q as ne,g as ee,k as je,a0 as Qe,a1 as Ue,a as re,a2 as ve,a3 as ze,A as X,E as L,T as z,G as f,F as m,D as C,w as me,a4 as fe,a5 as se,K as Ce,L as xe,C as oe,U as qe,W as He,H as pe,a6 as We,V as Ie}from"./index.637ea388.js";import{_ as ue}from"./plugin-vue_export-helper.21dcd24c.js";import{T as Ye}from"./TitleView.d468c217.js";import{u as Xe}from"./page.store.3a689585.js";import"./use-router-link.3692acd2.js";var Ke=k({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=h(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>e[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${l.length>0?" "+l:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>p("div",{class:n.value},N(t.default))}});const Ze={name:String};function Je(e={}){return(t,n,l)=>{t[n](p("input",{class:"hidden"+(l||""),...e.value}))}}var Te=k({name:"QBtnToggle",props:{...Ze,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(t=>("label"in t||"icon"in t||"slot"in t)&&"value"in t)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const l=h(()=>e.options.find(c=>c.value===e.modelValue)!==void 0),i=h(()=>({type:"hidden",name:e.name,value:e.modelValue})),a=Je(i),o=h(()=>Me(e)),r=h(()=>({rounded:e.rounded,dense:e.dense,...o.value})),g=h(()=>e.options.map((c,_)=>{const{attrs:q,value:d,slot:w,...y}=c;return{slot:w,props:{key:_,"aria-pressed":d===e.modelValue?"true":"false",...q,...y,...r.value,disable:e.disable===!0||y.disable===!0,color:d===e.modelValue?u(y,"toggleColor"):u(y,"color"),textColor:d===e.modelValue?u(y,"toggleTextColor"):u(y,"textColor"),noCaps:u(y,"noCaps")===!0,noWrap:u(y,"noWrap")===!0,size:u(y,"size"),padding:u(y,"padding"),ripple:u(y,"ripple"),stack:u(y,"stack")===!0,stretch:u(y,"stretch")===!0,onClick(I){b(d,c,I)}}}}));function b(c,_,q){e.readonly!==!0&&(e.modelValue===c?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",c,_),n("click",q))}function u(c,_){return c[_]===void 0?e[_]:c[_]}function x(){const c=g.value.map(_=>p(Q,_.props,_.slot!==void 0?t[_.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&l.value===!0&&a(c,"push"),be(t.default,c)}return()=>p(Ke,{class:"q-btn-toggle",...o.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},x)}});const Ae={ratio:[String,Number]};function Ee(e,t){return h(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const et=16/9;var G=k({name:"QImg",props:{...Ae,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:et},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const l=A(e.initialRatio),i=Ee(e,l);let a;const o=[A(null),A(d())],r=A(0),g=A(!1),b=A(!1),u=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=h(()=>({width:e.width,height:e.height})),c=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),_=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));R(()=>q(),w);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function d(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function w(v){clearTimeout(a),b.value=!1,v===null?(g.value=!1,o[r.value^1].value=d()):g.value=!0,o[r.value].value=v}function y({target:v}){a!==null&&(clearTimeout(a),l.value=v.naturalHeight===0?.5:v.naturalWidth/v.naturalHeight,I(v,1))}function I(v,P){a===null||P===1e3||(v.complete===!0?B(v):a=setTimeout(()=>{I(v,P+1)},50))}function B(v){a!==null&&(r.value=r.value^1,o[r.value].value=null,g.value=!1,b.value=!1,n("load",v.currentSrc||v.src))}function M(v){clearTimeout(a),g.value=!1,b.value=!0,o[r.value].value=null,o[r.value^1].value=d(),n("error",v)}function V(v){const P=o[v].value,O={key:"img_"+v,class:c.value,style:_.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...P};return r.value===v?(O.class+=" q-img__image--waiting",Object.assign(O,{onLoad:y,onError:M})):O.class+=" q-img__image--loaded",p("div",{class:"q-img__container absolute-full",key:"img"+v},p("img",O))}function $(){return g.value!==!0?p("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},N(t[b.value===!0?"error":"default"])):p("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[p(Ve,{color:e.spinnerColor,size:e.spinnerSize})])}return w(q()),J(()=>{clearTimeout(a),a=null}),()=>{const v=[];return i.value!==null&&v.push(p("div",{key:"filler",style:i.value})),b.value!==!0&&(o[0].value!==null&&v.push(V(0)),o[1].value!==null&&v.push(V(1))),v.push(p(le,{name:"q-transition--fade"},$)),p("div",{class:u.value,style:x.value,role:"img","aria-label":e.alt},v)}}});const de={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},tt=Object.keys(de);de.all=!0;function he(e){const t={};for(const n of tt)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?de:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ge(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function at(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Fe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function nt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,l)=>{const i=parseFloat(n);i&&(t[l]=i)}),t}var ot=Be({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:l}){if(l.mouse!==!0&&W.has.touch!==!0)return;const i=l.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:nt(n),direction:he(l),noop:De,mouseStart(o){ge(o,a)&&Ge(o)&&(K(a,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(o,!0))},touchStart(o){if(ge(o,a)){const r=o.target;K(a,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),a.start(o)}},start(o,r){W.is.firefox===!0&&te(e,!0);const g=ce(o);a.event={x:g.left,y:g.top,time:Date.now(),mouse:r===!0,dir:!1}},move(o){if(a.event===void 0)return;if(a.event.dir!==!1){ae(o);return}const r=Date.now()-a.event.time;if(r===0)return;const g=ce(o),b=g.left-a.event.x,u=Math.abs(b),x=g.top-a.event.y,c=Math.abs(x);if(a.event.mouse!==!0){if(u<a.sensitivity[1]&&c<a.sensitivity[1]){a.end(o);return}}else if(u<a.sensitivity[2]&&c<a.sensitivity[2])return;const _=u/r,q=c/r;a.direction.vertical===!0&&u<c&&u<100&&q>a.sensitivity[0]&&(a.event.dir=x<0?"up":"down"),a.direction.horizontal===!0&&u>c&&c<100&&_>a.sensitivity[0]&&(a.event.dir=b<0?"left":"right"),a.direction.up===!0&&u<c&&x<0&&u<100&&q>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&u<c&&x>0&&u<100&&q>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&u>c&&b<0&&c<100&&_>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&u>c&&b>0&&c<100&&_>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(ae(o),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),at(),a.styleCleanup=d=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const w=()=>{document.body.classList.remove("no-pointer-events--children")};d===!0?setTimeout(w,50):w()}),a.handler({evt:o,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:r,distance:{x:u,y:c}})):a.end(o)},end(o){a.event!==void 0&&(ne(a,"temp"),W.is.firefox===!0&&te(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),o!==void 0&&a.event.dir!==!1&&ae(o),a.event=void 0)}};if(e.__qtouchswipe=a,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";K(a,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}W.has.touch===!0&&K(a,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=he(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ne(t,"main"),ne(t,"temp"),W.is.firefox===!0&&te(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function it(){const e=new Map;return{getCache:function(t,n){return e[t]===void 0?e[t]=n:e[t]},getCacheWithFn:function(t,n){return e[t]===void 0?e[t]=n():e[t]}}}const lt={name:{required:!0},disable:Boolean},_e={setup(e,{slots:t}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},N(t.default))}},rt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},st=["update:modelValue","beforeTransition","transition"];function ut(){const{props:e,emit:t,proxy:n}=ee(),{getCacheWithFn:l}=it();let i,a;const o=A(null),r=A(null);function g(s){const S=e.vertical===!0?"up":"left";v((n.$q.lang.rtl===!0?-1:1)*(s.direction===S?1:-1))}const b=h(()=>[[ot,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=h(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=h(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),c=h(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=h(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=h(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),d=h(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);R(()=>e.modelValue,(s,S)=>{const E=B(s)===!0?M(s):-1;a!==!0&&$(E===-1?0:E<M(S)?-1:1),o.value!==E&&(o.value=E,t("beforeTransition",s,S),je(()=>{t("transition",s,S)}))});function w(){v(1)}function y(){v(-1)}function I(s){t("update:modelValue",s)}function B(s){return s!=null&&s!==""}function M(s){return i.findIndex(S=>S.props.name===s&&S.props.disable!==""&&S.props.disable!==!0)}function V(){return i.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function $(s){const S=s!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(s===-1?u.value:x.value):null;r.value!==S&&(r.value=S)}function v(s,S=o.value){let E=S+s;for(;E>-1&&E<i.length;){const D=i[E];if(D!==void 0&&D.props.disable!==""&&D.props.disable!==!0){$(s),a=!0,t("update:modelValue",D.props.name),setTimeout(()=>{a=!1});return}E+=s}e.infinite===!0&&i.length>0&&S!==-1&&S!==i.length&&v(s,s===-1?i.length:-1)}function P(){const s=M(e.modelValue);return o.value!==s&&(o.value=s),!0}function O(){const s=B(e.modelValue)===!0&&P()&&i[o.value];return e.keepAlive===!0?[p(Qe,q.value,[p(d.value===!0?l(_.value,()=>({..._e,name:_.value})):_e,{key:_.value,style:c.value},()=>s)])]:[p("div",{class:"q-panel scroll",style:c.value,key:_.value,role:"tabpanel"},[s])]}function T(){if(i.length!==0)return e.animated===!0?[p(le,{name:r.value},O)]:O()}function F(s){return i=Oe(N(s.default,[])).filter(S=>S.props!==null&&S.props.slot===void 0&&B(S.props.name)===!0),i.length}function H(){return i}return Object.assign(n,{next:w,previous:y,goTo:I}),{panelIndex:o,panelDirectives:b,updatePanelsList:F,updatePanelIndex:P,getPanelContent:T,getEnabledPanels:V,getPanels:H,isValidPanelName:B,keepAliveProps:q,needsUniqueKeepAliveWrapper:d,goToPanelByOffset:v,goToPanel:I,nextPanel:w,previousPanel:y}}var j=k({name:"QCarouselSlide",props:{...lt,imgSrc:String},setup(e,{slots:t}){const n=h(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:n.value},N(t.default))}}),dt=k({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const n=h(()=>`q-carousel__control absolute absolute-${e.position}`),l=h(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>p("div",{class:n.value,style:l.value},N(t.default))}});let Y=0;const ct={fullscreen:Boolean,noRouteFullscreenExit:Boolean},vt=["update:fullscreen","fullscreen"];function mt(){const e=ee(),{props:t,emit:n,proxy:l}=e;let i,a,o;const r=A(!1);Re(e)===!0&&R(()=>l.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&u()}),R(()=>t.fullscreen,x=>{r.value!==x&&g()}),R(r,x=>{n("update:fullscreen",x),n("fullscreen",x)});function g(){r.value===!0?u():b()}function b(){r.value!==!0&&(r.value=!0,o=l.$el.parentNode,o.replaceChild(a,l.$el),document.body.appendChild(l.$el),Y++,Y===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},ve.add(i))}function u(){r.value===!0&&(i!==void 0&&(ve.remove(i),i=void 0),o.replaceChild(l.$el,a),r.value=!1,Y=Math.max(0,Y-1),Y===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return Ue(()=>{a=document.createElement("span")}),re(()=>{t.fullscreen===!0&&b()}),J(u),Object.assign(l,{toggleFullscreen:g,setFullscreen:b,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:g}}const ft=["top","right","bottom","left"],pt=["regular","flat","outline","push","unelevated"];var Pe=k({name:"QCarousel",props:{...we,...rt,...ct,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>pt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ft.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...vt,...st],setup(e,{slots:t}){const{proxy:{$q:n}}=ee(),l=Se(e,n);let i,a;const{updatePanelsList:o,getPanelContent:r,panelDirectives:g,goToPanel:b,previousPanel:u,nextPanel:x,getEnabledPanels:c,panelIndex:_}=ut(),{inFullscreen:q}=mt(),d=h(()=>q.value!==!0&&e.height!==void 0?{height:e.height}:{}),w=h(()=>e.vertical===!0?"vertical":"horizontal"),y=h(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(q.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${w.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${V.value}`:"")),I=h(()=>{const T=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?T.reverse():T}),B=h(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),M=h(()=>e.navigationActiveIcon||B.value),V=h(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=h(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));R(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(i),v())}),R(()=>e.autoplay,T=>{T?v():clearInterval(i)});function v(){const T=ze(e.autoplay)===!0?e.autoplay:5e3;i=setTimeout(T>=0?x:u,Math.abs(T))}re(()=>{e.autoplay&&v()}),J(()=>{clearInterval(i)});function P(T,F){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${T} q-carousel__navigation--${V.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},c().map(F))])}function O(){const T=[];if(e.navigation===!0){const F=t["navigation-icon"]!==void 0?t["navigation-icon"]:s=>p(Q,{key:"nav"+s.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${s.active===!0?"":"in"}active`,...s.btnProps,onClick:s.onClick}),H=a-1;T.push(P("buttons",(s,S)=>{const E=s.props.name,D=_.value===S;return F({index:S,maxIndex:H,name:E,active:D,btnProps:{icon:D===!0?M.value:B.value,size:"sm",...$.value},onClick:()=>{b(E)}})}))}else if(e.thumbnails===!0){const F=e.controlColor!==void 0?` text-${e.controlColor}`:"";T.push(P("thumbnails",H=>{const s=H.props;return p("img",{key:"tmb#"+s.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${s.name===e.modelValue?"":"in"}active`+F,src:s.imgSrc||s["img-src"],onClick:()=>{b(s.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&T.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center`},[p(Q,{icon:I.value[0],...$.value,onClick:u})])),(e.infinite===!0||_.value<a-1)&&T.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center`},[p(Q,{icon:I.value[1],...$.value,onClick:x})]))),be(t.control,T)}return()=>(a=o(t),p("div",{class:y.value,style:d.value},[Le("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>g.value)].concat(O())))}}),Z=k({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=h(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(e.tag,{class:n.value},N(t.default))}}),ie=k({name:"QCard",props:{...we,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=ee(),l=Se(e,n),i=h(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>p(e.tag,{class:i.value},N(t.default))}}),ye=k({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let l=!1,i,a,o,r,g,b;function u(){i&&i(),i=null,l=!1,clearTimeout(o),clearTimeout(r),a!==void 0&&a.removeEventListener("transitionend",g),g=null}function x(d,w,y){d.style.overflowY="hidden",w!==void 0&&(d.style.height=`${w}px`),d.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,i=y}function c(d,w){d.style.overflowY=null,d.style.height=null,d.style.transition=null,u(),w!==b&&n(w)}function _(d,w){let y=0;a=d,l===!0?(u(),y=d.offsetHeight===d.scrollHeight?0:void 0):b="hide",x(d,y,w),o=setTimeout(()=>{d.style.height=`${d.scrollHeight}px`,g=I=>{(Object(I)!==I||I.target===d)&&c(d,"show")},d.addEventListener("transitionend",g),r=setTimeout(g,e.duration*1.1)},100)}function q(d,w){let y;a=d,l===!0?u():(b="show",y=d.scrollHeight),x(d,y,w),o=setTimeout(()=>{d.style.height=0,g=I=>{(Object(I)!==I||I.target===d)&&c(d,"hide")},d.addEventListener("transitionend",g),r=setTimeout(g,e.duration*1.1)},100)}return J(()=>{l===!0&&u()}),()=>p(le,{css:!1,appear:e.appear,onEnter:_,onLeave:q},t.default)}});const U=e=>(Ce("data-v-5eaae96f"),e=e(),xe(),e),ht={class:""},gt={class:"row justify-center"},_t={class:"row fit justify-start items-center no-wrap"},yt={class:"row fit justify-start items-center no-wrap"},bt={class:"row fit justify-start items-center no-wrap"},wt={class:"row fit justify-start items-center no-wrap"},St={class:"row fit justify-start items-center no-wrap"},Ct={class:"row fit justify-start items-center no-wrap"},xt={class:"q-pa-md"},qt={class:"text-center"},It={class:"video-container"},Tt=U(()=>f("div",{class:"q-video"},[f("video",{width:"320",height:"240",controls:""},[f("source",{src:"videos/TREE_TO_STARS.mp4",type:"video/mp4"})])],-1)),At=U(()=>f("div",{class:"text-h6 text-center"},"Price: 50 USD",-1)),Et=U(()=>f("hr",null,null,-1)),Pt=U(()=>f("div",{class:"text-container"},[f("h4",{class:"q-mt-sm q-mb-md"},"Formulas"),f("p",{class:"text-body1 q-mt-sm"}," In case you want to animate formulas, the sketch should look like this: ")],-1)),kt={class:"row fit justify-start items-center no-wrap"},Bt={class:"q-pa-md"},Ot={class:"text-center"},Rt={class:"video-container"},Lt=U(()=>f("div",{class:"q-video"},[f("video",{width:"320",height:"240",controls:""},[f("source",{src:"videos/quadratic.mp4",type:"video/mp4"})])],-1)),$t=U(()=>f("div",{class:"text-h6 text-center"},"Price: 40 USD",-1)),Nt=U(()=>f("hr",null,null,-1)),Mt=X({__name:"AnimationSteps",setup(e){const t=A("step1"),n=A(!1),l=A(!1),i=A(!1);return(a,o)=>(L(),z(se,null,[f("div",ht,[f("div",gt,[m(Te,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),"toggle-color":"teal",options:[{label:"1",value:"step1"},{label:"2",value:"step2"},{label:"3",value:"step3"},{label:"4",value:"step4"},{label:"5",value:"step5"},{label:"6",value:"step6"}]},null,8,["modelValue"])])]),m(Pe,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=r=>t.value=r),"transition-prev":"slide-right","transition-next":"slide-left",animated:"",swipeable:"",arrows:"","control-color":"secondary",class:"rounded-borders full-height",fullscreen:i.value,"onUpdate:fullscreen":o[3]||(o[3]=r=>i.value=r),infinite:""},{control:C(()=>[m(dt,{position:"bottom-right",offset:[30,30]},{default:C(()=>[m(Q,{round:"",arrows:"",color:"white","text-color":"primary",icon:i.value?"fullscreen_exit":"fullscreen",onClick:o[1]||(o[1]=r=>i.value=!i.value)},null,8,["icon"])]),_:1})]),default:C(()=>[m(j,{name:"step1"},{default:C(()=>[f("div",_t,[m(G,{class:"rounded-borders",src:"images/slide1.png",ratio:16/9})])]),_:1}),m(j,{name:"step2",class:"column no-wrap flex-center"},{default:C(()=>[f("div",yt,[m(G,{class:"rounded-borders",src:"images/slide2.png",ratio:16/9})])]),_:1}),m(j,{name:"step3",class:"column no-wrap flex-center"},{default:C(()=>[f("div",bt,[m(G,{class:"rounded-borders",src:"images/slide3.png",ratio:16/9})])]),_:1}),m(j,{name:"step4",class:"column no-wrap flex-center"},{default:C(()=>[f("div",wt,[m(G,{class:"rounded-borders",src:"images/slide4.png",ratio:16/9})])]),_:1}),m(j,{name:"step5",class:"column no-wrap flex-center"},{default:C(()=>[f("div",St,[m(G,{class:"rounded-borders",src:"images/slide5.png",ratio:16/9})])]),_:1}),m(j,{name:"step6",class:"column no-wrap flex-center"},{default:C(()=>[f("div",Ct,[m(G,{class:"rounded-borders",src:"images/slide6.png",ratio:16/9})])]),_:1})]),_:1},8,["modelValue","fullscreen"]),f("div",xt,[f("div",qt,[m(Q,{icon:"play_circle_filled",label:"Show result",class:"q-mb-md",color:"purple",onClick:o[4]||(o[4]=()=>{n.value=!n.value})})]),m(ye,null,{default:C(()=>[me(f("div",It,[Tt,m(ie,{class:"my-card bg-positive text-white"},{default:C(()=>[m(Z,null,{default:C(()=>[At]),_:1})]),_:1})],512),[[fe,n.value]])]),_:1})]),Et,Pt,f("div",kt,[m(G,{class:"rounded-borders",src:"images/formulas.png"})]),f("div",Bt,[f("div",Ot,[m(Q,{icon:"play_circle_filled",label:"Show result",class:"q-mb-md",color:"purple",onClick:o[5]||(o[5]=()=>{l.value=!l.value})})]),m(ye,null,{default:C(()=>[me(f("div",Rt,[Lt,m(ie,{class:"my-card bg-positive text-white"},{default:C(()=>[m(Z,null,{default:C(()=>[$t]),_:1})]),_:1})],512),[[fe,l.value]])]),_:1})]),Nt],64))}});var Vt=ue(Mt,[["__scopeId","data-v-5eaae96f"]]),Ft=k({name:"QVideo",props:{...Ae,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const t=Ee(e),n=h(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>p("div",{class:n.value,style:t.value},[p("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});const Dt={key:0,style:{width:"100%"},controls:"",class:"q-ma-none"},Gt=["src"],jt=X({__name:"VideoCard",props:{name:{default:"15_quadratic.mp4"}},setup(e){const t=e,n=t.name.split("_")[0],l=t.name.split("_")[1];return(i,a)=>(L(),oe(ie,{class:"my-card bg-secondary text-white"},{default:C(()=>[m(Z,{class:"text-h4 text-center"},{default:C(()=>[qe(He(pe(n))+" USD ",1)]),_:1}),m(Z,{class:"q-ma-none q-pr-md q-pl-md q-pt-none q-pb-lg"},{default:C(()=>[e.name.endsWith("mp4")?(L(),z("video",Dt,[f("source",{src:`videos/${e.name}`,type:"video/mp4"},null,8,Gt)])):(L(),oe(Ft,{key:1,ratio:16/9,src:`https://www.youtube.com/embed/${pe(l)}`},null,8,["src"]))]),_:1})]),_:1}))}});var Qt=ue(jt,[["__scopeId","data-v-cd94d49e"]]);const Ut={class:"q-ma-none"},zt=X({__name:"VideoCarousel",props:["data","index"],setup(e){const t=e,n=A(1);return R(h(()=>t.index),()=>{n.value=1}),(l,i)=>(L(),z("div",Ut,[m(Pe,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>n.value=a),swipeable:"",navigation:"",infinite:"",arrows:"","control-color":"white","control-text-color":"accent",class:"rounded-borders full-height"},{default:C(()=>[(L(!0),z(se,null,We(e.data[e.index],(a,o)=>(L(),oe(j,{key:a,name:++o,ratio:16/9,class:"q-ma-none"},{default:C(()=>[m(Qt,{name:a},null,8,["name"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]))}}),Ht={class:"q-pt-md text-center q-mb-none"},Wt=X({__name:"VideoToggle",setup(e){const t=A(1),n=A(1);R(t,()=>{n.value=1});const l=A({1:["10_CAIRO_MGL_RIEMMAN_RECTANGLES.mp4","10_CAIRO_OCE_MGL_FX_GRAPH.mp4","10_CAIRO_OCE_MGL_SIMPLE_FX_TABLE_TO_GRAPH.mp4","10_CAIRO_OCE_MGL_TRANSPOSE_MATRIX.mp4","15_CAIRO_OCE_MGL_POLYGON_TO_CIRCLE.mp4","15_CAIRO_OCE_MGL_SIMPLE_MAPPING.mp4","15_INFINITE_SYMBOL.mp4","20_CAIRO_MGL_SLOPE.mp4","20_CAIRO_MGL_SUM_INTERNAL_ANGLES_TRIANGLE.mp4"],2:["25_CAIRO_OCE_MGL_SOCIAL_NETWORKS_END_SCREEN.mp4","25_EIGEN_VECTORS.mp4","25_PIXEL_ANIMATION.mp4","30_CAIRO_MGL_SSS.mp4","25_SliderCrankMechanism.mp4","30_CAIRO_MGL_EULER_FORMULA_3D.mp4","30_CAIRO_OCE_MGL_HILBERT_FRACTAL.mp4","30_CAIRO_MGL_DRAGON_FRACTAL_OPTMIZED.mp4","30_MATPLOTLIB_EXAMPLE.mp4","40_INCENTER_CIRCUMCENTER_CONFIGURABLE.mp4","45_CAIRO_MGL_BUBBLE_SORT_ALGORITHM_WITH_CODE_CONFIGURABLE.mp4"],3:["50_viviani.mp4","70_FOURIER_DRAW_FFT.mp4","70_triTp6dOIZE","80_Y2T31OQ-cWA","80_TOUCHING_CIRCLES.mp4","80_dTrFIbVTXv4"],4:["100_3Od6PncXswQ","110_bHeTwksWOqM","120_CAIRO_MGL_MASS_SPRING_DAMPER_SYSTEM_CONFIGURABLE.mp4"]});return(i,a)=>(L(),z(se,null,[f("div",Ht,[m(Te,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),"toggle-color":"secondary",size:`14
      px`,options:[{label:"10 - 24",value:1},{label:"25 - 49",value:2},{label:"50 - 99",value:3},{label:"100 - 120",value:4}]},null,8,["modelValue"])]),m(zt,{data:l.value,index:t.value},null,8,["data","index"])],64))}});const ke=e=>(Ce("data-v-ed7d7e12"),e=e(),xe(),e),Yt=Ie('<div class="text-container q-mb-sm text-body1" data-v-ed7d7e12><ol data-v-ed7d7e12><li data-v-ed7d7e12><p data-v-ed7d7e12> I work <span class="text-weight-bold text-warning" data-v-ed7d7e12>by project</span>, not by hours. This is because this is not my full-time job, so if the job is too long I can reject it. Depending on the project, I will estimate an initial price, <span class="text-info text-weight-bold" data-v-ed7d7e12>this price is fully negotiable</span>, since depending on the country and the urgency the price may vary. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12> The price of each project is determined by the following characteristics: </p><ul data-v-ed7d7e12><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Duration of the video:</span> The duration can be due to many factors, so this is the one that has the least impact on the project. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Your geographical location.</span> I am aware that purchasing power varies from country to country, so depending on your country the price may vary. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Complexity of each animation:</span> The price increases if advanced knowledge of Mathematics is needed to make an animation, since animating a simple linear transformation is not the same as animating the change of a vector field. Also, if an animation requires more advanced programming processes, the price will also increase. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Urgency of the project:</span> If a delivery date is not indicated, I will adjust the date depending on my free time, but if you need it urgently then the price will increase. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>The number of steps:</span> An animation may be simple, but it could has many steps, so this field is also very variable. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Configurable/generator scenes:</span> If the scenes are configurable, i.e. the code can be used to generate more scenes by changing only some parameters, then the price will be higher. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="subtitle" data-v-ed7d7e12>Estimated price:</span> If you have doubts about how much I would charge you to make an animation, you can see some examples below. </p></li></ul></li><li data-v-ed7d7e12><p data-v-ed7d7e12><span class="text-info text-weight-bold" data-v-ed7d7e12>Payment method:</span> If the agreed price is less than 150 USD (for the US and Europe, 100 USD for the rest of the world) then half will be paid in advance, if it costs more than that amount, it will only be paid the 3rd part, and half the work the second third part will be paid. All payments are made by PayPal or Swift. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12> I only do the visual part and I can add some music (I don&#39;t narrate). All the non-Manim software I need to use is opensource or freeware (inkscape, Krita, Gimp, Blender, etc). I can add narration using some TTS, but the price will increase significantly. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12> The code of animations are yours and yours alone, I will deliver it to you in full when the last payment is made. If you are not interested in having the source code, the price decreases. </p></li><li data-v-ed7d7e12><p data-v-ed7d7e12> You have to send me the details of the projects, anything that helps clarify your ideas, some examples are: </p><ul data-v-ed7d7e12><li data-v-ed7d7e12>Sketches with indications of each animation.</li><li data-v-ed7d7e12>Images or videos similar to what you want.</li><li data-v-ed7d7e12>Timelines.</li></ul><p data-v-ed7d7e12> The diagrams/slides can be made by hand or with a program like <a class="web-link" href="https://excalidraw.com/" target="_blank" data-v-ed7d7e12>Excalidraw</a>. If you need it we can also use tools like <a class="web-link" href="https://miro.com/" target="_blank" data-v-ed7d7e12>Miro</a> to organize the ideas. The important thing is that you can transmit your ideas to me correctly. </p><p data-v-ed7d7e12> Here is an example of what the slides should look like so that I can understand your ideas (was made with <a class="web-link" href="https://excalidraw.com/" target="_blank" data-v-ed7d7e12>Excalidraw</a>). </p></li></ol></div>',1),Xt={class:"text-container q-mb-md text-body1"},Kt=ke(()=>f("h3",{class:"q-mb-md"},[qe("Pricing "),f("span",{class:"text-h4"},"(USD)")],-1)),Zt=ke(()=>f("div",{class:"text-body1"}," The prices shown below (and above) are for USA, Canada and Europe. If you are not from those countries the price will go down. ",-1)),Jt=Ie('<hr data-v-ed7d7e12><div class="text-container contact" data-v-ed7d7e12><h4 class="q-mt-md q-mb-md" data-v-ed7d7e12>Contact</h4><p class="text-body1" data-v-ed7d7e12> I speak Spanish and English, my time zone is <b data-v-ed7d7e12>CST</b> and I am available from 11am to 9pm. If you have any questions you can ask me about it. </p><ul class="q-pb-xl text-body1" data-v-ed7d7e12><li class="q-ma-sm" data-v-ed7d7e12>Telegram: <b data-v-ed7d7e12>@TheoremOfBeethoven</b></li><li class="q-ma-sm" data-v-ed7d7e12>Discord: <b data-v-ed7d7e12>theoremofbeethoven#2781</b></li><li class="q-ma-sm" data-v-ed7d7e12>Email: <b data-v-ed7d7e12>theoremofbeethoven@gmail.com</b></li></ul></div>',2),ea=X({__name:"AnimationPage",setup(e){const t=Xe(),{moveTo:n}=t;return re(()=>{n("request")}),(l,i)=>(L(),z("div",null,[m(Ye,{tab_title:"Animations on request"}),Yt,m(Vt),f("div",Xt,[Kt,m(Ne,{class:"bg-accent text-white q-mb-sm"},{avatar:C(()=>[m($e,{name:"info"})]),default:C(()=>[Zt]),_:1})]),m(Wt),Jt]))}});var ua=ue(ea,[["__scopeId","data-v-ed7d7e12"]]);export{ua as default};
