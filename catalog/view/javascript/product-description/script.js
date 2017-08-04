/*! UIkit 2.26.4 Min.js */
!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=t.UIkit?Object.create(t.UIkit):void 0;if(n.version="2.26.4",n.noConflict=function(){return o&&(t.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),n.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.throttle=function(t,i){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},i))}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(h){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),c+o.height()>=a&&c-e.topoffset<=a+n.$win.height()&&l+o.width()>=s&&l-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk-animation-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if("string"!=i.type(t))return t;-1!=t.indexOf(":")&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",t.UIkit=n,n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(){i.apply(t,[]),e.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(i){i(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var t=function(){n.$body=n.$("body"),n.trigger("beforeready.uk.dom"),n.component.bootComponents();var t=requestAnimationFrame(function(){var i={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},e=function(){var o=window.pageXOffset,s=window.pageYOffset;(i.x!=o||i.y!=s)&&(i.dir.x=o!=i.x?o>i.x?1:-1:0,i.dir.y=s!=i.y?s>i.y?1:-1:0,i.x=o,i.y=s,n.$doc.trigger("scrolling.uk.document",[{dir:{x:i.dir.x,y:i.dir.y},x:o,y:s}])),cancelAnimationFrame(t),t=requestAnimationFrame(e)};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",e),(i.x||i.y)&&e(),e}());if(n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0,n.support.mutationobserver){var e=n.Utils.debounce(function(){requestAnimationFrame(function(){n.init(document.body)})},10);new n.support.mutationobserver(function(t){var i=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var e,n=0;n<t.addedNodes.length;++n)if(e=t.addedNodes[n],e.outerHTML&&-1!==e.outerHTML.indexOf("data-uk-"))return(i=!0)&&!1;return!0}),i&&e()}).observe(document.body,{childList:!0,subtree:!0})}};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(t),t}()),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",l=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",l,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(l),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,h.last&&(void 0!==h.el&&h.el.trigger("longTap"),h={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,h={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,h={},d=750;t(function(){var p,f,m,g=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&void 0!==h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(m="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],p=Date.now(),f=p-(h.last||p),h.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),h.x1=m.pageX,h.y1=m.pageY,f>0&&250>=f&&(h.isDoubleTap=!0),h.last=p,c=setTimeout(e,d),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),h.x2=m.pageX,h.y2=m.pageY,g+=Math.abs(h.x1-h.x2),v+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?l=setTimeout(function(){void 0!==h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+i(h.x1,h.x2,h.y1,h.y2))),h={}},0):"last"in h&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,void 0!==h.el&&h.el.trigger(i),h.isDoubleTap?(void 0!==h.el&&h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,void 0!==h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={},g=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.process()}),i.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each(function(i,o){o=t.$(this),"none"!=this.style.display&&(i=o.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=n===!1?i:Math.min(n,i))}),t.$(e[n]).addClass(this.options.rowfirst),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each(function(i,e,o,s){s=t.$(this),"none"!=s.css("display")&&(i=s.offset(),e=s.outerHeight(),o=i.top+e,s.data({ukMarginPos:o,ukMarginTop:i.top}),(n===!1||i.top<n.top)&&(n={top:i.top,left:i.left,pos:o}))}).each(function(i){i=t.$(this),"none"!=i.css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var o=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){o.resolve(t.$(i).find("svg"))}),i[n]=o.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({})}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.data("ukScrollspyCls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&(clearTimeout(n.data("scrollspy-idle")),n.data("scrollspy-idle",!1)),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){"#"!==this.getAttribute("href").trim()&&n.push(this.getAttribute("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),h=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top-c.options.topoffset>=u)return e[t]}();if(!h)return;c.options.closest?(o.blur().closest(l).removeClass(r),s=o.filter("a[href='#"+h.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+h.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[h,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.getToggles(),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1,o={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(o.options.dropdownSelector).length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var n=t.$(e.target);n.parents(i.options.dropdownSelector).length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);return i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i?((!i.dropdown.find(e.target).length||o.is(".uk-dropdown-close")||o.parents(".uk-dropdown-close").length)&&i.hide(),void 0):((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show(),void 0)})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({"top-left":"",left:"","margin-left":"","margin-right":""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,n=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),s=this.options.offset,a=this.dropdown,r=(a.show().offset()||{left:0,top:0},a.outerWidth()),l=a.outerHeight(),c=this.boundary.width(),u=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),h={"bottom-left":{top:0+n.height+s,left:0},"bottom-right":{top:0+n.height+s,left:0+n.width-r},"bottom-center":{top:0+n.height+s,left:0+n.width/2-r/2},"top-left":{top:0-l-s,left:0},"top-right":{top:0-l-s,left:0+n.width-r},"top-center":{top:0-l-s,left:0+n.width/2-r/2},"left-top":{top:0,left:0-r-s},"left-bottom":{top:0+n.height-l,left:0-r-s},"left-center":{top:0+n.height/2-l/2,left:0-r-s},"right-top":{top:0,left:0+n.width+s},"right-bottom":{top:0+n.height-l,left:0+n.width+s},"right-center":{top:0+n.height/2-l/2,left:0+n.width+s}},d={};if(e=u.split("-"),d=h[u]?h[u]:h["bottom-left"],this.justified&&this.justified.length)i(a.css({left:0}),this.justified,c);else if(this.options.preventflip!==!0){var p;switch(this.checkBoundary(n.left+d.left,n.top+d.top,r,l,c)){case"x":"x"!==this.options.preventflip&&(p=o.x[u]||"right-top");break;case"y":"y"!==this.options.preventflip&&(p=o.y[u]||"top-left");break;case"xy":this.options.preventflip||(p=o.xy[u]||"right-bottom")}p&&(e=p.split("-"),d=h[p]?h[p]:h["bottom-left"],this.checkBoundary(n.left+d.left,n.top+d.top,r,l,c)&&(e=u.split("-"),d=h[u]?h[u]:h["bottom-left"]))}r>c&&(a.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),a.css(d).css("display","").addClass("uk-dropdown-"+e[0])
}},checkBoundary:function(i,e,n,o,s){var a="";return(0>i||i-t.$win.scrollLeft()+n>s)&&(a+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+o>window.innerHeight)&&(a+="y"),a}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block","margin-left":"","margin-right":""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.element.is(":visible")&&e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.$win.on("resize orientationchange",t.Utils.debounce(function(){t.$(".uk-modal.uk-open").each(function(){t.$(this).data("modal").resize()})},150)),t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()}),t.domObserve(this.element,function(){i.resize()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var i=this;if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(!0),this.options.modal&&(n=this),this.active=!0,o++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){i.hasTransitioned=!0}).addClass("uk-open")):this.element.addClass("uk-open"),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(t){if(this.isActive()||t){var i=e.width();if(this.scrollbarwidth=window.innerWidth-i,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var n=this.dialog.outerHeight(),o=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);n+o<window.innerHeight?this.dialog.css({top:window.innerHeight/2-n/2-o}):this.dialog.css({top:""})}}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css({"max-height":o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,o>0?o--:o=0,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.element.hasClass("uk-open")}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var s=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():n(),s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){s.element.find(".js-modal-confirm").focus()},50)}),s.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){a.focus()},50)}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.find(this.options.lists).each(function(){var e=t.$(this),n=e.parent(),o=n.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden")),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n){if(n=t.$(n),n.length){var o=t.$("body"),s=n.find(".uk-offcanvas-bar:first"),a="right"==t.langdirection,r=s.hasClass("uk-offcanvas-bar-flip")?-1:1,l=r*(a?-1:1),c=window.innerWidth-o.width();i={x:window.pageXOffset,y:window.pageYOffset},n.addClass("uk-active"),o.css({width:window.innerWidth-c,height:window.innerHeight}).addClass("uk-offcanvas-page"),o.css(a?"margin-right":"margin-left",(a?-1:1)*s.outerWidth()*l).width(),e.css("margin-top",-1*i.y),s.addClass("uk-offcanvas-bar-show"),this._initElement(n),s.trigger("show.uk.offcanvas",[n,s]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&(t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click","a[href*='#']",function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(i[0].hash)}catch(o){n=""}n.length||(n=t.$('[name="'+i[0].hash.replace("#","")+'"]')),n.length&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target)})}}),t.offcanvas=n}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),t.$body.css("overflow-x","hidden"),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){setTimeout(function(){n.removeClass(""+a).css({opacity:"",display:""})},0),s.resolve(),t.$body.css("overflow-x",""),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;if(this.on("click.uk.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect){this.connect=t.$(this.options.connect),this.connect.children().removeClass("uk-active"),this.connect.length&&(this.connect.children().attr("aria-hidden","true"),this.connect.on("click","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}));var e=this.find(this.options.toggle),n=e.filter(".uk-active");if(n.length)this.show(n,!1);else{if(this.options.active===!1)return;n=e.eq(this.options.active),this.show(n.length?n:e.eq(0),!1)}e.not(n).attr("aria-expanded","false"),n.attr("aria-expanded","true")}},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200,swiping:!0},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uk.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uk.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration,swiping:this.options.swiping})),t.dropdown(this.responsivetab,{mode:"click",preventflip:"y"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=e[0].outerHTML.replace("<a ",'<a data-index="'+r+'" '),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);

/*!
 * # Semantic UI 2.2.2 - Dropdown
 *
 */
!function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(a){var o,s=e(this),r=e(n),l=s.selector||"",c="ontouchstart"in n.documentElement,u=(new Date).getTime(),d=[],v=arguments[0],m="string"==typeof v,h=[].slice.call(arguments,1);return s.each(function(f){var g,p,b,w,x,C,S,y,A=e.isPlainObject(a)?e.extend(!0,{},e.fn.dropdown.settings,a):e.extend({},e.fn.dropdown.settings),T=A.className,k=A.message,L=A.fields,I=A.keys,D=A.metadata,q=A.namespace,R=A.regExp,O=A.selector,V=A.error,E=A.templates,M="."+q,F="module-"+q,P=e(this),z=e(A.context),H=P.find(O.text),j=P.find(O.search),U=P.find(O.sizer),N=P.find(O.input),K=P.find(O.icon),B=P.prev().find(O.text).length>0?P.prev().find(O.text):P.prev(),W=P.children(O.menu),$=W.find(O.item),Q=!1,Y=!1,G=!1,J=this,X=P.data(F);y={initialize:function(){y.debug("Initializing dropdown",A),y.is.alreadySetup()?y.setup.reference():(y.setup.layout(),y.refreshData(),y.save.defaults(),y.restore.selected(),y.create.id(),y.bind.events(),y.observeChanges(),y.instantiate())},instantiate:function(){y.verbose("Storing instance of dropdown",y),X=y,P.data(F,y)},destroy:function(){y.verbose("Destroying previous dropdown",P),y.remove.tabbable(),P.off(M).removeData(F),W.off(M),r.off(w),y.disconnect.menuObserver(),y.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(C=new MutationObserver(y.event.select.mutation),S=new MutationObserver(y.event.menu.mutation),y.debug("Setting up mutation observer",C,S),y.observe.select(),y.observe.menu())},disconnect:{menuObserver:function(){S&&S.disconnect()},selectObserver:function(){S&&S.disconnect()}},observe:{select:function(){y.has.input()&&C.observe(N[0],{childList:!0,subtree:!0})},menu:function(){y.has.menu()&&S.observe(W[0],{childList:!0,subtree:!0})}},create:{id:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),w="."+x,y.verbose("Creating unique id for element",x)},userChoice:function(t){var n,a,o;return(t=t||y.get.userValues())?(t=e.isArray(t)?t:[t],e.each(t,function(t,s){y.get.item(s)===!1&&(o=A.templates.addition(y.add.variables(k.addResult,s)),a=e("<div />").html(o).attr("data-"+D.value,s).attr("data-"+D.text,s).addClass(T.addition).addClass(T.item),A.hideAdditions&&a.addClass(T.hidden),n=n===i?a:n.add(a),y.verbose("Creating user choices for value",s,a))}),n):!1},userLabels:function(t){var n=y.get.userValues();n&&(y.debug("Adding user labels",n),e.each(n,function(e,t){y.verbose("Adding custom user value"),y.add.label(t,t)}))},menu:function(){W=e("<div />").addClass(T.menu).appendTo(P)},sizer:function(){U=e("<span />").addClass(T.sizer).insertAfter(j)}},search:function(e){e=e!==i?e:y.get.query(),y.verbose("Searching for query",e),y.has.minCharacters(e)?y.filter(e):y.hide()},select:{firstUnfiltered:function(){y.verbose("Selecting first non-filtered element"),y.remove.selectedItem(),$.not(O.unselectable).not(O.addition+O.hidden).eq(0).addClass(T.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(O.item).not(O.unselectable).eq(0),n=e.prevAll(O.item).not(O.unselectable).eq(0),i=t.length>0;i?(y.verbose("Moving selection to",t),t.addClass(T.selected)):(y.verbose("Moving selection to",n),n.addClass(T.selected))}},setup:{api:function(){var e={debug:A.debug,urlData:{value:y.get.value(),query:y.get.query()},on:!1};y.verbose("First request, initializing API"),P.api(e)},layout:function(){P.is("select")&&(y.setup.select(),y.setup.returnedObject()),y.has.menu()||y.create.menu(),y.is.search()&&!y.has.search()&&(y.verbose("Adding search input"),j=e("<input />").addClass(T.search).prop("autocomplete","off").insertBefore(H)),y.is.multiple()&&y.is.searchSelection()&&!y.has.sizer()&&y.create.sizer(),A.allowTab&&y.set.tabbable()},select:function(){var t=y.get.selectValues();y.debug("Dropdown initialized on a select",t),P.is("select")&&(N=P),N.parent(O.dropdown).length>0?(y.debug("UI dropdown already exists. Creating dropdown menu only"),P=N.closest(O.dropdown),y.has.menu()||y.create.menu(),W=P.children(O.menu),y.setup.menu(t)):(y.debug("Creating entire dropdown from select"),P=e("<div />").attr("class",N.attr("class")).addClass(T.selection).addClass(T.dropdown).html(E.dropdown(t)).insertBefore(N),N.hasClass(T.multiple)&&N.prop("multiple")===!1&&(y.error(V.missingMultiple),N.prop("multiple",!0)),N.is("[multiple]")&&y.set.multiple(),N.prop("disabled")&&(y.debug("Disabling dropdown"),P.addClass(T.disabled)),N.removeAttr("class").detach().prependTo(P)),y.refresh()},menu:function(e){W.html(E.menu(e,L)),$=W.find(O.item)},reference:function(){y.debug("Dropdown behavior was called on select, replacing with closest dropdown"),P=P.parent(O.dropdown),y.refresh(),y.setup.returnedObject(),m&&(X=y,y.invoke(v))},returnedObject:function(){var e=s.slice(0,f),t=s.slice(f+1);s=e.add(P).add(t)}},refresh:function(){y.refreshSelectors(),y.refreshData()},refreshItems:function(){$=W.find(O.item)},refreshSelectors:function(){y.verbose("Refreshing selector cache"),H=P.find(O.text),j=P.find(O.search),N=P.find(O.input),K=P.find(O.icon),B=P.prev().find(O.text).length>0?P.prev().find(O.text):P.prev(),W=P.children(O.menu),$=W.find(O.item)},refreshData:function(){y.verbose("Refreshing cached metadata"),$.removeData(D.text).removeData(D.value)},clearData:function(){y.verbose("Clearing metadata"),$.removeData(D.text).removeData(D.value),P.removeData(D.defaultText).removeData(D.defaultValue).removeData(D.placeholderText)},toggle:function(){y.verbose("Toggling menu visibility"),y.is.active()?y.hide():y.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},y.can.show()&&!y.is.active()){if(y.debug("Showing dropdown"),!y.has.message()||y.has.maxSelections()||y.has.allResultsFiltered()||y.remove.message(),y.is.allFiltered())return!0;A.onShow.call(J)!==!1&&y.animate.show(function(){y.can.click()&&y.bind.intent(),y.has.menuSearch()&&y.focusSearch(),y.set.visible(),t.call(J)})}},hide:function(t){t=e.isFunction(t)?t:function(){},y.is.active()&&(y.debug("Hiding dropdown"),A.onHide.call(J)!==!1&&y.animate.hide(function(){y.remove.visible(),t.call(J)}))},hideOthers:function(){y.verbose("Finding other dropdowns to hide"),s.not(P).has(O.menu+"."+T.visible).dropdown("hide")},hideMenu:function(){y.verbose("Hiding menu  instantaneously"),y.remove.active(),y.remove.visible(),W.transition("hide")},hideSubMenus:function(){var e=W.children(O.item).find(O.menu);y.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){c&&y.bind.touchEvents(),y.bind.keyboardEvents(),y.bind.inputEvents(),y.bind.mouseEvents()},touchEvents:function(){y.debug("Touch device detected binding additional touch events"),y.is.searchSelection()||y.is.single()&&P.on("touchstart"+M,y.event.test.toggle),W.on("touchstart"+M,O.item,y.event.item.mouseenter)},keyboardEvents:function(){y.verbose("Binding keyboard events"),P.on("keydown"+M,y.event.keydown),y.has.search()&&P.on(y.get.inputEvent()+M,O.search,y.event.input),y.is.multiple()&&r.on("keydown"+w,y.event.document.keydown)},inputEvents:function(){y.verbose("Binding input change events"),P.on("change"+M,O.input,y.event.change)},mouseEvents:function(){y.verbose("Binding mouse events"),y.is.multiple()&&P.on("click"+M,O.label,y.event.label.click).on("click"+M,O.remove,y.event.remove.click),y.is.searchSelection()?(P.on("mousedown"+M,y.event.mousedown).on("mouseup"+M,y.event.mouseup).on("mousedown"+M,O.menu,y.event.menu.mousedown).on("mouseup"+M,O.menu,y.event.menu.mouseup).on("click"+M,O.icon,y.event.icon.click).on("focus"+M,O.search,y.event.search.focus).on("click"+M,O.search,y.event.search.focus).on("blur"+M,O.search,y.event.search.blur).on("click"+M,O.text,y.event.text.focus),y.is.multiple()&&P.on("click"+M,y.event.click)):("click"==A.on?P.on("click"+M,O.icon,y.event.icon.click).on("click"+M,y.event.test.toggle):"hover"==A.on?P.on("mouseenter"+M,y.delay.show).on("mouseleave"+M,y.delay.hide):P.on(A.on+M,y.toggle),P.on("mousedown"+M,y.event.mousedown).on("mouseup"+M,y.event.mouseup).on("focus"+M,y.event.focus).on("blur"+M,y.event.blur)),W.on("mouseenter"+M,O.item,y.event.item.mouseenter).on("mouseleave"+M,O.item,y.event.item.mouseleave).on("click"+M,O.item,y.event.item.click)},intent:function(){y.verbose("Binding hide intent event to document"),c&&r.on("touchstart"+w,y.event.test.touch).on("touchmove"+w,y.event.test.touch),r.on("click"+w,y.event.test.hide)}},unbind:{intent:function(){y.verbose("Removing hide intent event from document"),c&&r.off("touchstart"+w).off("touchmove"+w),r.off("click"+w)}},filter:function(e){var t=e!==i?e:y.get.query(),n=function(){y.is.multiple()&&y.filterActive(),y.select.firstUnfiltered(),y.has.allResultsFiltered()?A.onNoResults.call(J,t)?A.allowAdditions?A.hideAdditions&&(y.verbose("User addition with no menu, setting empty style"),y.set.empty(),y.hideMenu()):(y.verbose("All items filtered, showing message",t),y.add.message(k.noResults)):(y.verbose("All items filtered, hiding dropdown",t),y.hideMenu()):(y.remove.empty(),y.remove.message()),A.allowAdditions&&y.add.userSuggestion(e),y.is.searchSelection()&&y.can.show()&&y.is.focusedOnSearch()&&y.show()};A.useLabels&&y.has.maxSelections()||(A.apiSettings?y.can.useAPI()?y.queryRemote(t,function(){n()}):y.error(V.noAPI):(y.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:A.throttle,urlData:{query:t},onError:function(){y.add.message(k.serverError),n()},onFailure:function(){y.add.message(k.serverError),n()},onSuccess:function(e){y.remove.message(),y.setup.menu({values:e[L.remoteValues]}),n()}};P.api("get request")||y.setup.api(),i=e.extend(!0,{},i,A.apiSettings),P.api("setting",i).api("query")},filterItems:function(t){var n=t!==i?t:y.get.query(),a=null,o=y.escape.regExp(n),s=new RegExp("^"+o,"igm");y.has.query()&&(a=[],y.verbose("Searching for matching values",n),$.each(function(){var t,i,o=e(this);if("both"==A.match||"text"==A.match){if(t=String(y.get.choiceText(o,!1)),-1!==t.search(s))return a.push(this),!0;if("exact"===A.fullTextSearch&&y.exactSearch(n,t))return a.push(this),!0;if(A.fullTextSearch===!0&&y.fuzzySearch(n,t))return a.push(this),!0}if("both"==A.match||"value"==A.match){if(i=String(y.get.choiceValue(o,t)),-1!==i.search(s))return a.push(this),!0;if(A.fullTextSearch&&y.fuzzySearch(n,i))return a.push(this),!0}})),y.debug("Showing only matched items",n),y.remove.filteredItem(),a&&$.not(a).addClass(T.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var a=0,o=0;i>a;a++){for(var s=e.charCodeAt(a);n>o;)if(t.charCodeAt(o++)===s)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1?!0:!1},filterActive:function(){A.useLabels&&$.filter("."+T.active).addClass(T.filtered)},focusSearch:function(e){y.has.search()&&!y.is.focusedOnSearch()&&(e?(P.off("focus"+M,O.search),j.focus(),P.on("focus"+M,O.search,y.event.search.focus)):j.focus())},forceSelection:function(){var e=$.not(T.filtered).filter("."+T.selected).eq(0),t=$.not(T.filtered).filter("."+T.active).eq(0),n=e.length>0?e:t,i=n.length>0;return i?(y.debug("Forcing partial selection to selected item",n),void y.event.item.click.call(n,{},!0)):void(A.allowAdditions?(y.set.selected(y.get.query()),y.remove.searchTerm()):y.remove.searchTerm())},event:{change:function(){G||(y.debug("Input changed, updating selection"),y.set.selected())},focus:function(){A.showOnFocus&&!Q&&y.is.hidden()&&!p&&y.show()},blur:function(e){p=n.activeElement===this,Q||p||(y.remove.activeLabel(),y.hide())},mousedown:function(){y.is.searchSelection()?b=!0:Q=!0},mouseup:function(){y.is.searchSelection()?b=!1:Q=!1},click:function(t){var n=e(t.target);n.is(P)&&(y.is.focusedOnSearch()?y.show():y.focusSearch())},search:{focus:function(){Q=!0,y.is.multiple()&&y.remove.activeLabel(),A.showOnFocus&&y.search()},blur:function(e){p=n.activeElement===this,b||Y||p||(A.forceSelection&&y.has.query()&&y.forceSelection(),y.hide()),b=!1}},icon:{click:function(e){y.toggle(),e.stopPropagation()}},text:{focus:function(e){Q=!0,y.focusSearch()}},input:function(e){(y.is.multiple()||y.is.searchSelection())&&y.set.filtered(),clearTimeout(y.timer),y.timer=setTimeout(y.search,A.delay.search)},label:{click:function(t){var n=e(this),i=P.find(O.label),a=i.filter("."+T.active),o=n.nextAll("."+T.active),s=n.prevAll("."+T.active),r=o.length>0?n.nextUntil(o).add(a).add(n):n.prevUntil(s).add(a).add(n);t.shiftKey?(a.removeClass(T.active),r.addClass(T.active)):t.ctrlKey?n.toggleClass(T.active):(a.removeClass(T.active),n.addClass(T.active)),A.onLabelSelect.apply(this,i.filter("."+T.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(T.active)?y.remove.activeLabels():y.remove.activeLabels(t)}},test:{toggle:function(e){var t=y.is.multiple()?y.show:y.toggle;y.is.bubbledLabelClick(e)||y.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){y.determine.eventOnElement(e,function(){"touchstart"==e.type?y.timer=setTimeout(function(){y.hide()},A.delay.touch):"touchmove"==e.type&&clearTimeout(y.timer)}),e.stopPropagation()},hide:function(e){y.determine.eventInModule(e,y.hide)}},select:{mutation:function(e){y.debug("<select> modified, recreating menu"),y.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),a=e(n.removedNodes?n.removedNodes[0]:!1),o=i.add(a),s=o.is(O.addition)||o.closest(O.addition).length>0,r=o.is(O.message)||o.closest(O.message).length>0;s||r?(y.debug("Updating item selector cache"),y.refreshItems()):(y.debug("Menu modified, updating selector cache"),y.refresh())},mousedown:function(){Y=!0},mouseup:function(){Y=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),a=i.children(O.menu),o=i.siblings(O.item).children(O.menu),s=a.length>0,r=a.find(n).length>0;!r&&s&&(clearTimeout(y.itemTimer),y.itemTimer=setTimeout(function(){y.verbose("Showing sub-menu",a),e.each(o,function(){y.animate.hide(!1,e(this))}),y.animate.show(!1,a)},A.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(O.menu);n.length>0&&(clearTimeout(y.itemTimer),y.itemTimer=setTimeout(function(){y.verbose("Hiding sub-menu",n),y.animate.hide(!1,n)},A.delay.hide))},click:function(t,n){var i=e(this),a=e(t?t.target:""),o=i.find(O.menu),s=y.get.choiceText(i),r=y.get.choiceValue(i,s),l=o.length>0,c=o.find(a).length>0;c||l&&!A.allowCategorySelection||(y.is.searchSelection()&&(A.allowAdditions&&y.remove.userAddition(),y.remove.searchTerm(),y.is.focusedOnSearch()||1==n||y.focusSearch(!0)),A.useLabels||(y.remove.filteredItem(),y.set.scrollPosition(i)),y.determine.selectAction.call(this,s,r))}},document:{keydown:function(e){var t=e.which,n=y.is.inObject(t,I);if(n){var i=P.find(O.label),a=i.filter("."+T.active),o=(a.data(D.value),i.index(a)),s=i.length,r=a.length>0,l=a.length>1,c=0===o,u=o+1==s,d=y.is.searchSelection(),v=y.is.focusedOnSearch(),m=y.is.focused(),h=v&&0===y.get.caretPosition();if(d&&!r&&!v)return;t==I.leftArrow?!m&&!h||r?r&&(e.shiftKey?y.verbose("Adding previous label to selection"):(y.verbose("Selecting previous label"),i.removeClass(T.active)),c&&!l?a.addClass(T.active):a.prev(O.siblingLabel).addClass(T.active).end(),e.preventDefault()):(y.verbose("Selecting previous label"),i.last().addClass(T.active)):t==I.rightArrow?(m&&!r&&i.first().addClass(T.active),r&&(e.shiftKey?y.verbose("Adding next label to selection"):(y.verbose("Selecting next label"),i.removeClass(T.active)),u?d?v?i.removeClass(T.active):y.focusSearch():l?a.next(O.siblingLabel).addClass(T.active):a.addClass(T.active):a.next(O.siblingLabel).addClass(T.active),e.preventDefault())):t==I.deleteKey||t==I.backspace?r?(y.verbose("Removing active labels"),u&&d&&!v&&y.focusSearch(),a.last().next(O.siblingLabel).addClass(T.active),y.remove.activeLabels(a),e.preventDefault()):h&&!r&&t==I.backspace&&(y.verbose("Removing last label on input backspace"),a=i.last().addClass(T.active),y.remove.activeLabels(a)):a.removeClass(T.active)}}},keydown:function(e){var t=e.which,n=y.is.inObject(t,I);if(n){var i,a,o=$.not(O.unselectable).filter("."+T.selected).eq(0),s=W.children("."+T.active).eq(0),r=o.length>0?o:s,l=r.length>0?r.siblings(":not(."+T.filtered+")").addBack():W.children(":not(."+T.filtered+")"),c=r.children(O.menu),u=r.closest(O.menu),d=u.hasClass(T.visible)||u.hasClass(T.animating)||u.parent(O.menu).length>0,v=c.length>0,m=r.length>0,h=r.not(O.unselectable).length>0,f=t==I.delimiter&&A.allowAdditions&&y.is.multiple(),g=A.allowAdditions&&A.hideAdditions&&(t==I.enter||f)&&h;if(g&&(y.verbose("Selecting item from keyboard shortcut",r),y.event.item.click.call(r,e),y.is.searchSelection()&&y.remove.searchTerm()),y.is.visible()){if((t==I.enter||f)&&(t==I.enter&&m&&v&&!A.allowCategorySelection?(y.verbose("Pressed enter on unselectable category, opening sub menu"),t=I.rightArrow):h&&(y.verbose("Selecting item from keyboard shortcut",r),y.event.item.click.call(r,e),y.is.searchSelection()&&y.remove.searchTerm()),e.preventDefault()),m&&(t==I.leftArrow&&(a=u[0]!==W[0],a&&(y.verbose("Left key pressed, closing sub-menu"),y.animate.hide(!1,u),r.removeClass(T.selected),u.closest(O.item).addClass(T.selected),e.preventDefault())),t==I.rightArrow&&v&&(y.verbose("Right key pressed, opening sub-menu"),y.animate.show(!1,c),r.removeClass(T.selected),c.find(O.item).eq(0).addClass(T.selected),e.preventDefault())),t==I.upArrow){if(i=m&&d?r.prevAll(O.item+":not("+O.unselectable+")").eq(0):$.eq(0),l.index(i)<0)return y.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();y.verbose("Up key pressed, changing active item"),r.removeClass(T.selected),i.addClass(T.selected),y.set.scrollPosition(i),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(i),e.preventDefault()}if(t==I.downArrow){if(i=m&&d?i=r.nextAll(O.item+":not("+O.unselectable+")").eq(0):$.eq(0),0===i.length)return y.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();y.verbose("Down key pressed, changing active item"),$.removeClass(T.selected),i.addClass(T.selected),y.set.scrollPosition(i),A.selectOnKeydown&&y.is.single()&&(y.set.activeItem(i),y.set.selected(y.get.choiceValue(i),i)),e.preventDefault()}t==I.pageUp&&(y.scrollPage("up"),e.preventDefault()),t==I.pageDown&&(y.scrollPage("down"),e.preventDefault()),t==I.escape&&(y.verbose("Escape key pressed, closing dropdown"),y.hide())}else f&&e.preventDefault(),t!=I.downArrow||y.is.visible()||(y.verbose("Down key pressed, showing dropdown"),y.select.firstUnfiltered(),y.show(),e.preventDefault())}else y.has.search()||y.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=N[0];t&&(y.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){y.verbose("Determining action",A.action),e.isFunction(y.action[A.action])?(y.verbose("Triggering preset action",A.action,t,n),y.action[A.action].call(J,t,n,this)):e.isFunction(A.action)?(y.verbose("Triggering user action",A.action,t,n),A.action.call(J,t,n,this)):y.error(V.action,A.action)},eventInModule:function(t,i){var a=e(t.target),o=a.closest(n.documentElement).length>0,s=a.closest(P).length>0;return i=e.isFunction(i)?i:function(){},o&&!s?(y.verbose("Triggering event",i),i(),!0):(y.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var a=e(t.target),o=a.closest(O.siblingLabel),s=n.body.contains(t.target),r=0===P.find(o).length,l=0===a.closest(W).length;return i=e.isFunction(i)?i:function(){},s&&r&&l?(y.verbose("Triggering event",i),i(),!0):(y.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,a){if(n=n!==i?n:t,y.can.activate(e(a))){if(y.set.selected(n,e(a)),y.is.multiple()&&!y.is.allFiltered())return;y.hideAndClear()}},select:function(e,t,n){y.action.activate.call(n)},combo:function(t,n,a){n=n!==i?n:t,y.set.selected(n,e(a)),y.hideAndClear()},hide:function(e,t,n){y.set.value(t,e),y.hideAndClear()}},get:{id:function(){return x},defaultText:function(){return P.data(D.defaultText)},defaultValue:function(){return P.data(D.defaultValue)},placeholderText:function(){return P.data(D.placeholderText)||""},text:function(){return H.text()},query:function(){return e.trim(j.val())},searchWidth:function(e){return e=e!==i?e:j.val(),U.text(e),Math.ceil(U.width()+1)},selectionCount:function(){var t,n=y.get.values();return t=y.is.multiple()?e.isArray(n)?n.length:0:""!==y.get.value()?1:0},transition:function(e){return"auto"==A.transition?y.is.upward(e)?"slide up":"slide down":A.transition},userValues:function(){var t=y.get.values();return t?(t=e.isArray(t)?t:[t],e.grep(t,function(e){return y.get.item(e)===!1})):!1},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=j.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=N.length>0?N.val():P.data(D.value),n=e.isArray(t)&&1===t.length&&""===t[0];return t===i||n?"":t},values:function(){var e=y.get.value();return""===e?"":!y.has.selectInput()&&y.is.multiple()?"string"==typeof e?e.split(A.delimiter):"":e},remoteValues:function(){var t=y.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=y.read.remoteData(t);y.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){return n=n!==i?n:A.preserveHTML,t?(t.find(O.menu).length>0&&(y.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(O.menu).remove(),t.find(O.menuIcon).remove()),t.data(D.text)!==i?t.data(D.text):n?e.trim(t.html()):e.trim(t.text())):void 0},choiceValue:function(t,n){return n=n||y.get.choiceText(t),t?t.data(D.value)!==i?String(t.data(D.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n):!1},inputEvent:function(){var e=j[0];return e?e.oninput!==i?"input":e.onpropertychange!==i?"propertychange":"keyup":!1},selectValues:function(){var t={};return t.values=[],P.find("option").each(function(){var n=e(this),a=n.html(),o=n.attr("disabled"),s=n.attr("value")!==i?n.attr("value"):a;"auto"===A.placeholder&&""===s?t.placeholder=a:t.values.push({name:a,value:s,disabled:o})}),A.placeholder&&"auto"!==A.placeholder&&(y.debug("Setting placeholder value to",A.placeholder),t.placeholder=A.placeholder),A.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),y.debug("Retrieved and sorted values from select",t)):y.debug("Retrieved values from select",t),t},activeItem:function(){return $.filter("."+T.active)},selectedItem:function(){var e=$.not(O.unselectable).filter("."+T.selected);return e.length>0?e:$.eq(0)},itemWithAdditions:function(e){var t=y.get.item(e),n=y.create.userChoice(e),i=n&&n.length>0;return i&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var a,o,s=!1;return t=t!==i?t:y.get.values()!==i?y.get.values():y.get.text(),a=o?t.length>0:t!==i&&null!==t,o=y.is.multiple()&&e.isArray(t),n=""===t||0===t?!0:n||!1,a&&$.each(function(){var a=e(this),r=y.get.choiceText(a),l=y.get.choiceValue(a,r);if(null!==l&&l!==i)if(o)(-1!==e.inArray(String(l),t)||-1!==e.inArray(r,t))&&(s=s?s.add(a):a);else if(n){if(y.verbose("Ambiguous dropdown value using strict type check",a,t),l===t||r===t)return s=a,!0}else if(String(l)==String(t)||r==t)return y.verbose("Found select item by value",l,t),s=a,!0}),s}},check:{maxSelections:function(e){return A.maxSelections?(e=e!==i?e:y.get.selectionCount(),e>=A.maxSelections?(y.debug("Maximum selection count reached"),A.useLabels&&($.addClass(T.filtered),y.add.message(k.maxSelections)),!0):(y.verbose("No longer at maximum selection count"),y.remove.message(),y.remove.filteredItem(),y.is.searchSelection()&&y.filterItems(),!1)):!0}},restore:{defaults:function(){y.clear(),y.restore.defaultText(),y.restore.defaultValue()},defaultText:function(){var e=y.get.defaultText(),t=y.get.placeholderText;e===t?(y.debug("Restoring default placeholder text",e),y.set.placeholderText(e)):(y.debug("Restoring default text",e),y.set.text(e))},placeholderText:function(){y.set.placeholderText()},defaultValue:function(){var e=y.get.defaultValue();e!==i&&(y.debug("Restoring default value",e),""!==e?(y.set.value(e),y.set.selected()):(y.remove.activeItem(),y.remove.selectedItem()))},labels:function(){A.allowAdditions&&(A.useLabels||(y.error(V.labels),A.useLabels=!0),y.debug("Restoring selected values"),y.create.userLabels()),y.check.maxSelections()},selected:function(){y.restore.values(),y.is.multiple()?(y.debug("Restoring previously selected values and labels"),y.restore.labels()):y.debug("Restoring previously selected values")},values:function(){y.set.initialLoad(),A.apiSettings&&A.saveRemoteData&&y.get.remoteValues()?y.restore.remoteValues():y.set.selected(),y.remove.initialLoad()},remoteValues:function(){var t=y.get.remoteValues();y.debug("Recreating selected from session data",t),t&&(y.is.single()?e.each(t,function(e,t){y.set.text(t)}):e.each(t,function(e,t){y.add.label(e,t)}))}},read:{remoteData:function(e){var n;return t.Storage===i?void y.error(V.noStorage):(n=sessionStorage.getItem(e),n!==i?n:!1)}},save:{defaults:function(){y.save.defaultText(),y.save.placeholderText(),y.save.defaultValue()},defaultValue:function(){var e=y.get.value();y.verbose("Saving default value as",e),P.data(D.defaultValue,e)},defaultText:function(){var e=y.get.text();y.verbose("Saving default text as",e),P.data(D.defaultText,e)},placeholderText:function(){var e;A.placeholder!==!1&&H.hasClass(T.placeholder)&&(e=y.get.text(),y.verbose("Saving placeholder text as",e),P.data(D.placeholderText,e))},remoteData:function(e,n){return t.Storage===i?void y.error(V.noStorage):(y.verbose("Saving remote data to session storage",n,e),void sessionStorage.setItem(n,e))}},clear:function(){y.is.multiple()?y.remove.labels():(y.remove.activeItem(),y.remove.selectedItem()),y.set.placeholderText(),y.clearValue()},clearValue:function(){y.set.value("")},scrollPage:function(e,t){var n,i,a,o=t||y.get.selectedItem(),s=o.closest(O.menu),r=s.outerHeight(),l=s.scrollTop(),c=$.eq(0).outerHeight(),u=Math.floor(r/c),d=(s.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),v=$.not(O.unselectable);a="up"==e?v.index(o)-u:v.index(o)+u,n="up"==e?a>=0:a<v.length,i=n?v.eq(a):"up"==e?v.first():v.last(),i.length>0&&(y.debug("Scrolling page",e,i),o.removeClass(T.selected),i.addClass(T.selected),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(i),s.scrollTop(d))},set:{filtered:function(){var e=y.is.multiple(),t=y.is.searchSelection(),n=e&&t,i=t?y.get.query():"",a="string"==typeof i&&i.length>0,o=y.get.searchWidth(),s=""!==i;e&&a&&(y.verbose("Adjusting input width",o,A.glyphWidth),j.css("width",o)),a||n&&s?(y.verbose("Hiding placeholder text"),H.addClass(T.filtered)):(!e||n&&!s)&&(y.verbose("Showing placeholder text"),H.removeClass(T.filtered))},empty:function(){P.addClass(T.empty)},loading:function(){P.addClass(T.loading)},placeholderText:function(e){e=e||y.get.placeholderText(),y.debug("Setting placeholder text",e),y.set.text(e),H.addClass(T.placeholder)},tabbable:function(){y.has.search()?(y.debug("Added tabindex to searchable dropdown"),j.val("").attr("tabindex",0),W.attr("tabindex",-1)):(y.debug("Added tabindex to dropdown"),P.attr("tabindex")===i&&(P.attr("tabindex",0),W.attr("tabindex",-1)))},initialLoad:function(){y.verbose("Setting initial load"),g=!0},activeItem:function(e){A.allowAdditions&&e.filter(O.addition).length>0?e.addClass(T.filtered):e.addClass(T.active)},scrollPosition:function(e,t){var n,a,o,s,r,l,c,u,d,v=5;e=e||y.get.selectedItem(),n=e.closest(O.menu),a=e&&e.length>0,t=t!==i?t:!1,e&&n.length>0&&a&&(s=e.position().top,n.addClass(T.loading),l=n.scrollTop(),r=n.offset().top,s=e.offset().top,o=l-r+s,t||(c=n.height(),d=o+v>l+c,u=l>o-v),y.debug("Scrolling to active item",o),(t||u||d)&&n.scrollTop(o),n.removeClass(T.loading))},text:function(e){"select"!==A.action&&("combo"==A.action?(y.debug("Changing combo button text",e,B),A.preserveHTML?B.html(e):B.text(e)):(e!==y.get.placeholderText()&&H.removeClass(T.placeholder),y.debug("Changing text",e,H),H.removeClass(T.filtered),A.preserveHTML?H.html(e):H.text(e)))},selectedItem:function(e){y.debug("Setting user selection to item",e),y.remove.activeItem(),y.set.activeItem(e),y.set.selected(y.get.choiceValue(e),e)},selectedLetter:function(t){var n,i=$.filter("."+T.selected),a=i.length>0&&y.has.firstLetter(i,t),o=!1;a&&(n=i.nextAll($).eq(0),y.has.firstLetter(n,t)&&(o=n)),o||$.each(function(){return y.has.firstLetter(e(this),t)?(o=e(this),!1):void 0}),o&&(y.verbose("Scrolling to next value with letter",t),y.set.scrollPosition(o),i.removeClass(T.selected),o.addClass(T.selected),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(o))},direction:function(e){"auto"==A.direction?y.is.onScreen(e)?y.remove.upward(e):y.set.upward(e):"upward"==A.direction&&y.set.upward(e)},upward:function(e){var t=e||P;t.addClass(T.upward)},value:function(e,t,n){var a=y.escape.value(e),o=N.length>0,s=(!y.has.value(e),y.get.values()),r=e!==i?String(e):e;if(o){if(!A.allowReselection&&r==s&&(y.verbose("Skipping value update already same value",e,s),!y.is.initialLoad()))return;y.is.single()&&y.has.selectInput()&&y.can.extendSelect()&&(y.debug("Adding user option",e),y.add.optionValue(e)),y.debug("Updating input value",a,s),G=!0,N.val(a),A.fireOnInit===!1&&y.is.initialLoad()?y.debug("Input native change event ignored on initial load"):y.trigger.change(),G=!1}else y.verbose("Storing value in metadata",a,N),a!==s&&P.data(D.value,r);A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("No callback on initial load",A.onChange):A.onChange.call(J,e,t,n)},active:function(){P.addClass(T.active)},multiple:function(){P.addClass(T.multiple)},visible:function(){P.addClass(T.visible)},exactly:function(e,t){y.debug("Setting selected to exact values"),y.clear(),y.set.selected(e,t)},selected:function(t,n){var i=y.is.multiple();n=A.allowAdditions?n||y.get.itemWithAdditions(t):n||y.get.item(t),n&&(y.debug("Setting selected menu item to",n),y.is.multiple()&&y.remove.searchWidth(),y.is.single()?(y.remove.activeItem(),y.remove.selectedItem()):A.useLabels&&y.remove.selectedItem(),n.each(function(){var t=e(this),a=y.get.choiceText(t),o=y.get.choiceValue(t,a),s=t.hasClass(T.filtered),r=t.hasClass(T.active),l=t.hasClass(T.addition),c=i&&1==n.length;i?!r||l?(A.apiSettings&&A.saveRemoteData&&y.save.remoteData(a,o),A.useLabels?(y.add.value(o,a,t),y.add.label(o,a,c),y.set.activeItem(t),y.filterActive(),y.select.nextAvailable(n)):(y.add.value(o,a,t),y.set.text(y.add.variables(k.count)),y.set.activeItem(t))):s||(y.debug("Selected active value, removing label"),y.remove.selected(o)):(A.apiSettings&&A.saveRemoteData&&y.save.remoteData(a,o),y.set.text(a),y.set.value(o,a,t),t.addClass(T.active).addClass(T.selected))}))}},add:{label:function(t,n,i){var a,o=y.is.searchSelection()?j:H,s=y.escape.value(t);return a=e("<a />").addClass(T.label).attr("data-value",s).html(E.label(s,n)),a=A.onLabelCreate.call(a,s,n),y.has.label(t)?void y.debug("Label already exists, skipping",s):(A.label.variation&&a.addClass(A.label.variation),void(i===!0?(y.debug("Animating in label",a),a.addClass(T.hidden).insertBefore(o).transition(A.label.transition,A.label.duration)):(y.debug("Adding selection label",a),a.insertBefore(o))))},message:function(t){var n=W.children(O.message),i=A.templates.message(y.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(T.message).appendTo(W)},optionValue:function(t){var n=y.escape.value(t),i=N.find('option[value="'+n+'"]'),a=i.length>0;a||(y.disconnect.selectObserver(),y.is.single()&&(y.verbose("Removing previous user addition"),N.find("option."+T.addition).remove()),e("<option/>").prop("value",n).addClass(T.addition).html(t).appendTo(N),y.verbose("Adding user addition as an <option>",t),y.observe.select())},userSuggestion:function(e){var t,n=W.children(O.addition),i=y.get.item(e),a=i&&i.not(O.addition).length,o=n.length>0;
if(!A.useLabels||!y.has.maxSelections()){if(""===e||a)return void n.remove();o?(n.data(D.value,e).data(D.text,e).attr("data-"+D.value,e).attr("data-"+D.text,e).removeClass(T.filtered),A.hideAdditions||(t=A.templates.addition(y.add.variables(k.addResult,e)),n.html(t)),y.verbose("Replacing user suggestion with new value",n)):(n=y.create.userChoice(e),n.prependTo(W),y.verbose("Adding item choice to menu corresponding with user choice addition",n)),(!A.hideAdditions||y.is.allFiltered())&&n.addClass(T.selected).siblings().removeClass(T.selected),y.refreshItems()}},variables:function(e,t){var n,i,a=-1!==e.search("{count}"),o=-1!==e.search("{maxCount}"),s=-1!==e.search("{term}");return y.verbose("Adding templated variables to message",e),a&&(n=y.get.selectionCount(),e=e.replace("{count}",n)),o&&(n=y.get.selectionCount(),e=e.replace("{maxCount}",A.maxSelections)),s&&(i=t||y.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var a,o=y.get.values();return""===t?void y.debug("Cannot select blank values from multiselect"):(e.isArray(o)?(a=o.concat([t]),a=y.get.uniqueArray(a)):a=[t],y.has.selectInput()?y.can.extendSelect()&&(y.debug("Adding value to select",t,a,N),y.add.optionValue(t)):(a=a.join(A.delimiter),y.debug("Setting hidden input to delimited value",a,N)),A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("Skipping onadd callback on initial load",A.onAdd):A.onAdd.call(J,t,n,i),y.set.value(a,t,n,i),void y.check.maxSelections())}},remove:{active:function(){P.removeClass(T.active)},activeLabel:function(){P.find(O.label).removeClass(T.active)},empty:function(){P.removeClass(T.empty)},loading:function(){P.removeClass(T.loading)},initialLoad:function(){g=!1},upward:function(e){var t=e||P;t.removeClass(T.upward)},visible:function(){P.removeClass(T.visible)},activeItem:function(){$.removeClass(T.active)},filteredItem:function(){A.useLabels&&y.has.maxSelections()||(A.useLabels&&y.is.multiple()?$.not("."+T.active).removeClass(T.filtered):$.removeClass(T.filtered),y.remove.empty())},optionValue:function(e){var t=y.escape.value(e),n=N.find('option[value="'+t+'"]'),i=n.length>0;i&&n.hasClass(T.addition)&&(C&&(C.disconnect(),y.verbose("Temporarily disconnecting mutation observer")),n.remove(),y.verbose("Removing user addition as an <option>",t),C&&C.observe(N[0],{childList:!0,subtree:!0}))},message:function(){W.children(O.message).remove()},searchWidth:function(){j.css("width","")},searchTerm:function(){y.verbose("Cleared search term"),j.val(""),y.set.filtered()},userAddition:function(){$.filter(O.addition).remove()},selected:function(t,n){return(n=A.allowAdditions?n||y.get.itemWithAdditions(t):n||y.get.item(t))?void n.each(function(){var t=e(this),n=y.get.choiceText(t),i=y.get.choiceValue(t,n);y.is.multiple()?A.useLabels?(y.remove.value(i,n,t),y.remove.label(i)):(y.remove.value(i,n,t),0===y.get.selectionCount()?y.set.placeholderText():y.set.text(y.add.variables(k.count))):y.remove.value(i,n,t),t.removeClass(T.filtered).removeClass(T.active),A.useLabels&&t.removeClass(T.selected)}):!1},selectedItem:function(){$.removeClass(T.selected)},value:function(e,t,n){var i,a=y.get.values();y.has.selectInput()?(y.verbose("Input is <select> removing selected option",e),i=y.remove.arrayValue(e,a),y.remove.optionValue(e)):(y.verbose("Removing from delimited values",e),i=y.remove.arrayValue(e,a),i=i.join(A.delimiter)),A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("No callback on initial load",A.onRemove):A.onRemove.call(J,e,t,n),y.set.value(i,t,n),y.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),y.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=P.find(O.label),i=n.filter('[data-value="'+e+'"]');y.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||P.find(O.label).filter("."+T.active),y.verbose("Removing active label selections",e),y.remove.labels(e)},labels:function(t){t=t||P.find(O.label),y.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(D.value),a=n!==i?String(n):n,o=y.is.userValue(a);return A.onLabelRemove.call(t,n)===!1?void y.debug("Label remove callback cancelled removal"):(y.remove.message(),void(o?(y.remove.value(a),y.remove.label(a)):y.remove.selected(a)))})},tabbable:function(){y.has.search()?(y.debug("Searchable dropdown initialized"),j.removeAttr("tabindex"),W.removeAttr("tabindex")):(y.debug("Simple selection dropdown initialized"),P.removeAttr("tabindex"),W.removeAttr("tabindex"))}},has:{menuSearch:function(){return y.has.search()&&j.closest(W).length>0},search:function(){return j.length>0},sizer:function(){return U.length>0},selectInput:function(){return N.is("select")},minCharacters:function(e){return A.minCharacters?(e=e!==i?String(e):String(y.get.query()),e.length>=A.minCharacters):!0},firstLetter:function(e,t){var n,i;return e&&0!==e.length&&"string"==typeof t?(n=y.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i):!1},input:function(){return N.length>0},items:function(){return $.length>0},menu:function(){return W.length>0},message:function(){return 0!==W.children(O.message).length},label:function(e){var t=y.escape.value(e),n=P.find(O.label);return n.filter('[data-value="'+t+'"]').length>0},maxSelections:function(){return A.maxSelections&&y.get.selectionCount()>=A.maxSelections},allResultsFiltered:function(){var e=$.not(O.addition);return e.filter(O.unselectable).length===e.length},userSuggestion:function(){return W.children(O.addition).length>0},query:function(){return""!==y.get.query()},value:function(t){var n=y.get.values(),i=e.isArray(n)?n&&-1!==e.inArray(t,n):n==t;return i?!0:!1}},is:{active:function(){return P.hasClass(T.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&P.closest("label").length>0},alreadySetup:function(){return P.is("select")&&P.parent(O.dropdown).length>0&&0===P.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):W.transition&&W.transition("is animating")},disabled:function(){return P.hasClass(T.disabled)},focused:function(){return n.activeElement===P[0]},focusedOnSearch:function(){return n.activeElement===j[0]},allFiltered:function(){return(y.is.multiple()||y.has.search())&&!(0==A.hideAdditions&&y.has.userSuggestion())&&!y.has.message()&&y.has.allResultsFiltered()},hidden:function(e){return!y.is.visible(e)},initialLoad:function(){return g},onScreen:function(e){var t,n=e||W,i=!0,a={};return n.addClass(T.loading),t={context:{scrollTop:z.scrollTop(),height:z.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},a={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},a.below?(y.verbose("Dropdown can fit in context downward",a),i=!0):a.below||a.above?(y.verbose("Dropdown cannot fit below, opening upward",a),i=!1):(y.verbose("Dropdown cannot fit in either direction, favoring downward",a),i=!0),n.removeClass(T.loading),i},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){return n==t?(i=!0,!0):void 0}),i},multiple:function(){return P.hasClass(T.multiple)},single:function(){return!y.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){return i.target&&e(i.target).is("select")?(n=!0,!0):void 0}),n},search:function(){return P.hasClass(T.search)},searchSelection:function(){return y.has.search()&&1===j.parent(O.dropdown).length},selection:function(){return P.hasClass(T.selection)},userValue:function(t){return-1!==e.inArray(t,y.get.userValues())},upward:function(e){var t=e||P;return t.hasClass(T.upward)},visible:function(e){return e?e.hasClass(T.visible):W.hasClass(T.visible)}},can:{activate:function(e){return A.useLabels?!0:y.has.maxSelections()?y.has.maxSelections()&&e.hasClass(T.active)?!0:!1:!0},click:function(){return c||"click"==A.on},extendSelect:function(){return A.allowAdditions||A.apiSettings},show:function(){return!y.is.disabled()&&(y.has.items()||y.has.message())},useAPI:function(){return e.fn.api!==i}},animate:{show:function(t,n){var a,o=n||W,s=n?function(){}:function(){y.hideSubMenus(),y.hideOthers(),y.set.active()};t=e.isFunction(t)?t:function(){},y.verbose("Doing menu show animation",o),y.set.direction(n),a=y.get.transition(n),y.is.selection()&&y.set.scrollPosition(y.get.selectedItem(),!0),(y.is.hidden(o)||y.is.animating(o))&&("none"==a?(s(),o.transition("show"),t.call(J)):e.fn.transition!==i&&P.transition("is supported")?o.transition({animation:a+" in",debug:A.debug,verbose:A.verbose,duration:A.duration,queue:!0,onStart:s,onComplete:function(){t.call(J)}}):y.error(V.noTransition,a))},hide:function(t,n){var a=n||W,o=(n?.9*A.duration:A.duration,n?function(){}:function(){y.can.click()&&y.unbind.intent(),y.remove.active()}),s=y.get.transition(n);t=e.isFunction(t)?t:function(){},(y.is.visible(a)||y.is.animating(a))&&(y.verbose("Doing menu hide animation",a),"none"==s?(o(),a.transition("hide"),t.call(J)):e.fn.transition!==i&&P.transition("is supported")?a.transition({animation:s+" out",duration:A.duration,debug:A.debug,verbose:A.verbose,queue:!0,onStart:o,onComplete:function(){"auto"==A.direction&&y.remove.upward(n),t.call(J)}}):y.error(V.transition))}},hideAndClear:function(){y.remove.searchTerm(),y.has.maxSelections()||(y.has.search()?y.hide(function(){y.remove.filteredItem()}):y.hide())},delay:{show:function(){y.verbose("Delaying show event to ensure user intent"),clearTimeout(y.timer),y.timer=setTimeout(y.show,A.delay.show)},hide:function(){y.verbose("Delaying hide event to ensure user intent"),clearTimeout(y.timer),y.timer=setTimeout(y.hide,A.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,a=!i&&!n,o=i&&-1!==t.search(R.quote),s=[];return y.has.selectInput()&&!a&&o?(y.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){s.push(t.replace(R.quote,"&quot;"))}),s):t.replace(R.quote,"&quot;")):t},regExp:function(e){return e=String(e),e.replace(R.escape,"\\$&")}},setting:function(t,n){if(y.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,A,t);else{if(n===i)return A[t];e.isPlainObject(A[t])?e.extend(!0,A[t],n):A[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(n===i)return y[t];y[t]=n}},debug:function(){!A.silent&&A.debug&&(A.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,A.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!A.silent&&A.verbose&&A.debug&&(A.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,A.name+":"),y.verbose.apply(console,arguments)))},error:function(){A.silent||(y.error=Function.prototype.bind.call(console.error,console,A.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;A.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:J,"Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var t=A.name+":",n=0;u=!1,clearTimeout(y.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,a){var s,r,l,c=X;return n=n||h,a=J||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,a){var o=n!=s?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=s)c=c[o];else{if(c[o]!==i)return r=c[o],!1;if(!e.isPlainObject(c[a])||n==s)return c[a]!==i?(r=c[a],!1):(y.error(V.method,t),!1);c=c[a]}})),e.isFunction(r)?l=r.apply(a,n):r!==i&&(l=r),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),r}},m?(X===i&&y.initialize(),y.invoke(v)):(X!==i&&X.invoke("destroy"),y.initialize())}),o!==i?o:s},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values||{},"");return i+='<i class="dropdown icon"></i>',i+=t.placeholder?'<div class="default text">'+n+"</div>":'<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},a="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",o=t[n.disabled]?"disabled ":"";a+='<div class="'+o+'item" data-value="'+t[n.value]+'"'+i+">",a+=t[n.name],a+="</div>"}),a},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document);

/*!
 * # Semantic UI 2.2.2 - Transition
 *
 */
!function(n,e,i,t){"use strict";e="undefined"!=typeof e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),n.fn.transition=function(){var a,o=n(this),r=o.selector||"",s=(new Date).getTime(),l=[],u=arguments,c=u[0],d=[].slice.call(arguments,1),m="string"==typeof c;e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(n){setTimeout(n,0)};return o.each(function(e){var f,p,g,v,b,y,h,w,C,A=n(this),S=this;C={initialize:function(){f=C.get.settings.apply(S,u),v=f.className,g=f.error,b=f.metadata,w="."+f.namespace,h="module-"+f.namespace,p=A.data(h)||C,y=C.get.animationEndEvent(),m&&(m=C.invoke(c)),m===!1&&(C.verbose("Converted arguments into settings object",f),f.interval?C.delay(f.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),p=C,A.data(h,p)},destroy:function(){C.verbose("Destroying previous module for",S),A.removeData(h)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=A.parent(),e=A.next();0===e.length?A.detach().appendTo(n):A.detach().insertBefore(e)},repaint:function(){C.verbose("Repainting element");S.offsetWidth},delay:function(n){var i,a,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),n=n!==t?n:f.interval,i="auto"==f.reverse&&r==v.outward,a=i||1==f.reverse?(o.length-e)*f.interval:e*f.interval,C.debug("Delaying animation by",a),setTimeout(C.animate,a)},animate:function(n){if(f=n||f,!C.is.supported())return C.error(g.support),!1;if(C.debug("Preparing animation",f.animation),C.is.animating()){if(f.queue)return!f.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",f.animation):C.queue(f.animation),!1;if(!f.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;C.debug("New animation started, completing previous early",f.animation),p.complete()}C.can.animate()?C.set.animating(f.animation):C.error(g.noAnimation,f.animation,S)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),C.queuing=!0,A.one(y+".queue"+w,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,f)})},complete:function(n){C.debug("Animation complete",f.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),f.onComplete.call(S)))},force:{visible:function(){var n=A.attr("style"),e=C.get.userStyle(),i=C.get.displayType(),a=e+"display: "+i+" !important;",o=A.css("display"),r=n===t||""===n;o!==i?(C.verbose("Overriding default display to show element",i),A.attr("style",a)):r&&A.removeAttr("style")},hidden:function(){var n=A.attr("style"),e=A.css("display"),i=n===t||""===n;"none"===e||C.is.hidden()?i&&A.removeAttr("style"):(C.verbose("Overriding default display to hide element"),A.css("display","none"))}},has:{direction:function(e){var i=!1;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){(e===v.inward||e===v.outward)&&(i=!0)})),i},inlineDisplay:function(){var e=A.attr("style")||"";return n.isArray(e.match(/display.*?;/,""))}},set:{animating:function(n){var e;C.remove.completeCallback(),n=n||f.animation,e=C.get.animationClass(n),C.save.animation(e),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(e)},duration:function(n,e){e=e||f.duration,e="number"==typeof e?e+"ms":e,(e||0===e)&&(C.verbose("Setting animation duration",e),A.css({"animation-duration":e}))},direction:function(n){n=n||C.get.direction(),n==v.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),A.addClass(v.looping)},hidden:function(){A.addClass(v.transition).addClass(v.hidden)},inward:function(){C.debug("Setting direction to inward"),A.removeClass(v.outward).addClass(v.inward)},outward:function(){C.debug("Setting direction to outward"),A.removeClass(v.inward).addClass(v.outward)},visible:function(){A.addClass(v.transition).addClass(v.visible)}},start:{animation:function(n){n=n||C.get.animationClass(),C.debug("Starting tween",n),A.addClass(n).one(y+".complete"+w,C.complete),f.useFailSafe&&C.add.failSafe(),C.set.duration(f.duration),f.onStart.call(S)}},save:{animation:function(n){C.cache||(C.cache={}),C.cache.animation=n},displayType:function(n){"none"!==n&&A.data(b.displayType,n)},transitionExists:function(e,i){n.fn.transition.exists[e]=i,C.verbose("Saving existence of transition",e,i)}},restore:{conditions:function(){var n=C.get.currentAnimation();n&&(A.removeClass(n),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var n=C.get.duration();C.timer=setTimeout(function(){A.triggerHandler(y)},n+f.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){A.removeClass(v.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){A.off(".queue"+w)},completeCallback:function(){A.off(".complete"+w)},display:function(){A.css("display","")},direction:function(){A.removeClass(v.inward).removeClass(v.outward)},duration:function(){A.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){A.removeClass(v.hidden)},visible:function(){A.removeClass(v.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),A.removeClass(v.looping))},transition:function(){A.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(e,i,t){return"object"==typeof e?n.extend(!0,{},n.fn.transition.settings,e):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:e,onComplete:t,duration:i}):"string"==typeof i||"number"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,duration:i}):"object"==typeof i?n.extend({},n.fn.transition.settings,i,{animation:e}):"function"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,onComplete:i}):n.extend({},n.fn.transition.settings,{animation:e})},animationClass:function(n){var e=n||f.animation,i=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return v.animating+" "+v.transition+" "+i+e},currentAnimation:function(){return C.cache&&C.cache.animation!==t?C.cache.animation:!1},currentDirection:function(){return C.is.inward()?v.inward:v.outward},direction:function(){return C.is.hidden()||!C.is.visible()?v.inward:v.outward},animationDirection:function(e){var i;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e===v.inward?i=v.inward:e===v.outward&&(i=v.outward)})),i?i:!1},duration:function(n){return n=n||f.duration,n===!1&&(n=A.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(){return f.displayType?f.displayType:(A.data(b.displayType)===t&&C.can.transition(!0),A.data(b.displayType))},userStyle:function(n){return n=n||A.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(e){return n.fn.transition.exists[e]},animationStartEvent:function(){var n,e=i.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(e.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,e=i.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(e.style[n]!==t)return a[n];return!1}},can:{transition:function(e){var i,a,o,r,s,l,u,c=f.animation,d=C.get.transitionExists(c);if(d===t||e){if(C.verbose("Determining whether animation exists"),i=A.attr("class"),a=A.prop("tagName"),o=n("<"+a+" />").addClass(i).insertAfter(A),r=o.addClass(c).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),s=o.addClass(v.inward).css("animationName"),u=o.attr("class",i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),C.verbose("Determining final display state",u),C.save.displayType(u),o.remove(),r!=s)C.debug("Direction exists for animation",c),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",c);C.debug("Static animation found",c,u),l=!1}C.save.transitionExists(c,l)}return d!==t?d:l},animate:function(){return C.can.transition()!==t}},is:{animating:function(){return A.hasClass(v.animating)},inward:function(){return A.hasClass(v.inward)},outward:function(){return A.hasClass(v.outward)},looping:function(){return A.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),A.filter(n).length>0},visible:function(){return A.is(":visible")},hidden:function(){return"hidden"===A.css("visibility")},supported:function(){return y!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),S.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),f.onHide.call(S),f.onComplete.call(S)},show:function(n){C.verbose("Showing element",n),C.remove.hidden(),C.set.visible(),C.force.visible(),f.onShow.call(S),f.onComplete.call(S)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),A.triggerHandler(y)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),A.triggerHandler(y)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),A.removeClass(v.disabled)},disable:function(){C.debug("Stopping animation"),A.addClass(v.disabled)},setting:function(e,i){if(C.debug("Changing setting",e,i),n.isPlainObject(e))n.extend(!0,f,e);else{if(i===t)return f[e];n.isPlainObject(f[e])?n.extend(!0,f[e],i):f[e]=i}},internal:function(e,i){if(n.isPlainObject(e))n.extend(!0,C,e);else{if(i===t)return C[e];C[e]=i}},debug:function(){!f.silent&&f.debug&&(f.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,f.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),C.verbose.apply(console,arguments)))},error:function(){f.silent||(C.error=Function.prototype.bind.call(console.error,console,f.name+":"),C.error.apply(console,arguments))},performance:{log:function(n){var e,i,t;f.performance&&(e=(new Date).getTime(),t=s||e,i=e-t,s=e,l.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:S,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=f.name+":",i=0;s=!1,clearTimeout(C.performance.timer),n.each(l,function(n,e){i+=e["Execution Time"]}),e+=" "+i+"ms",r&&(e+=" '"+r+"'"),o.length>1&&(e+=" ("+o.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(e),console.table?console.table(l):n.each(l,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(e,i,o){var r,s,l,u=p;return i=i||d,o=S||o,"string"==typeof e&&u!==t&&(e=e.split(/[\. ]/),r=e.length-1,n.each(e,function(i,a){var o=i!=r?a+e[i+1].charAt(0).toUpperCase()+e[i+1].slice(1):e;if(n.isPlainObject(u[o])&&i!=r)u=u[o];else{if(u[o]!==t)return s=u[o],!1;if(!n.isPlainObject(u[a])||i==r)return u[a]!==t?(s=u[a],!1):!1;u=u[a]}})),n.isFunction(s)?l=s.apply(o,i):s!==t&&(l=s),n.isArray(a)?a.push(l):a!==t?a=[a,l]:l!==t&&(a=l),s!==t?s:!1}},C.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);


/*! UIkit 2.26.4 Sticky.min.js */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-sticky",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(){var i=arguments.length?arguments:n;if(i.length&&!(e.scrollTop()<0))for(var o,a,r,h,p=e.scrollTop(),c=s.height(),l=e.height(),m=c-l,d=p>m?m-p:0,u=0;u<i.length;u++)if(h=i[u],h.element.is(":visible")&&!h.animate){if(h.check()){if(h.top<0?o=0:(r=h.element.outerHeight(),o=c-r-h.top-h.options.bottom-p-d,o=0>o?o+h.top:h.top),h.boundary&&h.boundary.length){var f=h.boundary.offset().top;a=h.boundtoparent?c-(f+h.boundary.outerHeight())+parseInt(h.boundary.css("padding-bottom")):c-f,o=p+r>c-a-(h.top<0?0:h.top)?c-a-(p+r):o}if(h.currentTop!=o){if(h.element.css({position:"fixed",top:o,width:h.getWidthFrom.length?h.getWidthFrom.width():h.element.width()}),!h.init&&(h.element.addClass(h.options.clsinit),location.hash&&p>0&&h.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),s=e.top+t.outerHeight(),n=i.element.offset(),o=i.element.outerHeight(),a=n.top+o;n.top<s&&e.top<a&&(p=e.top-o-i.options.target,window.scrollTo(0,p))}}(g,h),0)}h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive),h.element.trigger("active.uk.sticky"),h.element.css("margin",""),h.options.animation&&h.init&&!t.Utils.isInView(h.wrapper)&&h.element.addClass(h.options.animation),h.currentTop=o}}else null!==h.currentTop&&h.reset();h.init=!0}}var e=t.$win,s=t.$doc,n=[],o=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){e&&e.dir&&(o=e.dir.y,i())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(n.length){for(var t=0;t<n.length;t++)n[t].reset(!0),n[t].self.computeWrapper();i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=this.options.boundary;this.wrapper=this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(),this.computeWrapper(),this.wrapper.css({"margin-top":this.element.css("margin-top"),"margin-bottom":this.element.css("margin-bottom"),"margin-left":this.element.css("margin-left"),"margin-right":this.element.css("margin-right")}),this.element.css("margin",0),a&&(a===!0||"!"===a[0]?(a=a===!0?this.wrapper.parent():this.wrapper.closest(a.substr(1)),i=!0):"string"==typeof a&&(a=t.$(a))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:t.$(this.options.getWidthFrom||this.wrapper),boundary:a,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.element.trigger("inactive.uk.sticky"),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),n=s.height(),a=n-window.innerHeight,r=i>a?a-i:0,h=this.wrapper.offset().top,p=h-this.top-r,c=i>=p;return c&&this.options.showup&&(1==o&&(c=!1),-1==o&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),n.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):""}),"fixed"==this.element.css("position")&&this.element.css({width:this.sticky.getWidthFrom.length?this.sticky.getWidthFrom.width():this.element.width()})}}),t.sticky});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-slider",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e,i,s,n,a={};return t.component("slider",{defaults:{center:!1,threshold:10,infinite:!0,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0,activecls:"uk-active"},boot:function(){t.ready(function(e){setTimeout(function(){t.$("[data-uk-slider]",e).each(function(){var e=t.$(this);e.data("slider")||t.slider(e,t.Utils.options(e.attr("data-uk-slider")))})},0)})},init:function(){var o=this;this.container=this.element.find(".uk-slider"),this.focus=0,t.$win.on("resize load",t.Utils.debounce(function(){o.resize(!0)},100)),this.on("click.uk.slider","[data-uk-slider-item]",function(e){e.preventDefault();var i=t.$(this).attr("data-uk-slider-item");if(o.focus!=i)switch(o.stop(),i){case"next":case"previous":o["next"==i?"next":"previous"]();break;default:o.updateFocus(parseInt(i,10))}}),this.container.on({"touchstart mousedown":function(h){h.originalEvent&&h.originalEvent.touches&&(h=h.originalEvent.touches[0]),h.button&&2==h.button||!o.active||(o.stop(),s=t.$(h.target).is("a")?t.$(h.target):t.$(h.target).parents("a:first"),n=!1,s.length&&s.one("click",function(t){n&&t.preventDefault()}),i=function(t){n=!0,e=o,a={touchx:parseInt(t.pageX,10),dir:1,focus:o.focus,base:o.options.center?"center":"area"},t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),e.element.data({"pointer-start":{x:parseInt(t.pageX,10),y:parseInt(t.pageY,10)},"pointer-pos-start":o.pos}),o.container.addClass("uk-drag"),i=!1},i.x=parseInt(h.pageX,10),i.threshold=o.options.threshold)},mouseenter:function(){o.options.pauseOnHover&&(o.hovering=!0)},mouseleave:function(){o.hovering=!1}}),this.resize(!0),this.on("display.uk.check",function(){o.element.is(":visible")&&o.resize(!0)}),this.element.find("a,img").attr("draggable","false"),this.options.autoplay&&this.start()},resize:function(e){var i,s,n,a,o=this,h=0,r=0;return this.items=this.container.children().filter(":visible"),this.vp=this.element[0].getBoundingClientRect().width,this.container.css({"min-width":"","min-height":""}),this.items.each(function(e){i=t.$(this),a=i.css({left:"",width:""})[0].getBoundingClientRect(),s=a.width,n=i.width(),r=Math.max(r,a.height),i.css({left:h,width:s}).data({idx:e,left:h,width:s,cwidth:n,area:h+s,center:h-(o.vp/2-n/2)}),h+=s}),this.container.css({"min-width":h,"min-height":r}),this.options.infinite&&(h<=2*this.vp||this.items.length<5)&&!this.itemsResized?(this.container.children().each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}).each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}),this.itemsResized=!0,this.resize()):(this.cw=h,this.pos=0,this.active=h>=this.vp,this.container.css({"-ms-transform":"","-webkit-transform":"",transform:""}),e&&this.updateFocus(this.focus),void 0)},updatePos:function(t){this.pos=t,this.container.css({"-ms-transform":"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)",transform:"translateX("+t+"px)"})},updateFocus:function(e,i){if(this.active){i=i||(e>this.focus?1:-1);var s,n,a=this.items.eq(e);if(this.options.infinite&&this.infinite(e,i),this.options.center)this.updatePos(-1*a.data("center")),this.items.filter("."+this.options.activecls).removeClass(this.options.activecls),a.addClass(this.options.activecls);else if(this.options.infinite)this.updatePos(-1*a.data("left"));else{for(s=0,n=e;n<this.items.length;n++)s+=this.items.eq(n).data("width");if(s>this.vp)this.updatePos(-1*a.data("left"));else if(1==i){for(s=0,n=this.items.length-1;n>=0;n--){if(s+=this.items.eq(n).data("width"),s==this.vp){e=n;break}if(s>this.vp){e=n<this.items.length-1?n+1:n;break}}s>this.vp?this.updatePos(-1*(this.container.width()-this.vp)):this.updatePos(-1*this.items.eq(e).data("left"))}}var o=this.items.eq(e).data("left");this.items.removeClass("uk-slide-before uk-slide-after").each(function(i){i!==e&&t.$(this).addClass(t.$(this).data("left")<o?"uk-slide-before":"uk-slide-after")}),this.focus=e,this.trigger("focusitem.uk.slider",[e,this.items.eq(e),this])}},next:function(){var t=this.items[this.focus+1]?this.focus+1:this.options.infinite?0:this.focus;this.updateFocus(t,1)},previous:function(){var t=this.items[this.focus-1]?this.focus-1:this.options.infinite?this.items[this.focus-1]?this.items-1:this.items.length-1:this.focus;this.updateFocus(t,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},infinite:function(t,e){var i,s=this,n=this.items.eq(t),a=t,o=[],h=0;if(1==e){for(i=0;i<this.items.length&&(a!=t&&(h+=this.items.eq(a).data("width"),o.push(this.items.eq(a))),!(h>this.vp));i++)a=a+1==this.items.length?0:a+1;o.length&&o.forEach(function(t){var e=n.data("area");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}else{for(i=this.items.length-1;i>-1&&(h+=this.items.eq(a).data("width"),a!=t&&o.push(this.items.eq(a)),!(h>this.vp));i--)a=a-1==-1?this.items.length-1:a-1;o.length&&o.forEach(function(t){var e=n.data("left")-t.data("width");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}}}),t.$doc.on("mousemove.uk.slider touchmove.uk.slider",function(t){if(t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),i&&Math.abs(t.pageX-i.x)>i.threshold&&(window.getSelection().toString()?e=i=!1:i(t)),e){var s,n,o,h,r,c,f,u,d,l;if(t.clientX||t.clientY?s=t.clientX:(t.pageX||t.pageY)&&(s=t.pageX-document.body.scrollLeft-document.documentElement.scrollLeft),r=a.focus,n=s-e.element.data("pointer-start").x,o=e.element.data("pointer-pos-start")+n,h=s>e.element.data("pointer-start").x?-1:1,c=e.items.eq(a.focus),1==h)for(f=c.data("left")+Math.abs(n),u=0,d=a.focus;u<e.items.length;u++){if(l=e.items.eq(d),d!=a.focus&&l.data("left")<f&&l.data("area")>f){r=d;break}d=d+1==e.items.length?0:d+1}else for(f=c.data("left")-Math.abs(n),u=0,d=a.focus;u<e.items.length;u++){if(l=e.items.eq(d),d!=a.focus&&l.data("area")<=c.data("left")&&l.data("center")<f){r=d;break}d=d-1==-1?e.items.length-1:d-1}e.options.infinite&&r!=a._focus&&e.infinite(r,h),e.updatePos(o),a.dir=h,a._focus=r,a.touchx=parseInt(t.pageX,10),a.diff=f}}),t.$doc.on("mouseup.uk.slider touchend.uk.slider",function(){if(e){e.container.removeClass("uk-drag"),e.items.eq(a.focus);var t,s,n,o=!1;if(1==a.dir)for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")>a.diff){o=n;break}n=n+1==e.items.length?0:n+1}else for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")<a.diff){o=n;break}n=n-1==-1?e.items.length-1:n-1}e.updateFocus(o!==!1?o:a._focus)}e=i=!1}),t.slider});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-accordion",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(i){var o=t.$(i),e="auto";if(o.is(":visible"))e=o.outerHeight();else{var a={position:o.css("position"),visibility:o.css("visibility"),display:o.css("display")};e=o.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),o.css(a)}return e}return t.component("accordion",{defaults:{showfirst:!0,collapse:!0,animate:!0,easing:"swing",duration:300,toggle:".uk-accordion-title",containers:".uk-accordion-content",clsactive:"uk-active"},boot:function(){t.ready(function(i){setTimeout(function(){t.$("[data-uk-accordion]",i).each(function(){var i=t.$(this);i.data("accordion")||t.accordion(i,t.Utils.options(i.attr("data-uk-accordion")))})},0)})},init:function(){var i=this;this.element.on("click.uk.accordion",this.options.toggle,function(o){o.preventDefault(),i.toggleItem(t.$(this).data("wrapper"),i.options.animate,i.options.collapse)}),this.update(),this.options.showfirst&&this.toggleItem(this.toggle.eq(0).data("wrapper"),!1,!1)},toggleItem:function(o,e,a){var n=this;o.data("toggle").toggleClass(this.options.clsactive),o.data("content").toggleClass(this.options.clsactive);var s=o.data("toggle").hasClass(this.options.clsactive);a&&(this.toggle.not(o.data("toggle")).removeClass(this.options.clsactive),this.content.not(o.data("content")).removeClass(this.options.clsactive).parent().stop().css("overflow","hidden").animate({height:0},{easing:this.options.easing,duration:e?this.options.duration:0}).attr("aria-expanded","false")),o.stop().css("overflow","hidden"),e?o.animate({height:s?i(o.data("content")):0},{easing:this.options.easing,duration:this.options.duration,complete:function(){s&&(o.css({overflow:"",height:"auto"}),t.Utils.checkDisplay(o.data("content"))),n.trigger("display.uk.check")}}):(o.height(s?"auto":0),s&&(o.css({overflow:""}),t.Utils.checkDisplay(o.data("content"))),this.trigger("display.uk.check")),o.attr("aria-expanded",s),this.element.trigger("toggle.uk.accordion",[s,o.data("toggle"),o.data("content")])},update:function(){var i,o,e,a=this;this.toggle=this.find(this.options.toggle),this.content=this.find(this.options.containers),this.content.each(function(n){i=t.$(this),i.parent().data("wrapper")?o=i.parent():(o=t.$(this).wrap('<div data-wrapper="true" style="overflow:hidden;height:0;position:relative;"></div>').parent(),o.attr("aria-expanded","false")),e=a.toggle.eq(n),o.data("toggle",e),o.data("content",i),e.data("wrapper",o),i.data("wrapper",o)}),this.element.trigger("update.uk.accordion",[this])}}),t.accordion});

/*!
 * # Semantic UI - Form Validation
 */
!function(e,t,n,r){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var i,a=e(this),o=a.selector||"",s=(new Date).getTime(),l=[],u=arguments[0],c=arguments[1],f="string"==typeof u,d=[].slice.call(arguments,1);return a.each(function(){var p,m,g,h,v,b,y,x,k,E,w,C,V,R,S,F,A,T,j=e(this),D=this,O=[],z=!1;T={initialize:function(){T.get.settings(),f?(A===r&&T.instantiate(),T.invoke(u)):(A!==r&&A.invoke("destroy"),T.verbose("Initializing form validation",j,x),T.bindEvents(),T.set.defaults(),T.instantiate())},instantiate:function(){T.verbose("Storing instance of module",T),A=T,j.data(S,T)},destroy:function(){T.verbose("Destroying previous module",A),T.removeEvents(),j.removeData(S)},refresh:function(){T.verbose("Refreshing selector cache"),p=j.find(w.field),m=j.find(w.group),g=j.find(w.message),h=j.find(w.prompt),v=j.find(w.submit),b=j.find(w.clear),y=j.find(w.reset)},submit:function(){T.verbose("Submitting form",j),j.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+F,function(e){T[n](),e.preventDefault()})},bindEvents:function(){T.verbose("Attaching form events"),j.on("submit"+F,T.validate.form).on("blur"+F,w.field,T.event.field.blur).on("click"+F,w.submit,T.submit).on("click"+F,w.reset,T.reset).on("click"+F,w.clear,T.clear),x.keyboardShortcuts&&j.on("keydown"+F,w.field,T.event.field.keydown),p.each(function(){var t=e(this),n=t.prop("type"),r=T.get.changeEvent(n,t);e(this).on(r+F,T.event.field.change)})},clear:function(){p.each(function(){var t=e(this),n=t.parent(),r=t.closest(m),i=r.find(w.prompt),a=t.data(E.defaultValue)||"",o=n.is(w.uiCheckbox),s=n.is(w.uiDropdown),l=r.hasClass(C.error);l&&(T.verbose("Resetting error on field",r),r.removeClass(C.error),i.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):o?t.prop("checked",!1):(T.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){p.each(function(){var t=e(this),n=t.parent(),i=t.closest(m),a=i.find(w.prompt),o=t.data(E.defaultValue),s=n.is(w.uiCheckbox),l=n.is(w.uiDropdown),u=i.hasClass(C.error);o!==r&&(u&&(T.verbose("Resetting error on field",i),i.removeClass(C.error),a.remove()),l?(T.verbose("Resetting dropdown value",n,o),n.dropdown("restore defaults")):s?(T.verbose("Resetting checkbox value",n,o),t.prop("checked",o)):(T.verbose("Resetting field value",t,o),t.val(o)))})},is:{bracketedRule:function(e){return e.type&&e.type.match(x.regExp.bracket)},empty:function(e){return e&&0!==e.length?e.is('input[type="checkbox"]')?!e.is(":checked"):T.is.blank(e):!0},blank:function(t){return""===e.trim(t.val())},valid:function(){var t=!0;return T.verbose("Checking if form is valid"),e.each(k,function(e,n){T.validate.field(n,e)||(t=!1)}),t}},removeEvents:function(){j.off(F),p.off(F),v.off(F),p.off(F)},event:{field:{keydown:function(t){var n=e(this),r=t.which,i=n.is(w.input),a=n.is(w.checkbox),o=n.closest(w.uiDropdown).length>0,s={enter:13,escape:27};r==s.escape&&(T.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||r!=s.enter||!i||o||a||(z||(n.one("keyup"+F,T.event.field.keyup),T.submit(),T.debug("Enter pressed on input submitting form")),z=!0)},keyup:function(){z=!1},blur:function(t){var n=e(this),r=n.closest(m),i=T.get.validation(n);r.hasClass(C.error)?(T.debug("Revalidating field",n,i),i&&T.validate.field(i)):("blur"==x.on||"change"==x.on)&&i&&T.validate.field(i)},change:function(t){var n=e(this),r=n.closest(m),i=T.get.validation(n);("change"==x.on||r.hasClass(C.error)&&x.revalidate)&&(clearTimeout(T.timer),T.timer=setTimeout(function(){T.debug("Revalidating field",n,T.get.validation(n)),T.validate.field(i)},x.delay))}}},get:{ancillaryValue:function(e){return e.type&&T.is.bracketedRule(e)?e.type.match(x.regExp.bracket)[1]+"":!1},ruleName:function(e){return T.is.bracketedRule(e)?e.type.replace(e.type.match(x.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":T.get.inputEvent()},inputEvent:function(){return n.createElement("input").oninput!==r?"input":n.createElement("input").onpropertychange!==r?"propertychange":"keyup"},prompt:function(e,t){var n,r,i,a=T.get.ruleName(e),o=T.get.ancillaryValue(e),s=e.prompt||x.prompt[a]||x.text.unspecifiedRule,l=-1!==s.search("{value}"),u=-1!==s.search("{name}");return(u||l)&&(r=T.get.field(t.identifier)),l&&(s=s.replace("{value}",r.val())),u&&(n=r.closest(w.group).find("label").eq(0),i=1==n.length?n.text():r.prop("placeholder")||x.text.unspecifiedField,s=s.replace("{name}",i)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",o),e.prompt||T.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n,i=Object.keys(t),a=i.length>0?t[i[0]].identifier!==r&&t[i[0]].rules!==r:!1;a?(x=e.extend(!0,{},e.fn.form.settings,c),k=e.extend({},e.fn.form.settings.defaults,t),T.error(x.error.oldSyntax,D),T.verbose("Extending settings from legacy parameters",k,x)):(t.fields&&(n=Object.keys(t.fields),("string"==typeof t.fields[n[0]]||e.isArray(t.fields[n[0]]))&&e.each(t.fields,function(n,r){"string"==typeof r&&(r=[r]),t.fields[n]={rules:[]},e.each(r,function(e,r){t.fields[n].rules.push({type:r})})})),x=e.extend(!0,{},e.fn.form.settings,t),k=e.extend({},e.fn.form.settings.defaults,x.fields),T.verbose("Extending settings",k,x))}else x=e.fn.form.settings,k=e.fn.form.settings.defaults,T.verbose("Using default form validation",k,x);R=x.namespace,E=x.metadata,w=x.selector,C=x.className,V=x.error,S="module-"+R,F="."+R,A=j.data(S),T.refresh()},field:function(t){return T.verbose("Finding field with identifier",t),p.filter("#"+t).length>0?p.filter("#"+t):p.filter('[name="'+t+'"]').length>0?p.filter('[name="'+t+'"]'):p.filter('[name="'+t+'[]"]').length>0?p.filter('[name="'+t+'[]"]'):p.filter("[data-"+E.validate+'="'+t+'"]').length>0?p.filter("[data-"+E.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(T.get.field(t))}),n},validation:function(t){var n,r;return k?(e.each(k,function(e,i){r=i.identifier||e,T.get.field(r)[0]==t[0]&&(i.identifier=r,n=i)}),n||!1):!1},value:function(e){var t,n=[];return n.push(e),t=T.get.values.call(D,n),t[e]},values:function(t){var n=e.isArray(t)?T.get.fields(t):p,r={};return n.each(function(t,n){var i=e(n),a=(i.prop("type"),i.prop("name")),o=i.val(),s=i.is(w.checkbox),l=i.is(w.radio),u=-1!==a.indexOf("[]"),c=s?i.is(":checked"):!1;a&&(u?(a=a.replace("[]",""),r[a]||(r[a]=[]),s?c?r[a].push(o||!0):r[a].push(!1):r[a].push(o)):l?c&&(r[a]=o):s?c?r[a]=o||!0:r[a]=!1:r[a]=o)}),r}},has:{field:function(e){return T.verbose("Checking for existence of a field with identifier",e),"string"!=typeof e&&T.error(V.identifier,e),p.filter("#"+e).length>0?!0:p.filter('[name="'+e+'"]').length>0?!0:p.filter("[data-"+E.validate+'="'+e+'"]').length>0?!0:!1}},add:{prompt:function(t,n){var i=T.get.field(t),a=i.closest(m),o=a.children(w.prompt),s=0!==o.length;n="string"==typeof n?[n]:n,T.verbose("Adding field error state",t),a.addClass(C.error),x.inline&&(s||(o=x.templates.prompt(n),o.appendTo(a)),o.html(n[0]),s?T.verbose("Inline errors are disabled, no inline error added",t):x.transition&&e.fn.transition!==r&&j.transition("is supported")?(T.verbose("Displaying error with css transition",x.transition),o.transition(x.transition+" in",x.duration)):(T.verbose("Displaying error with fallback javascript animation"),o.fadeIn(x.duration)))},errors:function(e){T.debug("Adding form error messages",e),T.set.error(),g.html(x.templates.error(e))}},remove:{prompt:function(t){var n=T.get.field(t),i=n.closest(m),a=i.children(w.prompt);i.removeClass(C.error),x.inline&&a.is(":visible")&&(T.verbose("Removing prompt for field",t),x.transition&&e.fn.transition!==r&&j.transition("is supported")?a.transition(x.transition+" out",x.duration,function(){a.remove()}):a.fadeOut(x.duration,function(){a.remove()}))}},set:{success:function(){j.removeClass(C.error).addClass(C.success)},defaults:function(){p.each(function(){var t=e(this),n=t.filter(w.checkbox).length>0,r=n?t.is(":checked"):t.val();t.data(E.defaultValue,r)})},error:function(){j.removeClass(C.success).addClass(C.error)},value:function(e,t){var n={};return n[e]=t,T.set.values.call(D,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var r,i=T.get.field(t),a=i.parent(),o=e.isArray(n),s=a.is(w.uiCheckbox),l=a.is(w.uiDropdown),u=i.is(w.radio)&&s,c=i.length>0;c&&(o&&s?(T.verbose("Selecting multiple",n,i),a.checkbox("uncheck"),e.each(n,function(e,t){r=i.filter('[value="'+t+'"]'),a=r.parent(),r.length>0&&a.checkbox("check")})):u?(T.verbose("Selecting radio value",n,i),i.filter('[value="'+n+'"]').parent(w.uiCheckbox).checkbox("check")):s?(T.verbose("Setting checkbox value",n,a),n===!0?a.checkbox("check"):a.checkbox("uncheck")):l?(T.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(T.verbose("Setting field value",n,i),i.val(n)))})}},validate:{form:function(e,t){var n=T.get.values();if(z)return!1;if(O=[],T.is.valid()){if(T.debug("Form has no validation errors, submitting"),T.set.success(),t!==!0)return x.onSuccess.call(D,e,n)}else if(T.debug("Form has errors"),T.set.error(),x.inline||T.add.errors(O),j.data("moduleApi")!==r&&e.stopImmediatePropagation(),t!==!0)return x.onFailure.call(D,O,n)},field:function(t,n){var i=t.identifier||n,a=T.get.field(i),o=t.depends?T.get.field(t.depends):!1,s=!0,l=[];return t.identifier||(T.debug("Using field name as identifier",i),t.identifier=i),a.prop("disabled")?(T.debug("Field is disabled. Skipping",i),s=!0):t.optional&&T.is.blank(a)?(T.debug("Field is optional and blank. Skipping",i),s=!0):t.depends&&T.is.empty(o)?(T.debug("Field depends on another value that is not present or empty. Skipping",o),s=!0):t.rules!==r&&e.each(t.rules,function(e,n){T.has.field(i)&&!T.validate.rule(t,n)&&(T.debug("Field is invalid",i,n.type),l.push(T.get.prompt(n,t)),s=!1)}),s?(T.remove.prompt(i,l),x.onValid.call(a),!0):(O=O.concat(l),T.add.prompt(i,l),x.onInvalid.call(a,l),!1)},rule:function(t,n){var i=T.get.field(t.identifier),a=(n.type,i.val()),o=T.get.ancillaryValue(n),s=T.get.ruleName(n),l=x.rules[s];return e.isFunction(l)?(a=a===r||""===a||null===a?"":e.trim(a+""),l.call(i,a,o)):void T.error(V.noRule,s)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(n===r)return x[t];x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,T,t);else{if(n===r)return T[t];T[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,x.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),T.verbose.apply(console,arguments)))},error:function(){x.silent||(T.error=Function.prototype.bind.call(console.error,console,x.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var t,n,r;x.performance&&(t=(new Date).getTime(),r=s||t,n=t-r,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":n})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var t=x.name+":",n=0;s=!1,clearTimeout(T.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",o&&(t+=" '"+o+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==r||console.table!==r)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var o,s,l,u=A;return n=n||d,a=D||a,"string"==typeof t&&u!==r&&(t=t.split(/[\. ]/),o=t.length-1,e.each(t,function(n,i){var a=n!=o?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[a])&&n!=o)u=u[a];else{if(u[a]!==r)return s=u[a],!1;if(!e.isPlainObject(u[i])||n==o)return u[i]!==r?(s=u[i],!1):!1;u=u[i]}})),e.isFunction(s)?l=s.apply(a,n):s!==r&&(l=s),e.isArray(i)?i.push(l):i!==r?i=[i,l]:l!==r&&(i=l),s}},T.initialize()}),i!==r?i:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{bracket:/\[(.*)\]/i,decimal:/^\d*(\.)\d+/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(t===r||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){var r,i=n.match(e.fn.form.settings.regExp.flags);return i&&(n=i.length>=2?i[1]:n,r=i.length>=3?i[2]:""),t.match(new RegExp(n,r))},integer:function(t,n){var i,a,o,s=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?s.test(n)&&(i=a=n-0):(o=n.split("..",2),s.test(o[0])&&(i=o[0]-0),s.test(o[1])&&(a=o[1]-0))),s.test(t)&&(i===r||t>=i)&&(a===r||a>=t)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,e="string"==typeof e?e.toLowerCase():e,e==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return e!==r?e.length>=t:!1},length:function(e,t){return e!==r?e.length>=t:!1},exactLength:function(e,t){return e!==r?e.length==t:!1},maxLength:function(e,t){return e!==r?e.length<=t:!1},match:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),i!==r?t.toString()==i.toString():!1},different:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),i!==r?t.toString()!==i.toString():!1},creditCard:function(t,n){var r,i,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},o={},s=!1,l="string"==typeof n?n.split(","):!1;if("string"==typeof t&&0!==t.length){if(l&&(e.each(l,function(n,r){i=a[r],i&&(o={length:-1!==e.inArray(t.length,i.length),pattern:-1!==t.search(i.pattern)},o.length&&o.pattern&&(s=!0))}),!s))return!1;if(r={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},r.number&&r.pattern)return!0;for(var u=t.length,c=0,f=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;u--;)d+=f[c][parseInt(t.charAt(u),10)],c^=1;return d%10===0&&d>0}},minCount:function(e,t){return 0==t?!0:1==t?""!==e:e.split(",").length>=t},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0==t?!1:1==t?-1===e.search(","):e.split(",").length<=t}}}}(jQuery,window,document);


