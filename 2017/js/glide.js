/*
 * Glide.js
 * Version: 2.0.4
 * Site: http://http://glide.jedrzejchalubek.com/
 */

!function(a,b,c,d){var e=function(a,b){function c(){}var d;return c.prototype.make=function(b){return d="undefined"!=typeof b?parseInt(b):0,this[a.options.type](),this},c.prototype.after=function(b){return setTimeout(function(){b()},a.options.animationDuration+20)},c.prototype.slider=function(){var c=a[a.size]*(a.current-1),e=b.Clones.shift-a.paddings;b.Run.isStart()?(e=a.options.centered?Math.abs(e):0,b.Arrows.disable("prev")):b.Run.isEnd()?(e=Math.abs(a.options.centered?e:2*e),b.Arrows.disable("next")):(e=Math.abs(e),b.Arrows.enable()),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,c-e-d)})},c.prototype.carousel=function(){var c,e=a[a.size]*a.current;c=a.options.centered?b.Clones.shift-a.paddings:b.Clones.shift,b.Run.isOffset("<")&&(e=0,b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]*a.length+c)})})),b.Run.isOffset(">")&&(e=a[a.size]*a.length+a[a.size],b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]+c)})})),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,e+c-d)})},c.prototype.slideshow=function(){a.slides.css("transition",b.Transition.get("opacity")).eq(a.current-1).css("opacity",1).siblings().css("opacity",0)},new c},f=function(a,b){function c(){}return c.prototype.instance=function(){return{current:function(){return a.current},go:function(a,c){return b.Run.make(a,c)},jump:function(a,c){return b.Transition.jumping=!0,b.Animation.after(function(){b.Transition.jumping=!1}),b.Run.make(a,c)},start:function(c){return b.Run.running=!0,a.options.autoplay=parseInt(c),b.Run.play()},play:function(){return b.Run.play()},pause:function(){return b.Run.pause()},destroy:function(){b.Run.pause(),b.Clones.remove(),b.Helper.removeStyles([a.track,a.slides]),b.Bullets.remove(),a.slider.removeData("glide_api"),b.Events.unbind(),b.Touch.unbind(),b.Arrows.unbind(),b.Bullets.unbind(),delete a.slider,delete a.track,delete a.slides,delete a.width,delete a.length},refresh:function(){b.Run.pause(),a.collect(),a.setup(),b.Clones.remove().init(),b.Bullets.remove().init(),b.Build.init(),b.Run.make("="+parseInt(a.options.startAt),b.Run.play())}}},new c},g=function(b,c){function d(){this.build(),this.bind()}return d.prototype.build=function(){this.wrapper=b.slider.find("."+b.options.classes.arrows),this.items=this.wrapper.children()},d.prototype.disable=function(a){var d=b.options.classes;return this.items.filter("."+d["arrow"+c.Helper.capitalise(a)]).unbind("click.glide touchstart.glide").addClass(d.disabled).siblings().bind("click.glide touchstart.glide",this.click).removeClass(d.disabled)},d.prototype.enable=function(){return this.bind(),this.items.removeClass(b.options.classes.disabled)},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.bind=function(){return this.items.on("click.glide touchstart.glide",this.click)},d.prototype.unbind=function(){return this.items.off("click.glide touchstart.glide")},new d},h=function(a,b){function c(){this.init()}return c.prototype.init=function(){this[a.options.type](),this.active(),b.Height.set()},c.prototype.isType=function(b){return a.options.type===b},c.prototype.isMode=function(b){return a.options.mode===b},c.prototype.slider=function(){b.Transition.jumping=!0,a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Transition.jumping=!1},c.prototype.carousel=function(){b.Transition.jumping=!0,b.Clones.shift=a[a.size]*b.Clones.items.length/2-a[a.size],a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length+b.Clones.getGrowth()),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Clones.append(),b.Transition.jumping=!1},c.prototype.slideshow=function(){b.Transition.jumping=!0,b.Animation.make(),b.Transition.jumping=!1},c.prototype.active=function(){a.slides.eq(a.current-1).addClass(a.options.classes.active).siblings().removeClass(a.options.classes.active)},new c},i=function(b,c){function d(){this.init(),this.bind()}return d.prototype.init=function(){return this.build(),this.active(),this},d.prototype.build=function(){this.wrapper=b.slider.children("."+b.options.classes.bullets);for(var c=1;c<=b.length;c++)a("<button>",{"class":b.options.classes.bullet,"data-glide-dir":"="+c}).appendTo(this.wrapper);this.items=this.wrapper.children()},d.prototype.active=function(){return this.items.eq(b.current-1).addClass("active").siblings().removeClass("active")},d.prototype.remove=function(){return this.items.remove(),this},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.bind=function(){return this.wrapper.on("click.glide touchstart.glide","button",this.click)},d.prototype.unbind=function(){return this.wrapper.on("click.glide touchstart.glide","button")},new d},j=function(a,b){function c(){this.init()}var d,e=[0,1];return c.prototype.init=function(){return this.items=[],this.map(),this.collect(),this.shift=0,this},c.prototype.map=function(){d=[];for(var a in e)d.push(-1-a,a)},c.prototype.collect=function(){var b;for(var c in d)b=a.slides.eq(d[c]).clone().addClass(a.options.classes.clone),this.items.push(b)},c.prototype.append=function(){var b;for(var c in this.items)b=this.items[c][a.size](a[a.size]),d[c]>=0?b.appendTo(a.track):b.prependTo(a.track)},c.prototype.remove=function(){for(var a in this.items)this.items[a].remove();return this},c.prototype.getGrowth=function(){return a.width*this.items.length},new c},k=function(a,b){function c(){for(var c in b)this[c]=new b[c](a,this)}return new c},l=function(c,d){function e(){this.disabled=!1,this.keyboard(),this.hoverpause(),this.resize(),this.triggers()}var f=a("[data-glide-trigger]");return e.prototype.keyboard=function(){c.options.keyboard&&a(b).on("keyup.glide",function(a){39===a.keyCode&&d.Run.make(">"),37===a.keyCode&&d.Run.make("<")})},e.prototype.hoverpause=function(){c.options.hoverpause&&c.track.on("mouseover.glide",function(){d.Run.pause()}).on("mouseout.glide",function(){d.Run.play()})},e.prototype.resize=function(){a(b).on("resize.glide",this.throttle(function(){d.Transition.jumping=!0,d.Run.pause(),c.setup(),d.Build.init(),d.Run.make("="+c.current,!1),d.Run.play(),d.Transition.jumping=!1},c.options.throttle))},e.prototype.triggers=function(){f.length&&f.off("click.glide touchstart.glide").on("click.glide touchstart.glide",function(b){b.preventDefault();var c=a(this).data("glide-trigger").split(" ");if(!d.Events.disabled)for(var e in c){var f=a(c[e]).data("glide_api");f.pause(),f.go(a(this).data("glide-dir")),f.play()}})},e.prototype.disable=function(){return this.disabled=!0,this},e.prototype.enable=function(){return this.disabled=!1,this},e.prototype.detachClicks=function(){return c.track.off("click","a"),this},e.prototype.preventClicks=function(a){return c.track.one("click","a",function(a){a.preventDefault()}),this},e.prototype.call=function(a){return"undefined"!==a&&"function"==typeof a&&a(c.current,c.slides.eq(c.current-1)),this},e.prototype.unbind=function(){c.track.off("keyup.glide").off("mouseover.glide").off("mouseout.glide"),f.off("click.glide touchstart.glide"),a(b).off("keyup.glide").off("resize.glide")},e.prototype.throttle=function(a,b,c){var e,f,g,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:d.Helper.now(),h=null,g=a.apply(e,f),h||(e=f=null)};return function(){var k=d.Helper.now();i||c.leading!==!1||(i=k);var l=b-(k-i);return e=this,f=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,g=a.apply(e,f),h||(e=f=null)):h||c.trailing===!1||(h=setTimeout(j,l)),g}},new e},m=function(a,b){function c(){a.options.autoheight&&a.wrapper.css({transition:b.Transition.get("height")})}return c.prototype.get=function(){var b="y"===a.axis?2*a.paddings:0;return a.slides.eq(a.current-1).height()+b},c.prototype.set=function(b){return a.options.autoheight||b?a.wrapper.height(this.get()):!1},new c},n=function(a,b){function c(){}return c.prototype.capitalise=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},c.prototype.now=Date.now||function(){return(new Date).getTime()},c.prototype.removeStyles=function(a){for(var b in a)a[b].removeAttr("style")},new c},o=function(a,b){function c(){this.running=!1,this.flag=!1,this.play()}return c.prototype.play=function(){var b=this;return(a.options.autoplay||this.running)&&"undefined"==typeof this.interval&&(this.interval=setInterval(function(){b.make(">")},a.options.autoplay)),this.interval},c.prototype.pause=function(){return(a.options.autoplay||this.running)&&this.interval>=0&&(this.interval=clearInterval(this.interval)),this.interval},c.prototype.isStart=function(){return 1===a.current},c.prototype.isEnd=function(){return a.current===a.length},c.prototype.isOffset=function(a){return this.flag&&this.direction===a},c.prototype.make=function(c,d){var e=this;switch(this.direction=c.substr(0,1),this.steps=c.substr(1)?c.substr(1):0,a.options.hoverpause||this.pause(),d!==!1&&b.Events.disable().call(a.options.beforeTransition),this.direction){case">":this.isEnd()?(a.current=1,this.flag=!0):">"===this.steps?a.current=a.length:a.current=a.current+1;break;case"<":this.isStart()?(a.current=a.length,this.flag=!0):"<"===this.steps?a.current=1:a.current=a.current-1;break;case"=":a.current=parseInt(this.steps)}b.Height.set(),b.Bullets.active(),b.Animation.make().after(function(){b.Build.active(),d!==!1&&b.Events.enable().call(d).call(a.options.afterTransition),a.options.hoverpause||e.play()})},new c},p=function(b,c){function d(){this.dragging=!1,b.options.touchDistance&&b.track.on({"touchstart.glide":a.proxy(this.start,this)}),b.options.dragDistance&&b.track.on({"mousedown.glide":a.proxy(this.start,this)})}var e;return d.prototype.unbind=function(){b.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")},d.prototype.start=function(d){c.Events.disabled||this.dragging||(e="mousedown"===d.type?d.originalEvent:d.originalEvent.touches[0]||d.originalEvent.changedTouches[0],c.Transition.jumping=!0,this.touchStartX=parseInt(e.pageX),this.touchStartY=parseInt(e.pageY),this.touchSin=null,this.dragging=!0,b.track.on({"touchmove.glide mousemove.glide":c.Events.throttle(a.proxy(this.move,this),b.options.throttle),"touchend.glide touchcancel.glide mouseup.glide mouseleave.glide":a.proxy(this.end,this)}),c.Events.detachClicks().call(b.options.swipeStart),c.Run.pause())},d.prototype.move=function(a){if(!c.Events.disabled&&this.dragging){e="mousemove"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var d=parseInt(e.pageX)-this.touchStartX,f=parseInt(e.pageY)-this.touchStartY,g=Math.abs(d<<2),h=Math.abs(f<<2),i=Math.sqrt(g+h),j=Math.sqrt(this.byAxis(h,g));if(this.touchSin=Math.asin(j/i),c.Animation.make(this.byAxis(d,f)),c.Build.isMode("vertical")){if(c.Run.isStart()&&f>0)return;if(c.Run.isEnd()&&0>f)return}if(!(180*this.touchSin/Math.PI<45))return;a.stopPropagation(),a.preventDefault(),b.track.addClass(b.options.classes.dragging),c.Events.preventClicks()}},d.prototype.end=function(a){if(!c.Events.disabled&&this.dragging){e="mouseup"===a.type||"mouseleave"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var d=this.byAxis(e.pageX-this.touchStartX,e.pageY-this.touchStartY),f=180*this.touchSin/Math.PI;c.Transition.jumping=!1,c.Build.isType("slider")&&(c.Run.isStart()&&d>0&&(d=0),c.Run.isEnd()&&0>d&&(d=0)),d>b.options.touchDistance&&45>f?c.Run.make("<"):d<-b.options.touchDistance&&45>f?c.Run.make(">"):c.Animation.make(),c.Animation.after(function(){c.Events.enable(),c.Run.play()}),this.dragging=!1,c.Events.disable().call(b.options.swipeEnd),b.track.removeClass(b.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")}},d.prototype.byAxis=function(a,c){return"y"===b.axis?c:a},new d},q=function(a,b){function c(){this.jumping=!1}return c.prototype.get=function(b){return this.jumping?this.clear("all"):b+" "+a.options.animationDuration+"ms "+a.options.animationTimingFunc},c.prototype.clear=function(b){return b+" 0ms "+a.options.animationTimingFunc},new c},r=function(a,b){function c(){}var d={x:0,y:0,z:0};return c.prototype.set=function(a,b){return d[a]=parseInt(b),"translate3d("+-1*d.x+"px, "+-1*d.y+"px, "+-1*d.z+"px)"},new c},s=function(b,c){var d={autoplay:4e3,type:"carousel",mode:"horizontal",startAt:1,hoverpause:!0,keyboard:!0,touchDistance:80,dragDistance:120,animationDuration:400,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:16,autoheight:!1,paddings:0,centered:!0,classes:{base:"glide",wrapper:"glide__wrapper",track:"glide__track",slide:"glide__slide",arrows:"glide__arrows",arrow:"glide__arrow",arrowNext:"next",arrowPrev:"prev",bullets:"glide__bullets",bullet:"glide__bullet",clone:"clone",active:"active",dragging:"dragging",disabled:"disabled"},beforeInit:function(a){},afterInit:function(a,b){},beforeTransition:function(a,b){},afterTransition:function(a,b){},swipeStart:function(a,b){},swipeEnd:function(a,b){}};this.options=a.extend({},d,c),this.current=parseInt(this.options.startAt),this.element=b,this.collect(),this.setup(),this.options.beforeInit(this.slider);var s=new k(this,{Helper:n,Translate:r,Transition:q,Run:o,Animation:e,Clones:j,Arrows:g,Bullets:i,Height:m,Build:h,Events:l,Touch:p,Api:f});return this.options.afterInit(this.current,this.slides.eq(this.current-1)),s.Api.instance()};s.prototype.collect=function(){var a=this.options,b=a.classes;this.slider=this.element.addClass(b.base+"--"+a.type).addClass(b.base+"--"+a.mode),this.track=this.slider.find("."+b.track),this.wrapper=this.slider.find("."+b.wrapper),this.slides=this.track.find("."+b.slide).not("."+b.clone)},s.prototype.setup=function(){var a={horizontal:["width","x"],vertical:["height","y"]};this.size=a[this.options.mode][0],this.axis=a[this.options.mode][1],this.length=this.slides.length,this.paddings=this.getPaddings(),this[this.size]=this.getSize()},s.prototype.getPaddings=function(){var a=this.options.paddings;if("string"==typeof a){var b=parseInt(a,10),c=a.indexOf("%")>=0;return c?parseInt(this.slider[this.size]()*(b/100)):b}return a},s.prototype.getSize=function(){return this.slider[this.size]()-2*this.paddings},a.fn.glide=function(b){return this.each(function(){a.data(this,"glide_api")||a.data(this,"glide_api",new s(a(this),b))})}}(jQuery,window,document);