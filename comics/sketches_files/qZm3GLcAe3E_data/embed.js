(function(g){var window=this;'use strict';var KXa=function(a,b){var c=(b-a.j)/(a.u-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){f=g.xo(a,c);var l=(g.xo(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.xo(a,c);return c},s2=function(){return{F:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{F:"path",Kb:!0,L:"ytp-svg-fill",T:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
t2=function(a){g.I.call(this);
this.callback=a;this.u=new g.wo(0,0,.4,0,.2,1,1,1);this.delay=new g.Fn(this.next,window,this);this.startTime=this.duration=this.j=this.from=NaN;g.J(this,this.delay)},u2=function(a){g.W.call(this,{F:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.D=this.j=0;this.C=new g.mz(this);this.B=[];this.suggestionData=[];this.containerWidth=0;this.title=new g.W({F:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.W({F:"button",Ca:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.CG()]});this.N=new t2(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.I=!0;this.next=new g.W({F:"button",Ca:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.DG()]});g.J(this,this.C);a=a.S();this.J=a.j;g.J(this,this.title);this.title.ya(this.element);this.suggestions=new g.W({F:"div",L:"ytp-suggestions"});g.J(this,this.suggestions);this.suggestions.ya(this.element);g.J(this,this.previous);this.previous.ya(this.element);this.previous.La("click",this.zU,this);g.J(this,this.N);for(var c={qt:0};16>c.qt;c={qt:c.qt},
c.qt++){var d=new g.W({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:a.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image",R:[{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]},{F:"div",L:"ytp-suggestion-title",T:{title:"{{hover_title}}"},Z:"{{title}}"},{F:"div",L:"ytp-suggestion-author",Z:"{{views_or_author}}"}]});g.J(this,d);d.ya(this.suggestions.element);var e=d.Aa("ytp-suggestion-link");g.cl(e,"transitionDelay",c.qt/20+"s");this.C.P(e,
"click",function(f){return function(k){var l=b.suggestionData[f.qt],m=l.sessionData;g.vJ(k,b.api,b.J,m||void 0)&&b.api.yl(l.videoId,m,l.playlistId)}}(c));
this.B.push(d)}g.J(this,this.next);this.next.ya(this.element);this.next.La("click",this.yU,this);this.C.P(this.api,"videodatachange",this.onVideoDataChange);this.resize(this.api.Ya().getPlayerSize());this.onVideoDataChange();this.show()},v2=function(a){a.next.element.style.bottom=a.D+"px";
a.previous.element.style.bottom=a.D+"px";var b=a.u,c=a.containerWidth-a.suggestionData.length*(a.tileWidth+a.j);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},LXa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.shortViewCount:c.author,f=c.pm(),k=a.api.S();
if(g.$A(k)){var l={};k.oa&&g.oI(l,k.loaderUrl);f=g.Qh(f,g.nI(l,"emb_rel_err"))}d.element.style.display="";k=d.Aa("ytp-suggestion-title");g.uo.test(c.title)?k.dir="rtl":g.aTa.test(c.title)&&(k.dir="ltr");k=d.Aa("ytp-suggestion-author");g.uo.test(e)?k.dir="rtl":g.aTa.test(e)&&(k.dir="ltr");d.update({views_or_author:e,duration:c.isLivePlayback?"Live":c.lengthSeconds?g.wH(c.lengthSeconds):"",link:f,hover_title:c.title,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback});d=d.Aa("ytp-suggestion-image");
c=c.Af();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";v2(a)},w2=function(a){g.AJ.call(this,a);
var b=this;this.j=null;var c=a.S(),d={F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{F:"path",T:{d:"M0 0h24v24H0V0z",fill:"none"}},{F:"path",T:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]};g.kB(c)&&(d={F:"svg",T:{fill:"none",height:"100%",
viewBox:"0 0 25 25",width:"100%"},R:[{F:"g",T:{"clip-path":"url(#clip0)",fill:"#fff"},R:[{F:"path",T:{d:"M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"}},{F:"path",T:{d:"M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"}}]},
{F:"defs",R:[{F:"clipPath",T:{id:"clip0"},R:[{F:"path",T:{d:"M0 0h24v24H0z",fill:"#fff",transform:"translate(.57 .5)"}}]}]}]});var e={target:c.J},f=["ytp-small-redirect"];if(c.C)f.push("no-link");else{var k=g.dC(c);c.oa&&(k=MXa(k,c.loaderUrl));e.href=k;e["aria-label"]="Visit YouTube to search for more videos"}c=new g.W({F:"a",Ca:f,T:e,R:[d]});c.ya(this.element);g.J(this,c);a.S().C||(this.j=new u2(a),this.j.ya(this.element),g.J(this,this.j));this.P(a,"videodatachange",function(){b.show()});
this.resize(this.api.Ya().getPlayerSize())},NXa=function(a,b){a.Aa("ytp-error-content").style.paddingTop="0px";
var c=a.Aa("ytp-error-content"),d=c.clientHeight;a.j.resize(b,b.height-d);c.style.paddingTop=(b.height-a.j.element.clientHeight)/2-d/2+"px"},OXa=function(a,b){var c;
b.reason&&(x2(b.reason)?c=g.Sv(b.reason):c=g.BJ(g.Jv(b.reason)),a.Kd(c,"content"));var d;b.subreason&&(x2(b.subreason)?d=g.Sv(b.subreason):d=g.BJ(g.Jv(b.subreason)),a.Kd(d,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer&&(c=a.Aa("ytp-error-content-wrap-subreason"),d=b.proceedButton.buttonRenderer,b=g.Dg("A"),d.text&&d.text.simpleText)){var e=d.text.simpleText;b.textContent=e;a:{for(var f=g.vg("A",c),k=0;k<f.length;k++)if(f[k].textContent===e){e=!0;break a}e=!1}if(!e){var l,m;e=null==
d?void 0:null==(l=d.navigationEndpoint)?void 0:null==(m=l.urlEndpoint)?void 0:m.url;var n,p;l=null==d?void 0:null==(n=d.navigationEndpoint)?void 0:null==(p=n.urlEndpoint)?void 0:p.target;e&&(a=a.api.S(),a.oa&&(e=MXa(e,a.loaderUrl)),b.setAttribute("href",e));l&&b.setAttribute("target",l);a=g.Dg("DIV");a.appendChild(b);c.appendChild(a)}}},x2=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},MXa=function(a,b){var c={};
g.oI(c,b);return g.Qh(a,c)},y2=function(a,b){g.W.call(this,{F:"a",
Ca:["ytp-impression-link"],T:{target:"{{target}}",href:"{{url}}","aria-label":"Watch on YouTube"},R:[{F:"div",L:"ytp-impression-link-content",T:{"aria-hidden":"true"},R:[{F:"div",L:"ytp-impression-link-text",Z:"Watch on"},{F:"div",L:"ytp-impression-link-logo",R:[s2()]}]}]});this.api=a;this.u=b;this.Ia("target",a.S().J);this.api.Bb(this.element,this,96714);this.P(this.api,"presentingplayerstatechange",this.gh);this.P(this.api,"videoplayerreset",this.j);this.P(this.element,"click",this.onClick);this.j()},
PXa=function(a){var b={};
a.api.S().oa&&g.oI(b,a.api.S().loaderUrl);return g.Qh(a.api.getVideoUrl(),g.nI(b,"emb_imp_woyt"))},z2=function(a){g.W.call(this,{F:"div",
Ca:["ytp-mobile-a11y-hidden-seek-button"],R:[{F:"button",Ca:["ytp-mobile-a11y-hidden-seek-button-rewind","ytp-button"],T:{"aria-label":"Rewind 10 seconds","aria-hidden":"false"}},{F:"button",Ca:["ytp-mobile-a11y-hidden-seek-button-forward","ytp-button"],T:{"aria-label":"Fast forward 10 seconds","aria-hidden":"false"}}]});this.api=a;this.j=this.Aa("ytp-mobile-a11y-hidden-seek-button-rewind");this.forwardButton=this.Aa("ytp-mobile-a11y-hidden-seek-button-forward");this.api.Bb(this.j,this,141902);this.api.Bb(this.forwardButton,
this,141903);this.P(this.api,"presentingplayerstatechange",this.gh);this.P(this.j,"click",this.u);this.P(this.forwardButton,"click",this.B);this.gh()},A2=function(a){g.W.call(this,{F:"div",
L:"ytp-muted-autoplay-endscreen-overlay",R:[{F:"div",L:"ytp-muted-autoplay-end-panel",R:[{F:"div",L:"ytp-muted-autoplay-end-text",Z:"{{text}}"}]}]});this.api=a;this.B=this.Aa("ytp-muted-autoplay-end-panel");this.j=new g.tJ(this.api);g.J(this,this.j);this.j.ya(this.B,0);this.api.Bb(this.element,this,52428);this.P(this.api,"presentingplayerstatechange",this.u);this.La("click",this.onClick);this.hide()},B2=function(a){g.W.call(this,{F:"div",
L:"ytp-muted-autoplay-overlay",R:[{F:"div",L:"ytp-muted-autoplay-bottom-buttons",R:[{F:"button",Ca:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{F:"div",Ca:["ytp-muted-autoplay-equalizer-icon"],R:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{F:"g",T:{fill:"#fff"},R:[{F:"rect",L:"ytp-equalizer-bar-left",T:{height:"9",width:"4",x:"1",y:"7"}},{F:"rect",L:"ytp-equalizer-bar-middle",T:{height:"14",width:"4",x:"6",y:"2"}},{F:"rect",L:"ytp-equalizer-bar-right",T:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.Aa("ytp-muted-autoplay-bottom-buttons");this.Aa("ytp-muted-autoplay-equalizer");this.B=new g.K(this.u,4E3,this);a.Bb(this.element,this,39306);this.P(a,"presentingplayerstatechange",this.j);this.P(a,"onMutedAutoplayStarts",this.j);this.La("click",this.onClick);this.hide()},C2=function(a,b){g.W.call(this,{F:"div",
L:"ytp-pause-overlay",T:{tabIndex:"-1"}});var c=this;this.api=a;this.I=b;this.j=new g.mz(this);this.C=new g.iH(this,1E3,!1,100);this.B=[];this.suggestionData=[];this.containerWidth=0;this.D=!1;this.W=0;this.title=new g.W({F:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.W({F:"button",Ca:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.CG()]});this.N=new t2(function(f){c.suggestions.element.scrollLeft=-f});
this.V=this.tileWidth=this.u=0;this.next=new g.W({F:"button",Ca:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.DG()]});this.expandButton=new g.W({F:"button",Ca:["ytp-button","ytp-expand"],Z:"More videos"});g.J(this,this.j);g.J(this,this.C);b=a.S();"0"===b.controlsType&&g.N(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.J=b.j;g.J(this,this.title);this.title.ya(this.element);this.suggestions=new g.W({F:"div",L:"ytp-suggestions"});g.J(this,this.suggestions);this.suggestions.ya(this.element);
g.J(this,this.previous);this.previous.ya(this.element);this.previous.La("click",this.BU,this);g.J(this,this.N);for(a={ut:0};16>a.ut;a={ut:a.ut},a.ut++){var d=new g.W({F:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:b.J,"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-suggestion-image"},{F:"div",L:"ytp-suggestion-overlay",T:{style:"{{blink_rendering_hack}}","aria-hidden":"{{aria_hidden}}"},R:[{F:"div",L:"ytp-suggestion-title",Z:"{{title}}"},{F:"div",L:"ytp-suggestion-author",Z:"{{author_and_views}}"},
{F:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]}]});g.J(this,d);d.ya(this.suggestions.element);var e=d.Aa("ytp-suggestion-link");g.cl(e,"transitionDelay",a.ut/20+"s");this.j.P(e,"click",function(f){return function(k){var l=f.ut;if(1E3>(0,g.R)()-c.W)g.qt(k),document.activeElement.blur();else{l=c.suggestionData[l];var m=l.sessionData;g.vJ(k,c.api,c.J,m||void 0)&&c.api.yl(l.videoId,m,l.playlistId)}}}(a));
this.B.push(d)}g.J(this,this.next);this.next.ya(this.element);this.next.La("click",this.AU,this);b=new g.W({F:"button",Ca:["ytp-button","ytp-collapse"],T:{"aria-label":"Hide more videos"},R:[g.XAa()]});g.J(this,b);b.ya(this.element);b.La("click",this.sY,this);g.J(this,this.expandButton);this.expandButton.ya(this.element);this.expandButton.La("click",this.tY,this);this.j.P(this.api,"appresize",this.wb);this.j.P(this.api,"fullscreentoggled",this.ao);this.j.P(this.api,"presentingplayerstatechange",this.Xc);
this.j.P(this.api,"videodatachange",this.onVideoDataChange);this.wb(this.api.Ya().getPlayerSize());this.onVideoDataChange()},D2=function(a){var b=a.I.Kf()?32:16;
b=a.V/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.u;var c=a.containerWidth-a.suggestionData.length*(a.tileWidth+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)},QXa=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.$Sa.test(c.title)&&(d.Aa("ytp-suggestion-title").dir="rtl");g.$Sa.test(e)&&(d.Aa("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Live":c.lengthSeconds?g.wH(c.lengthSeconds):"";var k=c.pm();if(g.$A(a.api.S())){var l={};a.api.S().oa&&g.oI(l,a.api.S().loaderUrl);k=g.Qh(k,g.nI(l,"emb_rel_pause"))}d.update({author_and_views:e,duration:f,link:k,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback,aria_hidden:!(!c.ariaLabel||a.api.S().K("embeds_rv_aria_hidden_killswitch")),
blink_rendering_hack:g.qz||g.YA?"will-change: opacity":void 0});d=d.Aa("ytp-suggestion-image");c=c.Af();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";D2(a)},E2=function(a){var b=a.S();
g.W.call(this,{F:"a",Ca:["ytp-watermark","yt-uix-sessionlink"],T:{target:b.J,href:"{{url}}","aria-label":g.hF("Watch on $WEBSITE",{WEBSITE:g.vB(b)}),"data-sessionlink":"feature=player-watermark"},R:[s2()]});this.api=a;this.j=null;this.u=!1;this.state=a.yb();a.Bb(this.element,this,76758);this.P(a,"videodatachange",this.kK);this.P(a,"videodatachange",this.onVideoDataChange);this.P(a,"presentingplayerstatechange",this.onStateChange);this.P(a,"appresize",this.wb);b=this.state;this.state!==b&&(this.state=
b);this.kK();this.onVideoDataChange();this.wb(a.Ya().getPlayerSize())},F2=function(a){g.XI.call(this,a);
this.G=a;this.j=new g.mz(this);g.J(this,this.j);this.load()},G2=function(a,b){a={adSource:"EMBEDS_AD_SOURCE_YOUTUBE",
breakType:0===a.G.getCurrentTime()?"EMBEDS_AD_BREAK_TYPE_PRE_ROLL":0===a.G.getPlayerState()?"EMBEDS_AD_BREAK_TYPE_POST_ROLL":"EMBEDS_AD_BREAK_TYPE_MID_ROLL",embedUrl:g.Pda(a.G.S().loaderUrl),eventType:b,youtubeHost:g.Kh(a.G.S().Y)||""};g.xr("embedsAdEvent",a)};
g.w(t2,g.I);t2.prototype.start=function(a,b,c){this.from=a;this.j=b;this.duration=c;this.startTime=(0,g.R)();this.next()};
t2.prototype.next=function(){var a=(0,g.R)()-this.startTime;var b=this.u;a=KXa(b,a/this.duration);if(0==a)b=b.J;else if(1==a)b=b.N;else{var c=g.cg(b.J,b.D,a),d=g.cg(b.D,b.I,a);b=g.cg(b.I,b.N,a);c=g.cg(c,d,a);d=g.cg(d,b,a);b=g.cg(c,d,a)}b=g.ag(b,0,1);this.callback((this.j-this.from)*b+this.from);1>b&&this.delay.start()};g.w(u2,g.W);g.h=u2.prototype;g.h.hide=function(){this.I=!0;g.W.prototype.hide.call(this)};
g.h.show=function(){this.I=!1;g.W.prototype.show.call(this)};
g.h.isHidden=function(){return this.I};
g.h.yU=function(){this.scrollTo(this.u-this.containerWidth)};
g.h.zU=function(){this.scrollTo(this.u+this.containerWidth)};
g.h.resize=function(a,b){var c=this.api.S(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,k=Math.min(this.suggestionData.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===k||!c.Jc)this.hide();else{var l;if(e){var m=l=28;this.j=16}else this.j=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;a=a.width-(48+l+m);l=Math.ceil(a/150);l=Math.min(3,l);l=a/l-this.j;m=Math.floor(l/d);b&&m+100>b&&50<l&&(m=Math.max(b,50/d),l=Math.ceil(a/(d*(m-100)+this.j)),l=a/l-this.j,
m=Math.floor(l/d));50>l||g.GI(this.api)?this.hide():this.show();for(b=0;b<k;b++){d=this.B[b];var q=d.Aa("ytp-suggestion-image");q.style.width=l+"px";q.style.height=m+"px";d.Aa("ytp-suggestion-title").style.width=l+"px";d.Aa("ytp-suggestion-author").style.width=l+"px";d=d.Aa("ytp-suggestion-duration");d.style.display=d&&100>l?"none":""}k=e+n+p+4;this.D=k+c+(m-f)/2;this.suggestions.element.style.height=m+k+"px";this.tileWidth=l;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;v2(this)}};
g.h.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.S();this.J=a.D?!1:b.j;a.suggestions?this.suggestionData=g.em(a.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
LXa(this);a.D?this.title.update({title:g.hF("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:a.author})}):this.title.update({title:"More videos on YouTube"})};
g.h.scrollTo=function(a){a=g.ag(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+this.j),0);this.N.start(this.u,a,1E3);this.u=a;v2(this)};g.w(w2,g.AJ);w2.prototype.show=function(){g.AJ.prototype.show.call(this);NXa(this,this.api.Ya().getPlayerSize())};
w2.prototype.resize=function(a){g.AJ.prototype.resize.call(this,a);this.j&&(NXa(this,a),g.O(this.element,"related-on-error-overlay-visible",!this.j.isHidden()))};
w2.prototype.u=function(a){g.AJ.prototype.u.call(this,a);var b=this.api.getVideoData();if(b.oG||b.playerErrorMessageRenderer)(a=b.oG)?OXa(this,a):b.playerErrorMessageRenderer&&OXa(this,b.playerErrorMessageRenderer);else{var c;a.Fk&&(b.Sr?x2(b.Sr)?c=g.Sv(b.Sr):c=g.BJ(g.Jv(b.Sr)):c=g.BJ(a.Fk),this.Kd(c,"subreason"))}};g.w(y2,g.W);y2.prototype.gh=function(){this.api.yb().isCued()||(this.hide(),this.api.Wa(this.element,!1))};
y2.prototype.j=function(){var a=this.api.getVideoData(),b=this.api.S(),c=this.api.getVideoData().D,d=b.Nc,e=!b.Jc,f=this.u.hg(),k=g.kB(b);b=b.C;d||f||c||e||k||b||!a.videoId?(this.hide(),this.api.Wa(this.element,!1)):(a=PXa(this),this.Ia("url",a),this.show())};
y2.prototype.onClick=function(a){var b=PXa(this);g.wJ(b,this.api,a);this.api.tb(this.element)};
y2.prototype.show=function(){this.api.yb().isCued()&&(g.W.prototype.show.call(this),this.api.Mn(this.element)&&this.api.Wa(this.element,!0))};g.w(z2,g.W);z2.prototype.gh=function(){var a=this.api.yb();!this.api.Rf()||g.V(a,2)&&g.DI(this.api)||g.V(a,64)?(this.api.Wa(this.j,!1),this.api.Wa(this.forwardButton,!1),this.hide()):(this.show(),this.api.Wa(this.j,!0),this.api.Wa(this.forwardButton,!0))};
z2.prototype.u=function(){this.api.seekBy(-10*this.api.getPlaybackRate());this.api.tb(this.j)};
z2.prototype.B=function(){this.api.seekBy(10*this.api.getPlaybackRate());this.api.tb(this.forwardButton)};g.w(A2,g.W);A2.prototype.u=function(){var a=this.api.yb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.V(a,2)&&!this.qb?(this.show(),this.j.show(),a=this.api.getVideoData(),this.Ia("text",a.OL),g.O(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Wa(this.element,this.qb),this.api.Ma("onMutedAutoplayEnds")):this.hide())};
A2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.rD(a);this.api.loadVideoById(a.videoId,b);this.api.tb(this.element);this.hide()};g.w(B2,g.W);B2.prototype.j=function(){var a=this.api.yb(),b=this.api.getVideoData();this.api.S().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.V(a,2)?this.qb||(g.W.prototype.show.call(this),this.B.start(),this.api.Wa(this.element,this.qb)):this.hide()};
B2.prototype.u=function(){g.O(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
B2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.rD(a);this.api.loadVideoById(a.videoId,b);this.api.tb(this.element)};g.w(C2,g.W);g.h=C2.prototype;g.h.hide=function(){g.io(this.api.getRootNode(),"ytp-expand-pause-overlay");g.W.prototype.hide.call(this)};
g.h.sY=function(){this.D=!0;g.io(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.h.tY=function(){this.D=!1;g.N(this.api.getRootNode(),"ytp-expand-pause-overlay");this.focus()};
g.h.AU=function(){this.scrollTo(this.u-this.containerWidth)};
g.h.BU=function(){this.scrollTo(this.u+this.containerWidth)};
g.h.ao=function(){this.wb(this.api.Ya().getPlayerSize())};
g.h.Xc=function(a){if(!(g.V(a.state,1)||g.V(a.state,16)||g.V(a.state,32))){var b=!this.api.S().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.V(a.state,1024);!g.V(a.state,4)||g.V(a.state,2)||b?this.C.hide():this.suggestionData.length&&(this.D||(g.N(this.api.getRootNode(),"ytp-expand-pause-overlay"),D2(this)),this.C.show(),this.W=(0,g.R)())}};
g.h.wb=function(a){var b=16/9,c=this.I.Kf();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].Aa("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.V=b;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;D2(this)};
g.h.onVideoDataChange=function(){var a=this.api.S(),b=this.api.getVideoData();this.J=b.D?!1:a.j;b.suggestions?this.suggestionData=g.em(b.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
QXa(this);b.D?this.title.update({title:g.hF("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"More videos"})};
g.h.scrollTo=function(a){a=g.ag(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+8),0);this.N.start(this.u,a,1E3);this.u=a;D2(this)};g.w(E2,g.W);g.h=E2.prototype;g.h.kK=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).D,c=this.api.S();a=(a.mutedAutoplay||c.Nc&&!g.V(this.state,2))&&!(b&&c.pfpChazalUi);g.xG(this,a);this.api.Wa(this.element,a)};
g.h.onStateChange=function(a){a=a.state;this.state!==a&&(this.state=a);this.kK()};
g.h.onVideoDataChange=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.Ia("url",a);this.j||(this.j=this.La("click",this.onClick))}else this.j&&(this.Ia("url",null),this.wc(this.j),this.j=null)};
g.h.onClick=function(a){var b=this.api.getVideoUrl(!g.xH(a),!1,!0,!0);g.wJ(b,this.api,a);this.api.tb(this.element)};
g.h.wb=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.W(s2()),c=this.Aa("ytp-watermark");g.O(c,"ytp-watermark-small",a);g.Fg(c);b.ya(c);this.u=a}};g.w(F2,g.XI);g.h=F2.prototype;g.h.gj=function(){return!1};
g.h.create=function(){var a=this.G.S(),b=g.zI(this.G),c,d=null==(c=this.G.getVideoData())?void 0:c.clientPlaybackNonce;d&&g.rw("cpn",d);a.Jc&&!a.C&&(this.I=new C2(this.G,b),g.J(this,this.I),g.JI(this.G,this.I.element,4));a.K("embeds_enable_muted_autoplay")&&(this.u=new B2(this.G),g.J(this,this.u),g.JI(this.G,this.u.element,4),this.D=new A2(this.G),g.J(this,this.D),g.JI(this.G,this.D.element,4));if(a.Nc||this.u)this.watermark=new E2(this.G),g.J(this,this.watermark),g.JI(this.G,this.watermark.element,
8);this.B=new y2(this.G,b);g.J(this,this.B);g.JI(this.G,this.B.element,8);a.isMobile&&(this.C=new z2(this.G),g.J(this,this.C),g.JI(this.G,this.C.element,4));this.j.P(this.G,"appresize",this.wb);this.j.P(this.G,"presentingplayerstatechange",this.gh);this.j.P(this.G,"videodatachange",this.o1);this.j.P(this.G,"onMutedAutoplayStarts",this.onMutedAutoplayStarts);this.j.P(this.G,"onAdStart",this.onAdStart);this.j.P(this.G,"onAdComplete",this.onAdComplete);this.j.P(this.G,"onAdSkip",this.onAdSkip);this.j.P(this.G,
"onAdStateChange",this.onAdStateChange);this.Tb(this.G.yb());this.player.nf("embed")};
g.h.wb=function(){var a=this.G.Ya().getPlayerSize();this.sf&&this.sf.resize(a)};
g.h.gh=function(a){this.Tb(a.state)};
g.h.Tb=function(a){g.V(a,128)?(this.sf||(this.sf=new w2(this.G),g.J(this,this.sf),g.JI(this.G,this.sf.element,4)),this.sf.u(a.getData()),this.sf.show(),g.N(this.G.getRootNode(),"ytp-embed-error")):this.sf&&(this.sf.dispose(),this.sf=null,g.io(this.G.getRootNode(),"ytp-embed-error"))};
g.h.onMutedAutoplayStarts=function(){this.G.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.ya(this.u.bottomButtons,0)};
g.h.o1=function(){var a=this.G.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.Jg(this.u.element,this.watermark.element)&&g.JI(this.G,this.watermark.element,8)};
g.h.onAdStart=function(){G2(this,"EMBEDS_AD_EVENT_TYPE_AD_STARTED")};
g.h.onAdComplete=function(){G2(this,"EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")};
g.h.onAdSkip=function(){G2(this,"EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")};
g.h.onAdStateChange=function(a){2===a&&G2(this,"EMBEDS_AD_EVENT_TYPE_AD_PAUSED")};g.WI("embed",F2);})(_yt_player);