/*!
 * # Semantic UI - Visibility
 */
!function(e,n,o,t){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(i){var s,c=e(this),r=c.selector||"",a=(new Date).getTime(),l=[],d=arguments[0],u="string"==typeof d,f=[].slice.call(arguments,1),m=c.length,g=0;return c.each(function(){var c,b,v,p,h=e.isPlainObject(i)?e.extend(!0,{},e.fn.visibility.settings,i):e.extend({},e.fn.visibility.settings),P=h.className,x=h.namespace,C=h.error,y=h.metadata,R="."+x,V="module-"+x,S=e(n),k=e(this),T=e(h.context),O=(k.selector||"",k.data(V)),A=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){setTimeout(e,0)},z=this,w=!1;p={initialize:function(){p.debug("Initializing",h),p.setup.cache(),p.should.trackChanges()&&("image"==h.type&&p.setup.image(),"fixed"==h.type&&p.setup.fixed(),h.observeChanges&&p.observeChanges(),p.bind.events()),p.save.position(),p.is.visible()||p.error(C.visible,k),h.initialCheck&&p.checkVisibility(),p.instantiate()},instantiate:function(){p.debug("Storing instance",p),k.data(V,p),O=p},destroy:function(){p.verbose("Destroying previous module"),v&&v.disconnect(),b&&b.disconnect(),S.off("load"+R,p.event.load).off("resize"+R,p.event.resize),T.off("scroll"+R,p.event.scroll).off("scrollchange"+R,p.event.scrollchange),"fixed"==h.type&&(p.resetFixed(),p.remove.placeholder()),k.off(R).removeData(V)},observeChanges:function(){"MutationObserver"in n&&(b=new MutationObserver(p.event.contextChanged),v=new MutationObserver(p.event.changed),b.observe(o,{childList:!0,subtree:!0}),v.observe(z,{childList:!0,subtree:!0}),p.debug("Setting up mutation observer",v))},bind:{events:function(){p.verbose("Binding visibility events to scroll and resize"),h.refreshOnLoad&&S.on("load"+R,p.event.load),S.on("resize"+R,p.event.resize),T.off("scroll"+R).on("scroll"+R,p.event.scroll).on("scrollchange"+R,p.event.scrollchange)}},event:{changed:function(e){p.verbose("DOM tree modified, updating visibility calculations"),p.timer=setTimeout(function(){p.verbose("DOM tree modified, updating sticky menu"),p.refresh()},100)},contextChanged:function(n){[].forEach.call(n,function(n){n.removedNodes&&[].forEach.call(n.removedNodes,function(n){(n==z||e(n).find(z).length>0)&&(p.debug("Element removed from DOM, tearing down events"),p.destroy())})})},resize:function(){p.debug("Window resized"),h.refreshOnResize&&A(p.refresh)},load:function(){p.debug("Page finished loading"),A(p.refresh)},scroll:function(){h.throttle?(clearTimeout(p.timer),p.timer=setTimeout(function(){T.triggerHandler("scrollchange"+R,[T.scrollTop()])},h.throttle)):A(function(){T.triggerHandler("scrollchange"+R,[T.scrollTop()])})},scrollchange:function(e,n){p.checkVisibility(n)}},precache:function(n,t){n instanceof Array||(n=[n]);for(var i=n.length,s=0,c=[],r=o.createElement("img"),a=function(){s++,s>=n.length&&e.isFunction(t)&&t()};i--;)r=o.createElement("img"),r.onload=a,r.onerror=a,r.src=n[i],c.push(r)},enableCallbacks:function(){p.debug("Allowing callbacks to occur"),w=!1},disableCallbacks:function(){p.debug("Disabling all callbacks temporarily"),w=!0},should:{trackChanges:function(){return u?(p.debug("One time query, no need to bind events"),!1):(p.debug("Callbacks being attached"),!0)}},setup:{cache:function(){p.cache={occurred:{},screen:{},element:{}}},image:function(){var e=k.data(y.src);e&&(p.verbose("Lazy loading image",e),h.once=!0,h.observeChanges=!1,h.onOnScreen=function(){p.debug("Image on screen",z),p.precache(e,function(){p.set.image(e,function(){g++,g==m&&h.onAllLoaded.call(this),h.onLoad.call(this)})})})},fixed:function(){p.debug("Setting up fixed"),h.once=!1,h.observeChanges=!1,h.initialCheck=!0,h.refreshOnLoad=!0,i.transition||(h.transition=!1),p.create.placeholder(),p.debug("Added placeholder",c),h.onTopPassed=function(){p.debug("Element passed, adding fixed position",k),p.show.placeholder(),p.set.fixed(),h.transition&&e.fn.transition!==t&&k.transition(h.transition,h.duration)},h.onTopPassedReverse=function(){p.debug("Element returned to position, removing fixed",k),p.hide.placeholder(),p.remove.fixed()}}},create:{placeholder:function(){p.verbose("Creating fixed position placeholder"),c=k.clone(!1).css("display","none").addClass(P.placeholder).insertAfter(k)}},show:{placeholder:function(){p.verbose("Showing placeholder"),c.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){p.verbose("Hiding placeholder"),c.css("display","none").css("visibility","")}},set:{fixed:function(){p.verbose("Setting element to fixed position"),k.addClass(P.fixed).css({position:"fixed",top:h.offset+"px",left:"auto",zIndex:h.zIndex}),h.onFixed.call(z)},image:function(n,o){k.attr("src",n),h.transition?e.fn.transition!==t?k.transition(h.transition,h.duration,o):k.fadeIn(h.duration,o):k.show()}},is:{onScreen:function(){var e=p.get.elementCalculations();return e.onScreen},offScreen:function(){var e=p.get.elementCalculations();return e.offScreen},visible:function(){return p.cache&&p.cache.element?!(0===p.cache.element.width&&0===p.cache.element.offset.top):!1}},refresh:function(){p.debug("Refreshing constants (width/height)"),"fixed"==h.type&&p.resetFixed(),p.reset(),p.save.position(),h.checkOnRefresh&&p.checkVisibility(),h.onRefresh.call(z)},resetFixed:function(){p.remove.fixed(),p.remove.occurred()},reset:function(){p.verbose("Resetting all cached values"),e.isPlainObject(p.cache)&&(p.cache.screen={},p.cache.element={})},checkVisibility:function(e){p.verbose("Checking visibility of element",p.cache.element),!w&&p.is.visible()&&(p.save.scroll(e),p.save.calculations(),p.passed(),p.passingReverse(),p.topVisibleReverse(),p.bottomVisibleReverse(),p.topPassedReverse(),p.bottomPassedReverse(),p.onScreen(),p.offScreen(),p.passing(),p.topVisible(),p.bottomVisible(),p.topPassed(),p.bottomPassed(),h.onUpdate&&h.onUpdate.call(z,p.get.elementCalculations()))},passed:function(n,o){var i=p.get.elementCalculations();if(n&&o)h.onPassed[n]=o;else{if(n!==t)return p.get.pixelsPassed(n)>i.pixelsPassed;i.passing&&e.each(h.onPassed,function(e,n){i.bottomVisible||i.pixelsPassed>p.get.pixelsPassed(e)?p.execute(n,e):h.once||p.remove.occurred(n)})}},onScreen:function(e){var n=p.get.elementCalculations(),o=e||h.onOnScreen,i="onScreen";return e&&(p.debug("Adding callback for onScreen",e),h.onOnScreen=e),n.onScreen?p.execute(o,i):h.once||p.remove.occurred(i),e!==t?n.onOnScreen:void 0},offScreen:function(e){var n=p.get.elementCalculations(),o=e||h.onOffScreen,i="offScreen";return e&&(p.debug("Adding callback for offScreen",e),h.onOffScreen=e),n.offScreen?p.execute(o,i):h.once||p.remove.occurred(i),e!==t?n.onOffScreen:void 0},passing:function(e){var n=p.get.elementCalculations(),o=e||h.onPassing,i="passing";return e&&(p.debug("Adding callback for passing",e),h.onPassing=e),n.passing?p.execute(o,i):h.once||p.remove.occurred(i),e!==t?n.passing:void 0},topVisible:function(e){var n=p.get.elementCalculations(),o=e||h.onTopVisible,i="topVisible";return e&&(p.debug("Adding callback for top visible",e),h.onTopVisible=e),n.topVisible?p.execute(o,i):h.once||p.remove.occurred(i),e===t?n.topVisible:void 0},bottomVisible:function(e){var n=p.get.elementCalculations(),o=e||h.onBottomVisible,i="bottomVisible";return e&&(p.debug("Adding callback for bottom visible",e),h.onBottomVisible=e),n.bottomVisible?p.execute(o,i):h.once||p.remove.occurred(i),e===t?n.bottomVisible:void 0},topPassed:function(e){var n=p.get.elementCalculations(),o=e||h.onTopPassed,i="topPassed";return e&&(p.debug("Adding callback for top passed",e),h.onTopPassed=e),n.topPassed?p.execute(o,i):h.once||p.remove.occurred(i),e===t?n.topPassed:void 0},bottomPassed:function(e){var n=p.get.elementCalculations(),o=e||h.onBottomPassed,i="bottomPassed";return e&&(p.debug("Adding callback for bottom passed",e),h.onBottomPassed=e),n.bottomPassed?p.execute(o,i):h.once||p.remove.occurred(i),e===t?n.bottomPassed:void 0},passingReverse:function(e){var n=p.get.elementCalculations(),o=e||h.onPassingReverse,i="passingReverse";return e&&(p.debug("Adding callback for passing reverse",e),h.onPassingReverse=e),n.passing?h.once||p.remove.occurred(i):p.get.occurred("passing")&&p.execute(o,i),e!==t?!n.passing:void 0},topVisibleReverse:function(e){var n=p.get.elementCalculations(),o=e||h.onTopVisibleReverse,i="topVisibleReverse";return e&&(p.debug("Adding callback for top visible reverse",e),h.onTopVisibleReverse=e),n.topVisible?h.once||p.remove.occurred(i):p.get.occurred("topVisible")&&p.execute(o,i),e===t?!n.topVisible:void 0},bottomVisibleReverse:function(e){var n=p.get.elementCalculations(),o=e||h.onBottomVisibleReverse,i="bottomVisibleReverse";return e&&(p.debug("Adding callback for bottom visible reverse",e),h.onBottomVisibleReverse=e),n.bottomVisible?h.once||p.remove.occurred(i):p.get.occurred("bottomVisible")&&p.execute(o,i),e===t?!n.bottomVisible:void 0},topPassedReverse:function(e){var n=p.get.elementCalculations(),o=e||h.onTopPassedReverse,i="topPassedReverse";return e&&(p.debug("Adding callback for top passed reverse",e),h.onTopPassedReverse=e),n.topPassed?h.once||p.remove.occurred(i):p.get.occurred("topPassed")&&p.execute(o,i),e===t?!n.onTopPassed:void 0},bottomPassedReverse:function(e){var n=p.get.elementCalculations(),o=e||h.onBottomPassedReverse,i="bottomPassedReverse";return e&&(p.debug("Adding callback for bottom passed reverse",e),h.onBottomPassedReverse=e),n.bottomPassed?h.once||p.remove.occurred(i):p.get.occurred("bottomPassed")&&p.execute(o,i),e===t?!n.bottomPassed:void 0},execute:function(e,n){var o=p.get.elementCalculations(),t=p.get.screenCalculations();e=e||!1,e&&(h.continuous?(p.debug("Callback being called continuously",n,o),e.call(z,o,t)):p.get.occurred(n)||(p.debug("Conditions met",n,o),e.call(z,o,t))),p.save.occurred(n)},remove:{fixed:function(){p.debug("Removing fixed position"),k.removeClass(P.fixed).css({position:"",top:"",left:"",zIndex:""}),h.onUnfixed.call(z)},placeholder:function(){p.debug("Removing placeholder content"),c&&c.remove()},occurred:function(e){if(e){var n=p.cache.occurred;n[e]!==t&&n[e]===!0&&(p.debug("Callback can now be called again",e),p.cache.occurred[e]=!1)}else p.cache.occurred={}}},save:{calculations:function(){p.verbose("Saving all calculations necessary to determine positioning"),p.save.direction(),p.save.screenCalculations(),p.save.elementCalculations()},occurred:function(e){e&&(p.cache.occurred[e]===t||p.cache.occurred[e]!==!0)&&(p.verbose("Saving callback occurred",e),p.cache.occurred[e]=!0)},scroll:function(e){e=e+h.offset||T.scrollTop()+h.offset,p.cache.scroll=e},direction:function(){var e,n=p.get.scroll(),o=p.get.lastScroll();return e=n>o&&o?"down":o>n&&o?"up":"static",p.cache.direction=e,p.cache.direction},elementPosition:function(){var e=p.cache.element,n=p.get.screenSize();return p.verbose("Saving element position"),e.fits=e.height<n.height,e.offset=k.offset(),e.width=k.outerWidth(),e.height=k.outerHeight(),p.cache.element=e,e},elementCalculations:function(){var e=p.get.screenCalculations(),n=p.get.elementPosition();return h.includeMargin?(n.margin={},n.margin.top=parseInt(k.css("margin-top"),10),n.margin.bottom=parseInt(k.css("margin-bottom"),10),n.top=n.offset.top-n.margin.top,n.bottom=n.offset.top+n.height+n.margin.bottom):(n.top=n.offset.top,n.bottom=n.offset.top+n.height),n.topVisible=e.bottom>=n.top,n.topPassed=e.top>=n.top,n.bottomVisible=e.bottom>=n.bottom,n.bottomPassed=e.top>=n.bottom,n.pixelsPassed=0,n.percentagePassed=0,n.onScreen=n.topVisible&&!n.bottomPassed,n.passing=n.topPassed&&!n.bottomPassed,n.offScreen=!n.onScreen,n.passing&&(n.pixelsPassed=e.top-n.top,n.percentagePassed=(e.top-n.top)/n.height),p.cache.element=n,p.verbose("Updated element calculations",n),n},screenCalculations:function(){var e=p.get.scroll();return p.save.direction(),p.cache.screen.top=e,p.cache.screen.bottom=e+p.cache.screen.height,p.cache.screen},screenSize:function(){p.verbose("Saving window position"),p.cache.screen={height:T.height()}},position:function(){p.save.screenSize(),p.save.elementPosition()}},get:{pixelsPassed:function(e){var n=p.get.elementCalculations();return e.search("%")>-1?n.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return p.cache.occurred!==t?p.cache.occurred[e]||!1:!1},direction:function(){return p.cache.direction===t&&p.save.direction(),p.cache.direction},elementPosition:function(){return p.cache.element===t&&p.save.elementPosition(),p.cache.element},elementCalculations:function(){return p.cache.element===t&&p.save.elementCalculations(),p.cache.element},screenCalculations:function(){return p.cache.screen===t&&p.save.screenCalculations(),p.cache.screen},screenSize:function(){return p.cache.screen===t&&p.save.screenSize(),p.cache.screen},scroll:function(){return p.cache.scroll===t&&p.save.scroll(),p.cache.scroll},lastScroll:function(){return p.cache.screen===t?(p.debug("First scroll event, no last scroll could be found"),!1):p.cache.screen.top}},setting:function(n,o){if(e.isPlainObject(n))e.extend(!0,h,n);else{if(o===t)return h[n];h[n]=o}},internal:function(n,o){if(e.isPlainObject(n))e.extend(!0,p,n);else{if(o===t)return p[n];p[n]=o}},debug:function(){!h.silent&&h.debug&&(h.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,h.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),p.verbose.apply(console,arguments)))},error:function(){h.silent||(p.error=Function.prototype.bind.call(console.error,console,h.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var n,o,t;h.performance&&(n=(new Date).getTime(),t=a||n,o=n-t,a=n,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":o})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var n=h.name+":",o=0;a=!1,clearTimeout(p.performance.timer),e.each(l,function(e,n){o+=n["Execution Time"]}),n+=" "+o+"ms",r&&(n+=" '"+r+"'"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(n),console.table?console.table(l):e.each(l,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(n,o,i){var c,r,a,l=O;return o=o||f,i=z||i,"string"==typeof n&&l!==t&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(o,i){var s=o!=c?i+n[o+1].charAt(0).toUpperCase()+n[o+1].slice(1):n;if(e.isPlainObject(l[s])&&o!=c)l=l[s];else{if(l[s]!==t)return r=l[s],!1;if(!e.isPlainObject(l[i])||o==c)return l[i]!==t?(r=l[i],!1):(p.error(C.method,n),!1);l=l[i]}})),e.isFunction(r)?a=r.apply(i,o):r!==t&&(a=r),e.isArray(s)?s.push(a):s!==t?s=[s,a]:a!==t&&(s=a),r}},u?(O===t&&p.initialize(),O.save.scroll(),O.save.calculations(),p.invoke(d)):(O!==t&&O.invoke("destroy"),p.initialize())}),s!==t?s:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:n,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);


/*! UIkit Tooltip */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-tooltip",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";var i,o,e;return t.component("tooltip",{defaults:{offset:5,pos:"top",animation:!1,delay:0,cls:"",activeClass:"uk-active",src:function(t){var i=t.attr("title");return void 0!==i&&t.data("cached-title",i).removeAttr("title"),t.data("cached-title")}},tip:"",boot:function(){t.$html.on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var i=t.$(this);i.data("tooltip")||(t.tooltip(i,t.Utils.options(i.attr("data-uk-tooltip"))),i.trigger("mouseenter"))})},init:function(){var o=this;i||(i=t.$('<div class="uk-tooltip"></div>').appendTo("body")),this.on({focus:function(){o.show()},blur:function(){o.hide()},mouseenter:function(){o.show()},mouseleave:function(){o.hide()}})},show:function(){if(this.tip="function"==typeof this.options.src?this.options.src(this.element):this.options.src,o&&clearTimeout(o),e&&clearTimeout(e),"string"==typeof this.tip?this.tip.length:0){i.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.activeClass).show(),i.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var s=this,n=t.$.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),l=i[0].offsetWidth,f=i[0].offsetHeight,p="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,a="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,h=a.split("-"),c={display:"none",visibility:"visible",top:n.top+n.height+f,left:n.left};if("fixed"==t.$html.css("position")||"fixed"==t.$body.css("position")){var r=t.$("body").offset(),d=t.$("html").offset(),u={top:d.top+r.top,left:d.left+r.left};n.left-=u.left,n.top-=u.top}"left"!=h[0]&&"right"!=h[0]||"right"!=t.langdirection||(h[0]="left"==h[0]?"right":"left");var m={bottom:{top:n.top+n.height+p,left:n.left+n.width/2-l/2},top:{top:n.top-f-p,left:n.left+n.width/2-l/2},left:{top:n.top+n.height/2-f/2,left:n.left-l-p},right:{top:n.top+n.height/2-f/2,left:n.left+n.width+p}};t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l);var v=this.checkBoundary(c.left,c.top,l,f);if(v){switch(v){case"x":a=2==h.length?h[0]+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left";break;case"y":a=2==h.length?(c.top<0?"bottom":"top")+"-"+h[1]:c.top<0?"bottom":"top";break;case"xy":a=2==h.length?(c.top<0?"bottom":"top")+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left"}h=a.split("-"),t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l)}c.left-=t.$body.position().left,o=setTimeout(function(){i.css(c).attr("class",["uk-tooltip","uk-tooltip-"+a,s.options.cls].join(" ")),s.options.animation?i.css({opacity:0,display:"block"}).addClass(s.options.activeClass).animate({opacity:1},parseInt(s.options.animation,10)||400):i.show().addClass(s.options.activeClass),o=!1,e=setInterval(function(){s.element.is(":visible")||s.hide()},150)},parseInt(this.options.delay,10)||0)}},hide:function(){if(!this.element.is("input")||this.element[0]!==document.activeElement)if(o&&clearTimeout(o),e&&clearTimeout(e),i.stop(),this.options.animation){var t=this;i.fadeOut(parseInt(this.options.animation,10)||400,function(){i.removeClass(t.options.activeClass)})}else i.hide().removeClass(this.options.activeClass)},content:function(){return this.tip},checkBoundary:function(i,o,e,s){var n="";return(0>i||i-t.$win.scrollLeft()+e>window.innerWidth)&&(n+="x"),(0>o||o-t.$win.scrollTop()+s>window.innerHeight)&&(n+="y"),n}}),t.tooltip});


