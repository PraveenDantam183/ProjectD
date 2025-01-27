import{r as ml,a as Sd}from"./vendor-ogjpKoOq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var ms={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga;function Pd(){if(Ga)return Mn;Ga=1;var n=ml(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(u,c,d){var f,g={},E=null,A=null;d!==void 0&&(E=""+d),c.key!==void 0&&(E=""+c.key),c.ref!==void 0&&(A=c.ref);for(f in c)r.call(c,f)&&!s.hasOwnProperty(f)&&(g[f]=c[f]);if(u&&u.defaultProps)for(f in c=u.defaultProps,c)g[f]===void 0&&(g[f]=c[f]);return{$$typeof:e,type:u,key:E,ref:A,props:g,_owner:i.current}}return Mn.Fragment=t,Mn.jsx=a,Mn.jsxs=a,Mn}var Ka;function Cd(){return Ka||(Ka=1,ms.exports=Pd()),ms.exports}var z=Cd(),b=ml(),Br={},Qa;function bd(){if(Qa)return Br;Qa=1;var n=Sd();return Br.createRoot=n.createRoot,Br.hydrateRoot=n.hydrateRoot,Br}var kd=bd(),Fn={},Ja;function Dd(){if(Ja)return Fn;Ja=1,Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.parse=a,Fn.serialize=d;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function a(E,A){const S=new s,D=E.length;if(D<2)return S;const C=(A==null?void 0:A.decode)||f;let N=0;do{const O=E.indexOf("=",N);if(O===-1)break;const M=E.indexOf(";",N),W=M===-1?D:M;if(O>W){N=E.lastIndexOf(";",O-1)+1;continue}const Z=u(E,N,O),X=c(E,O,Z),v=E.slice(Z,X);if(S[v]===void 0){let m=u(E,O+1,W),_=c(E,W,m);const T=C(E.slice(m,_));S[v]=T}N=W+1}while(N<D);return S}function u(E,A,S){do{const D=E.charCodeAt(A);if(D!==32&&D!==9)return A}while(++A<S);return S}function c(E,A,S){for(;A>S;){const D=E.charCodeAt(--A);if(D!==32&&D!==9)return A+1}return S}function d(E,A,S){const D=(S==null?void 0:S.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const C=D(A);if(!e.test(C))throw new TypeError(`argument val is invalid: ${A}`);let N=E+"="+C;if(!S)return N;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);N+="; Max-Age="+S.maxAge}if(S.domain){if(!t.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);N+="; Domain="+S.domain}if(S.path){if(!r.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);N+="; Path="+S.path}if(S.expires){if(!g(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);N+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(N+="; HttpOnly"),S.secure&&(N+="; Secure"),S.partitioned&&(N+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return N}function f(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function g(E){return i.call(E)==="[object Date]"}return Fn}Dd();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ya="popstate";function Nd(n={}){function e(r,i){let{pathname:s,search:a,hash:u}=r.location;return bs("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Yn(i)}return Od(e,t,null,n)}function ne(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Be(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vd(){return Math.random().toString(36).substring(2,10)}function Xa(n,e){return{usr:n.state,key:n.key,idx:e}}function bs(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?dn(e):e,state:t,key:e&&e.key||r||Vd()}}function Yn({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function dn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Od(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u="POP",c=null,d=f();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function f(){return(a.state||{idx:null}).idx}function g(){u="POP";let C=f(),N=C==null?null:C-d;d=C,c&&c({action:u,location:D.location,delta:N})}function E(C,N){u="PUSH";let O=bs(D.location,C,N);d=f()+1;let M=Xa(O,d),W=D.createHref(O);try{a.pushState(M,"",W)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;i.location.assign(W)}s&&c&&c({action:u,location:D.location,delta:1})}function A(C,N){u="REPLACE";let O=bs(D.location,C,N);d=f();let M=Xa(O,d),W=D.createHref(O);a.replaceState(M,"",W),s&&c&&c({action:u,location:D.location,delta:0})}function S(C){let N=i.location.origin!=="null"?i.location.origin:i.location.href,O=typeof C=="string"?C:Yn(C);return O=O.replace(/ $/,"%20"),ne(N,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,N)}let D={get action(){return u},get location(){return n(i,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ya,g),c=C,()=>{i.removeEventListener(Ya,g),c=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let N=S(C);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:E,replace:A,go(C){return a.go(C)}};return D}function gl(n,e,t="/"){return Ld(n,e,t,!1)}function Ld(n,e,t,r){let i=typeof e=="string"?dn(e):e,s=It(i.pathname||"/",t);if(s==null)return null;let a=_l(n);xd(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let d=Gd(s);u=Wd(a[c],d,r)}return u}function _l(n,e=[],t=[],r=""){let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ne(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let d=Ye([r,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(ne(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),_l(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:qd(d,s.index),routesMeta:f})};return n.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of yl(s.path))i(s,a,c)}),e}function yl(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=yl(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>n.startsWith("/")&&c===""?"/":c)}function xd(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:zd(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Md=/^:[\w-]+$/,Fd=3,Ud=2,Bd=1,jd=10,$d=-2,Za=n=>n==="*";function qd(n,e){let t=n.split("/"),r=t.length;return t.some(Za)&&(r+=$d),e&&(r+=Ud),t.filter(i=>!Za(i)).reduce((i,s)=>i+(Md.test(s)?Fd:s===""?Bd:jd),r)}function zd(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function Wd(n,e,t=!1){let{routesMeta:r}=n,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],d=u===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",g=si({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),E=c.route;if(!g&&d&&t&&!r[r.length-1].route.index&&(g=si({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!g)return null;Object.assign(i,g.params),a.push({params:i,pathname:Ye([s,g.pathname]),pathnameBase:Yd(Ye([s,g.pathnameBase])),route:E}),g.pathnameBase!=="/"&&(s=Ye([s,g.pathnameBase]))}return a}function si(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Hd(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((d,{paramName:f,isOptional:g},E)=>{if(f==="*"){let S=u[E]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const A=u[E];return g&&!A?d[f]=void 0:d[f]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:a,pattern:n}}function Hd(n,e=!1,t=!0){Be(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Gd(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Be(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function It(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Kd(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?dn(n):n;return{pathname:t?t.startsWith("/")?t:Qd(t,e):e,search:Xd(r),hash:Zd(i)}}function Qd(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function gs(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jd(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function El(n){let e=Jd(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Tl(n,e,t,r=!1){let i;typeof n=="string"?i=dn(n):(i={...n},ne(!i.pathname||!i.pathname.includes("?"),gs("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),gs("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),gs("#","search","hash",i)));let s=n===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=t;else{let g=e.length-1;if(!r&&a.startsWith("..")){let E=a.split("/");for(;E[0]==="..";)E.shift(),g-=1;i.pathname=E.join("/")}u=g>=0?e[g]:"/"}let c=Kd(i,u),d=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}var Ye=n=>n.join("/").replace(/\/\/+/g,"/"),Yd=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Xd=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Zd=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ef(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var vl=["POST","PUT","PATCH","DELETE"];new Set(vl);var tf=["GET",...vl];new Set(tf);var fn=b.createContext(null);fn.displayName="DataRouter";var Pi=b.createContext(null);Pi.displayName="DataRouterState";var Il=b.createContext({isTransitioning:!1});Il.displayName="ViewTransition";var nf=b.createContext(new Map);nf.displayName="Fetchers";var rf=b.createContext(null);rf.displayName="Await";var qe=b.createContext(null);qe.displayName="Navigation";var ur=b.createContext(null);ur.displayName="Location";var ze=b.createContext({outlet:null,matches:[],isDataRoute:!1});ze.displayName="Route";var Zs=b.createContext(null);Zs.displayName="RouteError";function sf(n,{relative:e}={}){ne(lr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=b.useContext(qe),{hash:i,pathname:s,search:a}=cr(n,{relative:e}),u=s;return t!=="/"&&(u=s==="/"?t:Ye([t,s])),r.createHref({pathname:u,search:a,hash:i})}function lr(){return b.useContext(ur)!=null}function Ut(){return ne(lr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(ur).location}var wl="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Al(n){b.useContext(qe).static||b.useLayoutEffect(n)}function eo(){let{isDataRoute:n}=b.useContext(ze);return n?Ef():of()}function of(){ne(lr(),"useNavigate() may be used only in the context of a <Router> component.");let n=b.useContext(fn),{basename:e,navigator:t}=b.useContext(qe),{matches:r}=b.useContext(ze),{pathname:i}=Ut(),s=JSON.stringify(El(r)),a=b.useRef(!1);return Al(()=>{a.current=!0}),b.useCallback((c,d={})=>{if(Be(a.current,wl),!a.current)return;if(typeof c=="number"){t.go(c);return}let f=Tl(c,JSON.parse(s),i,d.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ye([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,s,i,n])}b.createContext(null);function af(){let{matches:n}=b.useContext(ze),e=n[n.length-1];return e?e.params:{}}function cr(n,{relative:e}={}){let{matches:t}=b.useContext(ze),{pathname:r}=Ut(),i=JSON.stringify(El(t));return b.useMemo(()=>Tl(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function uf(n,e){return Rl(n,e)}function Rl(n,e,t,r){var N;ne(lr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=b.useContext(qe),{matches:s}=b.useContext(ze),a=s[s.length-1],u=a?a.params:{},c=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let O=f&&f.path||"";Sl(c,!f||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let g=Ut(),E;if(e){let O=typeof e=="string"?dn(e):e;ne(d==="/"||((N=O.pathname)==null?void 0:N.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${O.pathname}" was given in the \`location\` prop.`),E=O}else E=g;let A=E.pathname||"/",S=A;if(d!=="/"){let O=d.replace(/^\//,"").split("/");S="/"+A.replace(/^\//,"").split("/").slice(O.length).join("/")}let D=gl(n,{pathname:S});Be(f||D!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Be(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=ff(D&&D.map(O=>Object.assign({},O,{params:Object.assign({},u,O.params),pathname:Ye([d,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?d:Ye([d,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,t,r);return e&&C?b.createElement(ur.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},C):C}function lf(){let n=yf(),e=ef(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),t?b.createElement("pre",{style:i},t):null,a)}var cf=b.createElement(lf,null),hf=class extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?b.createElement(ze.Provider,{value:this.props.routeContext},b.createElement(Zs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function df({routeContext:n,match:e,children:t}){let r=b.useContext(fn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(ze.Provider,{value:n},t)}function ff(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,s=t==null?void 0:t.errors;if(s!=null){let c=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);ne(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,u=-1;if(t)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:g}=t,E=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||E){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,d,f)=>{let g,E=!1,A=null,S=null;t&&(g=s&&d.route.id?s[d.route.id]:void 0,A=d.route.errorElement||cf,a&&(u<0&&f===0?(Sl("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):u===f&&(E=!0,S=d.route.hydrateFallbackElement||null)));let D=e.concat(i.slice(0,f+1)),C=()=>{let N;return g?N=A:E?N=S:d.route.Component?N=b.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=c,b.createElement(df,{match:d,routeContext:{outlet:c,matches:D,isDataRoute:t!=null},children:N})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?b.createElement(hf,{location:t.location,revalidation:t.revalidation,component:A,error:g,children:C(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):C()},null)}function to(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pf(n){let e=b.useContext(fn);return ne(e,to(n)),e}function mf(n){let e=b.useContext(Pi);return ne(e,to(n)),e}function gf(n){let e=b.useContext(ze);return ne(e,to(n)),e}function no(n){let e=gf(n),t=e.matches[e.matches.length-1];return ne(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function _f(){return no("useRouteId")}function yf(){var r;let n=b.useContext(Zs),e=mf("useRouteError"),t=no("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Ef(){let{router:n}=pf("useNavigate"),e=no("useNavigate"),t=b.useRef(!1);return Al(()=>{t.current=!0}),b.useCallback(async(i,s={})=>{Be(t.current,wl),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...s}))},[n,e])}var eu={};function Sl(n,e,t){!e&&!eu[n]&&(eu[n]=!0,Be(!1,t))}b.memo(Tf);function Tf({routes:n,future:e,state:t}){return Rl(n,void 0,t,e)}function Bn(n){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vf({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:s=!1}){ne(!lr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof t=="string"&&(t=dn(t));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:E="default"}=t,A=b.useMemo(()=>{let S=It(c,a);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:E},navigationType:r}},[a,c,d,f,g,E,r]);return Be(A!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(qe.Provider,{value:u},b.createElement(ur.Provider,{children:e,value:A}))}function If({children:n,location:e}){return uf(ks(n),e)}function ks(n,e=[]){let t=[];return b.Children.forEach(n,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){t.push.apply(t,ks(r.props.children,s));return}ne(r.type===Bn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ks(r.props.children,s)),t.push(a)}),t}var Kr="get",Qr="application/x-www-form-urlencoded";function Ci(n){return n!=null&&typeof n.tagName=="string"}function wf(n){return Ci(n)&&n.tagName.toLowerCase()==="button"}function Af(n){return Ci(n)&&n.tagName.toLowerCase()==="form"}function Rf(n){return Ci(n)&&n.tagName.toLowerCase()==="input"}function Sf(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Pf(n,e){return n.button===0&&(!e||e==="_self")&&!Sf(n)}var jr=null;function Cf(){if(jr===null)try{new FormData(document.createElement("form"),0),jr=!1}catch{jr=!0}return jr}var bf=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _s(n){return n!=null&&!bf.has(n)?(Be(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qr}"`),null):n}function kf(n,e){let t,r,i,s,a;if(Af(n)){let u=n.getAttribute("action");r=u?It(u,e):null,t=n.getAttribute("method")||Kr,i=_s(n.getAttribute("enctype"))||Qr,s=new FormData(n)}else if(wf(n)||Rf(n)&&(n.type==="submit"||n.type==="image")){let u=n.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||u.getAttribute("action");if(r=c?It(c,e):null,t=n.getAttribute("formmethod")||u.getAttribute("method")||Kr,i=_s(n.getAttribute("formenctype"))||_s(u.getAttribute("enctype"))||Qr,s=new FormData(u,n),!Cf()){let{name:d,type:f,value:g}=n;if(f==="image"){let E=d?`${d}.`:"";s.append(`${E}x`,"0"),s.append(`${E}y`,"0")}else d&&s.append(d,g)}}else{if(Ci(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Kr,r=null,i=Qr,a=n}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:s,body:a}}function ro(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Df(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nf(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Vf(n,e,t){let r=await Promise.all(n.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await Df(s,t);return a.links?a.links():[]}return[]}));return Mf(r.flat(1).filter(Nf).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function tu(n,e,t,r,i,s){let a=(c,d)=>t[d]?c.route.id!==t[d].route.id:!0,u=(c,d)=>{var f;return t[d].pathname!==c.pathname||((f=t[d].route.path)==null?void 0:f.endsWith("*"))&&t[d].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,d)=>a(c,d)||u(c,d)):s==="data"?e.filter((c,d)=>{var g;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,d)||u(c,d))return!0;if(c.route.shouldRevalidate){let E=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Of(n,e){return Lf(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Lf(n){return[...new Set(n)]}function xf(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function Mf(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let s=JSON.stringify(xf(i));return t.has(s)||(t.add(s),r.push({key:s,link:i})),r},[])}function Ff(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Uf(){let n=b.useContext(fn);return ro(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Bf(){let n=b.useContext(Pi);return ro(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var io=b.createContext(void 0);io.displayName="FrameworkContext";function Pl(){let n=b.useContext(io);return ro(n,"You must render this element inside a <HydratedRouter> element"),n}function jf(n,e){let t=b.useContext(io),[r,i]=b.useState(!1),[s,a]=b.useState(!1),{onFocus:u,onBlur:c,onMouseEnter:d,onMouseLeave:f,onTouchStart:g}=e,E=b.useRef(null);b.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let D=N=>{N.forEach(O=>{a(O.isIntersecting)})},C=new IntersectionObserver(D,{threshold:.5});return E.current&&C.observe(E.current),()=>{C.disconnect()}}},[n]),b.useEffect(()=>{if(r){let D=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(D)}}},[r]);let A=()=>{i(!0)},S=()=>{i(!1),a(!1)};return t?n!=="intent"?[s,E,{}]:[s,E,{onFocus:Un(u,A),onBlur:Un(c,S),onMouseEnter:Un(d,A),onMouseLeave:Un(f,S),onTouchStart:Un(g,A)}]:[!1,E,{}]}function Un(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function $f({page:n,...e}){let{router:t}=Uf(),r=b.useMemo(()=>gl(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?b.createElement(zf,{page:n,matches:r,...e}):null}function qf(n){let{manifest:e,routeModules:t}=Pl(),[r,i]=b.useState([]);return b.useEffect(()=>{let s=!1;return Vf(n,e,t).then(a=>{s||i(a)}),()=>{s=!0}},[n,e,t]),r}function zf({page:n,matches:e,...t}){let r=Ut(),{manifest:i,routeModules:s}=Pl(),{loaderData:a,matches:u}=Bf(),c=b.useMemo(()=>tu(n,e,u,i,r,"data"),[n,e,u,i,r]),d=b.useMemo(()=>tu(n,e,u,i,r,"assets"),[n,e,u,i,r]),f=b.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,S=!1;if(e.forEach(C=>{var O;let N=i.routes[C.route.id];!N||!N.hasLoader||(!c.some(M=>M.route.id===C.route.id)&&C.route.id in a&&((O=s[C.route.id])!=null&&O.shouldRevalidate)||N.hasClientLoader?S=!0:A.add(C.route.id))}),A.size===0)return[];let D=Ff(n);return S&&A.size>0&&D.searchParams.set("_routes",e.filter(C=>A.has(C.route.id)).map(C=>C.route.id).join(",")),[D.pathname+D.search]},[a,r,i,c,e,n,s]),g=b.useMemo(()=>Of(d,i),[d,i]),E=qf(d);return b.createElement(b.Fragment,null,f.map(A=>b.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...t})),g.map(A=>b.createElement("link",{key:A,rel:"modulepreload",href:A,...t})),E.map(({key:A,link:S})=>b.createElement("link",{key:A,...S})))}function Wf(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Cl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cl&&(window.__reactRouterVersion="7.1.3")}catch{}function Hf({basename:n,children:e,window:t}){let r=b.useRef();r.current==null&&(r.current=Nd({window:t,v5Compat:!0}));let i=r.current,[s,a]=b.useState({action:i.action,location:i.location}),u=b.useCallback(c=>{b.startTransition(()=>a(c))},[a]);return b.useLayoutEffect(()=>i.listen(u),[i,u]),b.createElement(vf,{basename:n,children:e,location:s.location,navigationType:s.action,navigator:i})}var bl=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oi=b.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:u,target:c,to:d,preventScrollReset:f,viewTransition:g,...E},A){let{basename:S}=b.useContext(qe),D=typeof d=="string"&&bl.test(d),C,N=!1;if(typeof d=="string"&&D&&(C=d,Cl))try{let _=new URL(window.location.href),T=d.startsWith("//")?new URL(_.protocol+d):new URL(d),I=It(T.pathname,S);T.origin===_.origin&&I!=null?d=I+T.search+T.hash:N=!0}catch{Be(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=sf(d,{relative:i}),[M,W,Z]=jf(r,E),X=Jf(d,{replace:a,state:u,target:c,preventScrollReset:f,relative:i,viewTransition:g});function v(_){e&&e(_),_.defaultPrevented||X(_)}let m=b.createElement("a",{...E,...Z,href:C||O,onClick:N||s?e:v,ref:Wf(A,W),target:c,"data-discover":!D&&t==="render"?"true":void 0});return M&&!D?b.createElement(b.Fragment,null,m,b.createElement($f,{page:O})):m});oi.displayName="Link";var Gf=b.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:u,children:c,...d},f){let g=cr(a,{relative:d.relative}),E=Ut(),A=b.useContext(Pi),{navigator:S,basename:D}=b.useContext(qe),C=A!=null&&tp(g)&&u===!0,N=S.encodeLocation?S.encodeLocation(g).pathname:g.pathname,O=E.pathname,M=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(O=O.toLowerCase(),M=M?M.toLowerCase():null,N=N.toLowerCase()),M&&D&&(M=It(M,D)||M);const W=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Z=O===N||!i&&O.startsWith(N)&&O.charAt(W)==="/",X=M!=null&&(M===N||!i&&M.startsWith(N)&&M.charAt(N.length)==="/"),v={isActive:Z,isPending:X,isTransitioning:C},m=Z?e:void 0,_;typeof r=="function"?_=r(v):_=[r,Z?"active":null,X?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let T=typeof s=="function"?s(v):s;return b.createElement(oi,{...d,"aria-current":m,className:_,ref:f,style:T,to:a,viewTransition:u},typeof c=="function"?c(v):c)});Gf.displayName="NavLink";var Kf=b.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:s,method:a=Kr,action:u,onSubmit:c,relative:d,preventScrollReset:f,viewTransition:g,...E},A)=>{let S=Zf(),D=ep(u,{relative:d}),C=a.toLowerCase()==="get"?"get":"post",N=typeof u=="string"&&bl.test(u),O=M=>{if(c&&c(M),M.defaultPrevented)return;M.preventDefault();let W=M.nativeEvent.submitter,Z=(W==null?void 0:W.getAttribute("formmethod"))||a;S(W||M.currentTarget,{fetcherKey:e,method:Z,navigate:t,replace:i,state:s,relative:d,preventScrollReset:f,viewTransition:g})};return b.createElement("form",{ref:A,method:C,action:D,onSubmit:r?c:O,...E,"data-discover":!N&&n==="render"?"true":void 0})});Kf.displayName="Form";function Qf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kl(n){let e=b.useContext(fn);return ne(e,Qf(n)),e}function Jf(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let u=eo(),c=Ut(),d=cr(n,{relative:s});return b.useCallback(f=>{if(Pf(f,e)){f.preventDefault();let g=t!==void 0?t:Yn(c)===Yn(d);u(n,{replace:g,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,d,t,r,e,n,i,s,a])}var Yf=0,Xf=()=>`__${String(++Yf)}__`;function Zf(){let{router:n}=kl("useSubmit"),{basename:e}=b.useContext(qe),t=_f();return b.useCallback(async(r,i={})=>{let{action:s,method:a,encType:u,formData:c,body:d}=kf(r,e);if(i.navigate===!1){let f=i.fetcherKey||Xf();await n.fetch(f,t,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||u,flushSync:i.flushSync})}else await n.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function ep(n,{relative:e}={}){let{basename:t}=b.useContext(qe),r=b.useContext(ze);ne(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...cr(n||".",{relative:e})},a=Ut();if(n==null){s.search=a.search;let u=new URLSearchParams(s.search),c=u.getAll("index");if(c.some(f=>f==="")){u.delete("index"),c.filter(g=>g).forEach(g=>u.append("index",g));let f=u.toString();s.search=f?`?${f}`:""}}return(!n||n===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:Ye([t,s.pathname])),Yn(s)}function tp(n,e={}){let t=b.useContext(Il);ne(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=kl("useViewTransitionState"),i=cr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=It(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=It(t.nextLocation.pathname,r)||t.nextLocation.pathname;return si(i.pathname,a)!=null||si(i.pathname,s)!=null}new TextEncoder;const np=()=>z.jsxs("div",{className:"landing-container",children:[z.jsx("h1",{children:"Welcome to Our Website!"}),z.jsxs("div",{className:"landing-buttons",children:[z.jsx(oi,{to:"/login",children:z.jsx("button",{className:"landing-button",children:"Login"})}),z.jsx(oi,{to:"/signup",children:z.jsx("button",{className:"landing-button",children:"Signup"})})]})]});var nu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,f=s>>2,g=(s&3)<<4|u>>4;let E=(u&15)<<2|d>>6,A=d&63;c||(A=64,a||(E=64)),r.push(t[f],t[g],t[E],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||g==null)throw new ip;const E=s<<2|u>>4;if(r.push(E),d!==64){const A=u<<4&240|d>>2;if(r.push(A),g!==64){const S=d<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(n){const e=Dl(n);return Nl.encodeByteArray(e,!0)},ai=function(n){return sp(n).replace(/\./g,"")},Vl=function(n){try{return Nl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=()=>op().__FIREBASE_DEFAULTS__,up=()=>{if(typeof process>"u"||typeof nu>"u")return;const n=nu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vl(n[1]);return e&&JSON.parse(e)},bi=()=>{try{return ap()||up()||lp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ol=n=>{var e,t;return(t=(e=bi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cp=n=>{const e=Ol(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ll=()=>{var n;return(n=bi())===null||n===void 0?void 0:n.config},xl=n=>{var e;return(e=bi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ai(JSON.stringify(t)),ai(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function pp(){var n;const e=(n=bi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ep(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tp(){try{return typeof indexedDB=="object"}catch{return!1}}function vp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="FirebaseError";class it extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ip,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?wp(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new it(i,u,r)}}function wp(n,e){return n.replace(Ap,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function Rp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ui(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(ru(s)&&ru(a)){if(!ui(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ru(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $n(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Sp(n,e){const t=new Pp(n,e);return t.subscribe.bind(t)}class Pp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ys),i.error===void 0&&(i.error=ys),i.complete===void 0&&(i.complete=ys);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kp(n){return n===Vt?void 0:n}function Dp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Vp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Op=H.INFO,Lp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},xp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Lp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class so{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Mp=(n,e)=>e.some(t=>n instanceof t);let iu,su;function Fp(){return iu||(iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return su||(su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ml=new WeakMap,Ds=new WeakMap,Fl=new WeakMap,Es=new WeakMap,oo=new WeakMap;function Bp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(_t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ml.set(t,n)}).catch(()=>{}),oo.set(e,n),e}function jp(n){if(Ds.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ds.set(n,e)}let Ns={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ds.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $p(n){Ns=n(Ns)}function qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ts(this),e,...t);return Fl.set(r,e.sort?e.sort():[e]),_t(r)}:Up().includes(n)?function(...e){return n.apply(Ts(this),e),_t(Ml.get(this))}:function(...e){return _t(n.apply(Ts(this),e))}}function zp(n){return typeof n=="function"?qp(n):(n instanceof IDBTransaction&&jp(n),Mp(n,Fp())?new Proxy(n,Ns):n)}function _t(n){if(n instanceof IDBRequest)return Bp(n);if(Es.has(n))return Es.get(n);const e=zp(n);return e!==n&&(Es.set(n,e),oo.set(e,n)),e}const Ts=n=>oo.get(n);function Wp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=_t(a);return r&&a.addEventListener("upgradeneeded",c=>{r(_t(a.result),c.oldVersion,c.newVersion,_t(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Hp=["get","getKey","getAll","getAllKeys","count"],Gp=["put","add","delete","clear"],vs=new Map;function ou(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vs.get(e))return vs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Gp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hp.includes(t)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&c.done]))[0]};return vs.set(e,s),s}$p(n=>({...n,get:(e,t,r)=>ou(e,t)||n.get(e,t,r),has:(e,t)=>!!ou(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",au="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new so("@firebase/app"),Jp="@firebase/app-compat",Yp="@firebase/analytics-compat",Xp="@firebase/analytics",Zp="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",rm="@firebase/database",im="@firebase/data-connect",sm="@firebase/database-compat",om="@firebase/functions",am="@firebase/functions-compat",um="@firebase/installations",lm="@firebase/installations-compat",cm="@firebase/messaging",hm="@firebase/messaging-compat",dm="@firebase/performance",fm="@firebase/performance-compat",pm="@firebase/remote-config",mm="@firebase/remote-config-compat",gm="@firebase/storage",_m="@firebase/storage-compat",ym="@firebase/firestore",Em="@firebase/vertexai",Tm="@firebase/firestore-compat",vm="firebase",Im="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]",wm={[Vs]:"fire-core",[Jp]:"fire-core-compat",[Xp]:"fire-analytics",[Yp]:"fire-analytics-compat",[em]:"fire-app-check",[Zp]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[rm]:"fire-rtdb",[im]:"fire-data-connect",[sm]:"fire-rtdb-compat",[om]:"fire-fn",[am]:"fire-fn-compat",[um]:"fire-iid",[lm]:"fire-iid-compat",[cm]:"fire-fcm",[hm]:"fire-fcm-compat",[dm]:"fire-perf",[fm]:"fire-perf-compat",[pm]:"fire-rc",[mm]:"fire-rc-compat",[gm]:"fire-gcs",[_m]:"fire-gcs-compat",[ym]:"fire-fst",[Tm]:"fire-fst-compat",[Em]:"fire-vertex","fire-js":"fire-js",[vm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map,Am=new Map,Ls=new Map;function uu(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){const e=n.name;if(Ls.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;Ls.set(e,n);for(const t of li.values())uu(t,n);for(const t of Am.values())uu(t,n);return!0}function ao(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new hr("app","Firebase",Rm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=Im;function Ul(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Os,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=Ll()),!t)throw yt.create("no-options");const s=li.get(i);if(s){if(ui(t,s.options)&&ui(r,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const a=new Np(i);for(const c of Ls.values())a.addComponent(c);const u=new Sm(t,r,a);return li.set(i,u),u}function Bl(n=Os){const e=li.get(n);if(!e&&n===Os&&Ll())return Ul();if(!e)throw yt.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let i=(r=wm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(u.join(" "));return}rn(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebase-heartbeat-database",Cm=1,Xn="firebase-heartbeat-store";let Is=null;function jl(){return Is||(Is=Wp(Pm,Cm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),Is}async function bm(n){try{const t=(await jl()).transaction(Xn),r=await t.objectStore(Xn).get($l(n));return await t.done,r}catch(e){if(e instanceof it)et.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function lu(n,e){try{const r=(await jl()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(e,$l(n)),await r.done}catch(t){if(t instanceof it)et.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function $l(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=1024,Dm=30*24*60*60*1e3;class Nm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Om(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Dm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cu(),{heartbeatsToSend:r,unsentEntries:i}=Vm(this._heartbeatsCache.heartbeats),s=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return et.warn(t),""}}}function cu(){return new Date().toISOString().substring(0,10)}function Vm(n,e=km){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),hu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tp()?vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hu(n){return ai(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){rn(new Lt("platform-logger",e=>new Kp(e),"PRIVATE")),rn(new Lt("heartbeat",e=>new Nm(e),"PRIVATE")),Et(Vs,au,n),Et(Vs,au,"esm2017"),Et("fire-js","")}Lm("");function uo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ql(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xm=ql,zl=new hr("auth","Firebase",ql());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new so("@firebase/auth");function Mm(n,...e){ci.logLevel<=H.WARN&&ci.warn(`Auth (${pn}): ${n}`,...e)}function Jr(n,...e){ci.logLevel<=H.ERROR&&ci.error(`Auth (${pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,...e){throw lo(n,...e)}function xe(n,...e){return lo(n,...e)}function Wl(n,e,t){const r=Object.assign(Object.assign({},xm()),{[e]:t});return new hr("auth","Firebase",r).create(e,{appName:n.name})}function Xe(n){return Wl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zl.create(n,...e)}function B(n,e,...t){if(!n)throw lo(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jr(e),new Error(e)}function tt(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fm(){return du()==="http:"||du()==="https:"}function du(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||gp()||"connection"in navigator)?navigator.onLine:!0}function Bm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=fp()||_p()}get(){return Um()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new fr(3e4,6e4);function st(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ot(n,e,t,r,i={}){return Gl(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=dr(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},s);return mp()||(d.referrerPolicy="no-referrer"),Hl.fetch()(Kl(n,n.config.apiHost,t,u),d)})}async function Gl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},jm),e);try{const i=new zm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $r(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw $r(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw $r(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Wl(n,f,d);Ve(n,f)}}catch(i){if(i instanceof it)throw i;Ve(n,"network-request-failed",{message:String(i)})}}async function pr(n,e,t,r,i={}){const s=await ot(n,e,t,r,i);return"mfaPendingCredential"in s&&Ve(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Kl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?co(n.config,i):`${n.config.apiScheme}://${i}`}function qm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),$m.get())})}}function $r(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=xe(n,e,r);return i.customData._tokenResponse=t,i}function fu(n){return n!==void 0&&n.enterprise!==void 0}class Wm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hm(n,e){return ot(n,"GET","/v2/recaptchaConfig",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e){return ot(n,"POST","/v1/accounts:delete",e)}async function Ql(n,e){return ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Km(n,e=!1){const t=Ne(n),r=await t.getIdToken(e),i=ho(r);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hn(ws(i.auth_time)),issuedAtTime:Hn(ws(i.iat)),expirationTime:Hn(ws(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ws(n){return Number(n)*1e3}function ho(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vl(t);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pu(n){const e=ho(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof it&&Qm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Zn(n,Ql(t,{idToken:r}));B(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jl(s.providerUserInfo):[],u=Xm(n.providerData,a),c=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(u!=null&&u.length),f=c?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Ms(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Ym(n){const e=Ne(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jl(n){return n.map(e=>{var{providerId:t}=e,r=uo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e){const t=await Gl(n,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Kl(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Hl.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eg(n,e){return ot(n,"POST","/v2/accounts:revokeToken",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=pu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Zt;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ms(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Km(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await Zn(this,Gm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,c,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:W,isAnonymous:Z,providerData:X,stsTokenManager:v}=t;B(M&&v,e,"internal-error");const m=Zt.fromJSON(this.name,v);B(typeof M=="string",e,"internal-error"),ht(g,e.name),ht(E,e.name),B(typeof W=="boolean",e,"internal-error"),B(typeof Z=="boolean",e,"internal-error"),ht(A,e.name),ht(S,e.name),ht(D,e.name),ht(C,e.name),ht(N,e.name),ht(O,e.name);const _=new Qe({uid:M,auth:e,email:E,emailVerified:W,displayName:g,isAnonymous:Z,photoURL:S,phoneNumber:A,tenantId:D,stsTokenManager:m,createdAt:N,lastLoginAt:O});return X&&Array.isArray(X)&&(_.providerData=X.map(T=>Object.assign({},T))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Zt;i.updateFromServerResponse(t);const s=new Qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Jl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Zt;u.updateFromIdToken(r);const c=new Qe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ms(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map;function Je(n){tt(n instanceof Function,"Expected a class definition");let e=mu.get(n);return e?(tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yl.type="NONE";const gu=Yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n,e,t){return`firebase:${n}:${e}:${t}`}class en{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new en(Je(gu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Je(gu);const a=Yr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const f=await d._get(a);if(f){const g=Qe._fromJSON(e,f);d!==s&&(u=g),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new en(s,e,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new en(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rc(e))return"Blackberry";if(ic(e))return"Webos";if(Zl(e))return"Safari";if((e.includes("chrome/")||ec(e))&&!e.includes("edge/"))return"Chrome";if(nc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(n=we()){return/firefox\//i.test(n)}function Zl(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ec(n=we()){return/crios\//i.test(n)}function tc(n=we()){return/iemobile/i.test(n)}function nc(n=we()){return/android/i.test(n)}function rc(n=we()){return/blackberry/i.test(n)}function ic(n=we()){return/webos/i.test(n)}function fo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tg(n=we()){var e;return fo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ng(){return yp()&&document.documentMode===10}function sc(n=we()){return fo(n)||nc(n)||ic(n)||rc(n)||/windows phone/i.test(n)||tc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e=[]){let t;switch(n){case"Browser":t=_u(we());break;case"Worker":t=`${_u(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const c=e(s);a(c)}catch(c){u(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e={}){return ot(n,"GET","/v2/passwordPolicy",st(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=6;class og{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yu(this),this.idTokenSubscription=new yu(this),this.beforeStateQueue=new rg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ql(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(Xe(this));const t=e?Ne(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ig(this),t=new og(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await eg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Mm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ct(n){return Ne(n)}class yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sp(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ug(n){ki=n}function ac(n){return ki.loadJS(n)}function lg(){return ki.recaptchaEnterpriseScript}function cg(){return ki.gapiScript}function hg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dg{constructor(){this.enterprise=new fg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pg="recaptcha-enterprise",uc="NO_RECAPTCHA";class mg{constructor(e){this.type=pg,this.auth=Ct(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{Hm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Wm(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(c=>{u(c)})})}function i(s,a,u){const c=window.grecaptcha;fu(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(uc)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dg().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&fu(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=lg();c.length!==0&&(c+=u),ac(c).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Eu(n,e,t,r=!1,i=!1){const s=new mg(n);let a;if(i)a=uc;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const c=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function di(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Eu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Eu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){const t=ao(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ui(s,e??{}))return i;Ve(i,"already-initialized")}return t.initialize({options:e})}function _g(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yg(n,e,t){const r=Ct(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lc(e),{host:a,port:u}=Eg(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Tg()}function lc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Eg(n){const e=lc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tu(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Tg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function vg(n,e){return ot(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,e){return pr(n,"POST","/v1/accounts:signInWithPassword",st(n,e))}async function wg(n,e){return ot(n,"POST","/v1/accounts:sendOobCode",st(n,e))}async function Ag(n,e){return wg(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(n,e){return pr(n,"POST","/v1/accounts:signInWithEmailLink",st(n,e))}async function Sg(n,e){return pr(n,"POST","/v1/accounts:signInWithEmailLink",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends po{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new er(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new er(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(e,t,"signInWithPassword",Ig);case"emailLink":return Rg(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(e,r,"signUpPassword",vg);case"emailLink":return Sg(e,{idToken:t,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(n,e){return pr(n,"POST","/v1/accounts:signInWithIdp",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class xt extends po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=uo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new xt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tn(e,t)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bg(n){const e=jn($n(n)).link,t=e?jn($n(e)).deep_link_id:null,r=jn($n(n)).deep_link_id;return(r?jn($n(r)).link:null)||r||t||e||n}class mo{constructor(e){var t,r,i,s,a,u;const c=jn($n(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,g=Cg((i=c.mode)!==null&&i!==void 0?i:null);B(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=bg(e);try{return new mo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(e,t){return er._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mo.parseLink(t);return B(r,"argument-error"),er._fromEmailAndCode(e,r.code,r.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends mr{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends mr{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends mr{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return pr(n,"POST","/v1/accounts:signUp",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Qe._fromIdTokenResponse(e,r,i),a=vu(r);return new Mt({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=vu(r);return new Mt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function vu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends it{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fi(e,t,r,i)}}function hc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fi._fromErrorAndOperation(n,s,e,r):s})}async function Dg(n,e,t=!1){const r=await Zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(Xe(r));const i="reauthenticate";try{const s=await Zn(n,hc(r,i,e,n),t);B(s.idToken,r,"internal-error");const a=ho(s.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(n.uid===u,r,"user-mismatch"),Mt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(n,e,t=!1){if(Le(n.app))return Promise.reject(Xe(n));const r="signIn",i=await hc(n,r,e),s=await Mt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Vg(n,e){return dc(Ct(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(n){const e=Ct(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Og(n,e,t){const r=Ct(n);await di(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ag)}async function Lg(n,e,t){if(Le(n.app))return Promise.reject(Xe(n));const r=Ct(n),a=await di(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&fc(n),c}),u=await Mt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function xg(n,e,t){return Le(n.app)?Promise.reject(Xe(n)):Vg(Ne(n),mn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fc(n),r})}function Mg(n,e,t,r){return Ne(n).onIdTokenChanged(e,t,r)}function Fg(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}const pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=1e3,Bg=10;class mc extends pc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ng()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Bg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const jg=mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends pc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gc.type="SESSION";const _c=gc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Di(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,s)),c=await $g(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const d=go("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(E.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function zg(n){Me().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gg(){return yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="firebaseLocalStorageDb",Kg=1,mi="firebaseLocalStorage",Tc="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([mi],e?"readwrite":"readonly").objectStore(mi)}function Qg(){const n=indexedDB.deleteDatabase(Ec);return new gr(n).toPromise()}function Fs(){const n=indexedDB.open(Ec,Kg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mi,{keyPath:Tc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mi)?e(r):(r.close(),await Qg(),e(await Fs()))})})}async function Iu(n,e,t){const r=Ni(n,!0).put({[Tc]:e,value:t});return new gr(r).toPromise()}async function Jg(n,e){const t=Ni(n,!1).get(e),r=await new gr(t).toPromise();return r===void 0?null:r.value}function wu(n,e){const t=Ni(n,!0).delete(e);return new gr(t).toPromise()}const Yg=800,Xg=3;class vc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Xg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Gg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new qg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await Iu(e,pi,"1"),await wu(e,pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Iu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ni(i,!1).getAll();return new gr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vc.type="LOCAL";const Zg=vc;new fr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n,e){return e?Je(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t_(n){return dc(n.auth,new _o(n),n.bypassAuthState)}function n_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Ng(t,new _o(n),n.bypassAuthState)}async function r_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Dg(t,new _o(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t_;case"linkViaPopup":case"linkViaRedirect":return r_;case"reauthViaPopup":case"reauthViaRedirect":return n_;default:Ve(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new fr(2e3,1e4);class Xt extends Ic{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i_.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="pendingRedirect",Xr=new Map;class o_ extends Ic{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await a_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a_(n,e){const t=c_(e),r=l_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function u_(n,e){Xr.set(n._key(),e)}function l_(n){return Je(n._redirectPersistence)}function c_(n){return Yr(s_,n.config.apiKey,n.name)}async function h_(n,e,t=!1){if(Le(n.app))return Promise.reject(Xe(n));const r=Ct(n),i=e_(r,e),a=await new o_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=10*60*1e3;class f_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Au(e))}saveEventToCache(e){this.cachedEventUids.add(Au(e)),this.lastProcessedEventTime=Date.now()}}function Au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e={}){return ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,__=/^https?/;async function y_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m_(n);for(const t of e)try{if(E_(t))return}catch{}Ve(n,"unauthorized-domain")}function E_(n){const e=xs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!__.test(t))return!1;if(g_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new fr(3e4,6e4);function Ru(){const n=Me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v_(n){return new Promise((e,t)=>{var r,i,s;function a(){Ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ru(),t(xe(n,"network-request-failed"))},timeout:T_.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Me().gapi)===null||s===void 0)&&s.load)a();else{const u=hg("iframefcb");return Me()[u]=()=>{gapi.load?a():t(xe(n,"network-request-failed"))},ac(`${cg()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw Zr=null,e})}let Zr=null;function I_(n){return Zr=Zr||v_(n),Zr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new fr(5e3,15e3),A_="__/auth/iframe",R_="emulator/auth/iframe",S_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C_(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?co(e,R_):`https://${n.config.authDomain}/${A_}`,r={apiKey:e.apiKey,appName:n.name,v:pn},i=P_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${dr(r).slice(1)}`}async function b_(n){const e=await I_(n),t=Me().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:C_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=xe(n,"network-request-failed"),u=Me().setTimeout(()=>{s(a)},w_.get());function c(){Me().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D_=500,N_=600,V_="_blank",O_="http://localhost";class Su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L_(n,e,t,r=D_,i=N_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},k_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=we().toLowerCase();t&&(u=ec(d)?V_:t),Xl(d)&&(e=e||O_,c.scrollbars="yes");const f=Object.entries(c).reduce((E,[A,S])=>`${E}${A}=${S},`,"");if(tg(d)&&u!=="_self")return x_(e||"",u),new Su(null);const g=window.open(e||"",u,f);B(g,n,"popup-blocked");try{g.focus()}catch{}return new Su(g)}function x_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="__/auth/handler",F_="emulator/auth/handler",U_=encodeURIComponent("fac");async function Pu(n,e,t,r,i,s){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:pn,eventId:i};if(e instanceof cc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof mr){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const c=await n._getAppCheckToken(),d=c?`#${U_}=${encodeURIComponent(c)}`:"";return`${B_(n)}?${dr(u).slice(1)}${d}`}function B_({config:n}){return n.emulator?co(n,F_):`https://${n.authDomain}/${M_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="webStorageSupport";class j_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_c,this._completeRedirectFn=h_,this._overrideRedirectResult=u_}async _openPopup(e,t,r,i){var s;tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Pu(e,t,r,xs(),i);return L_(e,a,go())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Pu(e,t,r,xs(),i);return zg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await b_(e),r=new f_(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(As,{type:As},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[As];a!==void 0&&t(!!a),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=y_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sc()||Zl()||fo()}}const $_=j_;var Cu="@firebase/auth",bu="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W_(n){rn(new Lt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oc(n)},d=new ag(r,i,s,c);return _g(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rn(new Lt("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(r=>new q_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Cu,bu,z_(n)),Et(Cu,bu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=5*60,G_=xl("authIdTokenMaxAge")||H_;let ku=null;const K_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>G_)return;const i=t==null?void 0:t.token;ku!==i&&(ku=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q_(n=Bl()){const e=ao(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gg(n,{popupRedirectResolver:$_,persistence:[Zg,jg,_c]}),r=xl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=K_(s.toString());Fg(t,a,()=>a(t.currentUser)),Mg(t,u=>a(u))}}const i=Ol("auth");return i&&yg(t,`http://${i}`),t}function J_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ug({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=xe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",J_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W_("Browser");var Y_="firebase",X_="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(Y_,X_,"app");var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tt,Ac;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,I,R){for(var y=Array(arguments.length-2),We=2;We<arguments.length;We++)y[We-2]=arguments[We];return m.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)T[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)T[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],I=v.g[2];var R=v.g[3],y=m+(R^_&(I^R))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=R+(I^m&(_^I))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=I+(_^R&(m^_))+T[2]+606105819&4294967295,I=R+(y<<17&4294967295|y>>>15),y=_+(m^I&(R^m))+T[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(R^_&(I^R))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(I^m&(_^I))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=I+(_^R&(m^_))+T[6]+2821735955&4294967295,I=R+(y<<17&4294967295|y>>>15),y=_+(m^I&(R^m))+T[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(R^_&(I^R))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(I^m&(_^I))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=I+(_^R&(m^_))+T[10]+4294925233&4294967295,I=R+(y<<17&4294967295|y>>>15),y=_+(m^I&(R^m))+T[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(R^_&(I^R))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=R+(I^m&(_^I))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=I+(_^R&(m^_))+T[14]+2792965006&4294967295,I=R+(y<<17&4294967295|y>>>15),y=_+(m^I&(R^m))+T[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^R&(_^I))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^I&(m^_))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(R^m))+T[11]+643717713&4294967295,I=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(I^R))+T[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^R&(_^I))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^I&(m^_))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(R^m))+T[15]+3634488961&4294967295,I=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(I^R))+T[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^R&(_^I))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^I&(m^_))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(R^m))+T[3]+4107603335&4294967295,I=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(I^R))+T[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^R&(_^I))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=R+(_^I&(m^_))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(R^m))+T[7]+1735328473&4294967295,I=R+(y<<14&4294967295|y>>>18),y=_+(R^m&(I^R))+T[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^R)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^I)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=I+(R^m^_)+T[11]+1839030562&4294967295,I=R+(y<<16&4294967295|y>>>16),y=_+(I^R^m)+T[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^R)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^I)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=I+(R^m^_)+T[7]+4139469664&4294967295,I=R+(y<<16&4294967295|y>>>16),y=_+(I^R^m)+T[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^R)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^I)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=I+(R^m^_)+T[3]+3572445317&4294967295,I=R+(y<<16&4294967295|y>>>16),y=_+(I^R^m)+T[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^R)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=R+(m^_^I)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=I+(R^m^_)+T[15]+530742520&4294967295,I=R+(y<<16&4294967295|y>>>16),y=_+(I^R^m)+T[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~R))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~I))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=I+(m^(R|~_))+T[14]+2878612391&4294967295,I=R+(y<<15&4294967295|y>>>17),y=_+(R^(I|~m))+T[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~R))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~I))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=I+(m^(R|~_))+T[10]+4293915773&4294967295,I=R+(y<<15&4294967295|y>>>17),y=_+(R^(I|~m))+T[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~R))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~I))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=I+(m^(R|~_))+T[6]+2734768916&4294967295,I=R+(y<<15&4294967295|y>>>17),y=_+(R^(I|~m))+T[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~R))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=R+(_^(m|~I))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=I+(m^(R|~_))+T[2]+718787259&4294967295,I=R+(y<<15&4294967295|y>>>17),y=_+(R^(I|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,T=this.B,I=this.h,R=0;R<m;){if(I==0)for(;R<=_;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<m;)if(T[I++]=v.charCodeAt(R++),I==this.blockSize){i(this,T),I=0;break}}else for(;R<m;)if(T[I++]=v[R++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)v[_++]=this.g[m]>>>T&255;return v};function s(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],T=!0,I=v.length-1;0<=I;I--){var R=v[I]|0;T&&R==m||(_[I]=R,T=!1)}this.g=_}var u={};function c(v){return-128<=v&&128>v?s(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return C(d(-v));for(var m=[],_=1,T=0;v>=_;T++)m[T]=v/_|0,_*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return C(f(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),T=g,I=0;I<v.length;I+=8){var R=Math.min(8,v.length-I),y=parseInt(v.substring(I,I+R),m);8>R?(R=d(Math.pow(m,R)),T=T.j(R).add(d(y))):(T=T.j(_),T=T.add(d(y)))}return T}var g=c(0),E=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-C(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(D(this))return"-"+C(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,T="";;){var I=W(_,m).g;_=N(_,I.j(m));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=I,S(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=N(this,v),D(v)?-1:S(v)?0:1};function C(v){for(var m=v.g.length,_=[],T=0;T<m;T++)_[T]=~v.g[T];return new a(_,~v.h).add(E)}n.abs=function(){return D(this)?C(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0,I=0;I<=m;I++){var R=T+(this.i(I)&65535)+(v.i(I)&65535),y=(R>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);T=y>>>16,R&=65535,y&=65535,_[I]=y<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function N(v,m){return v.add(C(m))}n.j=function(v){if(S(this)||S(v))return g;if(D(this))return D(v)?C(this).j(C(v)):C(C(this).j(v));if(D(v))return C(this.j(C(v)));if(0>this.l(A)&&0>v.l(A))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<v.g.length;I++){var R=this.i(T)>>>16,y=this.i(T)&65535,We=v.i(I)>>>16,Tn=v.i(I)&65535;_[2*T+2*I]+=y*Tn,O(_,2*T+2*I),_[2*T+2*I+1]+=R*Tn,O(_,2*T+2*I+1),_[2*T+2*I+1]+=y*We,O(_,2*T+2*I+1),_[2*T+2*I+2]+=R*We,O(_,2*T+2*I+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function O(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function M(v,m){this.g=v,this.h=m}function W(v,m){if(S(m))throw Error("division by zero");if(S(v))return new M(g,g);if(D(v))return m=W(C(v),m),new M(C(m.g),C(m.h));if(D(m))return m=W(v,C(m)),new M(C(m.g),m.h);if(30<v.g.length){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,T=m;0>=T.l(v);)_=Z(_),T=Z(T);var I=X(_,1),R=X(T,1);for(T=X(T,2),_=X(_,2);!S(T);){var y=R.add(T);0>=y.l(v)&&(I=I.add(_),R=y),T=X(T,1),_=X(_,1)}return m=N(v,I.j(m)),new M(I,m)}for(I=g;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(_),y=R.j(m);D(y)||0<y.l(v);)_-=T,R=d(_),y=R.j(m);S(R)&&(R=E),I=I.add(R),v=N(v,y)}return new M(I,v)}n.A=function(v){return W(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function Z(v){for(var m=v.g.length+1,_=[],T=0;T<m;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function X(v,m){var _=m>>5;m%=32;for(var T=v.g.length-_,I=[],R=0;R<T;R++)I[R]=0<m?v.i(R+_)>>>m|v.i(R+_+1)<<32-m:v.i(R+_);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ac=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Tt=a}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rc,qn,Sc,ei,Us,Pc,Cc,bc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qr=="object"&&qr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in h))break e;h=h[w]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,p=!1,w={next:function(){if(!p&&h<o.length){var P=h++;return{value:l(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function E(o,l,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function A(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,w,P){for(var L=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)L[ee-2]=arguments[ee];return l.prototype[w].apply(p,L)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function C(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const w=o.length||0,P=p.length||0;o.length=w+P;for(let L=0;L<P;L++)o[w+L]=p[L]}else o.push(p)}}class N{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var Z=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function X(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function v(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let h,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(h in p)o[h]=p[h];for(let P=0;P<_.length;P++)h=_[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Wi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class We{constructor(){this.h=this.g=null}add(l,h){const p=Tn.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Tn=new N(()=>new Wh,o=>o.reset());class Wh{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let vn,In=!1,Wi=new We,Go=()=>{const o=u.Promise.resolve(void 0);vn=()=>{o.then(Hh)}};var Hh=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var l=Tn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}In=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Gh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function wn(o,l){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Z){e:{try{W(l.nodeName);var w=!0;break e}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&wn.aa.h.call(this)}}S(wn,ge);var Kh={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),Qh=0;function Jh(o,l,h,p,w){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=w,this.key=++Qh,this.da=this.fa=!1}function Ir(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wr(o){this.src=o,this.g={},this.h=0}wr.prototype.add=function(o,l,h,p,w){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var L=Gi(o,l,p,w);return-1<L?(l=o[L],h||(l.fa=!1)):(l=new Jh(l,this.src,P,!!p,w),l.fa=h,o.push(l)),l};function Hi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],w=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=w)&&Array.prototype.splice.call(p,w,1),P&&(Ir(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Gi(o,l,h,p){for(var w=0;w<o.length;++w){var P=o[w];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return w}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Qi={};function Ko(o,l,h,p,w){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ko(o,l[P],h,p,w);return null}return h=Yo(h),o&&o[vr]?o.K(l,h,d(p)?!!p.capture:!1,w):Yh(o,l,h,!1,p,w)}function Yh(o,l,h,p,w,P){if(!l)throw Error("Invalid event type");var L=d(w)?!!w.capture:!!w,ee=Yi(o);if(ee||(o[Ki]=ee=new wr(o)),h=ee.add(l,h,p,L,P),h.proxy)return h;if(p=Xh(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Gh||(w=L),w===void 0&&(w=!1),o.addEventListener(l.toString(),p,w);else if(o.attachEvent)o.attachEvent(Jo(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xh(){function o(h){return l.call(o.src,o.listener,h)}const l=Zh;return o}function Qo(o,l,h,p,w){if(Array.isArray(l))for(var P=0;P<l.length;P++)Qo(o,l[P],h,p,w);else p=d(p)?!!p.capture:!!p,h=Yo(h),o&&o[vr]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],h=Gi(P,h,p,w),-1<h&&(Ir(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Yi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Gi(l,h,p,w)),(h=-1<o?l[o]:null)&&Ji(h))}function Ji(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[vr])Hi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Jo(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Yi(l))?(Hi(h,o),h.h==0&&(h.src=null,l[Ki]=null)):Ir(o)}}}function Jo(o){return o in Qi?Qi[o]:Qi[o]="on"+o}function Zh(o,l){if(o.da)o=!0;else{l=new wn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&Ji(o),o=h.call(p,l)}return o}function Yi(o){return o=o[Ki],o instanceof wr?o:null}var Xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(o){return typeof o=="function"?o:(o[Xi]||(o[Xi]=function(l){return o.handleEvent(l)}),o[Xi])}function _e(){at.call(this),this.i=new wr(this),this.M=this,this.F=null}S(_e,at),_e.prototype[vr]=!0,_e.prototype.removeEventListener=function(o,l,h,p){Qo(this,o,l,h,p)};function Ae(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new ge(l,o);else if(l instanceof ge)l.target=l.target||o;else{var w=l;l=new ge(p,o),T(l,w)}if(w=!0,h)for(var P=h.length-1;0<=P;P--){var L=l.g=h[P];w=Ar(L,p,!0,l)&&w}if(L=l.g=o,w=Ar(L,p,!0,l)&&w,w=Ar(L,p,!1,l)&&w,h)for(P=0;P<h.length;P++)L=l.g=h[P],w=Ar(L,p,!1,l)&&w}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Ir(h[p]);delete o.g[l],o.h--}}this.F=null},_e.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},_e.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Ar(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,P=0;P<l.length;++P){var L=l[P];if(L&&!L.da&&L.capture==h){var ee=L.listener,de=L.ha||L.src;L.fa&&Hi(o.i,L),w=ee.call(de,p)!==!1&&w}}return w&&!p.defaultPrevented}function Xo(o,l,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Zo(o){o.g=Xo(()=>{o.g=null,o.i&&(o.i=!1,Zo(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ed extends at{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Zo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(o){at.call(this),this.h=o,this.g={}}S(An,at);var ea=[];function ta(o){X(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ji(l)},o),o.g={}}An.prototype.N=function(){An.aa.N.call(this),ta(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=u.JSON.stringify,td=u.JSON.parse,nd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function es(){}es.prototype.h=null;function na(o){return o.h||(o.h=o.i())}function ra(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ts(){ge.call(this,"d")}S(ts,ge);function ns(){ge.call(this,"c")}S(ns,ge);var bt={},ia=null;function Rr(){return ia=ia||new _e}bt.La="serverreachability";function sa(o){ge.call(this,bt.La,o)}S(sa,ge);function Sn(o){const l=Rr();Ae(l,new sa(l))}bt.STAT_EVENT="statevent";function oa(o,l){ge.call(this,bt.STAT_EVENT,o),this.stat=l}S(oa,ge);function Re(o){const l=Rr();Ae(l,new oa(l,o))}bt.Ma="timingevent";function aa(o,l){ge.call(this,bt.Ma,o),this.size=l}S(aa,ge);function Pn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function rd(o,l,h,p,w,P){o.info(function(){if(o.g)if(P)for(var L="",ee=P.split("&"),de=0;de<ee.length;de++){var J=ee[de].split("=");if(1<J.length){var ye=J[0];J=J[1];var Ee=ye.split("_");L=2<=Ee.length&&Ee[1]=="type"?L+(ye+"="+J+"&"):L+(ye+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+l+`
`+h+`
`+L})}function id(o,l,h,p,w,P,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+l+`
`+h+`
`+P+" "+L})}function zt(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+od(o,h)+(p?" "+p:"")})}function sd(o,l){o.info(function(){return"TIMEOUT: "+l})}Cn.prototype.info=function(){};function od(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<w.length;L++)w[L]=""}}}}return Zi(h)}catch{return l}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rs;function Pr(){}S(Pr,es),Pr.prototype.g=function(){return new XMLHttpRequest},Pr.prototype.i=function(){return{}},rs=new Pr;function ut(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new la}function la(){this.i=null,this.g="",this.h=!1}var ca={},is={};function ss(o,l,h){o.L=1,o.v=Dr(He(l)),o.m=h,o.P=!0,ha(o,null)}function ha(o,l){o.F=Date.now(),Cr(o),o.A=He(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ra(h.i,"t",p),o.C=0,h=o.j.J,o.h=new la,o.g=qa(o.j,h?l:null,!o.m),0<o.O&&(o.M=new ed(E(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(ea[0]=w.toString()),w=ea);for(var P=0;P<w.length;P++){var L=Ko(h,w[P],p||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Sn(),rd(o.i,o.u,o.A,o.l,o.R,o.m)}ut.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ge(o)==3?l.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const Ee=Ge(this.g);var l=this.g.Ba();const Gt=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||Na(this.g)))){this.J||Ee!=4||l==7||(l==8||0>=Gt?Sn(3):Sn(2)),os(this);var h=this.g.Z();this.X=h;t:if(da(this)){var p=Na(this.g);o="";var w=p.length,P=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),bn(this);var L="";break t}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(P&&l==w-1)});p.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,id(this.i,this.u,this.A,this.l,this.R,Ee,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,de=this.g;if((ee=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ee)){var J=ee;break t}}J=null}if(h=J)zt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,as(this,h);else{this.o=!1,this.s=3,Re(12),kt(this),bn(this);break e}}if(this.P){h=!0;let ke;for(;!this.J&&this.C<L.length;)if(ke=ad(this,L),ke==is){Ee==4&&(this.s=4,Re(14),h=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ca){this.s=4,Re(15),zt(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else zt(this.i,this.l,ke,null),as(this,ke);if(da(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||L.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)zt(this.i,this.l,L,"[Invalid Chunked Response]"),kt(this),bn(this);else if(0<L.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),fs(ye),ye.M=!0,Re(11))}}else zt(this.i,this.l,L,null),as(this,L);Ee==4&&kt(this),this.o&&!this.J&&(Ee==4?Ua(this.j,this):(this.o=!1,Cr(this)))}else Ad(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),kt(this),bn(this)}}}catch{}finally{}};function da(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ad(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?is:(h=Number(l.substring(h,p)),isNaN(h)?ca:(p+=1,p+h>l.length?is:(l=l.slice(p,p+h),o.C=p+h,l)))}ut.prototype.cancel=function(){this.J=!0,kt(this)};function Cr(o){o.S=Date.now()+o.I,fa(o,o.I)}function fa(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pn(E(o.ba,o),l)}function os(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ut.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sd(this.i,this.A),this.L!=2&&(Sn(),Re(17)),kt(this),this.s=2,bn(this)):fa(this,this.S-o)};function bn(o){o.j.G==0||o.J||Ua(o.j,o)}function kt(o){os(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ta(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function as(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||us(h.h,o))){if(!o.K&&us(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Mr(h),Lr(h);else break e;ds(h),Re(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Pn(E(h.Za,h),6e3));if(1>=ga(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nt(h,11)}else if((o.K||h.g==o)&&Mr(h),!O(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let J=w[l];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const ye=J[3];ye!=null&&(h.la=ye,h.j.info("VER="+h.la));const Ee=J[4];Ee!=null&&(h.Aa=Ee,h.j.info("SVER="+h.Aa));const Gt=J[5];Gt!=null&&typeof Gt=="number"&&0<Gt&&(p=1.5*Gt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ke=o.g;if(ke){const Ur=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ur){var P=p.h;P.g||Ur.indexOf("spdy")==-1&&Ur.indexOf("quic")==-1&&Ur.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ls(P,P.h),P.h=null))}if(p.D){const ps=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;ps&&(p.ya=ps,te(p.I,p.D,ps))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var L=o;if(p.qa=$a(p,p.J?p.ia:null,p.W),L.K){_a(p.h,L);var ee=L,de=p.L;de&&(ee.I=de),ee.B&&(os(ee),Cr(ee)),p.g=L}else Ma(p);0<h.i.length&&xr(h)}else J[0]!="stop"&&J[0]!="close"||Nt(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Nt(h,7):hs(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Sn(4)}catch{}}var ud=class{constructor(o,l){this.g=o,this.map=l}};function pa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ma(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ga(o){return o.h?1:o.g?o.g.size:0}function us(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ls(o,l){o.g?o.g.add(l):o.h=l}function _a(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}pa.prototype.cancel=function(){if(this.i=ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ya(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function ld(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function cd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Ea(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=cd(o),p=ld(o),w=p.length,P=0;P<w;P++)l.call(void 0,p[P],h&&h[P],o)}var Ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),w=null;if(0<=p){var P=o[h].substring(0,p);w=o[h].substring(p+1)}else P=o[h];l(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Dt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Dt){this.h=o.h,br(this,o.j),this.o=o.o,this.g=o.g,kr(this,o.s),this.l=o.l;var l=o.i,h=new Nn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),va(this,h),this.m=o.m}else o&&(l=String(o).match(Ta))?(this.h=!1,br(this,l[1]||"",!0),this.o=kn(l[2]||""),this.g=kn(l[3]||"",!0),kr(this,l[4]),this.l=kn(l[5]||"",!0),va(this,l[6]||"",!0),this.m=kn(l[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}Dt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Dn(l,Ia,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Dn(l,Ia,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Dn(h,h.charAt(0)=="/"?pd:fd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Dn(h,gd)),o.join("")};function He(o){return new Dt(o)}function br(o,l,h){o.j=h?kn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function kr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function va(o,l,h){l instanceof Nn?(o.i=l,_d(o.i,o.h)):(h||(l=Dn(l,md)),o.i=new Nn(l,o.h))}function te(o,l,h){o.i.set(l,h)}function Dr(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Dn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,dd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ia=/[#\/\?@]/g,fd=/[#\?:]/g,pd=/[#\?]/g,md=/[#\?@]/g,gd=/#/g;function Nn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function lt(o){o.g||(o.g=new Map,o.h=0,o.i&&hd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Nn.prototype,n.add=function(o,l){lt(this),this.i=null,o=Wt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function wa(o,l){lt(o),l=Wt(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Aa(o,l){return lt(o),l=Wt(o,l),o.g.has(l)}n.forEach=function(o,l){lt(this),this.g.forEach(function(h,p){h.forEach(function(w){o.call(l,w,p,this)},this)},this)},n.na=function(){lt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const w=o[p];for(let P=0;P<w.length;P++)h.push(l[p])}return h},n.V=function(o){lt(this);let l=[];if(typeof o=="string")Aa(this,o)&&(l=l.concat(this.g.get(Wt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return lt(this),this.i=null,o=Wt(this,o),Aa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ra(o,l,h){wa(o,l),0<h.length&&(o.i=null,o.g.set(Wt(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const P=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var w=P;L[p]!==""&&(w+="="+encodeURIComponent(String(L[p]))),o.push(w)}}return this.i=o.join("&")};function Wt(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _d(o,l){l&&!o.j&&(lt(o),o.i=null,o.g.forEach(function(h,p){var w=p.toLowerCase();p!=w&&(wa(this,p),Ra(this,w,h))},o)),o.j=l}function yd(o,l){const h=new Cn;if(u.Image){const p=new Image;p.onload=A(ct,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(ct,h,"TestLoadImage: error",!1,l,p),p.onabort=A(ct,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(ct,h,"TestLoadImage: timeout",!1,l,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Ed(o,l){const h=new Cn,p=new AbortController,w=setTimeout(()=>{p.abort(),ct(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(w),P.ok?ct(h,"TestPingServer: ok",!0,l):ct(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),ct(h,"TestPingServer: error",!1,l)})}function ct(o,l,h,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(h)}catch{}}function Td(){this.g=new nd}function vd(o,l,h){const p=h||"";try{Ea(o,function(w,P){let L=w;d(w)&&(L=Zi(w)),l.push(p+P+"="+encodeURIComponent(L))})}catch(w){throw l.push(p+"type="+encodeURIComponent("_badmap")),w}}function Nr(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Nr,es),Nr.prototype.g=function(){return new Vr(this.l,this.j)},Nr.prototype.i=function(o){return function(){return o}}({});function Vr(o,l){_e.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Vr,_e),n=Vr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,On(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Vn(this):On(this),this.readyState==3&&Sa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Vn(this))},n.Qa=function(o){this.g&&(this.response=o,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,On(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function On(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pa(o){let l="";return X(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function cs(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Pa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,l,h))}function ie(o){_e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ie,_e);var Id=/^https?$/i,wd=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rs.g(),this.v=this.o?na(this.o):na(rs),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Ca(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)h.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(wd,l,void 0))||p||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of h)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Da(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ca(this,P)}};function Ca(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ba(o),Or(o)}function ba(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),Or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Or(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ka(this):this.bb())},n.bb=function(){ka(this)};function ka(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)Xo(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=L===0){var w=String(o.D).match(Ta)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),p=!Id.test(w?w.toLowerCase():"")}h=p}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var P=2<Ge(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",ba(o)}}finally{Or(o)}}}}function Or(o,l){if(o.g){Da(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ae(o,"ready");try{h.onreadystatechange=p}catch{}}}function Da(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),td(l)}};function Na(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ad(o){const l={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(O(o[p]))continue;var h=I(o[p]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[w]||[];l[w]=P,P.push(h)}v(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Va(o){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ln("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ln("baseRetryDelayMs",5e3,o),this.cb=Ln("retryDelaySeedMs",1e4,o),this.Wa=Ln("forwardChannelMaxRetries",2,o),this.wa=Ln("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new pa(o&&o.concurrentRequestLimit),this.Da=new Td,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Va.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Re(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=$a(this,null,this.W),xr(this)};function hs(o){if(Oa(o),o.G==3){var l=o.U++,h=He(o.I);if(te(h,"SID",o.K),te(h,"RID",l),te(h,"TYPE","terminate"),xn(o,h),l=new ut(o,o.j,l),l.L=2,l.v=Dr(He(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=qa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Cr(l)}ja(o)}function Lr(o){o.g&&(fs(o),o.g.cancel(),o.g=null)}function Oa(o){Lr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Mr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function xr(o){if(!ma(o.h)&&!o.s){o.s=!0;var l=o.Ga;vn||Go(),In||(vn(),In=!0),Wi.add(l,o),o.B=0}}function Rd(o,l){return ga(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pn(E(o.Ga,o,l),Ba(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new ut(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=xa(this,w,l),h=He(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),xn(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(Pa(P)))+"&"+l:this.m&&cs(h,this.m,P)),ls(this.h,w),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),w.T=!0,ss(w,h,null)):ss(w,h,l),this.G=2}}else this.G==3&&(o?La(this,o):this.i.length==0||ma(this.h)||La(this))};function La(o,l){var h;l?h=l.l:h=o.U++;const p=He(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),xn(o,p),o.m&&o.o&&cs(p,o.m,o.o),h=new ut(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=xa(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ls(o.h,h),ss(h,p,l)}function xn(o,l){o.H&&X(o.H,function(h,p){te(l,p,h)}),o.l&&Ea({},function(h,p){te(l,p,h)})}function xa(o,l,h){h=Math.min(o.i.length,h);var p=o.l?E(o.l.Na,o.l,o):null;e:{var w=o.i;let P=-1;for(;;){const L=["count="+h];P==-1?0<h?(P=w[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let ee=!0;for(let de=0;de<h;de++){let J=w[de].g;const ye=w[de].map;if(J-=P,0>J)P=Math.max(0,w[de].g-100),ee=!1;else try{vd(ye,L,"req"+J+"_")}catch{p&&p(ye)}}if(ee){p=L.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function Ma(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;vn||Go(),In||(vn(),In=!0),Wi.add(l,o),o.v=0}}function ds(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pn(E(o.Fa,o),Ba(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Fa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),Lr(this),Fa(this))};function fs(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Fa(o){o.g=new ut(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=He(o.qa);te(l,"RID","rpc"),te(l,"SID",o.K),te(l,"AID",o.T),te(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(l,"TO",o.ja),te(l,"TYPE","xmlhttp"),xn(o,l),o.m&&o.o&&cs(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Dr(He(l)),h.m=null,h.P=!0,ha(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Lr(this),ds(this),Re(19))};function Mr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ua(o,l){var h=null;if(o.g==l){Mr(o),fs(o),o.g=null;var p=2}else if(us(o.h,l))h=l.D,_a(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;p=Rr(),Ae(p,new aa(p,h)),xr(o)}else Ma(o);else if(w=l.s,w==3||w==0&&0<l.X||!(p==1&&Rd(o,l)||p==2&&ds(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),w){case 1:Nt(o,5);break;case 4:Nt(o,10);break;case 3:Nt(o,6);break;default:Nt(o,2)}}}function Ba(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Nt(o,l){if(o.j.info("Error code "+l),l==2){var h=E(o.fb,o),p=o.Xa;const w=!p;p=new Dt(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||br(p,"https"),Dr(p),w?yd(p.toString(),h):Ed(p.toString(),h)}else Re(2);o.G=0,o.l&&o.l.sa(l),ja(o),Oa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ja(o){if(o.G=0,o.ka=[],o.l){const l=ya(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ka,l),C(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function $a(o,l,h){var p=h instanceof Dt?He(h):new Dt(h);if(p.g!="")l&&(p.g=l+"."+p.g),kr(p,p.s);else{var w=u.location;p=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var P=new Dt(null);p&&br(P,p),l&&(P.g=l),w&&kr(P,w),h&&(P.l=h),p=P}return h=o.D,l=o.ya,h&&l&&te(p,h,l),te(p,"VER",o.la),xn(o,p),p}function qa(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new Nr({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function za(){}n=za.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fr(){}Fr.prototype.g=function(o,l){return new Pe(o,l)};function Pe(o,l){_e.call(this),this.g=new Va(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!O(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ht(this)}S(Pe,_e),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){hs(this.g)},Pe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Zi(o),o=h);l.i.push(new ud(l.Ya++,o)),l.G==3&&xr(l)},Pe.prototype.N=function(){this.g.l=null,delete this.j,hs(this.g),delete this.g,Pe.aa.N.call(this)};function Wa(o){ts.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}S(Wa,ts);function Ha(){ns.call(this),this.status=1}S(Ha,ns);function Ht(o){this.g=o}S(Ht,za),Ht.prototype.ua=function(){Ae(this.g,"a")},Ht.prototype.ta=function(o){Ae(this.g,new Wa(o))},Ht.prototype.sa=function(o){Ae(this.g,new Ha)},Ht.prototype.ra=function(){Ae(this.g,"b")},Fr.prototype.createWebChannel=Fr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,bc=function(){return new Fr},Cc=function(){return Rr()},Pc=bt,Us={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,ei=Sr,ua.COMPLETE="complete",Sc=ua,ra.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,qn=ra,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Rc=ie}).apply(typeof qr<"u"?qr:typeof self<"u"?self:typeof window<"u"?window:{});const Nu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new so("@firebase/firestore");function Kt(){return Ft.logLevel}function x(n,...e){if(Ft.logLevel<=H.DEBUG){const t=e.map(yo);Ft.debug(`Firestore (${gn}): ${n}`,...t)}}function nt(n,...e){if(Ft.logLevel<=H.ERROR){const t=e.map(yo);Ft.error(`Firestore (${gn}): ${n}`,...t)}}function sn(n,...e){if(Ft.logLevel<=H.WARN){const t=e.map(yo);Ft.warn(`Firestore (${gn}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+n;throw nt(e),new Error(e)}function Y(n,e){n||j()}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}}class ey{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ty{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new ve(e)}}class ny{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ry{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ny(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.R=t.token,new iy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function on(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new le(0,0))}static max(){return new $(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(),r===void 0?r=e.length-t:r>e.length-t&&j(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Oe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Oe.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Oe.isNumericId(e),i=Oe.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Oe.extractNumericId(e).compare(Oe.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tt.fromString(e.substring(4,e.length-2))}}class se extends Oe{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const ay=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Oe{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return ay.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new F(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new F(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function uy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new le(t+1,0):new le(t,r));return new wt(i,U.empty(),e)}function ly(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt($.min(),U.empty(),-1)}static max(){return new wt($.max(),U.empty(),-1)}}function cy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==hy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(i=>i?k.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new k((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const d=c;t(e[d]).next(f=>{a[d]=f,++u,u===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new k((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function fy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vi.oe=-1;function Oi(n){return n==null}function gi(n){return n===0&&1/n==-1/0}function py(n){return typeof n=="number"&&Number.isInteger(n)&&!gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vu(e)),e=gy(n.get(t),e);return Vu(e)}function gy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Vu(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??fe.RED,this.left=i??fe.EMPTY,this.right=s??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new fe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,r,i,s){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lu(this.data.getIterator())}getIteratorFrom(e){return new Lu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Lu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new De([])}unionWith(e){let t=new ce(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vc("Invalid base64 string: "+s):s}}(e);return new me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const _y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(Y(!!n),typeof n=="string"){let e=0;const t=_y.exec(n);if(Y(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Li(n){const e=n.mapValue.fields.__previous_value__;return Eo(e)?Li(e):e}function tr(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t,r,i,s,a,u,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Eo(n)?4:Ty(n)?9007199254740991:Ey(n)?10:11:j()}function je(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return tr(n).isEqual(tr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=At(i.timestampValue),u=At(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Rt(i.bytesValue).isEqual(Rt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=oe(i.doubleValue),u=oe(s.doubleValue);return a===u?gi(a)===gi(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Ou(a)!==Ou(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!je(a[c],u[c])))return!1;return!0}(n,e);default:return j()}}function rr(n,e){return(n.values||[]).find(t=>je(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=St(n),r=St(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=oe(s.integerValue||s.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(n,e);case 3:return xu(n.timestampValue,e.timestampValue);case 4:return xu(tr(n),tr(e));case 5:return K(n.stringValue,e.stringValue);case 6:return function(s,a){const u=Rt(s),c=Rt(a);return u.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=K(u[d],c[d]);if(f!==0)return f}return K(u.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=K(oe(s.latitude),oe(a.latitude));return u!==0?u:K(oe(s.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mu(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,d,f;const g=s.fields||{},E=a.fields||{},A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,S=(c=E.value)===null||c===void 0?void 0:c.arrayValue,D=K(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Mu(A,S)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Wr.mapValue&&a===Wr.mapValue)return 0;if(s===Wr.mapValue)return 1;if(a===Wr.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const E=K(c[g],f[g]);if(E!==0)return E;const A=an(u[c[g]],d[f[g]]);if(A!==0)return A}return K(c.length,f.length)}(n.mapValue,e.mapValue);default:throw j()}}function xu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=At(n),r=At(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function Mu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=an(t[i],r[i]);if(s)return s}return K(t.length,r.length)}function un(n){return Bs(n)}function Bs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Bs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Bs(t.fields[a])}`;return i+"}"}(n.mapValue):j()}function ti(n){switch(St(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Li(n);return e?16+ti(e):16;case 5:return 2*n.stringValue.length;case 6:return Rt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ti(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Bt(r.fields,(s,a)=>{i+=s.length+ti(a)}),i}(n.mapValue);default:throw j()}}function js(n){return!!n&&"integerValue"in n}function To(n){return!!n&&"arrayValue"in n}function Fu(n){return!!n&&"nullValue"in n}function Uu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function Ey(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ty(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ni(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(t)}setAll(e){let t=pe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Gn(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ni(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ce(Gn(this.value))}}function Oc(n){const e=[];return Bt(n.fields,(t,r)=>{const i=new pe([t]);if(ni(r)){const s=Oc(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ie(e,0,$.min(),$.min(),$.min(),Ce.empty(),0)}static newFoundDocument(e,t,r,i){return new Ie(e,1,t,$.min(),r,i,0)}static newNoDocument(e,t){return new Ie(e,2,t,$.min(),$.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,$.min(),$.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.position=e,this.inclusive=t}}function Bu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=an(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ju(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t="asc"){this.field=e,this.dir=t}}function vy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{}class ue extends Lc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wy(e,t,r):t==="array-contains"?new Sy(e,r):t==="in"?new Py(e,r):t==="not-in"?new Cy(e,r):t==="array-contains-any"?new by(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ay(e,r):new Ry(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Lc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new $e(e,t)}matches(e){return xc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xc(n){return n.op==="and"}function Mc(n){return Iy(n)&&xc(n)}function Iy(n){for(const e of n.filters)if(e instanceof $e)return!1;return!0}function $s(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+un(n.value);if(Mc(n))return n.filters.map(e=>$s(e)).join(",");{const e=n.filters.map(t=>$s(t)).join(",");return`${n.op}(${e})`}}function Fc(n,e){return n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&je(r.value,i.value)}(n,e):n instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Fc(a,i.filters[u]),!0):!1}(n,e):void j()}function Uc(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(n):n instanceof $e?function(t){return t.op.toString()+" {"+t.getFilters().map(Uc).join(" ,")+"}"}(n):"Filter"}class wy extends ue{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ay extends ue{constructor(e,t){super(e,"in",t),this.keys=Bc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ry extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Bc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class Sy extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return To(t)&&rr(t.arrayValue,this.value)}}class Py extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rr(this.value.arrayValue,t)}}class Cy extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!rr(this.value.arrayValue,t)}}class by extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!To(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>rr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function $u(n,e=null,t=[],r=[],i=null,s=null,a=null){return new ky(n,e,t,r,i,s,a)}function vo(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$s(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>un(r)).join(",")),e.ue=t}return e.ue}function Io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ju(n.startAt,e.startAt)&&ju(n.endAt,e.endAt)}function qs(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dy(n,e,t,r,i,s,a,u){return new xi(n,e,t,r,i,s,a,u)}function wo(n){return new xi(n)}function qu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ny(n){return n.collectionGroup!==null}function Kn(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ce(pe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yi(s,r))}),t.has(pe.keyField().canonicalString())||e.ce.push(new yi(pe.keyField(),r))}return e.ce}function Fe(n){const e=q(n);return e.le||(e.le=Vy(e,Kn(n))),e.le}function Vy(n,e){if(n.limitType==="F")return $u(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yi(i.field,s)});const t=n.endAt?new _i(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _i(n.startAt.position,n.startAt.inclusive):null;return $u(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function zs(n,e,t){return new xi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mi(n,e){return Io(Fe(n),Fe(e))&&n.limitType===e.limitType}function jc(n){return`${vo(Fe(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Uc(i)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>un(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>un(i)).join(",")),`Target(${r})`}(Fe(n))}; limitType=${n.limitType})`}function Fi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Kn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,c){const d=Bu(a,u,c);return a.inclusive?d<=0:d<0}(r.startAt,Kn(r),i)||r.endAt&&!function(a,u,c){const d=Bu(a,u,c);return a.inclusive?d>=0:d>0}(r.endAt,Kn(r),i))}(n,e)}function Oy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $c(n){return(e,t)=>{let r=!1;for(const i of Kn(n)){const s=Ly(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ly(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),d=u.data.field(s);return c!==null&&d!==null?an(c,d):j()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new re(U.comparator);function rt(){return xy}const qc=new re(U.comparator);function zn(...n){let e=qc;for(const t of n)e=e.insert(t.key,t);return e}function zc(n){let e=qc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ot(){return Qn()}function Wc(){return Qn()}function Qn(){return new jt(n=>n.toString(),(n,e)=>n.isEqual(e))}const My=new re(U.comparator),Fy=new ce(U.comparator);function G(...n){let e=Fy;for(const t of n)e=e.add(t);return e}const Uy=new ce(K);function By(){return Uy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(e)?"-0":e}}function Hc(n){return{integerValue:""+n}}function jy(n,e){return py(e)?Hc(e):Ao(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function $y(n,e,t){return n instanceof Ei?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Eo(s)&&(s=Li(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ir?Kc(n,e):n instanceof sr?Qc(n,e):function(i,s){const a=Gc(i,s),u=zu(a)+zu(i.Pe);return js(a)&&js(i.Pe)?Hc(u):Ao(i.serializer,u)}(n,e)}function qy(n,e,t){return n instanceof ir?Kc(n,e):n instanceof sr?Qc(n,e):t}function Gc(n,e){return n instanceof Ti?function(r){return js(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ei extends Ui{}class ir extends Ui{constructor(e){super(),this.elements=e}}function Kc(n,e){const t=Jc(e);for(const r of n.elements)t.some(i=>je(i,r))||t.push(r);return{arrayValue:{values:t}}}class sr extends Ui{constructor(e){super(),this.elements=e}}function Qc(n,e){let t=Jc(e);for(const r of n.elements)t=t.filter(i=>!je(i,r));return{arrayValue:{values:t}}}class Ti extends Ui{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zu(n){return oe(n.integerValue||n.doubleValue)}function Jc(n){return To(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ir&&i instanceof ir||r instanceof sr&&i instanceof sr?on(r.elements,i.elements,je):r instanceof Ti&&i instanceof Ti?je(r.Pe,i.Pe):r instanceof Ei&&i instanceof Ei}(n.transform,e.transform)}class Wy{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bi{}function Yc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zc(n.key,Ze.none()):new _r(n.key,n.data,Ze.none());{const t=n.data,r=Ce.empty();let i=new ce(pe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new $t(n.key,r,new De(i.toArray()),Ze.none())}}function Hy(n,e,t){n instanceof _r?function(i,s,a){const u=i.value.clone(),c=Hu(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,s,a){if(!ri(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Hu(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Xc(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Jn(n,e,t,r){return n instanceof _r?function(s,a,u,c){if(!ri(s.precondition,a))return u;const d=s.value.clone(),f=Gu(s.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(s,a,u,c){if(!ri(s.precondition,a))return u;const d=Gu(s.fieldTransforms,c,a),f=a.data;return f.setAll(Xc(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,u){return ri(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Gy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Gc(r.transform,i||null);s!=null&&(t===null&&(t=Ce.empty()),t.set(r.field,s))}return t||null}function Wu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&on(r,i,(s,a)=>zy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Bi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends Bi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hu(n,e,t){const r=new Map;Y(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,qy(a,u,t[i]))}return r}function Gu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,$y(s,a,e))}return r}class Zc extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ky extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wc();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=Yc(a,u);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,r)=>Wu(t,r))&&on(this.baseMutations,e.baseMutations,(t,r)=>Wu(t,r))}}class Ro{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Y(e.mutations.length===r.length);let i=function(){return My}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Ro(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,Q;function Xy(n){switch(n){default:return j();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function eh(n){if(n===void 0)return nt("GRPC error has no .code"),V.UNKNOWN;switch(n){case ae.OK:return V.OK;case ae.CANCELLED:return V.CANCELLED;case ae.UNKNOWN:return V.UNKNOWN;case ae.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ae.INTERNAL:return V.INTERNAL;case ae.UNAVAILABLE:return V.UNAVAILABLE;case ae.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ae.NOT_FOUND:return V.NOT_FOUND;case ae.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ae.ABORTED:return V.ABORTED;case ae.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ae.DATA_LOSS:return V.DATA_LOSS;default:return j()}}(Q=ae||(ae={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Tt([4294967295,4294967295],0);function Ku(n){const e=Zy().encode(n),t=new Ac;return t.update(e),new Uint8Array(t.digest())}function Qu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([i,s],0)]}class So{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Tt.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(Tt.fromNumber(r)));return i.compare(eE)===1&&(i=new Tt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ku(e),[r,i]=Qu(t);for(let s=0;s<this.hashCount;s++){const a=this.de(r,i,s);if(!this.Ee(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new So(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=Ku(e),[r,i]=Qu(t);for(let s=0;s<this.hashCount;s++){const a=this.de(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ji($.min(),i,new re(K),rt(),G())}}class yr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yr(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class th{constructor(e,t){this.targetId=e,this.me=t}}class nh{constructor(e,t,r=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ju{constructor(){this.fe=0,this.ge=Yu(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=G(),t=G(),r=G();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j()}}),new yr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Yu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tE{constructor(e){this.Be=e,this.Le=new Map,this.ke=rt(),this.qe=Hr(),this.Qe=Hr(),this.Ke=new re(K)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(qs(s))if(r===0){const a=new U(s.path);this.We(t,a,Ie.newNoDocument(a,$.min()))}else Y(r===1);else{const a=this.Ze(t);if(a!==r){const u=this.Xe(e),c=u?this.et(u,e,a):1;if(c!==0){this.He(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Rt(r).toUint8Array()}catch(c){if(c instanceof Vc)return sn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new So(a,i,s)}catch(c){return sn(c instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Te===0?null:u}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Be.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Le.forEach((s,a)=>{const u=this.Ye(a);if(u){if(s.current&&qs(u.target)){const c=new U(u.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,Ie.newNoDocument(c,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=G();this.Qe.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ji(e,t,this.Ke,this.ke,r);return this.ke=rt(),this.qe=Hr(),this.Qe=Hr(),this.Ke=new re(K),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Ju,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ce(K),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(K),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Ju),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Hr(){return new re(U.comparator)}function Yu(){return new re(U.comparator)}const nE={asc:"ASCENDING",desc:"DESCENDING"},rE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iE={and:"AND",or:"OR"};class sE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ws(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function vi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oE(n,e){return vi(n,e.toTimestamp())}function Ue(n){return Y(!!n),$.fromTimestamp(function(t){const r=At(t);return new le(r.seconds,r.nanos)}(n))}function Po(n,e){return Hs(n,e).canonicalString()}function Hs(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ih(n){const e=se.fromString(n);return Y(lh(e)),e}function Gs(n,e){return Po(n.databaseId,e.path)}function Rs(n,e){const t=ih(e);if(t.get(1)!==n.databaseId.projectId)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(oh(t))}function sh(n,e){return Po(n.databaseId,e)}function aE(n){const e=ih(n);return e.length===4?se.emptyPath():oh(e)}function Ks(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function oh(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xu(n,e,t){return{name:Gs(n,e),fields:t.value.mapValue.fields}}function uE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Y(f===void 0||typeof f=="string"),me.fromBase64String(f||"")):(Y(f===void 0||f instanceof Buffer||f instanceof Uint8Array),me.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const f=d.code===void 0?V.UNKNOWN:eh(d.code);return new F(f,d.message||"")}(a);t=new nh(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rs(n,r.document.name),s=Ue(r.document.updateTime),a=r.document.createTime?Ue(r.document.createTime):$.min(),u=new Ce({mapValue:{fields:r.document.fields}}),c=Ie.newFoundDocument(i,s,a,u),d=r.targetIds||[],f=r.removedTargetIds||[];t=new ii(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rs(n,r.document),s=r.readTime?Ue(r.readTime):$.min(),a=Ie.newNoDocument(i,s),u=r.removedTargetIds||[];t=new ii([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rs(n,r.document),s=r.removedTargetIds||[];t=new ii([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Yy(i,s),u=r.targetId;t=new th(u,a)}}return t}function lE(n,e){let t;if(e instanceof _r)t={update:Xu(n,e.key,e.value)};else if(e instanceof Zc)t={delete:Gs(n,e.key)};else if(e instanceof $t)t={update:Xu(n,e.key,e.data),updateMask:yE(e.fieldMask)};else{if(!(e instanceof Ky))return j();t={verify:Gs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof Ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ir)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw j()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(n,e.precondition)),t}function cE(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ue(i.updateTime):Ue(s);return a.isEqual($.min())&&(a=Ue(s)),new Wy(a,i.transformResults||[])}(t,e))):[]}function hE(n,e){return{documents:[sh(n,e.path)]}}function dE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sh(n,i);const s=function(d){if(d.length!==0)return uh($e.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:Jt(E.field),direction:mE(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ws(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function fE(n){let e=aE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Y(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){const E=ah(g);return E instanceof $e&&Mc(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(S){return new yi(Yt(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let u=null;t.limit&&(u=function(g){let E;return E=typeof g=="object"?g.value:g,Oi(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(g){const E=!!g.before,A=g.values||[];return new _i(A,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,A=g.values||[];return new _i(A,E)}(t.endAt)),Dy(e,i,a,s,u,"F",c,d)}function pE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ah(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yt(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yt(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(t.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(Yt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $e.create(t.compositeFilter.filters.map(r=>ah(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(n):j()}function mE(n){return nE[n]}function gE(n){return rE[n]}function _E(n){return iE[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function Yt(n){return pe.fromServerFormat(n.fieldPath)}function uh(n){return n instanceof ue?function(t){if(t.op==="=="){if(Uu(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(Fu(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uu(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(Fu(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:gE(t.op),value:t.value}}}(n):n instanceof $e?function(t){const r=t.getFilters().map(i=>uh(i));return r.length===1?r[0]:{compositeFilter:{op:_E(t.op),filters:r}}}(n):j()}function yE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function lh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,r,i,s=$.min(),a=$.min(),u=me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.ht=e}}function TE(n){const e=fE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.ln=new IE}addToCollectionParentIndex(e,t){return this.ln.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(wt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class IE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Se{static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(41943040,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ln(0)}static Qn(){return new ln(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el([n,e],[t,r]){const i=K(n,t);return i===0?K(e,r):i}class wE{constructor(e){this.Gn=e,this.buffer=new ce(el),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();el(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.Yn(3e5)})}}class RE{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Vi.oe);const r=new wE(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Zu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,u,c,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,u=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Kt()<=H.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function SE(n,e){return new RE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Jn(r.mutation,i,De.empty(),le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=Ot();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=zn();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=rt();const a=Qn(),u=function(){return Qn()}();return t.forEach((c,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof $t)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Jn(f.mutation,d,f.mutation.getFieldMask(),le.now())):a.set(d.key,De.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return u.set(d,new CE(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Qn();let i=new re((a,u)=>a-u),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=r.get(c)||De.empty();f=u.applyToLocalView(d,f),r.set(c,f);const g=(i.get(u.batchId)||G()).add(c);i=i.insert(u.batchId,g)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,g=Wc();f.forEach(E=>{if(!s.has(E)){const A=Yc(t.get(E),r.get(E));A!==null&&g.set(E,A),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ny(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):k.resolve(Ot());let u=-1,c=s;return a.next(d=>k.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),s.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{c=c.insert(f,E)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,G())).next(f=>({batchId:u,changes:zc(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(e,s).next(u=>k.forEach(u,c=>{const d=function(g,E){return new xi(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ie.newInvalidDocument(f)))});let u=zn();return a.forEach((c,d)=>{const f=s.get(c);f!==void 0&&Jn(f.mutation,d,De.empty(),le.now()),Fi(t,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return k.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ue(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:TE(i.bundledQuery),readTime:Ue(i.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.overlays=new re(U.comparator),this.dr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return k.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.dr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.dr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const i=Ot(),s=t.length+1,a=new U(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new re((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ot(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Ot(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=i)););return k.resolve(u)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.dr.get(i.largestBatchId).delete(r.key);this.dr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Jy(t,r));let s=this.dr.get(t);s===void 0&&(s=G(),this.dr.set(t,s)),this.dr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.Er=new ce(he.Ar),this.Rr=new ce(he.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new he(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new he(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new U(new se([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new U(new se([])),r=new he(t,e),i=new he(t,e+1);let s=G();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new he(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return U.comparator(e.key,t.key)||K(e.br,t.br)}static Vr(e,t){return K(e.br,t.br)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ce(he.Ar)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qy(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.vr=this.vr.add(new he(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const u=this.Cr(a.br);s.push(u)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(K);return t.forEach(i=>{const s=new he(i,0),a=new he(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],u=>{r=r.add(u.br)})}),k.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const a=new he(new U(s),0);let u=new ce(K);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.br)),!0)},a),k.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Y(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return k.forEach(t.mutations,i=>{const s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new he(t,0),i=this.vr.firstAfterOrEqual(r);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.Nr=e,this.docs=function(){return new re(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=rt();const a=t.path,u=new U(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||cy(ly(f),r)<=0||(i.has(f.key)||Fi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,r,i){j()}Br(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new LE(this)}getSize(e){return k.resolve(this.size)}}class LE extends PE{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.persistence=e,this.Lr=new jt(t=>vo(t),Io),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.kr=0,this.qr=new Co,this.targetCount=0,this.Qr=ln.qn()}forEachTarget(e,t){return this.Lr.forEach((r,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),k.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Un(t),k.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Lr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Lr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vi(0),this.Ur=!1,this.Ur=!0,this.Wr=new NE,this.referenceDelegate=e(this),this.Gr=new xE(this),this.indexManager=new vE,this.remoteDocumentCache=function(i){return new OE(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new EE(t),this.jr=new kE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new VE(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const i=new ME(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return k.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class ME extends dy{constructor(e){super(),this.currentSequenceNumber=e}}class bo{constructor(e){this.persistence=e,this.Zr=new Co,this.Xr=null}static ei(e){return new bo(e)}get ti(){if(this.Xr)return this.Xr;throw j()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),k.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ti,r=>{const i=U.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,$.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return k.or([()=>k.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ii{constructor(e,t){this.persistence=e,this.ri=new jt(r=>my(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=SE(this,t)}static ei(e,t){return new Ii(e,t)}Hr(){}Jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return k.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?k.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Br(e,a=>this.ir(e,a,t).next(u=>{u||(r++,s.removeEntry(a,$.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ti(e.data.value)),t}ir(e,t,r){return k.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return k.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=G(),i=G();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ko(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ep()?8:fy(we())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new FE;return this.ts(e,t,a).next(u=>{if(s.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Kt()<=H.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),k.resolve()):(Kt()<=H.DEBUG&&x("QueryEngine","Query:",Qt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Kt()<=H.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):k.resolve())}Xi(e,t){if(qu(t))return k.resolve(null);let r=Fe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=zs(t,null,"F"),r=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=G(...s);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.rs(t,u);return this.ss(t,d,a,c.readTime)?this.Xi(e,zs(t,null,"F")):this.os(e,d,t,c)}))})))}es(e,t,r,i){return qu(t)||i.isEqual($.min())?k.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?k.resolve(null):(Kt()<=H.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qt(t)),this.os(e,a,t,uy(i,-1)).next(u=>u))})}rs(e,t){let r=new ce($c(e));return t.forEach((i,s)=>{Fi(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Kt()<=H.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.Zi.getDocumentsMatchingQuery(e,t,wt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new re(K),this.cs=new jt(s=>vo(s),Io),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function jE(n,e,t,r){return new BE(n,e,t,r)}async function hh(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let c=G();for(const d of i){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of s){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function $E(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const g=d.batch,E=g.keys();let A=k.resolve();return E.forEach(S=>{A=A.next(()=>f.getEntry(c,S)).next(D=>{const C=d.docVersions.get(S);Y(C!==null),D.version.compareTo(C)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function dh(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function qE(n,e){const t=q(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const u=[];e.targetChanges.forEach((f,g)=>{const E=i.get(g);if(!E)return;u.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,g)));let A=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(me.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(g,A),function(D,C,N){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(E,A,f)&&u.push(t.Gr.updateTargetData(s,A))});let c=rt(),d=G();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(zE(s,a,e.documentUpdates).next(f=>{c=f.Is,d=f.ds})),!r.isEqual($.min())){const f=t.Gr.getLastRemoteSnapshotVersion(s).next(g=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(f)}return k.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(t.us=i,s))}function zE(n,e,t){let r=G(),i=G();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=rt();return t.forEach((u,c)=>{const d=s.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):x("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Is:a,ds:i}})}function WE(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HE(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Qs(n,e,t){const r=q(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!yn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function tl(n,e,t){const r=q(n);let i=$.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const g=q(c),E=g.cs.get(f);return E!==void 0?k.resolve(g.us.get(E)):g.Gr.getTargetData(d,f)}(r,a,Fe(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:$.min(),t?s:G())).next(u=>(GE(r,Oy(e),u),{documents:u,Es:s})))}function GE(n,e,t){let r=n.ls.get(e)||$.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class nl{constructor(){this.activeTargetIds=By()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KE{constructor(){this._o=new nl,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new nl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr=null;function Ss(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class XE extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const u=Ss(),c=this.No(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${u}:`,c,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,s,a),this.Lo(t,c,d,i).then(f=>(x("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw sn("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",i),f})}ko(t,r,i,s,a,u){return this.Oo(t,r,i,s,a)}Bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=JE[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,i){const s=Ss();return new Promise((a,u)=>{const c=new Rc;c.setWithCredentials(!0),c.listenOnce(Sc.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ei.NO_ERROR:const f=c.getResponseJson();x(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ei.TIMEOUT:x(Te,`RPC '${e}' ${s} timed out`),u(new F(V.DEADLINE_EXCEEDED,"Request time out"));break;case ei.HTTP_ERROR:const g=c.getStatus();if(x(Te,`RPC '${e}' ${s} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const S=function(C){const N=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(A.status);u(new F(S,A.message))}else u(new F(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new F(V.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{x(Te,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);x(Te,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",d,r,15)})}qo(e,t,r){const i=Ss(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bc(),u=Cc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");x(Te,`Creating RPC '${e}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);let E=!1,A=!1;const S=new YE({Eo:C=>{A?x(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(E||(x(Te,`Opening RPC '${e}' stream ${i} transport.`),g.open(),E=!0),x(Te,`RPC '${e}' stream ${i} sending:`,C),g.send(C))},Ao:()=>g.close()}),D=(C,N,O)=>{C.listen(N,M=>{try{O(M)}catch(W){setTimeout(()=>{throw W},0)}})};return D(g,qn.EventType.OPEN,()=>{A||(x(Te,`RPC '${e}' stream ${i} transport opened.`),S.So())}),D(g,qn.EventType.CLOSE,()=>{A||(A=!0,x(Te,`RPC '${e}' stream ${i} transport closed`),S.Do())}),D(g,qn.EventType.ERROR,C=>{A||(A=!0,sn(Te,`RPC '${e}' stream ${i} transport errored:`,C),S.Do(new F(V.UNAVAILABLE,"The operation could not be completed")))}),D(g,qn.EventType.MESSAGE,C=>{var N;if(!A){const O=C.data[0];Y(!!O);const M=O,W=(M==null?void 0:M.error)||((N=M[0])===null||N===void 0?void 0:N.error);if(W){x(Te,`RPC '${e}' stream ${i} received error:`,W);const Z=W.status;let X=function(_){const T=ae[_];if(T!==void 0)return eh(T)}(Z),v=W.message;X===void 0&&(X=V.INTERNAL,v="Unknown error status: "+Z+" with message "+W.message),A=!0,S.Do(new F(X,v)),g.close()}else x(Te,`RPC '${e}' stream ${i} received:`,O),S.vo(O)}}),D(u,Pc.STAT_EVENT,C=>{C.stat===Us.PROXY?x(Te,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Us.NOPROXY&&x(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.bo()},0),S}}function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){return new sE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t,r,i,s,a,u,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new fh(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new F(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.d_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZE extends ph{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=uE(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Ue(a.readTime):$.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Ks(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=qs(c)?{documents:hE(s,c)}:{query:dE(s,c).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=rh(s,a.resumeToken);const d=Ws(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){u.readTime=vi(s,a.snapshotVersion.toTimestamp());const d=Ws(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=pE(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Ks(this.serializer),t.removeTarget=e,this.c_(t)}}class eT extends ph{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=cE(e.writeResults,e.commitTime),r=Ue(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Ks(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>lE(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Hs(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(V.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,Hs(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(V.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class nT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(nt(t),this.C_=!1):x("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{qt(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=q(c);d.k_.add(4),await Er(d),d.K_.set("Unknown"),d.k_.delete(4),await qi(d)}(this))})}),this.K_=new nT(r,i)}}async function qi(n){if(qt(n))for(const e of n.q_)await e(!0)}async function Er(n){for(const e of n.q_)await e(!1)}function mh(n,e){const t=q(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Oo(t)?Vo(t):En(t).s_()&&No(t,e))}function Do(n,e){const t=q(n),r=En(t);t.L_.delete(e),r.s_()&&gh(t,e),t.L_.size===0&&(r.s_()?r.a_():qt(t)&&t.K_.set("Unknown"))}function No(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}En(n).V_(e)}function gh(n,e){n.U_.xe(e),En(n).m_(e)}function Vo(n){n.U_=new tE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),En(n).start(),n.K_.F_()}function Oo(n){return qt(n)&&!En(n).i_()&&n.L_.size>0}function qt(n){return q(n).k_.size===0}function _h(n){n.U_=void 0}async function iT(n){n.K_.set("Online")}async function sT(n){n.L_.forEach((e,t)=>{No(n,e)})}async function oT(n,e){_h(n),Oo(n)?(n.K_.O_(e),Vo(n)):n.K_.set("Unknown")}async function aT(n,e,t){if(n.K_.set("Online"),e instanceof nh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.L_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.L_.delete(u),i.U_.removeTarget(u))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wi(n,r)}else if(e instanceof ii?n.U_.$e(e):e instanceof th?n.U_.Je(e):n.U_.Ge(e),!t.isEqual($.min()))try{const r=await dh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.U_.it(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.L_.get(d);f&&s.L_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=s.L_.get(c);if(!f)return;s.L_.set(c,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),gh(s,c);const g=new gt(f.target,c,d,f.sequenceNumber);No(s,g)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await wi(n,r)}}async function wi(n,e,t){if(!yn(e))throw e;n.k_.add(1),await Er(n),n.K_.set("Offline"),t||(t=()=>dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await qi(n)})}function yh(n,e){return e().catch(t=>wi(n,t,e))}async function zi(n){const e=q(n),t=Pt(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;uT(e);)try{const i=await WE(e.localStore,r);if(i===null){e.B_.length===0&&t.a_();break}r=i.batchId,lT(e,i)}catch(i){await wi(e,i)}Eh(e)&&Th(e)}function uT(n){return qt(n)&&n.B_.length<10}function lT(n,e){n.B_.push(e);const t=Pt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Eh(n){return qt(n)&&!Pt(n).i_()&&n.B_.length>0}function Th(n){Pt(n).start()}async function cT(n){Pt(n).w_()}async function hT(n){const e=Pt(n);for(const t of n.B_)e.g_(t.mutations)}async function dT(n,e,t){const r=n.B_.shift(),i=Ro.from(r,e,t);await yh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await zi(n)}async function fT(n,e){e&&Pt(n).f_&&await async function(r,i){if(function(a){return Xy(a)&&a!==V.ABORTED}(i.code)){const s=r.B_.shift();Pt(r).__(),await yh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zi(r)}}(n,e),Eh(n)&&Th(n)}async function il(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=qt(t);t.k_.add(3),await Er(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await qi(t)}async function pT(n,e){const t=q(n);e?(t.k_.delete(2),await qi(t)):e||(t.k_.add(2),await Er(t),t.K_.set("Unknown"))}function En(n){return n.W_||(n.W_=function(t,r,i){const s=q(t);return s.b_(),new ZE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:iT.bind(null,n),mo:sT.bind(null,n),po:oT.bind(null,n),R_:aT.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Oo(n)?Vo(n):n.K_.set("Unknown")):(await n.W_.stop(),_h(n))})),n.W_}function Pt(n){return n.G_||(n.G_=function(t,r,i){const s=q(t);return s.b_(),new eT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:cT.bind(null,n),po:fT.bind(null,n),p_:hT.bind(null,n),y_:dT.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await zi(n)):(await n.G_.stop(),n.B_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new Lo(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xo(n,e){if(nt("AsyncQueue",`${e}: ${n}`),yn(n))return new F(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{static emptySet(e){return new nn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=zn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.z_=new re(U.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):j():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class cn{constructor(e,t,r,i,s,a,u,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new cn(e,t,nn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class gT{constructor(){this.queries=ol(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=q(t),s=i.queries;i.queries=ol(),s.forEach((a,u)=>{for(const c of u.J_)c.onError(r)})})(this,new F(V.ABORTED,"Firestore shutting down"))}}function ol(){return new jt(n=>jc(n),Mi)}async function _T(n,e){const t=q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new mT,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=xo(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Mo(t)}async function yT(n,e){const t=q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ET(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.J_)u.ta(i)&&(r=!0);a.H_=i}}r&&Mo(t)}function TT(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function Mo(n){n.X_.forEach(e=>{e.next()})}var Js,al;(al=Js||(Js={})).na="default",al.Cache="cache";class vT{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new cn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.key=e}}class Ih{constructor(e){this.key=e}}class IT{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=G(),this.mutatedKeys=G(),this.Va=$c(e),this.ma=new nn(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new sl,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const E=i.get(f),A=Fi(this.query,g)?g:null,S=!!E&&this.mutatedKeys.has(E.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;E&&A?E.data.isEqual(A.data)?S!==D&&(r.track({type:3,doc:A}),C=!0):this.ya(E,A)||(r.track({type:2,doc:A}),C=!0,(c&&this.Va(A,c)>0||d&&this.Va(A,d)<0)&&(u=!0)):!E&&A?(r.track({type:0,doc:A}),C=!0):E&&!A&&(r.track({type:1,doc:E}),C=!0,(c||d)&&(u=!0)),C&&(A?(a=a.add(A),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:u,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,g)=>function(A,S){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return D(A)-D(S)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(r),i=i!=null&&i;const u=t&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,d=c!==this.Aa;return this.Aa=c,a.length!==0||d?{snapshot:new cn(this.query,e.ma,s,a,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new sl,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=G(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Ih(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new vh(r))}),t}va(e){this.Ea=e.Es,this.Ra=G();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return cn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class wT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class AT{constructor(e){this.key=e,this.Fa=!1}}class RT{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new jt(u=>jc(u),Mi),this.Oa=new Map,this.Na=new Set,this.Ba=new re(U.comparator),this.La=new Map,this.ka=new Co,this.qa={},this.Qa=new Map,this.Ka=ln.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ST(n,e,t=!0){const r=Ch(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await wh(r,e,t,!0),i}async function PT(n,e){const t=Ch(n);await wh(t,e,!0,!1)}async function wh(n,e,t,r){const i=await HE(n.localStore,Fe(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await CT(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&mh(n.remoteStore,i),u}async function CT(n,e,t,r,i){n.Ua=(g,E,A)=>async function(D,C,N,O){let M=C.view.ga(N);M.ss&&(M=await tl(D.localStore,C.query,!1).then(({documents:v})=>C.view.ga(v,M)));const W=O&&O.targetChanges.get(C.targetId),Z=O&&O.targetMismatches.get(C.targetId)!=null,X=C.view.applyChanges(M,D.isPrimaryClient,W,Z);return ll(D,C.targetId,X.ba),X.snapshot}(n,g,E,A);const s=await tl(n.localStore,e,!0),a=new IT(e,s.Es),u=a.ga(s.documents),c=yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,c);ll(n,t,d.ba);const f=new wT(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function bT(n,e,t){const r=q(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!Mi(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Do(r.remoteStore,i.targetId),Ys(r,i.targetId)}).catch(_n)):(Ys(r,i.targetId),await Qs(r.localStore,i.targetId,!0))}async function kT(n,e){const t=q(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Do(t.remoteStore,r.targetId))}async function DT(n,e,t){const r=FT(n);try{const i=await function(a,u){const c=q(a),d=le.now(),f=u.reduce((A,S)=>A.add(S.key),G());let g,E;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=rt(),D=G();return c.hs.getEntries(A,f).next(C=>{S=C,S.forEach((N,O)=>{O.isValidDocument()||(D=D.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,S)).next(C=>{g=C;const N=[];for(const O of u){const M=Gy(O,g.get(O.key).overlayedDocument);M!=null&&N.push(new $t(O.key,M,Oc(M.value.mapValue),Ze.exists(!0)))}return c.mutationQueue.addMutationBatch(A,d,N,u)}).next(C=>{E=C;const N=C.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(A,C.batchId,N)})}).then(()=>({batchId:E.batchId,changes:zc(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let d=a.qa[a.currentUser.toKey()];d||(d=new re(K)),d=d.insert(u,c),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Tr(r,i.changes),await zi(r.remoteStore)}catch(i){const s=xo(i,"Failed to persist write");t.reject(s)}}async function Ah(n,e){const t=q(n);try{const r=await qE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.La.get(s);a&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?Y(a.Fa):i.removedDocuments.size>0&&(Y(a.Fa),a.Fa=!1))}),await Tr(t,r,e)}catch(r){await _n(r)}}function ul(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const u=a.view.ea(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=q(a);c.onlineState=u;let d=!1;c.queries.forEach((f,g)=>{for(const E of g.J_)E.ea(u)&&(d=!0)}),d&&Mo(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NT(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.La.get(e),s=i&&i.key;if(s){let a=new re(U.comparator);a=a.insert(s,Ie.newNoDocument(s,$.min()));const u=G().add(s),c=new ji($.min(),new Map,new re(K),a,u);await Ah(r,c),r.Ba=r.Ba.remove(s),r.La.delete(e),Fo(r)}else await Qs(r.localStore,e,!1).then(()=>Ys(r,e,t)).catch(_n)}async function VT(n,e){const t=q(n),r=e.batch.batchId;try{const i=await $E(t.localStore,e);Sh(t,r,null),Rh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(t,i)}catch(i){await _n(i)}}async function OT(n,e,t){const r=q(n);try{const i=await function(a,u){const c=q(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(g=>(Y(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);Sh(r,e,t),Rh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Tr(r,i)}catch(i){await _n(i)}}function Rh(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Sh(n,e,t){const r=q(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Ys(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ph(n,r)})}function Ph(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Do(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Fo(n))}function ll(n,e,t){for(const r of t)r instanceof vh?(n.ka.addReference(r.key,e),LT(n,r)):r instanceof Ih?(x("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ph(n,r.key)):j()}function LT(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Na.add(r),Fo(n))}function Fo(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new U(se.fromString(e)),r=n.Ka.next();n.La.set(r,new AT(t)),n.Ba=n.Ba.insert(t,r),mh(n.remoteStore,new gt(Fe(wo(t.path)),r,"TargetPurposeLimboResolution",Vi.oe))}}async function Tr(n,e,t){const r=q(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((u,c)=>{a.push(r.Ua(c,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){i.push(d);const g=ko.zi(c.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(c,d){const f=q(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,E=>k.forEach(E.Wi,A=>f.persistence.referenceDelegate.addReference(g,E.targetId,A)).next(()=>k.forEach(E.Gi,A=>f.persistence.referenceDelegate.removeReference(g,E.targetId,A)))))}catch(g){if(!yn(g))throw g;x("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const A=f.us.get(E),S=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(S);f.us=f.us.insert(E,D)}}}(r.localStore,s))}async function xT(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await hh(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(u=>{u.forEach(c=>{c.reject(new F(V.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(t,r.Ts)}}function MT(n,e){const t=q(n),r=t.La.get(e);if(r&&r.Fa)return G().add(r.key);{let i=G();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const u=t.xa.get(a);i=i.unionWith(u.view.fa)}return i}}function Ch(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ah.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NT.bind(null,e),e.Ma.R_=ET.bind(null,e.eventManager),e.Ma.Wa=TT.bind(null,e.eventManager),e}function FT(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OT.bind(null,e),e}class Ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$i(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return jE(this.persistence,new UE,e.initialUser,this.serializer)}ja(e){return new ch(bo.ei,this.serializer)}za(e){return new KE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ai.provider={build:()=>new Ai};class UT extends Ai{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Y(this.persistence.referenceDelegate instanceof Ii);const r=this.persistence.referenceDelegate.garbageCollector;return new AE(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new ch(r=>Ii.ei(r,t),this.serializer)}}class Xs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ul(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xT.bind(null,this.syncEngine),await pT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gT}()}createDatastore(e){const t=$i(e.databaseInfo.databaseId),r=function(s){return new XE(s)}(e.databaseInfo);return function(s,a,u,c){return new tT(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new rT(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>ul(this.syncEngine,t,0),function(){return rl.p()?new rl:new QE}())}createSyncEngine(e,t){return function(i,s,a,u,c,d,f){const g=new RT(i,s,a,u,c,d);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=q(i);x("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Er(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xs.provider={build:()=>new Xs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=Dc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cs(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $T(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>il(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>il(e.remoteStore,i)),n._onlineComponents=e}async function $T(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await Cs(n,new Ai)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Cs(n,new UT(void 0));return n._offlineComponents}async function bh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await cl(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await cl(n,new Xs))),n._onlineComponents}function qT(n){return bh(n).then(e=>e.syncEngine)}async function zT(n){const e=await bh(n),t=e.eventManager;return t.onListen=ST.bind(null,e.syncEngine),t.onUnlisten=bT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=PT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kT.bind(null,e.syncEngine),t}function WT(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,d){const f=new BT({next:E=>{f.eu(),a.enqueueAndForget(()=>yT(s,g));const A=E.docs.has(u);!A&&E.fromCache?d.reject(new F(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&E.fromCache&&c&&c.source==="server"?d.reject(new F(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new vT(wo(u.path),f,{includeMetadataChanges:!0,ua:!0});return _T(s,g)}(await zT(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n,e,t){if(!t)throw new F(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GT(n,e,t,r){if(e===!0&&r===!0)throw new F(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dl(n){if(!U.isDocumentKey(n))throw new F(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function or(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uo(n);throw new F(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Z_;switch(r.type){case"firstParty":return new ry(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hl.get(t);r&&(x("ComponentProvider","Removing Datastore"),hl.delete(t),r.terminate())}(this),Promise.resolve()}}function KT(n,e,t,r={}){var i;const s=(n=or(n,Bo))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=ve.MOCK_USER;else{u=dp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ve(d)}n._authCredentials=new ey(new kc(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class ar extends jo{constructor(e,t,r){super(e,t,wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new U(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Dh(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=Dc.newId()),HT("doc","path",e),n instanceof Bo){const r=se.fromString(e,...t);return dl(r),new be(n,null,new U(r))}{if(!(n instanceof be||n instanceof ar))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return dl(r),new be(n.firestore,n instanceof ar?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new fh(this,"async_queue_retry"),this.fu=()=>{const r=Ps();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ps();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new vt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Lo.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.Eu.push(i),i}pu(){this.Au&&j()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class $o extends Bo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new pl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pl(e),this._firestoreClient=void 0,await e}}}function QT(n,e){const t=typeof n=="object"?n:Bl(),r=typeof n=="string"?n:"(default)",i=ao(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cp("firestore");s&&KT(i,...s)}return i}function Nh(n){if(n._terminated)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JT(n),n._firestoreClient}function JT(n){var e,t,r;const i=n._freezeSettings(),s=function(u,c,d,f){return new yy(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,kh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(me.fromBase64String(e))}catch(t){throw new F(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hn(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=/^__.*__$/;class XT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}function Oh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ho{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ho(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Bu(e),i}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ri(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Oh(this.Mu)&&YT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ZT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$i(e)}$u(e,t,r,i=!1){return new Ho({Mu:e,methodName:t,Ku:r,path:pe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(n){const e=n._freezeSettings(),t=$i(n._databaseId);return new ZT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tv(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Fh("Data must be an object, but it was:",a,r);const u=xh(r,a);let c,d;if(s.merge)c=new De(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const E=nv(e,g,t);if(!a.contains(E))throw new F(V.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);iv(f,E)||f.push(E)}c=new De(f),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new XT(new Ce(u),c,d)}function Lh(n,e){if(Mh(n=Ne(n)))return Fh("Unsupported field value:",e,n),xh(n,e);if(n instanceof Vh)return function(r,i){if(!Oh(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let c=Lh(u,i.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=le.fromDate(r);return{timestampValue:vi(i.serializer,s)}}if(r instanceof le){const s=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vi(i.serializer,s)}}if(r instanceof zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:rh(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Po(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wo)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.qu("VectorValues must only contain numeric values.");return Ao(u.serializer,c)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Uo(r)}`)}(n,e)}function xh(n,e){const t={};return Nc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(r,i)=>{const s=Lh(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Mh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof zo||n instanceof hn||n instanceof be||n instanceof Vh||n instanceof Wo)}function Fh(n,e,t){if(!Mh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Uo(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function nv(n,e,t){if((e=Ne(e))instanceof qo)return e._internalPath;if(typeof e=="string")return Uh(n,e);throw Ri("Field path arguments must be of type string or ",n,!1,void 0,t)}const rv=new RegExp("[~\\*/\\[\\]]");function Uh(n,e,t){if(e.search(rv)>=0)throw Ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qo(...e.split("."))._internalPath}catch{throw Ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ri(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new F(V.INVALID_ARGUMENT,u+n+c)}function iv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sv extends Bh{data(){return super.data()}}function jh(n,e){return typeof e=="string"?Uh(n,e):e instanceof qo?e._internalPath:e._delegate._internalPath}class ov{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>oe(a.doubleValue));return new Wo(s)}convertGeoPoint(e){return new zo(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Li(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(tr(e));default:return null}}convertTimestamp(e){const t=At(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Y(lh(r));const i=new nr(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||nt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $h extends Bh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lv extends $h{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){n=or(n,be);const e=or(n.firestore,$o);return WT(Nh(e),n._key).then(t=>pv(e,n,t))}class hv extends ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function dv(n,e,t){n=or(n,be);const r=or(n.firestore,$o),i=av(n.converter,e);return fv(r,[tv(ev(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ze.none())])}function fv(n,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>DT(await qT(r),i,s)),s.promise}(Nh(n),e)}function pv(n,e,t){const r=t.docs.get(e._key),i=new hv(n);return new $h(n,i,e._key,r,new uv(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){gn=i})(pn),rn(new Lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new $o(new ty(r.getProvider("auth-internal")),new sy(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Et(Nu,"4.7.6",e),Et(Nu,"4.7.6","esm2017")})();const mv={apiKey:"AIzaSyBZFI5Hup69o0gFGRv1HSJqrlJ9vzSGzbA",authDomain:"projectd-e4f8e.firebaseapp.com",projectId:"projectd-e4f8e",storageBucket:"projectd-e4f8e.firebasestorage.app",messagingSenderId:"111076760983",appId:"1:111076760983:web:4ad23f559ed960169c38d2",measurementId:"G-8BW0Y6K7SD"},qh=Ul(mv),Si=Q_(qh),zh=QT(qh);function gv(){const[n,e]=b.useState(""),[t,r]=b.useState(""),[i,s]=b.useState(""),[a,u]=b.useState(""),c=eo(),d=async f=>{if(f.preventDefault(),i!==a){alert("Passwords do not match!");return}try{const E=(await Lg(Si,t,i)).user;await dv(Dh(zh,"users",E.uid),{username:n,email:t}),alert("Signup successful! Please login."),c("/login")}catch(g){console.error("Error signing up:",g.message),alert(g.message)}};return z.jsxs("div",{className:"signup-container",children:[z.jsx("h2",{children:"Signup"}),z.jsxs("form",{className:"signup-form",onSubmit:d,children:[z.jsx("input",{type:"text",placeholder:"Username",value:n,onChange:f=>e(f.target.value),required:!0}),z.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:f=>r(f.target.value),required:!0}),z.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:f=>s(f.target.value),required:!0}),z.jsx("input",{type:"password",placeholder:"Confirm Password",value:a,onChange:f=>u(f.target.value),required:!0}),z.jsx("button",{type:"submit",children:"Sign Up"})]})]})}function _v(){const[n,e]=b.useState(""),[t,r]=b.useState(""),[i,s]=b.useState(!1),a=eo(),u=async d=>{d.preventDefault();try{await xg(Si,n,t),alert("Login successful!"),a("/welcome")}catch(f){console.error("Error logging in:",f.message),alert(f.message)}},c=async d=>{d.preventDefault();try{await Og(Si,n),alert("Password reset email sent! Check your inbox."),s(!1)}catch(f){console.error("Error sending password reset email:",f.message),alert(f.message)}};return z.jsxs("div",{className:"signup-container",children:[z.jsx("h2",{children:"Login"}),i?z.jsxs("form",{className:"login-form",onSubmit:c,children:[z.jsx("h2",{children:"Reset Password"}),z.jsx("input",{type:"email",placeholder:"Enter your email",value:n,onChange:d=>e(d.target.value),required:!0}),z.jsx("button",{type:"submit",children:"Send Reset Link"}),z.jsx("button",{type:"button",className:"back-to-login-btn",onClick:()=>s(!1),children:"Back to Login"})]}):z.jsxs("form",{className:"signup-form",onSubmit:u,children:[z.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:d=>e(d.target.value),required:!0}),z.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:d=>r(d.target.value),required:!0}),z.jsx("button",{type:"submit",children:"Log In"}),z.jsx("button",{type:"button",className:"forgot-password-btn",onClick:()=>s(!0),children:"Forgot Password?"})]})]})}function yv(){af();const[n,e]=b.useState({});return b.useEffect(()=>{(async()=>{const r=Si.currentUser;if(r){const i=Dh(zh,"users",r.uid),s=await cv(i);s.exists()&&e(s.data())}})()},[]),z.jsx("div",{className:"welcome-container",children:z.jsxs("h1",{children:["Welcome, ",n.username||"User","!"]})})}function Ev(){return z.jsx(Hf,{children:z.jsxs(If,{children:[z.jsx(Bn,{path:"/",element:z.jsx(np,{})}),z.jsx(Bn,{path:"/signup",element:z.jsx(gv,{})}),z.jsx(Bn,{path:"/login",element:z.jsx(_v,{})}),z.jsx(Bn,{path:"/welcome/:username",element:z.jsx(yv,{})})," "]})})}kd.createRoot(document.getElementById("root")).render(z.jsx(b.StrictMode,{children:z.jsx(Ev,{})}));
