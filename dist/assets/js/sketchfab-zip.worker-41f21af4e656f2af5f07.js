!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=
/*!
 * ZipLoader
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 * 
 * ZipLoader uses the library pako released under the MIT license :
 * https://github.com/nodeca/pako/blob/master/LICENSE
 */
function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)i(n,r)&&(e[r]=n[r])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,n,i,r){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+i),r);else for(var a=0;a<i;a++)e[r+a]=t[n+a]},flattenChunks:function(e){var t,n,i,r,a,o;for(i=0,t=0,n=e.length;t<n;t++)i+=e[t].length;for(o=new Uint8Array(i),r=0,t=0,n=e.length;t<n;t++)a=e[t],o.set(a,r),r+=a.length;return o}},a={arraySet:function(e,t,n,i,r){for(var a=0;a<i;a++)e[r+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,r)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,a))},t.setTyped(n)});i.assign,i.shrinkBuf,i.setTyped,i.Buf8,i.Buf16,i.Buf32;var r=function(e,t,n,i){for(var r=65535&e|0,a=e>>>16&65535|0,o=0;0!==n;){n-=o=n>2e3?2e3:n;do{a=a+(r=r+t[i++]|0)|0}while(--o);r%=65521,a%=65521}return r|a<<16|0};var a=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();var o=function(e,t,n,i){var r=a,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^r[255&(e^t[s])];return-1^e},s=function(e,t){var n,i,r,a,o,s,f,l,d,u,c,h,w,p,b,m,v,k,_,g,y,x,B,S,E;n=e.state,i=e.next_in,S=e.input,r=i+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),f=n.dmax,l=n.wsize,d=n.whave,u=n.wnext,c=n.window,h=n.hold,w=n.bits,p=n.lencode,b=n.distcode,m=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{w<15&&(h+=S[i++]<<w,w+=8,h+=S[i++]<<w,w+=8),k=p[h&m];t:for(;;){if(h>>>=_=k>>>24,w-=_,0===(_=k>>>16&255))E[a++]=65535&k;else{if(!(16&_)){if(0==(64&_)){k=p[(65535&k)+(h&(1<<_)-1)];continue t}if(32&_){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}g=65535&k,(_&=15)&&(w<_&&(h+=S[i++]<<w,w+=8),g+=h&(1<<_)-1,h>>>=_,w-=_),w<15&&(h+=S[i++]<<w,w+=8,h+=S[i++]<<w,w+=8),k=b[h&v];n:for(;;){if(h>>>=_=k>>>24,w-=_,!(16&(_=k>>>16&255))){if(0==(64&_)){k=b[(65535&k)+(h&(1<<_)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(y=65535&k,w<(_&=15)&&(h+=S[i++]<<w,(w+=8)<_&&(h+=S[i++]<<w,w+=8)),(y+=h&(1<<_)-1)>f){e.msg="invalid distance too far back",n.mode=30;break e}if(h>>>=_,w-=_,y>(_=a-o)){if((_=y-_)>d&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(x=0,B=c,0===u){if(x+=l-_,_<g){g-=_;do{E[a++]=c[x++]}while(--_);x=a-y,B=E}}else if(u<_){if(x+=l+u-_,(_-=u)<g){g-=_;do{E[a++]=c[x++]}while(--_);if(x=0,u<g){g-=_=u;do{E[a++]=c[x++]}while(--_);x=a-y,B=E}}}else if(x+=u-_,_<g){g-=_;do{E[a++]=c[x++]}while(--_);x=a-y,B=E}for(;g>2;)E[a++]=B[x++],E[a++]=B[x++],E[a++]=B[x++],g-=3;g&&(E[a++]=B[x++],g>1&&(E[a++]=B[x++]))}else{x=a-y;do{E[a++]=E[x++],E[a++]=E[x++],E[a++]=E[x++],g-=3}while(g>2);g&&(E[a++]=E[x++],g>1&&(E[a++]=E[x++]))}break}}break}}while(i<r&&a<s);i-=g=w>>3,h&=(1<<(w-=g<<3))-1,e.next_in=i,e.next_out=a,e.avail_in=i<r?r-i+5:5-(i-r),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=h,n.bits=w},f=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],c=function(e,t,n,r,a,o,s,c){var h,w,p,b,m,v,k,_,g,y=c.bits,x=0,B=0,S=0,E=0,R=0,O=0,A=0,T=0,Z=0,U=0,L=null,C=0,N=new i.Buf16(16),D=new i.Buf16(16),I=null,j=0;for(x=0;x<=15;x++)N[x]=0;for(B=0;B<r;B++)N[t[n+B]]++;for(R=y,E=15;E>=1&&0===N[E];E--);if(R>E&&(R=E),0===E)return a[o++]=20971520,a[o++]=20971520,c.bits=1,0;for(S=1;S<E&&0===N[S];S++);for(R<S&&(R=S),T=1,x=1;x<=15;x++)if(T<<=1,(T-=N[x])<0)return-1;if(T>0&&(0===e||1!==E))return-1;for(D[1]=0,x=1;x<15;x++)D[x+1]=D[x]+N[x];for(B=0;B<r;B++)0!==t[n+B]&&(s[D[t[n+B]]++]=B);if(0===e?(L=I=s,v=19):1===e?(L=f,C-=257,I=l,j-=257,v=256):(L=d,I=u,v=-1),U=0,B=0,x=S,m=o,O=R,A=0,p=-1,b=(Z=1<<R)-1,1===e&&Z>852||2===e&&Z>592)return 1;for(;;){k=x-A,s[B]<v?(_=0,g=s[B]):s[B]>v?(_=I[j+s[B]],g=L[C+s[B]]):(_=96,g=0),h=1<<x-A,S=w=1<<O;do{a[m+(U>>A)+(w-=h)]=k<<24|_<<16|g|0}while(0!==w);for(h=1<<x-1;U&h;)h>>=1;if(0!==h?(U&=h-1,U+=h):U=0,B++,0==--N[x]){if(x===E)break;x=t[n+s[B]]}if(x>R&&(U&b)!==p){for(0===A&&(A=R),m+=S,T=1<<(O=x-A);O+A<E&&!((T-=N[O+A])<=0);)O++,T<<=1;if(Z+=1<<O,1===e&&Z>852||2===e&&Z>592)return 1;a[p=U&b]=R<<24|O<<16|m-o|0}}return 0!==U&&(a[m+U]=x-A<<24|64<<16|0),c.bits=R,0},h=0,w=1,p=2,b=4,m=5,v=6,k=0,_=1,g=2,y=-2,x=-3,B=-4,S=-5,E=8,R=1,O=2,A=3,T=4,Z=5,U=6,L=7,C=8,N=9,D=10,I=11,j=12,F=13,H=14,z=15,M=16,P=17,K=18,J=19,Y=20,G=21,$=22,V=23,X=24,q=25,W=26,Q=27,ee=28,te=29,ne=30,ie=31,re=32,ae=852,oe=592,se=15;function fe(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function le(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function de(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=R,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new i.Buf32(ae),t.distcode=t.distdyn=new i.Buf32(oe),t.sane=1,t.back=-1,k):y}function ue(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,de(e)):y}function ce(e,t){var n,i;return e&&e.state?(i=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?y:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=n,i.wbits=t,ue(e))):y}function he(e,t){var n,i;return e?(i=new le,e.state=i,i.window=null,(n=ce(e,t))!==k&&(e.state=null),n):y}var we,pe,be=!0;function me(e){if(be){var t;for(we=new i.Buf32(512),pe=new i.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(c(w,e.lens,0,288,we,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;c(p,e.lens,0,32,pe,0,e.work,{bits:5}),be=!1}e.lencode=we,e.lenbits=9,e.distcode=pe,e.distbits=5}function ve(e,t,n,r){var a,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new i.Buf8(o.wsize)),r>=o.wsize?(i.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>r&&(a=r),i.arraySet(o.window,t,n-r,a,o.wnext),(r-=a)?(i.arraySet(o.window,t,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}var ke={inflateReset:ue,inflateReset2:ce,inflateResetKeep:de,inflateInit:function(e){return he(e,se)},inflateInit2:he,inflate:function(e,t){var n,a,f,l,d,u,ae,oe,se,le,de,ue,ce,he,we,pe,be,ke,_e,ge,ye,xe,Be,Se,Ee=0,Re=new i.Buf8(4),Oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return y;(n=e.state).mode===j&&(n.mode=F),d=e.next_out,f=e.output,ae=e.avail_out,l=e.next_in,a=e.input,u=e.avail_in,oe=n.hold,se=n.bits,le=u,de=ae,xe=k;e:for(;;)switch(n.mode){case R:if(0===n.wrap){n.mode=F;break}for(;se<16;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(2&n.wrap&&35615===oe){n.check=0,Re[0]=255&oe,Re[1]=oe>>>8&255,n.check=o(n.check,Re,2,0),oe=0,se=0,n.mode=O;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&oe)<<8)+(oe>>8))%31){e.msg="incorrect header check",n.mode=ne;break}if((15&oe)!==E){e.msg="unknown compression method",n.mode=ne;break}if(se-=4,ye=8+(15&(oe>>>=4)),0===n.wbits)n.wbits=ye;else if(ye>n.wbits){e.msg="invalid window size",n.mode=ne;break}n.dmax=1<<ye,e.adler=n.check=1,n.mode=512&oe?D:j,oe=0,se=0;break;case O:for(;se<16;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(n.flags=oe,(255&n.flags)!==E){e.msg="unknown compression method",n.mode=ne;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=ne;break}n.head&&(n.head.text=oe>>8&1),512&n.flags&&(Re[0]=255&oe,Re[1]=oe>>>8&255,n.check=o(n.check,Re,2,0)),oe=0,se=0,n.mode=A;case A:for(;se<32;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.head&&(n.head.time=oe),512&n.flags&&(Re[0]=255&oe,Re[1]=oe>>>8&255,Re[2]=oe>>>16&255,Re[3]=oe>>>24&255,n.check=o(n.check,Re,4,0)),oe=0,se=0,n.mode=T;case T:for(;se<16;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.head&&(n.head.xflags=255&oe,n.head.os=oe>>8),512&n.flags&&(Re[0]=255&oe,Re[1]=oe>>>8&255,n.check=o(n.check,Re,2,0)),oe=0,se=0,n.mode=Z;case Z:if(1024&n.flags){for(;se<16;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.length=oe,n.head&&(n.head.extra_len=oe),512&n.flags&&(Re[0]=255&oe,Re[1]=oe>>>8&255,n.check=o(n.check,Re,2,0)),oe=0,se=0}else n.head&&(n.head.extra=null);n.mode=U;case U:if(1024&n.flags&&((ue=n.length)>u&&(ue=u),ue&&(n.head&&(ye=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),i.arraySet(n.head.extra,a,l,ue,ye)),512&n.flags&&(n.check=o(n.check,a,ue,l)),u-=ue,l+=ue,n.length-=ue),n.length))break e;n.length=0,n.mode=L;case L:if(2048&n.flags){if(0===u)break e;ue=0;do{ye=a[l+ue++],n.head&&ye&&n.length<65536&&(n.head.name+=String.fromCharCode(ye))}while(ye&&ue<u);if(512&n.flags&&(n.check=o(n.check,a,ue,l)),u-=ue,l+=ue,ye)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=C;case C:if(4096&n.flags){if(0===u)break e;ue=0;do{ye=a[l+ue++],n.head&&ye&&n.length<65536&&(n.head.comment+=String.fromCharCode(ye))}while(ye&&ue<u);if(512&n.flags&&(n.check=o(n.check,a,ue,l)),u-=ue,l+=ue,ye)break e}else n.head&&(n.head.comment=null);n.mode=N;case N:if(512&n.flags){for(;se<16;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(oe!==(65535&n.check)){e.msg="header crc mismatch",n.mode=ne;break}oe=0,se=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=j;break;case D:for(;se<32;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}e.adler=n.check=fe(oe),oe=0,se=0,n.mode=I;case I:if(0===n.havedict)return e.next_out=d,e.avail_out=ae,e.next_in=l,e.avail_in=u,n.hold=oe,n.bits=se,g;e.adler=n.check=1,n.mode=j;case j:if(t===m||t===v)break e;case F:if(n.last){oe>>>=7&se,se-=7&se,n.mode=Q;break}for(;se<3;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}switch(n.last=1&oe,se-=1,3&(oe>>>=1)){case 0:n.mode=H;break;case 1:if(me(n),n.mode=Y,t===v){oe>>>=2,se-=2;break e}break;case 2:n.mode=P;break;case 3:e.msg="invalid block type",n.mode=ne}oe>>>=2,se-=2;break;case H:for(oe>>>=7&se,se-=7&se;se<32;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if((65535&oe)!=(oe>>>16^65535)){e.msg="invalid stored block lengths",n.mode=ne;break}if(n.length=65535&oe,oe=0,se=0,n.mode=z,t===v)break e;case z:n.mode=M;case M:if(ue=n.length){if(ue>u&&(ue=u),ue>ae&&(ue=ae),0===ue)break e;i.arraySet(f,a,l,ue,d),u-=ue,l+=ue,ae-=ue,d+=ue,n.length-=ue;break}n.mode=j;break;case P:for(;se<14;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(n.nlen=257+(31&oe),oe>>>=5,se-=5,n.ndist=1+(31&oe),oe>>>=5,se-=5,n.ncode=4+(15&oe),oe>>>=4,se-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=ne;break}n.have=0,n.mode=K;case K:for(;n.have<n.ncode;){for(;se<3;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.lens[Oe[n.have++]]=7&oe,oe>>>=3,se-=3}for(;n.have<19;)n.lens[Oe[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,Be={bits:n.lenbits},xe=c(h,n.lens,0,19,n.lencode,0,n.work,Be),n.lenbits=Be.bits,xe){e.msg="invalid code lengths set",n.mode=ne;break}n.have=0,n.mode=J;case J:for(;n.have<n.nlen+n.ndist;){for(;pe=(Ee=n.lencode[oe&(1<<n.lenbits)-1])>>>16&255,be=65535&Ee,!((we=Ee>>>24)<=se);){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(be<16)oe>>>=we,se-=we,n.lens[n.have++]=be;else{if(16===be){for(Se=we+2;se<Se;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(oe>>>=we,se-=we,0===n.have){e.msg="invalid bit length repeat",n.mode=ne;break}ye=n.lens[n.have-1],ue=3+(3&oe),oe>>>=2,se-=2}else if(17===be){for(Se=we+3;se<Se;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}se-=we,ye=0,ue=3+(7&(oe>>>=we)),oe>>>=3,se-=3}else{for(Se=we+7;se<Se;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}se-=we,ye=0,ue=11+(127&(oe>>>=we)),oe>>>=7,se-=7}if(n.have+ue>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=ne;break}for(;ue--;)n.lens[n.have++]=ye}}if(n.mode===ne)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=ne;break}if(n.lenbits=9,Be={bits:n.lenbits},xe=c(w,n.lens,0,n.nlen,n.lencode,0,n.work,Be),n.lenbits=Be.bits,xe){e.msg="invalid literal/lengths set",n.mode=ne;break}if(n.distbits=6,n.distcode=n.distdyn,Be={bits:n.distbits},xe=c(p,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,Be),n.distbits=Be.bits,xe){e.msg="invalid distances set",n.mode=ne;break}if(n.mode=Y,t===v)break e;case Y:n.mode=G;case G:if(u>=6&&ae>=258){e.next_out=d,e.avail_out=ae,e.next_in=l,e.avail_in=u,n.hold=oe,n.bits=se,s(e,de),d=e.next_out,f=e.output,ae=e.avail_out,l=e.next_in,a=e.input,u=e.avail_in,oe=n.hold,se=n.bits,n.mode===j&&(n.back=-1);break}for(n.back=0;pe=(Ee=n.lencode[oe&(1<<n.lenbits)-1])>>>16&255,be=65535&Ee,!((we=Ee>>>24)<=se);){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(pe&&0==(240&pe)){for(ke=we,_e=pe,ge=be;pe=(Ee=n.lencode[ge+((oe&(1<<ke+_e)-1)>>ke)])>>>16&255,be=65535&Ee,!(ke+(we=Ee>>>24)<=se);){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}oe>>>=ke,se-=ke,n.back+=ke}if(oe>>>=we,se-=we,n.back+=we,n.length=be,0===pe){n.mode=W;break}if(32&pe){n.back=-1,n.mode=j;break}if(64&pe){e.msg="invalid literal/length code",n.mode=ne;break}n.extra=15&pe,n.mode=$;case $:if(n.extra){for(Se=n.extra;se<Se;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.length+=oe&(1<<n.extra)-1,oe>>>=n.extra,se-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=V;case V:for(;pe=(Ee=n.distcode[oe&(1<<n.distbits)-1])>>>16&255,be=65535&Ee,!((we=Ee>>>24)<=se);){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(0==(240&pe)){for(ke=we,_e=pe,ge=be;pe=(Ee=n.distcode[ge+((oe&(1<<ke+_e)-1)>>ke)])>>>16&255,be=65535&Ee,!(ke+(we=Ee>>>24)<=se);){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}oe>>>=ke,se-=ke,n.back+=ke}if(oe>>>=we,se-=we,n.back+=we,64&pe){e.msg="invalid distance code",n.mode=ne;break}n.offset=be,n.extra=15&pe,n.mode=X;case X:if(n.extra){for(Se=n.extra;se<Se;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}n.offset+=oe&(1<<n.extra)-1,oe>>>=n.extra,se-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=ne;break}n.mode=q;case q:if(0===ae)break e;if(ue=de-ae,n.offset>ue){if((ue=n.offset-ue)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=ne;break}ue>n.wnext?(ue-=n.wnext,ce=n.wsize-ue):ce=n.wnext-ue,ue>n.length&&(ue=n.length),he=n.window}else he=f,ce=d-n.offset,ue=n.length;ue>ae&&(ue=ae),ae-=ue,n.length-=ue;do{f[d++]=he[ce++]}while(--ue);0===n.length&&(n.mode=G);break;case W:if(0===ae)break e;f[d++]=n.length,ae--,n.mode=G;break;case Q:if(n.wrap){for(;se<32;){if(0===u)break e;u--,oe|=a[l++]<<se,se+=8}if(de-=ae,e.total_out+=de,n.total+=de,de&&(e.adler=n.check=n.flags?o(n.check,f,de,d-de):r(n.check,f,de,d-de)),de=ae,(n.flags?oe:fe(oe))!==n.check){e.msg="incorrect data check",n.mode=ne;break}oe=0,se=0}n.mode=ee;case ee:if(n.wrap&&n.flags){for(;se<32;){if(0===u)break e;u--,oe+=a[l++]<<se,se+=8}if(oe!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=ne;break}oe=0,se=0}n.mode=te;case te:xe=_;break e;case ne:xe=x;break e;case ie:return B;case re:default:return y}return e.next_out=d,e.avail_out=ae,e.next_in=l,e.avail_in=u,n.hold=oe,n.bits=se,(n.wsize||de!==e.avail_out&&n.mode<ne&&(n.mode<Q||t!==b))&&ve(e,e.output,e.next_out,de-e.avail_out)?(n.mode=ie,B):(le-=e.avail_in,de-=e.avail_out,e.total_in+=le,e.total_out+=de,n.total+=de,n.wrap&&de&&(e.adler=n.check=n.flags?o(n.check,f,de,e.next_out-de):r(n.check,f,de,e.next_out-de)),e.data_type=n.bits+(n.last?64:0)+(n.mode===j?128:0)+(n.mode===Y||n.mode===z?256:0),(0===le&&0===de||t===b)&&xe===k&&(xe=S),xe)},inflateEnd:function(e){if(!e||!e.state)return y;var t=e.state;return t.window&&(t.window=null),e.state=null,k},inflateGetHeader:function(e,t){var n;return e&&e.state?0==(2&(n=e.state).wrap)?y:(n.head=t,t.done=!1,k):y},inflateSetDictionary:function(e,t){var n,i=t.length;return e&&e.state?0!==(n=e.state).wrap&&n.mode!==I?y:n.mode===I&&r(1,t,i,0)!==n.check?x:ve(e,t,i,i)?(n.mode=ie,B):(n.havedict=1,k):y},inflateInfo:"pako inflate (from Nodeca project)"},_e=!0,ge=!0;try{String.fromCharCode.apply(null,[0])}catch(e){_e=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){ge=!1}for(var ye=new i.Buf8(256),xe=0;xe<256;xe++)ye[xe]=xe>=252?6:xe>=248?5:xe>=240?4:xe>=224?3:xe>=192?2:1;ye[254]=ye[254]=1;function Be(e,t){if(t<65537&&(e.subarray&&ge||!e.subarray&&_e))return String.fromCharCode.apply(null,i.shrinkBuf(e,t));for(var n="",r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n}var Se=function(e){var t,n,r,a,o,s=e.length,f=0;for(a=0;a<s;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(r=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(r-56320),a++),f+=n<128?1:n<2048?2:n<65536?3:4;for(t=new i.Buf8(f),o=0,a=0;o<f;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(r=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:n<2048?(t[o++]=192|n>>>6,t[o++]=128|63&n):n<65536?(t[o++]=224|n>>>12,t[o++]=128|n>>>6&63,t[o++]=128|63&n):(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63,t[o++]=128|n>>>6&63,t[o++]=128|63&n);return t},Ee=function(e){for(var t=new i.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},Re=function(e,t){var n,i,r,a,o=t||e.length,s=new Array(2*o);for(i=0,n=0;n<o;)if((r=e[n++])<128)s[i++]=r;else if((a=ye[r])>4)s[i++]=65533,n+=a-1;else{for(r&=2===a?31:3===a?15:7;a>1&&n<o;)r=r<<6|63&e[n++],a--;a>1?s[i++]=65533:r<65536?s[i++]=r:(r-=65536,s[i++]=55296|r>>10&1023,s[i++]=56320|1023&r)}return Be(s,i)},Oe=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0?t:0===n?t:n+ye[e[n]]>t?n:t},Ae={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},Te={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var Ze=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var Ue=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Le=Object.prototype.toString;function Ce(e){if(!(this instanceof Ce))return new Ce(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ze,this.strm.avail_out=0;var n=ke.inflateInit2(this.strm,t.windowBits);if(n!==Ae.Z_OK)throw new Error(Te[n]);this.header=new Ue,ke.inflateGetHeader(this.strm,this.header)}function Ne(e,t){var n=new Ce(t);if(n.push(e,!0),n.err)throw n.msg||Te[n.err];return n.result}Ce.prototype.push=function(e,t){var n,r,a,o,s,f,l=this.strm,d=this.options.chunkSize,u=this.options.dictionary,c=!1;if(this.ended)return!1;r=t===~~t?t:!0===t?Ae.Z_FINISH:Ae.Z_NO_FLUSH,"string"==typeof e?l.input=Ee(e):"[object ArrayBuffer]"===Le.call(e)?l.input=new Uint8Array(e):l.input=e,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new i.Buf8(d),l.next_out=0,l.avail_out=d),(n=ke.inflate(l,Ae.Z_NO_FLUSH))===Ae.Z_NEED_DICT&&u&&(f="string"==typeof u?Se(u):"[object ArrayBuffer]"===Le.call(u)?new Uint8Array(u):u,n=ke.inflateSetDictionary(this.strm,f)),n===Ae.Z_BUF_ERROR&&!0===c&&(n=Ae.Z_OK,c=!1),n!==Ae.Z_STREAM_END&&n!==Ae.Z_OK)return this.onEnd(n),this.ended=!0,!1;l.next_out&&(0!==l.avail_out&&n!==Ae.Z_STREAM_END&&(0!==l.avail_in||r!==Ae.Z_FINISH&&r!==Ae.Z_SYNC_FLUSH)||("string"===this.options.to?(a=Oe(l.output,l.next_out),o=l.next_out-a,s=Re(l.output,a),l.next_out=o,l.avail_out=d-o,o&&i.arraySet(l.output,l.output,a,o,0),this.onData(s)):this.onData(i.shrinkBuf(l.output,l.next_out)))),0===l.avail_in&&0===l.avail_out&&(c=!0)}while((l.avail_in>0||0===l.avail_out)&&n!==Ae.Z_STREAM_END);return n===Ae.Z_STREAM_END&&(r=Ae.Z_FINISH),r===Ae.Z_FINISH?(n=ke.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Ae.Z_OK):r!==Ae.Z_SYNC_FLUSH||(this.onEnd(Ae.Z_OK),l.avail_out=0,!0)},Ce.prototype.onData=function(e){this.chunks.push(e)},Ce.prototype.onEnd=function(e){e===Ae.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var De={Inflate:Ce,inflate:Ne,inflateRaw:function(e,t){return(t=t||{}).raw=!0,Ne(e,t)},ungzip:Ne};var Ie=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dataView=new DataView(t),this.position=0}return e.prototype.skip=function(e){this.position+=e},e.prototype.readBytes=function(e){var t=4===e?"getUint32":2===e?"getUint16":"getUint8",n=this.position;return this.position+=e,this.dataView[t](n,!0)},e}(),je=function(e){for(var t=new Ie(e),n={};;){var i=t.readBytes(4);if(67324752!==i){if(33639248!==i)break;He(t)}else{var r=Fe(t);n[r.name]={buffer:r.buffer}}}return n},Fe=function(e){var t=0,n=void 0;e.skip(4);var i=e.readBytes(2);e.skip(8);var r=e.readBytes(4);e.skip(4);var a=e.readBytes(2),o=e.readBytes(2),s=[],f=new Uint8Array(r);for(t=0;t<a;t++)s.push(String.fromCharCode(e.readBytes(1)));for(e.skip(o),t=0;t<r;t++)f[t]=e.readBytes(1);switch(i){case 0:n=f;break;case 8:n=new Uint8Array(De.inflate(f,{raw:!0}));break;default:console.log(s.join("")+": unsupported compression type"),n=f}return{name:s.join(""),buffer:n}},He=function(e){e.skip(24);var t=e.readBytes(2),n=e.readBytes(2),i=e.readBytes(2);e.skip(12),e.skip(t),e.skip(n),e.skip(i)};var ze="function"==typeof Promise?Promise:function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(){};return t(function(){n()}),{then:function(e){n=e}}};var Me=0,Pe=void 0,Ke=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=Me,this._listeners={},this.url=t,this.files=null,Me++}return e.unzip=function(t){return new ze(function(n){var i=new e,r=new FileReader;r.onload=function(e){var t=e.target.result;i.files=je(t),n(i)},t instanceof Blob&&r.readAsArrayBuffer(t)})},e.prototype.load=function(){var e=this;return new ze(function(t){var n=Date.now(),i=new XMLHttpRequest;i.open("GET",e.url,!0),i.responseType="arraybuffer",i.onprogress=function(t){e.dispatch({type:"progress",loaded:t.loaded,total:t.total,elapsedTime:Date.now()-n})},i.onload=function(){e.files=je(i.response),e.dispatch({type:"load",elapsedTime:Date.now()-n}),t()},i.send()})},e.prototype.extractAsBlobUrl=function(e,t){if(this.files[e].url)return this.files[e].url;var n=new Blob([this.files[e].buffer],{type:t});return this.files[e].url=URL.createObjectURL(n),this.files[e].url},e.prototype.extractAsText=function(e){var t=this.files[e].buffer;if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var n="",i=0,r=t.length;i<r;i++)n+=String.fromCharCode(t[i]);return decodeURIComponent(escape(n))},e.prototype.extractAsJSON=function(e){return JSON.parse(this.extractAsText(e))},e.prototype.loadThreeJSON=function(e){var t=this,n=this.extractAsJSON(e),i=e.replace(/\/.+\.json$/,"/"),r="__ziploader_"+this._id+"__",a=new RegExp(r);return-1!==!Pe.Loader.Handlers.handlers.indexOf(a)&&Pe.Loader.Handlers.add(a,{load:function(e){return t.loadThreeTexture(e.replace(a,""))}}),Pe.JSONLoader.prototype.parse(n,r+i)},e.prototype.loadThreeTexture=function(e){var t=new Pe.Texture,n=/\.jpg$/.test(e)?"image/jpeg":/\.png$/.test(e)?"image/png":/\.gif$/.test(e)?"image/gif":void 0,i=new Blob([this.files[e].buffer],{type:n});return t.image=new Image,t.image.addEventListener("load",function e(){t.needsUpdate=!0,t.image.removeEventListener("load",e),URL.revokeObjectURL(t.image.src)}),t.image.src=URL.createObjectURL(i),t},e.prototype.on=function(e,t){this._listeners[e]||(this._listeners[e]=[]),-1===this._listeners[e].indexOf(t)&&this._listeners[e].push(t)},e.prototype.off=function(e,t){var n=this._listeners[e];if(n){var i=n.indexOf(t);-1!==i&&n.splice(i,1)}},e.prototype.dispatch=function(e){var t=this._listeners[e.type];if(t){e.target=this;for(var n=t.length,i=0;i<n;i++)t[i].call(this,e)}},e.prototype.clear=function(e){if(e)return URL.revokeObjectURL(this.files[e].url),void delete this.files[e];for(var t in this.files)URL.revokeObjectURL(this.files[t].url);if(delete this.files,Pe){var n="__ziploader_"+this._id+"__";Pe.Loader.Handlers.handlers.some(function(e,t){if(e instanceof RegExp&&e.source===n)return Pe.Loader.Handlers.handlers.splice(t,2),!0})}},e.install=function(e){e.THREE&&(Pe=e.THREE)},e}();function Je(e,t,n,i,r,a,o){try{var s=e[a](o),f=s.value}catch(e){return void n(e)}s.done?t(f):Promise.resolve(f).then(i,r)}function Ye(e){return function(){var t=this,n=arguments;return new Promise(function(i,r){var a=e.apply(t,n);function o(e){Je(a,i,r,o,s,"next",e)}function s(e){Je(a,i,r,o,s,"throw",e)}o(void 0)})}}function Ge(){return(Ge=Ye(function*(e){const t=new Ke(e);return t.load().then(()=>{const e={};for(const n in t.files)e[n]=t.extractAsBlobUrl(n);const n=JSON.parse(t.extractAsText("scene.gltf"));return n.buffers&&n.buffers.forEach(t=>t.uri=e[t.uri]),n.images&&n.images.forEach(t=>t.uri=e[t.uri]),e["scene.gtlf"]=URL.createObjectURL(new Blob([JSON.stringify(n,null,2)],{type:"text/plain"})),e})})).apply(this,arguments)}self.onmessage=function(){var e=Ye(function*(e){try{const t=yield function(e){return Ge.apply(this,arguments)}(e.data.payload);self.postMessage({id:e.data.id,result:t})}catch(t){self.postMessage({id:e.data.id,err:t.message})}});return function(t){return e.apply(this,arguments)}}()}]);
//# sourceMappingURL=sketchfab-zip.worker-41f21af4e656f2af5f07.js.map