function contact_form_submit(a,b){$response=jQuery(a).find(jQuery(".contact_form_responce")),$response.find("ul").html(""),$response.find("ul").removeClass();var c=a,d={action:"contact_form_request",attachments:b,values:jQuery(a).serialize()};jQuery.post(ajaxurl,d,function(a){a=jQuery.parseJSON(a),a.is_errors?(jQuery(c).find(".contact_form_responce ul").addClass("error type-2"),jQuery.each(a.info,function(a,b){jQuery(c).find("[name="+a+"]").addClass("wrong-data"),jQuery(c).find(".contact_form_responce ul").append("<li>"+lang_enter_correctly+' "'+b+'"!</li>')}),$response.show(450)):(jQuery(c).find(".contact_form_responce ul").addClass("success type-2"),"succsess"==a.info&&(jQuery(c).find(".contact_form_responce ul").append("<li>"+lang_sended_succsessfully+"!</li>"),$response.show(450).delay(1800).hide(400)),"server_fail"==a.info&&jQuery(c).find(".contact_form_responce ul").append("<li>"+lang_server_failed+"!</li>"),jQuery(c).find("[type=text],[type=email],[type=url],textarea").val(""),jQuery(c).find("[type=checkbox],[type=radio]").prop("checked",!1),jQuery(c).find("select").not(".tmm-state-select, .tmm-country-select").val("").find("option").first().prop("selected",!0),jQuery(c).find(".contact_form_attach_list").html("")),jQuery(c).find(".contact_form_responce").show();var b=jQuery(c).offset().top+jQuery(c).outerHeight()-jQuery(window).height();jQuery(document).scrollTop()<b&&jQuery("html, body").animate({scrollTop:b}),update_capcha(c,a.hash)})}function update_capcha(a,b){jQuery(a).find("[name=verify]").val(""),jQuery(a).find("[name=verify_code]").val(b),jQuery(a).find(".contact_form_capcha").attr("src",capcha_image_url+"?hash="+b)}function gmt_init_map(a,b,c,d,e,f,g,h,i,j,k){var l=new google.maps.LatLng(a,b),m=new google.maps.LatLng(a,b);switch(e){case"SATELLITE":e=google.maps.MapTypeId.SATELLITE;break;case"HYBRID":e=google.maps.MapTypeId.HYBRID;break;case"TERRAIN":e=google.maps.MapTypeId.TERRAIN;break;default:e=google.maps.MapTypeId.ROADMAP}i=parseInt(i,10);var n;if(j.length>0){var o=merge_objects_options({zoom:d,center:l,mapTypeId:e,scrollwheel:i,disableDefaultUI:!0},j);n=new google.maps.Map(document.getElementById(c),o)}else n=new google.maps.Map(document.getElementById(c),{zoom:d,center:l,mapTypeId:e,scrollwheel:i});if(g=parseInt(g,10)){var p=new google.maps.Marker({position:m,draggable:1==parseInt(k),map:n});if(h&&""!=f){google.maps.event.addListener(p,"click",function(a){q.open(n,p)});var q=new google.maps.InfoWindow({content:f})}}}function merge_objects_options(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}!function(a){a.fn.life=function(b,c,d){"use strict";return a(this.context).on(b,this.selector,c,d),this},a.fn.effect=function(b){var c={effect:"scaleEffect",speed:350,getData:!0,delay:0,beforeCall:function(){}},d=a.extend({},c,b);return this.each(function(){var b,c=a(this);d.beforeCall(c),b=d.getData?c.find("."+d.effect):c.find("[data-effect]"),b.each(function(b){var c=a(this);setTimeout(function(){d.getData?c.addClass(d.effect+"Run"):c.addClass(c.data("effect")+"Run"),setTimeout(function(){c.removeClass(d.effect)},b*d.speed)},b*d.speed)})})},a(function(){Modernizr.touch||(a(".section-full-width, .post-list, .projects, .clients-items, .progress-bar, .team-member.type-1").waypoints({offset:"74%"}),a(".opacityEffect").length&&a(".section-full-width").effect({effect:"opacityEffect"}),a(".scaleEffect").length&&a(".section-full-width").effect({effect:"scaleEffect"}),a(".rotateEffect").length&&a(".section-full-width").effect({effect:"rotateEffect"}),a(".slideRightEffect").length&&a(".section-full-width").effect({effect:"slideRightEffect"}),a(".slideLeftEffect").length&&a(".section-full-width").effect({effect:"slideLeftEffect"}),a(".slideDownEffect").length&&a(".section-full-width").effect({effect:"slideDownEffect"}),a(".slideUpEffect").length&&a(".section-full-width").effect({effect:"slideUpEffect"}),a(".projects").length&&a(".projects").effect({effect:"translateEffect",speed:200,beforeCall:function(b){a(b).find("article").addClass(this.effect)}}),a(".masonry").length&&a(".masonry").effect({effect:"translateEffect",speed:400}),a(".clients-items").length&&a(".clients-items").effect({effect:"translateEffect",speed:200,beforeCall:function(b){a(b).find("li").addClass(this.effect)}}),a(".team-member.type-1").length&&a(".team-member.type-1").effect({effect:"scaleEffect",speed:200,beforeCall:function(b){a(b).find("article").addClass(this.effect)}}),a(".ca-shortcode").length&&a(".section-full-width").effect({effect:"scaleEffect",speed:200,beforeCall:function(b){a(b).find(".ca-icon").addClass(this.effect)}}),a(".animate-image").length&&a(".container, .section-full-width").effect({getData:!1}))}),a.fn.waypoints=function(b){var c={offset:"viewportHeight",triggerOnce:!0},d=a.extend({},c,b);return this.each(function(){var b=a(this);setTimeout(function(){b.waypoint(function(b){a(this).trigger("start")},d)},100)})}}(jQuery),function(a){function b(){a("div#masonryjaxloader").show();var b=0,c=a("#masonryjaxloader"),d=c.data("posts"),e=c.data("posts-per-load"),f=c.data("page-load"),g=c.data("category"),h=c.data("buttons");if(d){d=d.split(",");for(var i=0;i<d.length;i++){var j=d[i];if(j&&b!=j){a("#infscr-loading").animate({opacity:"show"},300);var k={action:"folio_get_masonry_piece",post_key:j,category:g,buttons:h,posts_per_load:e,page_load:f};a.post(ajaxurl,k,function(c){c=a.parseJSON(c);var d=c.key;c=c.article,b=d,a("#masonryjaxloader").replaceWith(c),""==a("#masonryjaxloader").data("posts")&&a(".masonry_view_more_button").remove(),a("#post-area").imagesLoaded(function(){var b=a(".masonry_piece_"+d);a("#post-area").append(b).masonry("appended",b,!0),a("#post-area").masonry("reload"),a("#post-area .masonry_piece_"+d).css({opacity:0}),setTimeout(function(){a("#post-area").masonry("reload"),a(".masonry_piece_"+d).animate({opacity:1},777),a("#infscr-loading").animate({opacity:"hide"},800),a("#content").fitVids()},200),a(".slide-image").length&&a(".slide-image").each(function(){var b=a(this).find(".curtain");b.length<1&&a(this).append('                                            <div class="curtain">\n                                                    <div class="ch-curtain">\n                                                            <div class="ch-front"></div>\n                                                            <div class="ch-back"></div>\n                                                    </div>\n                                            </div>')}),a(".image-slider").length&&a(".image-slider").owlCarousel(CONFIG.objImageSlider),a("audio").length&&a("audio").mediaelementplayer({audioWidth:"100%",audioHeight:45}),a("video").length&&a("video").mediaelementplayer({videoWidth:"",videoHeight:""}),a("a.social-like").click(function(){var b=a(this),c=b.data("post_id");return a.ajax({type:"post",url:ajaxurl,data:"action=post-like&nonce="+ajax_nonce+"&post_like=&post_id="+c,success:function(a){"already"!=a&&(b.addClass("voted"),b.find(".count").text(a))}}),!1})})})}}}}if(a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%; position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com'].fitwidth","iframe[src*='youtube.com'].fitwidth","iframe[src*='youtube-nocookie.com'].fitwidth","iframe[src*='kickstarter.com'][src*='video.html'].fitwidth","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})},a(".masonry").length){var c,d=a(".masonry_view_more_button"),e=d.data("loadbyscroll");d.length&&(e?a(window).scroll(function(){var e=a(window).scrollTop(),f=d.offset().top;if(e>f-800){var g=a("#masonryjaxloader").data("posts");g!=c&&(b(),c=g)}}):d.on("click",function(){var d=a("#masonryjaxloader").data("posts");return d!=c&&(b(),c=d),!1}))}if(a.fn.init_masonry=function(a,b){var c=jQuery("#post-area"),d=c.width();c.masonry({itemSelector:".post-item",isAnimated:b,isAnimatedFromBottom:!0,columnWidth:d/a}),c.animate({opacity:1},777,function(){jQuery("#infscr-loading").animate({opacity:"hide"},333)})},a(".tabs-holder").length){var f=a(".tabs-holder");f.each(function(b,c){var d=a(".tabs-nav",c),e=(d.children("li"),a(".tabs-container",c),Modernizr.touch?"touchstart":"click");d.each(function(){a(this).next().children(".tab-content").first().stop(!0,!0).show(),a(this).children("li").first().addClass("active").stop(!0,!0).show()}),d.on(e,"a",function(b){var c=a(this).parent("li"),d=c.index();c.siblings().removeClass("active").end().addClass("active"),c.parent().next().children(".tab-content").stop(!0,!0).hide().eq(d).stop(!0,!0).fadeIn(250),b.preventDefault()})})}if(a(".acc-box").length){var g=a(".acc-box");g.each(function(){var b=a(".acc-trigger",a(this)),c=Modernizr.touch?"touchstart":"click";b.on(c,function(){var c=a(this);return"toggle"===c.data("mode")?c.toggleClass("active").next().stop(!0,!0).slideToggle(300):c.next().is(":hidden")?(b.removeClass("active").next().slideUp(300),c.toggleClass("active").next().slideDown(300)):c.hasClass("active")&&c.removeClass("active").next().slideUp(300),!1})})}var h=a(".error, .success, .info, .notice");if(h.length&&h.notifications({speed:300}),a(".slide-image").length&&a(".slide-image").each(function(){a(this).append('\t\t\t\t\t\t<div class="curtain">\n\t\t\t\t\t\t\t<div class="ch-curtain">\n\t\t\t\t\t\t\t\t<div class="ch-front"></div>\n\t\t\t\t\t\t\t\t<div class="ch-back"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>')}),a(".google_map_expand").length){var i=a(".google_map_toggle"),j=a(".google_map_close"),k=i.data("height");i.on("click touchstart",function(b){b.preventDefault();var c=a(this);c.hasClass("expand")||(c.addClass("expand"),j.addClass("active"),c.animate({height:k+260}))}),j.on("click touchstart",function(b){b.preventDefault(),i.hasClass("expand")&&(i.removeClass("expand"),a(this).removeClass("active"),i.animate({height:k}))})}if(a(".counter").length){var l=a(".counter");Modernizr.touch?l.countTo():l.waypoint(function(a){"down"==a&&l.countTo()},{offset:"64%"})}a(".progress-bar").length&&a(".progress-bar").progressBar(),a(".image-slider").length&&a(".image-slider").owlCarousel(CONFIG.objImageSlider),a(".slogan-group").length&&a(".slogan-group").textislide(CONFIG.objSloganGroup)}(jQuery),jQuery(document).ready(function(){jQuery(".contact-form").submit(function(){return contact_form_submit(this,[]),!1}),jQuery(".tmm-country-select").on("change",function(){var a=jQuery(this).val(),b=jQuery(this).parents(".contact-form").first().find(".tmm-state-select").parents("p").first(),c=jQuery(this).parents(".contact-form").first().find(".tmm-county-input"),d=c.parents("p").first();"US"==a?(b.show(),c.attr("type","hidden"),d.hide()):(b.hide(),c.attr("type","text"),d.show())})}),function(){"use strict";function a(d){if(!d)throw new Error("No options passed to Waypoint constructor");if(!d.element)throw new Error("No element option passed to Waypoint constructor");if(!d.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+b,this.options=a.Adapter.extend({},a.defaults,d),this.element=this.options.element,this.adapter=new a.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=a.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=a.Context.findOrCreateByElement(this.options.context),a.offsetAliases[this.options.offset]&&(this.options.offset=a.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),c[this.key]=this,b+=1}var b=0,c={};a.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)},a.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)},a.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete c[this.key]},a.prototype.disable=function(){return this.enabled=!1,this},a.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},a.prototype.next=function(){return this.group.next(this)},a.prototype.previous=function(){return this.group.previous(this)},a.invokeAll=function(a){var b=[];for(var d in c)b.push(c[d]);for(var e=0,f=b.length;e<f;e++)b[e][a]()},a.destroyAll=function(){a.invokeAll("destroy")},a.disableAll=function(){a.invokeAll("disable")},a.enableAll=function(){a.invokeAll("enable")},a.refreshAll=function(){a.Context.refreshAll()},a.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.viewportWidth=function(){return document.documentElement.clientWidth},a.adapters=[],a.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},a.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=a}(),function(){"use strict";function a(a){window.setTimeout(a,1e3/60)}function b(a){this.element=a,this.Adapter=e.Adapter,this.adapter=new this.Adapter(a),this.key="waypoint-context-"+c,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},a.waypointContextKey=this.key,d[a.waypointContextKey]=this,c+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var c=0,d={},e=window.Waypoint,f=window.onload;b.prototype.add=function(a){var b=a.options.horizontal?"horizontal":"vertical";this.waypoints[b][a.key]=a,this.refresh()},b.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical);a&&b&&(this.adapter.off(".waypoints"),delete d[this.key])},b.prototype.createThrottledResizeHandler=function(){function a(){b.handleResize(),b.didResize=!1}var b=this;this.adapter.on("resize.waypoints",function(){b.didResize||(b.didResize=!0,e.requestAnimationFrame(a))})},b.prototype.createThrottledScrollHandler=function(){function a(){b.handleScroll(),b.didScroll=!1}var b=this;this.adapter.on("scroll.waypoints",function(){b.didScroll&&!e.isTouch||(b.didScroll=!0,e.requestAnimationFrame(a))})},b.prototype.handleResize=function(){e.Context.refreshAll()},b.prototype.handleScroll=function(){var a={},b={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var c in b){var d=b[c],e=d.newScroll>d.oldScroll,f=e?d.forward:d.backward;for(var g in this.waypoints[c]){var h=this.waypoints[c][g],i=d.oldScroll<h.triggerPoint,j=d.newScroll>=h.triggerPoint,k=i&&j,l=!i&&!j;(k||l)&&(h.queueTrigger(f),a[h.group.id]=h.group)}}for(var m in a)a[m].flushTriggers();this.oldScroll={x:b.horizontal.newScroll,y:b.vertical.newScroll}},b.prototype.innerHeight=function(){return this.element==this.element.window?e.viewportHeight():this.adapter.innerHeight()},b.prototype.remove=function(a){delete this.waypoints[a.axis][a.key],this.checkEmpty()},b.prototype.innerWidth=function(){return this.element==this.element.window?e.viewportWidth():this.adapter.innerWidth()},b.prototype.destroy=function(){var a=[];for(var b in this.waypoints)for(var c in this.waypoints[b])a.push(this.waypoints[b][c]);for(var d=0,e=a.length;d<e;d++)a[d].destroy()},b.prototype.refresh=function(){var a,b=this.element==this.element.window,c=b?void 0:this.adapter.offset(),d={};this.handleScroll(),a={horizontal:{contextOffset:b?0:c.left,contextScroll:b?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:b?0:c.top,contextScroll:b?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var f in a){var g=a[f];for(var h in this.waypoints[f]){var i,j,k,l,m,n=this.waypoints[f][h],o=n.options.offset,p=n.triggerPoint,q=0,r=null==p;n.element!==n.element.window&&(q=n.adapter.offset()[g.offsetProp]),"function"==typeof o?o=o.apply(n):"string"==typeof o&&(o=parseFloat(o),n.options.offset.indexOf("%")>-1&&(o=Math.ceil(g.contextDimension*o/100))),i=g.contextScroll-g.contextOffset,n.triggerPoint=q+i-o,j=p<g.oldScroll,k=n.triggerPoint>=g.oldScroll,l=j&&k,m=!j&&!k,!r&&l?(n.queueTrigger(g.backward),d[n.group.id]=n.group):!r&&m?(n.queueTrigger(g.forward),d[n.group.id]=n.group):r&&g.oldScroll>=n.triggerPoint&&(n.queueTrigger(g.forward),d[n.group.id]=n.group)}}return e.requestAnimationFrame(function(){for(var a in d)d[a].flushTriggers()}),this},b.findOrCreateByElement=function(a){return b.findByElement(a)||new b(a)},b.refreshAll=function(){for(var a in d)d[a].refresh()},b.findByElement=function(a){return d[a.waypointContextKey]},window.onload=function(){f&&f(),b.refreshAll()},e.requestAnimationFrame=function(b){var c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||a;c.call(window,b)},e.Context=b}(),function(){"use strict";function a(a,b){return a.triggerPoint-b.triggerPoint}function b(a,b){return b.triggerPoint-a.triggerPoint}function c(a){this.name=a.name,this.axis=a.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this}var d={vertical:{},horizontal:{}},e=window.Waypoint;c.prototype.add=function(a){this.waypoints.push(a)},c.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},c.prototype.flushTriggers=function(){for(var c in this.triggerQueues){var d=this.triggerQueues[c],e="up"===c||"left"===c;d.sort(e?b:a);for(var f=0,g=d.length;f<g;f+=1){var h=d[f];(h.options.continuous||f===d.length-1)&&h.trigger([c])}}this.clearTriggerQueues()},c.prototype.next=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints),d=c===this.waypoints.length-1;return d?null:this.waypoints[c+1]},c.prototype.previous=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints);return c?this.waypoints[c-1]:null},c.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)},c.prototype.remove=function(a){var b=e.Adapter.inArray(a,this.waypoints);b>-1&&this.waypoints.splice(b,1)},c.prototype.first=function(){return this.waypoints[0]},c.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},c.findOrCreate=function(a){return d[a.axis][a.name]||new c(a)},e.Group=c}(),function(){"use strict";function a(a){this.$element=b(a)}var b=window.jQuery,c=window.Waypoint;b.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(b,c){a.prototype[c]=function(){var a=Array.prototype.slice.call(arguments);return this.$element[c].apply(this.$element,a)}}),b.each(["extend","inArray","isEmptyObject"],function(c,d){a[d]=b[d]}),c.adapters.push({name:"jquery",Adapter:a}),c.Adapter=a}(),function(){"use strict";function a(a){return function(){var c=[],d=arguments[0];return a.isFunction(arguments[0])&&(d=a.extend({},arguments[1]),d.handler=arguments[0]),this.each(function(){var e=a.extend({},d,{element:this});"string"==typeof e.context&&(e.context=a(this).closest(e.context)[0]),c.push(new b(e))}),c}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))}();