/*!
 * # Semantic UI - Checkbox
 */
!function(e,n,t,i){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(o){var a,c=e(this),r=c.selector||"",d=(new Date).getTime(),l=[],s=arguments[0],u="string"==typeof s,b=[].slice.call(arguments,1);return c.each(function(){var c,h,g=e.extend(!0,{},e.fn.checkbox.settings,o),p=g.className,f=g.namespace,k=g.selector,m=g.error,v="."+f,y="module-"+f,C=e(this),x=e(this).children(k.label),w=e(this).children(k.input),I=w[0],D=!1,S=!1,E=C.data(y),O=this;h={initialize:function(){h.verbose("Initializing checkbox",g),h.create.label(),h.bind.events(),h.set.tabbable(),h.hide.input(),h.observeChanges(),h.instantiate(),h.setup()},instantiate:function(){h.verbose("Storing instance of module",h),E=h,C.data(y,h)},destroy:function(){h.verbose("Destroying module"),h.unbind.events(),h.show.input(),C.removeData(y)},fix:{reference:function(){C.is(k.input)&&(h.debug("Behavior called on <input> adjusting invoked element"),C=C.closest(k.checkbox),h.refresh())}},setup:function(){h.set.initialLoad(),h.is.indeterminate()?(h.debug("Initial value is indeterminate"),h.indeterminate()):h.is.checked()?(h.debug("Initial value is checked"),h.check()):(h.debug("Initial value is unchecked"),h.uncheck()),h.remove.initialLoad()},refresh:function(){x=C.children(k.label),w=C.children(k.input),I=w[0]},hide:{input:function(){h.verbose("Modifying <input> z-index to be unselectable"),w.addClass(p.hidden)}},show:{input:function(){h.verbose("Modifying <input> z-index to be selectable"),w.removeClass(p.hidden)}},observeChanges:function(){"MutationObserver"in n&&(c=new MutationObserver(function(e){h.debug("DOM tree modified, updating selector cache"),h.refresh()}),c.observe(O,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",c))},attachEvents:function(n,t){var i=e(n);t=e.isFunction(h[t])?h[t]:h.toggle,i.length>0?(h.debug("Attaching checkbox events to element",n,t),i.on("click"+v,t)):h.error(m.notFound)},event:{click:function(n){var t=e(n.target);return t.is(k.input)?void h.verbose("Using default check action on initialized checkbox"):t.is(k.link)?void h.debug("Clicking link inside checkbox, skipping toggle"):(h.toggle(),w.focus(),void n.preventDefault())},keydown:function(e){var n=e.which,t={enter:13,space:32,escape:27};n==t.escape?(h.verbose("Escape key pressed blurring field"),w.blur(),S=!0):e.ctrlKey||n!=t.space&&n!=t.enter?S=!1:(h.verbose("Enter/space key pressed, toggling checkbox"),h.toggle(),S=!0)},keyup:function(e){S&&e.preventDefault()}},check:function(){h.should.allowCheck()&&(h.debug("Checking checkbox",w),h.set.checked(),h.should.ignoreCallbacks()||(g.onChecked.call(I),g.onChange.call(I)))},uncheck:function(){h.should.allowUncheck()&&(h.debug("Unchecking checkbox"),h.set.unchecked(),h.should.ignoreCallbacks()||(g.onUnchecked.call(I),g.onChange.call(I)))},indeterminate:function(){return h.should.allowIndeterminate()?void h.debug("Checkbox is already indeterminate"):(h.debug("Making checkbox indeterminate"),h.set.indeterminate(),void(h.should.ignoreCallbacks()||(g.onIndeterminate.call(I),g.onChange.call(I))))},determinate:function(){return h.should.allowDeterminate()?void h.debug("Checkbox is already determinate"):(h.debug("Making checkbox determinate"),h.set.determinate(),void(h.should.ignoreCallbacks()||(g.onDeterminate.call(I),g.onChange.call(I))))},enable:function(){return h.is.enabled()?void h.debug("Checkbox is already enabled"):(h.debug("Enabling checkbox"),h.set.enabled(),g.onEnable.call(I),void g.onEnabled.call(I))},disable:function(){return h.is.disabled()?void h.debug("Checkbox is already disabled"):(h.debug("Disabling checkbox"),h.set.disabled(),g.onDisable.call(I),void g.onDisabled.call(I))},get:{radios:function(){var n=h.get.name();return e('input[name="'+n+'"]').closest(k.checkbox)},otherRadios:function(){return h.get.radios().not(C)},name:function(){return w.attr("name")}},is:{initialLoad:function(){return D},radio:function(){return w.hasClass(p.radio)||"radio"==w.attr("type")},indeterminate:function(){return w.prop("indeterminate")!==i&&w.prop("indeterminate")},checked:function(){return w.prop("checked")!==i&&w.prop("checked")},disabled:function(){return w.prop("disabled")!==i&&w.prop("disabled")},enabled:function(){return!h.is.disabled()},determinate:function(){return!h.is.indeterminate()},unchecked:function(){return!h.is.checked()}},should:{allowCheck:function(){return h.is.determinate()&&h.is.checked()&&!h.should.forceCallbacks()?(h.debug("Should not allow check, checkbox is already checked"),!1):g.beforeChecked.apply(I)===!1?(h.debug("Should not allow check, beforeChecked cancelled"),!1):!0},allowUncheck:function(){return h.is.determinate()&&h.is.unchecked()&&!h.should.forceCallbacks()?(h.debug("Should not allow uncheck, checkbox is already unchecked"),!1):g.beforeUnchecked.apply(I)===!1?(h.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1):!0},allowIndeterminate:function(){return h.is.indeterminate()&&!h.should.forceCallbacks()?(h.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):g.beforeIndeterminate.apply(I)===!1?(h.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1):!0},allowDeterminate:function(){return h.is.determinate()&&!h.should.forceCallbacks()?(h.debug("Should not allow determinate, checkbox is already determinate"),!1):g.beforeDeterminate.apply(I)===!1?(h.debug("Should not allow determinate, beforeDeterminate cancelled"),!1):!0},forceCallbacks:function(){return h.is.initialLoad()&&g.fireOnInit},ignoreCallbacks:function(){return D&&!g.fireOnInit}},can:{change:function(){return!(C.hasClass(p.disabled)||C.hasClass(p.readOnly)||w.prop("disabled")||w.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!h.is.radio()}},set:{initialLoad:function(){D=!0},checked:function(){return h.verbose("Setting class to checked"),C.removeClass(p.indeterminate).addClass(p.checked),h.is.radio()&&h.uncheckOthers(),!h.is.indeterminate()&&h.is.checked()?void h.debug("Input is already checked, skipping input property change"):(h.verbose("Setting state to checked",I),w.prop("indeterminate",!1).prop("checked",!0),void h.trigger.change())},unchecked:function(){return h.verbose("Removing checked class"),C.removeClass(p.indeterminate).removeClass(p.checked),!h.is.indeterminate()&&h.is.unchecked()?void h.debug("Input is already unchecked"):(h.debug("Setting state to unchecked"),w.prop("indeterminate",!1).prop("checked",!1),void h.trigger.change())},indeterminate:function(){return h.verbose("Setting class to indeterminate"),C.addClass(p.indeterminate),h.is.indeterminate()?void h.debug("Input is already indeterminate, skipping input property change"):(h.debug("Setting state to indeterminate"),w.prop("indeterminate",!0),void h.trigger.change())},determinate:function(){return h.verbose("Removing indeterminate class"),C.removeClass(p.indeterminate),h.is.determinate()?void h.debug("Input is already determinate, skipping input property change"):(h.debug("Setting state to determinate"),void w.prop("indeterminate",!1))},disabled:function(){return h.verbose("Setting class to disabled"),C.addClass(p.disabled),h.is.disabled()?void h.debug("Input is already disabled, skipping input property change"):(h.debug("Setting state to disabled"),w.prop("disabled","disabled"),void h.trigger.change())},enabled:function(){return h.verbose("Removing disabled class"),C.removeClass(p.disabled),h.is.enabled()?void h.debug("Input is already enabled, skipping input property change"):(h.debug("Setting state to enabled"),w.prop("disabled",!1),void h.trigger.change())},tabbable:function(){h.verbose("Adding tabindex to checkbox"),w.attr("tabindex")===i&&w.attr("tabindex",0)}},remove:{initialLoad:function(){D=!1}},trigger:{change:function(){var e=t.createEvent("HTMLEvents"),n=w[0];n&&(h.verbose("Triggering native change event"),e.initEvent("change",!0,!1),n.dispatchEvent(e))}},create:{label:function(){w.prevAll(k.label).length>0?(w.prev(k.label).detach().insertAfter(w),h.debug("Moving existing label",x)):h.has.label()||(x=e("<label>").insertAfter(w),h.debug("Creating label",x))}},has:{label:function(){return x.length>0}},bind:{events:function(){h.verbose("Attaching checkbox events"),C.on("click"+v,h.event.click).on("keydown"+v,k.input,h.event.keydown).on("keyup"+v,k.input,h.event.keyup)}},unbind:{events:function(){h.debug("Removing events"),C.off(v)}},uncheckOthers:function(){var e=h.get.otherRadios();h.debug("Unchecking other radios",e),e.removeClass(p.checked)},toggle:function(){return h.can.change()?void(h.is.indeterminate()||h.is.unchecked()?(h.debug("Currently unchecked"),h.check()):h.is.checked()&&h.can.uncheck()&&(h.debug("Currently checked"),h.uncheck())):void(h.is.radio()||h.debug("Checkbox is read-only or disabled, ignoring toggle"))},setting:function(n,t){if(h.debug("Changing setting",n,t),e.isPlainObject(n))e.extend(!0,g,n);else{if(t===i)return g[n];e.isPlainObject(g[n])?e.extend(!0,g[n],t):g[n]=t}},internal:function(n,t){if(e.isPlainObject(n))e.extend(!0,h,n);else{if(t===i)return h[n];h[n]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,g.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),h.verbose.apply(console,arguments)))},error:function(){g.silent||(h.error=Function.prototype.bind.call(console.error,console,g.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var n,t,i;g.performance&&(n=(new Date).getTime(),i=d||n,t=n-i,d=n,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":t})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var n=g.name+":",t=0;d=!1,clearTimeout(h.performance.timer),e.each(l,function(e,n){t+=n["Execution Time"]}),n+=" "+t+"ms",r&&(n+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(n),console.table?console.table(l):e.each(l,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(n,t,o){var c,r,d,l=E;return t=t||b,o=O||o,"string"==typeof n&&l!==i&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(t,o){var a=t!=c?o+n[t+1].charAt(0).toUpperCase()+n[t+1].slice(1):n;if(e.isPlainObject(l[a])&&t!=c)l=l[a];else{if(l[a]!==i)return r=l[a],!1;if(!e.isPlainObject(l[o])||t==c)return l[o]!==i?(r=l[o],!1):(h.error(m.method,n),!1);l=l[o]}})),e.isFunction(r)?d=r.apply(o,t):r!==i&&(d=r),e.isArray(a)?a.push(d):a!==i?a=[a,d]:d!==i&&(a=d),r}},u?(E===i&&h.initialize(),h.invoke(s)):(E!==i&&E.invoke("destroy"),h.initialize())}),a!==i?a:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document);

!function(e){var t;window.UIkit&&(t=e(UIkit)),"function"==typeof define&&define.amd&&define("uikit-upload",["uikit"],function(){return t||e(UIkit)})}(function(e){"use strict";function t(o,a){function r(t,n){var o=new FormData,a=new XMLHttpRequest;if(n.before(n,t)!==!1){for(var r,i=0;r=t[i];i++)o.append(n.param,r);for(var l in n.params)o.append(l,n.params[l]);a.upload.addEventListener("progress",function(e){var t=e.loaded/e.total*100;n.progress(t,e)},!1),a.addEventListener("loadstart",function(e){n.loadstart(e)},!1),a.addEventListener("load",function(e){n.load(e)},!1),a.addEventListener("loadend",function(e){n.loadend(e)},!1),a.addEventListener("error",function(e){n.error(e)},!1),a.addEventListener("abort",function(e){n.abort(e)},!1),a.open(n.method,n.action,!0),"json"==n.type&&a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){if(n.readystatechange(a),4==a.readyState){var t=a.responseText;if("json"==n.type)try{t=e.$.parseJSON(t)}catch(o){t=!1}n.complete(t,a)}},n.beforeSend(a),a.send(o)}}if(!e.support.ajaxupload)return this;if(a=e.$.extend({},t.defaults,a),o.length){if("*.*"!==a.allow)for(var i,l=0;i=o[l];l++)if(!n(a.allow,i.name))return"string"==typeof a.notallowed?alert(a.notallowed):a.notallowed(i,a),void 0;var f=a.complete;if(a.single){var s=o.length,d=0,p=!0;a.beforeAll(o),a.complete=function(e,t){d+=1,f(e,t),a.filelimit&&d>=a.filelimit&&(p=!1),p&&s>d?r([o[d]],a):a.allcomplete(e,t)},r([o[0]],a)}else a.complete=function(e,t){f(e,t),a.allcomplete(e,t)},r(o,a)}}function n(e,t){var n="^"+e.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$";return n="^"+n+"$",null!==t.match(new RegExp(n,"i"))}return e.component("uploadSelect",{init:function(){var e=this;this.on("change",function(){t(e.element[0].files,e.options);var n=e.element.clone(!0).data("uploadSelect",e);e.element.replaceWith(n),e.element=n})}}),e.component("uploadDrop",{defaults:{dragoverClass:"uk-dragover"},init:function(){var e=this,n=!1;this.on("drop",function(n){n.originalEvent.dataTransfer&&n.originalEvent.dataTransfer.files&&(n.stopPropagation(),n.preventDefault(),e.element.removeClass(e.options.dragoverClass),e.element.trigger("dropped.uk.upload",[n.originalEvent.dataTransfer.files]),t(n.originalEvent.dataTransfer.files,e.options))}).on("dragenter",function(e){e.stopPropagation(),e.preventDefault()}).on("dragover",function(t){t.stopPropagation(),t.preventDefault(),n||(e.element.addClass(e.options.dragoverClass),n=!0)}).on("dragleave",function(t){t.stopPropagation(),t.preventDefault(),e.element.removeClass(e.options.dragoverClass),n=!1})}}),e.support.ajaxupload=function(){function e(){var e=document.createElement("INPUT");return e.type="file","files"in e}function t(){var e=new XMLHttpRequest;return!!(e&&"upload"in e&&"onprogress"in e.upload)}function n(){return!!window.FormData}return e()&&t()&&n()}(),t.defaults={action:"",single:!0,method:"POST",param:"files[]",params:{},allow:"*.*",type:"text",filelimit:!1,before:function(){},beforeSend:function(){},beforeAll:function(){},loadstart:function(){},load:function(){},loadend:function(){},error:function(){},abort:function(){},progress:function(){},complete:function(){},allcomplete:function(){},readystatechange:function(){},notallowed:function(e,t){alert("Only the following file types are allowed: "+t.allow)}},e.Utils.xhrupload=t,t});

!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-notify",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";var e={},i={},s=function(e){return"string"==t.$.type(e)&&(e={message:e}),arguments[1]&&(e=t.$.extend(e,"string"==t.$.type(arguments[1])?{status:arguments[1]}:arguments[1])),new n(e).show()},o=function(t,e){var s;if(t)for(s in i)t===i[s].group&&i[s].close(e);else for(s in i)i[s].close(e)},n=function(s){this.options=t.$.extend({},n.defaults,s),this.uuid=t.Utils.uid("notifymsg"),this.element=t.$(['<div class="uk-notify-message">','<a class="uk-close"></a>',"<div></div>","</div>"].join("")).data("notifyMessage",this),this.content(this.options.message),this.options.status&&(this.element.addClass("uk-notify-message-"+this.options.status),this.currentstatus=this.options.status),this.group=this.options.group,i[this.uuid]=this,e[this.options.pos]||(e[this.options.pos]=t.$('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo("body").on("click",".uk-notify-message",function(){var e=t.$(this).data("notifyMessage");e.element.trigger("manualclose.uk.notify",[e]),e.close()}))};return t.$.extend(n.prototype,{uuid:!1,element:!1,timout:!1,currentstatus:"",group:!1,show:function(){if(!this.element.is(":visible")){var t=this;e[this.options.pos].show().prepend(this.element);var i=parseInt(this.element.css("margin-bottom"),10);return this.element.css({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0}).animate({opacity:1,"margin-top":0,"margin-bottom":i},function(){if(t.options.timeout){var e=function(){t.close()};t.timeout=setTimeout(e,t.options.timeout),t.element.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(e,t.options.timeout)})}}),this}},close:function(t){var s=this,o=function(){s.element.remove(),e[s.options.pos].children().length||e[s.options.pos].hide(),s.options.onClose.apply(s,[]),s.element.trigger("close.uk.notify",[s]),delete i[s.uuid]};this.timeout&&clearTimeout(this.timeout),t?o():this.element.animate({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0},function(){o()})},content:function(t){var e=this.element.find(">div");return t?(e.html(t),this):e.html()},status:function(t){return t?(this.element.removeClass("uk-notify-message-"+this.currentstatus).addClass("uk-notify-message-"+t),this.currentstatus=t,this):this.currentstatus}}),n.defaults={message:"",status:"",timeout:5e3,group:null,pos:"top-center",onClose:function(){}},t.notify=s,t.notify.message=n,t.notify.closeAll=o,s});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-grid",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(){function t(t){if(t){if("string"==typeof u[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var i,e=0,n=h.length;n>e;e++)if(i=h[e]+t,"string"==typeof u[i])return i}}function i(t){var i=parseFloat(t),e=-1===t.indexOf("%")&&!isNaN(i);return e&&i}function e(){}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0,e=f.length;e>i;i++){var n=f[i];t[n]=0}return t}function r(){if(!c){c=!0;var e=window.getComputedStyle;if(a=function(){var t=e?function(t){return e(t,null)}:function(t){return t.currentStyle};return function(i){var e=t(i);return e||l("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}}(),s=t("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[s]="border-box";var r=document.body||document.documentElement;r.appendChild(n);var o=a(n);d=200===i(o.width),r.removeChild(n)}}}function o(t){if(r(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=a(t);if("none"===e.display)return n();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var h=o.isBorderBox=!(!s||!e[s]||"border-box"!==e[s]),u=0,l=f.length;l>u;u++){var c=f[u],p=e[c],g=parseFloat(p);o[c]=isNaN(g)?0:g}var m=o.paddingLeft+o.paddingRight,v=o.paddingTop+o.paddingBottom,b=o.marginLeft+o.marginRight,y=o.marginTop+o.marginBottom,k=o.borderLeftWidth+o.borderRightWidth,w=o.borderTopWidth+o.borderBottomWidth,x=h&&d,W=i(e.width);W!==!1&&(o.width=W+(x?0:m+k));var L=i(e.height);return L!==!1&&(o.height=L+(x?0:v+w)),o.innerWidth=o.width-(m+k),o.innerHeight=o.height-(v+w),o.outerWidth=o.width+b,o.outerHeight=o.height+y,o}}var a,s,d,h="Webkit Moz ms Ms O".split(" "),u=document.documentElement.style,l="undefined"==typeof console?e:function(t){console.error(t)},f=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],c=!1;return o}function e(t){return i()(t)}t.component("grid",{defaults:{colwidth:"auto",animation:!0,duration:300,gutter:0,controls:!1,filter:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid]",i).each(function(){var i=t.$(this);i.data("grid")||t.grid(i,t.Utils.options(i.attr("data-uk-grid")))})})},init:function(){var i=this,e=String(this.options.gutter).trim().split(" ");this.gutterv=parseInt(e[0],10),this.gutterh=parseInt(e[1]||e[0],10),this.element.css({position:"relative"}),this.controls=null,this.options.controls&&(this.controls=t.$(this.options.controls),this.controls.on("click","[data-uk-filter]",function(e){e.preventDefault(),i.filter(t.$(this).attr("data-uk-filter"))}),this.controls.on("click","[data-uk-sort]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-sort").split(":");i.sort(n[0],n[1])})),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){i.currentfilter?i.filter(i.currentfilter):this.updateLayout()}.bind(this),100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.updateLayout()}),t.domObserve(this.element,function(){i.updateLayout()}),this.options.filter!==!1?this.filter(this.options.filter):this.updateLayout()},_prepareElements:function(){var t,i=this.element.children(":not([data-grid-prepared])");i.length&&(t={position:"absolute","box-sizing":"border-box",width:"auto"==this.options.colwidth?"":this.options.colwidth},this.options.gutter&&(t["padding-left"]=this.gutterh,t["padding-bottom"]=this.gutterv,this.element.css("margin-left",-1*this.gutterh)),i.attr("data-grid-prepared","true").css(t))},updateLayout:function(i){this._prepareElements(),i=i||this.element.children(":visible");var n,r,o,a,s,d,h,u,l=i,f=this.element.width()+2*this.gutterh+2,c=0,p=0,g=[];this.trigger("beforeupdate.uk.grid",[l]),l.each(function(){for(u=e(this),n=t.$(this),r=u.outerWidth,o=u.outerHeight,c=0,p=0,s=0,h=g.length;h>s;s++)a=g[s],c<=a.aX&&(c=a.aX),c+r>f&&(c=0),p<=a.aY&&(p=a.aY);g.push({ele:n,top:p,left:c,width:r,height:o,aY:p+o,aX:c+r})});var m,v=0;for(s=0,h=g.length;h>s;s++){for(a=g[s],p=0,d=0;s>d;d++)m=g[d],a.left<m.aX&&m.left+1<a.aX&&(p=m.aY);a.top=p,a.aY=p+a.height,v=Math.max(v,a.aY)}v-=this.gutterv,this.options.animation?(this.element.stop().animate({height:v},100),g.forEach(function(t){t.ele.stop().animate({top:t.top,left:t.left,opacity:1},this.options.duration)}.bind(this))):(this.element.css("height",v),g.forEach(function(t){t.ele.css({top:t.top,left:t.left,opacity:1})}.bind(this))),setTimeout(function(){t.$doc.trigger("scrolling.uk.document")},2*this.options.duration*(this.options.animation?1:0)),this.trigger("afterupdate.uk.grid",[l])},filter:function(i){this.currentfilter=i,i=i||[],"number"==typeof i&&(i=i.toString()),"string"==typeof i&&(i=i.split(/,/).map(function(t){return t.trim()}));var e=this,n=this.element.children(),r={visible:[],hidden:[]};n.each(function(){var e=t.$(this),n=e.attr("data-uk-filter"),o=i.length?!1:!0;n&&(n=n.split(/,/).map(function(t){return t.trim()}),i.forEach(function(t){n.indexOf(t)>-1&&(o=!0)})),r[o?"visible":"hidden"].push(e)}),r.hidden=t.$(r.hidden).map(function(){return this[0]}),r.visible=t.$(r.visible).map(function(){return this[0]}),r.hidden.attr("aria-hidden","true").filter(":visible").fadeOut(this.options.duration),r.visible.attr("aria-hidden","false").filter(":hidden").css("opacity",0).show(),e.updateLayout(r.visible),this.controls&&this.controls.length&&this.controls.find("[data-uk-filter]").removeClass("uk-active").filter('[data-uk-filter="'+i+'"]').addClass("uk-active")},sort:function(i,e){e=e||1,"string"==typeof e&&(e="desc"==e.toLowerCase()?-1:1);var n=this.element.children();n.sort(function(n,r){return n=t.$(n),r=t.$(r),(r.data(i)||"")<(n.data(i)||"")?e:-1*e}).appendTo(this.element),this.updateLayout(n.filter(":visible")),this.controls&&this.controls.length&&this.controls.find("[data-uk-sort]").removeClass("uk-active").filter('[data-uk-sort="'+i+":"+(-1==e?"desc":"asc")+'"]').addClass("uk-active")}})});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit&&(t=i(UIkit)),"function"==typeof define&&define.amd&&define("uikit-slideshow",["uikit"],function(){return t||i(UIkit)})}(function(i){"use strict";var t,s=0;i.component("slideshow",{defaults:{animation:"fade",duration:500,height:"auto",start:0,autoplay:!1,autoplayInterval:7e3,videoautoplay:!0,videomute:!0,slices:15,pauseOnHover:!0,kenburns:!1,kenburnsanimations:["uk-animation-middle-left","uk-animation-top-right","uk-animation-bottom-left","uk-animation-top-center","","uk-animation-bottom-right"]},current:!1,interval:null,hovering:!1,boot:function(){i.ready(function(t){i.$("[data-uk-slideshow]",t).each(function(){var t=i.$(this);t.data("slideshow")||i.slideshow(t,i.Utils.options(t.attr("data-uk-slideshow")))})})},init:function(){var t,e,a=this;this.container=this.element.hasClass("uk-slideshow")?this.element:i.$(this.find(".uk-slideshow:first")),this.slides=this.container.children(),this.slidesCount=this.slides.length,this.current=this.options.start,this.animating=!1,this.triggers=this.find("[data-uk-slideshow-item]"),this.fixFullscreen=navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&this.container.hasClass("uk-slideshow-fullscreen"),this.options.kenburns&&(e=this.options.kenburns===!0?"15s":this.options.kenburns,String(e).match(/(ms|s)$/)||(e+="ms"),"string"==typeof this.options.kenburnsanimations&&(this.options.kenburnsanimations=this.options.kenburnsanimations.split(","))),this.slides.each(function(n){var o=i.$(this),r=o.children("img,video,iframe").eq(0);if(o.data("media",r),o.data("sizer",r),r.length){var d;switch(r[0].nodeName){case"IMG":var u=i.$('<div class="uk-cover-background uk-position-cover"></div>').css({"background-image":"url("+r.attr("src")+")"});r.attr("width")&&r.attr("height")&&(d=i.$("<canvas></canvas>").attr({width:r.attr("width"),height:r.attr("height")}),r.replaceWith(d),r=d,d=void 0),r.css({width:"100%",height:"auto",opacity:0}),o.prepend(u).data("cover",u);break;case"IFRAME":var h=r[0].src,c="sw-"+ ++s;r.attr("src","").on("load",function(){if((n!==a.current||n==a.current&&!a.options.videoautoplay)&&a.pausemedia(r),a.options.videomute){a.mutemedia(r);var i=setInterval(function(t){return function(){a.mutemedia(r),++t>=4&&clearInterval(i)}}(0),250)}}).data("slideshow",a).attr("data-player-id",c).attr("src",[h,h.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1&player_id="+c].join("")).addClass("uk-position-absolute"),i.support.touch||r.css("pointer-events","none"),d=!0,i.cover&&(i.cover(r),r.attr("data-uk-cover","{}"));break;case"VIDEO":r.addClass("uk-cover-object uk-position-absolute"),d=!0,a.options.videomute&&a.mutemedia(r)}if(d){t=i.$("<canvas></canvas>").attr({width:r[0].width,height:r[0].height});var l=i.$('<img style="width:100%;height:auto;">').attr("src",t[0].toDataURL());o.prepend(l),o.data("sizer",l)}}else o.data("sizer",o);a.hasKenBurns(o)&&o.data("cover").css({"-webkit-animation-duration":e,"animation-duration":e})}),this.on("click.uk.slideshow","[data-uk-slideshow-item]",function(t){t.preventDefault();var s=i.$(this).attr("data-uk-slideshow-item");if(a.current!=s){switch(s){case"next":case"previous":a["next"==s?"next":"previous"]();break;default:a.show(parseInt(s,10))}a.stop()}}),this.slides.attr("aria-hidden","true").eq(this.current).addClass("uk-active").attr("aria-hidden","false"),this.triggers.filter('[data-uk-slideshow-item="'+this.current+'"]').addClass("uk-active"),i.$win.on("resize load",i.Utils.debounce(function(){a.resize(),a.fixFullscreen&&(a.container.css("height",window.innerHeight),a.slides.css("height",window.innerHeight))},100)),setTimeout(function(){a.resize()},80),this.options.autoplay&&this.start(),this.options.videoautoplay&&this.slides.eq(this.current).data("media")&&this.playmedia(this.slides.eq(this.current).data("media")),this.options.kenburns&&this.applyKenBurns(this.slides.eq(this.current)),this.container.on({mouseenter:function(){a.options.pauseOnHover&&(a.hovering=!0)},mouseleave:function(){a.hovering=!1}}),this.on("swipeRight swipeLeft",function(i){a["swipeLeft"==i.type?"next":"previous"]()}),this.on("display.uk.check",function(){a.element.is(":visible")&&(a.resize(),a.fixFullscreen&&(a.container.css("height",window.innerHeight),a.slides.css("height",window.innerHeight)))})},resize:function(){if(!this.container.hasClass("uk-slideshow-fullscreen")){var t=this.options.height;"auto"===this.options.height&&(t=0,this.slides.css("height","").each(function(){t=Math.max(t,i.$(this).height())})),this.container.css("height",t),this.slides.css("height",t)}},show:function(s,e){if(!this.animating&&this.current!=s){this.animating=!0;var a=this,n=this.slides.eq(this.current),o=this.slides.eq(s),r=e?e:this.current<s?1:-1,d=n.data("media"),u=t[this.options.animation]?this.options.animation:"fade",h=o.data("media"),c=function(){a.animating&&(d&&d.is("video,iframe")&&a.pausemedia(d),h&&h.is("video,iframe")&&a.playmedia(h),o.addClass("uk-active").attr("aria-hidden","false"),n.removeClass("uk-active").attr("aria-hidden","true"),a.animating=!1,a.current=s,i.Utils.checkDisplay(o,'[class*="uk-animation-"]:not(.uk-cover-background.uk-position-cover)'),a.trigger("show.uk.slideshow",[o,n,a]))};a.applyKenBurns(o),i.support.animation||(u="none"),n=i.$(n),o=i.$(o),a.trigger("beforeshow.uk.slideshow",[o,n,a]),t[u].apply(this,[n,o,r]).then(c),a.triggers.removeClass("uk-active"),a.triggers.filter('[data-uk-slideshow-item="'+s+'"]').addClass("uk-active")}},applyKenBurns:function(i){if(this.hasKenBurns(i)){var t=this.options.kenburnsanimations,s=this.kbindex||0;i.data("cover").attr("class","uk-cover-background uk-position-cover").width(),i.data("cover").addClass(["uk-animation-scale","uk-animation-reverse",t[s].trim()].join(" ")),this.kbindex=t[s+1]?s+1:0}},hasKenBurns:function(i){return this.options.kenburns&&i.data("cover")},next:function(){this.show(this.slides[this.current+1]?this.current+1:0,1)},previous:function(){this.show(this.slides[this.current-1]?this.current-1:this.slides.length-1,-1)},start:function(){this.stop();var i=this;this.interval=setInterval(function(){i.hovering||i.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},playmedia:function(i){if(i&&i[0])switch(i[0].nodeName){case"VIDEO":this.options.videomute||(i[0].muted=!1),i[0].play();break;case"IFRAME":this.options.videomute||i[0].contentWindow.postMessage('{ "event": "command", "func": "unmute", "method":"setVolume", "value":1}',"*"),i[0].contentWindow.postMessage('{ "event": "command", "func": "playVideo", "method":"play"}',"*")}},pausemedia:function(i){switch(i[0].nodeName){case"VIDEO":i[0].pause();break;case"IFRAME":i[0].contentWindow.postMessage('{ "event": "command", "func": "pauseVideo", "method":"pause"}',"*")}},mutemedia:function(i){switch(i[0].nodeName){case"VIDEO":i[0].muted=!0;break;case"IFRAME":i[0].contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}}}),t={none:function(){var t=i.$.Deferred();return t.resolve(),t.promise()},scroll:function(t,s,e){var a=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1).one(i.support.animation.end,function(){t.css("opacity",0).removeClass(-1==e?"uk-slideshow-scroll-backward-out":"uk-slideshow-scroll-forward-out"),s.removeClass(-1==e?"uk-slideshow-scroll-backward-in":"uk-slideshow-scroll-forward-in"),a.resolve()}.bind(this)),t.addClass(-1==e?"uk-slideshow-scroll-backward-out":"uk-slideshow-scroll-forward-out"),s.addClass(-1==e?"uk-slideshow-scroll-backward-in":"uk-slideshow-scroll-forward-in"),s.width(),a.promise()},swipe:function(t,s,e){var a=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1).one(i.support.animation.end,function(){t.css("opacity",0).removeClass(-1===e?"uk-slideshow-swipe-backward-out":"uk-slideshow-swipe-forward-out"),s.removeClass(-1===e?"uk-slideshow-swipe-backward-in":"uk-slideshow-swipe-forward-in"),a.resolve()}.bind(this)),t.addClass(-1==e?"uk-slideshow-swipe-backward-out":"uk-slideshow-swipe-forward-out"),s.addClass(-1==e?"uk-slideshow-swipe-backward-in":"uk-slideshow-swipe-forward-in"),s.width(),a.promise()},scale:function(t,s){var e=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1),t.one(i.support.animation.end,function(){t.css("opacity",0).removeClass("uk-slideshow-scale-out"),e.resolve()}.bind(this)),t.addClass("uk-slideshow-scale-out"),t.width(),e.promise()},fade:function(t,s){var e=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1),s.data("cover")||s.data("placeholder")||s.css("opacity",1).one(i.support.animation.end,function(){s.removeClass("uk-slideshow-fade-in")}).addClass("uk-slideshow-fade-in"),t.one(i.support.animation.end,function(){t.css("opacity",0).removeClass("uk-slideshow-fade-out"),e.resolve()}.bind(this)),t.addClass("uk-slideshow-fade-out"),t.width(),e.promise()}},i.slideshow.animations=t,window.addEventListener("message",function(t){var s,e=t.data;if("string"==typeof e)try{e=JSON.parse(e)}catch(a){e={}}t.origin&&t.origin.indexOf("vimeo")>-1&&"ready"==e.event&&e.player_id&&(s=i.$('[data-player-id="'+e.player_id+'"]'),s.length&&s.data("slideshow").mutemedia(s))},!1)});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit&&(t=i(UIkit)),"function"==typeof define&&define.amd&&define("uikit-slideshow-fx",["uikit"],function(){return t||i(UIkit)})}(function(i){"use strict";var t=i.slideshow.animations;i.$.extend(i.slideshow.animations,{slice:function(e,s,n,o){if(!e.data("cover"))return t.fade.apply(this,arguments);for(var r,a=i.$.Deferred(),c=Math.ceil(this.element.width()/this.options.slices),d=s.data("cover").css("background-image"),h=i.$("<li></li>").css({top:0,left:0,width:this.container.width(),height:this.container.height(),opacity:1,zIndex:15}),p=h.width(),l=h.height(),u="slice-up"==o?l:"0",f=0;f<this.options.slices;f++){"slice-up-down"==o&&(u=(f%2+2)%2==0?"0":l);var m,x=f==this.options.slices-1?c:c,v="rect(0px, "+x*(f+1)+"px, "+l+"px, "+c*f+"px)";m="rect(0px, "+x*(f+1)+"px, 0px, "+c*f+"px)",("slice-up"==o||"slice-up-down"==o&&(f%2+2)%2==0)&&(m="rect("+l+"px, "+x*(f+1)+"px, "+l+"px, "+c*f+"px)"),r=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,width:p,height:l,"background-image":d,clip:m,opacity:0,transition:"all "+this.options.duration+"ms ease-in-out "+60*f+"ms","-webkit-transition":"all "+this.options.duration+"ms ease-in-out "+60*f+"ms"}).data("clip",v),h.append(r)}return this.container.append(h),h.children().last().on(i.support.transition.end,function(){setTimeout(h.remove.bind(h),0),a.resolve()}),h.width(),h.children().each(function(){var t=i.$(this);t.css({clip:t.data("clip"),opacity:1})}),a.promise()},"slice-up":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-up"])},"slice-down":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-down"])},"slice-up-down":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-up-down"])},fold:function(e,s){if(!s.data("cover"))return t.fade.apply(this,arguments);for(var n,o=i.$.Deferred(),r=Math.ceil(this.element.width()/this.options.slices),a=s.data("cover").css("background-image"),c=i.$("<li></li>").css({width:s.width(),height:s.height(),opacity:1,zIndex:15}),d=s.width(),h=s.height(),p=0;p<this.options.slices;p++)n=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,width:d,height:h,"background-image":a,"transform-origin":r*p+"px 0 0",clip:"rect(0px, "+r*(p+1)+"px, "+h+"px, "+r*p+"px)",opacity:0,transform:"scaleX(0.000001)",transition:"all "+this.options.duration+"ms ease-in-out "+(100+60*p)+"ms","-webkit-transition":"all "+this.options.duration+"ms ease-in-out "+(100+60*p)+"ms"}),c.prepend(n);return this.container.append(c),c.width(),c.children().first().on(i.support.transition.end,function(){setTimeout(c.remove.bind(c),0),o.resolve()}).end().css({transform:"scaleX(1)",opacity:1}),o.promise()},puzzle:function(s,n){if(!n.data("cover"))return t.fade.apply(this,arguments);for(var o,r,a,c=i.$.Deferred(),d=this,h=Math.round(this.options.slices/2),p=Math.round(n.width()/h),l=Math.round(n.height()/p),u=Math.round(n.height()/l)+1,f=n.data("cover").css("background-image"),m=i.$("<li></li>").css({width:this.container.width(),height:this.container.height(),opacity:1,zIndex:15}),x=this.container.width(),v=this.container.height(),g=0;l>g;g++)for(var w=0;h>w;w++)a=w==h-1?p+2:p,r=[u*g+"px",a*(w+1)+"px",u*(g+1)+"px",p*w+"px"],o=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,opacity:0,width:x,height:v,"background-image":f,clip:"rect("+r.join(",")+")","-webkit-transform":"translateZ(0)",transform:"translateZ(0)"}),m.append(o);this.container.append(m);var b=e(m.children());return b.each(function(t){i.$(this).css({transition:"all "+d.options.duration+"ms ease-in-out "+(50+25*t)+"ms","-webkit-transition":"all "+d.options.duration+"ms ease-in-out "+(50+25*t)+"ms"})}).last().on(i.support.transition.end,function(){setTimeout(m.remove.bind(m),0),c.resolve()}),m.width(),b.css({opacity:1}),c.promise()},boxes:function(e,s,n,o){if(!s.data("cover"))return t.fade.apply(this,arguments);for(var r,a,c,d,h=i.$.Deferred(),p=Math.round(this.options.slices/2),l=Math.round(s.width()/p),u=Math.round(s.height()/l),f=Math.round(s.height()/u)+1,m=s.data("cover").css("background-image"),x=i.$("<li></li>").css({width:s.width(),height:s.height(),opacity:1,zIndex:15}),v=s.width(),g=s.height(),w=0;u>w;w++)for(d=0;p>d;d++)c=d==p-1?l+2:l,a=[f*w+"px",c*(d+1)+"px",f*(w+1)+"px",l*d+"px"],r=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,opacity:1,width:v,height:g,"background-image":m,"transform-origin":a[3]+" "+a[0]+" 0",clip:"rect("+a.join(",")+")","-webkit-transform":"scale(0.0000000000000001)",transform:"scale(0.0000000000000001)"}),x.append(r);this.container.append(x);var b,k=0,y=0,$=0,I=[[]],M=x.children();for("boxes-reverse"==o&&(M=[].reverse.apply(M)),M.each(function(){I[k][y]=i.$(this),y++,y==p&&(k++,y=0,I[k]=[])}),d=0,b=0;p*u>d;d++){b=d;for(var z=0;u>z;z++)b>=0&&p>b&&I[z][b].css({transition:"all "+this.options.duration+"ms linear "+(50+$)+"ms","-webkit-transition":"all "+this.options.duration+"ms linear "+(50+$)+"ms"}),b--;$+=100}return M.last().on(i.support.transition.end,function(){setTimeout(x.remove.bind(x),0),h.resolve()}),x.width(),M.css({"-webkit-transform":"scale(1)",transform:"scale(1)"}),h.promise()},"boxes-reverse":function(i,e,s){return t.boxes.apply(this,[i,e,s,"boxes-reverse"])},"random-fx":function(){var i=["slice-up","fold","puzzle","slice-down","boxes","slice-up-down","boxes-reverse"];return this.fxIndex=(void 0===this.fxIndex?-1:this.fxIndex)+1,i[this.fxIndex]||(this.fxIndex=0),t[i[this.fxIndex]].apply(this,arguments)}});var e=function(i){for(var t,e,s=i.length;s;t=parseInt(Math.random()*s),e=i[--s],i[s]=i[t],i[t]=e);return i};return i.slideshow.animations});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-slideset",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(i,e,s,n){var a,o,r,l,h=t.$.Deferred(),u=this.options.delay===!1?Math.floor(this.options.duration/2):this.options.delay,d=this;if(n=n||1,this.element.css("min-height",this.element.height()),s[0]===e[0])return h.resolve(),h.promise();if("object"==typeof i?(a=i[0],o=i[1]||i[0]):(a=i,o=a),r=function(){if(e&&e.length&&e.hide().removeClass(o+" uk-animation-reverse").css({opacity:"","animation-delay":"",animation:""}),!s.length)return h.resolve(),void 0;for(l=0;l<s.length;l++)s.eq(1==n?l:s.length-l-1).css("animation-delay",l*u+"ms");var i=function(){s.removeClass(""+a).css({opacity:"",display:"","animation-delay":"",animation:""}),h.resolve(),d.element.css("min-height",""),i=!1};s.addClass(a)[1==n?"last":"first"]().one(t.support.animation.end,function(){i&&i()}).end().css("display",""),setTimeout(function(){i&&i()},s.length*u*2)},s.length&&s.css("animation-duration",this.options.duration+"ms"),e&&e.length)for(e.css("animation-duration",this.options.duration+"ms")[1==n?"last":"first"]().one(t.support.animation.end,function(){r()}),l=0;l<e.length;l++)!function(i,e){setTimeout(function(){e.css("display","none").css("display","").css("opacity",0).on(t.support.animation.end,function(){e.removeClass(o)}).addClass(o+" uk-animation-reverse")}.bind(this),l*u)}(l,e.eq(1==n?l:e.length-l-1));else r();return h.promise()}function e(t,i){var e,s=0,n=-1,a=t.length||0,o=[];if(1>i)return null;for(;a>s;)e=s%i,e?o[n][e]=t[s]:o[++n]=[t[s]],s++;for(s=0,a=o.length;a>s;)o[s]=jQuery(o[s]),s++;return o}var s;t.component("slideset",{defaults:{"default":1,animation:"fade",duration:200,filter:"",delay:!1,controls:!1,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},sets:[],boot:function(){t.ready(function(i){t.$("[data-uk-slideset]",i).each(function(){var i=t.$(this);i.data("slideset")||t.slideset(i,t.Utils.options(i.attr("data-uk-slideset")))})})},init:function(){var i=this;this.activeSet=!1,this.list=this.element.find(".uk-slideset"),this.nav=this.element.find(".uk-slideset-nav"),this.controls=this.options.controls?t.$(this.options.controls):this.element,t.$win.on("resize load",t.Utils.debounce(function(){i.updateSets()},100)),i.list.addClass("uk-grid-width-1-"+i.options.default),["xlarge","large","medium","small"].forEach(function(t){i.options[t]&&i.list.addClass("uk-grid-width-"+t+"-1-"+i.options[t])}),this.on("click.uk.slideset","[data-uk-slideset-item]",function(e){if(e.preventDefault(),!i.animating){var s=t.$(this).attr("data-uk-slideset-item");if(i.activeSet!==s)switch(s){case"next":case"previous":i["next"==s?"next":"previous"]();break;default:i.show(parseInt(s,10))}}}),this.controls.on("click.uk.slideset","[data-uk-filter]",function(e){var s=t.$(this);s.parent().hasClass("uk-slideset")||(e.preventDefault(),i.animating||i.currentFilter==s.attr("data-uk-filter")||(i.updateFilter(s.attr("data-uk-filter")),i._hide().then(function(){i.updateSets(!0,!0)})))}),this.on("swipeRight swipeLeft",function(t){i["swipeLeft"==t.type?"next":"previous"]()}),this.updateFilter(this.options.filter),this.updateSets(),this.element.on({mouseenter:function(){i.options.pauseOnHover&&(i.hovering=!0)},mouseleave:function(){i.hovering=!1}}),this.options.autoplay&&this.start()},updateSets:function(t,i){var s,n=this.visible;if(this.visible=this.getVisibleOnCurrenBreakpoint(),n!=this.visible||i){for(this.children=this.list.children().hide(),this.items=this.getItems(),this.sets=e(this.items,this.visible),s=0;s<this.sets.length;s++)this.sets[s].css({display:"none"});if(this.nav.length&&this.nav.empty()){for(s=0;s<this.sets.length;s++)this.nav.append('<li data-uk-slideset-item="'+s+'"><a></a></li>');this.nav[1==this.nav.children().length?"addClass":"removeClass"]("uk-invisible")}this.activeSet=!1,this.show(0,!t)}},updateFilter:function(i){var e,s=this;this.currentFilter=i,this.controls.find("[data-uk-filter]").each(function(){e=t.$(this),e.parent().hasClass("uk-slideset")||(e.attr("data-uk-filter")==s.currentFilter?e.addClass("uk-active"):e.removeClass("uk-active"))})},getVisibleOnCurrenBreakpoint:function(){var i=null,e=t.$('<div style="position:absolute;height:1px;top:-1000px;width:100px"><div></div></div>').appendTo("body"),s=e.children().eq(0),n=this.options;return["xlarge","large","medium","small"].forEach(function(t){n[t]&&!i&&(e.attr("class","uk-grid-width-"+t+"-1-2").width(),50==s.width()&&(i=t))}),e.remove(),this.options[i]||this.options["default"]},getItems:function(){var i,e=[];return this.currentFilter?(i=this.currentFilter||[],"string"==typeof i&&(i=i.split(/,/).map(function(t){return t.trim()})),this.children.each(function(){var s=t.$(this),n=s.attr("data-uk-filter"),a=i.length?!1:!0;n&&(n=n.split(/,/).map(function(t){return t.trim()}),i.forEach(function(t){n.indexOf(t)>-1&&(a=!0)})),a&&e.push(s[0])}),e=t.$(e)):e=this.list.children(),e},show:function(i,e,n){var a=this;if(this.activeSet!==i&&!this.animating){n=n||(i<this.activeSet?-1:1);var o=this.sets[this.activeSet]||[],r=this.sets[i],l=this._getAnimation();(e||!t.support.animation)&&(l=s.none),this.animating=!0,this.nav.length&&this.nav.children().removeClass("uk-active").eq(i).addClass("uk-active"),l.apply(a,[o,r,n]).then(function(){t.Utils.checkDisplay(r,!0),a.children.hide().removeClass("uk-active"),r.addClass("uk-active").css({display:"",opacity:""}),a.animating=!1,a.activeSet=i,t.Utils.checkDisplay(r,!0),a.trigger("show.uk.slideset",[r])})}},_getAnimation:function(){var i=s[this.options.animation]||s.none;return t.support.animation||(i=s.none),i},_hide:function(){var t=this,i=this.sets[this.activeSet]||[],e=this._getAnimation();return this.animating=!0,e.apply(t,[i,[],1]).then(function(){t.animating=!1})},next:function(){this.show(this.sets[this.activeSet+1]?this.activeSet+1:0,!1,1)},previous:function(){this.show(this.sets[this.activeSet-1]?this.activeSet-1:this.sets.length-1,!1,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.animating||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)}}),s={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e,s){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return-1==s&&n.reverse(),i.apply(this,[n,t,e])},"slide-horizontal":function(t,e,s){var n=["uk-animation-slide-right","uk-animation-slide-left"];return-1==s&&n.reverse(),i.apply(this,[n,t,e,s])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.slideset.animations=s});

/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit&&(e=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-pagination",["uikit"],function(){return e||t(UIkit)})}(function(t){"use strict";return t.component("pagination",{defaults:{items:1,itemsOnPage:1,pages:0,displayedPages:7,edges:1,currentPage:0,lblPrev:!1,lblNext:!1,onSelectPage:function(){}},boot:function(){t.ready(function(e){t.$("[data-uk-pagination]",e).each(function(){var e=t.$(this);e.data("pagination")||t.pagination(e,t.Utils.options(e.attr("data-uk-pagination")))})})},init:function(){var e=this;this.pages=this.options.pages?this.options.pages:Math.ceil(this.options.items/this.options.itemsOnPage)?Math.ceil(this.options.items/this.options.itemsOnPage):1,this.currentPage=this.options.currentPage,this.halfDisplayed=this.options.displayedPages/2,this.on("click","a[data-page]",function(i){i.preventDefault(),e.selectPage(t.$(this).data("page"))}),this._render()},_getInterval:function(){return{start:Math.ceil(this.currentPage>this.halfDisplayed?Math.max(Math.min(this.currentPage-this.halfDisplayed,this.pages-this.options.displayedPages),0):0),end:Math.ceil(this.currentPage>this.halfDisplayed?Math.min(this.currentPage+this.halfDisplayed,this.pages):Math.min(this.options.displayedPages,this.pages))}},render:function(t){this.pages=t?t:this.pages,this._render()},selectPage:function(t,e){this.currentPage=t,this.render(e),this.options.onSelectPage.apply(this,[t]),this.trigger("select.uk.pagination",[t,this])},_render:function(){var t,e=this.options,i=this._getInterval();if(this.element.empty(),e.lblPrev&&this._append(this.currentPage-1,{text:e.lblPrev}),i.start>0&&e.edges>0){var s=Math.min(e.edges,i.start);for(t=0;s>t;t++)this._append(t);e.edges<i.start&&i.start-e.edges!=1?this.element.append("<li><span>...</span></li>"):i.start-e.edges==1&&this._append(e.edges)}for(t=i.start;t<i.end;t++)this._append(t);if(i.end<this.pages&&e.edges>0){this.pages-e.edges>i.end&&this.pages-e.edges-i.end!=1?this.element.append("<li><span>...</span></li>"):this.pages-e.edges-i.end==1&&this._append(i.end++);var a=Math.max(this.pages-e.edges,i.end);for(t=a;t<this.pages;t++)this._append(t)}e.lblNext&&this._append(this.currentPage+1,{text:e.lblNext})},_append:function(e,i){var s,a;e=0>e?0:e<this.pages?e:this.pages-1,a=t.$.extend({text:e+1},i),s=e==this.currentPage?'<li class="uk-active"><span>'+a.text+"</span></li>":'<li><a href="#page-'+(e+1)+'" data-page="'+e+'">'+a.text+"</a></li>",this.element.append(s)}}),t.pagination});


/*!
 * # Semantic UI 2.0.0 - Search
 */
!function(e,t,s,r){"use strict";e.fn.search=function(n){var a,i=e(this),c=i.selector||"",o=(new Date).getTime(),u=[],l=arguments[0],d="string"==typeof l,g=[].slice.call(arguments,1);return e(this).each(function(){var f,p=e.isPlainObject(n)?e.extend(!0,{},e.fn.search.settings,n):e.extend({},e.fn.search.settings),v=p.className,h=p.metadata,m=p.regExp,b=p.selector,y=p.error,C=p.namespace,R="."+C,w=C+"-module",x=e(this),j=x.find(b.prompt),q=x.find(b.searchButton),k=x.find(b.results),A=(x.find(b.result),x.find(b.category),this),E=x.data(w);f={initialize:function(){f.verbose("Initializing module"),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),E=f,x.data(w,f)},destroy:function(){f.verbose("Destroying instance"),x.off(R).removeData(w)},bind:{events:function(){f.verbose("Binding events to search"),p.automatic&&(x.on(f.get.inputEvent()+R,b.prompt,f.event.input),j.attr("autocomplete","off")),x.on("focus"+R,b.prompt,f.event.focus).on("blur"+R,b.prompt,f.event.blur).on("keydown"+R,b.prompt,f.handleKeyboard).on("click"+R,b.searchButton,f.query).on("mousedown"+R,b.results,f.event.result.mousedown).on("mouseup"+R,b.results,f.event.result.mouseup).on("click"+R,b.result,f.event.result.click)}},determine:{searchFields:function(){n&&n.searchFields!==r&&(p.searchFields=n.searchFields)}},event:{input:function(){clearTimeout(f.timer),f.timer=setTimeout(f.query,p.searchDelay)},focus:function(){f.set.focus(),f.has.minimumCharacters()&&(f.query(),f.showResults())},blur:function(e){var t=s.activeElement===this;t||f.resultsClicked||(f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,p.hideDelay))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(s){f.debug("Search result selected");var r=e(this),n=r.find(b.title).eq(0),a=r.find("a[href]").eq(0),i=a.attr("href")||!1,c=a.attr("target")||!1,o=(n.html(),n.length>0?n.text():!1),u=f.get.results(),l=r.data(h.result)||f.get.result(o,u);return e.isFunction(p.onSelect)&&p.onSelect.call(A,l,u)===!1?void f.debug("Custom onSelect callback cancelled default select action"):(f.hideResults(),o&&f.set.value(o),void(i&&(f.verbose("Opening search link found in result",a),"_blank"==c||s.ctrlKey?t.open(i):t.location.href=i)))}}},handleKeyboard:function(e){var t,s=x.find(b.result),r=x.find(b.category),n=s.index(s.filter("."+v.active)),a=s.length,i=e.which,c={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(i==c.escape&&(f.verbose("Escape key pressed, blurring search field"),j.trigger("blur")),f.is.visible())if(i==c.enter){if(f.verbose("Enter key pressed, selecting active result"),s.filter("."+v.active).length>0)return f.event.result.click.call(s.filter("."+v.active),e),e.preventDefault(),!1}else i==c.upArrow?(f.verbose("Up key pressed, changing active result"),t=0>n-1?n:n-1,r.removeClass(v.active),s.removeClass(v.active).eq(t).addClass(v.active).closest(r).addClass(v.active),e.preventDefault()):i==c.downArrow&&(f.verbose("Down key pressed, changing active result"),t=n+1>=a?n:n+1,r.removeClass(v.active),s.removeClass(v.active).eq(t).addClass(v.active).closest(r).addClass(v.active),e.preventDefault());else i==c.enter&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),j.one("keyup",f.remove.buttonFocus))},setup:{api:function(){var e={debug:p.debug,on:!1,cache:"local",action:"search",onError:f.error};f.verbose("First request, initializing API"),x.api(e)}},can:{useAPI:function(){return e.fn.api!==r},transition:function(){return p.transition&&e.fn.transition!==r&&x.transition("is supported")}},is:{empty:function(){return""===k.html()},visible:function(){return k.filter(":visible").length>0},focused:function(){return j.filter(":focus").length>0}},get:{inputEvent:function(){var e=j[0],t=e!==r&&e.oninput!==r?"input":e!==r&&e.onpropertychange!==r?"propertychange":"keyup";return t},value:function(){return j.val()},results:function(){var e=x.data(h.results);return e},result:function(t,s){var n=["title","id"],a=!1;return t=t!==r?t:f.get.value(),s=s!==r?s:f.get.results(),"category"===p.type?(f.debug("Finding result that matches",t),e.each(s,function(s,r){return e.isArray(r.results)&&(a=f.search.object(t,r.results,n)[0])?!1:void 0})):(f.debug("Finding result in results object",t),a=f.search.object(t,s,n)[0]),a||!1}},set:{focus:function(){x.addClass(v.focus)},loading:function(){x.addClass(v.loading)},value:function(e){f.verbose("Setting search input value",e),j.val(e)},type:function(e){e=e||p.type,"category"==p.type&&x.addClass(p.type)},buttonPressed:function(){q.addClass(v.pressed)}},remove:{loading:function(){x.removeClass(v.loading)},focus:function(){x.removeClass(v.focus)},buttonPressed:function(){q.removeClass(v.pressed)}},query:function(){var t=f.get.value(),s=f.read.cache(t);f.has.minimumCharacters()?s?(f.debug("Reading result from cache",t),f.save.results(s.results),f.addResults(s.html),f.inject.id(s.results)):(f.debug("Querying for",t),e.isPlainObject(p.source)||e.isArray(p.source)?f.search.local(t):f.can.useAPI()?f.search.remote(t):f.error(y.source),p.onSearchQuery.call(A,t)):f.hideResults()},search:{local:function(e){var t,s=f.search.object(e,p.content);f.set.loading(),f.save.results(s),f.debug("Returned local search results",s),t=f.generateResults({results:s}),f.remove.loading(),f.addResults(t),f.inject.id(s),f.write.cache(e,{html:t,results:s})},remote:function(t){var s={onSuccess:function(e){f.parse.response.call(A,e,t)},onFailure:function(){f.displayMessage(y.serverError)},urlData:{query:t}};x.api("get request")||f.setup.api(),e.extend(!0,s,p.apiSettings),f.debug("Executing search",s),f.cancel.query(),x.api("setting",s).api("query")},object:function(t,s,n){var a=[],i=[],c=t.toString().replace(m.escape,"\\$&"),o=new RegExp(m.beginsWith+c,"i"),u=function(t,s){var r=-1==e.inArray(s,a),n=-1==e.inArray(s,i);r&&n&&t.push(s)};return s=s||p.source,n=n!==r?n:p.searchFields,e.isArray(n)||(n=[n]),s===r||s===!1?(f.error(y.source),[]):(e.each(n,function(r,n){e.each(s,function(e,s){var r="string"==typeof s[n];r&&(-1!==s[n].search(o)?u(a,s):p.searchFullText&&f.fuzzySearch(t,s[n])&&u(i,s))})}),e.merge(a,i))}},fuzzySearch:function(e,t){var s=t.length,r=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),r>s)return!1;if(r===s)return e===t;e:for(var n=0,a=0;r>n;n++){for(var i=e.charCodeAt(n);s>a;)if(t.charCodeAt(a++)===i)continue e;return!1}return!0},parse:{response:function(e,t){var s=f.generateResults(e);f.verbose("Parsing server response",e),e!==r&&t!==r&&e.results!==r&&(f.addResults(s),f.inject.id(e.results),f.write.cache(t,{html:s,results:e.results}),f.save.results(e.results))}},cancel:{query:function(){f.can.useAPI()&&x.api("abort")}},has:{minimumCharacters:function(){var e=f.get.value(),t=e.length;return t>=p.minCharacters}},clear:{cache:function(e){var t=x.data(h.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],x.data(h.cache,t)):(f.debug("Clearing cache",e),x.removeData(h.cache))}},read:{cache:function(e){var t=x.data(h.cache);return p.cache?(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==r?t[e]:!1):!1}},create:{id:function(e,t){var s,n,a=e+1;return t!==r?(s=String.fromCharCode(97+t),n=s+a,f.verbose("Creating category result id",n)):(n=a,f.verbose("Creating result id",n)),n},results:function(){0===k.length&&(k=e("<div />").addClass(v.results).appendTo(x))}},inject:{result:function(e,t,s){f.verbose("Injecting result into results");var n=s!==r?k.children().eq(s).children(b.result).eq(t):k.children(b.result).eq(t);f.verbose("Injecting results metadata",n),n.data(h.result,e)},id:function(t){f.debug("Injecting unique ids into results");var s=0,n=0;return"category"===p.type?e.each(t,function(t,a){n=0,e.each(a.results,function(e,t){var i=a.results[e];i.id===r&&(i.id=f.create.id(n,s)),f.inject.result(i,n,s),n++}),s++}):e.each(t,function(e,s){var a=t[e];a.id===r&&(a.id=f.create.id(n)),f.inject.result(a,n),n++}),t}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),x.data(h.results,e)}},write:{cache:function(e,t){var s=x.data(h.cache)!==r?x.data(h.cache):{};p.cache&&(f.verbose("Writing generated html to cache",e,t),s[e]=t,x.data(h.cache,s))}},addResults:function(t){return e.isFunction(p.onResultsAdd)&&p.onResultsAdd.call(k,t)===!1?(f.debug("onResultsAdd callback cancelled default action"),!1):(k.html(t),void f.showResults())},showResults:function(){f.is.visible()||!f.is.focused()||f.is.empty()||(f.can.transition()?(f.debug("Showing results with css animations"),k.transition({animation:p.transition+" in",debug:p.debug,verbose:p.verbose,duration:p.duration,queue:!0})):(f.debug("Showing results with javascript"),k.stop().fadeIn(p.duration,p.easing)),p.onResultsOpen.call(k))},hideResults:function(){f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),k.transition({animation:p.transition+" out",debug:p.debug,verbose:p.verbose,duration:p.duration,queue:!0})):(f.debug("Hiding results with javascript"),k.stop().fadeOut(p.duration,p.easing)),p.onResultsClose.call(k))},generateResults:function(t){f.debug("Generating html from response",t);var s=p.templates[p.type],r=e.isPlainObject(t.results)&&!e.isEmptyObject(t.results),n=e.isArray(t.results)&&t.results.length>0,a="";return r||n?(p.maxResults>0&&(r?"standard"==p.type&&f.error(y.maxResults):t.results=t.results.slice(0,p.maxResults)),e.isFunction(s)?a=s(t):f.error(y.noTemplate,!1)):a=f.displayMessage(y.noResults,"empty"),p.onResults.call(A,t),a},displayMessage:function(e,t){return t=t||"standard",f.debug("Displaying message",e,t),f.addResults(p.templates.message(e,t)),p.templates.message(e,t)},setting:function(t,s){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(s===r)return p[t];p[t]=s}},internal:function(t,s){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(s===r)return f[t];f[t]=s}},debug:function(){p.debug&&(p.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,p.name+":"),f.debug.apply(console,arguments)))},verbose:function(){p.verbose&&p.debug&&(p.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),f.verbose.apply(console,arguments)))},error:function(){f.error=Function.prototype.bind.call(console.error,console,p.name+":"),f.error.apply(console,arguments)},performance:{log:function(e){var t,s,r;p.performance&&(t=(new Date).getTime(),r=o||t,s=t-r,o=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":s})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=p.name+":",s=0;o=!1,clearTimeout(f.performance.timer),e.each(u,function(e,t){s+=t["Execution Time"]}),t+=" "+s+"ms",c&&(t+=" '"+c+"'"),i.length>1&&(t+=" ("+i.length+")"),(console.group!==r||console.table!==r)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,s,n){var i,c,o,u=E;return s=s||g,n=A||n,"string"==typeof t&&u!==r&&(t=t.split(/[\. ]/),i=t.length-1,e.each(t,function(s,n){var a=s!=i?n+t[s+1].charAt(0).toUpperCase()+t[s+1].slice(1):t;if(e.isPlainObject(u[a])&&s!=i)u=u[a];else{if(u[a]!==r)return c=u[a],!1;if(!e.isPlainObject(u[n])||s==i)return u[n]!==r?(c=u[n],!1):!1;u=u[n]}})),e.isFunction(c)?o=c.apply(n,s):c!==r&&(o=c),e.isArray(a)?a.push(o):a!==r?a=[a,o]:o!==r&&(a=o),c}},d?(E===r&&f.initialize(),f.invoke(l)):(E!==r&&E.invoke("destroy"),f.initialize())}),a!==r?a:this},e.fn.search.settings={name:"Search",namespace:"search",debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,apiSettings:!1,source:!1,searchFields:["title","description"],searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{active:"active",empty:"empty",focus:"focus",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,s=/[&<>"'`]/,r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},n=function(e){return r[e]};return s.test(e)?e.replace(t,n):e},message:function(e,t){var s="";return e!==r&&t!==r&&(s+='<div class="message '+t+'">',s+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",s+="</div>"),s},category:function(t){var s="",n=e.fn.search.settings.templates.escape;return t.results!==r?(e.each(t.results,function(t,a){a.results!==r&&a.results.length>0&&(s+='<div class="category"><div class="name">'+a.name+"</div>",e.each(a.results,function(e,t){s+='<div class="result">',t.url&&(s+='<a href="'+t.url+'"></a>'),t.image!==r&&(t.image=n(t.image),s+='<div class="image"> <img src="'+t.image+'" alt=""></div>'),s+='<div class="content">',t.price!==r&&(t.price=n(t.price),s+='<div class="price">'+t.price+"</div>"),t.title!==r&&(t.title=n(t.title),s+='<div class="title">'+t.title+"</div>"),t.description!==r&&(s+='<div class="description">'+t.description+"</div>"),s+="</div></div>"}),s+="</div>")}),t.action&&(s+='<a href="'+t.action.url+'" class="action">'+t.action.text+"</a>"),s):!1},standard:function(t){var s="";return t.results!==r?(e.each(t.results,function(e,t){s+=t.url?'<a class="result" href="'+t.url+'">':'<a class="result">',t.image!==r&&(s+='<div class="image"> <img src="'+t.image+'"></div>'),s+='<div class="content">',t.price!==r&&(s+='<div class="price">'+t.price+"</div>"),t.title!==r&&(s+='<div class="title">'+t.title+"</div>"),t.description!==r&&(s+='<div class="description">'+t.description+"</div>"),s+="</div>",s+="</a>"}),t.action&&(s+='<a href="'+t.action.url+'" class="action">'+t.action.text+"</a>"),s):!1}}}}(jQuery,window,document);

/*!
 * # Semantic UI 2.0.0 - API
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,r,n){"use strict";e.api=e.fn.api=function(r){var o,s=e(e.isFunction(this)?t:this),a=s.selector||"",i=(new Date).getTime(),u=[],c=arguments[0],d="string"==typeof c,l=[].slice.call(arguments,1);return s.each(function(){var s,g,f,m,p,b,v=e.isPlainObject(r)?e.extend(!0,{},e.fn.api.settings,r):e.extend({},e.fn.api.settings),h=v.namespace,y=v.metadata,q=v.selector,R=v.error,x=v.className,k="."+h,A="module-"+h,S=e(this),T=S.closest(q.form),P=v.stateContext?e(v.stateContext):S,w=this,j=P[0],D=S.data(A);b={initialize:function(){d||b.bind.events(),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),D=b,S.data(A,D)},destroy:function(){b.verbose("Destroying previous module for",w),S.removeData(A).off(k)},bind:{events:function(){var e=b.get.event();e?(b.verbose("Attaching API events to element",e),S.on(e+k,b.event.trigger)):"now"==v.on&&(b.debug("Querying API now",e),b.query())}},read:{cachedResponse:function(e){var r;if(t.Storage===n)return void b.error(R.noStorage);if(r=sessionStorage.getItem(e),b.debug("Using cached response",e,r),r!==n){try{r=JSON.parse(r)}catch(o){}return r}return!1}},write:{cachedResponse:function(r,o){return o&&""===o?void b.debug("Response empty, not caching",o):t.Storage===n?void b.error(R.noStorage):(e.isPlainObject(o)&&(o=JSON.stringify(o)),sessionStorage.setItem(r,o),void b.verbose("Storing cached response for url",r,o))}},query:function(){if(b.is.disabled())return void b.debug("Element is disabled API request aborted");if(b.is.loading()){if(!v.interruptRequests)return void b.debug("Cancelling request, previous request is still pending");b.debug("Interrupting previous request"),b.abort()}return v.defaultData&&e.extend(!0,v.urlData,b.get.defaultData()),v.serializeForm&&(v.data=b.add.formData(v.data)),g=b.get.settings(),g===!1?(b.cancelled=!0,void b.error(R.beforeSend)):(b.cancelled=!1,f=b.get.templatedURL(),f||b.is.mocked()?(f=b.add.urlData(f),f||b.is.mocked()?(s=e.extend(!0,{},v,{type:v.method||v.type,data:m,url:v.base+f,beforeSend:v.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),b.debug("Querying URL",s.url),b.verbose("Using AJAX settings",s),"local"===v.cache&&b.read.cachedResponse(f)?(b.debug("Response returned from local cache"),b.request=b.create.request(),void b.request.resolveWith(j,[b.read.cachedResponse(f)])):void(v.throttle?v.throttleFirstRequest||b.timer?(b.debug("Throttling request",v.throttle),clearTimeout(b.timer),b.timer=setTimeout(function(){b.timer&&delete b.timer,b.debug("Sending throttled request",m,s.method),b.send.request()},v.throttle)):(b.debug("Sending request",m,s.method),b.send.request(),b.timer=setTimeout(function(){},v.throttle)):(b.debug("Sending request",m,s.method),b.send.request()))):void 0):void b.error(R.missingURL))},is:{disabled:function(){return S.filter(q.disabled).length>0},form:function(){return S.is("form")},mocked:function(){return v.mockResponse||v.mockResponseAsync},input:function(){return S.is("input")},loading:function(){return b.request&&"pending"==b.request.state()},abortedRequest:function(e){return e&&e.readyState!==n&&0===e.readyState?(b.verbose("XHR request determined to be aborted"),!0):(b.verbose("XHR request was not aborted"),!1)},validResponse:function(t){return"json"===v.dataType&&e.isFunction(v.successTest)?(b.debug("Checking JSON returned success",v.successTest,t),v.successTest(t)?(b.debug("Response passed success test",t),!0):(b.debug("Response failed success test",t),!1)):(b.verbose("Response is not JSON, skipping validation",v.successTest,t),!0)}},was:{cancelled:function(){return b.cancelled||!1},succesful:function(){return b.request&&"resolved"==b.request.state()},failure:function(){return b.request&&"rejected"==b.request.state()},complete:function(){return b.request&&("resolved"==b.request.state()||"rejected"==b.request.state())}},add:{urlData:function(t,r){var o,s;return t&&(o=t.match(v.regExp.required),s=t.match(v.regExp.optional),r=r||v.urlData,o&&(b.debug("Looking for required URL variables",o),e.each(o,function(o,s){var a=-1!==s.indexOf("$")?s.substr(2,s.length-3):s.substr(1,s.length-2),i=e.isPlainObject(r)&&r[a]!==n?r[a]:S.data(a)!==n?S.data(a):P.data(a)!==n?P.data(a):r[a];return i===n?(b.error(R.requiredParameter,a,t),t=!1,!1):(b.verbose("Found required variable",a,i),void(t=t.replace(s,i)))})),s&&(b.debug("Looking for optional URL variables",o),e.each(s,function(o,s){var a=-1!==s.indexOf("$")?s.substr(3,s.length-4):s.substr(2,s.length-3),i=e.isPlainObject(r)&&r[a]!==n?r[a]:S.data(a)!==n?S.data(a):P.data(a)!==n?P.data(a):r[a];i!==n?(b.verbose("Optional variable Found",a,i),t=t.replace(s,i)):(b.verbose("Optional variable not found",a),t=-1!==t.indexOf("/"+s)?t.replace("/"+s,""):t.replace(s,""))}))),t},formData:function(t){var r,o=e.fn.serializeObject!==n,s=o?T.serializeObject():T.serialize();return t=t||v.data,r=e.isPlainObject(t),r?o?(b.debug("Extending existing data with form data",t,s),t=e.extend(!0,{},t,s)):(b.error(R.missingSerialize),b.debug("Cant extend data. Replacing data with form data",t,s),t=s):(b.debug("Adding form data",s),t=s),t}},send:{request:function(){b.set.loading(),b.request=b.create.request(),b.is.mocked()?b.mockedXHR=b.create.mockedXHR():b.xhr=b.create.xhr(),v.onRequest.call(j,b.request,b.xhr)}},event:{trigger:function(e){b.query(),("submit"==e.type||"click"==e.type)&&e.preventDefault()},xhr:{always:function(){},done:function(t,r,n){var o=this,s=(new Date).getTime()-p,a=v.loadingDuration-s,i=e.isFunction(v.onResponse)?v.onResponse.call(o,e.extend(!0,{},t)):!1;a=a>0?a:0,i&&(b.debug("Modified API response in onResponse callback",v.onResponse,i,t),t=i),a>0&&b.debug("Response completed early delaying state change by",a),setTimeout(function(){b.is.validResponse(t)?b.request.resolveWith(o,[t]):b.request.rejectWith(o,[n,"invalid"])},a)},fail:function(e,t,r){var n=this,o=(new Date).getTime()-p,s=v.loadingDuration-o;s=s>0?s:0,s>0&&b.debug("Response completed early delaying state change by",s),setTimeout(function(){b.is.abortedRequest(e)?b.request.rejectWith(n,[e,"aborted",r]):b.request.rejectWith(n,[e,"error",t,r])},s)}},request:{complete:function(e){b.remove.loading(),v.onComplete.call(j,e,S)},done:function(e){b.debug("Successful API Response",e),"local"===v.cache&&f&&(b.write.cachedResponse(f,e),b.debug("Saving server response locally",b.cache)),v.onSuccess.call(j,e,S)},fail:function(t,r,o){var a=e.isPlainObject(t)?t.responseText:!1,i=e.isPlainObject(a)&&a.error!==n?a.error:v.error[r]!==n?v.error[r]:o;"aborted"==r?(b.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",r,o),v.onAbort.call(j,r,S)):"invalid"==r?b.debug("JSON did not pass success test. A server-side error has most likely occurred",a):"error"==r&&t!==n&&(b.debug("XHR produced a server error",r,o),200!=t.status&&o!==n&&""!==o&&b.error(R.statusMessage+o,s.url),v.onError.call(j,i,S)),v.errorDuration&&"aborted"!==r&&(b.debug("Adding error state"),b.set.error(),setTimeout(b.remove.error,v.errorDuration)),b.debug("API Request failed",i,t),v.onFailure.call(j,a,S)}}},create:{request:function(){return e.Deferred().always(b.event.request.complete).done(b.event.request.done).fail(b.event.request.fail)},mockedXHR:function(){var t,r,n,o=!1,s=!1,a=!1;return n=e.Deferred().always(b.event.xhr.complete).done(b.event.xhr.done).fail(b.event.xhr.fail),v.mockResponse?(e.isFunction(v.mockResponse)?(b.debug("Using mocked callback returning response",v.mockResponse),r=v.mockResponse.call(j,v)):(b.debug("Using specified response",v.mockResponse),r=v.mockResponse),n.resolveWith(j,[r,o,{responseText:r}])):e.isFunction(v.mockResponseAsync)&&(t=function(e){b.debug("Async callback returned response",e),e?n.resolveWith(j,[e,o,{responseText:e}]):n.rejectWith(j,[{responseText:e},s,a])},b.debug("Using async mocked response",v.mockResponseAsync),v.mockResponseAsync.call(j,v,t)),n},xhr:function(){var t;return t=e.ajax(s).always(b.event.xhr.always).done(b.event.xhr.done).fail(b.event.xhr.fail),b.verbose("Created server request",t),t}},set:{error:function(){b.verbose("Adding error state to element",P),P.addClass(x.error)},loading:function(){b.verbose("Adding loading state to element",P),P.addClass(x.loading),p=(new Date).getTime()}},remove:{error:function(){b.verbose("Removing error state from element",P),P.removeClass(x.error)},loading:function(){b.verbose("Removing loading state from element",P),P.removeClass(x.loading)}},get:{request:function(){return b.request||!1},xhr:function(){return b.xhr||!1},settings:function(){var e;return e=v.beforeSend.call(j,v),e&&(e.success!==n&&(b.debug("Legacy success callback detected",e),b.error(R.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==n&&(b.debug("Legacy failure callback detected",e),b.error(R.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==n&&(b.debug("Legacy complete callback detected",e),b.error(R.legacyParameters,e.complete),e.onComplete=e.complete)),e===n&&b.error(R.noReturnedValue),e!==n?e:v},defaultData:function(){var t={};return e.isWindow(w)||(b.is.input()?t.value=S.val():b.is.form()&&(t.text=S.text())),t},event:function(){return e.isWindow(w)||"now"==v.on?(b.debug("API called without element, no events attached"),!1):"auto"==v.on?S.is("input")?w.oninput!==n?"input":w.onpropertychange!==n?"propertychange":"keyup":S.is("form")?"submit":"click":v.on},templatedURL:function(e){if(e=e||S.data(y.action)||v.action||!1,f=S.data(y.url)||v.url||!1)return b.debug("Using specified url",f),f;if(e){if(b.debug("Looking up url for action",e,v.api),v.api[e]===n&&!b.is.mocked())return void b.error(R.missingAction,v.action,v.api);f=v.api[e]}else b.is.form()&&(f=S.attr("action")||!1,b.debug("No url or action specified, defaulting to form action",f));return f}},abort:function(){var e=b.get.xhr();e&&"resolved"!==e.state()&&(b.debug("Cancelling API request"),e.abort())},reset:function(){b.remove.error(),b.remove.loading()},setting:function(t,r){if(b.debug("Changing setting",t,r),e.isPlainObject(t))e.extend(!0,v,t);else{if(r===n)return v[t];v[t]=r}},internal:function(t,r){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(r===n)return b[t];b[t]=r}},debug:function(){v.debug&&(v.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,v.name+":"),b.debug.apply(console,arguments)))},verbose:function(){v.verbose&&v.debug&&(v.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),b.verbose.apply(console,arguments)))},error:function(){b.error=Function.prototype.bind.call(console.error,console,v.name+":"),b.error.apply(console,arguments)},performance:{log:function(e){var t,r,n;v.performance&&(t=(new Date).getTime(),n=i||t,r=t-n,i=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":r})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var t=v.name+":",r=0;i=!1,clearTimeout(b.performance.timer),e.each(u,function(e,t){r+=t["Execution Time"]}),t+=" "+r+"ms",a&&(t+=" '"+a+"'"),(console.group!==n||console.table!==n)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,r,s){var a,i,u,c=D;return r=r||l,s=w||s,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(r,o){var s=r!=a?o+t[r+1].charAt(0).toUpperCase()+t[r+1].slice(1):t;if(e.isPlainObject(c[s])&&r!=a)c=c[s];else{if(c[s]!==n)return i=c[s],!1;if(!e.isPlainObject(c[o])||r==a)return c[o]!==n?(i=c[o],!1):(b.error(R.method,t),!1);c=c[o]}})),e.isFunction(i)?u=i.apply(s,r):i!==n&&(u=i),e.isArray(o)?o.push(u):o!==n?o=[o,u]:u!==n&&(o=u),i}},d?(D===n&&b.initialize(),b.invoke(c)):(D!==n&&D.invoke("destroy"),b.initialize())}),o!==n?o:this},e.api.settings={name:"API",namespace:"api",debug:!0,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,errorDuration:2e3,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching respopnses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document);

// created by Minh Nguyen;
// version 1.0.6;

(function($) {

    // for zeptojs;
    $.isNumeric == null && ($.isNumeric = function(src) {
        return src != null && src.constructor === Number;
    });

    $.isFunction == null && ($.isFunction = function(src) {
        return src != null && src instanceof Function;
    });

    var $W = $(window);
    var $D = $(document);

    var layoutManager = {
        // default setting;
        defaultConfig: {
            animate: false,
            cellW: 100, // function(container) {return 100;}
            cellH: 100, // function(container) {return 100;}
            delay: 0, // slowdown active block;
            engine: 'giot',
            fixSize: null, // resize + adjust = fill gap;
            //fixSize: 0, resize but keep ratio = no fill gap;
            //fixSize: 1, no resize + no adjust = no fill gap;
            gutterX: 15, // width spacing between blocks;
            gutterY: 15, // height spacing between blocks;
            keepOrder: false,
            selector: '> div',
            draggable: false,
            cacheSize: true, // caches the original size of block;
            rightToLeft: false,
            bottomToTop: false,
            onGapFound: function() {},
            onComplete: function() {},
            onResize: function() {},
            onBlockDrag: function() {},
            onBlockMove: function() {},
            onBlockDrop: function() {},
            onBlockReady: function() {},
            onBlockFinish: function() {},
            onBlockActive: function() {},
            onBlockResize: function() {}
        },
        plugin: {},
        totalGrid: 1,
        transition: false,
        loadBlock: function(item, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var block = null;
            var $item = $(item);
            var active = $item.data("active");
            var fixPos = $item.attr('data-position');
            var fixSize = parseInt($item.attr('data-fixSize'));
            var blockId = runtime.lastId++ + '-' + runtime.totalGrid;

            //ignore dragging block;
            if ($item.hasClass('fw-float')) return null;
            $item.attr({id: blockId, 'data-delay': item.index});

            //remove animation for speed render;
            if (setting.animate && this.transition) {
                this.setTransition(item, "");
            }

            isNaN(fixSize) && (fixSize = null);
            (fixSize == null) && (fixSize = setting.fixSize);
            var makeRound = (!fixSize) ? "round" : "ceil";
            // store original size;

            $item.attr('data-height') == null && $item.attr('data-height', $item.height());
            $item.attr('data-width') == null && $item.attr('data-width', $item.width());
            var height = 1 * $item.attr('data-height');
            var width = 1 * $item.attr('data-width');

            if (!setting.cacheSize) {
                item.style.width = "";
                width = $item.width();

                item.style.height = "";
                height = $item.height();
            }

            var col = !width ? 0 : Math[makeRound]((width + gutterX) / cellW);
            var row = !height ? 0 : Math[makeRound]((height + gutterY) / cellH);

            // estimate size;
            if (!fixSize && setting.cellH == 'auto') {
                $item.width(cellW * col - gutterX);
                item.style.height = "";
                height = $item.height();
                row = !height ? 0 : Math.round((height + gutterY) / cellH);
            }

            if (!fixSize && setting.cellW == 'auto') {
                $item.height(cellH * row - gutterY);
                item.style.width = "";
                width = $item.width();
                col = !width ? 0 : Math.round((width + gutterX) / cellW);
            }

            // for none resize block;
            if ((fixSize != null) && (col > runtime.limitCol || row > runtime.limitRow)) {
                block = null;
            } else {
                // get smallest width and smallest height of block;
                // using for image runtime;
                row && row < runtime.minHoB && (runtime.minHoB = row);
                col && col < runtime.minWoB && (runtime.minWoB = col);

                // get biggest width and biggest height of block;
                row > runtime.maxHoB && (runtime.maxHoB = row);
                col > runtime.maxWoB && (runtime.maxWoB = col);

                width == 0 && (col = 0);
                height == 0 && (row = 0);

                block = {
                    resize: false,
                    id: blockId,
                    width: col,
                    height: row,
                    fixSize: fixSize
                };

                // for fix position;
                if (fixPos) {
                    fixPos = fixPos.split("-");
                    block.y = 1 * fixPos[0];
                    block.x = 1 * fixPos[1];
                    block.width = fixSize != null ? col : Math.min(col, runtime.limitCol - block.x);
                    block.height = fixSize != null ? row : Math.min(row, runtime.limitRow - block.y);
                    var holeId = block.y + "-" + block.x + "-" + block.width + "-" + block.height;
                    if (active) {
                        runtime.holes[holeId] = {
                            id: block.id,
                            top: block.y,
                            left: block.x,
                            width: block.width,
                            height: block.height
                        };
                        this.setBlock(block, setting);
                    } else {
                        delete runtime.holes[holeId];
                    }

                }
            }

            // for css animation;
            if ($item.attr("data-state") == null) {
                $item.attr("data-state", "init");
            } else {
                $item.attr("data-state", "move");
            }

            setting.onBlockReady.call(item, block, setting);

            return (fixPos && active) ? null : block;
        },
        setBlock: function(block, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var height = block.height;
            var width = block.width;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var x = block.x;
            var y = block.y;

            if (setting.rightToLeft) {
                x = runtime.limitCol - x - width;
            }
            if (setting.bottomToTop) {
                y = runtime.limitRow - y - height;
            }

            var realBlock = {
                fixSize: block.fixSize,
                resize: block.resize,
                top: y * cellH,
                left: x  * cellW,
                width: cellW * width - gutterX,
                height: cellH * height - gutterY
            };

            realBlock.top = 1 * realBlock.top.toFixed(2);
            realBlock.left = 1 * realBlock.left.toFixed(2);
            realBlock.width = 1 * realBlock.width.toFixed(2);
            realBlock.height = 1 * realBlock.height.toFixed(2);

            //runtime.length += 1;
            block.id && (runtime.blocks[block.id] = realBlock);

            // for append feature;
            return realBlock;
        },
        showBlock: function(item, setting) {
            var runtime = setting.runtime;
            var method = setting.animate && !this.transition ? 'animate' : 'css';
            var block = runtime.blocks[item.id];
            var $item = $(item);
            var self = this;
            var start = $item.attr("data-state") != "move";
            var trans = start ? "width 0.5s, height 0.5s" : "top 0.5s, left 0.5s, width 0.5s, height 0.5s, opacity 0.5s";

            item.delay && clearTimeout(item.delay);
            //ignore dragging block;
            if ($item.hasClass('fw-float')) return;

            // kill the old transition;
            self.setTransition(item, "");
            item.style.position = "absolute";
            setting.onBlockActive.call(item, block, setting);

            function action() {
                // start to arrange;
                start && $item.attr("data-state", "start");
                // add animation by using css3 transition;
                if (setting.animate && self.transition) {
                    self.setTransition(item, trans);
                }

                runtime.length -= 1;

                // for hidden block;
                if (!block) {
                    //var position = $item.position(); <= make speed so slow;
                    var height = parseInt(item.style.height) || 0;
                    var width = parseInt(item.style.width) || 0;
                    var left = parseInt(item.style.left) || 0;
                    var top = parseInt(item.style.top) || 0;
                    $item[method]({
                        left: left + width / 2,
                        top: top + height / 2,
                        width: 0,
                        height: 0,
                        opacity: 0
                    });
                } else {
                    if (block.fixSize) {
                        block.height = 1 * $item.attr("data-height");
                        block.width = 1 * $item.attr("data-width");
                    }

                    $item["css"]({
                        opacity: 1,
                        width: block.width,
                        height: block.height
                    });

                    // for animating by javascript;
                    $item[method]({
                        top: block.top,
                        left: block.left
                    });

                    if ($item.attr('data-nested') != null) {
                        self.nestedGrid(item, setting);
                    }
                }

                setting.onBlockFinish.call(item, block, setting);

                if (runtime.length == 0) {
                    var duration = setting.animate ? 500 : 0;
                    item.delay = setTimeout(function() {
                        setting.onComplete.call(item, block, setting);
                    }, duration);
                }
            }

            block && block.resize && setting.onBlockResize.call(item, block, setting);

            setting.delay > 0 ? (item.delay = setTimeout(action, setting.delay * $item.attr("data-delay"))) : action();
        },
        nestedGrid: function(item, setting) {
            var innerWall, $item = $(item), runtime = setting.runtime;
            var gutterX = $item.attr("data-gutterX") || setting.gutterX;
            var gutterY = $item.attr("data-gutterY") || setting.gutterY;
            var method = $item.attr("data-method") || "fitZone";
            var nested = $item.attr('data-nested') || "> div";
            var cellH = $item.attr("data-cellH") || setting.cellH;
            var cellW = $item.attr("data-cellW") || setting.cellW;
            var block = runtime.blocks[item.id];

            if (block) {
                innerWall = new Freewall($item);
                innerWall.reset({
                    cellH: cellH,
                    cellW: cellW,
                    gutterX: 1 * gutterX,
                    gutterY: 1 * gutterY,
                    selector: nested,
                    cacheSize: false
                });

                switch (method) {
                    case "fitHeight":
                        innerWall[method](block.height);
                        break;
                    case "fitWidth":
                        innerWall[method](block.width);
                        break;
                    case "fitZone":
                        innerWall[method](block.width, block.height);
                        break;
                }
            }
        },
        adjustBlock: function(block, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var $item = $("#" + block.id);
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;

            if (setting.cellH == 'auto') {
                $item.width(block.width * cellW - gutterX);
                $item[0].style.height = "";
                block.height = Math.round(($item.height() + gutterY) / cellH);
            }
        },
        adjustUnit: function(width, height, setting) {
            var gutterX = setting.gutterX;
            var gutterY = setting.gutterY;
            var runtime = setting.runtime;
            var cellW = setting.cellW;
            var cellH = setting.cellH;

            $.isFunction(cellW) && (cellW = cellW(width));
            cellW = 1 * cellW;
            !$.isNumeric(cellW) && (cellW = 1);

            $.isFunction(cellH) && (cellH = cellH(height));
            cellH = 1 * cellH;
            !$.isNumeric(cellH) && (cellH = 1);

            if ($.isNumeric(width)) {
                // adjust cell width via container;
                cellW < 1 && (cellW = cellW * width);

                // estimate total columns;
                var limitCol = Math.max(1, Math.floor(width / cellW));

                // adjust unit size for fit width;
                if (!$.isNumeric(gutterX)) {
                    gutterX = (width - limitCol * cellW) / Math.max(1, (limitCol - 1));
                    gutterX = Math.max(0, gutterX);
                }

                limitCol = Math.floor((width + gutterX) / cellW);
                runtime.cellW = (width + gutterX) / Math.max(limitCol, 1);
                runtime.cellS = runtime.cellW / cellW;
                runtime.gutterX = gutterX;
                runtime.limitCol = limitCol;
            }

            if ($.isNumeric(height)) {
                // adjust cell height via container;
                cellH < 1 && (cellH = cellH * height);

                // estimate total rows;
                var limitRow = Math.max(1, Math.floor(height / cellH));

                // adjust size unit for fit height;
                if (!$.isNumeric(gutterY)) {
                    gutterY = (height - limitRow * cellH) / Math.max(1, (limitRow - 1));
                    gutterY = Math.max(0, gutterY);
                }

                limitRow = Math.floor((height + gutterY) / cellH);
                runtime.cellH = (height + gutterY) / Math.max(limitRow, 1);
                runtime.cellS = runtime.cellH / cellH;
                runtime.gutterY = gutterY;
                runtime.limitRow = limitRow;
            }

            if (!$.isNumeric(width)) {
                // adjust cell width via cell height;
                cellW < 1 && (cellW = runtime.cellH);
                runtime.cellW = cellW != 1 ? cellW * runtime.cellS : 1;
                runtime.gutterX = gutterX;
                runtime.limitCol = 666666;
            }

            if (!$.isNumeric(height)) {
                // adjust cell height via cell width;
                cellH < 1 && (cellH = runtime.cellW);
                runtime.cellH = cellH != 1 ? cellH * runtime.cellS : 1;
                runtime.gutterY = gutterY;
                runtime.limitRow = 666666;
            }

            runtime.keepOrder = setting.keepOrder;
        },
        resetGrid: function(runtime) {
            runtime.blocks = {};
            runtime.length = 0;
            runtime.cellH = 0;
            runtime.cellW = 0;
            runtime.lastId = 1;
            runtime.matrix = {};
            runtime.totalCol = 0;
            runtime.totalRow = 0;
        },
        setDraggable: function(item, option) {
            var isTouch = false;
            var config = {
                startX: 0, //start clientX;
                startY: 0,
                top: 0,
                left: 0,
                handle: null,
                onDrop: function() {},
                onDrag: function() {},
                onStart: function() {}
            };

            $(item).each(function() {
                var setting = $.extend({}, config, option);
                var handle = setting.handle || this;
                var ele = this;
                var $E = $(ele);
                var $H = $(handle);

                var posStyle = $E.css("position");
                posStyle != "absolute" && $E.css("position", "relative");


                function mouseDown(evt) {
                    evt.stopPropagation();
                    evt = evt.originalEvent;

                    if (evt.touches) {
                        isTouch = true;
                        evt = evt.changedTouches[0];
                    }

                    if (evt.button != 2 && evt.which != 3) {
                        setting.onStart.call(ele, evt);

                        setting.startX = evt.clientX;
                        setting.startY = evt.clientY;
                        setting.top = parseInt($E.css("top")) || 0;
                        setting.left = parseInt($E.css("left")) || 0;

                        $D.bind("mouseup touchend", mouseUp);
                        $D.bind("mousemove touchmove", mouseMove);
                    }

                    return false;
                };


                function mouseMove(evt) {
                    evt = evt.originalEvent;
                    isTouch && (evt = evt.changedTouches[0]);

                    $E.css({
                        top: setting.top - (setting.startY - evt.clientY),
                        left: setting.left - (setting.startX - evt.clientX)
                    });

                    setting.onDrag.call(ele, evt);
                };

                function mouseUp(evt) {
                    evt = evt.originalEvent;
                    isTouch && (evt = evt.changedTouches[0]);

                    setting.onDrop.call(ele, evt);

                    $D.unbind("mouseup touchend", mouseUp);
                    $D.unbind("mousemove touchmove", mouseMove);
                };

                // ignore drag drop on text field;
                $E.find("iframe, form, input, textarea, .ignore-drag")
                .each(function() {
                    $(this).on("touchstart mousedown", function(evt) {
                        evt.stopPropagation();
                    });
                });

                $D.unbind("mouseup touchend", mouseUp);
                $D.unbind("mousemove touchmove", mouseMove);
                $H.unbind("mousedown touchstart").bind("mousedown touchstart", mouseDown);

            });
        },
        setTransition: function(item, trans) {
            var style = item.style;
            var $item = $(item);

            // remove animation;
            if (!this.transition && $item.stop) {
                $item.stop();
            } else if (style.webkitTransition != null) {
                style.webkitTransition = trans;
            } else if (style.MozTransition != null) {
                style.MozTransition = trans;
            } else if (style.msTransition != null) {
                style.msTransition = trans;
            } else if (style.OTransition != null) {
                style.OTransition = trans;
            } else {
                style.transition = trans;
            }
        },
        getFreeArea: function(t, l, runtime) {
            var maxY = Math.min(t + runtime.maxHoB, runtime.limitRow);
            var maxX = Math.min(l + runtime.maxWoB, runtime.limitCol);
            var minX = maxX;
            var minY = maxY;
            var matrix = runtime.matrix;

            // find limit zone by horizon;
            for (var y = t; y < minY; ++y) {
                for (var x = l; x < maxX; ++x) {
                    if (matrix[y + '-' + x]) {
                        (l < x && x < minX) && (minX = x);
                    }
                }
            }

            // find limit zone by vertical;
            for (var y = t; y < maxY; ++y) {
                for (var x = l; x < minX; ++x) {
                    if (matrix[y + '-' + x]) {
                        (t < y && y < minY) && (minY = y);
                    }
                }
            }

            return {
                top: t,
                left: l,
                width: minX - l,
                height: minY - t
            };

        },
        setWallSize: function(runtime, container) {
            var totalRow = runtime.totalRow;
            var totalCol = runtime.totalCol;
            var gutterY = runtime.gutterY;
            var gutterX = runtime.gutterX;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var totalWidth = Math.max(0, cellW * totalCol - gutterX);
            var totalHeight = Math.max(0, cellH * totalRow - gutterY);

            container.attr({
                'data-total-col': totalCol,
                'data-total-row': totalRow,
                'data-wall-width': Math.ceil(totalWidth),
                'data-wall-height': Math.ceil(totalHeight)
            });

            if (runtime.limitCol < runtime.limitRow) {
                // do not set height with nesting grid;
                !container.attr("data-height") && container.height(Math.ceil(totalHeight));
            }
        }
    };



    var engine = {
        // Giot just a person name;
        giot: function(items, setting) {
            var runtime = setting.runtime,
                row = runtime.limitRow,
                col = runtime.limitCol,
                x = 0,
                y = 0,
                maxX = runtime.totalCol,
                maxY = runtime.totalRow,
                wall = {},
                holes = runtime.holes,
                block = null,
                matrix = runtime.matrix,
                bigLoop = Math.max(col, row),
                freeArea = null,
                misBlock = null,
                fitWidth = col < row ? 1 : 0,
                lastBlock = null,
                smallLoop = Math.min(col, row);

            // fill area with top, left, width, height;
            function fillMatrix(id, t, l, w, h) {
                for (var y = t; y < t + h;) {
                    for (var x = l; x < l + w;) {
                        matrix[y + '-' + x] = id;
                        ++x > maxX && (maxX = x);
                    }
                    ++y > maxY && (maxY = y);
                }
            }

            // set holes on the wall;
            for (var i in holes) {
                if (holes.hasOwnProperty(i)) {
                    fillMatrix(holes[i]["id"] || true, holes[i]['top'], holes[i]['left'], holes[i]['width'], holes[i]['height']);
                }
            }


            for (var b = 0; b < bigLoop; ++b) {
                if (!items.length) break;
                fitWidth ? (y = b) : (x = b);
                lastBlock = null;

                for (var s = 0; s < smallLoop; ++s) {
                    if (!items.length) break;
                    block = null;
                    fitWidth ? (x = s) : (y = s);
                    if (runtime.matrix[y + '-' + x]) continue;
                    freeArea = layoutManager.getFreeArea(y, x, runtime);

                    // trying resize last block to fit free area;
                    if (setting.fixSize == null) {
                        // resize near block to fill gap;
                        if (lastBlock && !fitWidth && runtime.minHoB > freeArea.height) {
                            lastBlock.height += freeArea.height;
                            lastBlock.resize = true;
                            fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                            layoutManager.setBlock(lastBlock, setting);
                            continue;
                        } else if (lastBlock && fitWidth && runtime.minWoB > freeArea.width) {
                            lastBlock.width += freeArea.width;
                            lastBlock.resize = true;
                            fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                            layoutManager.setBlock(lastBlock, setting);
                            continue;
                        }
                    }

                    // get the next block to keep order;
                    if (runtime.keepOrder) {
                        block = items.shift();
                        block.resize = true;
                    } else {
                        // find a suitable block to fit gap;
                        for (var i = 0; i < items.length; ++i) {
                            if (items[i].height > freeArea.height) continue;
                            if (items[i].width > freeArea.width) continue;
                            block = items.splice(i, 1)[0];
                            break;
                        }

                        // trying resize the other block to fit gap;
                        if (block == null && setting.fixSize == null) {
                            // get other block fill to gap;
                            for (var i = 0; i < items.length; ++i) {
                                if (items[i]['fixSize'] != null) continue;
                                block = items.splice(i, 1)[0];
                                block.resize = true;
                                break;
                            }

                        }
                    }


                    if (block != null) {
                        // resize block with free area;
                        if (block.resize) {
                            if (fitWidth) {
                                block.width = freeArea.width;
                                if (setting.cellH == 'auto') {
                                    layoutManager.adjustBlock(block, setting);
                                }
                                // for fitZone;
                                block.height = Math.min(block.height, freeArea.height);
                            } else {
                                block.height = freeArea.height;
                                // for fitZone;
                                block.width = Math.min(block.width, freeArea.width);
                            }
                        }

                        wall[block.id] = {
                            id: block.id,
                            x: x,
                            y: y,
                            width: block.width,
                            height: block.height,
                            resize: block.resize,
                            fixSize: block.fixSize
                        };

                        // keep success block for next round;
                        lastBlock = wall[block.id];

                        fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                        layoutManager.setBlock(lastBlock, setting);
                    } else {
                        // get expect area;
                        var misBlock = {
                            x: x,
                            y: y,
                            fixSize: 0
                        };
                        if (fitWidth) {
                            misBlock.width = freeArea.width;
                            misBlock.height = 0;
                            var lastX = x - 1;
                            var lastY = y;

                            while (matrix[lastY + '-' + lastX]) {
                                matrix[lastY + '-' + x] = true;
                                misBlock.height += 1;
                                lastY += 1;
                            }
                        } else {
                            misBlock.height = freeArea.height;
                            misBlock.width = 0;
                            var lastY = y - 1;
                            var lastX = x;

                            while (matrix[lastY + '-' + lastX]) {
                                matrix[y + '-' + lastX] = true;
                                misBlock.width += 1;
                                lastX += 1;
                            }
                        }
                        setting.onGapFound(layoutManager.setBlock(misBlock, setting), setting);
                    }
                }

            }

            runtime.matrix = matrix;
            runtime.totalRow = maxY;
            runtime.totalCol = maxX;
        }
    };



    function Freewall(selector) {

        var container = $(selector);
        if (container.css('position') == 'static') {
            container.css('position', 'relative');
        }
        var MAX = Number.MAX_VALUE;
        var klass = this;
        // increase the instance index;
        layoutManager.totalGrid += 1;

        var setting = $.extend({}, layoutManager.defaultConfig);
        var runtime = {
            arguments: null,
            blocks: {}, // store all items;
            events: {}, // store custome events;
            matrix: {},
            holes: {}, // forbidden zone;

            cellW: 0,
            cellH: 0, // unit adjust;
            cellS: 1, // unit scale;

            filter: '', // filter selector;
            lastId: 0,
            length: 0,

            maxWoB: 0, // max width of block;
            maxHoB: 0,
            minWoB: MAX,
            minHoB: MAX, // min height of block;

            running: 0, // flag to check layout arranging;

            gutterX: 15,
            gutterY: 15,

            totalCol: 0,
            totalRow: 0,

            limitCol: 666666, // maximum column;
            limitRow: 666666,

            sortFunc: null,
            keepOrder: false
        };
        setting.runtime = runtime;
        runtime.totalGrid = layoutManager.totalGrid;

        // check browser support transition;
        var bodyStyle = document.body.style;
        if (!layoutManager.transition) {
            (bodyStyle.webkitTransition != null ||
            bodyStyle.MozTransition != null ||
            bodyStyle.msTransition != null ||
            bodyStyle.OTransition != null ||
            bodyStyle.transition != null) &&
            (layoutManager.transition = true);
        }


        function setDraggable(item) {

            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var $item = $(item);
            var handle = $item.find($item.attr("data-handle"));
            layoutManager.setDraggable(item, {
                handle: handle[0],
                onStart: function(event) {
                    if (setting.animate && layoutManager.transition) {
                        layoutManager.setTransition(this, "");
                    }
                    $item.css('z-index', 9999).addClass('fw-float');

                    setting.onBlockDrag.call(item, event);
                },
                onDrag: function(event, tracker) {
                    var position = $item.position();
                    var top = Math.round(position.top / cellH);
                    var left = Math.round(position.left / cellW);
                    var width = Math.round($item.width() / cellW);
                    var height = Math.round($item.height() / cellH);
                    top = Math.min(Math.max(0, top), runtime.limitRow - height);
                    left = Math.min(Math.max(0, left), runtime.limitCol - width);
                    klass.setHoles({top: top, left: left, width: width, height: height});
                    klass.refresh();

                    setting.onBlockMove.call(item, event);
                },
                onDrop: function(event) {
                    var position = $item.position();
                    var top = Math.round(position.top / cellH);
                    var left = Math.round(position.left / cellW);
                    var width = Math.round($item.width() / cellW);
                    var height = Math.round($item.height() / cellH);
                    top = Math.min(Math.max(0, top), runtime.limitRow - height);
                    left = Math.min(Math.max(0, left), runtime.limitCol - width);

                    $item.removeClass('fw-float');
                    $item.css({
                        zIndex: "auto",
                        top: top * cellH,
                        left: left * cellW
                    });

                    //check old drag element;
                    var x, y, key, oldDropId;
                    for (y = 0; y < height; ++y) {
                        for (x = 0; x < width; ++x) {
                            key = (y + top) + "-" + (x + left);
                            oldDropId = runtime.matrix[key];
                            if (oldDropId && oldDropId != true) {
                                $("#" + oldDropId).removeAttr("data-position");
                            }
                        }
                    }

                    runtime.holes = {};

                    $item.attr({
                        "data-width": $item.width(),
                        "data-height": $item.height(),
                        "data-position": top + "-" + left
                    });

                    klass.refresh();

                    setting.onBlockDrop.call(item, event);
                }
            });
        }


        $.extend(klass, {

            addCustomEvent: function(name, func) {
                var events = runtime.events;
                name = name.toLowerCase();
                !events[name] && (events[name] = []);
                func.eid = events[name].length;
                events[name].push(func);
                return this;
            },

            appendBlock: function(items) {
                var allBlock = $(items).appendTo(container);
                var block = null;
                var activeBlock = [];

                if (runtime.arguments) {

                    if ($.isFunction(runtime.sortFunc)) {
                        allBlock.sort(runtime.sortFunc);
                    }

                    allBlock.each(function(index, item) {
                        item.index = ++index;
                        block = layoutManager.loadBlock(item, setting);
                        block && activeBlock.push(block);
                    });

                    engine[setting.engine](activeBlock, setting);

                    layoutManager.setWallSize(runtime, container);

                    runtime.length = allBlock.length;

                    allBlock.each(function(index, item) {
                        layoutManager.showBlock(item, setting);
                        if (setting.draggable || item.getAttribute('data-draggable')) {
                            setDraggable(item);
                        }
                    });
                }
            },
            /*
            add one or more blank area (hole) on layout;
            example:

                wall.appendHoles({
                    top: 10,
                    left: 36,
                    width: 2,
                    height: 6
                });

                wall.appendHoles([
                    {
                        top: 16,
                        left: 16,
                        width: 8,
                        height: 2
                    },
                    {
                        top: 10,
                        left: 36,
                        width: 2,
                        height: 6
                    }
                ]);

            */
            appendHoles: function(holes) {
                var newHoles = [].concat(holes), h = {}, i;
                for (i = 0; i < newHoles.length; ++i) {
                    h = newHoles[i];
                    runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
                }
                return this;
            },

            container: container,

            destroy: function() {
                var allBlock = container.find(setting.selector).removeAttr('id'),
                    block = null,
                    activeBlock = [];

                allBlock.each(function(index, item) {
                    $item = $(item);
                    var width = 1 * $item.attr('data-width') || "";
                    var height = 1 * $item.attr('data-height') || "";
                    $item.width(width).height(height).css({
                        position: 'static'
                    });
                });
            },

            fillHoles: function(holes) {
                if (arguments.length == 0) {
                    runtime.holes = {};
                } else {
                    var newHoles = [].concat(holes), h = {}, i;
                    for (i = 0; i < newHoles.length; ++i) {
                        h = newHoles[i];
                        delete runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height];
                    }
                }
                return this;
            },

            filter: function(filter) {
                runtime.filter = filter;
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },

            fireEvent: function(name, object, setting) {
                var events = runtime.events;
                name = name.toLowerCase();
                if (events[name] && events[name].length) {
                    for (var i = 0; i < events[name].length; ++i) {
                        events[name][i].call(this, object, setting);
                    }
                }
                return this;
            },

            fitHeight: function(height) {

                var height = height ? height : container.height() || $W.height();

                this.fitZone('auto', height);

                runtime.arguments = arguments;
            },

            fitWidth: function(width) {

                var width = width ? width : container.width() || $W.width();

                this.fitZone(width, 'auto');

                runtime.arguments = arguments;
            },

            fitZone: function(width, height) {
                var allBlock = container.find(setting.selector).removeAttr('id'),
                    block = null,
                    activeBlock = [];

                height = height ? height : container.height() || $W.height();
                width = width ? width : container.width() || $W.width();

                runtime.arguments = arguments;

                layoutManager.resetGrid(runtime);

                layoutManager.adjustUnit(width, height, setting);

                if (runtime.filter) {
                    allBlock.data('active', 0);
                    allBlock.filter(runtime.filter).data('active', 1);
                } else {
                    allBlock.data('active', 1);
                }

                if ($.isFunction(runtime.sortFunc)) {
                    allBlock.sort(runtime.sortFunc);
                }

                allBlock.each(function(index, item) {
                    var $item = $(item);
                    item.index = ++index;
                    block = layoutManager.loadBlock(item, setting);
                    block && $item.data("active") && activeBlock.push(block);
                });

                klass.fireEvent('onGridReady', container, setting);

                engine[setting.engine](activeBlock, setting);

                layoutManager.setWallSize(runtime, container);

                klass.fireEvent('onGridArrange', container, setting);

                runtime.length = allBlock.length;

                allBlock.each(function(index, item) {
                    layoutManager.showBlock(item, setting);
                    if (setting.draggable || item.getAttribute('data-draggable')) {
                        setDraggable(item);
                    }
                });
            },

            /*
            set block with special position, the top and left are multiple of unit width/height;
            example:

                wall.fixPos({
                    top: 0,
                    left: 0,
                    block: $('.free')
                });
            */
            fixPos: function(option) {
                $(option.block).attr({'data-position': option.top + "-" + option.left});
                return this;
            },

            /*
            set block with special size, the width and height are multiple of unit width/height;
            example:

                wall.fixSize({
                    height: 5,
                    width: 2,
                    block: $('.free')
                });
            */
            fixSize: function(option) {
                option.height != null && $(option.block).attr({'data-height': option.height});
                option.width != null && $(option.block).attr({'data-width': option.width});
                return this;
            },

            prepend: function(items) {
                container.prepend(items);
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },

            refresh: function() {
                var params = arguments.length ? arguments : runtime.arguments;
                var oldArg = runtime.arguments;
                var method = oldArg ? oldArg.callee : this.fitWidth;
                method.apply(this, Array.prototype.slice.call(params, 0));
                return this;
            },

            /*
            custom layout setting;
            example:

                wall.reset({
                    selector: '.brick',
                    animate: true,
                    cellW: 160,
                    cellH: 160,
                    delay: 50,
                    onResize: function() {
                        wall.fitWidth();
                    }
                });
            */
            reset: function(option) {
                $.extend(setting, option);
                return this;
            },

            /*
            create one or more blank area (hole) on layout;
            example:

                wall.setHoles({
                    top: 2,
                    left: 2,
                    width: 2,
                    height: 2
                });
            */

            setHoles: function(holes) {
                var newHoles = [].concat(holes), h = {}, i;
                runtime.holes = {};
                for (i = 0; i < newHoles.length; ++i) {
                    h = newHoles[i];
                    runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
                }
                return this;
            },
            /*
            sort items by using array sort function;
            example:

                wall.sortBy(function(itemA, itemB) {
                    return $(itemA).width() - $(itemB).width();
                });
            */
            sortBy: function(func) {
                runtime.sortFunc = func;
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },

            unFilter: function() {
                delete runtime.filter;
                this.refresh();
                return this;
            }
        });

        container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
        // execute plugins;
        for (var i in layoutManager.plugin) {
            if (layoutManager.plugin.hasOwnProperty(i)) {
                layoutManager.plugin[i].call(klass, setting, container);
            }
        }

        // setup resize event;
        $W.resize(function() {
            if (runtime.running) return;
            runtime.running = 1;
            setTimeout(function() {
                runtime.running = 0;
                setting.onResize.call(klass, container);
            }, 122);
            container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
        });
    };

    /*
    add default setting;
    example:

        Freewall.addConfig({
            offsetLeft: 0
        });
    */
    Freewall.addConfig = function(newConfig) {
        // add default setting;
        $.extend(layoutManager.defaultConfig, newConfig);
    };


    /*
    support create new arrange algorithm;
    example:

        Freewall.createEngine({
            slice: function(items, setting) {
                // slice engine;
            }
        });
    */
    Freewall.createEngine = function(engineData) {
        // create new engine;
        $.extend(engine, engineData);
    };

    /*
    support create new plugin;
    example:

        Freewall.createPlugin({
            centering: function(setting, container) {
                console.log(this);
                console.log(setting);
            }
        })l
    */
    Freewall.createPlugin = function(pluginData) {
        // register new plugin;
        $.extend(layoutManager.plugin, pluginData);
    };

    /*
    support access helper function;
    example:

        Freewall.getMethod('setBlock')(block, setting);
    */
    Freewall.getMethod = function(method) {
        // get helper method;
        return layoutManager[method];
    };

    window.Freewall = window.freewall = Freewall;

})(window.Zepto || window.jQuery);


