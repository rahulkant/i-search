/*!CK:4213387691!*//*1459132619,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8+z8C"]); }

__d("XBrowserPushDisabledController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/disabled\/",{});},null);
__d("XBrowserPushXOutController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/xout\/",{});},null);
__d("XServiceWorkerSessionChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/service_workers\/session\/persist\/",{});},null);
__d('BrowserPushSessionChange.react',['cx','fbt','ix','AsyncRequest','BanzaiLogger','Image.react','ImageBlock.react','LayerFadeOnHide','React','ReactLayeredComponentMixin','ReloadPage','XBrowserPushDisabledController','XBrowserPushXOutController','XServiceWorkerSessionChangeController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XUISpinner.react','XUIText.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('React').createClass({displayName:'BrowserPushSessionChange',mixins:[c('ReactLayeredComponentMixin')],propTypes:{onHide:k.func.isRequired,push:k.object.isRequired},getInitialState:function(){return {dialogShown:true,spin:false};},_onToggle:function(m){if(m)return;this.setState({dialogShown:false});this._logEvent('session_keep');var n=c('XServiceWorkerSessionChangeController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).setMethod('post').setData({app_id:this.props.push.appID}).setAllowCrossPageTransition(true).setHandler(function(o){this.props.onHide();}.bind(this)).send();},_logEvent:function(event){var m={event:event,appid:this.props.push.appID,surface:'session_change'};c('BanzaiLogger').log('BrowserPushLoggerConfig',m);},_doNotPersist:function(){this.setState({spin:true});this._logEvent('session_uninstall');this._logEvent('xout');var m=c('XBrowserPushXOutController').getURIBuilder().getURI(),n=function(){this.props.push.unregisterPushAndSW(c('XBrowserPushDisabledController'),c('AsyncRequest')).then(function(o){c('ReloadPage').now();})['catch'](function(o){throw o;});}.bind(this);new (c('AsyncRequest'))().setURI(m).setMethod('post').setHandler(n).setAllowCrossPageTransition(true).send();},componentDidMount:function(){this._logEvent('session_change_prompt');},renderLayers:function(){if(!this.state.dialogShown)return {};var m=j('/images/notifications/potsy_jump.png');return {dialog:c('React').createElement(c('XUIDialog.react'),{shown:true,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},onToggle:this._onToggle,width:445},c('React').createElement(c('XUIDialogTitle.react'),null,i._("Desktop Notifications Are On")),c('React').createElement(c('XUIDialogBody.react'),null,this.state.spin?c('React').createElement(c('XUISpinner.react'),{size:'large'}):c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement(c('Image.react'),{src:m,alt:i._("Desktop Notifications Are On")}),c('React').createElement('div',null,c('React').createElement('div',{className:"_3-8h"},c('React').createElement(c('XUIText.react'),{size:'large'},i._("When you get a new notification, you'll see it in the corner of your screen."))),c('React').createElement('div',{className:"_3-8h"},c('React').createElement(c('XUIText.react'),{size:'small'},i._("To be sure you get notifications, you'll now stay logged into Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.")))))),c('React').createElement(c('XUIDialogFooter.react'),null,c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:i._("Undo"),onClick:this._doNotPersist}),c('React').createElement(c('XUIDialogOkayButton.react'),{use:'confirm',action:'cancel'})))};},render:function(){return (c('React').createElement('span',null));}});f.exports=l;},null);
__d('NotificationPermissionNotice.react',['cx','fbt','Event','Keys','React','ReactLayeredComponentMixin','XUIAmbientNUX.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=[],k=c('React').PropTypes,l=c('React').createClass({displayName:'NotificationPermissionNotice',mixins:[c('ReactLayeredComponentMixin')],propTypes:{onHide:k.func.isRequired,shortText:k.bool,browserName:k.string.isRequired},componentDidMount:function(){j.push(c('Event').listen(window,'mousedown',this.props.onHide));j.push(c('Event').listen(window,'keydown',function(event){if(event.keyCode===c('Keys').ESC)this.props.onHide();}.bind(this)));},componentWillUnmount:function(){while(j.length>0){var m=j.pop();m.remove();}},renderLayers:function(){var m=this.props.shortText?i._("Click the lock to give {browser_name} permission to send you desktop notifications.",[i.param('browser_name',this.props.browserName)]):i._("If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",[i.param('browser_name',this.props.browserName)]);return {nux:c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:function(){return this.refs.noticeAnchor;}.bind(this),shown:true,position:'below',onCloseButtonClick:this.props.onHide},m)};},render:function(){return (c('React').createElement('span',{ref:'noticeAnchor',className:"_1_i1"}));}});f.exports=l;},null);
__d('Spotlight',['csx','cx','Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','joinClasses','mixin'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('classWithMixins')(c('Layer'),c('mixin')(c('ArbiterMixin'))));k=j&&j.prototype;function l(n,o){'use strict';k.constructor.call(this,n,o);this.stageMinSize=new (c('Vector'))(0,0);this.stagePadding=new (c('Vector'))(0,0);}l.prototype._buildWrapper=function(n,o){'use strict';var p=c('joinClasses')("_n8 _3qx",n.rootClassName);return (c('JSXDOM').div({className:p},c('JSXDOM').div({className:"_n9"},o)));};l.prototype._getDefaultBehaviors=function(){'use strict';return k._getDefaultBehaviors.call(this).concat([m,c('LayerAutoFocus'),c('LayerTabIsolation'),c('ModalLayer')]);};l.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=c('DOM').find(this.getRoot(),"div._n3");return this._content;};l.prototype.configure=function(n){'use strict';if(n.stageMinSize)this.stageMinSize=n.stageMinSize;if(n.stagePadding)this.stagePadding=n.stagePadding;};l.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};l.prototype.updatePermalink=function(n){'use strict';this.inform('permalinkchange',n);};Object.assign(l.prototype,{stageMinSize:null,stagePadding:null});function m(n){'use strict';this._layer=n;}m.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(n,o){if(n==='show'){c('Arbiter').inform('layer_shown',{type:'Spotlight'});}else c('Arbiter').inform('layer_hidden',{type:'Spotlight'});});};m.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(m.prototype,{_subscription:null});f.exports=l;},null);
__d('Spotlight.react',['LayerHideOnBlur','LayerHideOnEscape','ReactLayer','Spotlight'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('ReactLayer').createClass({getDefaultEnabledBehaviors:function(){return {hideOnBlur:c('LayerHideOnBlur'),hideOnEscape:c('LayerHideOnEscape')};},createLayer:function(i){var j=this.enumerateBehaviors(this.props.behaviors),k={addedBehaviors:j,rootClassName:this.props.rootClassName},l=new (c('Spotlight'))(k,i);l.conditionShow(this.props.shown);if(this.props.onBeforeHide)l.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)l.subscribe('hide',this.props.onHide);return l;},receiveProps:function(i){this.layer.conditionShow(i.shown);}});f.exports=h;},null);
__d('NotificationPermissionRequest.react',['cx','Spotlight.react','React','ReactLayeredComponentMixin'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'NotificationPermissionRequest',mixins:[c('ReactLayeredComponentMixin')],propTypes:{onHide:i.func.isRequired},renderLayers:function(){return {spotlight:c('React').createElement(c('Spotlight.react'),{shown:true,onHide:this.props.onHide},c('React').createElement('div',{className:"_n3"}))};},render:function(){return c('React').createElement('span',null);}});f.exports=j;},null);
__d("ClientServiceWorkerMessage",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k;}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new self.MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2]);};f.exports=h;},null);
__d('BrowserPushCommands',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browser_push_ack',i='browser_push_redirect',j='browser_push_window_visible',k={ACK:h,REDIRECT:i,WINDOW_VISIBLE:j};f.exports=k;},null);
__d('BrowserPushMessageHandler',['BrowserPushCommands','EventListener','isFacebookURI','URISchemes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(event){if(event.data.command&&event.data.command===c('BrowserPushCommands').REDIRECT){if(typeof window.onbeforeunload()==='undefined'){event.ports[0].postMessage({command:c('BrowserPushCommands').ACK,success:true});}else{event.ports[0].postMessage({command:c('BrowserPushCommands').ACK,success:false});return;}var j=event.data.uri;if(/^([^.:/?#]+):/.test(j)&&!c('URISchemes').isAllowed(/^([^.:/?#]+):/.exec(j)[0])&&c('isFacebookURI')(j))throw new Error('goURI: URI scheme rejected, URI: '+j);window.location.href=j;}}var i={registerRedirectHandler:function(){c('EventListener').listen(window,'message',function(event){if(event.origin==="")h(event);});if(navigator.serviceWorker&&navigator.serviceWorker.addEventListener)navigator.serviceWorker.addEventListener('message',function(event){if(navigator.serviceWorker&&navigator.serviceWorker.controller&&event.target.controller===navigator.serviceWorker.controller||new RegExp('^'+window.location.protocol+'//'+window.location.host+'$').test(event.origin))h(event);});}};f.exports=i;},null);
__d('BrowserPushVisibilityChanger',['BrowserPushCommands','ClientServiceWorkerMessage','Visibility'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){new (c('ClientServiceWorkerMessage'))(c('BrowserPushCommands').WINDOW_VISIBLE,null).sendViaController();}var i={listenForVisibility:function(){if(!c('Visibility').isHidden())h();c('Visibility').addListener(c('Visibility').VISIBLE,h);}};f.exports=i;},null);
__d('ServiceWorkerRegistration',['Promise'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='serviceWorker' in navigator;function i(){var k=navigator.serviceWorker;if(!h||!k)throw new Error('serviceWorker is not supported in this browser');return k;}var j={isSupported:function(){return h;},registerWorkerIfUnregistered:function(k){var l=i();return new (c('Promise'))(function(m,n){this.getWorkerRegistration(k).then(function(o){if(!o){l.register(k).then(function(){l.ready.then(m);});}else m(o);});}.bind(this));},getWorkerRegistration:function(k){var l=i();return l.getRegistration(k);}};f.exports=j;},null);
__d('PushRegistration',['Promise','BrowserPushMessageHandler','BrowserPushVisibilityChanger','ClientServiceWorkerMessage','Map','ServiceWorkerRegistration'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=window.Notification,i=new (c('Map'))();j.get=function(k,l){'use strict';if(i.has(l))return i.get(l);var m=new j(k,l);i.set(l,m);return m;};function j(k,l){'use strict';this.$PushRegistration3=k;this.appID=l;if(!j.$PushRegistration1&&!j.$PushRegistration2){j.$PushRegistration1=false;j.$PushRegistration2=false;}}j.prototype.getPushSubscription=function(){'use strict';return new (c('Promise'))(function(k,l){if(!h||h.permission==='denied')l(new Error('No permission or not supported'));c('ServiceWorkerRegistration').getWorkerRegistration(this.$PushRegistration3).then(function(m){if(!m){k(null);return;}m.pushManager.getSubscription().then(function(n){k(n);})['catch'](l);})['catch'](l);}.bind(this));};j.prototype.$PushRegistration4=function(k){'use strict';var l=k.endpoint;if('subscriptionId' in k&&!new RegExp('/'+k.subscriptionId+'$').test(l))l+='/'+k.subscriptionId;return l;};j.prototype.$PushRegistration5=function(k,l,m,n){'use strict';var o=this.$PushRegistration4(m),p=null;if(m.getKey){var q=Array.from(new Uint8Array(m.getKey('p256dh'))),r=String.fromCharCode.apply(null,q);p=window.btoa(r);}var s=k.getURIBuilder().getURI(),t=new l(s);t.setData({app_id:this.appID,push_endpoint:o,endpoint_key:p});t.setMethod('post');if(t.setHandler)t.setHandler(function(u){if(u.payload&&u.payload.session_change)n();});t.send();};j.prototype.getSubscription=function(){'use strict';return new (c('Promise'))(function(k,l){this.getPushSubscription().then(function(m){if(m){k(this.$PushRegistration4(m));}else k(null);}.bind(this))['catch'](l);}.bind(this));};j.prototype.maybeRegisterPushAgain=function(k,l,m){'use strict';return new (c('Promise'))(function(n,o){this.getPushSubscription().then(function(p){if(p){this.$PushRegistration5(k,l,p,m);n(this.$PushRegistration4(p));}else n(null);}.bind(this))['catch'](function(){n(null);});}.bind(this));};j.prototype.$PushRegistration6=function(k,l,m){'use strict';return new (c('Promise'))(function(n,o){if(j.$PushRegistration2&&!m){o(new Error('sending disable info already'));return;}j.$PushRegistration2=true;var p=k.getURIBuilder().getURI(),q=new l(p.toString());q.setData({appid:this.appID,from_browser_settings:m});q.setMethod('post');if(q.listen){q.listen('finally',n);q.listen('fail',function(){j.$PushRegistration2=false;o();});}else if(q.setErrorHandler&&q.setHandler){q.setErrorHandler(function(){j.$PushRegistration2=false;o();});q.setHandler(n);}else n();q.send();}.bind(this));};j.prototype.isPushRegistered=function(k,l,m,n,o,p){'use strict';c('BrowserPushMessageHandler').registerRedirectHandler();return new (c('Promise'))(function(q,r){this.getPushSubscription().then(function(s){q(!!s||k&&!j.pushPermissionIsPending());if(s){if(o){s.unsubscribe().then(function(){this.registerPush(l,n,p);}.bind(this))['catch'](function(){});}else c('BrowserPushVisibilityChanger').listenForVisibility();}else if(!s&&k)if(j.pushPermissionIsOn()){this.registerPush(l,n,p)['catch'](function(){});}else this.$PushRegistration6(m,n,false);}.bind(this))['catch'](function(){if(k){this.$PushRegistration6(m,n,false);r();}}.bind(this));}.bind(this));};j.prototype.$PushRegistration7=function(){'use strict';return new (c('Promise'))(function(k,l){h.requestPermission(k);});};j.prototype.registerPushAndWaitForEndpoint=function(k,l,m){'use strict';return new (c('Promise'))(function(n,o){this.$PushRegistration8(k,l,m,true,null).then(function(p){if(typeof p!=='string'){o(new Error('registerPushImpl did not return an endpoint'));return;}n(p);})['catch'](o);}.bind(this));};j.prototype.registerPush=function(k,l,m){'use strict';return this.registerPushWithFinishedCallBack(k,l,m,null);};j.prototype.registerPushWithFinishedCallBack=function(k,l,m,n){'use strict';return new (c('Promise'))(function(o,p){this.$PushRegistration8(k,l,m,false,n).then(function(q){if(typeof q!=='boolean'){p(new Error('registerPushImpl did not return a boolean'));return;}o(q);})['catch'](p);}.bind(this));};j.prototype.$PushRegistration8=function(k,l,m,n,o){'use strict';if(j.$PushRegistration1)return new (c('Promise'))(function(p,q){q(new Error('registering already'));});j.$PushRegistration1=true;return new (c('Promise'))(function(p,q){var r=c('ServiceWorkerRegistration').registerWorkerIfUnregistered(this.$PushRegistration3),s=this.$PushRegistration7();c('Promise').all([r,s]).then(function(t){var u=t[0];if(!j.pushPermissionIsOn()){u.unregister();throw new Error('Push permission was denied');}if(!n)p(true);u.pushManager.subscribe({userVisibleOnly:true}).then(function(v){if(n)p(this.$PushRegistration4(v));this.$PushRegistration5(k,l,v,m);if(o)o();c('BrowserPushVisibilityChanger').listenForVisibility();}.bind(this))['catch'](function(v){j.$PushRegistration1=false;u.unregister();q(v);});}.bind(this))['catch'](function(t){j.$PushRegistration1=false;q(t);});}.bind(this));};j.prototype.unregisterPushAndSW=function(k,l){'use strict';return new (c('Promise'))(function(m,n){this.$PushRegistration6(k,l,true).then(function(){var o=new (c('ClientServiceWorkerMessage'))('unregister',{},m);o.sendViaController();})['catch'](n);}.bind(this));};j.pushPermissionIsPending=function(){'use strict';return h&&h.permission==='default';};j.pushPermissionIsOn=function(){'use strict';return h&&h.permission==='granted';};f.exports=j;},null);
__d("XPushRegisterServiceWorkerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/push\/register\/service_worker\/",{});},null);
__d('BrowserPushDirectPromptInstaller',['Arbiter','AsyncRequest','BanzaiLogger','BrowserPushSessionChange.react','DOM','NotificationPermissionNotice.react','NotificationPermissionRequest.react','PushRegistration','React','ReactDOM','XBrowserPushDisabledController','XBrowserPushXOutController','XPushRegisterServiceWorkerController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(event,m){var n={event:event,appid:m,surface:'prompt'};c('BanzaiLogger').log('BrowserPushLoggerConfig',n);}function j(m){if(!h){h=true;c('ReactDOM').unmountComponentAtNode(m);}}function k(m,n){var o=c('DOM').insertBefore(m,c('DOM').create('span')),p=o.pop();c('ReactDOM').render(c('React').createElement(c('BrowserPushSessionChange.react'),{onHide:function(){c('ReactDOM').unmountComponentAtNode(m);},push:n}),p);}var l={installPush:function(m,n,o,p,q,r,s){var t=c('PushRegistration').get(m,n);t.isPushRegistered(p,c('XPushRegisterServiceWorkerController'),c('XBrowserPushDisabledController'),c('AsyncRequest'),!!r,function(){k(o,t);}).then(function(u){if(u||q)return;if(c('PushRegistration').pushPermissionIsPending())c('ReactDOM').render(c('React').createElement(c('NotificationPermissionRequest.react'),{onHide:function(){j(o);}}),o);i('turn_on',n);t.registerPushWithFinishedCallBack(c('XPushRegisterServiceWorkerController'),c('AsyncRequest'),function(){k(o,t);},function(){c('Arbiter').inform('BrowserPushInstall/installed');}).then(function(){j(o);i('install',n);})['catch'](function(v){j(o);if(window.Notification&&window.Notification.permission==='denied'){c('ReactDOM').render(c('React').createElement(c('NotificationPermissionNotice.react'),{onHide:function(){c('ReactDOM').unmountComponentAtNode(o);},browserName:s}),o);i('deny',n);}else i('install_ignore',n);var w=c('XBrowserPushXOutController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(w).setMethod('post').send();i('xout',n);});})['catch'](function(){});}};f.exports=l;},null);
__d("XBrowserPushMuteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/mute\/",{push_endpoint:{type:"String",required:true},appid:{type:"Int",required:true},is_settings_page:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});},null);
__d('BrowserPushMuteOptions',['fbt','AsyncRequest','PushRegistration','React','ReactDOM','XBrowserPushMuteController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l,m){var n=c('PushRegistration').get(l,m);n.getPushSubscription().then(function(o){if(o){var p=c('XBrowserPushMuteController').getURIBuilder().setString('push_endpoint',o.endpoint).setInt('appid',m).getURI();new (c('AsyncRequest'))().setURI(p).setRelativeTo(k).send();}})['catch'](function(o){throw o;});}var j={showMuteOptions:function(k,l,m){if(!c('PushRegistration').pushPermissionIsOn())return;c('ReactDOM').render(c('React').createElement('a',{href:'#',onClick:function(){i(k,l,m);}},h._("Mute")),k);}};f.exports=j;},null);