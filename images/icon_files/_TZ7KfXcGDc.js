/*!CK:27585850!*//*1459218477,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZPJDN"]); }

__d('rayInterceptsBox',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):void 0;!(typeof k[n]==='number')?h(0):void 0;});}var j={check:function(k,l){i(k,['minX','maxX','minY','maxY']);i(l,['x','y','dx','dy']);!(k.maxX>k.minX&&k.maxY>k.minY)?h(0):void 0;if(l.dx===0&&l.dy===0)return false;if(l.x>=k.minX&&l.x<=k.maxX&&l.y>=k.minY&&l.y<=k.maxY)return true;var m=(k.minX-l.x)/l.dx,n=(k.maxX-l.x)/l.dx,o=(k.minY-l.y)/l.dy,p=(k.maxY-l.y)/l.dy,q=Math.max(Math.min(m,n),Math.min(o,p)),r=Math.min(Math.max(m,n),Math.max(o,p));if(q<0)return false;if(q>r)return false;return true;}};f.exports=j;},null);
__d('AdsMouseStateStore',['invariant','Arbiter','DOM','Event','Vector','$','keyMirror','rayInterceptsBox','throttle'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=30,j=500,k=c('keyMirror')({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),l,m,n,o,p;function q(){l=k.STATIONARY;m=0;n=0;o=Date.now();p='pagelet_ego_pane';}q();function r(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(t){var u=Math.random()*1000;return {x:u,y:u};}}var s=Object.assign(new (c('Arbiter'))(),{getState:function(){return l;},updateRhcID:function(t){!c('$')(t)?h(0):void 0;p=t;},getRhcID:function(){return p;},onPageTransition:function(event){q();},onMouseMove:function(event){this.calculateState(r(event));},__updateMousePos:function(t){m=t.x;n=t.y;},isRhcPresent:function(){if(!c('DOM').scry(document.body,'#'+p).length)return false;var t=this.getRhcDimensions();return t.y>0&&t.x>0;},getRhc:function(){return c('$')(p);},getRhcPosition:function(){return c('Vector').getElementPosition(this.getRhc());},getRhcScreenPos:function(){var t=c('Vector').getScrollPosition(),u=this.getRhcPosition();return {x:u.x-t.x,y:u.y-t.y};},getRhcDimensions:function(){return c('Vector').getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var t=this.getRhcDimensions(),u=this.getRhcScreenPos();return {minX:u.x,maxX:u.x+t.x,minY:u.y,maxY:u.y+t.y};},isPosContainedInRhc:function(t){var u=this.getRhcBoundingBox();return (t.x>=u.minX&&t.x<=u.maxX&&t.y>=u.minY&&t.y<=u.maxY);},hasMovedMinDistance:function(t){var u=t.x-m,v=t.y-n;return u*u+v*v>=i*i;},tooSoon:function(){return Date.now()-o<j;},_updateTime:function(){o=Date.now();},calculateState:function(t){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(t)){this.transitionToState(k.HOVER);this.__updateMousePos(t);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(t)){this.transitionToState(k.STATIONARY);return;}var u=this.isMovingTowardsRhc(t)?k.INTENT:k.NO_INTENT;this.transitionToState(u);this.__updateMousePos(t);this.scheduleCheckup();},isMovingTowardsRhc:function(t){var u={x:m,y:n};if(this.isPosContainedInRhc(u))return true;var v=this.getRhcBoundingBox(),w={x:m,y:n,dx:t.x-m,dy:t.y-n};return c('rayInterceptsBox').check(v,w);},scheduleCheckup:function(){var t={x:m,y:n};setTimeout(function(){this.calculateState(t);}.bind(this),j*1.5);},transitionToState:function(t){if(t===l)return;l=t;s.inform('change');}});c('Event').listen(document,'mousemove',c('throttle')(s.onMouseMove.bind(s),j));c('Arbiter').subscribe('page_transition',s.onPageTransition);s.STATES=k;s.MIN_MOVE_DISTANCE=i;s.THROTTLE_TIME=j;f.exports=s;},null);
__d('ChatTypeaheadConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={USER_TYPE:'user',THREAD_TYPE:'thread',FRIEND_TYPE:'friend',NON_FRIEND_TYPE:'non_friend',FB4C_TYPE:'fb4c',PAGE_TYPE:'page',MEETING_ROOM_PAGE_TYPE:'meeting_room_page',COMMERCE_PAGE_TYPE:'commerce_page',HEADER_TYPE:'header'};f.exports=h;},null);
__d('WebMessengerPermalinkConstants',['URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARCHIVED_PATH:'/messages/archived',BASE_PATH:'/messages',PENDING_PATH:'/messages/pending',OTHER_PATH:'/messages/other',SPAM_PATH:'/messages/spam',COMPOSE_POSTFIX_PATH:'/new',SEARCH_POSTFIX_PATH:'/search',TID_POSTFIX_PARTIAL_PATH:'/conversation-',overriddenVanities:'(archived|other|pending|spam|new|search|conversation-.*)',getURIPathForThreadID:function(i,j){return (j||h.BASE_PATH)+h.TID_POSTFIX_PARTIAL_PATH+c('URI').encodeComponent(c('URI').encodeComponent(i));},getThreadIDFromURI:function(i){var j=i.getPath().match(h.BASE_PATH+'(/[^/]*)*'+h.TID_POSTFIX_PARTIAL_PATH+'([^/]+)');if(j){var k=c('URI').decodeComponent(c('URI').decodeComponent(j[2]));return k;}},getURIPathForIDOrVanity:function(i,j){if(i.match('^'+h.overriddenVanities+'$'))i='.'+i;return (j||h.BASE_PATH)+'/'+i;},getUserIDOrVanity:function(i){var j=i.match(h.BASE_PATH+'.*/([^/]+)/?$'),k=j&&j[1],l=h.overriddenVanities;if(!k||k.match('^'+l+'$')){return false;}else if(k.match('^\\.'+l+'$')){return k.substr(1);}else return k;}};f.exports=h;},null);
__d('ChatOpenTab',['csx','cx','ChatTypeaheadConstants','ContextualThing','Event','MercuryIDs','MercuryParticipantTypes','Parent','URI','WebMessengerPermalinkConstants','curry','emptyFunction','goURI','ifRequired','requireWeak'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=null;c('requireWeak')('ChatApp',function(u){return j=u;});function k(u,v){var w=u?new (c('URI'))(c('WebMessengerPermalinkConstants').getURIPathForThreadID(u)):new (c('URI'))(c('WebMessengerPermalinkConstants').BASE_PATH+c('WebMessengerPermalinkConstants').COMPOSE_POSTFIX_PATH);if(v)w.addQueryData({ref:v});c('ifRequired')('BusinessURI.brands',function(x){return c('goURI')(x(w));},function(){return c('goURI')(w);});}function l(u,v){k(c('MercuryIDs').getThreadIDFromUserID(u),v);}function m(u,v,w){l(v,w);}function n(u,v){k(c('MercuryIDs').getThreadIDFromThreadFBID(u),v);}function o(u,v){k(null,v);}function p(u,v,w,x){c('Event').listen(u,'click',function(y){if(t.canOpenTab()){x(v,w);return y.kill();}});}function q(u,v,w,x){c('Event').listen(u,'click',function(y){if(t.canOpenTab())x(v,w);});}function r(u,v,w,x){t.impl()._logChatOpenTabEvent(u,v,w,x);}function s(u){var v=c('ContextualThing').getContext(u);return v&&c('Parent').bySelector(v,"._3qw")!==null;}var t={canOpenTab:function(){return j&&!j.isHidden();},openEmptyTab:function(u,v,w){t.impl().openEmptyTab(u,v,w);},listenOpenEmptyTab:function(u,v){p(u,null,v,t.openEmptyTab);},openThread:function(u,v,w,x,y){t.impl().openThreadTab(u,v,w,x,y);},openClientTab:function(u,v,w,x,y){var z=t.impl();z.openClientTab(u,x,y);z._logChatOpenTabEvent(v,u,null,w);},listenOpenThread:function(u,v,w){p(u,v,w,t.openThread);},openUserTab:function(u,v,w){t.impl().openUserTab(u,v,w);},openPageTab:function(u,v,w){t.impl().openPageTab(u,v,w);return true;},listenOpenUserTab:function(u,v,w){if(!s(u))p(u,v,w,t.openUserTab);},listenOpenUserTabPersistentEvent:function(u,v,w){if(!s(u))q(u,v,w,t.openUserTab);},listenOpenPageTab:function(u,v,w,x){if(!s(u))p(u,v,x,c('curry')(t.openPageTab,w));},listenOpenPageTabPersistentEvent:function(u,v,w,x){if(!s(u))q(u,v,x,c('curry')(t.openPageTab,w));},openTabByType:function(u,v,w){if(v===c('ChatTypeaheadConstants').THREAD_TYPE){if(u){this.openThread(u,w);}else this.openEmptyTab(null,w);}else if(v===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){var x=c('MercuryIDs').getUserIDFromThreadID(u);c('goURI')('/'+x);}else if(!v||v===c('MercuryParticipantTypes').FRIEND||v===c('ChatTypeaheadConstants').FRIEND_TYPE||v===c('ChatTypeaheadConstants').PAGE_TYPE||v===c('ChatTypeaheadConstants').USER_TYPE){if(c('MercuryIDs').isValidThreadID(u))u=c('MercuryIDs').getUserIDFromThreadID(u);this.openUserTab(u,w);}else this.openThread(u,w);},impl:function(){if(j&&j.isInitialized()&&!j.isHidden()&&j.chatOpenTabImpl){return j.chatOpenTabImpl;}else return {openClientTab:k,openUserTab:l,openEmptyTab:o,openThreadTab:n,openPageTab:m,_logChatOpenTabEvent:c('emptyFunction')};}};f.exports=t;},null);
__d('ReactAbstractContextualDialog',['ContextualDialog','ContextualDialogArrow','LayerAutoFocus','LayerHideOnEscape','LayerRefocusOnHide','React','ReactDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={createSpec:function(j){return {displayName:j.displayName,propTypes:{position:h.oneOf(['above','below','left','right']),alignment:h.oneOf(['left','center','right']),offsetX:h.number,offsetY:h.number,width:h.number,autoFocus:h.bool,focusContextOnHide:h.bool,arrowBehavior:h.func,behaviors:h.object,shown:h.bool,context:h.object,contextRef:h.func,hoverContext:h.object,hoverContextRef:h.func,hoverShowDelay:h.number,hoverHideDelay:h.number,hideOnEscape:h.bool,insertParent:h.object,onBeforeHide:h.func,onToggle:h.func,hasActionableContext:h.bool},immutableProps:{modal:null},createLayer:function(k){var l=this.props.context||c('ReactDOM').findDOMNode(this.props.contextRef()),m=this.props.hoverContext||this.props.hoverContextRef&&c('ReactDOM').findDOMNode(this.props.hoverContextRef()),n=babelHelpers['extends']({context:l,hoverContext:m,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||c('ContextualDialogArrow'),addedBehaviors:this.enumerateBehaviors(this.props.behaviors)},j||{}),o=new (c('ContextualDialog'))(n,k);if(this.props.contextBounds)o.setContextWithBounds(l,this.props.contextBounds);if(this.props.autoFocus!==false)o.enableBehavior(c('LayerAutoFocus'));if(this.props.hideOnEscape===true)o.enableBehavior(c('LayerHideOnEscape'));if(this.props.focusContextOnHide===false)o.disableBehavior(c('LayerRefocusOnHide'));if(this.props.onBeforeHide)o.subscribe('beforehide',this.props.onBeforeHide);if(this.props.insertParent)o.setInsertParent(this.props.insertParent);o.conditionShow(this.props.shown);return o;},receiveProps:function(k,l){this.updateBehaviors(l.behaviors,k.behaviors);var m=k.context||k.contextRef&&c('ReactDOM').findDOMNode(k.contextRef());if(m)if(k.contextBounds){this.layer.setContextWithBounds(m,k.contextBounds);}else this.layer.setContext(m);this.layer.setPosition(k.position).setAlignment(k.alignment).setOffsetX(k.offsetX).setOffsetY(k.offsetY).setWidth(k.width).conditionShow(k.shown);}};}};f.exports=i;},null);
__d('HasLayerContextMixin',['ReactDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getContextNode:function(){var i=this.props.context;if(this.props.contextRef){var j=this.props.contextRef();i=j&&c('ReactDOM').findDOMNode(j);}return i;}};f.exports=h;},null);
__d('XUIAmbientNUXBody.react',['cx','React','XUICloseButton.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIAmbientNUXBody',propTypes:{onCloseButtonClick:i.func},render:function(){var k=c('joinClasses')("_21es",this.props.className);return (c('React').createElement('div',{className:k},c('React').createElement(c('XUICloseButton.react'),{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),c('React').createElement('div',{className:"_36gn"},this.props.children)));}});f.exports=j;},null);
__d('XUIAmbientNUXTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i;},null);
__d('XUIAmbientNUX.react',['HasLayerContextMixin','React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=300,j=380,k=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'XUIAmbientNUX',theme:c('XUIAmbientNUXTheme')})),l=c('React').createClass({displayName:'XUIAmbientNUX',propTypes:{alignment:h.oneOf(['left','center','right']),behaviors:h.object,context:h.object,contextRef:h.func,customwidth:h.number,hasActionableContext:h.bool,insertParent:h.object,offsetX:h.number,offsetY:h.number,onCloseButtonClick:h.func,position:h.oneOf(['above','below','left','right']),shown:h.bool,width:h.oneOf(['wide','normal','auto','custom'])},_getWidth:function(){switch(this.props.width){case 'wide':return j;case 'custom':return this.props.customwidth;case 'auto':return null;default:return i;}},render:function(){return (c('React').createElement(k,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.props.context,contextRef:this.props.contextRef,focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,insertParent:this.props.insertParent,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,shown:this.props.shown,width:this._getWidth(this.props)},c('React').createElement(c('XUIAmbientNUXBody.react'),{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));}});f.exports=l;},null);
__d('XUIContextualDialogBody.react',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'XUIContextualDialogBody',render:function(){return (c('React').createElement('div',{className:this.props.className},this.props.children));}});f.exports=h;},null);
__d('XUIContextualDialogFooter.react',['cx','React','XUIOverlayFooter.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIContextualDialogFooter',render:function(){return (c('React').createElement(c('XUIOverlayFooter.react'),{className:"_572u"},this.props.children));}});f.exports=i;},null);
__d('XUIContextualDialogTitle.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIContextualDialogTitle',propTypes:{use:i.oneOf(['primary','secondary'])},getDefaultProps:function(){return {use:'primary'};},render:function(){var k=this.props.use,l=c('joinClasses')("_47lu"+(k==='primary'?' '+"_47lv":'')+(k==='secondary'?' '+"_47mc":''),this.props.className);return (c('React').createElement('h3',{className:l},this.props.children));}});f.exports=j;},null);
__d('XUIContextualDialog.react',['cx','HasLayerContextMixin','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({displayName:'ReactXUIContextualDialog',theme:c('ContextualDialogXUITheme')})),k=c('React').createClass({displayName:'XUIContextualDialog',propTypes:{position:i.oneOf(['above','below','left','right']),alignment:i.oneOf(['left','center','right']),offsetX:i.number,offsetY:i.number,width:i.number,autoFocus:i.bool,arrowBehavior:i.func,behaviors:i.object,shown:i.bool,context:i.object,contextRef:i.func,hoverContext:i.object,hoverContextRef:i.func,hoverShowDelay:i.number,hoverHideDelay:i.number,hideOnEscape:i.bool,onToggle:i.func,hasActionableContext:i.bool},getDefaultProps:function(){return {hasActionableContext:false,hideOnEscape:true};},_getDialogBody:function(){return this._getChildOfType(c('XUIContextualDialogBody.react'));},_getDialogTitle:function(){return this._getChildOfType(c('XUIContextualDialogTitle.react'));},_getDialogFooter:function(){return this._getChildOfType(c('XUIContextualDialogFooter.react'));},_getChildOfType:function(l){var m=null;c('React').Children.forEach(this.props.children,function(n){if(!m&&n.type===l)m=n;});return m;},updatePosition:function(){var l=this.refs.dialog;if(l)l.layer.updatePosition();},render:function(){var l=this.props.children,m=this._getDialogBody();if(m)l=c('React').createElement('div',{className:"_53iv"},this._getDialogTitle(),m);return (c('React').createElement(j,babelHelpers['extends']({},this.props,{ref:'dialog'}),l,m?this._getDialogFooter():null));}});k.WIDTH={NORMAL:312,WIDE:400};f.exports=k;},null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='CheckIsOpen',i={registerOpenChecker:function(j){return i.subscribe(h,function(k,l){if(j())l.is_Open=true;});},checkIsOpen:function(){var j={is_Open:false};i.inform(h,j);return j.is_Open;}};Object.assign(i,c('ArbiterMixin'));f.exports=i;},null);
__d("ScriptPathState",["Arbiter"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k,l=100,m={setIsUIPageletRequest:function(n){j=n;},setUserURISampleRate:function(n){k=n;},reset:function(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function(){return i&&!j;},_shouldSendURI:function(){return Math.random()<k;},getParams:function(){var n={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)n.user_uri=h.substring(0,l);}else n.no_script_path=1;return n;}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=m;},null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','ge','goOrReplace','performance','performanceAbsoluteNow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i=0;function j(m,n){var o=c('ge')(m);if(!o)return;if(!n)o.style.minHeight='100px';var p=c('PageletSet').getPageletIDs();for(var q=0;q<p.length;q++){var r=p[q];if(c('DOM').contains(o,r))c('PageletSet').removePagelet(r);}c('DOM').empty(o);c('Arbiter').inform('pagelet/destroy',{id:null,root:o});}function k(m,n){var o=c('ge')(m);if(o&&!n)o.style.minHeight='100px';}function l(m,n){'use strict';this._uri=m;this._query_data=n;this._request=new (c('AsyncRequest'))();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new (c('Arbiter'))();this._requestID=i++;}l.prototype.setCanvasId=function(m){'use strict';this._canvas_id=m;return this;};l.prototype.setURI=function(m){'use strict';this._uri=m;return this;};l.prototype.setData=function(m){'use strict';this._query_data=m;return this;};l.prototype.getData=function(m){'use strict';return this._query_data;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allow_cross_page_transition=m;return this;};l.prototype.setAppend=function(m){'use strict';this._append=m;return this;};l.prototype.send=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_PERSISTENT);var m={ajaxpipe:1,ajaxpipe_token:c('Env').ajaxpipe_token};Object.assign(m,c('ScriptPathState').getParams());c('ScriptPathState').reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(m,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=h;}else h=this._request;if(this._isQuickling){var n=c('performance').clearResourceTimings||c('performance').webkitClearResourceTimings;if(n)n.call(c('performance'));}this._request.send();return this;};l.prototype._preBootloadFirstResponse=function(m){'use strict';return false;};l.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY,true,c('Arbiter').BEHAVIOR_STATE);};l.prototype._fireOnloadCallback=function(){'use strict';if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e",'+' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_STATE);};l.prototype._isRelevant=function(m){'use strict';return this._request==h||this._automatic&&this._relevantRequest==h||this._jsNonBlock||h&&h._allowIrrelevantRequests;};l.prototype._preBootloadHandler=function(m){'use strict';var n=m.getPayload();if(!n||n.redirect||!this._isRelevant(m))return false;var o=false;if(m.is_first){!this._append&&!this._displayCallback&&j(this._canvas_id,this._constHeight);o=this._preBootloadFirstResponse(m);this.pipe=new (c('BigPipe'))({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c('PageEvents').AJAXPIPE_DOMREADY,onloadEvt:c('PageEvents').AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return o;};l.prototype._redirect=function(m){'use strict';if(m.redirect){if(m.force||!this.isPageActive(m.redirect)){var n=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());c('goOrReplace')(window.location,new (c('URI'))(m.redirect).removeQueryData(n),true);}else{var o=b.PageTransitions;o.go(m.redirect,true);}return true;}else return false;};l.prototype.isPageActive=function(m){'use strict';return true;};l.prototype.getSanitizedParameters=function(){'use strict';return [];};l.prototype._versionCheck=function(m){'use strict';return true;};l.prototype._onInitialResponse=function(m){'use strict';var n=m.getPayload();if(!this._isRelevant(m))return false;if(!n)return true;if(this._redirect(n)||!this._versionCheck(n))return false;return true;};l.prototype._processFirstResponse=function(m){'use strict';var n=m.getPayload();if(c('ge')(this._canvas_id)&&n.canvas_class!=null)c('CSS').setClass(this._canvas_id,n.canvas_class);};l.prototype.setFirstResponseCallback=function(m){'use strict';this._firstResponseCallback=m;return this;};l.prototype.setFirstResponseHandler=function(m){'use strict';this._processFirstResponse=m;return this;};l.prototype._onResponse=function(m){'use strict';var n=m.payload;if(!this._isRelevant(m))return c('AsyncRequest').suppressOnloadToken;if(m.is_first){this._processFirstResponse(m);this._firstResponseCallback&&this._firstResponseCallback();n.provides=n.provides||[];n.provides.push('uipage_onload');}if(n){if('content' in n.content&&this._canvas_id!==null){if(this._append)n.append=this._canvas_id;var o=n.content.content;delete n.content.content;n.content[this._canvas_id]=o;}if(n.secondFlushResources||n.secondFlushHashes){this.pipe.setSecondFlushResources(n.secondFlushResources,n.secondFlushHashes);}else this.pipe.onPageletArrive(n);}if(m.is_last)k(this._canvas_id,this._constHeight);return c('AsyncRequest').suppressOnloadToken;};l.prototype.setNectarModuleDataSafe=function(m){'use strict';this._request.setNectarModuleDataSafe(m);return this;};l.prototype.setFinallyHandler=function(m){'use strict';this._request.setFinallyHandler(m);return this;};l.prototype.setErrorHandler=function(m){'use strict';this._request.setErrorHandler(m);return this;};l.prototype.setTransportErrorHandler=function(m){'use strict';this._request.setTransportErrorHandler(m);return this;};l.prototype.abort=function(){'use strict';this._request.abort();if(h==this._request)h=null;this._request=null;return this;};l.prototype.setJSNonBlock=function(m){'use strict';this._jsNonBlock=m;return this;};l.prototype.setAutomatic=function(m){'use strict';this._automatic=m;return this;};l.prototype.setDisplayCallback=function(m){'use strict';this._displayCallback=m;return this;};l.prototype.setConstHeight=function(m){'use strict';this._constHeight=m;return this;};l.prototype.setAllowIrrelevantRequests=function(m){'use strict';this._allowIrrelevantRequests=m;return this;};l.prototype.getAsyncRequest=function(){'use strict';return this._request;};l.getCurrentRequest=function(){'use strict';return h;};l.setCurrentRequest=function(m){'use strict';h=m;};f.exports=l;},null);
__d('DocumentTitle',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function(){return h;},set:function(s,t){document.title=s;if(!t){h=s;i=null;c('Arbiter').inform('update_title',s);}else i=s;},blink:function(s){var t={title:s};k.push(t);if(m===null)m=setInterval(o,j);return {stop:function(){var u=k.indexOf(t);if(u>=0){k.splice(u,1);if(l>u){l--;}else if(l==u&&l==k.length)l=0;}}};}};f.exports=r;},null);
__d('OnVisible',['Arbiter','DOM','Event','Parent','Run','Vector','ViewportBounds','coalesce','queryThenMutateDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i,j=0,k=[],l,m,n,o,p;function q(){h.forEach(function(w){w.remove();});if(m){m.remove();l.remove();i.unsubscribe();m=l=i=null;}j=0;h.length=0;}function r(){if(!h.length){q();return;}k.length=0;n=c('Vector').getScrollPosition().y;o=c('Vector').getViewportDimensions().y;p=c('ViewportBounds').getTop();for(var w=0;w<h.length;++w){var x=h[w];if(isNaN(x.elementHeight))k.push(w);x.elementHeight=c('Vector').getElementDimensions(x.element).y;x.elementPos=c('Vector').getElementPosition(x.element);x.hidden=c('Parent').byClass(x.element,'hidden_elem');if(x.scrollArea){x.scrollAreaHeight=c('Vector').getElementDimensions(x.scrollArea).y;x.scrollAreaY=c('Vector').getElementPosition(x.scrollArea).y;}}j=w;}function s(){for(var w=Math.min(h.length,j)-1;w>=0;--w){var x=h[w];if(!x.elementPos||x.removed){h.splice(w,1);continue;}if(x.hidden)continue;var y=n+o+x.buffer,z=false;if(y>x.elementPos.y){var aa=n+p-x.buffer,ba=n+p+o+x.buffer,ca=x.elementPos.y+x.elementHeight,da=!x.strict||aa<x.elementPos.y&&ba>ca;z=da;if(z&&x.scrollArea){var ea=x.scrollAreaY+x.scrollAreaHeight+x.buffer;z=x.elementPos.y>x.scrollAreaY-x.buffer&&x.elementPos.y<ea;}}if(x.inverse?!z:z){x.remove();x.handler(k.indexOf(w)!==-1);}}}function t(){u();if(h.length)return;m=c('Event').listen(window,'scroll',u);l=c('Event').listen(window,'resize',u);i=c('Arbiter').subscribe('dom-scroll',u);}function u(){c('queryThenMutateDOM')(r,s,'OnVisible/positionCheck');}function v(w,x,y,z,aa,ba){'use strict';this.element=w;this.handler=x;this.strict=y;this.buffer=c('coalesce')(z,300);this.inverse=c('coalesce')(aa,false);this.scrollArea=ba||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();if(h.length===0)c('Run').onLeave(q);t();h.push(this);}v.prototype.remove=function(){'use strict';if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};v.prototype.reset=function(){'use strict';this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();h.indexOf(this)===-1&&h.push(this);t();};v.prototype.setBuffer=function(w){'use strict';this.buffer=w;u();};v.prototype.checkBuffer=function(){'use strict';u();};v.prototype.getElement=function(){'use strict';return this.element;};v.prototype.$OnVisible1=function(){'use strict';return c('Event').listen(c('DOM').find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};Object.assign(v,{checkBuffer:u});f.exports=v;},null);
__d('LikeConfirmer',['AsyncDialog','AsyncRequest'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i=false,j={likeContent:function(){},like:function(k,l){this.likeContent=k;if(i)return;if(h){this.likeContent();}else{var m=new (c('AsyncRequest'))().setURI('/like/confirm_like.php').setRelativeTo(l);c('AsyncDialog').send(m,function(n){i=true;n.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));n.setCausalElement(l);}.bind(this));}return false;},isShowingConfirmation:function(){return i;},onCloseLikeConfirmDialog:function(){i=false;},likeSkipConfirmation:function(k){h=k;this.likeContent();}};f.exports=j;},null);
__d("UIPageletContentCache",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={cache:{},getContent:function(i){if(i in this.cache)return this.cache[i];return null;},setContent:function(i,j){this.cache[i]=j;}};f.exports=h;},null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge','isElementNode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';var l=i&&c('isElementNode')(i)?i.id:i;this._id=l||null;this._element=c('ge')(i||c('DOM').create('div'));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c('emptyFunction');this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}h.prototype.getElement=function(){'use strict';return this._element;};h.prototype.setHandler=function(i){'use strict';this._handler=i;return this;};h.prototype.go=function(i,j){'use strict';if(arguments.length>=2||typeof i=='string'){this._src=i;this._data=j||{};}else if(arguments.length==1)this._data=i;this.refresh();return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this._allow_cross_page_transition=i;return this;};h.prototype.setBundleOption=function(i){'use strict';this._is_bundle=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this._errorHandler=i;return this;};h.prototype.setTransportErrorHandler=function(i){'use strict';this.transportErrorHandler=i;return this;};h.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){c('ScriptPathState').setIsUIPageletRequest(true);this._request=new (c('AjaxPipeRequest'))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var i=c('UIPageletContentCache').getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this;}}var j=function(n){this._request=null;var o=c('HTML')(n.getPayload());this.handleContent(o);if(this._cache_content)c('UIPageletContentCache').setContent(this._content_cache_key,o);}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new (c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(n){if(k){k(j.bind(null,n));}else j(n);l&&l();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var m=babelHelpers['extends']({},this._context_data,this._data);if(this._actorID)m[c('ActorURI').PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this;};h.prototype.handleContent=function(i){'use strict';if(this._append){c('DOM').appendContent(this._element,i);}else c('DOM').setContent(this._element,i);this._handler();};h.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};h.prototype.setUseAjaxPipe=function(i){'use strict';this._use_ajaxpipe=!!i;return this;};h.prototype.setUsePostRequest=function(i){'use strict';this._use_post_request=!!i;return this;};h.prototype.setAppend=function(i){'use strict';this._append=!!i;return this;};h.prototype.setJSNonBlock=function(i){'use strict';this._jsNonblock=!!i;return this;};h.prototype.setAutomatic=function(i){'use strict';this._automatic=!!i;return this;};h.prototype.setDisplayCallback=function(i){'use strict';this._displayCallback=i;return this;};h.prototype.setConstHeight=function(i){'use strict';this._constHeight=!!i;return this;};h.prototype.setFinallyHandler=function(i){'use strict';this._finallyHandler=i;return this;};h.prototype.setAllowIrrelevantRequests=function(i){'use strict';this._allowIrrelevantRequests=i;return this;};h.prototype.setActorID=function(i){'use strict';this._actorID=i;return this;};h.prototype.setCacheContent=function(i){'use strict';this._cache_content=i;return this;};h.prototype.setContentCacheKey=function(i){'use strict';this._content_cache_key=i;return this;};h.appendToInline=function(i,j){'use strict';var k=c('ge')(i),l=c('ge')(j);if(k&&l){while(l.firstChild)c('DOM').appendContent(k,l.firstChild);c('DOM').remove(l);}};h.loadFromEndpoint=function(i,j,k,l){'use strict';l=l||{};var m='/ajax/pagelet/generic.php/'+i;if(l.intern)m='/intern'+m;var n=new (c('URI'))(m.replace(/\/+/g,'/'));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p='';if(l.contentCacheKey){o=true;p=i+','+String(l.contentCacheKey);}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q;};h.loadFromEndpointBatched=function(i,j,k){'use strict';var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c('emptyFunction');if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers['extends']({},n.options,{finallyHandler:function(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k);},1);}});}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers['extends']({},p.options,j,{bundle:true}));});};f.exports=h;},null);
__d("XPhotosetSearchPivotController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/search-pivot\/photoset\/",{fbid:{type:"Int",required:true},tags:{type:"IntToIntMap"}});},null);