/*! UIkit 2.26.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function(addon) {

    var component;

    if (window.UIkit) {
        component = addon(UIkit);
    }

    if (typeof define == "function" && define.amd) {
        define("uikit-parallax", ["uikit"], function(){
            return component || addon(UIkit);
        });
    }

})(function(UI){

    "use strict";

    var parallaxes      = [],
        supports3d      = false,
        scrolltop       = 0,
        wh              = window.innerHeight,
        checkParallaxes = function() {

            scrolltop = UI.$win.scrollTop();

            window.requestAnimationFrame(function(){
                for (var i=0; i < parallaxes.length; i++) {
                    parallaxes[i].process();
                }
            });
        };


    UI.component('parallax', {

        defaults: {
            velocity : 0.5,
            target   : false,
            viewport : false,
            media    : false
        },

        boot: function() {

            supports3d = (function(){

                var el = document.createElement('div'),
                    has3d,
                    transforms = {
                        'WebkitTransform':'-webkit-transform',
                        'MSTransform':'-ms-transform',
                        'MozTransform':'-moz-transform',
                        'Transform':'transform'
                    };

                // Add it to the body to get the computed style.
                document.body.insertBefore(el, null);

                for (var t in transforms) {
                    if (el.style[t] !== undefined) {
                        el.style[t] = "translate3d(1px,1px,1px)";
                        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                    }
                }

                document.body.removeChild(el);

                return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
            })();

            // listen to scroll and resize
            UI.$doc.on("scrolling.uk.document", checkParallaxes);
            UI.$win.on("load resize orientationchange", UI.Utils.debounce(function(){
                wh = window.innerHeight;
                checkParallaxes();
            }, 50));

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-parallax]', context).each(function() {

                    var parallax = UI.$(this);

                    if (!parallax.data("parallax")) {
                        UI.parallax(parallax, UI.Utils.options(parallax.attr("data-uk-parallax")));
                    }
                });
            });
        },

        init: function() {

            this.base     = this.options.target ? UI.$(this.options.target) : this.element;
            this.props    = {};
            this.velocity = (this.options.velocity || 1);

            var reserved  = ['target','velocity','viewport','plugins','media'];

            Object.keys(this.options).forEach(function(prop){

                if (reserved.indexOf(prop) !== -1) {
                    return;
                }

                var start, end, dir, diff, startend = String(this.options[prop]).split(',');

                if (prop.match(/color/i)) {
                    start = startend[1] ? startend[0] : this._getStartValue(prop),
                    end   = startend[1] ? startend[1] : startend[0];

                    if (!start) {
                        start = 'rgba(255,255,255,0)';
                    }

                } else {
                    start = parseFloat(startend[1] ? startend[0] : this._getStartValue(prop)),
                    end   = parseFloat(startend[1] ? startend[1] : startend[0]);
                    diff  = (start < end ? (end-start):(start-end));
                    dir   = (start < end ? 1:-1);
                }

                this.props[prop] = { 'start': start, 'end': end, 'dir': dir, 'diff': diff };

            }.bind(this));

            parallaxes.push(this);
        },

        process: function() {

            if (this.options.media) {

                switch(typeof(this.options.media)) {
                    case 'number':
                        if (window.innerWidth < this.options.media) {
                            return false;
                        }
                        break;
                    case 'string':
                        if (window.matchMedia && !window.matchMedia(this.options.media).matches) {
                            return false;
                        }
                        break;
                }
            }

            var percent = this.percentageInViewport();

            if (this.options.viewport !== false) {
                percent = (this.options.viewport === 0) ? 1 : percent / this.options.viewport;
            }

            this.update(percent);
        },

        percentageInViewport: function() {

            var top     = this.base.offset().top,
                height  = this.base.outerHeight(),
                distance, percentage, percent;

            if (top > (scrolltop + wh)) {
                percent = 0;
            } else if ((top + height) < scrolltop) {
                percent = 1;
            } else {

                if ((top + height) < wh) {

                    percent = (scrolltop < wh ? scrolltop : scrolltop - wh) / (top+height);

                } else {

                    distance   = (scrolltop + wh) - top;
                    percentage = Math.round(distance / ((wh + height) / 100));
                    percent    = percentage/100;
                }
            }

            return percent;
        },

        update: function(percent) {

            var $this      = this,
                css        = {transform:'', filter:''},
                compercent = percent * (1 - (this.velocity - (this.velocity * percent))),
                opts, val;

            if (compercent < 0) compercent = 0;
            if (compercent > 1) compercent = 1;

            if (this._percent !== undefined && this._percent == compercent) {
                return;
            }

            Object.keys(this.props).forEach(function(prop) {

                opts = this.props[prop];

                if (percent === 0) {
                    val = opts.start;
                } else if(percent === 1) {
                    val = opts.end;
                } else if(opts.diff !== undefined) {
                    val = opts.start + (opts.diff * compercent * opts.dir);
                }

                if ((prop == 'bg' || prop == 'bgp') && !this._bgcover) {
                    this._bgcover = initBgImageParallax(this, prop, opts);
                }

                switch(prop) {

                    // transforms
                    case 'x':
                        css.transform += supports3d ? ' translate3d('+val+'px, 0, 0)':' translateX('+val+'px)';
                        break;
                    case 'xp':
                        css.transform += supports3d ? ' translate3d('+val+'%, 0, 0)':' translateX('+val+'%)';
                        break;
                    case 'y':
                        css.transform += supports3d ? ' translate3d(0, '+val+'px, 0)':' translateY('+val+'px)';
                        break;
                    case 'yp':
                        css.transform += supports3d ? ' translate3d(0, '+val+'%, 0)':' translateY('+val+'%)';
                        break;
                    case 'rotate':
                        css.transform += ' rotate('+val+'deg)';
                        break;
                    case 'scale':
                        css.transform += ' scale('+val+')';
                        break;

                    // bg image
                    case 'bg':

                        // don't move if image height is too small
                        // if ($this.element.data('bgsize') && ($this.element.data('bgsize').h + val - window.innerHeight) < 0) {
                        //     break;
                        // }

                        css['background-position'] = '50% '+val+'px';
                        break;
                    case 'bgp':
                        css['background-position'] = '50% '+val+'%';
                        break;

                    // color
                    case 'color':
                    case 'background-color':
                    case 'border-color':
                        css[prop] = calcColor(opts.start, opts.end, compercent);
                        break;

                    // CSS Filter
                    case 'blur':
                        css.filter += ' blur('+val+'px)';
                        break;
                    case 'hue':
                        css.filter += ' hue-rotate('+val+'deg)';
                        break;
                    case 'grayscale':
                        css.filter += ' grayscale('+val+'%)';
                        break;
                    case 'invert':
                        css.filter += ' invert('+val+'%)';
                        break;
                    case 'fopacity':
                        css.filter += ' opacity('+val+'%)';
                        break;
                    case 'saturate':
                        css.filter += ' saturate('+val+'%)';
                        break;
                    case 'sepia':
                        css.filter += ' sepia('+val+'%)';
                        break;

                    default:
                        css[prop] = val;
                        break;
                }

            }.bind(this));

            if (css.filter) {
                css['-webkit-filter'] = css.filter;
            }

            this.element.css(css);

            this._percent = compercent;
        },

        _getStartValue: function(prop) {

            var value = 0;

            switch(prop) {
                case 'scale':
                    value = 1;
                    break;
                default:
                    value = this.element.css(prop);
            }

            return (value || 0);
        }

    });


    // helper

    function initBgImageParallax(obj, prop, opts) {

        var img = new Image(), url, element, size, check, ratio, width, height;

        element = obj.element.css({'background-size': 'cover',  'background-repeat': 'no-repeat'});
        url     = element.css('background-image').replace(/^url\(/g, '').replace(/\)$/g, '').replace(/("|')/g, '');
        check   = function() {

            var w = element.innerWidth(), h = element.innerHeight(), extra = (prop=='bg') ? opts.diff : (opts.diff/100) * h;

            h += extra;
            w += Math.ceil(extra * ratio);

            if (w-extra < size.w && h < size.h) {
                return obj.element.css({'background-size': 'auto'});
            }

            // if element height < parent height (gap underneath)
            if ((w / ratio) < h) {

                width  = Math.ceil(h * ratio);
                height = h;

                if (h > window.innerHeight) {
                    width  = width * 1.2;
                    height = height * 1.2;
                }

            // element width < parent width (gap to right)
            } else {

                width  = w;
                height = Math.ceil(w / ratio);
            }

            element.css({'background-size': (width+'px '+height+'px')}).data('bgsize', {w:width,h:height});
        };

        img.onerror = function(){
            // image url doesn't exist
        };

        img.onload = function(){
            size  = {w:img.width, h:img.height};
            ratio = img.width / img.height;

            UI.$win.on("load resize orientationchange", UI.Utils.debounce(function(){
                check();
            }, 50));

            check();
        };

        img.src = url;

        return true;
    }


    // Some named colors to work with, added by Bradley Ayers
    // From Interface by Stefan Petre
    // http://interface.eyecon.ro/
    var colors = {
        'black': [0,0,0,1],
        'blue': [0,0,255,1],
        'brown': [165,42,42,1],
        'cyan': [0,255,255,1],
        'fuchsia': [255,0,255,1],
        'gold': [255,215,0,1],
        'green': [0,128,0,1],
        'indigo': [75,0,130,1],
        'khaki': [240,230,140,1],
        'lime': [0,255,0,1],
        'magenta': [255,0,255,1],
        'maroon': [128,0,0,1],
        'navy': [0,0,128,1],
        'olive': [128,128,0,1],
        'orange': [255,165,0,1],
        'pink': [255,192,203,1],
        'purple': [128,0,128,1],
        'violet': [128,0,128,1],
        'red': [255,0,0,1],
        'silver': [192,192,192,1],
        'white': [255,255,255,1],
        'yellow': [255,255,0,1],
        'transparent': [255,255,255,0]
    };

    function calcColor(start, end, pos) {

        start = parseColor(start);
        end   = parseColor(end);
        pos   = pos || 0;

        return calculateColor(start, end, pos);
    }

    /**!
     * @preserve Color animation 1.6.0
     * http://www.bitstorm.org/jquery/color-animation/
     * Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
     * Released under the MIT and GPL licenses.
     */

    // Calculate an in-between color. Returns "#aabbcc"-like string.
    function calculateColor(begin, end, pos) {
        var color = 'rgba('
                + parseInt((begin[0] + pos * (end[0] - begin[0])), 10) + ','
                + parseInt((begin[1] + pos * (end[1] - begin[1])), 10) + ','
                + parseInt((begin[2] + pos * (end[2] - begin[2])), 10) + ','
                + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);

        color += ')';
        return color;
    }

    // Parse an CSS-syntax color. Outputs an array [r, g, b]
    function parseColor(color) {

        var match, quadruplet;

        // Match #aabbcc
        if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
            quadruplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

            // Match #abc
        } else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
            quadruplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

            // Match rgb(n, n, n)
        } else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

        } else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10),parseFloat(match[4])];

            // No browser returns rgb(n%, n%, n%), so little reason to support this format.
        } else {
            quadruplet = colors[color] || [255,255,255,0];
        }
        return quadruplet;
    }

    return UI.parallax;
});

