/*1334341191,169893246,JIT Construction: v541027,en_US*/

if (!window.FB) {FB = {};} if(!FB.dynData) { FB.dynData = {"site_vars":{"canvas_client_compute_content_size_method":1,"use_postMessage":0,"use_xdProxy":0,"use_ui_server":1,"monitor_usage_regex":"somethingtoputhere.com|huffingtonpost.com|lala.com","monitor_usage_rate":0.05,"enable_custom_href":1},"ui_server_dialogs":{"bookmark.add":1,"friends.add":1},"resources":{"base_url_format":"http:\/\/{0}.connect.facebook.com\/","base_cdn_url":"http:\/\/static.ak.fbcdn.net\/","api_channel":1333985515,"api_server":1333985515,"www_channel":1333985476,"xd_proxy":1333985380,"xd_comm_swf_url":"http:\/\/connect.facebook.net\/rsrc.php\/v1\/yQ\/r\/f3KaqM7xIBg.swf","share_button":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yg\/r\/yZiDLhSvAE9.gif","login_img_dark_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y2\/r\/ECSptXRJiXu.gif","login_img_dark_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yN\/r\/WMAGVllinGS.gif","login_img_dark_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/CtXTsD9gwTy.gif","login_img_dark_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yg\/r\/di8GQ4yWYmF.gif","login_img_dark_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yz\/r\/WuhUANysBjg.gif","login_img_light_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yG\/r\/HPpl_Q9ir03.gif","login_img_light_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yG\/r\/QVAKZwo2mNu.gif","login_img_light_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yA\/r\/11hJsvQEMup.gif","login_img_light_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/RwaZQIP0ALn.gif","login_img_light_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y6\/r\/kGCxkZx-uZa.gif","login_img_white_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yu\/r\/HSGgAQzgm6f.gif","login_img_white_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yJ\/r\/a3H8zoa1Ymj.gif","login_img_white_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yK\/r\/McNhTwo6iLp.gif","login_img_white_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y_\/r\/vE_oh0zqP1Z.gif","login_img_white_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yc\/r\/bGxF25CxBsQ.gif","logout_img_small":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/_gsP01S3mwQ.gif","logout_img_medium":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y2\/r\/NhZ-RyMbOUr.gif","logout_img_large":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yf\/r\/C9lMHpC5ik8.gif"},"legacy_component_map":{"connect-css":"FB.Connect-css","FB.SharePro":"FB.Share","Api":"connect-old-features","Base":"connect-old-features","CanvasUtil":"connect-old-features","Common":"connect-old-features","Connect":"connect-old-features","Integration":"connect-old-features","XdComm":"connect-old-features","XFBML":"connect-old-features"}};} if (!FB.locale) {FB.locale = "en_US";} if (!FB.localeIsRTL) {FB.localeIsRTL = false;}


