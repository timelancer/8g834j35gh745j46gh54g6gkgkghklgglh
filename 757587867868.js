!function(s){s.fn.extend({smoothSlides:function(t){function n(){document.all&&!window.atob?(s("#"+f).find(".ss-slide:last").animate({opacity:"0"}),console.log("1")):(console.log("2"),s("#"+f).find(".ss-slide:last").css({transition:"all "+t.transitionDuration+"ms",opacity:"0"}))}function a(){var t=s("#"+f).find(".ss-slide:eq(-2) img").prop("alt");t?s("#"+f).find(".ss-caption").css("opacity","1").html(t):s("#"+f).find(".ss-caption").css("opacity","0")}function i(){var t=s("#"+f).find(".ss-slide:eq(-1) img").prop("alt");t?s("#"+f).find(".ss-caption").css("opacity","1").html(t):s("#"+f).find(".ss-caption").css("opacity","0")}function e(){var t=s(l).find(".ss-paginate a").length,n=s(l).find("a.ss-paginate-current").index(),a=n+1;a>=t?(s(l).find("a.ss-paginate-current").removeClass(),s(l).find(".ss-paginate a:eq(0)").addClass("ss-paginate-current")):(s(l).find("a.ss-paginate-current").removeClass(),s(l).find(".ss-paginate a:eq("+a+")").addClass("ss-paginate-current"))}function o(){var t=s(l).find(".ss-paginate a").length,n=s(l).find("a.ss-paginate-current").index(),a=n-1;-2>=a?(s(l).find("a.ss-paginate-current").removeClass(),s(l).find(".ss-paginate a:eq("+t+")").addClass("ss-paginate-current")):(s(l).find("a.ss-paginate-current").removeClass(),s(l).find(".ss-paginate a:eq("+a+")").addClass("ss-paginate-current"))}var r={effectDuration:5e3,transitionDuration:500,autoPlay:"true",effect:"zoomOut,zoomIn,panUp,panDown,panLeft,panRight,diagTopLeftToBottomRight,diagTopRightToBottomLeft,diagBottomRightToTopLeft,diagBottomLeftToTopRight",effectEasing:"ease-in-out",nextText:" ►",prevText:"◄ ",captions:"true",navigation:"true",pagination:"true",matchImageSize:"true"},t=s.extend(r,t),l=this,f=s(this).attr("id"),c=t.effectDuration+t.transitionDuration,d=s(this).find("img").width();if(t.transitionDuration>=t.effectDuration&&console.log("Make sure effectDuration is greater than transitionDuration"),s("#"+f).removeClass("smoothslides").addClass("smoothslides-on"),l.crossFade=function(){n(),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1)  rotate(0deg)"})},t.transitionDuration)},l.zoomOut=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.2) rotate(1.5deg)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1)  rotate(0deg)"})},t.transitionDuration)},l.zoomIn=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.1) rotate(-1.5deg)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) rotate(0deg)"})},t.transitionDuration)},l.panLeft=function(){s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateX(10%)"}),n(),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateX(0%)"})},t.transitionDuration)},l.panRight=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateX(-10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateX(0%)"})},t.transitionDuration)},l.panUp=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%)"})},t.transitionDuration)},l.panDown=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(-10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%)"})},t.transitionDuration)},l.diagTopLeftToBottomRight=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(-10%) translateX(-10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%) translateX(0%)"})},t.transitionDuration)},l.diagBottomRightToTopLeft=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(10%) translateX(10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%) translateX(0%)"})},t.transitionDuration)},l.diagTopRightToBottomLeft=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(-10%) translateX(10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%) translateX(0%)"})},t.transitionDuration)},l.diagBottomLeftToTopRight=function(){n(),s(this).find(".ss-slide:eq(-2)").css({transition:"none",transform:"scale(1.3) translateY(10%) translateX(-10%)"}),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1.3) translateY(0%) translateX(0%)"})},t.transitionDuration)},"true"==t.matchImageSize?(s("#"+f).css("maxWidth",d),s("#"+f+" img").css("maxWidth","100%")):s("#"+f+" img").css("width","100%"),s(this).children().each(function(){s(this).wrap('<div class="ss-slide"></div>')}),s("#"+f+" .ss-slide").each(function(){s(this).prependTo("#"+f)}),s("#"+f+" .ss-slide:first").css("position","relative"),"true"==t.autoPlay&&s(".ss-slide:first",this).appendTo(this),s(this).wrapInner("<div class='ss-slide-stage'></div>"),s(".ss-slide",this).each(function(){s(this).css({transition:"all "+t.effectDuration+"ms "+t.effectEasing})}),"true"==t.captions)if(s(l).append("<div class='ss-caption-wrap'><div class='ss-caption'></div></div>"),"true"==t.autoPlay)a();else{var p=s("#"+f).find(".ss-slide:last img").prop("alt");p?s("#"+f).find(".ss-caption").css("opacity","1").html(p):s("#"+f).find(".ss-caption").css("opacity","0")}"true"==t.navigation&&s(l).append('<a href="#" class="ss-prev ss-prev-on">'+t.prevText+'</a><a href="#" class="ss-next ss-next-on">'+t.nextText+"</a>"),"true"==t.pagination&&(s(l).append('<div class="ss-paginate-wrap"><div class="ss-paginate"></div></div>'),s(".ss-slide",l).each(function(){s(".ss-paginate",l).append('<a href="#"></a>')}),"true"==t.autoPlay?s(".ss-paginate a:last",l).addClass("ss-paginate-current"):s(".ss-paginate a:first",l).addClass("ss-paginate-current"));var u=function(){if(document.all&&!window.atob)l.crossFade();else{effectArray=t.effect.split(",");var s=effectArray[Math.floor(Math.random()*effectArray.length)];l[s]()}a(),e()};if("true"==t.autoPlay){u();var m=setInterval(u,c)}s(".ss-prev, .ss-next, .ss-paginate",l).mouseover(function(){clearInterval(m)}).mouseout(function(){m=setInterval(u,c)}),s("#"+f).on("click",".ss-next-on",function(n){s(".ss-next-on",l).removeClass("ss-next-on"),s(l).find(".ss-slide:last").css({transition:"all "+t.transitionDuration+"ms",opacity:"0"}),a(),e(),setTimeout(function(){s(l).find(".ss-slide:last").prependTo(s(".ss-slide-stage",l)).css({opacity:"1",transform:"none"}),s(l).find(".ss-slide:last").css({transition:"all "+t.effectDuration+"ms "+t.effectEasing,transform:"scale(1)  rotate(0deg)"}),s(".ss-next",l).addClass("ss-next-on")},t.transitionDuration),n.preventDefault()}),s("#"+f).on("click",".ss-prev-on",function(n){s(".ss-prev-on",l).removeClass("ss-prev-on"),s("#"+f).find(".ss-slide:first").css({transition:"none",opacity:"0"}).appendTo("#"+f+" .ss-slide-stage"),s("#"+f).find(".ss-slide:last").css("opacity"),s("#"+f).find(".ss-slide:last").css({transition:"all "+t.transitionDuration+"ms",opacity:"1"}),i(),o(),setTimeout(function(){s(".ss-prev").addClass("ss-prev-on")},t.transitionDuration),n.preventDefault()}),s("#"+f).on("click",".ss-prev, .ss-next",function(s){s.preventDefault()}),s("#"+f).on("click",".ss-paginate a",function(t){var n=s(this).index(),a=s("#"+f+" .ss-paginate-current").index();if(a>n)for(var i=a-n,e=0;i>e;e++)s("#"+f).find(".ss-slide:first").appendTo("#"+f+" .ss-slide-stage");else if(n>a)for(var i=n-a,e=0;i>e;e++)s("#"+f).find(".ss-slide:last").prependTo("#"+f+" .ss-slide-stage");s("#"+f).find(".ss-paginate-current").removeClass(),s("#"+f).find(".ss-paginate a:eq("+n+")").addClass("ss-paginate-current");var o=s("#"+f).find(".ss-slide:eq(-1) img").prop("alt");o?s("#"+f).find(".ss-caption").css("opacity","1").html(o):s("#"+f).find(".ss-caption").css("opacity","0"),t.preventDefault()})}})}(jQuery);