!function(a){a.fn.ZooMove=function(b){var c=a.extend({image:"https://placeholdit.imgix.net/~text?txtsize=30&txt=image+default&w=350&h=350&txttrack=0",cursor:"false",scale:"1.5",move:"true",over:"false"},b);c.cursor="true"===c.cursor?"crosshair":"default",this.each(function(){c.overD=a(this).attr("zoo-over")?a(this).attr("zoo-over"):c.over,"true"===c.overD&&a(this).css({overflow:"visible","z-index":"100"}),c.imageD=a(this).attr("zoo-image")?a(this).attr("zoo-image"):c.image,a(this).append('<div class="zoo-img"></div>').children(".zoo-img").css({"background-image":"url("+c.imageD+")",cursor:c.cursor})}).on("mouseover",function(b){b.preventDefault(),c.scaleD=a(this).attr("zoo-scale")?a(this).attr("zoo-scale"):c.scale,c.moveD=a(this).attr("zoo-move")?a(this).attr("zoo-move"):c.move,a(this).children(".zoo-img").css({transform:"scale("+c.scaleD+")"})}).on("mousemove",function(b){b.preventDefault(),"true"===c.moveD&&a(this).children(".zoo-img").css({"transform-origin":(b.pageX-a(this).offset().left)/a(this).width()*100+"% "+(b.pageY-a(this).offset().top)/a(this).height()*100+"%"})}).on("mouseout",function(b){b.preventDefault(),a(this).children(".zoo-img").css({transform:"scale(1)"})})}}(jQuery);

    window.onresize = function(){

        if (jQuery(window).width() <= 768) {

            jQuery('.tm-navbar').addClass('tm-dropdown');
            jQuery('.user-section').removeClass('uk-open');
            jQuery('.user-section').removeAttr('data-uk-dropdown');
            jQuery('.user-section').removeAttr('aria-haspopup');
            jQuery('.user-section').removeAttr('aria-expanded');
            jQuery('#color-switcher').addClass('uk-flex-center');

            if (!jQuery('body').hasClass('mobile')) {
	    		jQuery('body').addClass('setmobile');
	    	}



        }else{
            jQuery('.tm-navbar').removeClass('tm-dropdown');
            jQuery('body').removeClass('setmobile');
            jQuery('#color-switcher').removeClass('uk-flex-center');
            jQuery('.user-section').attr('data-uk-dropdown', "{mode:'click', preventflip:true,remaintime:'100',pos:'bottom-right'}"); 
        }
    }


