(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(1789)}])},1789:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return eJ},default:function(){return eQ}});var r,l,i=n(5893),o=n(7294);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=["children","options"],u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},p=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,h=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,k=/^ *> ?/gm,m=/^ {2,}\n/,y=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,_=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,H=/^(?:\n *)*\n/,O=/\r\n?/g,b=/^\[\^([^\]]+)](:.*)\n/,M=/^\[\^([^\]]+)]/,S=/\f/g,$=/^\s*?\[(x|\s)\]/,I=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,E=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,C=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,N=/^<!--[\s\S]*?(?:-->)/,B=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,w=/^\{.*\}$/,T=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,j=/^<([^ >]+@[^ >]+)>/,F=/^<([^ >]+:\/[^ >]+)>/,P=/-([a-z])?/gi,X=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,z=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,W=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,R=/(\[|\])/g,U=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,J=/ *$/,Q=/^ *:-+: *$/,K=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,et=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,en=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,er=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,el=/^\\([^0-9A-Za-z\s])/,ei=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,eo=/^\n+/,ea=/^([ \t]*)/,ec=/\\([^\\])/g,eu=/ *\n+$/,es=/(?:^|\n)( *)$/,ep="(?:\\d+\\.)",ef="(?:[*+-])";function ed(e){return"( *)("+(1===e?ep:ef)+") +"}let eh=ed(1),eg=ed(2);function ek(e){return RegExp("^"+(1===e?eh:eg))}let em=ek(1),ey=ek(2);function ev(e){return RegExp("^"+(1===e?eh:eg)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ep:ef)+" )[^\\n]*)*(\\n|$)","gm")}let ex=ev(1),e_=ev(2);function eH(e){let t=1===e?ep:ef;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let eO=eH(1),eb=eH(2);function eM(e,t){let n=1===t,r=n?eO:eb,i=n?ex:e_,o=n?em:ey;return{t(e,t,n){let l=es.exec(n);return l&&(t.o||!t._&&!t.u)?r.exec(e=l[1]+e):null},i:l.HIGH,l(e,t,r){let l=n?+e[2]:void 0,a=e[0].replace(h,"\n").match(i),c=!1;return{p:a.map(function(e,n){let l;let i=o.exec(e)[0].length,u=RegExp("^ {1,"+i+"}","gm"),s=e.replace(u,"").replace(o,""),p=n===a.length-1,f=-1!==s.indexOf("\n\n")||p&&c;c=f;let d=r._,h=r.o;r.o=!0,f?(r._=!1,l=s.replace(eu,"\n\n")):(r._=!0,l=s.replace(eu,""));let g=t(l,r);return r._=d,r.o=h,g}),m:n,g:l}},h:(t,n,r)=>e(t.m?"ol":"ul",{key:r.k,start:t.g},t.p.map(function(t,l){return e("li",{key:l},n(t,r))}))}}let eS=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,e$=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eI=[g,v,x,I,E,A,N,X,ex,eO,e_,eb],eA=[...eI,/^[^\n]+(?:  \n|\n{2,})/,L,G];function eE(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eL(e){return Y.test(e)?"right":Q.test(e)?"center":K.test(e)?"left":null}function eC(e,t,n){let r=n.$;n.$=!0;let l=t(e.trim(),n);n.$=r;let i=[[]];return l.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==l.length-1&&i.push([]):("text"!==e.type||null!=l[t+1]&&"tableSeparator"!==l[t+1].type||(e.v=e.v.replace(J,"")),i[i.length-1].push(e))}),i}function eN(e,t,n){n._=!0;let r=eC(e[1],t,n),l=e[2].replace(V,"").split("|").map(eL),i=e[3].trim().split("\n").map(function(e){return eC(e,t,n)});return n._=!1,{S:l,A:i,L:r,type:"table"}}function eB(e,t){return null==e.S[t]?{}:{textAlign:e.S[t]}}function eG(e){return function(t,n){return n._?e.exec(t):null}}function ew(e){return function(t,n){return n._||n.u?e.exec(t):null}}function eT(e){return function(t,n){return n._||n.u?null:e.exec(t)}}function ej(e){return function(t){return e.exec(t)}}function eF(e,t,n){if(t._||t.u||n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every(e=>!eI.some(t=>t.test(e))&&(r+=e+"\n",e.trim()));let l=r.trimEnd();return""==l?null:[r,l]}function eP(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(t){return null}return e}function eX(e){return e.replace(ec,"$1")}function ez(e,t,n){let r=n._||!1,l=n.u||!1;n._=!0,n.u=!0;let i=e(t,n);return n._=r,n.u=l,i}function eW(e,t,n){return n._=!1,e(t,n)}let eD=(e,t,n)=>({v:ez(t,e[1],n)});function eR(){return{}}function eU(){return null}function eZ(e,t,n){let r=e,l=t.split(".");for(;l.length&&void 0!==(r=r[l[0]]);)l.shift();return r||n}(r=l||(l={}))[r.MAX=0]="MAX",r[r.HIGH=1]="HIGH",r[r.MED=2]="MED",r[r.LOW=3]="LOW",r[r.MIN=4]="MIN";var eq=e=>{let{children:t,options:n}=e,r=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(l[n]=e[n]);return l}(e,c);return o.cloneElement(function(e,t={}){let n;t.overrides=t.overrides||{},t.slugify=t.slugify||eE,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},s,t.namedCodesToUnicode):s;let r=t.createElement||o.createElement;function i(e,n,...l){let i=eZ(t.overrides,`${e}.props`,{});return r(function(e,t){let n=eZ(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:eZ(t,`${e}.component`,e):e}(e,t.overrides),a({},n,i,{className:function(...e){return e.filter(Boolean).join(" ")}(null==n?void 0:n.className,i.className)||void 0}),...l)}function c(e){let n,r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===U.test(e));let l=Y(K(r?e:`${e.trimEnd().replace(eo,"")}

`,{_:r}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===t.wrapper)return l;let a=t.wrapper||(r?"span":"div");if(l.length>1||t.forceWrapper)n=l;else{if(1===l.length)return"string"==typeof(n=l[0])?i("span",{key:"outer"},n):n;n=null}return o.createElement(a,{key:"outer"},n)}function h(e){let t=e.match(f);return t?t.reduce(function(e,t,n){let r=t.indexOf("=");if(-1!==r){var l,i;let a=(-1!==(l=t.slice(0,r)).indexOf("-")&&null===l.match(B)&&(l=l.replace(P,function(e,t){return t.toUpperCase()})),l).trim(),s=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(r+1).trim()),p=u[a]||a,f=e[p]=(i=s,"style"===a?i.split(/;\s?/).reduce(function(e,t){let n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===a?eP(i):(i.match(w)&&(i=i.slice(1,i.length-1)),"true"===i||"false"!==i&&i));"string"==typeof f&&(L.test(f)||G.test(f))&&(e[p]=o.cloneElement(c(f.trim()),{key:n}))}else"style"!==t&&(e[u[t]||t]=!0);return e},{}):null}let V=[],J={},Q={blockQuote:{t:eT(g),i:l.HIGH,l:(e,t,n)=>({v:t(e[0].replace(k,""),n)}),h:(e,t,n)=>i("blockquote",{key:n.k},t(e.v,n))},breakLine:{t:ej(m),i:l.HIGH,l:eR,h:(e,t,n)=>i("br",{key:n.k})},breakThematic:{t:eT(y),i:l.HIGH,l:eR,h:(e,t,n)=>i("hr",{key:n.k})},codeBlock:{t:eT(x),i:l.MAX,l:e=>({v:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(e,t,n)=>i("pre",{key:n.k},i("code",a({},e.O,{className:e.M?`lang-${e.M}`:""}),e.v))},codeFenced:{t:eT(v),i:l.MAX,l:e=>({O:h(e[3]||""),v:e[4],M:e[2]||void 0,type:"codeBlock"})},codeInline:{t:ew(_),i:l.LOW,l:e=>({v:e[2]}),h:(e,t,n)=>i("code",{key:n.k},e.v)},footnote:{t:eT(b),i:l.MAX,l:e=>(V.push({I:e[2],j:e[1]}),{}),h:eU},footnoteReference:{t:eG(M),i:l.HIGH,l:e=>({v:e[1],B:`#${t.slugify(e[1])}`}),h:(e,t,n)=>i("a",{key:n.k,href:eP(e.B)},i("sup",{key:n.k},e.v))},gfmTask:{t:eG($),i:l.HIGH,l:e=>({R:"x"===e[1].toLowerCase()}),h:(e,t,n)=>i("input",{checked:e.R,key:n.k,readOnly:!0,type:"checkbox"})},heading:{t:eT(t.enforceAtxHeadings?A:I),i:l.HIGH,l:(e,n,r)=>({v:ez(n,e[2],r),T:t.slugify(e[2]),C:e[1].length}),h:(e,t,n)=>i(`h${e.C}`,{id:e.T,key:n.k},t(e.v,n))},headingSetext:{t:eT(E),i:l.MAX,l:(e,t,n)=>({v:ez(t,e[1],n),C:"="===e[2]?1:2,type:"heading"})},htmlComment:{t:ej(N),i:l.HIGH,l:()=>({}),h:eU},image:{t:ew(e$),i:l.HIGH,l:e=>({D:e[1],B:eX(e[2]),F:e[3]}),h:(e,t,n)=>i("img",{key:n.k,alt:e.D||void 0,title:e.F||void 0,src:eP(e.B)})},link:{t:eG(eS),i:l.LOW,l:(e,t,n)=>({v:function(e,t,n){let r=n._||!1,l=n.u||!1;n._=!1,n.u=!0;let i=e(t,n);return n._=r,n.u=l,i}(t,e[1],n),B:eX(e[2]),F:e[3]}),h:(e,t,n)=>i("a",{key:n.k,href:eP(e.B),title:e.F},t(e.v,n))},linkAngleBraceStyleDetector:{t:eG(F),i:l.MAX,l:e=>({v:[{v:e[1],type:"text"}],B:e[1],type:"link"})},linkBareUrlDetector:{t:(e,t)=>t.N?null:eG(T)(e,t),i:l.MAX,l:e=>({v:[{v:e[1],type:"text"}],B:e[1],F:void 0,type:"link"})},linkMailtoDetector:{t:eG(j),i:l.MAX,l(e){let t=e[1],n=e[1];return d.test(n)||(n="mailto:"+n),{v:[{v:t.replace("mailto:",""),type:"text"}],B:n,type:"link"}}},orderedList:eM(i,1),unorderedList:eM(i,2),newlineCoalescer:{t:eT(H),i:l.LOW,l:eR,h:()=>"\n"},paragraph:{t:eF,i:l.LOW,l:eD,h:(e,t,n)=>i("p",{key:n.k},t(e.v,n))},ref:{t:eG(z),i:l.MAX,l:e=>(J[e[1]]={B:e[2],F:e[4]},{}),h:eU},refImage:{t:ew(W),i:l.MAX,l:e=>({D:e[1]||void 0,P:e[2]}),h:(e,t,n)=>i("img",{key:n.k,alt:e.D,src:eP(J[e.P].B),title:J[e.P].F})},refLink:{t:eG(D),i:l.MAX,l:(e,t,n)=>({v:t(e[1],n),Z:t(e[0].replace(R,"\\$1"),n),P:e[2]}),h:(e,t,n)=>J[e.P]?i("a",{key:n.k,href:eP(J[e.P].B),title:J[e.P].F},t(e.v,n)):i("span",{key:n.k},t(e.Z,n))},table:{t:eT(X),i:l.HIGH,l:eN,h:(e,t,n)=>i("table",{key:n.k},i("thead",null,i("tr",null,e.L.map(function(r,l){return i("th",{key:l,style:eB(e,l)},t(r,n))}))),i("tbody",null,e.A.map(function(r,l){return i("tr",{key:l},r.map(function(r,l){return i("td",{key:l,style:eB(e,l)},t(r,n))}))})))},tableSeparator:{t:function(e,t){return t.$?(t._=!0,q.exec(e)):null},i:l.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:ej(ei),i:l.MIN,l:e=>({v:e[0].replace(C,(e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e)}),h:e=>e.v},textBolded:{t:ew(ee),i:l.MED,l:(e,t,n)=>({v:t(e[2],n)}),h:(e,t,n)=>i("strong",{key:n.k},t(e.v,n))},textEmphasized:{t:ew(et),i:l.LOW,l:(e,t,n)=>({v:t(e[2],n)}),h:(e,t,n)=>i("em",{key:n.k},t(e.v,n))},textEscaped:{t:ew(el),i:l.HIGH,l:e=>({v:e[1],type:"text"})},textMarked:{t:ew(en),i:l.LOW,l:eD,h:(e,t,n)=>i("mark",{key:n.k},t(e.v,n))},textStrikethroughed:{t:ew(er),i:l.LOW,l:eD,h:(e,t,n)=>i("del",{key:n.k},t(e.v,n))}};!0!==t.disableParsingRawHTML&&(Q.htmlBlock={t:ej(L),i:l.HIGH,l(e,t,n){let[,r]=e[3].match(ea),l=RegExp(`^${r}`,"gm"),i=e[3].replace(l,""),o=eA.some(e=>e.test(i))?eW:ez,a=e[1].toLowerCase(),c=-1!==p.indexOf(a);n.N=n.N||"a"===a;let u=c?e[3]:o(t,i,n);return n.N=!1,{O:h(e[2]),v:u,G:c,H:c?a:e[1]}},h:(e,t,n)=>i(e.H,a({key:n.k},e.O),e.G?e.v:t(e.v,n))},Q.htmlSelfClosing={t:ej(G),i:l.HIGH,l:e=>({O:h(e[2]||""),H:e[1]}),h:(e,t,n)=>i(e.H,a({},e.O,{key:n.k}))});let K=((n=Object.keys(Q)).sort(function(e,t){let n=Q[e].i,r=Q[t].i;return n!==r?n-r:e<t?-1:1}),function(e,t){return function e(t,r){let l=[],i="";for(;t;){let o=0;for(;o<n.length;){let a=n[o],c=Q[a],u=c.t(t,r,i);if(u){let s=u[0];t=t.substring(s.length);let p=c.l(u,e,r);null==p.type&&(p.type=a),l.push(p),i=s;break}o++}}return l}(e.replace(O,"\n").replace(S,"").replace(Z,"    "),t)}),Y=function e(t,n={}){var r;if(Array.isArray(t)){let l=n.k,i=[],o=!1;for(let a=0;a<t.length;a++){n.k=a;let c=e(t[a],n),u="string"==typeof c;u&&o?i[i.length-1]+=c:null!==c&&i.push(c),o=u}return n.k=l,i}return r=e,Q[t.type].h(t,r,n)},ec=c(e);return V.length?i("div",null,ec,i("footer",{key:"footer"},V.map(function(e){return i("div",{id:t.slugify(e.j),key:e.j},e.j,Y(K(e.I,{_:!0})))}))):ec}(t,n),r)};let eV=e=>{let{frontmatter:t,content:n}=e,r=JSON.parse(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"font-bold text-[2em]",children:r.title}),(0,i.jsx)("article",{className:"prose lg:prose-xl",children:(0,i.jsx)(eq,{children:n})})]})};var eJ=!0,eQ=eV}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);