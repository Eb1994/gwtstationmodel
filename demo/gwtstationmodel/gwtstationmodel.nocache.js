function gwtstationmodel(){var I='',Tb='\n--><\/script>',hb='" for "gwt:onLoadErrorFn"',fb='" for "gwt:onPropertyErrorFn"',Ib='"<script src=\\"',S='"><\/script>',U='#',Sb=');',Jb='.cache.js\\"><\/scr" + "ipt>"',W='/',vb='0EB525E08AE697D8D0F70570A6E99E60',wb='1FEE28A79E4B38CB56D55FF33F706499',xb='94A684937BDE54FEF7C61CD1D9D5CA22',R='<script id="',Kb='<script><!--\n',cb='=',V='?',eb='Bad handler "',yb='C09692B2294BA40536A12063C24D7B3A',sb='Cross-site hosted mode not yet implemented. See issue ',zb='D7F5DF2881952824C9D92C684F3B750F',Gb='DOMContentLoaded',T='SCRIPT',Q='__gwt_marker_gwtstationmodel',X='base',M='begin',L='bootstrap',Z='clear.cache.gif',bb='content',Rb='document.write(',P='end',Nb='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',Pb='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',pb='gecko',qb='gecko1_8',N='gwt.hybrid',Ab='gwt/standard/standard.css',gb='gwt:onLoadErrorFn',db='gwt:onPropertyErrorFn',ab='gwt:property',J='gwtstationmodel',Fb='head',Eb='href',tb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',ob='ie6',nb='ie8',Y='img',Bb='link',Hb='loadExternalRefs',$='meta',Mb='moduleName:"gwtstationmodel", sessionId:$sessionId, subSystem:"startup",',O='moduleStartup',mb='msie',_='name',jb='opera',Cb='rel',lb='safari',ub='selectingPermutation',K='startup',Db='stylesheet',Ob='type: "end"});',Qb='type: "moduleRequested"});',rb='unknown',ib='user.agent',kb='webkit',Lb='window.__gwtStatsEvent && window.__gwtStatsEvent({';var k=window,l=document,m=k.__gwtStatsEvent?function(a){return k.__gwtStatsEvent(a)}:null,n,o,p=I,q={},r=[],s=[],t=[],u,v;m&&m({moduleName:J,sessionId:$sessionId,subSystem:K,evtGroup:L,millis:(new Date).getTime(),type:M});if(!k.__gwt_stylesLoaded){k.__gwt_stylesLoaded={}}if(!k.__gwt_scriptsLoaded){k.__gwt_scriptsLoaded={}}function w(){try{return k.external&&(k.external.gwtOnLoad&&k.location.search.indexOf(N)==-1)}catch(a){return false}}
function x(){if(n&&o){n(u,J,p);m&&m({moduleName:J,sessionId:$sessionId,subSystem:K,evtGroup:O,millis:(new Date).getTime(),type:P})}}
function y(){var e,f=Q,g;l.write(R+f+S);g=l.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=T){e=e.previousSibling}function h(a){var b=a.lastIndexOf(U);if(b==-1){b=a.length}var c=a.indexOf(V);if(c==-1){c=a.length}var d=a.lastIndexOf(W,Math.min(c,b));return d>=0?a.substring(0,d+1):I}
;if(e&&e.src){p=h(e.src)}if(p==I){var i=l.getElementsByTagName(X);if(i.length>0){p=i[i.length-1].href}else{p=h(l.location.href)}}else if(p.match(/^\w+:\/\//)){}else{var j=l.createElement(Y);j.src=p+Z;p=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function z(){var b=document.getElementsByTagName($);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(_),g;if(f){if(f==ab){g=e.getAttribute(bb);if(g){var h,i=g.indexOf(cb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=I}q[f]=h}}else if(f==db){g=e.getAttribute(bb);if(g){try{v=eval(g)}catch(a){alert(eb+g+fb)}}}else if(f==gb){g=e.getAttribute(bb);if(g){try{u=eval(g)}catch(a){alert(eb+g+hb)}}}}}}
function C(a,b){var c=t;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function D(a){var b=s[a](),c=r[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(v){v(a,d,b)}throw null}
s[ib]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(b.indexOf(jb)!=-1){return jb}else if(b.indexOf(kb)!=-1){return lb}else if(b.indexOf(mb)!=-1){if(document.documentMode>=8){return nb}else{var d=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){var e=c(d);if(e>=6000){return ob}}}}else if(b.indexOf(pb)!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){if(c(d)>=1008)return qb}return pb}return rb};r[ib]={gecko:0,gecko1_8:1,ie6:2,ie8:3,opera:4,safari:5};gwtstationmodel.onScriptLoad=function(a){gwtstationmodel=null;n=a;x()};if(w()){alert(sb+tb);return}y();z();m&&m({moduleName:J,sessionId:$sessionId,subSystem:K,evtGroup:L,millis:(new Date).getTime(),type:ub});var E;try{C([jb],vb);C([pb],wb);C([qb],xb);C([ob],yb);C([nb],yb);C([lb],zb);E=t[D(ib)]}catch(a){return}var F;function G(){if(!o){o=true;if(!__gwt_stylesLoaded[Ab]){var a=l.createElement(Bb);__gwt_stylesLoaded[Ab]=a;a.setAttribute(Cb,Db);a.setAttribute(Eb,p+Ab);l.getElementsByTagName(Fb)[0].appendChild(a)}x();if(l.removeEventListener){l.removeEventListener(Gb,G,false)}if(F){clearInterval(F)}}}
if(l.addEventListener){l.addEventListener(Gb,function(){G()},false)}var F=setInterval(function(){if(/loaded|complete/.test(l.readyState)){G()}},50);m&&m({moduleName:J,sessionId:$sessionId,subSystem:K,evtGroup:L,millis:(new Date).getTime(),type:P});m&&m({moduleName:J,sessionId:$sessionId,subSystem:K,evtGroup:Hb,millis:(new Date).getTime(),type:M});var H=Ib+p+E+Jb;l.write(Kb+Lb+Mb+Nb+Ob+Lb+Mb+Pb+Qb+Rb+H+Sb+Tb)}
gwtstationmodel();