jQuery(function($){


	var hr = jQuery('.logo').attr('href');

    jQuery(window).resize();  

    jQuery('.search.button').on('click',  function(event) {
        jQuery('#searchform').form('submit');
    });

    jQuery(".ui.search").search({

        apiSettings: {
            url: hr+"searchresult/?query={query}",
            searchFullText: false,
            cache:false,

            onResponse: function(serverResponse) {

                var response = {
                    results : []
                };

                jQuery.each(serverResponse.subtopics, function(index, item) {

                    var maxResults = 10; // How many results would be displayed

                    if(index >= maxResults) {
                        return false;
                    }
               
                    response.results.push({
                        title : item.name,
                        description : item.description,
                        url   : item.url
                    });

                });
                return response;
            },
        },
        minCharacters : 1,
        searchFields   : [
          'title',
          'description'
        ],


    // type: 'category',
    // minCharacters: 1,
    // apiSettings: {
    //     onResponse: function(serverResponse) {
    //         var
    //             response = {
    //                 results: {}
    //             }
    //         ;
    //         //translate Server API response to work with search

    //         jQuery.each(serverResponse.subtopics, function(index, subtopic) {
    //             var
    //                 topic = subtopic.topic || 'Unknown',
    //                 maxResults = 8
    //             ;

    //             if(response.results[topic] === undefined) {
    //                 response.results[topic] = {
    //                     name: topic,
    //                     results: []
    //                 };
    //             }
    //             //add result to category
    //             response.results[topic].results.push({
    //                 title: subtopic.name,
    //                 url: subtopic.url
    //             });
    //         });
    //         console.log(response);
    //         return response;
    //     },

    //     url: "http://localhost/aukeys/searchresult/?query={query}",
    //     searchFullText: false,
    //     cache:false
    // }
    });

    jQuery('.productmenu[data-uk-dropdown]').on('hide.uk.dropdown', function(){
	    jQuery('#uknav .leftdmenu li').removeClass('uk-active').attr('aria-expanded', false);
	    jQuery('#uknav .leftdmenu li').first().addClass('uk-active').attr('aria-expanded', true);

	    jQuery('#uknav #tab-left-content li').removeClass('uk-active').attr('aria-expanded', false);
	    jQuery('#uknav #tab-left-content li').first().addClass('uk-active').attr('aria-expanded', true);
	});

	jQuery('.refresh-gallery').addClass('loading');


	jQuery(window).load(function() {	
	
		setTimeout(function(){

			jQuery('.refresh-gallery').removeClass('loading');
		},1000);
		
	});

    
    jQuery('#contact[data-uk-accordion]').on('toggle.uk.accordion', function(){  // Nav > Category > Style it

        jQuery('form').form('reset');

    });

	// jQuery('.sdk[data-uk-scrollspy]').on('inview.uk.scrollspy', function(){
	//     console.log('test');
	// });


    jQuery('[data-uk-dropdown]').on('show.uk.dropdown', function(){  // Nav > Category > Style it

        jQuery('.uk-navbar-nav .uk-dropdown').css('top', 70);

    });

    jQuery('.zoo-item').ZooMove({
		cursor: 'true',
		scale: '1.2',
	});

	jQuery('.carerr-pag[data-uk-pagination]').on('select.uk.pagination', function(e, pageIndex){
	    //alert('You have selected page: ' + (pageIndex+1));

	    jQuery('.careerlist').addClass('loading');

	    var career = jQuery('.careerlist');

	    var data = {
                action: 'career',
                security: career.attr('data-nonce'),
                offset: pageIndex * career.attr('data-pages')
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

            	console.log(response);

            	career.removeClass('loading');

            	if (response.success == true) {

            		career.html(response.data.html);

            	}
            	

            });

	});


	jQuery('.product-pag[data-uk-pagination]').on('select.uk.pagination', function(e, pageIndex){
	    //alert('You have selected page: ' + (pageIndex+1));

	    jQuery('.productlist').addClass('loading');

	    var product = jQuery('.productlist');

	    var data = {
                action: 'product',
                security: product.attr('data-nonce'),
                offset: pageIndex * product.attr('data-pages'),
                query: getQueryString('s')
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

            	product.removeClass('loading');

            	if (response.success == true) {

            		product.html(response.data.html);

            	}
            	

            });

	});

	jQuery('.post-pag[data-uk-pagination]').on('select.uk.pagination', function(e, pageIndex){
	    //alert('You have selected page: ' + (pageIndex+1));

	    jQuery('.postlist').addClass('loading');

	    var product = jQuery('.postlist');

	    var data = {
                action: 'post',
                security: product.attr('data-nonce'),
                offset: pageIndex * product.attr('data-pages'),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

            	product.removeClass('loading');

            	if (response.success == true) {

            		product.html(response.data.html);

            	}
            	

            });

	});

	jQuery('.gallery-pag[data-uk-pagination]').on('select.uk.pagination', function(e, pageIndex){
	    //alert('You have selected page: ' + (pageIndex+1));

	    jQuery('#gallery').addClass('loading');

	    var product = jQuery('#gallery');

	    var data = {
                action: 'gallery',
                security: product.attr('data-nonce'),
                offset: pageIndex,
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

            	product.removeClass('loading');

            	if (response.success == true) {

            		product.html(response.data.html);

            	}
            	

            });

	});


    jQuery('#categorygrid[data-uk-grid]').on('beforeupdate.uk.grid', function(e, children) {

        jQuery('#category-tab li a').on('click', function(){ // Click Tab

            if (jQuery(this).parent('li').hasClass('uk-active')) { // Prevent mulit click after actived
                return false;
            }
    
		});

    });


    jQuery('#categorygrid[data-uk-grid]').on('afterupdate.uk.grid', function(e, children) { // After Tab Active
        setTimeout("jQuery('.category-list').removeClass('loading');",300);
    });


    jQuery('.faqlist .uk-accordion-title').on('click',  function(event) {

    	jQuery('.faqlist .uk-accordion-title').find('i').removeClass('uk-icon-caret-up').addClass('uk-icon-caret-down');

       	if (jQuery(this).hasClass('uk-active')) {
       			
        	jQuery(this).find('i').removeClass('uk-icon-caret-up').addClass('uk-icon-caret-down');

       	}else{

       		jQuery(this).find('i').removeClass('uk-icon-caret-down').addClass('uk-icon-caret-up');

       	}

    });	

    jQuery('.tm-navbar ul.uk-tab li').hover(function() { // Nav > Category > Hover event

        var index = jQuery(this).index();

        jQuery('.tm-navbar ul.uk-tab li').not(this).removeClass('uk-active');
        jQuery('.tm-navbar ul.uk-tab li').not(this).attr('aria-expanded',false);
        jQuery(this).addClass('uk-active');
        jQuery(this).attr('aria-expanded',true);
        jQuery('.tm-navbar #tab-left-content li').attr('aria-hidden', true);
        jQuery('.tm-navbar #tab-left-content li').removeClass('uk-active');
        jQuery('.tm-navbar #tab-left-content li').eq(index).attr('aria-hidden', false);
        jQuery('.tm-navbar #tab-left-content li').eq(index).addClass('uk-active');

    }, function() {

        jQuery('.tm-navbar ul.uk-tab li').not(this).removeClass('uk-active');
        jQuery('.tm-navbar ul.uk-tab li').not(this).attr('aria-expanded',false);

    });

    jQuery('.tm-navbar ul.uk-tab li').click(function(event) { // Nav > Category > URL Redirect event

        var url = jQuery(this).find('a').attr('href');

        window.location.href = url;

    });

    jQuery('.tm-blocks figure').hover(function() { // Nav > Category > Image Overlay Hover event

        jQuery(this).find('.uk-overlay-background').css('opacity', 0);

    }, function() {

        jQuery(this).find('.uk-overlay-background').css('opacity', 1);

    });


    jQuery('#tab-left-content figure').hover(function() { // Nav > Category > Image Overlay Hover event
        var before_img_url=jQuery(this).find('img').attr("src");
        var before_img_url_type=before_img_url.substring(before_img_url.lastIndexOf('.')); 
        var before_img_url_name=before_img_url.substring(0,before_img_url.lastIndexOf('.')); 
        var new_img_url_type=before_img_url_type.replace(".", "_cg.");
        jQuery(this).find('img').attr("src",before_img_url_name+new_img_url_type);
    }, function() {
        var new_img_url=jQuery(this).find('img').attr("src");
        var new_img_url_type=new_img_url.substring(new_img_url.lastIndexOf('.'));
        var before_img_url=new_img_url.replace("_cg"+new_img_url_type, new_img_url_type);
        jQuery(this).find('img').attr("src",before_img_url);

    });


    jQuery('.move-reset,.move-signup,.move-login').on('click', function(event) { // Switch the Login / Register / Reset Password form

        var name = event.currentTarget.className;

        jQuery(this).parents('form').addClass('uk-hidden');
        
        jQuery('#'+name).removeClass('uk-hidden').form('reset');


    });

    jQuery('.color-switcher[data-uk-slideset]').on('show.uk.slideset', function(e, children) {

    	//jQuery('.refresh-gallery').addClass('loading');

        jQuery('#color-switcher li').find('span').html('');


        jQuery('.color-switcher ul li:visible').first().find('a').trigger('click');

  //       setTimeout(function(){

		// 	jQuery('.refresh-gallery').removeClass('loading');

		// },1000);

    });

    jQuery('body').attr('id', jQuery('#home-slider ul li').first().attr('data-background'));

    jQuery('#home-slider[data-uk-slideshow]').on('beforeshow.uk.slideshow', function(event, next, current){ // Clear all the validate message after hidden
		
		console.log(next);
		var cls = jQuery(next).attr('data-background');

			if (jQuery(window).scrollTop() > 0) {

				jQuery('body').removeAttr('id');
				return false;

			}else{

				jQuery('body').attr('id', cls);

			}
	});

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > jQuery('#home-slider').height() || jQuery(this).scrollTop() > jQuery('.uido').height()) {
			jQuery('.fixedicon').removeClass('uk-hidden');
		} else {
			jQuery('.fixedicon').addClass('uk-hidden');
		}

		if (jQuery(this).scrollTop() > jQuery('#category-tab').height()) {
			jQuery('.categoryll').removeClass('uk-hidden');
		} else {
			jQuery('.categoryll').addClass('uk-hidden');
		}
	});


	var hi = jQuery('#mobiledropdown').outerHeight();

	//jQuery('.mobile #searchform').css('bottom', '-'+hi+'px');


    jQuery(window).scroll(function () {

    	if (jQuery(window).width() <= 768) {


	    	if (!jQuery('body').hasClass('mobile')) {
	    		jQuery('body').addClass('setmobile');
	    	}
    		


    		jQuery(".home .tm-navbar,.account .tm-navbar").css('background', 'rgba(0,0,0,0.8)');

    			if (jQuery(window).scrollTop() <= 0) {

    				jQuery('body').removeClass('setmobile');
    				jQuery('body.account').removeClass('activemenu');

    				jQuery('#searchform').addClass('uk-hidden');
    				
    				jQuery(".home .tm-navbar,.account .tm-navbar").css('background', 'transparent');

    				jQuery('.mobile .searchimg,.mobile .userimg,.mobile .navimg').css('display', 'none');

    				jQuery('body').attr('id', jQuery('#home-slider ul li.uk-active').first().attr('data-background'));

    			}else{

    				jQuery(".jid").css('color', 'white');
    				jQuery('body.account').addClass('activemenu');
    				jQuery('.mobile .searchimg,.mobile .userimg,.mobile .navimg').css('display', 'inline-block');

    				jQuery('body').removeAttr('id');
    			}
    			

    	}else{

    			if (jQuery(window).scrollTop() > 0) {

    				jQuery(".home .tm-navbar").css('background', 'white');
    				jQuery('body').removeAttr('id');

    			}else{
    				jQuery('body').attr('id', jQuery('#home-slider ul li.uk-active').first().attr('data-background'));
    				jQuery(".home .tm-navbar").css('background', 'transparent');
    			}

    	}

    
	});

	jQuery('.jid').on('click', function(event) {

		
		jQuery(this).addClass('uk-hidden');
		jQuery('.cl').removeClass('uk-hidden');
		jQuery('#mobilemenu').removeClass('uk-hidden').css('height', jQuery(window).height());
		jQuery('html').addClass('addmenu').css('overflow', 'hidden');

		
	});

	jQuery('.cl').on('click', function(event) {

		
		jQuery(this).addClass('uk-hidden');
		jQuery('.jid').removeClass('uk-hidden');
		jQuery('#mobilemenu').addClass('uk-hidden');
		jQuery('html').removeClass('addmenu').removeAttr('style');

		
	});

	var site = getQueryString('site');

	if (site != null) {

		jQuery('#support-form select[name="amazonsite"]').dropdown('set selected',site);
		jQuery('#support-form #ass').val(jQuery('#support-form select[name="amazonsite"]').dropdown('get text'));
	}


	jQuery('#support-form select').on('change', function(event) {
		jQuery('#support-form #ass').val(jQuery('#support-form select[name="amazonsite"]').dropdown('get text'));
	});

    jQuery('[data-uk-tab]').on('change.uk.tab', function(event, area){
        //console.log(event);

        jQuery('form').form('reset');
    });

    jQuery('.usermenus[data-uk-tab]').on('change.uk.tab', function(event, area){

		var tab = getQueryString('tab');
			
			if (tab != null) {

				jQuery('ul.usermenus li').removeClass('uk-active').attr('aria-expanded', false);
				jQuery('ul.usermenus li:eq('+tab+')').addClass('uk-active').attr('aria-expanded', true);

				jQuery('ul#user-center li').removeClass('uk-active').attr('aria-expanded', false);
				jQuery('ul#user-center li:eq('+tab+')').addClass('uk-active').attr('aria-expanded', true);

			}
			
       
        if (area.context.textContent == " My Messages") {
            jQuery('.accountarea').addClass('uk-padding-remove').css('border-left', 'none');
        }else{
            jQuery('.accountarea').removeClass('uk-padding-remove').css('border-left', '1px solid #ddd');
        }

    });

    jQuery('.messagemenu[data-uk-tab]').on('change.uk.tab', function(event, area){

        jQuery('.messagecontent .segment').addClass('loading');


        if (area.attr('data-id') != undefined) {

        	var data = {
                action: 'message',
                id: area.attr('data-id')
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {
            	area.find('i').attr('class', 'uk-icon-folder-open-o');
            });
        }

	
        setTimeout("jQuery('.messagecontent .segment').removeClass('loading');",300);

    });

    jQuery('#country-select').dropdown(); // Init the dropdown
    jQuery('.usersignup #country-select').dropdown();
    jQuery('#amazoncountry .dropdown').dropdown({
        onChange: function(value, text, $selectedItem) {
        	jQuery('.buyonamazon').attr('href', value);
        }
      }); // Init the dropdown

    jQuery('#countryselect').dropdown({
	    onChange: function(value, text, $selectedItem) {
	    	jQuery(this).find('.default.text').text(text);
	    }
	  });

    
    jQuery('.countryselect').dropdown(); // Init the dropdown
    jQuery('.usersignup .countryselect').dropdown({
	    onChange: function(value, text, $selectedItem) {
	    	jQuery(this).find('.default.text').text(text);
	    }
	  });
          
    jQuery('.hearabout').dropdown(); // Init the dropdown
    jQuery('#pmn').dropdown();
    jQuery('.segment .dropdown').dropdown();

    jQuery('.diso .dropdown').dropdown();

    jQuery('.ui.radio.checkbox').checkbox();

    jQuery('.removetransient').on('click', function() {

        var data = {
                action: jQuery('.resendform').find('input[name="deleteaction"]').val(),
                security: jQuery('.resendform').find('input[name="_nonce"]').val()
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                console.log(response.success);

                if (response.success == false) {

                    alert(response.data.message);

                    return false;

                }else{

                    //window.location.href = jQuery('.logo').attr('href');

                }
            });
    });


    jQuery('.sign-out').on('click', function() {

        var data = {
                action: 'logout',
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                console.log(response.success);

                if (response.success == false) {

                    alert(response.data.message);

                    return false;

                }else{

                    setTimeout("window.location.href = jQuery('.logo').attr('href');",3000);

                }
            });
    });

    jQuery('#myproduct-form .submit').on('click', function() {
        jQuery('.registerarea').addClass('loading');
    });

    jQuery('.resendactivate').on('click', function() {

        var data = {
                action: jQuery('.resendform').find('input[name="resendaction"]').val(),
                security: jQuery('.resendform').find('input[name="_nonce"]').val(),
                email:jQuery('.resendform').find('input[name="email"]').val(),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                console.log(response.success);

                if (response.success == false) {

                    return false;

                }else{

                    //window.location.href = jQuery('.logo').attr('href');

                }
            });
    });

    jQuery('body.search .dadsf i.search').on('click', function(event) {

    	var f = jQuery('.dadsf .prompt').val();

    	window.location.href = jQuery('.logo').attr('href')+'/?s='+f+'&post_type=product';

    });

    jQuery('.testit').on('click',  function(event) {
    	if (jQuery('body').hasClass('no')) {
    		$.UIkit.notify('Please login. ', {status: 'danger'});
    	}else{
    		window.location.href = jQuery('.userimg').attr('href')+'/?tab=1';
    	}
    });

    // $.fn.form.settings.rules.checkUsername = function(value) {

    //  if (jQuery('input:focus').length >= 1) {
    //      return true;
    //  }

    //  var res = true;

    //  var data = {
 //             action: 'checkusername',
 //                 name : value
 //            };


    //      jQuery.ajax({
    //          url: ajax_object.ajaxurl,
    //          type : "POST",
    //          async: false,
    //          data,
    //          dataType: "json",
    //          success: function(data) {
    //             res = data.success;
    //          }
    //      });

    //     if (res == true) {
    //      return value;
    //  }else{
    //      return res;
    //  }

 //    };

    // $.fn.form.settings.rules.changeUsername = function(value) {

    //  if (jQuery('input:focus').length >= 1) {
    //      return true;
    //  }

    //  var form = jQuery(this);

    //  var res = true;

    //  var data = {
 //             action: 'changeusername',
 //                 name : value
 //            };


    //      jQuery.ajax({
    //          url: ajax_object.ajaxurl,
    //          type : "POST",
    //          async: false,
    //          data,
    //          dataType: "json",
    //          success: function(data) {
    //             res = data.success;
                   
    //          }
    //      });

    //      if (res == true) {
    //          return value;
    //      }else{
    //          return res;
    //      }

 //    };


    // $.fn.form.settings.rules.checkEamil = function(value) {

    //  if (jQuery('input:focus').length >= 1) {
    //      return true;
    //  }

    //  var res = true;

    //  var data = {
 //             action: 'checkuseremail',
 //                 email : value
 //            };


    //      jQuery.ajax({
    //          url: ajax_object.ajaxurl,
    //          type : "POST",
    //          async: false,
    //          data,
    //          dataType: "json",
    //          success: function(data) {
    //             res = data.success;
    //          }
    //      });

    //     if (res == true) {
    //      return value;
    //  }else{
    //      return res;
    //  }

 //    };


    // $.fn.form.settings.rules.checkSubcribe = function(value) {


    //  if (jQuery('input:focus').length >= 1) {
    //      return true;
    //  }

    //  var res = true;

    //  var data = {
 //             action: 'checksubcribe',
 //                 email : value
 //            };


    //      jQuery.ajax({
    //          url: ajax_object.ajaxurl,
    //          type : "POST",
    //          async: false,
    //          data,
    //          dataType: "json",
    //          success: function(data) {
    //             res = data.success;
    //          }
    //      });

    //     if (res == true) {
    //      return value;
    //  }else{
    //      return res;
    //  }

 //    };

    // $.fn.form.settings.rules.checkIfSubcribed = function(value) {


    //  if (jQuery('input:focus').length >= 1) {
    //      return true;
    //  }

    //  var res = true;

    //  var data = {
 //             action: 'checkifsubcribed',
 //              email : value
 //            };


    //      jQuery.ajax({
    //          url: ajax_object.ajaxurl,
    //          type : "POST",
    //          async: false,
    //          data,
    //          dataType: "json",
    //          success: function(data) {
    //             res = data.success;
    //          }
    //      });

    //     if (res == true) {
    //      return value;
    //  }else{
    //      return res;
    //  }

 //    };

    $.fn.form.settings.rules.validateNoHtmlTags = function(value) {

        return !/<(\/)?\w+/.test(value);

    }

    $.fn.form.settings.rules.validateAmazonOrderNumber = function(value) {

        return /^\d{3}-?\d{7}-?\d{7}$/.test(value);

    }

    $.fn.form.settings.rules.checkInfo = function(value,action) {


        if (jQuery('input:focus').length >= 1) {
            return true;
        }

        var form = jQuery(this).parents('form');

        var res = true;

        //form.find('button').addClass('loading');

        var data = {
                action: action,
                text : value,
                email: form.find('input[name="email"]').val()
            };

            jQuery.ajax({
                url: ajax_object.ajaxurl,
                type : "POST",
                async: false,
                data,
                dataType: "json",
                success: function(data) {
                    jQuery('.uk-notify').find('.uk-notify-message').first().remove();
                    res = data.success;
                }
            });

        form.find('button').removeClass('loading');
        return res;
    };

    jQuery('.loginform').form({
        on: 'blur',
        inline : true,
        fields: {
          email: {
            identifier: 'email',
            rules: [
               {
                type: 'empty',
                prompt: 'Please enter your email address'
              },
              {
                type   : 'email',
                prompt : 'Please enter a valid email address'
              },
//              {
//                type: 'contains[.com]',
//                prompt: 'Please enter a valid {name}'
//              },
              {
                 type   : 'checkInfo[checkuseremailandusername]',
                 prompt : 'This email address has not been registered'
              }
            ]
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password'
              },
              {
                 type   : 'checkInfo[checkpassword]',
                 prompt : 'Please enter a valid password'
              }
            ]
          }
        },
        onSuccess: submitForm
     });


    jQuery('.resetpassword').form({
        on: 'blur',
        inline : true,
        fields: {
          email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your email address'
              },
              {
                type   : 'email',
                prompt : 'Please enter a valid email address'
              },
//              {
//                type: 'contains[.com]',
//                prompt: 'Please enter a valid {name}'
//              },
              {
                 type   : 'checkInfo[checkuseremailandusername]',
                 prompt : 'This email address has not been registered'
              }
            ]
        },
        },
        onSuccess: submitForm
     });

    jQuery('#searchform').form({
        on: 'blur',
        fields: {
          s: {
            identifier: 's',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your {name}'
              },
            ]
        },
        },
        onSuccess: submitForm
    });

    jQuery('#support-form').form({
        on: 'blur',
        inline : true,
        fields: {
//            aom: {
//                identifier: 'aom',
//                rules: [
//                  {
//                    type: 'empty',
//                    prompt: 'Please enter the {name}'
//                  },
//                  {
//                        type: 'empty',
//                        prompt: 'Please enter the {name}'
//                    },
//                  {
//                    type   : 'validateNoHtmlTags',
//                    prompt : 'HTML tags are not allowed'
//                  },
//                  {
//                    type   : 'validateAmazonOrderNumber',
//                    prompt : 'Please input a vaild {name}'
//                  }
//                ]
//            },
            amazonsite: {
                identifier: 'amazonsite',
                rules: [
                  {
                    type   : 'minCount[1]',
                    prompt : 'Please select'
                  },
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                   {
                    type: 'empty',
                    prompt: 'Please enter your email address'
                  },
                  {
                    type   : 'email',
                    prompt : 'Please enter a valid email address'
                  },
                ]
            },
            issue: {
                identifier: 'issue',
                rules: [
                  {
                    type: 'empty',
                    prompt: 'Please enter the {name}'
                  },
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: submitContactForm
    });

    jQuery('#wholesale-form').form({
        on: 'blur',
        inline : true,
        fields: {
            wcn: {
                identifier: 'wcn',
                rules: [
                  {
                    type: 'empty',
                    prompt: 'This field is required'
                  },
                ]
            },
            Country: {
                identifier: 'Country',
                rules: [
                  {
                    type   : 'minCount[1]',
                    prompt : 'Please select'
                  },
                ]
            },
            hearabout: {
                identifier: 'hearabout',
                rules: [
                  {
                    type   : 'minCount[1]',
                    prompt : 'Please select'
                  },
                ]
            },
            Email: {
                identifier: 'Email',
                rules: [
                  {
                    type: 'empty',
                    prompt: 'This field is required'
                  },
                  {
                    type   : 'email',
                    prompt : 'Please enter a valid email address'
                  },
//                  {
//                    type: 'contains[.com]',
//                    prompt: 'Please enter a valid {name}'
//                  },
                ]
            },
            Company: {
                identifier: 'Company',
                rules: [
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  },
                ]
            },
            Phone: {
                identifier: 'Phone',
                rules: [
                {
                    type: 'empty',
                    prompt: 'This field is required'
                },
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  },
                ]
            },
            lcr: {
                identifier: 'lcr',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'This field is required'
                    },
                    {
                        type   : 'validateNoHtmlTags',
                        prompt : 'HTML tags are not allowed'
                    },
                ]
            },
            Webiste: {
                identifier: 'Webiste',
                
                rules: [
                    {
                        type: 'empty',
                        prompt: 'This field is required'
                    },
                	{
                    type   : 'url',
                    prompt : 'Please enter a valid website address'
                  },
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  },
                ]
            },
            Message: {
                identifier: 'Message',
                rules: [
                  // {
                  //   type   : 'empty',
                  //   prompt : 'Please enter the {name}'
                  // },
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: submitContactForm
    });

    jQuery('#marketing-form').form({
        on: 'blur',
        inline : true,
        fields: {
            mcn: {
                identifier: 'mcn',
                rules: [
                  {
                    type: 'empty',
                    prompt: 'This field is required'
                  },
                ]
            },
            mc: {
                identifier: 'mc',
                rules: [
                  {
                    type   : 'minCount[1]',
                    prompt : 'Please select'
                  },
                ]
            },
            Email: {
                identifier: 'Email',
                rules: [
                  {
                    type: 'empty',
                    prompt: 'This field is required'
                  },
                  {
                    type   : 'email',
                    prompt : 'Please enter a valid email address'
                  },
//                  {
//                    type: 'contains[.com]',
//                    prompt: 'Please enter a valid {name}'
//                  },
                ]
            },
            Company: {
                identifier: 'Company',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'This field is required'
                  },
                ]
            },
            Phone: {
                identifier: 'Phone',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'This field is required'
                  },
                ]
            },
            Webiste: {
                identifier: 'Webiste',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'This field is required'
                  },
                  {
                    type   : 'url',
                    prompt : 'Please enter a valid website address'
                  },
                ]
            },
            Message: {
                identifier: 'Message',
                rules: [
                  // {
                  //   type   : 'empty',
                  //   prompt : 'Please enter the {name}'
                  // },
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: submitContactForm
    });


    jQuery('.changepassword').form({
        on: 'blur',
        inline : true,
        fields: {
            cg_password1: {
                identifier: 'cg_password1',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter a password'
                  },
                  {
                    type   : 'minLength[6]',
                    prompt : 'Your password must be at least {ruleValue} characters'
                  },
                  // {
                  //   type   : 'match[password2]',
                  //   prompt : 'The passwords do not match'
                  // }
                ]
             },
            cg_password2: {
                identifier: 'cg_password2',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please re-enter the password'
                  },
                  {
                    type   : 'minLength[6]',
                    prompt : 'Your password must be at least {ruleValue} characters'
                  },
                  {
                    type   : 'match[cg_password1]',
                    prompt : 'Two password must be match'
                  }
                ]
             },
        },
        onSuccess: submitForm
     });

    jQuery('.registerform').form({
        inline : true,
        on     : 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                 {
                    type: 'empty',
                    prompt: 'Please enter a username'
                 },
                {
                    type   : 'checkInfo[checkusername]',
                    prompt : '{name} Already Exists'
                }
                ]
            },
        email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your email address'
              },
              {
                type   : 'email',
                prompt : 'Please enter a valid email address'
              },
