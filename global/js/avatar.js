// Jdenticon 2.1.0 | jdenticon.com | MIT licensed | (c) 2014-2018 Daniel Mester Pirttijärvi
(function(q,y,z){var t=z(q,q.jQuery);"undefined"!==typeof module&&"exports"in module?module.exports=t:"function"===typeof define&&define.amd?define([],function(){return t}):q[y]=t})(this,"jdenticon",function(q,y){function z(a,b,c){for(var d=document.createElementNS("http://www.w3.org/2000/svg",b),f=2;f+1<arguments.length;f+=2)d.setAttribute(arguments[f],arguments[f+1]);a.appendChild(d)}function t(a){this.b=Math.min(Number(a.getAttribute("width"))||100,Number(a.getAttribute("height"))||100);for(this.a=
a;a.firstChild;)a.removeChild(a.firstChild);a.setAttribute("viewBox","0 0 "+this.b+" "+this.b);a.setAttribute("preserveAspectRatio","xMidYMid meet")}function K(a){this.b=a;this.a='\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"'+a+'" height\x3d"'+a+'" viewBox\x3d"0 0 '+a+" "+a+'" preserveAspectRatio\x3d"xMidYMid meet"\x3e'}function N(a){return function(a){for(var b=[],d=0;d<a.length;d++)for(var f=a[d],e=28;0<=e;e-=4)b.push((f>>>e&15).toString(16));return b.join("")}(function(a){for(var b=
1732584193,d=4023233417,f=2562383102,e=271733878,h=3285377520,k=[b,d,f,e,h],g=0;g<a.length;g++){for(var u=a[g],l=16;80>l;l++){var A=u[l-3]^u[l-8]^u[l-14]^u[l-16];u[l]=A<<1|A>>>31}for(l=0;80>l;l++)A=(b<<5|b>>>27)+(20>l?(d&f^~d&e)+1518500249:40>l?(d^f^e)+1859775393:60>l?(d&f^d&e^f&e)+2400959708:(d^f^e)+3395469782)+h+u[l],h=e,e=f,f=d<<30|d>>>2,d=b,b=A|0;k[0]=b=k[0]+b|0;k[1]=d=k[1]+d|0;k[2]=f=k[2]+f|0;k[3]=e=k[3]+e|0;k[4]=h=k[4]+h|0}return k}(function(a){function b(a,b){for(var c=[],d=-1,e=0;e<b;e++)d=
e/4|0,c[d]=(c[d]||0)+(f[a+e]<<8*(3-(e&3)));for(;16>++d;)c[d]=0;return c}var d=encodeURI(a),f=[];a=0;var e,h=[];for(e=0;e<d.length;e++){if("%"==d[e]){var k=r(d,e+1,2);e+=2}else k=d.charCodeAt(e);f[a++]=k}f[a++]=128;for(e=0;e+64<=a;e+=64)h.push(b(e,64));d=a-e;e=b(e,d);64<d+8&&(h.push(e),e=b(0,0));e[15]=8*a-8;h.push(e);return h}(a)))}function E(a,b){var c=a.canvas.width,d=a.canvas.height;a.save();this.b=a;b?this.a=b:(this.a=Math.min(c,d),a.translate((c-this.a)/2|0,(d-this.a)/2|0));a.clearRect(0,0,this.a,
this.a)}function v(a){a|=0;return 0>a?"00":16>a?"0"+a.toString(16):256>a?a.toString(16):"ff"}function F(a,b,c){c=0>c?c+6:6<c?c-6:c;return v(255*(1>c?a+(b-a)*c:3>c?b:4>c?a+(b-a)*(4-c):a))}function O(a){"undefined"!=typeof MutationObserver&&(new MutationObserver(function(b){for(var c=0;c<b.length;c++){for(var d=b[c],f=d.addedNodes,e=0;f&&e<f.length;e++){var h=f[e];if(1==h.nodeType)if(g.w(h))a(h);else{h=h.querySelectorAll(g.A);for(var k=0;k<h.length;k++)a(h[k])}}"attributes"==d.type&&g.w(d.target)&&
a(d.target)}})).observe(document.body,{childList:!0,attributes:!0,attributeFilter:[g.o,g.s,"width","height"],subtree:!0})}function r(a,b,c){return parseInt(a.substr(b,c),16)}function p(a){return(10*a+.5|0)/10}function L(){this.j=""}function G(a){this.b={};this.h=a;this.a=a.b}function M(a){this.h=a;this.c=w.a}function P(a,b){a=b.O(a);return[m.i(a,b.H,b.G(0)),m.i(a,b.v,b.u(.5)),m.i(a,b.H,b.G(1)),m.i(a,b.v,b.u(1)),m.i(a,b.v,b.u(0))]}function B(a,b){this.x=a;this.y=b}function w(a,b,c,d){this.b=a;this.c=
b;this.h=c;this.a=d}function H(a,b,c,d,f,e,h){function k(e,f,k,h,g){h=h?r(b,h,1):0;f=f[r(b,k,1)%f.length];a.D(p[n[e]]);for(e=0;e<g.length;e++)m.c=new w(c+g[e][0]*l,d+g[e][1]*l,l,h++%4),f(m,l,e);a.F()}function g(a){if(0<=a.indexOf(q))for(var b=0;b<a.length;b++)if(0<=n.indexOf(a[b]))return!0}h.C&&a.m(h.C);e=.5+f*(void 0===e?.08:e)|0;f-=2*e;var m=new M(a),l=0|f/4;c+=0|e+f/2-2*l;d+=0|e+f/2-2*l;var p=P(r(b,-7)/268435455,h),n=[];for(f=0;3>f;f++){var q=r(b,8+f,1)%p.length;if(g([0,4])||g([2,3]))q=1;n.push(q)}k(0,
I.I,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]);k(1,I.I,4,5,[[0,0],[3,0],[3,3],[0,3]]);k(2,I.M,1,null,[[1,1],[2,1],[2,2],[1,2]]);a.finish()}function J(){function a(a,b){var d=c[a];d&&1<d.length||(d=b);return function(a){a=d[0]+a*(d[1]-d[0]);return 0>a?0:1<a?1:a}}var b=n.config||q.jdenticon_config||{},c=b.lightness||{},d=b.saturation||{},f="color"in d?d.color:d;d=d.grayscale;return{O:function(a){var c=b.hues,d;c&&0<c.length&&(d=c[0|.999*a*c.length]);return"number"==typeof d?(d/360%1+1)%
1:a},v:"number"==typeof f?f:.5,H:"number"==typeof d?d:0,u:a("color",[.4,.8]),G:a("grayscale",[.3,.9]),C:m.parse(b.backColor)}}function C(a){return/^[0-9a-f]{11,}$/i.test(a)&&a}function D(a){return N(null==a?"":""+a)}function x(a,b,c){if("string"===typeof a){if(g.J){a=document.querySelectorAll(a);for(var d=0;d<a.length;d++)x(a[d],b,c)}}else if(d=g.w(a))if(b=C(b)||null!=b&&D(b)||C(a.getAttribute(g.s))||a.hasAttribute(g.o)&&D(a.getAttribute(g.o)))a=d==g.B?new G(new t(a)):new E(a.getContext("2d")),H(a,
b,0,0,a.a,c,J())}function n(){g.J&&x(g.A)}function Q(){var a=(n.config||q.jdenticon_config||{}).replaceMode;"never"!=a&&(n(),"observe"==a&&O(x))}t.prototype={m:function(a,b){b&&z(this.a,"rect","width","100%","height","100%","fill",a,"opacity",b)},c:function(a,b){z(this.a,"path","fill",a,"d",b)}};K.prototype={m:function(a,b){b&&(this.a+='\x3crect width\x3d"100%" height\x3d"100%" fill\x3d"'+a+'" opacity\x3d"'+b.toFixed(2)+'"/\x3e')},c:function(a,b){this.a+='\x3cpath fill\x3d"'+a+'" d\x3d"'+b+'"/\x3e'},
toString:function(){return this.a+"\x3c/svg\x3e"}};var g={B:1,L:2,s:"data-jdenticon-hash",o:"data-jdenticon-value",J:"undefined"!==typeof document&&"querySelectorAll"in document,w:function(a){if(a){var b=a.tagName;if(/svg/i.test(b))return g.B;if(/canvas/i.test(b)&&"getContext"in a)return g.L}}};g.A="["+g.s+"],["+g.o+"]";E.prototype={m:function(a){var b=this.b,c=this.a;b.fillStyle=m.K(a);b.fillRect(0,0,c,c)},D:function(a){this.b.fillStyle=m.K(a);this.b.beginPath()},F:function(){this.b.fill()},f:function(a){var b=
this.b,c;b.moveTo(a[0].x,a[0].y);for(c=1;c<a.length;c++)b.lineTo(a[c].x,a[c].y);b.closePath()},g:function(a,b,c){var d=this.b;b/=2;d.moveTo(a.x+b,a.y+b);d.arc(a.x+b,a.y+b,b,0,2*Math.PI,c);d.closePath()},finish:function(){this.b.restore()}};var m={P:function(a,b,c){return"#"+v(a)+v(b)+v(c)},parse:function(a){if(/^#[0-9a-f]{3,8}$/i.test(a)){if(6>a.length){var b=a[1],c=a[2],d=a[3];a=a[4]||"";return"#"+b+b+c+c+d+d+a+a}if(7==a.length||8<a.length)return a}},K:function(a){var b=r(a,7,2);return isNaN(b)?
a:"rgba("+r(a,1,2)+","+r(a,3,2)+","+r(a,5,2)+","+(b/255).toFixed(2)+")"},N:function(a,b,c){if(0==b)return a=v(255*c),"#"+a+a+a;b=.5>=c?c*(b+1):c+b-c*b;c=2*c-b;return"#"+F(c,b,6*a+2)+F(c,b,6*a)+F(c,b,6*a-2)},i:function(a,b,c){var d=[.55,.5,.5,.46,.6,.55,.55][6*a+.5|0];return m.N(a,b,.5>c?c*d*2:d+(c-.5)*(1-d)*2)}},I={M:[function(a,b){var c=.42*b;a.f([0,0,b,0,b,b-2*c,b-c,b,0,b])},function(a,b){var c=0|.5*b;a.b(b-c,0,c,0|.8*b,2)},function(a,b){var c=0|b/3;a.a(c,c,b-c,b-c)},function(a,b){var c=.1*b,d=
6>b?1:8>b?2:0|.25*b;c=1<c?0|c:.5<c?1:c;a.a(d,d,b-c-d,b-c-d)},function(a,b){var c=0|.15*b,d=0|.5*b;a.g(b-d-c,b-d-c,d)},function(a,b){var c=.1*b,d=4*c;3<d&&(d|=0);a.a(0,0,b,b);a.f([d,d,b-c,d,d+(b-d-c)/2,b-c],!0)},function(a,b){a.f([0,0,b,0,b,.7*b,.4*b,.4*b,.7*b,b,0,b])},function(a,b){a.b(b/2,b/2,b/2,b/2,3)},function(a,b){a.a(0,0,b,b/2);a.a(0,b/2,b/2,b/2);a.b(b/2,b/2,b/2,b/2,1)},function(a,b){var c=.14*b,d=4>b?1:6>b?2:0|.35*b;c=8>b?c:0|c;a.a(0,0,b,b);a.a(d,d,b-d-c,b-d-c,!0)},function(a,b){var c=.12*
b,d=3*c;a.a(0,0,b,b);a.g(d,d,b-c-d,!0)},function(a,b){a.b(b/2,b/2,b/2,b/2,3)},function(a,b){var c=.25*b;a.a(0,0,b,b);a.l(c,c,b-c,b-c,!0)},function(a,b,c){var d=.4*b;c||a.g(d,d,1.2*b)}],I:[function(a,b){a.b(0,0,b,b,0)},function(a,b){a.b(0,b/2,b,b/2,0)},function(a,b){a.l(0,0,b,b)},function(a,b){var c=b/6;a.g(c,c,b-2*c)}]};L.prototype={f:function(a){for(var b="M"+p(a[0].x)+" "+p(a[0].y),c=1;c<a.length;c++)b+="L"+p(a[c].x)+" "+p(a[c].y);this.j+=b+"Z"},g:function(a,b,c){c=c?0:1;var d=p(b/2),f=p(b);this.j+=
"M"+p(a.x)+" "+p(a.y+b/2)+"a"+d+","+d+" 0 1,"+c+" "+f+",0a"+d+","+d+" 0 1,"+c+" "+-f+",0"}};G.prototype={m:function(a){a=/^(#......)(..)?/.exec(a);this.h.m(a[1],a[2]?r(a[2],0)/255:1)},D:function(a){this.c=this.b[a]||(this.b[a]=new L)},F:function(){},f:function(a){this.c.f(a)},g:function(a,b,c){this.c.g(a,b,c)},finish:function(){for(var a in this.b)this.h.c(a,this.b[a].j)}};M.prototype={f:function(a,b){var c=b?-2:2,d=this.c,f=[];for(b=b?a.length-2:0;b<a.length&&0<=b;b+=c)f.push(d.l(a[b],a[b+1]));this.h.f(f)},
g:function(a,b,c,d){this.h.g(this.c.l(a,b,c,c),c,d)},a:function(a,b,c,d,f){this.f([a,b,a+c,b,a+c,b+d,a,b+d],f)},b:function(a,b,c,d,f,e){a=[a+c,b,a+c,b+d,a,b+d,a,b];a.splice((f||0)%4*2,2);this.f(a,e)},l:function(a,b,c,d,f){this.f([a+c/2,b,a+c,b+d/2,a+c/2,b+d,a,b+d/2],f)}};w.prototype={l:function(a,b,c,d){var f=this.b+this.h,e=this.c+this.h;return 1===this.a?new B(f-b-(d||0),this.c+a):2===this.a?new B(f-a-(c||0),e-b-(d||0)):3===this.a?new B(this.b+b,e-a-(c||0)):new B(this.b+a,this.c+b)}};w.a=new w(0,
0,0,0);n.drawIcon=function(a,b,c,d){if(!a)throw Error("No canvas specified.");a=new E(a,c);H(a,C(b)||D(b),0,0,c,d||0,J())};n.toSvg=function(a,b,c){var d=new K(b);H(new G(d),C(a)||D(a),0,0,b,c,J());return d.toString()};n.update=x;n.version="2.1.0";y&&(y.fn.jdenticon=function(a,b){this.each(function(c,d){x(d,a,b)});return this});"function"===typeof setTimeout&&setTimeout(Q,0);return n});
//# sourceMappingURL=jdenticon.min.js.map