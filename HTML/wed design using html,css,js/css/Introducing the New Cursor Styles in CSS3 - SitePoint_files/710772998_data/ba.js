var _w=window,BAP=function(){function N(a){var f,c,d={};try{if(j._bab){f=j._bab;j._bab=z;for(c=0;c<f[w];c++)N(f[c])}}catch(g){}if(a){if(a.uqid){if(f=a.uqid,b[f])return}else return;try{for(c in a)a.hasOwnProperty(c)&&(d[c.toLowerCase()]=a[c]);a=d}catch(e){}if(a.ad_oas)try{a.ad_oas=a.ad_oas.toLowerCase(),a.ad_wxh=a.ad_oas.replace("width=","").replace("height=","").replace(" ","x")}catch(h){}if(a.ad_wxh)try{a.ad_wxh=a.ad_wxh.toLowerCase(),a.ad_w=a.ad_w||a.ad_wxh.split("x")[0],a.ad_h=a.ad_h||a.ad_wxh.split("x")[1]}catch(i){}if(!a.ad_w||
!a.ad_h){X(a,13);return}if(1>a.ad_h&&1>a.ad_w){X(a,14);return}$.push(f);a.nid=a.nid.toString().match(/\d/g).join("");B[f]=a.nid;d="n/"+a.coid+"/"+a.nid;b[f]=a;if(!Ca&&(a.check_container||/^(1525|4501|7420|8573)$/.test(a.nid)))c=u.createElement("script"),c.src=E+"/a/e.js",q.appendChild(c);d?aa[a.nid]||(ba=!0,c=u.createElement("script"),c.src=Za+d+".js",q.appendChild(c)):($.pop(),X(a,11));try{l("bap-pixel-"+f).style.display="none"}catch(k){}}else X(z,10);546==a.nid&&(a.delay_start=1);ca?ca&&da&&(da=
!1,Y()):(ea(window,"load",function(){ca=true;a.delay_start?I(Y,a.delay_start*1E3):Y()}),fa&&clearTimeout(fa),fa=I(Y,5E3))}function L(a){try{delete b[a];var f=l("bap-pixel-"+a);f&&f.parentNode.removeChild(f);(f=l("trigger-container-"+a))&&f.parentNode.removeChild(f)}catch(c){}}function Y(){function a(a,c,f){for(f in j.bap_overrides[c])b[a].hasOwnProperty(f)&&(b[a][f]=j.bap_overrides[c][f])}if(ba)I(function(){ba="";Y()},500);else if(!da){da=!0;j.bap_skip&&(S=S.concat(bap_skip));var f,c,d=!1;na=!(!l("abgc")||
!j.abgp);try{for(var g=u.getElementsByTagName("iframe"),e=0;e<g[w];e++)oa[e]=g[e],F("BAPTANGO?|"+e,g[e]);Da("COMMON");for(f=0;f<$[w];f++){var h=$[f];if(!b[h].processed)if(aa[b[h].nid]){$a(h,b[h].nid);for(c=0;c<S[w];c++){if(S[c]==b[h].nid||S[c]==b[h].nid+"|"+h||S[c]=="size|"+b[h].ad_w+"x"+b[h].ad_h){L(h);d=!0;break}d=!1}if(!d)if(j.bap_546_h&&546==b[h].nid)L(h);else{j.bap_overrides&&j.bap_overrides.hasOwnProperty(b[h].nid)&&a(h,b[h].nid);j.bap_overrides&&j.bap_overrides.hasOwnProperty(b[h].nid+"|"+
h)&&a(h,b[h].nid+"|"+h);na&&(b[h].position="top-right",b[h].icon_display="expandable",b[h].server={name:"Google"},b[h].ad_z=9011,l("abgc").style.display="none");for(var g=h,i=e=void 0,k=void 0,r=b[g].ad_h,O=b[g].ad_w,M=l("bap-pixel-"+g),t=u.getElementsByTagName("*"),k=0;k<t[w];k++)M==t[k]&&(b[g].proximityId=k);if(Ea&&G()[0]==r&&G()[1]==O)k=5;else if(0<Z.indexOf("mail.yahoo.com")&&1==u.getElementsByTagName("object")[w]&&n.IE)e=u.getElementsByTagName("object")[0],k=4.1;else if(b[g].container&&(e=l(b[g].container))||
b[g].check_container&&(e=M.parentNode))k=8,b[g].check_container?Ea&&0!=(i=Fa(G()[0],G()[1]))?(b[g].ad_h=G()[0],b[g].ad_w=G()[1],b[g].ns=i,e=z,k=5):(e=T(e,r,O)||e,e=pa(e,g)):e.ds=b[g].ns;else if(e=Ga(M.previousSibling,r,O,1))k=3;else{var v;if(v=0<Z.indexOf("yahoo.com")){for(var x=O,o=r,C=void 0,p=z,m=u.getElementsByTagName("img"),C=0;C<m[w];C++)if(m[C].height||m[C].getAttribute("height"))if(m[C].width||m[C].getAttribute("width"))m[C].height==o&&m[C].width==x?p=m[C]:s(m[C].getAttribute("height"))==
o&&s(m[C].getAttribute("width"))==x&&(p=m[C]);v=e=p}if(v)k=4.2;else if(e=Ha(b[g].proximityId,O,r,M))k=7;else{k=6;try{l("bap-pixel-"+g).style.display=""}catch(y){}}}if(5!=k&&/^(1525|4501|7420|8573)$/.test(b[g].nid))try{e=T(M.parentNode,r,O)||e,e=pa(e,g),3!=k&&(k=4)}catch(qa){}if(3==k||7==k)for(i=e;;)if(i=T(i,r,O))if("EMBED"==i.nodeName)if("OBJECT"==i.parentNode.nodeName){e=ga(i.parentNode);break}else e=i;else"OBJECT"==i.nodeName&&(i=ga(i)),e=i;else break;0<=Z.indexOf("l.yimg.com")&&n.Chrome&&(k=6);
b[g].dm=k;b[g].ad=e;b[g].px=M;try{b[g].ad_z=b[g].ad_z||Ia(e)}catch(D){}5===k&&(b[g].ad_z=1E5);6!=k&&M.parentNode.removeChild(M);var K=b[h],H;var A=b[h].ad_w,J=b[h].ad_h;H=728<=A&&990>=A&&90<=J&&125>=J?!1:160==A&&600==J?!1:190>A||145>J;K.mini=H;90>b[h].ad_w&&(b[h].icon_display="icon");var N;if(N=b[h].adi){var g=h,o=x=k=i=e=void 0,ha=b[g].adi.split(",");try{if(5==b[g].dm)for(k in ha){if(0<u.location.href.indexOf("/"+ha[k]+"/")){i=!0;break}}else for(e=b[g].ad.parentNode;;){for(x=0;x<e.children[w];x++)if(o=
e.children[x],o.src)for(k in ha)if(0<o.src.indexOf("/"+ha[k]+"/")){i=!0;break}if(i)break;e=e.parentNode;if(!e||!e.children)break}}catch(ca){}N=!i}if(N)L(h);else if(b[h].ad&&"none"==b[h].ad.style.display)L(h);else if(8==b[h].dm&&!b[h].ad.ds)L(h);else{var e=g=h,P=b[e].ad;if(P&&!P.notice)P.notice=e;else if(P&&P.notice!=e)b[e].noticeExists=!0,B[P.notice]!=B[e]&&ra(P.notice,e);else if(5==b[e].dm)if(j.notice)b[e].noticeExists=!0,B[j.notice]!=B[e]&&ra(j.notice,e);else try{j.notice=e,b[e].ad={nodeName:"EXACT-FRAME"},
j.bap_frameid?F("BAPFRAME|"+B[e]+"|"+j.bap_frameid):j.parent!=j.top?j.top.postMessage("BAPFRAMEBROADCAST|"+B[e]+"|"+(u.referrer?u.referrer:"")+"|"+b[e].ad_w+"|"+b[e].ad_h,"*"):j.top.postMessage("BAPFRAMEID|"+B[e]+"|"+u.location.href,"*")}catch(fa){}if(b[e].ad&&!b[e].noticeExists&&("IFRAME"==b[e].ad.nodeName&&b[e].ad.src in ia||"EXACT-FRAME"==b[e].ad.nodeName&&ia.contents))b[e].noticeExists=!0;if(b[g].noticeExists)Q(g,"I"),Q(g,"O");else{sa(g);var e=g,x=k=i=void 0,p=C=o="",U=l("BAP-holder"),W="BAP.action('"+
e+"', 'S'); BAP.createL2('"+e+"');";V&&(C="bottom:0;right:0;");U||(U=u.createElement("div"),U.setAttribute("id","BAP-holder"),q.appendChild(U));try{x=s(b[e].container_opacity)/100}catch(la){x=1}x=1>x?"opacity:"+x+";-moz-opacity:"+x+";-ms-filter:DXImageTransform.Microsoft.Alpha(Opacity="+100*x+");filter:alpha(opacity="+100*x+");":"";"expandable"==b[e].icon_display?(i='<img src="'+E+'/icon/ci.png">',k=19,p=' onmouseover="BAP.expandIcon('+e+')" ',!n.Opera&&(p+=' onmouseout="BAP.collapseIcon('+e+')" ')):
"icon"==b[e].icon_display&&b[e].mini?(i='<img src="'+E+'/icon/ci.png">',k=19):(k=b[e].ciconWidth,i='<img src="'+E+"/icon/c_"+b[e].icon_grayscale+(b[e].cicon?b[e].cicon:Ja)+'.png">');if(b[e].mini||b[e].skipL2)W="BAP.action('"+e+"', 'S'); BAP.action('"+e+"', 'M'); _w.open(BAP.moreInfoHref("+e+"), '_newtab');";b[e].ad_z&&(o="z-index:"+s(b[e].ad_z)+";");i='<span id="trigger-'+e+'" style="'+C+o+'position:absolute;" class="bap-trigger" onclick="'+W+'"'+p+">"+i+"</span>";i='<div id="trigger-container-'+
e+'" style="position: static !important;"><span id="trigger-box-'+e+'" class="bap-trigger" style="'+C+o+"position:absolute;"+x+"width:"+k+'px;height:15px;"><img id="trigger-box-image-'+e+'" src="'+E+"/icon/box_"+k+"_"+b[e].position+'.png"></span>'+i+"</div>";U.innerHTML+=i;ta(g);ab(g)}b[h].noticeExists?L(h):(bb(h),b[h].processed=!0)}}}else X(b[h],12),L(h)}R.vs=G()[0]<q.scrollHeight;ua=G()[1];0>location.href.indexOf("tech-ticker")?(ea(window,"resize",cb),Ka(function(){var a=function(a){for(var c in a)for(var f in b)if(b[f].ad==
a[c]){L(f);return}},c=j.truste;try{a(c.ca.contMap)}catch(f){}try{a(c.ca2.contMap)}catch(d){}La();ja()}),ea(window,"scroll",db)):Ka(La)}catch(ma){}ka=!0}}function $a(a,f){try{var c=aa[f].data;b[a].advName=c.adv_name||z;b[a].advMessage=c.adv_msg||z;b[a].advLogo=E+c.adv_logo.slice(19)||z;b[a].advLink=c.adv_link||z;b[a].rev=c.revision||0;b[a].behavioral=c.behavioral||"definitive";b[a].behavioralCustomMessage=c.generic_text||"";c.hide_wi&&(b[a].hideWhatIs=!0);c.hide_cl&&(b[a].hideCustom=!0);b[a].defTrans=
{};c.default_generic1&&(b[a].defTrans.generic1=c.default_generic1);c.default_generic2&&(b[a].defTrans.generic2=c.default_generic2);c.default_generic3&&(b[a].defTrans.generic3=c.default_generic3);c.default_generic4&&(b[a].defTrans.generic4=c.default_generic4);c.default_generic5&&(b[a].defTrans.generic5=c.default_generic5);c.default_generic6&&(b[a].defTrans.generic6=c.default_generic6);c.default_link1&&(b[a].defTrans.link1=c.default_link1);c.default_link2&&(b[a].defTrans.link2=c.default_link2);c.default_link2&&
(b[a].defTrans.link3=c.default_link3);c.default_footer&&(b[a].defTrans.footer=c.default_footer);b[a].skipL2=c.skip_L2||970==b[a].ad_w&&66==b[a].ad_h;var d=c.message_properties||"";d["behavioral_"+t]&&(b[a].behavioral=d["behavioral_"+t]);d["behavioral_"+t]&&(b[a].noDefault=!0);c.default_icon&&!b[a].noDefault&&(b[a].cicon=c.default_icon);d["generic_text_"+t]&&(b[a].behavioralCustomMessage=d["generic_text_"+t]);d["adv_name_"+t]&&(b[a].advName=d["adv_name_"+t]);d["adv_msg_"+t]&&(b[a].advMessage=d["adv_msg_"+
t]);d["adv_logo_"+t]&&(b[a].advLogo=E+d["adv_logo_"+t].slice(19));d["adv_link_"+t]&&(b[a].advLink=d["adv_link_"+t]);d["translation_"+t]&&(b[a].translation=d["translation_"+t]);d["translation_"+t]&&(b[a].cicon=d["translation_"+t].icon);d.hasOwnProperty("skip_L2_"+t)&&(b[a].skipL2=d["skip_L2_"+t]);b[a].icon_delay=c.icon_delay||0;b[a].icon_display=c.icon_display||"normal";b[a].icon_display=c.icon_expandable?"expandable":b[a].icon_display;b[a].icon_grayscale=c.icon_grayscale||100;b[a].container_opacity=
c.container_opacity||100;b[a].offsetTop=c.offset_y?!isNaN(s(c.offset_y))?s(c.offset_y):0:0;b[a].offsetLeft=c.offset_x?!isNaN(s(c.offset_x))?s(c.offset_x):0:0;try{b[a].server=c.server[0]}catch(g){b[a].server={id:0,name:"Evidon"}}b[a].position||(b[a].position=c.icon_position||"top-right");b[a].positionVertical=function(){return this.position.indexOf("top")>=0?"top":"bottom"};b[a].positionHorizontal=function(){return this.position.indexOf("left")>=0?"left":"right"};B[a]||(B[a]=b[a].nid=c.nid||z);b[a].ad_h=
s(b[a].ad_h);b[a].ad_w=s(b[a].ad_w);b[a].dm=-1;y[a]={};b[a].ciconWidth=77;if("_nl"==b[a].cicon||!b[a].cicon&&"nl"==t)b[a].ciconWidth=47;if(/_(de|es|nl_be|si|mt|lt|gr|ee|is|bg|tr|il|ar)$/.test(b[a].cicon)||!b[a].cicon&&/de|es|be|si|mt|lt|gr|cy|ee|is|bg|tr|il|sa|eg/.test(t))b[a].icon_display="expandable",b[a].ciconWidth=107}catch(e){}}function db(){try{ja(),V?I(ja,1):I(ja,100)}catch(a){}}function Ka(a){var b=0,c=function(){try{0===b?(b++,I(c,200)):(a(),100>b?(b++,I(c,100)):115>b&&(b++,I(c,5E3)))}catch(d){}};
return c()}function La(){var a=j.__MicrosoftAdvertising,f,c;if(a&&a.Ad)for(c in b)if(b.hasOwnProperty(c)&&!b[c]._ms&&(f=a.Ad.getByPlacementId(b[c].atl_id)||a.Ad.get(b[c].ad)))f.removePlugin("AdChoices"),b[c]._ms=!0}function ja(){var a,f,c,d;for(d in b){a=b[d];if(5==a.dm)break;else c=6==a.dm?a.px:a.ad;f=c;if(!b[d].hidden&&!b[d].detached&&f)for(;;){f=f.parentNode;if(f==q)break;if(!f){b[d].detached=!0;break}}else{for(var g=f=Ha(b[d].proximityId,b[d].ad_w,b[d].ad_h);!(g=T(g,b[d].ad_h,b[d].ad_w),!g););
f&&(b[d].ad=f);b[d].detached=!1}b[d].hidden=6!=a.dm&&(0===c.offsetWidth&&0===c.offsetHeight||"none"==v(c,"display"))?!0:!1;if(b[d].detached||b[d].hidden)W(d),l("trigger-container-"+d).style.display="none";else{l("trigger-container-"+d).style.display="";try{var e=H(c);if(e.top!=a.pxt||e.left!=a.pxl)W(d),sa(d),ta(d)}catch(h){}}}}function cb(){try{var a,f=G()[1]-ua,c=G()[0]<q.scrollHeight,d=R.vs!=c;if(0!==f||d){for(a in b)sa(a),ta(a),l("bap-notice-"+a)&&(W(a),Ma(a));ua=G()[1]}R.vs=c}catch(g){}}function Na(a){return[encodeURIComponent(a.aid||
0),encodeURIComponent(a.icaid||0),encodeURIComponent(a.ecaid||0).replace(/_/g,"$underscore$").replace(/%2F/g,"$fs$"),encodeURIComponent(a.nid||0)].join("_")+"/"}function Oa(a,b,c){Pa("//l.betrad.com/ct/"+Na(a)+[t,b,a.ad_w,a.ad_h,242,a.coid,a.rev].join("/")+"/pixel.gif?v="+Qa+"&ttid="+eb+"&d="+Z+c+"&r="+Math.random())}function Pa(a){var b=new Image(0,0);b.src=a;q.appendChild(b)}function Q(a,f){var c,d,g="",e=Ra[a],h=!1;e||(e={I:[0,"0/1/0/0/0/0"],S:[0,"0/0/1/0/0/0"],A:[0,"0/0/0/1/0/0"],B:[0,"0/0/0/0/1/0"],
M:[0,"0/0/0/0/0/1"],O:[0,"0/1/0/0/0/0"]});0===e[f][0]&&(e[f][0]=1,c=e[f][1],h=!0);"O"==f&&(g="&o=1");Ra[a]=e;if(h&&(Oa(b[a],c,g),!b[a].noticeExists&&y[a]&&("B"==f||"M"==f)))for(d in g="&o=1",y[a])Oa(y[a][d],c,g)}function X(a,b){var c=Na(a);Sa[c]!=b&&(Sa[c]=b,c&&Pa("//l.betrad.com/ct/"+c+"pixel.gif?e="+b+"&v="+Qa+"&d="+Z+"&r="+Math.random()))}function Ta(a){if(b[a].expanded){var f=E+"/icon/ci.png",c=l("trigger-"+a),d=H(c).left;"right"==b[a].positionHorizontal()&&(d=d+b[a].ciconWidth-19);c.style.left=
d+"px";c.innerHTML='<img src="'+f+'">';l("trigger-box-"+a).style.left=d+"px";l("trigger-box-"+a).style.width="19px";l("trigger-box-image-"+a).src=E+"/icon/box_19_"+b[a].position+".png";b[a].expanded=!1}}function la(a){try{var b=a.height,c=a.width;b||(b=s(v(a,"height")));c||(c=s(v(a,"width")));b||(b=a.offsetHeight);c||(c=a.offsetWidth);return[c,b]}catch(d){}return!1}function ma(a,b,c){try{var d=la(a)[1],g=la(a)[0];if(d===b&&g===c||d<=b+5&&d>=b-5&&g>=c-5&&g<=c+5)return!0}catch(e){}return!1}function ga(a){if(n.Safari&&
0>n.SafariVersion.indexOf("5.1"))return a;var b,c,d,g;try{if("object"===a.nodeName.toLowerCase())for(d=a.childNodes[w]-1;0<d;d--){g=a.childNodes[d];if("embed"===g.nodeName.toLowerCase()){b=g;break}"object"===g.nodeName.toLowerCase()&&"application/x-shockwave-flash"===g.type&&(c=g)}!b&&c&&(b=c);if(n.Gecko&&b)return b;if(0===b.offsetHeight&&0===b.offsetWidth)return a;if(n.Chrome&&b||0!==H(b).top)a=b}catch(e){}return a}function Ga(a,b,c,d){try{return 15==d||!a?!1:/DIV|IMG|EMBED|OBJECT|IFRAME/.test(a.nodeName)&&
ma(a,b,c)?a:Ga(a.previousSibling,b,c,++d)}catch(g){return!1}}function T(a,b,c){try{if(a){var d=a.children||a.childNodes,g,e;if(0===d[w])return!1;for(e=0;e<d[w];e++)if(va(d[e]))return ma(d[e],b,c)?d[e]:(g=T(d[e],b,c))?g:d[e]}else return!1}catch(h){return!1}}function W(a){try{var b=l("bap-notice-"+a);b&&(b.style.display="none")}catch(c){}}function Ua(a){a.id||(a=l("bap-notice-"+a));a.style.display="none"!=v(a,"display")?"none":"block"}function wa(a,f){var c=[],d;b[a][f]&&c.push(f+"["+B[a]+"]="+encodeURIComponent(b[a][f]));
if(y[a])for(d in y[a]){var g=y[a][d];g[f]&&c.push(f+"["+d+"]="+encodeURIComponent(g[f]))}return c.join("&")}function Va(a){var b,c,d=[],g=Wa+"more_info/"+B[a];for(c in y[a])g+=","+c;(b=wa(a,"cps"))&&d.push(b);(b=wa(a,"seg"))&&d.push(b);(b=wa(a,"ecaid"))&&d.push(b);na&&d.push("gdn=1");0<d[w]&&(g+="?"+d.join("&"));return g}function xa(a,b){l(a).href=b}function Da(a){var b;a&&!l("bass-"+a)&&R["CSS_"+a]&&(n.IE?(b=u.createStyleSheet(""),b.cssText=R["CSS_"+a]):(b=u.createElement("style"),b.setAttribute("id",
"bass-"+a),b.setAttribute("type","text/css"),b.innerHTML=R["CSS_"+a],q.appendChild(b)))}function l(){var a,b=[];for(a=0;a<arguments[w];a++){var c=arguments[a];"string"==typeof c&&(c=u.getElementById(c));if(1==arguments[w])return c;b.push(c)}return b}function ea(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):a[b]=c)}function G(){var a=-1,b=-1,c=j.innerWidth,d=u.documentElement;try{"number"==typeof c?(a=c,b=j.innerHeight):d&&d.clientWidth?(a=d.clientWidth,
b=d.clientHeight):q&&q.clientWidth&&(a=q.clientWidth,b=q.clientHeight)}catch(g){}return[b,a]}function v(a,b){try{var c;a.currentStyle?c=a.currentStyle[b]:j.getComputedStyle&&(c=u.defaultView.getComputedStyle(a,z).getPropertyValue(b));if(!c&&"text-align"===b)try{c=a.currentStyle.textAlign}catch(d){}return c}catch(g){return z}}function Ia(a){var b=n.IE?"zIndex":"z-index",c=z;if(a)return"auto"==v(a,b)?c=Ia(a.parentNode):0<s(v(a,b))&&(c=v(a,b)),s(c)+10}function va(a){return 0===a.offsetWidth&&0===a.offsetHeight||
"none"==v(a,"display")||!a.height&&!a.getAttribute("height")&&!v(a,"height")||!a.width&&!a.getAttribute("width")&&!v(a,"width")?!1:!0}function Ha(a,b,c,d){var g,e,h,i,k,r,j=z,l={},n,m=u.getElementsByTagName("*");for(g=0;g<m[w];g++)if(/DIV|IMG|EMBED|OBJECT|IFRAME/.test(m[g].nodeName)&&(i=m[g],!("EMBED"==i.nodeName&&"OBJECT"==i.parentNode.nodeName)&&va(i)))if(i.height==c&&i.width==b||s(i.getAttribute("height"))==c&&s(i.getAttribute("width"))==b)l[g]=i;else try{e=s(v(i,"width").replace("px","")),h=s(v(i,
"height").replace("px","")),h==c&&e==b&&(l[g]=i)}catch(x){}for(k in l)if(b=Math.abs(a-k),!(50<b)){if(!n||b<n)n=b,j=l[k];d&&d.parentNode==l[k].parentNode&&(r={d:b,cm:l[k]})}r&&5>Math.abs(n-r.d)&&(j=r.cm);try{j&&"OBJECT"==j.nodeName&&(j=ga(j))}catch(q){}return j}function ab(a){Q(a,"I");0<b[a].icon_delay&&(l("trigger-container-"+a).style.display="none",I(function(){try{l("trigger-container-"+a).style.display="block"}catch(b){}},1E3*s(b[a].icon_delay)))}function ta(a){var f=l("trigger-"+a),c=l("trigger-box-"+
a);V?(f.style.bottom=b[a].posTop+"px",f.style.right=b[a].posLeft+2+"px",c.style.bottom=b[a].posTop+(!n.IE6&&!n.IE7?3:0)+"px",c.style.right=b[a].posLeft+2+"px"):(f.style.top=b[a].posTop+"px",f.style.left=b[a].posLeft+"px",c.style.top=b[a].posTop+"px",c.style.left=b[a].posLeft+"px")}function sa(a){var f,c,d,g,e=b[a].ad,h=b[a].ad_h,i=b[a].ad_w,k,j;if(V){if("top-right"==b[a].position?(f=h-14,c=2):"top-left"==b[a].position?(f=h-14,c=300-b[a].ciconWidth+2):"bottom-right"==b[a].position?(f=0,c=2):"bottom-left"==
b[a].position&&(f=0,c=300-b[a].ciconWidth+2),n.IE&&(!n.IE6&&!n.IE7)&&(f+=15,c-=3),!Xa.x&&n.IE&&(n.IE6||n.IE7))f+=17,c-=3}else{if(5==b[a].dm)d=i,j=g=0,k=d-i;else if(/^(1|2|3|4|4.1|4.2|7|8)$/.test(b[a].dm))d=H(e).left,g=H(e).top,k=d,j=g;else if(6==b[a].dm){f=b[a].px;d=H(f).left;g=H(f).top;n.Opera&&(f.width=f.height="1",g=H(f).top,f.width=f.height="0");k=d-i-4;j=g-h;try{var l=f.parentNode.width;l||(l=s(v(f.parentNode,"width")));if(l===i||l<=i)k+=i,0<=v(f,"text-align").toLowerCase().indexOf("center")?
(k-=i/2,n.IE&&(j-=4)):0<=v(f,"text-align").toLowerCase().indexOf("right")&&(k-=i,n.IE&&(j-=4))}catch(m){}}try{if("relative"==v(q,"position")){var u=q.getBoundingClientRect();k-=u.left}}catch(o){}f=j;c=k;"top-right"==b[a].position?c+=i:"bottom-right"==b[a].position?(f+=h-14,c+=i):"bottom-left"==b[a].position&&(f+=h-14);f+=b[a].offsetTop;c+=b[a].offsetLeft;f+="top"==b[a].positionVertical()?0:-1;"expandable"==b[a].icon_display||"icon"==b[a].icon_display&&b[a].mini?"right"==b[a].positionHorizontal()&&
(c-=19):"right"==b[a].positionHorizontal()&&(c-=b[a].ciconWidth)}b[a].pxl=d;b[a].pxt=g;b[a].posTop=f;b[a].posLeft=c;b[a].spotTop=j;b[a].spotLeft=k}function ra(a,f,c){var d=c?f:B[f];if(B[a]!=d){if(y[a])for(var g in y[a])if(g==d)return;y[a][d]=c||b[f]}}function J(a,b){return"BAPACCEPT|"+b+"|"+a.nid+"|"+(a.aid||0)+"|"+(a.icaid||0)+"|"+(a.ecaid||0)+"|"+a.coid+"|"+a.ad_w+"|"+a.ad_h+"|"+a.rev+"|"+(a.cps||"-")+"|"+(a.seg||"-")}function F(a,b){var c;c=b?b.postMessage?b:b.contentWindow:j.parent;c.postMessage&&
c.postMessage(a,"*")}function Ya(){if(ka&&0<K[w]){var a,b=[];for(a=0;a<K[w];a++)0<=K[a].indexOf("BAPFRAMEBROADCAST")&&b.push(K[a]);for(;0<K[w];)a=K.pop(),0<=a.indexOf("BAPFRAMEBROADCAST")||b.push(a);for(;0<K[w];)b.push(K.pop());for(;0<b[w];)ya(b.pop())}else!ka&&0<K[w]&&I(Ya,1E3)}function ya(a){try{var f,c,d,g,e,h,i,k,r=a;a.data&&(r=a.data);if(0===r.indexOf("BAP"))if(ka){var m=r.substring(0,r.indexOf("|")||r[w]);if("BAPFRAMEBROADCAST"==m){if(j.top==window){d=r.split("|");g=d[1];var q=d[2],s=d[3],o=
d[4];for(i in b)if((h=b[i].ad)&&("IFRAME"==h.nodeName&&b[i].ad_h==o&&b[i].ad_w==s)&&(q==h.src||n.IE&&0<q.indexOf(h.src))){var x=a.source;F(J(b[i],g),x);n.IE||Q(i,"O");l("trigger-"+i)&&l("BAP-holder").removeChild(l("trigger-container-"+i));delete b[i];break}}}else if("BAPFRAMEID"==m){d=r.split("|");var t=d[2];k=u.getElementsByTagName("iframe");for(c=0;c<k[w];c++)k[c].src&&k[c].src==t&&(oa[c]=k[c],F("BAPTANGO?|"+c,k[c]))}else if("BAPTANGO?"==m){var p=r.substring(r.indexOf("|")+1);j.bap_frameid=p;F("BAPLETSDANCE|"+
p);j.notice&&F("BAPFRAME|"+B[j.notice]+"|"+p)}else if("BAPLETSDANCE"==m)f=r.substring(r.indexOf("|")+1),oa[f].tango=f;else if("BAPFRAME"==m){d=r.split("|");g=d[1];var v=d[2];ia[qa]=g;ia.contents=!0;for(i in b)if((h=b[i].ad)&&"IFRAME"==h.nodeName&&h.tango==v&&!b[i].noticeExists||"EXACT-FRAME"==h.nodeName){d="";if("EXACT-FRAME"==h.nodeName){k=u.getElementsByTagName("iframe");for(c=0;c<k[w];c++){var z=k[c];F(J(b[i],g),z);j.passFrame=k[c]}}else c=h,F(J(b[i],g),c),d=h;j.passNid=g;for(e in y[i]){var A=
d||j.passFrame;F(J(y[i][e],g),A)}Q(i,"O");l("trigger-"+i)&&l("BAP-holder").removeChild(l("trigger-container-"+i));delete b[i];break}}else if("BAPFLASH"==m){d=r.substring(r.indexOf("|")+1);g=d.substring(0,d.indexOf("|"));var qa=d.substring(d.indexOf("|")+1);for(i in b)if(h=b[i].ad,f=h.src||h.data||h.movie||"",h&&("OBJECT"==h.nodeName||"EMBED"==h.nodeName)&&f==qa&&!b[i].noticeExists||"EXACT-FRAME"==h.nodeName){try{h.flashGetMessage(J(b[i],g))}catch(E){}j.passFrame=h;j.passNid=g;for(e in y[i])try{h.flashGetMessage(J(b[i],
g))}catch(H){}Q(i,"O");l("trigger-"+i)&&l("BAP-holder").removeChild(l("trigger-container-"+i));delete b[i]}}else if("BAPACCEPT"==m){d=r.split("|");e={};var D=d[1];e.nid=d[2];e.aid=d[3];e.icaid=d[4];e.ecaid=d[5];e.coid=d[6];e.ad_w=d[7];e.ad_h=d[8];e.rev=d[9];d[10]&&"-"!==d[10]&&(e.cps=d[10]);d[12]&&"-"!==d[11]&&(e.seg=d[11]);0===e.ecaid&&delete e.ecaid;if(j.passFrame){var G=j.passFrame;F(J(e,j.passNid),G)}else for(i in b)g=B[i],D==g&&ra(i,e.nid,e)}else"BAPPING"==m?(d="",j.notice?(d="BAPPONG|"+b[j.notice].position,
F(d)):j.passFrame&&F("BAPPING|",j.passFrame)):"BAPPONG"==m&&F(r)}else K.push(r),I(Ya,1E3)}catch(L){}}function Ma(a){var f=l("bap-notice-"+a),c;if(V)f.style.left="right"==b[a].positionHorizontal()?"25px":"0",f.style.top="top"==b[a].positionVertical()?"260px":"290px";else{if("right"==b[a].positionHorizontal())try{c=b[a].spotLeft+b[a].ad_w-b[a].popupWidth,f.style.left=(c||0)+"px"}catch(d){}else f.style.left=(b[a].spotLeft||0)+"px";"top"==b[a].positionVertical()?f.style.top=b[a].posTop+"px":(c=s(f.style.height)||
b[a].popupHeight,f.style.top=(0<b[a].spotTop+b[a].ad_h-c?b[a].spotTop+b[a].ad_h-c:0)+"px");n.IE&&(n.QuirksMode&&b[a].popupWidth&&"none"!=f.style.display)&&(f.style.display="block",f.style.width=b[a].popupWidth+(728==b[a].popupWidth?4:0)+"px",f.style.margin="0 0");c=b[a].advLogo;l("bap-logo-"+a)&&(c&&"none"!=f.style.display&&!l("bap-logo-"+a).src)&&(l("bap-logo-"+a).src=c)}}function bb(a){function f(a){try{a.generic1&&(w=a.generic1,v=a.generic2,y=a.generic3,A=a.generic4,D=a.generic5,sg6=a.generic6,
o=a.link1,p=a.link2,t=a.link3,x=a.footer)}catch(b){}}if(!b[a].skipL2){var c="",d=z,g=b[a].ad_w,e=b[a].ad_h,h="",i="",k=l("BAP-holder"),j="",m="",o="More information &#38; opt-out options",p="What is interest based advertising?",t="Learn about your choices",x="Privacy Controls by Evidon&#153;",w="This ad has been matched to your interests. It was selected for you based on your browsing activity.",v="This ad may have been matched to your interests based on your browsing activity.",y="helped",A="determine that you might be interested in an ad like this.",
D="select this ad for you.";sg6="selected this ad for you.";b[a].noDefault||f(b[a].defTrans);f(b[a].translation);x='<span class="bap-gray">'+x+"</span>";"definitive"==b[a].behavioral?(h=w,b[a].advName&&(h+="<br><br>"+b[a].server.name+" "+y+" "+b[a].advName+" "+A)):"single"==b[a].behavioral?(h=v,b[a].advName&&(h+="<br><br>"+b[a].advName+" "+sg6)):"uncertain"==b[a].behavioral?(h=v,b[a].advName&&(h+="<br><br>"+b[a].server.name+" "+y+" "+b[a].advName+" "+D)):"custom"==b[a].behavioral&&(h=b[a].behavioralCustomMessage);
b[a].ad_z&&(i="z-index:"+(s(b[a].ad_z)+1)+";");d=190<=g&&300>g&&145<=e&&250>e?5:300<=g&&250<=e?1:5;160==g&&600==e&&(d=2);728<=g&&990>=g&&(90<=e&&125>=e)&&(d=6);if(1==d)j=n.IE&&n.QuirksMode?' style="width:294px !important"':"",m=n.IE&&n.QuirksMode?"width:296px !important;":"width:auto !important;max-width:299px;min-width:276px;",c='<div id="bap-notice-'+a+'" class="bap1 bap-notice" style="'+m+";display:none;"+i+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle('+a+');return false;">[ X ]</div><div class="bap-img-container">'+
(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+h+'</p><div class="bap-link-div"'+j+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+o+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+
j+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+p+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"'+j+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div"'+j+">"+b[a].advMessage+"</div>")),c+='<div class="bap-link-div"'+
j+">"+x+"</div></div></div>";else if(2==d)c='<div id="bap-notice-'+a+'" class="bap2 bap-notice" style="width:156px;display:none;'+i+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img src=\""+b[a].advLogo+'" border="0"></a>':'<img src="'+b[a].advLogo+
'" border="0">':"")+"</div><p>"+h+'</p><div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+o+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+p+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&
b[a].advMessage?c+='<div class="bap-link-div"><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+"&nbsp;&raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div">'+b[a].advMessage+"</div>")),c+='<div class="bap-link-div">'+x+"</div></div></div>";else if(5==d)c+='<div id="bap-notice-'+a+'" class="bap5 bap-notice" style="display:none;'+i+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+
"'));return false;\">[ X ]</div><p>"+h+' <a class="bap-blue-link" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.link('bap-link-1-"+a+"', '"+Wa+"more_info/"+B[a]+"')\">"+t+'</a></p><div class="bap-link-div">'+x+"</div></div></div>";else if(6==d){m=n.IE?n.QuirksMode?"width: 728px !important;":"min-width: 675px !important; width: auto !important;":"";j=n.IE&&n.QuirksMode?' style="width:275px !important; height: 20px;"':"";if(b[a].hideCustom&&
b[a].hideWhatIs)c+="<style>#bap-first-link-div { padding-top:45px !important; }</style>";else if(b[a].hideCustom||b[a].hideWhatIs)c+="<style>#bap-first-link-div { margin-top: 20px !important; }</style>";c=c+('<div id="bap-notice-'+a+'" class="bap6 bap-notice" style="display:none;'+m+i+'"><div class="bap-div"><div id="bap-gradient-1" class="bap-gradient"><div id="bap-first-link-div" class="bap-link-div"'+j+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+
a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+o+" &raquo;</a></div>")+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+j+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+p+" &raquo;</a></div>");b[a].hideCustom||(c=b[a].advLink&&b[a].advMessage?c+('<div class="bap-link-div"'+j+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+
" &raquo;</a></div>"):b[a].advMessage?c+('<div class="bap-link-div"'+j+">"+b[a].advMessage+"</div>"):c+"&nbsp;");c+='<div class="bap-link-div"'+j+">"+x+'</div></div><div id="bap-gradient-2" class="bap-gradient"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img src=\""+b[a].advLogo+
'" border="0"></a>':'<img src="'+b[a].advLogo+'" border="0">':"")+"</div><p>"+h+"</p></div></div></div>"}k||(k=u.createElement("div"),k.setAttribute("id","BAP-holder"),V&&(q=l("yfi_left")),q.appendChild(k),k=l("BAP-holder"));k.innerHTML+=c;Da(d)}}function H(a){var b;if(!a||!a.ownerDocument)return z;if(a===a.ownerDocument.body){b=q.offsetTop;var c=q.offsetLeft,a=u.createElement("div"),d,g,e=za(v(q,"marginTop"))||0;a.style.position="absolute";a.style.top=0;a.style.left=0;a.style.margin=0;a.style.border=
0;a.style.width="1px";a.style.height="1px";a.style.visibility="hidden";a.innerHTML='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';q.insertBefore(a,q.firstChild);d=a.firstChild;g=d.firstChild;g.style.position="fixed";g.style.top="20px";g.style.position=g.style.top=
"";d.style.overflow="hidden";d.style.position="relative";q.removeChild(a);q.offsetTop!==e&&(b+=za(v(q,"marginTop"))||0,c+=za(v(q,"marginLeft"))||0);return{top:b,left:c}}try{b=a.getBoundingClientRect()}catch(h){}d=a.ownerDocument;c=d.documentElement;if(!b)return b?{top:b.top,left:b.left}:{top:0,left:0};d=d.body;a=a&&"object"===typeof a&&"setInterval"in a?a:9===a.nodeType?a.defaultView||a.parentWindow:!1;return{top:b.top+(a.pageYOffset||Aa&&c.scrollTop||d.scrollTop)-(c.clientTop||(n.IE&&n.QuirksMode?
d.clientTop:0)||0),left:b.left+(a.pageXOffset||Aa&&c.scrollLeft||d.scrollLeft)-(c.clientLeft||(n.IE&&n.QuirksMode?d.clientLeft:0)||0)}}var o={},S=[1525,1598],Ca=!1,da=!1,ka=!1,ca=!1,Qa="811",eb="2",t="row",Ja="_us",R={CSS_COMMON:".bap-blue,.bap-close,.bap-div,.bap-gradient,.bap-gray,.bap-img-container,.bap-notice,.bap-link-div{color:#000;white-space:normal;word-wrap:normal;vertical-align:middle!important;margin:0;padding:0;border:0;outline:0;font-family:Arial!important;font-size:100%;border-collapse:collapse;border-spacing:0;line-height:13px;list-style:none;letter-spacing:0!important;text-align:left;}.bap-notice{background-color:#FFF;padding:2px;font-size:16px;line-height:13px;z-index:9991;top:-100px;left:-100px;}.bap-blue,.bap-blue:link,.bap-blue:visited{color:#2b2f98;}.bap-close{width:20px;color:#707070;font-size:10px;font-weight:bold;margin-left:-22px;position:relative;top:1px;left:100%;cursor:pointer;}.bap-div{border:1px solid #ababab;}.bap-div p{float:none;padding:0;}.bap-gray,.bap-gray:visited{color:#444;}.bap-img-container a{vertical-align:middle;display:table-cell;height:45px;}.bap-link-div{height:14px;color:#2b2f98;border-top:1px solid #ababab;padding:3px 10px 4px 10px;text-decoration:none;font-size:.67em!important;font-weight:bold;}.bap-link-div a,.bap-link-div span{text-decoration:none;font-size:inherit;font-weight:bold;}#BAP-holder img{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;max-width:100%;box-shadow:0 0!important;-moz-box-shadow:0 0!important;-webkit-box-shadow:0 0!important;background:none!important;}#BAP-holder{position:static!important;}#BAP-holder .bap-trigger{z-index:9990;}.bap-trigger{cursor:pointer;display:block;font-family:Arial;font-size:8pt;white-space:nowrap;}",
CSS_1:".bap1 .bap-img-container{margin:-18px 0 9px 10px;height:45px;position:static;}.bap1 .bap-img-container img{margin-top:6px!important;}.bap1 p{font-size:.7em;margin:4px 5px 0 10px;padding-bottom:6px;line-height:13px;width:259px;}.bap1 .bap-close{<\!--[if lte IE 7]>top:0;left:273px!important;<![endif]--\>;}",CSS_2:".bap2 .bap-close{z-index:1;}.bap2 .bap-close{<\!--[if lte IE 7]>top:0;left:152px!important;<![endif]--\>;}.bap2 .bap-gray,.bap-gray:visited{padding-right:0!important;word-spacing:-2px;font-size:.8em;}.bap2 .bap-img-container{position:relative;top:-7px;margin-left:10px;}.bap2 .bap-link-div{height:100%;}.bap2 .bap-notice{font-size:12px;}.bap2 .bap-img-container img{display:block;margin-top:10px;}.bap2 p{font-size:11px;margin:2px 5px 0 10px;padding-bottom:7px;line-height:13px;}",
CSS_5:".bap5 .bap-gray,.bap-gray:visited{font-size:95%;}.bap5 .bap-link-div{background-color:#dcdcdc;font-size:.8em;padding:3px 3px 4px 6px;}.bap5{font-size:12px;width:190px;}.bap5 .bap-spacer-div{height:1px;}.bap5 p{font-size:.8em;margin:3px 6px 0 5px;padding-bottom:3px;line-height:13px;}.bap5 .bap-close{<\!--[if lte IE 7]>top:0;left:185px!important;<![endif]--\>;}",CSS_6:".bap6 .bap-close{margin-left:0;display:inline;float:right;right:10px;left:0!important;}.bap6 .bap-div{height:84px;min-width:688px;}.bap6 .bap-gradient{float:left;height:84px;}.bap6 .bap-img-container{float:right;clear:right;margin-top:10px;height:45px;width:115px;}.bap6 .bap-link-div{padding:4px 10px 3px 10px;overflow:hidden;}.bap6 .bap-link-div a,.bap6 .bap-link-div span{display:block;width:auto!important;max-width:275px;min-width:210px;line-height:130%;}.bap6 p{font-size:.7em;width:310px;margin:5px 0 0 10px;line-height:13px;}#bap-gradient-1{border-right:1px solid #ababab;width:auto!important;max-width:280px;min-width:230px;}#bap-gradient-2{width:441px;}#bap-first-link-div{border:none;}",
options:{}},j=window,u=document,b=R.options,z=null,I=setTimeout,s=parseInt,za=parseFloat,V=0<=location.href.indexOf("tech-ticker"),w="length",E="//c.betrad.com",Za=E+"/a/",Wa="http://info.evidon.com/",q=u.getElementsByTagName("body")[0],Sa={},oa={},y={},ua=0,fa,$=[],K=[],ia={},aa={},B={},Ra={},ba="",Z=u.domain,na,n,p=navigator.userAgent,m="[object Opera]"==Object.prototype.toString.call(j.opera),D=p.substring(p.indexOf("Version")+"Version"[w]+1);try{D=D.substring(0,D.indexOf(" "))}catch(fb){}n={IE:!!j.attachEvent&&
!m&&u.createStyleSheet,IE6:-1<p.indexOf("MSIE 6"),IE7:-1<p.indexOf("MSIE 7"),IE8:-1<p.indexOf("MSIE 8"),Opera:m,Gecko:-1<p.indexOf("Gecko")&&-1===p.indexOf("KHTML"),Safari:-1<p.indexOf("Safari")&&-1>=p.indexOf("Chrome"),Chrome:!!p.match("Chrome"),QuirksMode:"BackCompat"==u.compatMode,SafariVersion:D};var Ea=top.location!=location,Xa,p=[0,0,0],m=z,D=navigator,Ba=!1;if("undefined"!=typeof D.plugins&&"object"==typeof D.plugins["Shockwave Flash"]){if((m=D.plugins["Shockwave Flash"].description)&&!("undefined"!=
typeof D.mimeTypes&&D.mimeTypes["application/x-shockwave-flash"]&&!D.mimeTypes["application/x-shockwave-flash"].enabledPlugin))Ba=!0,m=m.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),p[0]=s(m.replace(/^(.*)\..*$/,"$1"),10),p[1]=s(m.replace(/^.*\.(.*)\s.*$/,"$1"),10),p[2]=/[a-zA-Z]/.test(m)?s(m.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if("undefined"!=typeof j.ActiveXObject)try{var A=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(A&&(m=A.GetVariable("$version")))m=m.split(" ")[1].split(","),Ba=!0,p=
[s(m[0],10),s(m[1],10),s(m[2],10)]}catch(gb){}Xa={x:Ba,v:p};var pa,Fa,Aa=z,A=u.createElement("div");A.style.width=A.style.paddingLeft="1px";q.appendChild(A);Aa=2===A.offsetWidth;q.removeChild(A).style.display="none";try{ea(window,"message",ya)}catch(hb){}j._bao&&N(_bao);o.options=b;o.flashPostMessage=function(a){ya({data:a})};o.createL2=function(a){var f=l("bap-notice-"+a);f.style.position="absolute";Ua(f);b[a].popupHeight=f.offsetHeight;b[a].popupWidth=f.offsetWidth;Ma(a)};o.link=xa;o.iabLink=function(a){for(var b in y[a]);
xa("bap-link-2-"+a,"http://www.youronlinechoices.com/")};o.moreInfoLink=function(a){xa("bap-link-1-"+a,Va(a))};o.moreInfoHref=Va;o.toggle=Ua;o.expandIcon=function(a){if(!b[a].expanded){var f=E+"/icon/c_"+b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Ja)+".png",c=l("trigger-"+a),d=H(c).left;"right"==b[a].positionHorizontal()&&(d=d+19-b[a].ciconWidth);c.style.left=d+"px";c.innerHTML='<img src="'+f+'">';l("trigger-box-"+a).style.left=d+"px";l("trigger-box-"+a).style.width=b[a].ciconWidth+"px";l("trigger-box-image-"+
a).src=E+"/icon/box_"+b[a].ciconWidth+"_"+b[a].position+".png";b[a].expanded=!0;n.Opera&&I(function(){Ta(a)},3E3)}};o.collapseIcon=Ta;o.action=Q;o.start=N;o.copyJSON=function(a){try{aa[a.data.nid]=a,ba=""}catch(b){}};o.$=l;o.inject=function(a){Ca=!0;pa=a.rh;T=a.checkChildren;Fa=a.getAdStandard;a.inject({isValidElement:va,getDims:la,checkElement:ma,getObjectEmbed:ga})};return o}();BAP.SVNREV="r811";