//              {
//                type: 'contains[.com]',
//                prompt: 'Please enter a valid {name}'
//              },
              {
                 type   : 'checkInfo[checkuseremail]',
                 prompt : '{name} Already Exists'
              }
            ]
          },
        password1: {
            identifier: 'password1',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter a password'
              },
              {
                type   : 'minLength[6]',
                prompt : 'Your password must be at least {ruleValue} characters'
              },
              // {
              //   type   : 'match[password2]',
              //   prompt : 'The passwords do not match'
              // }
            ]
         },
        password2: {
            identifier: 'password2',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please verify the password'
              },
              {
                type   : 'minLength[6]',
                prompt : 'Your password must be at least {ruleValue} characters'
              },
              {
                type   : 'match[password1]',
                prompt : 'The two passwords must match'
              }
            ]
         },
        location: {
            identifier: 'location',
            rules: [
              {
                type   : 'minCount[1]',
                prompt : 'Please select'
              }
            ]
        },
        terms: {
            identifier: 'terms',
            rules: [
              {
                type   : 'checked',
                prompt : 'You must agree to the {name}'
              }
            ]
          }
        },
        onSuccess: submitForm,
     });
     
     jQuery('.mobile_registerform').form({
        inline : true,
        on     : 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                 {
                    type: 'empty',
                    prompt: 'Please enter a username'
                 },
                {
                    type   : 'checkInfo[checkusername]',
                    prompt : '{name} Already Exists'
                }
                ]
            },
        email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your email address'
              },
              {
                type   : 'email',
                prompt : 'Please enter a valid email address'
              },
