!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),o=new Vimeo.Player(n),i={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=s||v||Function("return this")(),y=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return p.Date.now()};function j(e,t,n){var o,i,r,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function p(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function y(e){return l=e,a=setTimeout(h,t),d?p(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=r}function h(){var e=b();if(j(e))return O(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,r-(e-l)):n}(e))}function O(e){return a=void 0,v&&o?p(e):(o=i=void 0,f)}function S(){var e=b(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(h,t),p(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=T(t)||0,w(n)&&(d=!!n.leading,r=(s="maxWait"in n)?m(T(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},S.flush=function(){return void 0===a?f:O(b())},S}function w(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=c.test(e);return o||l.test(e)?d(e.slice(2),o?2:8):a.test(e)?NaN:+e}i=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return w(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),j(e,t,{leading:o,maxWait:t,trailing:i})};var h="videoplayer-current-time";console.log(h),o.on("timeupdate",i((function(e){localStorage.setItem(h,e.seconds)}),1e3)),console.log(localStorage.getItem(h)),o.setCurrentTime(localStorage.getItem(h))}();
//# sourceMappingURL=02-video.14e53767.js.map