if(!window.FB)FB={};if(!FB.Monitor)FB.Monitor={wrapObject:function(a,b,c){if(typeof(a)!="object")return a;if(!FB.Monitor.loggingEnabled())return a;if(b=='FB.Debug'||b=='FB.HiddenContainer'||b=='FB.XdComm.Server'||b.indexOf('FBIntern')==0)return a;for(var d in a){var e=a[d];if(!a.hasOwnProperty(d)||typeof(e)!='function'||e.wrapped)continue;var f={containerName:b,functionName:d};a[d]=FB.Monitor._monitorWrapper(e,a,c,f);a[d].wrapped=true;}return a;},disableLogging:function(){FB.Monitor.loggingEnabledCache=false;},loggingEnabled:function(){if(FB.Monitor.loggingEnabledCache===null){var a=FB.dynData&&FB.dynData.site_vars&&FB.dynData.site_vars.monitor_usage_regex;if(!a){FB.Monitor.loggingEnabledCache=false;}else{var b=new RegExp(a),c=FB.dynData.site_vars.monitor_usage_rate;FB.Monitor.loggingEnabledCache=b.test(document.domain)?(Math.random()/c)<1:false;}}return FB.Monitor.loggingEnabledCache;},externalCallback:function(a){if(typeof(a)!='function')return a;return function(){var b=FB.Monitor.internalCallStackDepth;FB.Monitor.internalCallStackDepth=0;var c=Array.prototype.slice.call(arguments),d=a.apply(this,c);FB.Monitor.internalCallStackDepth=b;return d;};},_monitorWrapper:function(a,b,c,d){return function(){var e=Array.prototype.slice.call(arguments);context=c?this:(b||window);d=d||{containerName:'unknown',functionName:'unknown'};if(FB.Monitor.internalCallStackDepth==0)if(d.functionName.substr(0,1)!='_')FB.Monitor.logFunction(d,e);++FB.Monitor.internalCallStackDepth;var f=new Date();try{var g=a.apply(context,e);}finally{var h=new Date();--FB.Monitor.internalCallStackDepth;var i=h.getTime()-f.getTime();if(i)FB.Monitor.logFunction(d,[],i);}return g;};},logFunction:function(a,b,c){var d=[];for(var e=0;e<b.length;e++){var f=b[e];d[e]=f?f.toString():f;}FB.Monitor.log("functions",a.containerName+"."+a.functionName,{elapsed:c});},logXFBML:function(a){var b={};for(var c=0;c<a.attributes.length;++c){var d=a.attributes[c];if(d.specified!==false&&d.nodeName&&d.nodeValue&&d.nodeName!="class")b[d.nodeName]=d.nodeValue.toString();}var e=a.nodeName.toLowerCase();FB.Monitor.log("tags",e,{args:b});},log:function(a,b,c){if(!FB.Monitor.loggingEnabled())return;var d={functions:101,tags:102};c.lid=d[a];c.name=b;FB.Monitor.loggingQueue.push(c);FB.Monitor.scheduleSend();},scheduleSend:function(){if(!FB.Monitor.pendingTimer)FB.Monitor.pendingTimer=setTimeout(FB.Monitor.send,FB.Monitor.timerInterval);},send:function(){FB.Monitor.pendingTimer=false;var a=FB.Monitor.loggingEnabled();FB.Monitor.loggingEnabledCache=false;try{if(FB.MonitorSender){while(FB.Monitor.loggingQueue.length>0)if(!FB.MonitorSender.send())break;}else FB.Monitor.timerInterval*=1.2;}finally{if(FB.Monitor.loggingQueue.length!==0)FB.Monitor.scheduleSend();FB.Monitor.loggingEnabledCache=a;}},timerInterval:6*1000,internalCallStackDepth:0,loggingQueue:[],pendingTimer:false,loggingEnabledCache:null};
if(!window.FB)FB={};FB.forEach=function(a,b,c){if(Object.prototype.toString.apply(a)==='[object Array]'){if(a.forEach){a.forEach(b);}else for(var d=0,e=a.length;d<e;d++)b(a[d],d,a);}else for(var f in a)if(c||a.hasOwnProperty(f))b(a[f],f,a);};FB.copy=function(a,b,c){FB.forEach(b,function(d,e){if(c||typeof a[e]==='undefined')a[e]=d;});};FB.copy(FB,{$:function(a){return document.getElementById(a);},TypeLoader:{NOTIFY:{},LOADED_MODULES:{},LOADED_CLASSES:{},resolve:function(a,b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(f==='')continue;if(typeof a[f]==='undefined')if(c){a[f]={};}else return false;a=a[f];}return a;},provide:function(a,b,c){FB.Monitor.wrapObject(b,a,false);var d=this.resolve(window,a.split('.'),true);if(c||!this.LOADED_MODULES[a]){FB.copy(d,b,true);if(b._onLoad)d._onLoad();}this.LOADED_MODULES[a]=true;},subclass:function(a,b,c){if(this.LOADED_CLASSES[a])return;if(b!=='FB.Class'&&!this.LOADED_CLASSES[b]){FB.Log.debug('"'+a+'" needs to wait for "'+b+'"');var d=FB.redo(arguments,this);this.NOTIFY[b]?this.NOTIFY[b].push(d):this.NOTIFY[b]=[d];return;}var e=this.resolve(window,b.split('.')),f=e.extend(c),g=this.NOTIFY[a],h=a.split('.'),i=this.resolve(window,h,true),j=h.pop();FB.Monitor.wrapObject(f.prototype,a,true);FB.Monitor.wrapObject(f,a,false);FB.copy(f,i);this.resolve(window,h)[j]=f;this.LOADED_CLASSES[a]=true;if(g){FB.forEach(g,function(k){k();});delete this.NOTIFY[a];}}},bind:function(){var a=Array.prototype.slice.call(arguments),b=a.shift(),c=a.shift(),d=function(){++FB.Monitor.internalCallStackDepth;var e=b.apply(c,a.concat(Array.prototype.slice.call(arguments)));--FB.Monitor.internalCallStackDepth;return e;};d._targets=[c,b];return d;},redo:function(a,b){var c=Array.prototype.slice.call(a);c.unshift(b);c.unshift(a.callee);return FB.bind.apply(FB,c);},_secure:(window.location.href.indexOf('https')===0)||(window.name.indexOf('_fb_https')>-1),isSecure:function(){return FB._secure;}});FB.provide=FB.bind(FB.TypeLoader.provide,FB.TypeLoader);FB.subclass=FB.bind(FB.TypeLoader.subclass,FB.TypeLoader);
(function(){var a=false,b=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;FB.Class=function(){};FB.Class.extend=function(c){var d=this.prototype;a=true;var e=new this();a=false;FB.forEach(c,function(g,h){e[h]=typeof g==="function"&&typeof d[h]==="function"&&b.test(g)?(function(i,j){return function(){var k=this._super;this._super=d[i];var l=j.apply(this,arguments);this._super=k;return l;};})(h,g):g;});var f=function(){if(!a){var g;if(this instanceof f){g=this;}else{a=true;g=new f();a=false;}if(g.init)g.init.apply(g,arguments);return g;}};f.prototype=e;f.constructor=f;f.extend=FB.Class.extend;return f;};})();
FB.provide('FB.Log',{level:-1,Level:{DEBUG:3,INFO:2,WARNING:1,ERROR:0},_helper:function(){var a=Array.prototype.slice.call(arguments),b=a.shift(),c=a.shift();if(this.level>=c&&window.console)(console[b]||console.log).apply(console,a);}});FB.provide('FB.Log',{debug:FB.bind(FB.Log._helper,FB.Log,'debug',FB.Log.Level.DEBUG),info:FB.bind(FB.Log._helper,FB.Log,'info',FB.Log.Level.INFO),warn:FB.bind(FB.Log._helper,FB.Log,'warn',FB.Log.Level.WARNING),error:FB.bind(FB.Log._helper,FB.Log,'error',FB.Log.Level.ERROR)},true);
if(!window.FB)FB={};if(!FB.Type){FB.Type={createNamespace:function(a){var b=window,c=a.split('.');for(var d=0;d<c.length;d++){var e=c[d],f=b[e];if(!f)b[e]=f={};b=f;}return b;},createEnum:function(a,b,c){if(this.getObj(a))return;var d=function(){};d.prototype=b;for(var e in b)d[e]=b[e];if(c)d.__flags=true;this.setObj(a,d);},createClass2:function(cls,baseType){if(baseType&&typeof(baseType)=="string")baseType=eval(baseType);cls.prototype.constructor=cls;this.extend(cls,FB.Type.Methods);cls.__baseType=baseType||Object;if(baseType)cls.__basePrototypePending=true;},setObj:function(fullName,value){var i=fullName.lastIndexOf('.'),objName,scope=window;if(i>0){var ns=fullName.substring(0,i);this.createNamespace(ns);objName=fullName.substring(i+1);scope=eval(ns);}else objName=fullName;scope[objName]=value;},getObj:function(a){var b=window,c=a.split('.');for(var d=0;d<c.length;d++){var e=c[d];b=b[e];if(!b)break;}return b;},createClass:function(a,b){if(this.getObj(a))return;if(arguments.length==1&&typeof(a)!="string"){return this._createClass(a);}else this.setObj(a,this._createClass(b));},_createClass:function(a){var b=a.ctor||function(){};if(a.static_ctor)this.addStaticInit(a.static_ctor);if(a.instance)b.prototype=a.instance;if(a['static'])this.extend(b,a['static']);this.createClass2(b,a.base);return b;},addStaticInit:function(a){if(!FB.Type._pendingInits)FB.Type._pendingInits=[];FB.Type._pendingInits[FB.Type._pendingInits.length]=a;window.setTimeout(FB.Type.runPendingInits,0);},runPendingInits:function(){if(FB.Type._pendingInits){var a=FB.Type._pendingInits;FB.Type._pendingInits=null;var b=a.length;for(var c=0;c<b;c++)a[c]();}},extend:function(a,b){for(var c in b)a[c]=b[c];return a;},getInstanceType:function(a){return a.constructor;}};FB.Type.Methods={setupBase:function(){if(this.__basePrototypePending){var a=this.__baseType;if(a.__basePrototypePending)a.setupBase();for(var b in a.prototype){var c=a.prototype[b];if(!this.prototype[b])this.prototype[b]=c;}delete this.__basePrototypePending;}},constructBase:function(a,b){if(this.__basePrototypePending)this.setupBase();if(!b){this.__baseType.apply(a);}else this.__baseType.apply(a,b);},callBase:function(a,b,c){var d=this.__baseType.prototype[b];if(!c){return d.apply(a);}else return d.apply(a,c);},get_baseType:function(){return this.__baseType||null;}};}
FB.provide('FB.HiddenContainer',{_onLoad:function(){if(document.getElementById('FB_HiddenContainer')==null){var a;try{var c=window.navigator.userAgent.toLowerCase().indexOf('msie')>=0&&window.attachEvent;if((!c||document.readyState=='completed')&&document.body){a=document.createElement('div');a.id="FB_HiddenContainer";a.style.position="absolute";a.style.top="-10000px";a.style.width="0px";a.style.height="0px";document.body.appendChild(a);}}catch(b){a=null;}if(!a)document.write('<div id="FB_HiddenContainer" '+'style="position:absolute; top:-10000px; left:-10000px; width:0px; height:0px;" >'+'</div>');}},get:function(){return FB.$('FB_HiddenContainer');}});
FB.provide('FB.HiddenContainerLoader',{_onLoad:function(){FB.HiddenContainer.get();}});
FB.subclass('FB.Delegate','FB.Class',{});FB.provide('FB.Delegate',{Null:function(){},_create:function(a){var b=function(){if(a.length==2){return a[1].apply(a[0],arguments);}else{var c=a.slice();for(var d=0;d<c.length;d+=2)c[d+1].apply(c[d],arguments);return null;}};b._targets=a;return b;},create:function(a,b){if(!a)return b;return FB.Delegate._create([a,b]);},combine:function(a,b){if(!a){if(!b._targets)return FB.Delegate.create(null,b);return b;}if(!b){if(!a._targets)return FB.Delegate.create(null,a);return a;}var c=a._targets?a._targets:[null,a],d=b._targets?b._targets:[null,b];return FB.Delegate._create(c.concat(d));},remove:function(a,b){if(!a||(a===b))return null;if(!b)return a;var c=a._targets,d=null,e;if(b._targets){d=b._targets[0];e=b._targets[1];}else e=b;for(var f=0;f<c.length;f+=2)if((c[f]===d)&&(c[f+1]===e)){if(c.length==2)return null;c.splice(f,2);return FB.Delegate._create(c);}return a;}});if(!window.Delegate)window.Delegate=FB.Delegate;
if(!window.FB)FB={};if(!FB.Loader)FB.Loader={loaded:{},loading:{},loadedCss:{},loadedCallback:null,onScriptLoaded:function(a){var b=a.length;for(var c=0;c<b;c++){var d=a[c];FB.Loader.loaded[d]=true;}if(FB.Loader.loadedCallback)window.setTimeout(function(){FB.Loader.loadedCallback(a);},0);},loadCssComps:function(a){var b=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/css/'+a.join('/'));if(!this.loadedCss[b]){var c=document.createElement('link');c.setAttribute('rel','stylesheet');c.setAttribute('type','text/css');c.setAttribute('href',b);document.getElementsByTagName('head')[0].appendChild(c);this.loadedCss[b]=true;}},getStaticResourceUrl:function(a){var b=FB.dynData.resources.base_url_format,c=(b.indexOf('https')===0)?'www':'static.ak';return b.replace('{0}',c)+a;}};
if(!FB.Bootstrap){FB.Bootstrap={requireFeatures:function(a,b){if(FB.Bootstrap.isXdChannel)return;if(a&&a.length&&FB.dynData&&FB.dynData.legacy_component_map){var c=FB.dynData.legacy_component_map,d=[];for(var e=0,f=a.length;e<f;e++){var g=a[e];if(c[g]){d.push(c[g]);}else d.push(g);}a=d;}var h={features:a,callback:FB.Monitor.externalCallback(b),completed:false};if(FB.Bootstrap._checkRequest(h))return;FB.Bootstrap._featureReqQueue.push(h);FB.Loader.loadedCallback=FB.Delegate.combine(FB.Loader.loadedCallback,FB.Bootstrap._onCompLoaded);FB.Bootstrap._transformFeatureList(a);var i={},j=[],e,k=a.length,l=0;for(e=0;e<k;e++){var m=a[e];if(!(FB.Loader.loaded[m]))if(!(FB.Loader.loaded[m]||FB.Loader.loading[m])){i[m]=true;j[j.length]=m;}}j.sort();var n=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/js/'+j.join('/'));FB.Bootstrap.addScript(n);},_requireFeatures:function(a,b){this.requireFeatures(a,FB.bind(b));},_checkRequest:function(a){if(!a.completed){var b=0,c=a.features.length,d=0;for(b=0;b<c;b++){var e=a.features[b];if(FB.Loader.loaded[e])d++;}if(d==c){a.completed=true;if(a.callback)a.callback(true);}}return a.completed;},_transformFeatureList:function(a){var b={Api:true,CanvasUtil:true,Connect:true,XFBML:true},c=a.length,d=false,e={};for(var f=0;f<c;f++){e[a[f]]=true;if(b[a[f]])d=true;}if(d)for(var g in b)if(!e[g])a[a.length]=g;},ensureInit:function(a){if(!a)throw ("FB.ensureInit called without a valid callback");a=FB.Monitor.externalCallback(a);if(FB.Facebook&&FB.Facebook.get_initialized&&FB.Facebook.get_initialized().get_isReady()&&FB.Facebook.get_initialized().result)return a();FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){FB.Facebook.get_initialized().waitForValue(true,a);});},init:function(a,b,c){FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){if(FB.Facebook)FB.Facebook.init(a,b,c);});},addScript:function(a){var b,c=document.getElementsByTagName('script');if(c){var d=c.length;for(var e=0;e<d;e++){b=c[e];if(b.src==a)return;}}b=document.createElement("script");b.type="text/javascript";b.src=a;var f=document.getElementsByTagName('HEAD')[0]||document.body;f.appendChild(b);},setLocale:function(a,b){window.FB.locale=a;window.FB.localeIsRTL=b;},_initializeXdChannel:function(){FB.Bootstrap.isXdChannel=window.location.search.indexOf(FB.Bootstrap.fbc_channel_token)>=0;},_detectDocumentNamespaces:function(){if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');},createDefaultXdChannelUrl:function(){var a=location.protocol+'//'+location.hostname+location.pathname+location.search;if(location.search||location.search.length>0){a+='&';}else a+='?';a+='fbc_channel=1';return a;},_onCompLoaded:function(){var a=0,b=FB.Bootstrap._featureReqQueue.length;for(a=0;a<b;a++)FB.Bootstrap._checkRequest(FB.Bootstrap._featureReqQueue[a]);},_onLoad:function(){this._initializeXdChannel();this._detectDocumentNamespaces();},features:["XFBML","CanvasUtil"],fbc_channel_token:'fbc_channel=1',_featureReqQueue:[]};FB.Monitor.wrapObject(FB.Bootstrap,'FB.Bootstrap');window.FB_RequireFeatures=FB.Bootstrap.requireFeatures;window.FB.init=FB.Bootstrap.init;window.FB.ensureInit=FB.Bootstrap.ensureInit;FB.Bootstrap._onLoad();}
if(!window.FBIntern)FBIntern={};if(!FBIntern.XdReceiver){FBIntern.XdReceiver={delay:100,timerId:-1,dispatchMessage:function(){var a=document.URL,b=a.indexOf('#'),c;if(b>0){c=a.substring(b+1);}else{b=a.indexOf('fb_login&');if(b>0){c=a.substring(b+9);}else return;}var d='debug=1&';if(c.indexOf(d)==0)c=c.substring(d.length);var f,g=null;try{var i=window.parent;if(c.indexOf('fname=')==0){var j=c.indexOf('&'),k=c.substr(6,j-6);if(k=="_opener"){i=i.opener;}else if(k=="_oparen"){i=i.opener.parent;}else if(k!="_parent")i=i.frames[k];f=c.substr(j+1);}else{i=i.parent;f=c;}g=i.FB.XdComm.Server.singleton.onReceiverLoaded;}catch(h){if(h.number==-2146828218)return;}if(g){i.FB.XdComm.Server.singleton.onReceiverLoaded(f);if(FBIntern.XdReceiver.timerId!=-1){window.clearInterval(FBIntern.XdReceiver.timerId);FBIntern.XdReceiver.timerId=-1;}}else if(FBIntern.XdReceiver.timerId==-1)try{FBIntern.XdReceiver.timerId=window.setInterval(FBIntern.XdReceiver.dispatchMessage,FBIntern.XdReceiver.delay);}catch(h){}}};if(!(window.FB&&FB.Bootstrap&&!FB.Bootstrap.isXdChannel))try{FBIntern.XdReceiver.dispatchMessage();}catch(e){}}(function(){var a=document.getElementsByTagName('script'),b=a[a.length-1];if(b!=undefined){var c=b.getAttribute('fb-api-key'),d=b.getAttribute('fb-xd-receiver');if(c!=null)window.setTimeout(function(){FB.init(c,d);},0);}})();


if (FB && FB.Loader) { FB.Loader.onScriptLoaded(["FB.monitor-wrapper","FB.Prelude","FB.Class","FB.Log","FB.Type","FB.HiddenContainer","FB.HiddenContainerLoader","FB.Delegate","FB.Loader","FB.Bootstrap","XdCommReceiver"]); }