/*! For license information please see 272.7cb8a78a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkaula_pwfe=self.webpackChunkaula_pwfe||[]).push([[272],{5272:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return o}});var i=n(1811),o=function(e){var t,n,o,l=10*-d,v=0,p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(e){l=(0,i.u)(e),E(e)},L=function(){clearTimeout(o),o=void 0,t&&(g(!1),t=void 0)},w=function(e){t||b(a(e),e)},E=function(e){b(void 0,e)},b=function(e,n){if(!e||e!==t){clearTimeout(o),o=void 0;var a=(0,i.p)(n),c=a.x,f=a.y;if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(s)||k(t,c,f),g(!0)}if(e){var d=h.get(e);d&&(clearTimeout(d),h.delete(e));var l=r(e)?0:u;e.classList.remove(s),o=setTimeout((function(){k(e,c,f),o=void 0}),l)}t=e}},k=function(e,t,i){v=Date.now(),e.classList.add(s);var o=p&&c(e);o&&o.addRipple&&(T(),n=o.addRipple(t,i))},T=function(){void 0!==n&&(n.then((function(e){return e()})),n=void 0)},g=function(e){T();var n=t;if(n){var i=f-Date.now()+v;if(e&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),f);h.set(n,o)}else n.classList.remove(s)}},R=document;R.addEventListener("ionGestureCaptured",L),R.addEventListener("touchstart",(function(e){l=(0,i.u)(e),w(e)}),!0),R.addEventListener("touchcancel",m,!0),R.addEventListener("touchend",m,!0),R.addEventListener("pointercancel",L,!0),R.addEventListener("mousedown",(function(e){if(2!==e.button){var t=(0,i.u)(e)-d;l<t&&w(e)}}),!0),R.addEventListener("mouseup",(function(e){var t=(0,i.u)(e)-d;l<t&&E(e)}),!0)},a=function(e){if(!e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var i=t[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(e){return e.classList.contains("ion-activatable-instant")},c=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},s="ion-activated",u=200,f=200,d=2500}}]);
//# sourceMappingURL=272.7cb8a78a.chunk.js.map