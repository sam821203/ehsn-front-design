!function(e){function t(t){for(var r,i,l=t[0],s=t[1],d=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);m.length;)m.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;a.push([5,1]),n()}([,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},function(e,t,n){"use strict";n.r(t);n(2);var r=n(1),o=n.n(r);n(3),n(4);function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function i(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function l(e){return document.body.clientWidth>=e}function s(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function d(e,t,n,r){var o=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:l(e)?n:r;return r||(r=n),o}function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function u(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function m(e,t,n,r){var o=[],a=typeof e;return"undefined"===a?t&&o.push(t):"string"===a?(r&&o.push(t),o.push(e)):Array.isArray(e)?(r&&o.push(t),e.forEach((function(e){o.push(e)}))):n&&console.error(n),o}function p(e){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):e()}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!i&&("string"==typeof i()?parseInt(i(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);function f(e,t,n){t=t||0,n=n||.5;if(function(e,t,n){t=t||0,n=n||t||0;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=r+t,a=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return o&&a+n>=0}(e=e)){var r=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/n;return r<0?r=0:r>1&&(r=1),r}}function y(e,t){var n={top:e||0,left:t||0,behavior:"smooth"},r="scrollBehavior"in document.documentElement.style;if(window.jQuery)$("html,body").stop().animate({scrollTop:n.top,scrollLeft:n.left},500);else if(r)window.scrollTo(n);else{var o=function(){window.scrollX==n.left&&window.scrollY==n.top||setTimeout((function(){window.scrollTo(window.scrollX-100,window.scrollY-100),o()}),0)};o()}}(w=document.createElement("button")).id="fixedGoTop",w.classList.add("go-top"),w.classList.add("js--go-top"),w.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>',document.body.appendChild(w),window.addEventListener("load",b),window.addEventListener("load",S),window.addEventListener("resize",S),Array.apply(null,document.querySelectorAll('a[href^="#"]')).forEach((function(e){e.addEventListener("click",(function(e){var t,n=document.querySelector(this.getAttribute("href"));if(t=n||document.querySelector("[data-title="+this.getAttribute("href").split("#")[1]+"]")){e.preventDefault();var r=document.getElementById("progressBar")?document.getElementById("progressBar").clientHeight+4:0,o=document.getElementById("navSub")?document.getElementById("navSub").clientHeight:0,a=o>0?o:r;y(t.offsetTop-a)}}))})),v=document.body,g=document.createElement("div"),h=document.createElement("div"),g.id="progressBarWrap",g.style.opacity=0,g.style.position="fixed",g.style.zIndex=200,g.style.top=0,g.style.backgroundColor="rgba(0, 0, 0, 0.3)",g.style.width="100%",g.style.height="0.5vh",h.style.backgroundColor="#cc1e05",h.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",h.style.height="100%",h.id="progressBar",g.appendChild(h),v.insertBefore(g,v.firstChild),c(),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e){var n=e.parentNode;"progressBarWrap"===n.id?++t>1&&n.parentNode.removeChild(n):n.parentNode.removeChild(n)}))})),window.addEventListener("load",(function(){p(T)})),window.addEventListener("scroll",(function(){p(T)}));var v,g,h,w,L=!1;function b(){Array.apply(null,document.querySelectorAll(".js--go-top")).forEach((function(e){e.addEventListener("click",E)}))}function E(e){e.preventDefault(),y(0)}function S(){var e=document.body.clientWidth,t=document.getElementById("navGoTop"),n=document.getElementById("fixedGoTop");t&&e>=1260?n.style.display="none":window.addEventListener("scroll",A)}function A(){var e=document.getElementById("fixedGoTop");window.scrollY>=300?e.classList.add("is-visible"):e.classList.remove("is-visible")}function T(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),L?r.style.opacity=1:L=!0}var C=n(0),I=n.n(C);function B(e){return Math.floor(Math.random()*e)}function N(e,t){t=t||"siblingRandomCheckNowIndex";for(var n=B(e);n===window[t];)n=B(e);return window[t]=n,n}setInterval((function(){var e,t;e=Array.apply(null,document.querySelectorAll(".promo__block .promo__item")),t=N(e.length),e.forEach((function(e){e.classList.remove("sand-flash-shake")})),e[t].classList.add("sand-flash-shake")}),3e3),a(window.addEventListener("load",M),M),M();function M(){document.querySelectorAll(".container--promo-event").forEach((function(e){var t=e.querySelectorAll(".swiper-slide").length;return new I.a(e,{autoplay:{delay:1800+Math.floor(500*Math.random()),disableOnInteraction:!1},grabCursor:!0,init:t>1,slidesPerView:1,speed:500+Math.floor(200*Math.random())})}))}function k(e,t,n){var r=new Date(e),o=new Date(e).getTime(),a=[],i=0;for(n=n||1;i<t;){var l=r.setTime(o+parseInt(i*n*24*60*60*1e3));a.push(new Date(l)),i++}return a}function _(e,t,n,r,o){if(!e)return!1;var a=!1,i=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var l=r[1];var s=r[2]||!1;a=!0}var d=x((function(){a&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),o=(t=t||!1,r-n),a=Math.floor(o/10),i=Math.floor(o/1e3),l=Math.floor(i/60),s=Math.floor(l/60),d=Math.floor(s/24);s%=24,l%=60,i%=60,a%=100,t||(s+=24*d);return o<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(o)?console.error("countDownTime is NaN，找不到目標時間"):{day:d<10?"0"+d:d.toString(),dayTens:parseInt(d%100/10).toString(),dayUnits:parseInt(d%10).toString(),hour:s<10?"0"+s:s.toString(),hourTens:parseInt(s%100/10).toString(),hourUnits:parseInt(s%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:i<10?"0"+i:i.toString(),secTens:parseInt(i%100/10).toString(),secUnits:parseInt(i%10).toString(),micro:a<10?"0"+a:a.toString(),microTens:parseInt(a%100/10).toString(),microUnits:parseInt(a%10).toString()}}(e[i],s),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[i]).getTime()-n<=0){if("function"==typeof t)t(i);else if(Array.isArray(t))for(var r=t.length,o=0;r>0;)t[o](i),o++,r--;i++}}(),i>e.length-1&&(o&&o(),clearInterval(d))}),n)}function x(e,t){var n,r=1,o=(t=t||1e3,e=e||void 0,(new Date).getTime());return function a(i){var l=setTimeout((function(){var n=(new Date).getTime()-(o+r*t);"function"==typeof e?e():void 0!==e&&console.error("callback不是函數"),r++,a(t-n)}),i);return n=l}(t),n}var P={oneDay:k("2022/07/01 10:00",27),oneDayNine:k("2022/07/01 09:00",27)};function O(e){if(void 0===e)return console.error("沒有資料來源")}function z(e){return e?(u(e,"客製化設定請用物件表示"),e):{}}function D(e,t,n,r){r=void 0===r||r;var o,a,i=z(t);if(r&&O(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o={productNumber:l}}else{u(e,"資料格式不正確");var s=i.productNumberKey||"productNumber";if("string"==typeof e[s]||"number"==typeof e[s]){l=Number(e[s]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o=e}else if(e[s])console.log(e),console.error("銷編格式錯誤");else{var d=i.nameKey||"name",c=i.textKey||"text",m=i.priceKey||"price";e[d]&&(e[c]||e[m])?o=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(a=n,Array.isArray(a)||u(a)){var p=[];return n.forEach((function(e){"function"==typeof e?p.push(n(o,i)):console.error("callback並非函式")})),p}if("function"==typeof n)return n(o,i);console.error("callback並非函式")}function q(e,t){return D(e,t,H,!1)}function H(e,t){var n,r,o,a,i=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",s=t.mobileLinkKey||"mobileLink",c=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[s]?e[s]:n,o=e[c]?e[c]:r;else if(e[i]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,o="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return a=e[u]||"",[d(960,o,n,r),a]}function j(e,t){return D(e,t,W,!1)}function W(e,t){var n,r=t.productNumberKey||"productNumber",o=t.imgSrcKey||"imgSrc",a=t.altKey||"name";if(e[o])n=e[o];else if(e[r]){var i=t.imgSizeBreakpoint||768,s=t.imgSizeWebSize||"XL",d=t.imgSizeMobileSize||"L",c="-1_"+(l(i)?s:d)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+c}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[a]?e[a]:""]}function X(e,t){return D(e,t,R,!1)}function R(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),o=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),o.setAttribute("tag","GOOD_SALEPRC"),o.setAttribute("goodid",e[n]),[r,o]}function U(e,t){var n,r=z(t),o=r.namekey||"name",a=r.pricekey||"price",i=r.textkey||"text";if(n=e[o]||"",e[i])var l=!0;return[n,l?e[i]:Number.prototype.toLocaleString?isNaN(Number(e[a]))?e[a]||"":Number(e[a]).toLocaleString()||"":e[a]||""]}function Y(e,t){var n,r,o=(t=t||{}).namekey||"name",a=t.pricekey||"price",i=t.textkey||"text",l=document.createElement("span"),s=document.createElement("span"),d=!1,c=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===c||"false"===c||"none"===c)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,m=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===c?(e[o]?(l.innerHTML=U(e,t)[0],n=l):n=X(e,t)[0],e[i]&&(d=!0),e[i]||e[a]?(s.innerHTML=U(e,t)[1],r=s):(s.appendChild(X(e,t)[1]),r=s)):"all"===c?(n=X(e,t)[0],s.appendChild(X(e,t)[1]),r=s):!1===c||"false"===c||"none"===c?(u?n=X(e,t)[0]:e[o]?(l.innerHTML=U(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),m?(s.appendChild(X(e,t)[1]),r=s):(e[i]&&(d=!0),e[i]||e[a]?(s.innerHTML=U(e,t)[1],r=s):console.error("設定手動填text/price卻沒有找到來源")),u||m||(e[o]?(l.innerHTML=U(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[i]&&(d=!0),e[i]||e[a]?(s.innerHTML=U(e,t)[1],r=s):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,d]}function V(e,t){O(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad,o=void 0===t.isSlider||t.isSlider;if(o){var a=t.sliderClass,i=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=m(a,"swiper-slide","sliderClass格式不正確",!0);if(i){var s=t.sliderImgLazyLoadClass,d=t.sliderLazyLoadIndicatorClass,c=m(s,null,"sliderImgLazyLoadClass格式不正確",!0),u=m(d,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){c.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){u.push(e)}))}else if(r){var p=t.imgLazyLoadClass,f=t.lazyLoadIndicatorSrc||"1x1_low.png",y=m(p,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var v=document.createElement("img");if(i||r){var g=document.createElement("div");v.dataset.src=j(e,t)[0],v.alt=""}else v.src=j(e,t)[0],v.alt=j(e,t)[1];i?(c.forEach((function(e){v.classList.add(e)})),u.forEach((function(e){g.classList.add(e)}))):r&&(y.forEach((function(e){v.classList.add(e)})),v.src=f);var h=document.createElement(n),w=m(t.outerClass),L=o?l:w;Array.isArray(L)&&L.forEach((function(e){h.classList.add(e)}));var b,E,S=document.createElement("a");S.href=q(e,t)[0],S.title=q(e,t)[1],b=Y(e,t)[0],E=Y(e,t)[1];var A=Y(e,t)[2],T=document.createElement("div"),C=document.createElement("div"),I=document.createElement("div"),B=document.createElement("div"),N=document.createElement("div"),M=document.createElement("div");if(T.classList.add("product"),T.classList.add("product--dynamic"),C.classList.add("product__block"),I.classList.add("product__img"),B.classList.add("product__text"),N.classList.add("product__name"),M.classList.add("product__price"),I.appendChild(v),i&&I.appendChild(g),N.appendChild(b),A)M.appendChild(E);else{var k=document.createElement("span");k.innerHTML="$",M.appendChild(k),M.appendChild(E)}if(B.appendChild(N),B.appendChild(M),C.appendChild(I),C.appendChild(B),S.appendChild(C),T.appendChild(S),h.appendChild(T),r)return h;return v.addEventListener("error",(function(){h.style.display="none"})),h}function K(e,t,n){n=n||"active";e.forEach((function(e){e.classList.remove(n)})),e[t].classList.add(n)}var G,F,J,Q,Z;Q=P.oneDay,Z=new Date,Q.forEach((function(e,t,n){if(Z<e)return!1;if(t!=n.length-1){if(!(Z<n[t+1]))return!1;te(t),ne(t)}else te(t),ne(t)})),G=document.getElementById("decorDynamicSliderLeft"),F=document.getElementById("titleDynamicSlider"),J=document.getElementById("decorDynamicSliderRight"),window.addEventListener("scroll",(function(){var e=f(G,0,.45),t=f(F,0,.3),n=f(J,0,.45),r=250+-250*e,o=1*e,a=1*t,i=250+-250*n,l=1*n;G.style.transform="translateX("+r+"%) translateY("+r/35+"%) scale("+o+")",F.style.transform="scale("+a+")",J.style.transform="translateX(-"+i+"%) translateY("+i/5+"%) scale("+l+")",G.style.opacity=o,F.style.opacity=a,J.style.opacity=l,1===e?G.classList.add("active"):G.classList.remove("active"),1===n?J.classList.add("active"):J.classList.remove("active")}));function ee(e){e=e||0,new I.a("#dynamicSliderSection",{grabCursor:!0,init:s("#dynamicSliderSection",3),initialSlide:e+1,lazy:{loadPrevNext:!0},centeredSlides:!0,slidesPerView:3,spaceBetween:"1%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}function te(e){e=e||0;var t=document.querySelector("#dynamicSliderSection .swiper-wrapper"),n=new Date("2022/7/1 00:00"),r=n.getMonth()+1,o=n.getDate();(new Date).getDate();dataDynamicSlider.forEach((function(e){var n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");a.classList.add("date__month"),i.classList.add("date__number"),n.classList.add("date__item"),n.classList.add("date__item--daily"),a.innerHTML=r+"/",i.innerHTML=o,o++,n.appendChild(a),n.appendChild(i);var l=V(e);l.appendChild(n),t.appendChild(l)})),a(window.addEventListener("load",(function(){ee(e)})),(function(){ee(e)}))}function ne(e){Array.apply(null,document.querySelectorAll(".product--dynamic"))[e].classList.add("today")}function re(e,t,n){e=e||{},t=t||{};if(Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",a=n[2]?n[2]:"mobileLink",i=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",a="mobileLink",i="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var s="https://www.etmall.com.tw/i/"+e[r],c="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else s=e[o]?e[o]:"javascript:void(0)",c=e[a]?e[a]:"javascript:void(0)",u=e[i]?e[i]:"javascript:void(0)";t.href=d(960,u,s,c),e.hasOwnProperty(l)&&(t.title=e[l])}function oe(e,t,n,r){e=e||{},t=t||!1;if(Array.isArray(n)){var o=n[2]?n[2]:"name",a=n[3]?n[3]:"price",i=n[4]?n[4]:"text",s=n[5]?n[5]:"swiper-slide";if(t)var d=n[6]?n[6]:"swiper-lazy",c=n[7]?n[7][0]:"swiper-lazy-preloader",u=n[7]?n[7][1]:"swiper-lazy-preloader-black"}else{o="name",a="price",i="text",s="swiper-slide";if(t)d="swiper-lazy",c="swiper-lazy-preloader",u="swiper-lazy-preloader-black"}r=r||[,,,,"name"];if(e.hasOwnProperty(i)&&!e.hasOwnProperty(a))var m=!0;var p=document.createElement("li"),f=document.createElement("a"),y=document.createElement("img"),v=document.createElement("span"),g=document.createElement("span");re(e,f,r),function(e,t,n,r,o){if(e=e||{},t=t||{},n=n||!1,Array.isArray(o)){var a=o[0]?o[0]:"productNumber",i=o[1]?o[1]:"imgSrc";if(!n)var s=o[2]?o[2]:"imgAlt"}else{a="productNumber",i="imgSrc";if(!n)s="name"}if(Array.isArray(r))var d=r[0]?r[0]:768,c=r[1]?r[1]:"XL",u=r[2]?r[2]:"L";else d=768,c="XL",u="L";if(e.hasOwnProperty(a)&&"number"==typeof e[a]&&!e.hasOwnProperty(i))var m="-1_"+(l(d)?c:u)+".jpg",p=e[a],f="https://media.etmall.com.tw/NXimg/00"+p.toString().slice(0,4)+"/"+p+"/"+p+m;else if(e.hasOwnProperty(i))f=e[i];else console.error("未指定銷售編號或是圖片來源");n?t.dataset.src=f:(t.src=f,e.hasOwnProperty(s)&&(t.alt=e[s]))}(e,y,t),t&&y.classList.add(d),v.innerHTML=e[o],g.innerHTML=m?e[i]:Number.prototype.toLocaleString?isNaN(Number(e[a]))?e[a]:Number(e[a]).toLocaleString():e[a],p.classList.add(s);var h=document.createElement("div"),w=document.createElement("div"),L=document.createElement("div"),b=document.createElement("div");if(h.classList.add("product"),h.classList.add("product--dynamic"),w.classList.add("product__img"),L.classList.add("product__name"),b.classList.add("product__price"),w.appendChild(y),L.appendChild(v),b.innerHTML=m?"<span></span>":"<span>$</span>",b.appendChild(g),t){var E=document.createElement("div");E.classList.add(c),E.classList.add(u),w.appendChild(E)}if(f.appendChild(w),f.appendChild(L),f.appendChild(b),h.appendChild(f),p.appendChild(h),t)return p;return y.addEventListener("error",(function(){p.style.display="none"})),p}var ae,ie,le,se;(function(){var e=document.getElementById("tabBox"),t=Array.apply(null,e.querySelectorAll(".tab__item")),n=document.getElementById("tabContentBlock"),r=Array.apply(null,n.querySelectorAll(".content__box"));if(t.length!==r.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTab1&&dataTab2&&dataTab3&&dataTab4&&dataTab5&&dataTab6))return!1;var e=[dataTab1,dataTab2,dataTab3,dataTab4,dataTab5,dataTab6];Array.apply(null,document.querySelectorAll("#tabContentBlock .item__wrap")).forEach((function(t,n){e[n].forEach((function(e){var n=oe(e);t.appendChild(n)}))}))})(),t.forEach((function(e,n){e.addEventListener("click",(function(){de(t,n),de(r,n)}))}))})(),ae=document.getElementById("decorTabSectionSwan"),ie=document.getElementById("decorTabSectionLeft"),le=document.getElementById("decorTabSectionRight"),se=document.getElementById("decorTabSectionBall"),window.addEventListener("scroll",(function(){var e=f(ae,0,.5),t=f(ie,0,.5),n=f(le,0,.5),r=f(se,0,.5),o=100+-100*e,a=1*e;ae.style.transform=" translateX("+o+"%) translateY("+o/5+"%) scale("+a+")",ae.style.opacity=a,ie.style.transform=" translateX("+o+"%) translateY("+o/5+"%) scale("+a+")",ie.style.opacity=a,le.style.transform=" translateX(-"+o+"%) translateY("+o/5+"%) scale("+a+")",le.style.opacity=a,se.style.transform=" translateX(-"+o+"%) translateY("+o/5+"%) scale("+a+")",se.style.opacity=a,1===e?ae.classList.add("active"):ae.classList.remove("active"),1===t?ie.classList.add("active"):ie.classList.remove("active"),1===n?le.classList.add("active"):le.classList.remove("active"),1===r?se.classList.add("active"):se.classList.remove("active")}));function de(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}setInterval((function(){var e,t,n,r;e=Array.apply(null,document.querySelectorAll("#w3m3Wrap a")),n=N((t=["active","active"]).length,"siblingRandomCheckW3M3AnimationIndex"),r=N(e.length),e.forEach((function(e){t.forEach((function(t){e.classList.remove(t)}))})),e[r].classList.add(t[n])}),4500),function(){document.getElementById("decorEventW3M3right");var e=document.getElementById("titleEventW3m3");window.addEventListener("scroll",(function(){var t=f(e,0,.5),n=1*t;e.style.transform=" scale("+n+")"}))}();var ce,ue;a(window.addEventListener("load",me),me),ce=document.getElementById("decorBnSlider"),ue=document.getElementById("decorBnSlider2"),window.addEventListener("scroll",(function(){var e=f(ce,0,.5),t=100+-100*e;ce.style.transform="translateY("+t+"%)",ue.style.transform="translateY("+t+"%)",ce.style.transformOrigin="bottom",ue.style.transformOrigin="bottom",1===e?(ce.classList.add("active"),ue.classList.add("active")):(ce.classList.remove("active"),ue.classList.remove("active"))}));function me(){return new I.a("#sliderBn",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:3,spaceBetween:"1%",speed:600})}var pe=function(){e=setInterval((function(){"undefined"!=typeof finalCard&&(clearInterval(e),function(e){var t=finalCard;console.log(t);var n=document.getElementById("popUpWrap"),r=(new Date).getTime(),o=n.querySelector("a"),a=n.querySelector("img");t[0].s?a.src=t[0].s+".png?"+r:a.src=t[0].i+".png?"+r,t[0].c&&(o.dataset.copy=t[0].c),re(t[0],o,["n","w","m","a"]),"function"==typeof e&&e()}())}),100);var e};var fe,ye,ve,ge,he,we,Le;fe=0,ye=Math.floor(be(2,5)),ve=Math.floor(be(2,5)),ge=Math.floor(be(5,10)),he=ye+ve,we=he+ge,Le=document.getElementById("snowManWrap"),Le.addEventListener("click",(function(){fe++;var e=Array.apply(null,document.querySelectorAll(".snow-man"));fe==ye?(e[0].classList.add("hide"),e[1].classList.remove("hide")):fe==he?(e[1].classList.add("hide"),e[2].classList.remove("hide")):fe==we?(e[2].classList.add("hide"),e[3].classList.remove("hide"),pe(),setTimeout((function(){var e,t;e=document.querySelector("#popUpWrap"),t=document.querySelector("#popUpWrap a"),e.classList.add("active"),t.classList.add("disabled")}),500)):(Le.classList.add("shakeX"),setTimeout((function(){Le.classList.remove("shakeX")}),100))}));function be(e,t){return Math.random()*(t-e)+e}var Ee,Se;new I.a("#promoSliderSecItem",{autoplay:{delay:2200,disableOnInteraction:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#promoSliderItem .swiper-slide").length),centeredSlides:!0,lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:3,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0}),Ee=document.getElementById("promoSliderSecLeft"),Se=document.getElementById("promoSliderSecRight"),window.addEventListener("scroll",(function(){var e=f(Ee,0,.6),t=100+-100*e,n=1*e;Ee.style.transform="translateX("+t/2+"%) scale("+n+")",Se.style.transform="translateX(-"+t+"%) scale("+n+")",1===e?(Ee.classList.add("active"),Se.classList.add("active")):(Ee.classList.remove("active"),Se.classList.remove("active"))}));new I.a("#promoSliderItem2",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",initialSlide:Math.floor(Math.random()*document.querySelectorAll("#promoSliderItem2 .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:1,spaceBetween:"1%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0}),function(){var e=document.getElementById("decorPromoSliderItem"),t=document.getElementById("titlePromoSlider2");window.addEventListener("scroll",(function(){var n=f(t,0,.5),r=100+-100*n,o=1*n;e.style.transform="translateX("+r+"%) scale("+o+")",t.style.transform=" scale("+o+")",1===n?(e.classList.add("active"),t.classList.add("active")):(e.classList.remove("active"),t.classList.remove("active"))}))}();(function(){if(!dataDailyTime)return!1;_(P.oneDayNine,[Ae],100)})(),x((function(){var e=(new Date).getHours(),t=Array.apply(null,document.querySelectorAll(".product__time"));K(t,e>=9&&e<15?0:e>=15&&e<22?1:2)}),1e3);function Ae(e){for(var t=document.querySelector("#dailyTime .product__wrap");t.firstChild;)t.removeChild(t.firstChild);dataDailyTime[e].forEach((function(e,n){var r=V(e,{outerTag:"div",isSlider:!1});!function(e){var t=document.createElement("div");t.classList.add("product__time"),e.insertBefore(t,e.firstChild)}(r),t.appendChild(r)}))}document.body.classList.add("js-loading"),(new o.a).init();document.getElementById("decorBgTop"),document.getElementById("decorBgBottom");document.addEventListener("scroll",(function(){window.scrollY>=250?document.body.classList.add("bg-fixed"):document.body.classList.remove("bg-fixed")})),document.addEventListener("scroll",(function(){var e=document.querySelector(".bg-web--top");window.scrollY>=250?e.classList.add("bg-fixed"):e.classList.remove("bg-fixed")}))}]);