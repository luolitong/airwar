var l,r="undefined"==typeof browser,u=0<navigator.userAgent.indexOf("Edge/"),v=0<navigator.userAgent.indexOf("Firefox/");u&&(browser.app=chrome.app,chrome=browser);
var w=[atob("MTI3LjAuMC4xOjEwMDE="),atob("MC4xLjAuMToxMDAx")],aa=atob("cGx1Z2luLnYzLmludGVybmV0ZG93bmxvYWRtYW5hZ2VyLmNvbQ=="),ba=atob("djYuMjZiMTQ="),ca=atob("djYuMjg="),da=atob("amVhb2hobGFqZWpvZGZqYWRjcG9ucG5qZ2tpaWtvY24="),ea=atob("YWZtZHBtZGRpb2twZGtuYWVvZmRubGNsYnBnZWhoY2U="),fa=atob("Q2hyb21lX1JlbmRlcldpZGdldEhvc3RIV05E"),ga=["main_frame","sub_frame"],x="main_frame sub_frame image object xmlhttprequest other".split(" "),y=["object","xmlhttprequest","other"],ha=[301,302,303,307],z=["http://*/*",
"https://*/*"],ia=/\.([^.\\/]*?)(?:\.[0-9.]+)?$/,ja=/(?:chrome|about|chrome-extension|ms-browser-extension|moz-extension):/,ka=[atob("KjovLyouaW50ZXJuZXRkb3dubG9hZG1hbmFnZXIuY29tL2F1dG9yZWcuaHRtbA=="),atob("KjovLyouaW50ZXJuZXRkb3dubG9hZG1hbmFnZXIuY29tL2ZpbGxyZWdmb3JtLmh0bWw=")],la=new RegExp(atob("Xig/Omh0dHB8aHR0cHMpOi8vKD86d3d3XC55b3V0dWJlXC5jb20vd2F0Y2hcP3x3d3dcLmZhY2Vib29rXC5jb20vLisvKD86dmlkZW9zfHBvc3RzKS8oPzp2YlwuXGQrLyk/XGQrXGJ8cGxheWVyXC52aW1lb1wuY29tL3ZpZGVvL1xkKyk="),"i"),ma=new RegExp(atob("Xig/Oltcd1wtXStcLikqPyg/OnlvdXR1YmVcLmNvbXxnb29nbGV2aWRlb1wuY29tKSQ="),
"i"),na=atob("L3ZpZGVvcGxheWJhY2s="),oa=atob("L2FwaS90aW1lZHRleHQ="),pa=atob("L2FwaS9tYW5pZmVzdC9kYXNo"),qa=new RegExp(atob("Xig/Oltcd1wtXStcLikqPyg/OnZpbWVvXC5jb218dmltZW9jZG5cLmNvbSkk"),"i"),ra=atob("cGxheWVyLnZpbWVvLmNvbQ=="),sa=atob("L3ZpZGVvLw=="),ta=new RegExp(atob("Xig/Oltcd1wtXStcLikqP2ZiY2RuXC5uZXQk"),"i"),ua={16:1,17:2,18:4,45:8,46:16},va={http:1,https:129,ftp:2,ftps:130,rtmp:3,rtmpt:3,rtmpe:3,mms:4,idmreg:159},wa={"text/html":"HTML|HTM","text/css":"CSS","text/javascript":"JS|JSON","text/mspg-legacyinfo":"MSI|MSP",
"text/plain":"TXT","text/xml":"XML|F4M","text/x-javascript":"JS|JSON","text/x-json":"JSON","application/f4m+xml":"F4M","application/gzip":"GZ","application/javascript":"JS","application/json":"JSON","application/msword":"DOC|DOCX|DOT|DOTX","application/pdf":"PDF","application/ttaf+xml":"DFXP","application/vnd.apple.mpegurl":"M3U8","application/zip":"ZIP","application/x-7z-compressed":"7Z","application/x-aim":"PLJ","application/x-compress":"Z","application/x-compress-7z":"7Z","application/x-compressed":"ARJ",
"application/x-gtar":"TAR","application/x-gzip":"GZ","application/x-gzip-compressed":"GZ","application/x-javascript":"JS","application/x-mpegurl":"M3U8","application/x-msdos-program":"EXE|DLL","application/x-msi":"MSI","application/x-msp":"MSP","application/x-ole-storage":"MSI|MSP","application/x-rar":"RAR","application/x-rar-compressed":"RAR","application/x-sdlc":"EXE|SDLC","application/x-shockwave-flash":"SWF","application/x-silverlight-app":"XAP","application/x-tar":"TAR","application/x-zip":"ZIP",
"application/x-zip-compressed":"ZIP","video/3gpp":"3GP|3GPP","video/3gpp2":"3GP|3GPP","video/avi":"AVI","video/flv":"FLV","video/mp2t":"TS","video/mp4":"MP4|M4V","video/mpeg":"MPG|MPEG","video/mpg4":"MP4|M4V","video/msvideo":"AVI","video/quicktime":"MOV","video/webm":"WEBM","video/x-mp4":"MP4|M4V","video/x-mpg4":"MP4|M4V","video/x-ms-asf":"ASF","video/x-ms-wmv":"WMV","video/x-msvideo":"AVI","video/x-flash-video":"FLV","video/x-flv":"FLV","audio/3gpp":"3GP|3GPP","audio/3gpp2":"3GP|3GPP","audio/mp3":"MP3",
"audio/mp4":"M4A|MP4","audio/mp4a-latm":"M4A|MP4","audio/mpeg":"MP3","audio/mpeg4-generic":"M4A|MP4","audio/webm":"WEBM","audio/wav":"WAV","audio/x-mpeg":"MP3","audio/x-ms-wma":"WMA","audio/x-wav":"WAV","ilm/tm":"MP3","image/gif":"GIF|GFA","image/icon":"ICO|CUR","image/jpg":"JPG|JPEG","image/jpeg":"JPG|JPEG","image/png":"PNG|APNG","image/tiff":"TIF|TIFF","image/vnd.microsoft.icon":"ICO|CUR","image/webp":"WEBP","image/x-icon":"ICO|CUR","flv-application/octet-stream":"FLV"};
function B(){this.b=this.constructor.prototype.f++}B.prototype.f=1;function xa(a,b,c,d){this.id=a;this.port=b;this.b=c;this.url=d}xa.prototype.a=0;function ya(a,b,c){this.id=[a,b].toString();this.b=0>c?null:[a,c].toString()}
function C(a,b,c,d,e,f){if(a){c=["MSG#",a,"#",b,"#",c,"#",d];this.g=a;this.f=b;this.h=d;this.a=e||[];this.i=c;if(e)for(a=0;a<e.length;a++)c.push(":",e[a]||0);if(f)for(var g in f)if(e=f[g],null!=e)if(c.push(",",g,"="),"number"==typeof e)c.push(e);else{b=a=e.length;for(d=0;d<b;){var h=e.charCodeAt(d++);128<=h&&(2048<=h?(a+=2,h-55296&56320||d++):a++)}c.push(a,":",e)}}else this.c=new FileReader}function za(a){a.N||(a.i.push(";"),a.N=!0);return new Blob(a.i)}
function Aa(a,b,c){a.N?a.u(a):(b.a=c||0,b.b=0,a.c.onload=a.Ka.bind(a,b),E(a,b,0,50))}l=C.prototype;
l.Ka=function(a){for(var b=this.c.result;;)switch(a.b){case 0:var c=b.split(",",2),d=c.shift().split(":",2),e=d.shift();if(!d.length){if(!c.length)return this.u(this);a.b=1}var f=e.length+1,d=e.split("#",6);if(5!=d.length||"MSG"!=d[0])return this.u(this);this.g=parseInt(d[1]);this.f=parseInt(d[2]);this.h=parseInt(d[4]);b=b.slice(f);a.a+=f;a.b++;break;case 1:d=b.split(",",2);e=d.shift();if(!d.length){d=b.split(";",2);if(2>d.length)return E(this,a,b.length,100);a.b=4}f=e.length+1;this.a=d=e.split(":");
for(e=0;e<d.length;e++)c=d[e],d[e]=c.includes(".")?parseFloat(c):parseInt(c);b=b.slice(f);a.a+=f;a.b++;break;case 2:c=b.split(",",2);2>c.length&&(c=b.split(";",2));var d=c.shift().split(":",2),g=d.shift(),f=g.length,e=!1;if(d.length)f++;else{if(!c.length)return E(this,a,b.length,25);e=!0}d=g.split("=",3);if(2!=d.length)return this.u(this);c=parseInt(d[0]);d=parseInt(d[1]);a.a+=f;a.b++;if(e){this[c]=d;b=b.slice(f);a.b++;break}a.f=c;a.c=d;b=a.c;f=a.a;a=a.slice(f,f+b);a.size==b?this.c.readAsText(a):
this.u(this);return;case 3:return this[a.f]=b,a.a+=a.c,a.b++,E(this,a,0,21);case 4:switch(b[0]){case ",":a.b=2;b=b.slice(1);break;case ";":a.b++;break;default:return this.u(this)}a.a++;break;case 5:this.N=!0;this.K(this);a.size>a.a&&(b=new C,b.K=this.K,b.u=this.u,Aa(b,a,a.a));return}};function E(a,b,c,d){var e=b.a;c=e+c;b.size>c?a.c.readAsBinaryString(b.slice(e,c+d)):a.u(a)}l.j=null;l.K=null;l.u=null;l.N=!1;
function F(){var a=this.constructor.prototype,b;for(b in a)b.startsWith("_")||"constructor"==b||(this[b]=a[b].bind(this));b=navigator.userAgent;a=b.match(/\b(?!(?:Safari|Chrome|Gecko)\/)\w+\/(\d+)(?:.(\d+))?(?:.(\d+))?(?:.(\d+))?\b(?!.*[()])/);if(b=v?a:b.match(/\bChrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)\b/)){this.R=b[1]<<24|b[2]<<22|b[3]<<8|b[4];this.pa=b[0];this.ja=a?a[0]:b[0];this.ma=[];this.ia=!1;this.c={};this.o={};this.a={};this.l={};this.b={};this.i={};this.f={};this.g={};this.w={};this.T="";this.U=
!0;this.Ga=this.oa=this.Fa=1;this.h=null;this.P=1;this.A=!1;this.ha=this.O=0;this.la=null;this.S=this.H=!1;this.Ea=chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_link"),contexts:["link"],onclick:this.Ha,enabled:!1});this.Da=chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_all"),contexts:["page"],onclick:this.ra,enabled:!1});this.na=chrome.contextMenus.create({title:chrome.i18n.getMessage("menu_download_selected"),contexts:["selection"],onclick:this.ra,
enabled:!1});this.v=[this.Ea,this.Da,this.na];chrome.windows.onCreated.addListener(this.wa);chrome.windows.onRemoved.addListener(this.xa);chrome.windows.onFocusChanged.addListener(this.Xa);chrome.tabs.onActivated.addListener(this.Ra);chrome.tabs.onUpdated.addListener(this.Ta);chrome.tabs.onAttached&&chrome.tabs.onAttached.addListener(this.Sa);a=chrome.runtime.getBrowserInfo;b=chrome.webRequest.ResourceType;a&&a(this.Ya);b&&b.MEDIA&&x.push("media")&&y.push("media");try{chrome.windows.getAll({windowTypes:["normal",
"popup"]},this.ta)}catch(c){chrome.windows.getAll(this.ta)}this.W()}}l=F.prototype;l.Ya=function(a){var b=a.version.split(/\D+/);this.R=b[0]<<24|b[1]<<22|b[2]<<8|b[3];this.pa=this.ja=a.name+"/"+a.version};function Ba(a,b,c,d,e){a=a.f;return b in a?a[b]:a[b]=new xa(b,c,d,e)}function G(a,b){var c=a.g,d=b.requestId;c[d]=b;var e=b.id;e||(e=b.id=u?a.Ga++:d);e!=d&&(c[e]=b,c=a.l[[b.tabId,b.frameId]])&&(c.a=e)}function H(a,b){var c=a.i[b];c&&delete a.i[b];return c}
l.W=function(){var a=new WebSocket("ws://"+w[this.O%w.length]+"/?cid="+Math.random().toString().substr(2,9),aa);this.qa=a;a.onopen=this.va;a.onclose=this.Z;a.onmessage=this.Qa;1==a.readyState?this.va():3==a.readyState&&this.Z()};l.va=function(){this.A=!0;this.oa=1;var a={};a[112]=this.ja;a[113]=this.pa;a[114]=fa;I(this,2,0,[3,1,7,0],a)};
l.Z=function(){this.qa=null;if(this.A){this.A=!1;this.w={};for(var a=this.ma,b=0;b<a.length;b++){var c=a[b],d=c.splice(0,2).pop();a.splice(b--,1);u&&c.splice(1);d.removeListener.apply(d,c)}for(b=0;b<this.v.length;b++)chrome.contextMenus.update(this.v[b],{enabled:!1});this.ia=!1}a=++this.O;b=w.length;10>a/b&&(a==b&&this.U&&this.V(),!a||a%b?this.W():window.setTimeout(this.W,15E3))};l.Qa=function(a){var b=new C;b.K=this.Ma;b.u=this.Z;Aa(b,a.data)};
function I(a,b,c,d,e){if(!a.A)return!1;var f=a.oa++;b=new C(f,b,1,c,d,e);a.qa.send(za(b));c&1&&(a.w[f]=b);return!0}
function Ca(a,b){var c=a.g;if(b.a){var d=b.a[6],e=d&&c[d];if(e){var f=e.type;return!f||"image"==f||e.c?(b.j=e.port.id,b.l=d,!0):!1}}var g=a.a,h=a.f,k=b[6],m=b[17],n=b[50],p=b[7],t,A;for(d in c){var e=c[d],q=e.url;if(q){if(q==k||q==m)if(f=e.type,!f||"image"==f||e.c)return b.j=e.port.id,b.l=parseInt(d),!0;q==n&&(A=e.port.id)}}for(d in h)if(c=h[d],q=c.url){if(q==k||q==m||q==n)if(e=c.port,p&&(f=g[e.tabId])&&f.url!=p&&(e=null),e)return b.j=e.id,!0;q==p&&(t=c.port.id)}return null!=A?(b.j=A,!0):null!=t?
(b.j=t,!0):!1}l.sa=function(a,b,c,d){if(b)return d?(b=(c=d.shift())&&this.a[c.id])?a.j=b.id:null:null;if(null!=a.j)return a.j;if(a.a){var e=a.a[7];if(e&&this.o[e])return a.j=e}if(Ca(this,a))return a.j;d=this.o;var f=a[50],g=a[7];for(e in d){b=d[e];if(b.url==f){a.j=e;break}null==a.j&&b.url==g&&(a.j=e)}if(null!=a.j)return a.j;g&&chrome.tabs.query({url:g},J(this,a,!0,c));return null};
l.X=function(a,b,c,d,e){var f=a.tabId,g=a.frameId,h=a.windowId,k;if(void 0===b&&(b=new K(this,a,!0),null==h&&(a.a?(chrome.tabs.get(f,L(b,2)),chrome.windows.getLastFocused(L(b,3))):(h=this.a[f],a.windowId=h&&h.windowId)),null==g&&a.url&&chrome.webNavigation.getAllFrames({tabId:f},L(b,4)),b.c()))return;c&&0<=c.index?a.windowId=c.windowId:d&&(a.windowId=d.id);if(e)for(d=e.length-1;0<=d;d--)if(c=e[d],!c.Za&&c.frameId&&c.url==a.url){g=a.frameId=c.frameId;k=c.parentFrameId;break}null==g?a.url||a.postMessage([11,
f,null,!0,a.b]):(e=[f,g].toString(),c=this.l[e],this.a[e]=a,0<=k&&(a.c=[f,k].toString()),c&&(a.i=c.a,a.b=c.c,(k=c.D)&&a.url!=k&&(a.D=k),!a.c&&c.b&&(a.c=c.b)),a.postMessage([11,f,g,!a.url,a.b]))};l.ca=function(a,b,c,d){var e=M(a,!0);if(!e)return 0;if(1==e&&void 0===d)return chrome.cookies.getAll({url:a},J(this,a,b,c)),-1;"object"==typeof d&&(d=N(d));var e=[e],f={};f[6]=a;f[8]=c;f[51]=d;f[54]=navigator.userAgent;f[7]=b;I(this,14,0,e,f);return 3};
l.Aa=function(a,b,c,d,e){if(!d){if(!a||!a.length)return;c||(c={});var f=new K(this,a,b,c,!0);c.Ca&&!c.ya&&chrome.cookies.getAll({url:c.Ca},L(f,4));for(var g=0;g<a.length;g++)chrome.cookies.getAll({url:a[g][0]},L(f,g+5));if(f.c())return}e&&(c.ya=N(e));for(g=0;g<a.length;g++)a[g][4]=N(arguments[g+5]);var f=0,g=[a.length],h={8:4};h[54]=navigator.userAgent;h[7]=c.Ca;h[110]=c.F;h[111]=c.ya;1<a.length&&(I(this,15,f,g,h),f=16,h={});for(var g=[0],k;k=a.shift();)h[6]=k[0],h[102]=k[2],h[50]=k[3],h[51]=k[4],
I(this,14,f,g,h)};function O(a,b,c,d){(b=b[c])?(b=d?b.replace(/\./g,"\\.").replace(/\?/g,".").replace(/\*/g,".*").replace(/~/g,"(?:.*\\.)?"):b.replace(/\?/g,".").replace(/\*/g,".*"),b="^(?:"+b+")$"):b="(?!)";a.c[c]=new RegExp(b,"i")}
function P(a,b,c,d,e,f,g,h){if(!d||a.c[-8]){var k=a.a[b];if(k){var m;m=new B;m=a.i[m.b]=m;var n=m.b;m.tabId=b;m.port=k;m.l=c;m.c=0;m.o=[];if(k=d&&!!e)m.A=!0,m.v=e,m.h=f,m.i=g,m.zoom=h,e.a||Q(a,e);e="^(?:http|https|ftp|ftps|rtmp|rtmpt|rtmpe|mms)://";d&&(d=a.c[12])&&(d=d.replace(/\./g,"\\."),d=d.replace(/\*/g,".*"),d=d.replace(/\~/g,"(?:.*\\.)?"),e=e+"(?:[^\\/]*@)?(?:"+d+")(?::\\d+)?(?:\\W|$)");m.g=R(a,b,[12,n,c,k,e]);m.w=0;m.g||H(a,n)}}}
l.G=function(a,b,c){if(4294967295==a)this.h=null,c=!0;else{var d=this.f[a];if(d){c=d.a;if(!c)return;if(b)switch(c){case 3:return;case 2:break;default:d.a=3;window.setTimeout(this.G.bind(null,a,!1,!0),1E3);return}d.a=0;c=!0}}c&&I(this,8,32,[a])};function Da(a,b){var c=a.b[b];if(c&&c.L){var d=c.border,e=c.scale;I(a,7,0,[b,d,c.fa,Math.round(c.width*e)-d,Math.round(c.height*e)-d])}}
function S(a,b,c,d){var e=a.f[b],f=256;2==e.a&&(d?(f|=128,e.a=1):f|=64);var g,h,k,m,n;c&&(g=c.left,h=c.top,k=c.right||g+1,m=c.bottom||h+1,n=c.zoom,c=e.port.f)&&(g+=c.left,h+=c.top,k=Math.min(k+c.left,c.right),m=Math.min(m+c.top,c.bottom));I(a,9,f,[b,g,h,k,m,n])}
l.J=function(a){var b=this.b,c=[];if(a)(a=b[a])&&(a.B||a.C||c.push(a.s));else for(var d in b)a=b[d],a.B||a.C||c.push(a.s);if(c.length){b=[15,null,null];a={};var e=this.f;for(d in e){var f=e[d];f.a&&0<=c.indexOf(f.port.tabId)&&(f.b?(f=f.port,f.a||Q(this,f,null,a),b[2]=d,f.postMessage(b)):S(this,d,null,!0))}}};function T(a,b,c){if((b=a.b[b])&&!b.C){b=b.s;var d=c?0:2;c=c?32:64;var e=a.f,f;for(f in e){var g=e[f];g.a&&g.port.tabId==b&&g.a!=d&&(g.a=d,I(a,8,c,[f]))}}}
function U(a,b,c,d){var e=a.ha,f=(e&b)!=((c?63:32)&b);a.ha=c?e|=b:e&=~b;f&&(c=a.c[-1],b=a.c[-2],c=a.H=0!=c&&(e&c)==c,e=a.S=0!=b&&(e&b)==b,a.la=(c||e)&&d||null)}l.ga=function(a,b,c,d){var e=this.b[a];if(e)if(d)e.C&&window.clearTimeout(e.C),e.C=window.setTimeout(this.ga.bind(null,a,b,c),d);else if(e.C=null,b&&(chrome.windows.get(a,this.I),chrome.tabs.query({windowId:a,active:!0},this.I)),c){if((a=this.b[a])&&!a.C){a=a.s;b=this.f;for(var f in b)c=b[f],c.a&&c.port.tabId==a&&1==c.a&&I(this,8,1152,[f])}}else this.J(a)};
l.I=function(a){a instanceof Array&&(a=a.shift());if(a){var b=a.windowId||a.id,c=this.b[b];if(c){var d=!!a.windowId;if(!(d&&c.ready&&ja.test(a.url))){if(d)c.s=a.id,a.width&&(c.ea=a.width),a.height&&(c.da=a.height);else{var d="fullscreen"==a.state,e=d!=c.B;c.width=a.width;c.height=a.height;c.left=a.left;c.top=a.top;c.Ja="maximized"==a.state;c.B="fullscreen"==a.state;e&&(d?T(this,b):this.J(b))}var f=c.ea,d=c.da;if(f&&d){var g=c.width,e=c.height;if(!c.ready){if(f>g||d>e)return chrome.windows.get(b,this.I);
c.ready=!0}a=c.scale;f=(g-f)/2;25>=f&&(c.border=Math.round(f*a));d=e-d-c.border;150>=d&&(c.fa=Math.round(d*a))}Da(this,b)}}}};function Q(a,b,c,d){a=a.a;c=[16,c];for(var e=[b],f;f=a[b.c];b=f){if(d)if(d[b.id])break;else d[b.id]=!0;e.push(f)}for(f=e.pop();b=e.pop();f=b)d=b.Ia,c[2]=d,c[3]=b.frameId,c[4]=d?null:b.url,c[5]=d?null:b.D,f.postMessage(c)}function R(a,b,c){a=a.a;b=[b,null].toString();var d=0,e;for(e in a)e.startsWith(b)&&(a[e].postMessage(c),d++);return d}
l.M=function(a){function b(a){a;chrome.runtime.lastError}var c={file:"content.js",runAt:"document_start",allFrames:!0};620756992<=this.R&&(c.matchAboutBlank=!0);if(a instanceof Array)for(;a.length;)try{chrome.tabs.executeScript(a.shift().id,c,b)}catch(d){}else try{chrome.tabs.executeScript(a.id||a,c,b)}catch(d){}};function Ea(a,b){"object"!=typeof b&&(b=a.b[b]);b&&null==b.L&&I(a,6,17,[b.id,0,b.width,b.height,b.left,b.top,b.scale])}l.ta=function(a){for(;a.length;)this.wa(a.shift(),!0)};
l.Ha=function(a){a.linkUrl&&this.ca(a.linkUrl,a.pageUrl,4)};l.ra=function(a,b){P(this,b.id,a.menuItemId==this.na)};
l.Na=function(a){var b=a.sender.tab;if(b&&!(0>b.id)){var c=a.id;null==c&&(c=a.id=a.portId_||this.Fa++);var d=b.id,e="top"==a.name;a.tabId=d;a.windowId=0>b.index?null:b.windowId;a.g=!0;a.h=!1;a.a=e;a.frameId=e?0:a.sender.frameId;a.l=0;a.url=a.sender.url||e&&b.url||null;a.D=null;this.o[c]=a;e&&(this.a[d]=a);a.onMessage.addListener(this.Oa.bind(this,a));a.onDisconnect.addListener(this.Y);this.X(a)}};
l.Y=function(a,b){if(a.g){b||(a.g=!1);var c=this.f,d=this.g,e=this.i,f,g,h;for(h in c)if(f=c[h],f.port===a)f.a&&this.G(h),delete c[h];for(h in d)(g=d[h],g.port!==a||g.v)||(delete d[h],u&&delete d[g.id]);for(h in e)e[h].port===a&&delete e[h];this.la===a&&U(this,63,!1);if(!b){c=a.tabId;d=a.frameId;e=[c,d].toString();f=this.l;for(h in f)e==f[h].b&&delete f[h];a.a&&delete this.a[c];delete this.a[[c,d]];delete this.o[a.id]}}};
l.Oa=function(a,b){switch(b[0]){case 21:var c=b[1];c&&(a.url=c,null==a.frameId&&this.X(a));break;case 22:var d=this.a,e=d[[a.tabId,b[2]]],c=b[4];e.Ia=b[3];e.f=c;if(d=d[e.c])if(d=d.f)c.left+=d.left,c.top+=d.top,c.right=Math.min(c.right+d.left,d.right),c.bottom=Math.min(c.bottom+d.top,d.bottom);break;case 23:var c=a.windowId,f=a.tabId,g=b[1],d=b[2],e=b[4],h=this.b[c];if(g){if(g=H(this,g)){var h=f==h.s&&!h.B,k=!d||!e;k&&(d=f);if(f=b[7])g.a&&g.F&&g.a!=g.F||(g.a=f),g.F=f;var m=Ba(this,d,a,k?null:b[5],
k?null:b[6]),n=h&&!m.a;m.a=h?1:2;g instanceof C&&V(this,g,2,(h?128:64)|(k?512:0),c,d,f);k||(S(this,d,e),n&&window.setTimeout(this.J.bind(null,c),3E3))}}else b[3]?(this.G(d,!0),delete this.f[d]):e&&f==h.s&&!h.B&&S(this,d,e,!0);break;case 24:c=b[2];(d=this.i[b[1]])&&c&&(d.a&&d.F&&d.a!=d.F||(d.a=c),d.F=c);break;case 25:Ba(this,b[1],a,b[2],b[3]);break;case 26:P(this,a.tabId,!0,!0,a,b[1],b[2],b[3]);break;case 27:if(c=this.i[b[1]]){d=c.o;if(e=b[4])if("string"==typeof e&&(e=JSON.parse(e)),e instanceof Array){if(g=
b[5])for(h=0;h<e.length;h++)e[h][3]=g;Array.prototype.push.apply(d,e)}b[3]&&(c.c+=b[3]);b[6]&&(c.pageUrl=b[6]);b[7]&&(c.F=b[7]);++c.w<c.g||(H(this,c.b),c.A?(d=this.b[c.port.windowId])&&d.s==c.tabId&&c.c&&(c.frame=c.v.f,e=c.zoom,I(this,10,0,[4294967295,d.id,Math.round(c.h*e)+d.border,Math.round(c.i*e)+d.fa,0,c.c]),this.h=c.tabId,R(this,c.tabId,[13,!0])):d.length?this.Aa(d,c.l,c.H):window.alert(chrome.i18n.getMessage("cannot_find_links")))}break;case 28:this.G(4294967295);break;case 29:Fa(this,a.windowId,
a.tabId);break;case 30:Fa(this,a.windowId,a.tabId,b[1],b[2]);break;case 31:(c=ua[b[1]])&&U(this,c,b[2],a);break;case 32:0==b[1]&&U(this,32,b[2],a);break;case 33:U(this,63,!1);break;case 34:if(c=b[2],d=b[3],e=a.o||a.i)e=[e,c],g={},h=32,g[110]=b[1],g[115]=d,-2==c&&(h|=16),I(this,16,h,e,g)}};
l.Ma=function(a){var b=a.f,c=a.h,d=a.a,e;if(1==b){var f=d[0];if(e=this.w[f])b=e.f,delete this.w[f]}switch(b){case 3:this.O=-1;this.T=a[13]||"m"+d[2];if(c=d[4]){c/=96;a=this.R;this.P=620756992>a?1:620756992<=a&&621284967>a?c:637534208<=a&&638078312>a?c:1.25<c?c:1;c=this.b;a=this.P;for(var g in c)d=c[g],d=[g,d.L,d.width,d.height,d.left,d.top,d.scale=a],I(this,6,17,d)}this.U&&this.V();break;case 4:g=this.c;g[-9]=0<(c&64);g[-8]=0<(c&32);g[-4]=0<(c&2);g[-1]=d[0];g[-2]=d[1];g[12]=a[12];O(this,a,1);O(this,
a,2);O(this,a,3);O(this,a,4);O(this,a,10);O(this,a,9,!0);O(this,a,11,!0);if(g=a[13])this.T=g;if(!this.ia){this.ia=!0;this.m(1,chrome.runtime.onConnect,this.Na);this.m(1,chrome.webNavigation.onCommitted,this.ua);this.m(1,chrome.webNavigation.onHistoryStateUpdated,this.La);this.ka?(this.m(2,chrome.webRequest.onBeforeRequest,this.$,{urls:["*://*/*"],types:x},["requestBody","blocking"]),this.m(2,chrome.webRequest.onBeforeSendHeaders,this.aa,{urls:["*://*/*"],types:x},["requestHeaders","blocking"]),this.m(2,
chrome.webRequest.onHeadersReceived,this.ba,{urls:["*://*/*"],types:x},["responseHeaders","blocking"])):(this.m(2,chrome.webRequest.onBeforeRequest,this.$,{urls:["http://*/*"],types:ga}),this.m(2,chrome.webRequest.onBeforeRequest,this.$,{urls:["https://*/*"],types:x},["requestBody","blocking"]),this.m(2,chrome.webRequest.onBeforeSendHeaders,this.aa,{urls:["http://*/*"],types:x},["requestHeaders"]),this.m(2,chrome.webRequest.onBeforeSendHeaders,this.aa,{urls:["https://*/*"],types:x},["requestHeaders",
"blocking"]),this.m(2,chrome.webRequest.onHeadersReceived,this.ba,{urls:["http://*/*"],types:x},["responseHeaders"]),this.m(2,chrome.webRequest.onHeadersReceived,this.ba,{urls:["https://*/*"],types:x},["responseHeaders","blocking"]));this.m(3,chrome.webRequest.onResponseStarted,this.Wa,{urls:["<all_urls>"],types:x});this.m(3,chrome.webRequest.onErrorOccurred,this.Va,{urls:["<all_urls>"],types:x});this.m(3,chrome.webRequest.onBeforeRequest,this.Ua,{urls:ka,types:ga},["blocking"]);for(g=0;g<this.v.length;g++)chrome.contextMenus.update(this.v[g],
{enabled:!0});chrome.tabs.query({url:z[0]},this.M);chrome.tabs.query({url:z[1]},this.M)}break;case 5:g=d[0];(a=this.b[g])?(c=0!=(c&128),a.B!=c&&(a.B=c)&&T(this,g)):this.xa(g);break;case 6:if(c&4)break;g=e.a[0];c=d[1];if(a=this.b[g])a.L=c,Da(this,g);break;case 8:g=d[0];c&=32;if(4294967295==g)R(this,this.h,[13,!1]),this.h=null;else if(g=this.f[g])g.a=c?0:2;break;case 11:g=d[0];4294967295==g&&(P(this,this.h,!0,!0),this.h=null);break;case 12:try{var h=a.a[5],k=a[4];g=4==h?2:3;if((1==h||2==h)&&Ca(this,
a)){if(this.c[3].test(k))1==h?g=4:h=4;else if(this.c[-4]||this.c[4].test(k))g=4;a[8]|=256}if(4==h){switch(a.a[4]){case 1:a[7]||(a[7]=a[50]);break;case 3:a[7]||(a[7]=a[32]),a[50]||(a[50]=a[31])}this.za(a)}else V(this,a,g)}catch(m){V(this,a,0)}break;case 13:W(this,e.a[0],null,3==d[1]);break;case 1:break;default:!e&&c&1&&I(this,1,0,[a.g,0,0,0])}};
l.za=function(a,b,c){try{if(null==a.j)if(!b){var d=new K(this,a,!0);this.sa(a,null,d)||chrome.windows.getLastFocused(L(d,2));if(d.c())return}else if(c){var e=this.b[c.id],f=this.a[e&&e.s];f&&(a.j=f.id)}f=this.o[a.j];if(!f)return V(this,a,0);var g;var h=a.b;h||(h=B.prototype.f++,a.b=h,this.i[h]=a);g=h;if(!f.a){var k=this.a[f.tabId];k&&k.postMessage([14,g])}var m=[15,g,null,a[6],a[17],a[50],a[31]];f.a||Q(this,f,g);f.postMessage(m)}catch(n){V(this,a,0)}};
function V(a,b,c,d,e,f,g){-1!=c&&(e=[b.g,c,e,f],f={},f[8]=b[8],g&&(f[110]=g),I(a,1,d|(0==c?4:2),e,f))}l.ua=function(a,b){var c=this.a[[a.tabId,a.frameId]];if(c)if(b){var d=a.url;d!=c.url&&(c.url=d,c.l++,la.test(d)&&(c.b=!0),this.Y(c,!0),c.postMessage([17,!1,c.b]))}else this.Y(c)};l.La=function(a){return this.ua(a,!0)};
l.wa=function(a,b){var c=a.id,d={id:c,width:a.width,height:a.height,left:a.left,top:a.top,scale:this.P,border:8,fa:73,Ja:"maximized"==a.state,B:"fullscreen"==a.state,da:0,ea:0,s:0,ready:!v,L:null,C:null};this.b[c]=d;chrome.tabs.query({windowId:c,active:!0},this.I);chrome.tabs.query({windowId:c,url:z[0]},this.M);chrome.tabs.query({windowId:c,url:z[1]},this.M);b&&Ea(this,d)};l.xa=function(a){I(this,5,32,[a]);delete this.b[a]};
l.Xa=function(a){if(0<a){var b=this.b[a];b&&(Ea(this,b),u&&this.ga(a,!1,!0,500))}};l.Ta=function(a,b,c){var d=c.windowId,e=this.b[d];e&&!e.s&&this.I(c);"complete"==b.status&&(a=this.a[a])&&!a.h&&(a.h=!0,this.J(d))};l.Ra=function(a){this.ha=0;this.h&&this.G(4294967295);var b=a.windowId;a=a.tabId;var c=this.a[a];c&&!c.windowId&&(c.windowId=b);if(c=this.b[b])T(this,b),c.s=a,chrome.tabs.get(a,this.I),this.J(b)};
l.Sa=function(a,b){var c=b.$a,d=this.o,e;for(e in d)(port=d[e])&&port.tabId==a&&(port.windowId=c);T(this,c,!0)};function Fa(a,b,c,d,e){a.h&&a.G(4294967295);var f=a.b[b];f&&f.s==c&&(d&&(f.ea=d),e&&(f.da=e),T(a,b),a.ga(b,d||e,!1,250))}
function X(a,b){a.sendRequest(b,5);var c=b.requestHeaders,d=new XMLHttpRequest;d.timeout=1E4;d.onreadystatechange=a.Pa.bind(null,d,b.id);d.open("GET",b.url,!0);for(var e=0;e<c.length;e++){var f=c[e];f.name.toLowerCase().startsWith("x-")&&d.setRequestHeader(f.name,f.value)}d.send();return 2}l.Pa=function(a,b){if(4==a.readyState){var c=[b,0],d={};200==a.status&&(d[115]=a.responseText);I(this,16,48,c,d)}};
function Ga(a,b){if(b.f)return b.l=3,b.b|=2052,5;var c=a.c,d=new URL(b.url),e=Y(d.pathname);if(e&&!d.search&&b.h&&c[2].test(e))return 1;if(!v||b.c||d.search||c[9].test(d.hostname)||!c[1].test(e))return 4;b.l=1;b.b|=8;return 5}
function Ha(a,b){if(b.H)return a.sendRequest(b,6),1;var c=b.f,d=b.statusCode;if(!c&&200!=d&&206!=d)return 1;var e=a.c,f=b.url,d=b.c,g=Z(b.responseHeaders,"Content-Type"),h=Z(b.responseHeaders,"Content-Disposition"),k=Ia(g).toLowerCase(),m="attachment"==Ia(h).toLowerCase();if(!c){var n=b.h&&!m&&"text/html"==k;if(b.v)if(n){var p=a.l[[b.tabId,b.frameId]];p&&(p.c=!0);a.sendRequest(b,5)}else"application/json"==k&&(p=a.a[[b.tabId,b.frameId]])&&p.b&&(p.o=b.id,a.sendRequest(b,5));if(n)return 1}if(b.i||!d&&
!e[-9])return 1;var n=c,p=!1,f=new URL(f),t=f.hostname,A=f.pathname,q=Ja(h,"filename")||Ja(g,"name"),h=q&&Y(q),D=!1,g=!1;if(q)if(h||c)D=g=!0,b.fileName=q,b.w=h;else if(!d)return 1;g||(q=A.split("/").pop(),h=Y(q));if(!c){q=ma.test(t);if(d&&q){if(A.startsWith(oa)&&"text/xml"==k&&a.sendRequest(b,5),A.startsWith(pa)&&"video/vnd.mpeg.dash.mpd"==k)return X(a,b)}else if(d&&qa.test(t)){if("M4S"==h)return 1;if(t==ra&&A.startsWith(sa)&&"application/json"==k)return X(a,b)}else if(m&&ta.test(t)&&"image"==b.type&&
"MP4"==h)return 1;if(!D){if(t=wa[k])if(t=t.split("|"),h&&0<=t.indexOf(h))D=!0;else if(d||!h)h=t.shift(),D=!0;if(!h)if(d&&q&&A==na)p=!0;else return 1;!h||D||!m&&k&&!e[10].test(k)||(D=!0);D&&(b.w=h)}if(d&&D&&"M3U8"==h)return X(a,b);if(d&&"ASF"==h&&((k=Z(b.responseHeaders,"Content-Length"))&&102400>=parseInt(k)||"DCLK-AdSvr"==Z(b.responseHeaders,"Server")))return 1;d&&e[3].test(h)?p=!0:e[1].test(h)&&(n=d?!e[-4]&&!e[4].test(h):!0)}if(!n&&!p||(e=p?e[11]:c?null:e[9])&&e.test(f.hostname))return 1;b.l=n?
2:4;b.b|=c?2052:p?256:(d?4096:0)|(g||m?16:8);return n?3:2}
l.sendRequest=function(a,b,c){var d=a.a,e=a.requestHeaders;if(1==(d&31)&&null==e&&void 0===c)return chrome.cookies.getAll({url:a.url},J(this,a,b)),!0;"object"==typeof c&&(c=N(c));var f=a.id,g=a.port&&a.port.id,h=a.timeStamp,k=a.responseHeaders,m=a.A,n=a.b;null==b&&(b=a.l);d&64&&(n|=2097152);"POST"==a.method&&(n|=512);var p=0,d=[f,g,Math.floor(h/1E3),Math.floor(h%1E3*1E3),d&31,b],f={};v&&4>b&&(p|=1);a.c&&(p|=16);f[6]=Ka(a.url);f[17]=a.D;f[4]=a.w;f[100]=a.fileName;f[8]=n;f[11]=La(e);f[13]=La(k);f[18]=
La(m);a.g&&(f[14]=Ma(a.g,Z(e,"Content-Type")));a.o&&(f[19]=Ma(a.o,Z(m,"Content-Type")));null==e&&(f[50]=a.port&&a.port.url,f[51]=c,f[54]=navigator.userAgent);if(a=this.a[a.tabId])f[7]=a.url,f[110]=a.title;return I(this,13,p,d,f)};
function W(a,b,c,d){var e=a.g,f=e[b],g;d&&(c||r?g={redirectUrl:chrome.extension.getURL("captured.html")}:g={cancel:!0});if(f){delete e[b];u&&delete e[f.id];(b=f.resolve)&&void 0!==d&&(f.resolve=f.reject=null,b(g||{}));if(d=f.reject)f.resolve=f.reject=null,d();f.c&&(e[f.id]={url:f.url,port:f.port});!f.l||b||d||((c=c&&c.ip)&&c.includes(":")&&(f.b|=4194304),a.sendRequest(f))}return g}
l.Ua=function(a){var b=a.url,c=new URL(b);if(b.search.startsWith("?d="))return a=this.a[a.tabId],this.ca("idmreg:"+b.substr(c.protocol.length),a&&a.url),{redirectUrl:chrome.extension.getURL("captured.html")}};
l.$=function(a){var b=a.tabId,c=a.frameId;if(!(0>b||0>c)){var d=a.requestId,e=a.url,f=M(e),g=a.type.endsWith("_frame");if(g){var h;h=[b,c].toString();var k=this.l;h=h in k?k[h]:k[h]=new ya(b,c,a.parentFrameId);h.a!=d&&(h.a=d,h.D=e,h.url=null,h.c=!1)}if(this.ka||f&128){e=this.H;h=this.S;k=!0;if(!h&&"POST"==a.method&&a.requestBody){var m=a.requestBody,n=m.raw;if(n)for(var p=0;p<n.length&&(n[p].bytes||(n=null));p++);n||m.formData?(n=this.g[d])?n.requestBody=m:G(this,a):k=!1}if(e&&k)switch(a.a=f,a.g=
a.requestBody,a.h=g,a.c=0<=y.indexOf(a.type),a.f=e,a.i=h,a.port=this.a[[b,c]],Ga(this,a)){case 5:if(v)return new Promise(this.Ba.bind(this,a));case 3:return W(this,d,null,!0)}}}};
l.aa=function(a){var b=a.tabId;if(0<b){var c=a.requestId,d=a.url,e=a.method,f=M(d);if(!f||"GET"!=e&&"POST"!=e)return W(this,c);a.f=this.H;a.i=this.S;var g=this.g[c];g&&(a.id=g.id,a.port=g.port,a.g=g.requestBody,g.a&&(a.D=g.D||g.url,a.A=g.A||g.requestHeaders,a.o=g.o||g.g,a.f=g.f,a.i=g.i));var g=a.type,h=g.endsWith("_frame");if(!a.port&&!(a.port=this.a[[b,a.frameId]])&&!h||"POST"==e&&!a.g)return W(this,c);d.includes("#")&&(a.url=Ka(d));a.a=f;a.h=h;a.c=0<=y.indexOf(g);a.v=la.test(d);switch(Ga(this,a)){case 5:if(v)return new Promise(this.Ba.bind(this,
a));if(!a.f)break;case 3:return W(this,c,null,!0);case 1:return W(this,c)}G(this,a)}return null};l.Ba=function(a,b,c){a.resolve=b;a.reject=c;G(this,a);this.sendRequest(a)};
l.ba=function(a){var b=a.requestId,c=this.g[b];if(c){var d=a.responseHeaders;if("image"==c.type){var e=Z(d,"Content-Type");if(e&&e.toLowerCase().startsWith("image/"))return W(this,b)}"quic"==Z(d,"Client-Protocol")?c.a|=64:(e=Z(d,"Alternate-Protocol"))&&e.endsWith(":quic,p=0")&&"chunked"!=Z(d,"Transfer-Encoding")&&(c.a|=64);if(this.ka||c.a&192){var e=a.statusLine,f=parseInt(e.split(" ",2).pop());c.statusLine=e;c.statusCode=f;c.H=0<=ha.indexOf(f);c.responseHeaders=d;if(3==Ha(this,c))return(a.ip||u)&&
W(this,b,a),r?{responseHeaders:[{name:"Connection",value:"close"},{name:"Content-Type",value:"multipart/related"},{name:"Content-Length",value:"0"}]}:{redirectUrl:chrome.extension.getURL("captured.html")}}}};l.Wa=function(a){var b=a.requestId,c=this.g[b];if(c){if(c.h){var d=this.l[[c.tabId,c.frameId]];d&&(d.url=c.url)}W(this,b,a)}};l.Va=function(a){W(this,a.requestId)};
l.V=function(a,b,c,d,e){if(void 0===a&&(this.U=!1,a=new K(this,!0),chrome.storage.local.get("version",L(a,1)),r&&(chrome.extension.isAllowedIncognitoAccess(L(a,2)),chrome.management.get(da,L(a,3)),chrome.management.get(ea,L(a,4))),a.c()))return;a=chrome.runtime.getManifest();a=a.version||"";"object"==typeof b&&(b=b.version||"");r&&("object"==typeof d&&(d=d.enabled&&d.id),d&&chrome.management.setEnabled(d,!1),"object"==typeof e&&(e=e.enabled&&e.id),e&&chrome.management.setEnabled(e,!1),c=null!=c&&
!c);if(a&&a!=b&&null!=b){chrome.storage.local.set({version:a});d=this.T;var f=d<(u?ba:v?ca:0);if(!b||!d||f||e)a="current="+a,b&&(a+="&previous="+b),c&&(a+="&incognito=1"),e&&(a+="&mulsrch=1"),d&&(a+="&manager="+d),f&&(a+="&update=1"),u&&(a+="&msedge=1"),v&&(a+="&mzffox=1"),chrome.tabs.create({url:chrome.extension.getURL("welcome.html?"+a)})}};
l.m=function(a,b){var c=Array.prototype.slice.call(arguments);if(v||u){var d=c[2];c[2]=function(){return d.apply(null,arguments)}}this.ma.push(c);b.addListener.apply(b,c.slice(2))};function K(a){this.caller=arguments.callee.caller;this.f=a;this.b=Array.prototype.slice.call(arguments,1);this.a=0}function L(a,b){a.a++;return a.h.bind(a,b)}K.prototype.c=function(){return this.a?(arguments.length&&(this.b=Array.prototype.slice.call(arguments)),!0):!1};
K.prototype.h=function(a,b){chrome.runtime.lastError;this.b[a]=b;0==--this.a&&this.caller.apply(this.f,this.b)};K.prototype.g=function(a,b,c){var d=Array.prototype.slice.call(arguments,3);c&&(d=c.concat(d));a.apply(b,d);this&&0==--this.a&&this.caller.apply(this.f,this.b)};function J(a){var b=Array.prototype.slice.call(arguments,1),c=b[b.length-1];c instanceof K?c.a++:c=null;return K.prototype.g.bind(c,arguments.callee.caller,a,b)}
function Ka(a){var b=a.lastIndexOf("#");return 0>b||b<a.indexOf("?")?a:a.substr(0,b)}function N(a){var b="";if(a&&a.length)for(var c=0;c<a.length;c++)b&&(b+="; "),b+=a[c].name,b+="=",b+=a[c].value;return b}function La(a){if(!a||!a.length)return null;for(var b="",c=0;c<a.length;c++)b+=a[c].name,b+=": ",b+=a[c].value,b+="\n";return b}function Z(a,b){if(!a)return null;b=b.toLowerCase();for(var c=0;c<a.length;c++)if(a[c].name.toLowerCase()==b)return a[c].value;return null}
function Ja(a,b){if(!a)return null;b=b.toLowerCase();var c=a.split(";");c.shift();for(var d=0;d<c.length;d++){var e=c[d],f=e.indexOf("=");if(0<f){var g=e.substr(0,f).trim().toLowerCase(),h="*"==g[g.length-1];h&&(g=g.substr(0,g.length-1).trimRight());if(g==b)return c=e.substr(f+1).trim(),d=c.length-1,'"'==c[0]&&'"'==c[d]&&(c=c.substring(1,d)),h&&(c=c.split("'",3).pop()),unescape(c)}else if(0>f&&e.trim().toLowerCase()==b)return""}return null}
function Ia(a){return a&&unescape(a.split(";",1).shift().trim())||""}
function Ma(a,b){if(!a)return null;var c=a.raw;if(c){for(var d=String.fromCharCode,e="",f=0;f<c.length;f++){var g=c[f].bytes;if(!g)return null;for(var g=new Uint8Array(g),h=g.length,k=0;k<h;k++)e+=d(g[k])}return e}c=a.formData;if(!c)return null;f=Ia(b).toLowerCase();e=[];if("application/x-www-form-urlencoded"==f)for(d in c)for(g=c[d],d=d.split(" ").map(encodeURIComponent).join("+"),f=0;f<g.length;f++)e.length&&e.push("&"),e.push(d,"=",g[f].split(" ").map(encodeURIComponent).join("+"));else if("multipart/form-data"==
f){(h=Ja(b,"boundary"))||(h="----WebKitFormBoundary"+Math.random().toString(36).substr(2));for(d in c)for(g=c[d],f=0;f<g.length;f++)e.push("--",h,'\r\nContent-Disposition: form-data; name="',d,'"\r\n\r\n',g[f],"\r\n");e.push("--",h,"--\r\n")}else return null;return e.join("")}function Y(a){return(a=ia.exec(a))?a.pop().toUpperCase():""}function M(a,b){var c=a.split("://",1).shift().toLowerCase(),c=va[c]||0;return b?c&31:c}
String.prototype.startsWith||(String.prototype.startsWith=function(a,b){return this.substr(b||0,a.length)===a});String.prototype.endsWith||(String.prototype.endsWith=function(a,b){b=(null==b||b>this.length?this.length:b)-a.length;return 0<=b&&this.lastIndexOf(a,b)==b});String.prototype.includes||(String.prototype.includes=function(a,b){return 0<=this.indexOf(a,b)});new F;