//              {
//                type: 'contains[.com]',
//                prompt: 'Please enter a valid {name}'
//              },
              {
                 type   : 'checkInfo[checkuseremail]',
                 prompt : '{name} Already Exists'
              }
            ]
          },
        mobile_password1: {
            identifier: 'mobile_password1',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter a password'
              },
              {
                type   : 'minLength[6]',
                prompt : 'Your password must be at least {ruleValue} characters'
              },
              // {
              //   type   : 'match[password2]',
              //   prompt : 'The passwords do not match'
              // }
            ]
         },
        mobile_password2: {
            identifier: 'mobile_password2',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please verify the password'
              },
              {
                type   : 'minLength[6]',
                prompt : 'Your password must be at least {ruleValue} characters'
              },
              {
                type   : 'match[mobile_password1]',
                prompt : 'The two passwords must match'
              }
            ]
         },
        location: {
            identifier: 'location',
            rules: [
              {
                type   : 'minCount[1]',
                prompt : 'Please select'
              }
            ]
        },
        terms: {
            identifier: 'terms',
            rules: [
              {
                type   : 'checked',
                prompt : 'You must agree to the {name}'
              }
            ]
          }
        },
        onSuccess: submitForm,
     });

    jQuery('.userinfoform').form({
        inline : true,
        on     : 'blur',
        fields: {
            mydevice: {
                identifier: 'mydevice',
                rules: [
                  {
                    type   : 'validateNoHtmlTags',
                    prompt : 'HTML tags are not allowed'
                  }
                ]
              },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: userinfosubmitForm,
     });

    jQuery('.amazonform').form({
        fields: {
            amazoncountry: {
                identifier: 'amazoncountry',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please select a dropdown value'
                  }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
     });

    jQuery('.newsleeterform').form({
        inline : true,
        on: 'blur',
        fields: {
            newsletter: {
                identifier: 'newsletter',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your email address'
                    },
                    {
                        type   : 'email',
                        prompt : 'Please enter a valid e-mail address'
                    },
//                    {
//                        type: 'contains[.com]',
//                        prompt: 'Please enter a valid e-mail'
//                    },
                    {
                        type   : 'checkInfo[checkifsubcribed]',
                        prompt : '{value} has been subcribed already'
                    }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: submitForm,
    });

    jQuery('#username-form').form({
        inline : true,
        fields: {
            username: {
                identifier: 'username',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your username'
                    },
                    {
                        type   : 'checkInfo[changeusername]',
                        prompt : '{value} is Already Exists'
                    }
                ]
            },
        },
        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: usernamesubmitForm,
    });

    jQuery('#careerapply-form').form({
        inline : true,
        fields: {
            resumename: {
                identifier: 'resumename',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please select your {name}'
                    },
                    
                ]
            },
            // covername: {
            //     identifier: 'covername',
            //     depends: 'resumename',
            //     rules: [
            //         {
            //             type: 'empty',
            //             prompt: 'Please select your {name}'
            //         },
                    
            //     ]
            // },
        },

        onFailure: function(){
            setTimeout("jQuery('form').removeClass('loading');",300);
            return false;
        },
        onSuccess: careerForm,
    });


    jQuery('#myproduct-form').form({
        inline : true,
        fields: {
            pmn: {
                identifier: 'pmn',
                rules: [
                  {
                    type   : 'minCount[1]',
                    prompt : 'Please select'
                  }
                ]
            },
            aon: {
                identifier: 'aon',
                rules: [
                   {
                        type: 'empty',
                        prompt: 'Please enter the {name}'
                    },
	                  {
	                    type   : 'validateNoHtmlTags',
	                    prompt : 'HTML tags are not allowed'
	                  },
	                  {
	                    type   : 'validateAmazonOrderNumber',
	                    prompt : 'Please input a vaild {name}'
	                  }
                ]
              },

        },
        onFailure: function(formErrors, fields){
            
            setTimeout("jQuery('form').removeClass('loading');",300);
            setTimeout("jQuery('.registerarea').removeClass('loading');",300);
            //jQuery(this).form().removeClass('loading');
            return false;

        },
        onSuccess: registerProductSubmit,
    });

     var wall = new Freewall("#container");
      wall.fitWidth();


    function submitForm(){
        var data = {
                action: jQuery(this).form('get field', 'action').val(),
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                //console.log(response);

                if (response.success == false) {

                    return false;

                }else{

                    //$.UIkit.notify('Upload Completed', {status: 'success'});

                    if (response.data != '') {

                        if (response.data.stay) {
                            return false;
                        }

                        window.location.href = response.data.url;
                        
                    }else{

                        window.location.href = jQuery('.logo').attr('href');

                    }

                }
            });
    }

    function submitContactForm(){
    	var type = jQuery(this).form('get field', 'type').val(),
        email = jQuery(this).form('get field', 'email').val();
//        if (type == 'support' && jQuery('body').hasClass('no')) {
//                setTimeout(function(){
//                    jQuery('form').removeClass('loading');
//                }, 250);
//                $.UIkit.notify('Please login. ', {status: 'danger'});
//                return false;
//        }else{
            var data = {
                action: jQuery(this).form('get field', 'action').val(),
                type: type,
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
                sucess_notice:jQuery(this).form('get field', 'sucess_notice').val(),
            };
            jQuery.post(ajax_object.ajaxurl, data, function(response) {
                jQuery('form').removeClass('loading');
                jQuery('.uk-notify').find('.uk-notify-message').first().remove();
                if (response.success == true) {
//                    SentSuccessNotify();
                    var window_height=$(window).height();
                    $("#contact_float_block").css("top",window_height/2+"px");
                    $("#contact_form_comm").css("display","block");
                    $("#contact_ctn").html(data.sucess_notice);
                }
                return response.success;
            });
 //       }
    }

    function usernamesubmitForm(){

        var data = {
                action: jQuery(this).form('get field', 'action').val(),
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
            };

            jQuery(this).addClass('uk-hidden');
           
            jQuery('span.username').text( jQuery(this).form('get field', 'username').val() );

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                jQuery('form').removeClass('loading');
                jQuery('.uk-notify').find('.uk-notify-message').first().remove();
                if (response.success == true) {SuccessNotify();}
                return response.success;
                

            });
    }


    function registerProductSubmit(){

        var data = {
                action: jQuery(this).form('get field', 'action').val(),
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
            };

        var aon = jQuery(this).form('get field', 'aon').val();

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                jQuery('form').removeClass('loading');
                jQuery('.registerarea').removeClass('loading');
                jQuery('.registerarea p').remove();

                var html = '<div class="ui menu diso"><div class="ui fluid selection dropdown"><span class="text"><span class="number">'+response.data.pmn+'</span>'+aon+'</span><i class="dropdown icon"></i><div class="menu"><a href="'+response.data.url+'" class="item">Product Link</a></div></div></div>';
                SuccessNotify();
                if(jQuery(".diso").length>0){
                    jQuery('.diso').first().before(html);
                }else{
                    jQuery(".registerarea").html(html);
                }
                //jQuery(html).appendTo('.registerarea');
                jQuery('form').form('reset');
                jQuery('.dropdown').dropdown();
                

            });
    }


    function userinfosubmitForm(){

        var data = {
                action: jQuery(this).form('get field', 'action').val(),
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                jQuery('form').removeClass('loading');
                jQuery('.uk-notify').find('.uk-notify-message').first().remove();
                if (response.success == true) {SuccessNotify();}
                return response.success;

            });
    }

    var careermodal = UIkit.modal("#career-apply",{target:'#career-apply',center:true,bgclose:false});

    careermodal.on({

	    'show.uk.modal': function(){
	        console.log("Modal is visible.");
	    },

	    'hide.uk.modal': function(){ // Delete the uploaded files when clicking the close button
	        console.log("Element is not visible.");

	        var data = {
                action: 'deletefiles',
                security: jQuery('#careerapply-form').find('input[name="_nonce"]').val(),
                form: jQuery('#careerapply-form').serializeArray(),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

            	jQuery('#careerapply-form').form('reset');
                return response.success;

            });

	    }
	});

    function careerForm(){ 
        var data = {
                action: 'sendcareeremail',
                security: jQuery(this).form('get field', '_nonce').val(),
                form: jQuery(this).serializeArray(),
            };

            jQuery.post(ajax_object.ajaxurl, data, function(response) {

                jQuery('form').removeClass('loading');
                jQuery('.uk-notify').find('.uk-notify-message').first().remove();
                if (response.success == true) {
                	//$.UIkit.notify("<i class='uk-icon-check'></i> Thank you for your interest in AUKEY. We'll be in touch soon.", {status: 'success'});
                        careermodal.hide();
                        jQuery('#careerapply-form').form('reset');
                        var window_height=$(window).height();
                        $("#contact_float_block").css("top",window_height/2+"px");
                        $("#contact_form_comm").css("display","block");
                        $("#contact_ctn").html("Thank you for your interest in AUKEY. <br>We'll be in touch soon.");
                }
                return response.success;

            });
    }

    jQuery('.submit').on('click', function(event) {
        jQuery(this).parents('form').addClass('loading');
    });


    // stop the form from submitting normally 
    jQuery('.user-section form,.accountarea form,#career-apply form,#contact form').submit(function(e){ 
        jQuery(this).addClass('loading');
        return false;
    });

    var progressbar = jQuery("#progressbar"),
        bar         = progressbar.find('.uk-progress-bar'),
        settings    = {

            action: ajax_object.ajaxurl, // upload url

            params: {
                action: "upload",
            },

            allow : '*.(jpg|jpeg|gif|png)', // allow only images

            filelimit: 1,

            type: 'json',

            beforeAll: function (files) {
                //console.log(files);
            },

            notallowed: function (file, settings) {
                 //$.UIkit.notify('Only the following file types are allowed: '+settings.allow, {status: 'info'});
                 $.UIkit.notify('Please submit your resume and cover letter in doc, docx, or preferably PDF format', {status: 'info'});
                // console.log(jQuery(this));
            },

            loadstart: function(event) {
                //console.log(event)
                bar.css("width", "0%").text("0%");
                progressbar.removeClass("uk-hidden");
            },

            progress: function(percent) {
                percent = Math.ceil(percent);
                bar.css("width", percent+"%").text(percent+"%");
            },

            error: function (event) {

            },
            abort: function (event) {

            },

            allcomplete: function(response) {

                bar.css("width", "100%").text("100%");

                setTimeout(function(){
                    progressbar.addClass("uk-hidden");
                }, 250);


                if (response.success == false) {
                    $.UIkit.notify(response.data, {status: 'danger'});
                    return false;
                }else{
                    UploadSuccessNotify();
                }

                jQuery('#upload-drop').find('img').attr('src', response.data.url);
          
            }
        };

        var select = UIkit.uploadSelect(jQuery("#upload-select"), settings),
            drop   = UIkit.uploadDrop(jQuery("#upload-drop"), settings);


    var careerprogressbar = jQuery("#careerprogressbar"),
        careerbar         = careerprogressbar.find('.uk-progress-bar'),
        careersettings    = {

            action: ajax_object.ajaxurl, // upload url

            params: {
                action: jQuery('#careerapply-form').find('input[name="action"]').val(),
            },

            allow : '*.(doc|docx|pdf)',

            filelimit: 1,

            type: 'json',

            before: function (settings, files) {
               
            },

            notallowed: function (file, settings) {
                 $.UIkit.notify('Please submit your resume and cover letter in doc, docx, or preferably PDF format', {status: 'danger'});
                 //$.UIkit.notify('Only the following file types are allowed: '+careersettings.allow, {status: 'danger'});
                // console.log(jQuery(this));
                jQuery('#careerapply-form').form('reset');
            },

            beforeAll: function (files) {
                // console.log(files);
                // console.log(jQuery(this));
            },

            loadstart: function(event) {

                // careerbar.css("width", "0%").text("0%");
                // careerprogressbar.removeClass("uk-hidden");

            },

            progress: function(percent) {
                percent = Math.ceil(percent);
                careerbar.css("width", percent+"%").text(percent+"%");
            },

            error: function (event) {

            },

            abort: function (event) {

            },

            allcomplete: function(response,xhr) {

                // careerbar.css("width", "100%").text("100%");

                // setTimeout(function(){
                //     careerprogressbar.addClass("uk-hidden");
                // }, 250);


                if (response.success == false) {
                    $.UIkit.notify(response.data, {status: 'danger'});
                    return false;
                }else{
                	//jQuery('input[name="resumename"]').val('text');
                    //UploadSuccessNotify();
                }

          
            },
            readystatechange: function (event) {
            	//console.log(event);
            },
        };

        var resumeselect = UIkit.uploadSelect(jQuery(".resume-upload-select"), careersettings),
            resumedrop   = UIkit.uploadDrop(jQuery("#resume-upload-drop"), careersettings);
            coverselect = UIkit.uploadSelect(jQuery(".cover-upload-select"), careersettings);
            coverdrop   = UIkit.uploadDrop(jQuery("#cover-upload-drop"), careersettings);

        jQuery('.resume-upload-select').on('change',function(event) {

        	jQuery('input[name="resumename"]').attr('value', event.currentTarget.value);

        });

        jQuery('#resume-upload-drop').on('drop',function(event) {

        	jQuery(this).find('input[name="resumename"]').attr('value', event.originalEvent.dataTransfer.files[0].name);

        });

        jQuery('.cover-upload-select').on('change',function(event) {
        	
        	jQuery('input[name="covername"]').attr('value', event.currentTarget.value);

        });

        jQuery('#cover-upload-drop').on('drop',function(event) {
        	
        	jQuery(this).find('input[name="covername"]').attr('value', event.originalEvent.dataTransfer.files[0].name);

        });


	    jQuery(window).load(function () {

			var d = getQueryString('tax');

			if (jQuery('body').has('tax-productcate') && d != null ) {
                                if(jQuery("#defaultspy").length > 0){
                                    jQuery("html,body").animate({scrollTop:jQuery("#defaultspy").offset().top},300, function() {
                                    jQuery("a[href='#"+d+"']").trigger('click');
                                    });
                                }
			}
		  
		});


        function SuccessNotify(){
            $.UIkit.notify("<i class='uk-icon-check'></i> Update Completed", {status: 'success'});
        }

        function SentSuccessNotify(){
            $.UIkit.notify("<i class='uk-icon-check'></i> Sent successfully", {status: 'success'});
        }

        function UploadSuccessNotify(){
            $.UIkit.notify("<i class='uk-icon-check'></i> Upload Completed", {status: 'success'});
        }

        function getQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg);
		    if (r != null) return unescape(r[2]); return null;
		}

});
jQuery(function($){
    $("#head_comm_login .uk-width-1-1").each(function(){
        if($(this).find("a").attr("data-provider")=="Facebook"){
            $(this).find("a").addClass("facebook_link");
        }
        if($(this).find("a").attr("data-provider")=="Google"){
             $(this).find("a").addClass("google_link");
        }
    })
    $("#contact_btn_close,#contact_close_btn").click(function(){
        $("#contact_ctn").html('');
        $("#contact_form_comm").css("display","none");
    })
    $(document).on("click", "#mobil_search_btn", function(e){ 
        $(this).closest("#searchform").submit();
      }) 
    
//    $("#mobil_search_btn").click(function(){
//        $(this).closest("#searchform").submit();
//    })
});

jQuery(function($){
//    $(".product-video").mouseenter(function(){
//        $(this).find(".mask-1.mask").css('opacity', 0);
//        $(this).find(".wp-video-shortcode").trigger('play');
//    });
//    $(".product-video").mouseleave(function(){
//        $(this).find(".mask-1.mask").css('opacity', 1);
//        $(this).find(".wp-video-shortcode").trigger('pause');
//    });
    
    $(".product-video").hover(function(){
        $(this).find(".mask-1.mask").css('opacity', 0);
        //$(this).find(".wp-video-shortcode").trigger('play');
    },function(){
        $(this).find(".mask-1.mask").css('opacity', 1);
        //$(this).find(".wp-video-shortcode").trigger('pause');
    });
});