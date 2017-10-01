/*!CK:3486156691!*//*1459132544,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["i5b74"]); }

__d('StickerSearch',['StickerServerRequests'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h,i={requestStickersForQuery:function(j,k,l){h=j;c('StickerServerRequests').getStickersForQuery(j,k,function(m){return h===j&&l(m.payload);});}};f.exports=i;},null);
__d('StickerState',['ImmutableObject','PresenceState','StickerActions','StickerConstants','StickerImages','StickerServerRequests'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={},i,j,k,l=null,m=0,n={},o=[],p=[],q=[],r=null,s=null,t=c('PresenceState').get();if(t)r=t.tray_pack_id;var u={onTrayDataReady:function(w){if(!j)j=c('StickerServerRequests').fetchTrayData(function(x){o=x.packs.map(function(y){return v(y);});k=x.mru;m=x.num_new_packs;q=x.tags;});j.then(function(){w();c('StickerActions').loadedTrayData();});},onStoreDataReady:function(w){if(!i)i=c('StickerServerRequests').fetchStoreData(function(x){p=x.packs.map(function(y){return v(y);});});i.then(w);},onPackDataReady:function(w,x){if(!h[w])h[w]=c('StickerServerRequests').fetchPackData(w,function(y){v(y);});h[w].then(x);},getPacksInTrayAllInterfaces:function(){return o;},getPacksInTray:function(){var w=[],x;for(var y=0;y<o.length;y++)if(o[y].id==c('StickerConstants').EMOTICON_PACK_ID){x=o[y];}else if(o[y].isMessengerCapable)w.push(o[y]);x&&w.push(x);return w;},getPacksInCommentsTray:function(){var w=[],x=[],y;for(var z=0;z<o.length;z++)if(o[z].id==c('StickerConstants').EMOTICON_PACK_ID){y=o[z];}else if(o[z].isCommentsCapable){w.push(o[z]);}else x.push(o[z]);var aa=w.concat(x);if(y)aa.push(y);return aa;},getPacksInComposerTray:function(){return o.filter(function(w){return w.isComposerCapable;});},getPacksInFramesTray:function(){return o.filter(function(w){return w.isFramePack;});},getPackIDsInTray:function(){return o.map(function(w){return w.id;});},getPacksInStore:function(){return p.filter(function(w){return w.isMessengerCapable;});},getComposerPacksInStore:function(){return p.filter(function(w){return w.isComposerCapable;});},getPack:function(w){return n[w];},getNumNewPacks:function(){return m;},getFeaturedTags:function(){return q;},resetNumNewPacks:function(){m=0;},addMRUPack:function(){if(k){this._addPackToTray(k);k=null;}},addPack:function(w){var x=false;if(n[w])x=n[w].isPromoted;c('StickerServerRequests').addPack(w,x,function(y){this._addPackToTray(y);}.bind(this));},removePack:function(w){c('StickerServerRequests').removePack(w,function(x){o=o.filter(function(y){return y.id!==x;});n[x]=c('ImmutableObject').set(n[x],{isInTray:false});p=p.map(function(y){return n[y.id];});c('StickerActions').updateTrayData();});},setTrayPackID:function(w){r=w;c('PresenceState').doSync();},getTrayPackID:function(w){if(w&&w.length>0&&!w.some(function(x){return x.id===r;})){return w[0].id;}else return r;},setStorePackID:function(w){s=w;},getStorePackID:function(){return s;},subscribeAssociatedPage:function(w,x){c('StickerServerRequests').subscribeAssociatedPage(w,function(){n[w]=c('ImmutableObject').set(n[w],{isAssociatedPageSubscribed:true});p=p.map(function(y){return n[y.id];});c('StickerActions').updateTrayData();x();});},_addPackToTray:function(w,x){v(w);n[w.id]=c('ImmutableObject').set(n[w.id],{isPurchased:!x,isInTray:true});var y=o.filter(function(aa){return aa.id===w.id;}).length>0;if(!y){var z;if(!x){z=o.filter(function(aa){return aa.isMRU||aa.isSearch;}).length;}else z=o.filter(function(aa){return aa.id!==c('StickerConstants').EMOTICON_PACK_ID;}).length;o.splice(z,0,n[w.id]);}p=p.map(function(aa){return n[aa.id];});c('StickerActions').updateTrayData();},_addRecentlyUsedSticker:function(w){for(var x=0;x<l.length;++x)if(l[x].id===w.id){l.splice(x,1);break;}l.unshift(w);},getMRUStickerPack:function(w){if(!l)l=w;return l;},updateRecentlyUsed:function(w){if(!l){this.addMRUPack();return;}this._addRecentlyUsedSticker(c('StickerImages').getSticker(w));}};c('PresenceState').registerStateStorer(function(w){w.tray_pack_id=r;});function v(w){var x=w.id;if(!n[x]){return n[x]=new (c('ImmutableObject'))(w);}else return n[x]=c('ImmutableObject').set(n[x],w);}f.exports=u;},null);
__d('StickerStoreController',['cx','Bootloader','DialogFitHeight','DOM','LayerAutoFocus','LayerFadeOnHide','LayerHideOnEscape','React','ReactComponentRenderer','StickerActions','XUIDialog.react','XUIDialogBody.react','XUISpinner.react','isSocialPlugin','requestAnimationFrame'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=688,k=320,l=null,m=c('React').createClass({displayName:'StoreLayer',propTypes:{isComposer:i.bool,shown:i.bool},getDefaultProps:function(){return {isComposer:false,shown:false};},getInitialState:function(){return {renderStore:function(){return (c('React').createElement('div',{className:"_5r5e"},c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large'})));}};},componentDidMount:function(){c('Bootloader').loadModules(["StickerStore.react"],function(p){this.setState({renderStore:function(){return (c('React').createElement(p,{isComposer:this.props.isComposer,shown:this.props.shown}));}.bind(this)});}.bind(this));},_onToggle:function(p){c('requestAnimationFrame')(function(){if(l)l.setProps({shown:p});});},render:function(){var p=c('isSocialPlugin')()&&document.body.offsetWidth<j?k:j;return (c('React').createElement(c('XUIDialog.react'),{behaviors:{DialogFitHeight:c('DialogFitHeight'),LayerAutoFocus:c('LayerAutoFocus'),LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')},onToggle:this._onToggle,shown:this.props.shown,width:p},c('React').createElement(c('XUIDialogBody.react'),{className:"_5rq- autofocus"},this.state.renderStore())));}});function n(p){var q=c('DOM').create('div');c('DOM').appendContent(document.body,q);l=new (c('ReactComponentRenderer'))(m,q);l.setProps({isComposer:p,shown:true});}var o={showStore:function(p,q){if(!l){n(!!q);}else l.setProps({shown:true,isComposer:!!q});c('StickerActions').selectStorePack(p);}};f.exports=o;},null);
__d('StickerStateStore',['FluxStore','StickerActions','StickerInterfaces','StickersDispatcher','StickerState','StickerStoreController','arrayContains','emptyFunction'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('StickersDispatcher'));this.$StickerStateStore3=false;}j.prototype.getState=function(k){var l=null;if(k===c('StickerInterfaces').COMPOSER){l=c('StickerState').getPacksInComposerTray();}else if(k===c('StickerInterfaces').COMMENTS){l=c('StickerState').getPacksInCommentsTray();}else if(k===c('StickerInterfaces').FRAMES){l=c('StickerState').getPacksInFramesTray();}else l=c('StickerState').getPacksInTray();return {showTray:this.$StickerStateStore1,storePackID:c('StickerState').getStorePackID(),packID:c('StickerState').getTrayPackID(l),trayPacks:l,numNewPacks:c('StickerState').getNumNewPacks(),threadID:this.$StickerStateStore2,trayDataReady:this.$StickerStateStore3};};j.prototype.isPackInTray=function(k){if(!this.$StickerStateStore3)c('StickerState').onTrayDataReady(c('emptyFunction'));var l=c('StickerState').getPacksInTrayAllInterfaces();return l.some(function(m){return m.id===k;});};j.prototype.isPackPageSubscribed=function(k){if(!this.$StickerStateStore3)c('StickerState').onTrayDataReady(c('emptyFunction'));var l=c('StickerState').getPacksInTrayAllInterfaces();return l.some(function(m){return m.id===k&&m.isAssociatedPageSubscribed;});};j.prototype.__onDispatch=function(k){var l=c('StickerActions').Types;switch(k.type){case l.REPLACE_STICKER_STATE:this.$StickerStateStore1=!!k.showTray;break;case l.SHOW_TRAY:this.$StickerStateStore1=true;this.$StickerStateStore2=k.threadID;break;case l.HIDE_TRAY:this.$StickerStateStore1=false;break;case l.CLICKED_STICKER_IN_THREAD:c('StickerState').onTrayDataReady(function(){if(c('arrayContains')(c('StickerState').getPackIDsInTray(),k.packID)){c('StickerState').setTrayPackID(k.packID);this.$StickerStateStore1=true;this.$StickerStateStore2=k.threadID;}else{this.$StickerStateStore1=false;c('StickerStoreController').showStore(k.packID);}}.bind(this));break;case l.SELECT_PACK:c('StickerState').setTrayPackID(k.packID);break;case l.SELECT_STORE_PACK:c('StickerState').setStorePackID(k.packID);break;case l.RESET_NUM_NEW_PACKS:c('StickerState').resetNumNewPacks();break;case l.ADD_PACK:c('StickerState').addPack(k.packID);break;case l.REMOVE_PACK:c('StickerState').removePack(k.packID);break;case l.UPDATE_TRAY_DATA:break;case l.TRAY_DATA_READY:this.$StickerStateStore3=true;break;case l.SUBSCRIBE_ASSOCIATED_PAGE:c('StickerState').subscribeAssociatedPage(k.packID,k.callback);break;}this.__emitChange();};f.exports=new j();},null);
__d('StickersFlyoutPackSelector.react',['cx','fbt','ix','Animation','Image.react','ImmutableObject','Locale','React','ReactDOM','StickerActions','StickerConfig','StickerConstants','StickerInterfaces','StickerState','StickerStoreController','XUIBadge.react','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=4,m=200,n=i._("Sticker Store"),o=c('React').createClass({displayName:'StickersFlyoutPackSelector',propTypes:{stickerInterface:k.oneOf(c('getObjectValues')(c('StickerInterfaces'))),numNewPacks:k.number,packs:k.arrayOf(k.instanceOf(c('ImmutableObject'))).isRequired,selectedPackID:k.string,resetTagSelectorFunc:k.func},getInitialState:function(){return {animating:false,page:0};},getDefaultProps:function(){return {stickerInterface:c('StickerInterfaces').MESSAGES,numNewPacks:0};},shouldComponentUpdate:function(q,r){return !r.animating;},onFlyoutShown:function(){if(this.props.packs.length>0){var q=this._calculatePageForPack(this.props.selectedPackID);if(this.state.page!==q)this._setPage(q,0);}},_calculatePageForPack:function(q){for(var r=0;r<this.props.packs.length;r++)if(this.props.packs[r].id==q)return r<=l?0:Math.floor((r-1)/l);return 0;},_setPage:function(q,r){if(this.state.animating)return;this.setState({animating:true,page:q},function(){var s=c('ReactDOM').findDOMNode(this.refs.positioner),t=this._calculatePosition(q);new (c('Animation'))(s).to(t.reference,t.offset+'px').ondone(function(){return this.setState({animating:false});}.bind(this)).duration(r).go();});},_calculatePosition:function(q){var r=c('ReactDOM').findDOMNode(this.refs.positioner),s=r.childNodes[q].offsetLeft;if(c('Locale').isRTL()){var t=r.offsetWidth,u=r.childNodes[q].offsetWidth;return {reference:'right',offset:s+u-t};}return {reference:'left',offset:-s};},_numPages:function(){return Math.max(1,Math.ceil((this.props.packs.length-1)/l));},_canGoPrev:function(){return this.state.page>0;},_canGoNext:function(){return this.state.page+1<this._numPages();},_goPrev:function(){this._canGoPrev()&&this._setPage(this.state.page-1,m);},_goNext:function(){this._canGoNext()&&this._setPage(this.state.page+1,m);},_openStore:function(){c('StickerActions').resetNumNewPacks();var q=this.props.stickerInterface==c('StickerInterfaces').COMPOSER;c('StickerStoreController').showStore(null,q);},render:function(){return (c('React').createElement('div',{className:"_5r85"},this._renderStoreButton(),this._renderPrevArrow(),this._renderNextArrow(),c('React').createElement('div',{className:"_5r88"},c('React').createElement('div',{className:"_5r89",ref:'positioner'},this._renderPages()))));},_selectPack:function(q){var r=c('StickerState').getPack(q);if(r&&r.isPromoted)c('StickerActions').addPack(q);if(q===c('StickerConstants').SEARCH_PACK_ID)this.props.resetTagSelectorFunc();c('StickerActions').selectPack(q);},_renderPages:function(){var q=this.props.packs.map(function(u,v){return (c('React').createElement(p,{key:u.id,onClick:function(){return this._selectPack(u.id);}.bind(this),pack:u,selected:this.props.selectedPackID===u.id,index:v,isComments:this.props.stickerInterface==c('StickerInterfaces').COMMENTS}));}.bind(this)),r=[];for(var s=0;s<q.length;s+=l){var t=s;s===0&&s++;r.push(c('React').createElement('div',{className:"_5r81",key:s},q.slice(t,s+l)));}return r;},_renderStoreButton:function(){return (c('React').createElement('a',{'aria-label':n,className:"_5r86 rfloat",'data-hover':'tooltip','data-tooltip-content':n,onClick:this._openStore},c('React').createElement(c('Image.react'),{className:"_5r87",src:j('/images/messaging/stickers/selector/sticker_store.png')}),this._renderJewel()));},_renderJewel:function(){var q=this.props.numNewPacks;if(!q)return null;return (c('React').createElement(c('XUIBadge.react'),{className:"rfloat _3fhs",count:q,maxcount:9,type:'special'}));},_renderPrevArrow:function(){if(!this._canGoPrev())return null;var q=c('Locale').isRTL()?j('/images/messaging/stickers/selector/right.png'):j('/images/messaging/stickers/selector/left.png');return (c('React').createElement('a',{className:"_37wu"+(' '+"lfloat"),onClick:this._goPrev},c('React').createElement(c('Image.react'),{className:"_5r84",src:q})));},_renderNextArrow:function(){if(!this._canGoNext())return null;var q=c('Locale').isRTL()?j('/images/messaging/stickers/selector/left.png'):j('/images/messaging/stickers/selector/right.png');return (c('React').createElement('a',{className:"_37wv"+(' '+"rfloat"),onClick:this._goNext},c('React').createElement(c('Image.react'),{className:"_5r84",src:q})));}}),p=c('React').createClass({displayName:'PackIcon',propTypes:{index:k.number,isComments:k.bool,onClick:k.func,pack:k.instanceOf(c('ImmutableObject')).isRequired,selected:k.bool},getDefaultProps:function(){return {isComments:false,onClick:c('emptyFunction')};},_getPackIcon:function(q){if(q.id==c('StickerConstants').SEARCH_PACK_ID)return j('/images/messaging/stickers/icons/search.png');if(q.id==c('StickerConstants').MRU_STICKER_PACK)return j('/images/messaging/stickers/icons/recent.png');if(q.id==c('StickerConstants').EMOTICON_PACK_ID)return j('/images/messaging/stickers/icons/emoji.png');return q.icon;},render:function(){var q=this.props.pack,r=c('StickerConfig').WebStickerSearch?this.props.index===1||this.props.index===2:this.props.index===1,s="_5r8a"+(this.props.selected?' '+"_5r8b":'')+(q.id==c('StickerConstants').MRU_STICKER_PACK?' '+"_5qcj":'')+(q.id==c('StickerConstants').SEARCH_PACK_ID?' '+"_5qck":'')+(r?' '+"_eb3":''),t=this.props.isComments&&!q.isCommentsCapable,u=i._("This pack is only available in photos"),v=i._("This pack is only available in messages"),w=t?c('emptyFunction'):function(){return this.props.onClick(q.id);}.bind(this),x=this._getPackIcon(q);if(x===null)return null;var y=v;if(!q.isMessengerCapable&&q.isComposerCapable)y=u;return (c('React').createElement('a',{'aria-label':t?y:q.name,className:s,'data-id':q.id,'data-hover':'tooltip','data-tooltip-content':t?y:q.name,ref:'search_icon',onClick:w,tabIndex:'0'},c('React').createElement(c('Image.react'),{className:(t?"_2ji6":'')+(' '+"_5r8c")+(c('StickerConfig').WebStickerSearch?' '+"_1viy":''),src:x})));}});f.exports=o;},null);
__d('StickersFlyoutStickerSelector.react',['cx','fbt','ix','BanzaiLogger','Grid.react','Image.react','ScrollableArea.react','React','Sticker.react','StickerConstants','StickerImages','StickerInterfaces','StickerSearch','StickerState','StickerUtils','XUISpinner.react','debounce','emptyFunction','getObjectValues','throttle'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('Grid.react').GridItem,l=c('React').PropTypes,m=320,n=278,o=c('StickerConstants').MRU_STICKER_PACK,p=44,q=112,r=c('debounce')(function(t,u){if(!t)return;c('BanzaiLogger').log('StickersLoggerConfig',{event:'search_sticker',searchtoken:t,numsearchresults:u.length});},1000),s=c('React').createClass({displayName:'StickersFlyoutStickerSelector',propTypes:{height:l.number,stickerInterface:l.oneOf(c('getObjectValues')(c('StickerInterfaces'))),onScroll:l.func,onStickerClick:l.func.isRequired,onStickerKeyDown:l.func.isRequired,packID:l.string,userInput:l.string},getDefaultProps:function(){return {stickerInterface:c('StickerInterfaces').MESSAGES,onScroll:c('emptyFunction')};},getInitialState:function(){return {loading:false,stickers:[]};},componentDidMount:function(){if(this.props.packID){this.requestStickersForPack(this.props.packID);return;}if(this.props.userInput)this.requestStickersForQuery(this.props.userInput,this.props.stickerInterface);},componentWillReceiveProps:function(t){if(t.packID&&t.packID!==this.props.packID){this.requestStickersForPack(t.packID);}else if(t.userInput!==this.props.userInput)this.requestStickersForQuery(t.userInput,this.props.stickerInterface);},requestStickersForQuery:function(t,u){this.setState({loading:true});c('StickerSearch').requestStickersForQuery(t,u,function(v){v.map(function(w){return c('StickerImages').cacheSticker(w);});if(!this.props.tagChosen)r(t,v);if(this.isMounted())this.setState({loading:false,stickers:v});}.bind(this));},requestStickersForPack:function(t){this.setState({loading:true});c('StickerImages').requestStickersForPack(t,c('StickerConstants').TRAY_SIZE,function(u){if(t==o){u=c('StickerState').getMRUStickerPack(u);if(this.props.stickerInterface==c('StickerInterfaces').COMPOSER)u=u.filter(function(v){return v.isComposerCapable;});if(this.props.stickerInterface==c('StickerInterfaces').COMMENTS)u=u.filter(function(v){return v.isCommentsCapable;});if(this.props.stickerInterface==c('StickerInterfaces').MESSAGES)u=u.filter(function(v){return v.isMessengerCapable;});}this.setState({loading:false,stickers:u});}.bind(this));},renderStickers:function(){return this.state.stickers.map(function(t){var u=c('StickerUtils').getScaledDimensions(t.height,t.width,c('StickerConstants').TRAY_SIZE);return (c('React').createElement(k,{key:t.id},c('React').createElement('div',{className:"_5r8h",onClick:function(event){return this.props.onStickerClick(t.id,event);}.bind(this),onKeyDown:function(event){return this.props.onStickerKeyDown(t.id,event);}.bind(this)},c('React').createElement(c('Sticker.react'),{accessibilityLabel:t.accessibilityLabel,animationTrigger:'hover',className:"_5r8i",forceCursorPointer:true,frameCount:t.frameCount,frameRate:t.frameRate||83,framesPerCol:t.framesPerCol,framesPerRow:t.framesPerRow,sourceHeight:u.height,sourceURI:t.sourceURI,sourceWidth:u.width,spriteURI:t.spriteURI,packName:t.packName,paddedSpriteURI:t.paddedSpriteURI,stickerID:t.id}))));}.bind(this));},_onScroll:function(){var t=this.refs.stickerScrollable;if(t){var u=t.getArea().getScrollTop();this.props.onScroll(u);}},render:function(){if(this.state.loading){return (c('React').createElement('div',{className:"_e0r"},c('React').createElement(c('XUISpinner.react'),{size:'large'})));}else if(this.state.stickers.length===0){var t=(m-p*2-q)/2+'px';return (c('React').createElement('div',{className:"_5jdt",style:{marginTop:t}},c('React').createElement(c('Image.react'),{src:j('/images/messaging/stickers/icons/sad_face.png')}),c('React').createElement('p',null,i._("No Stickers to Show"))));}return (c('React').createElement(c('ScrollableArea.react'),{ref:'stickerScrollable',height:this.props.height||m,onScroll:c('throttle')(this._onScroll,200),width:n,fade:true},c('React').createElement('div',{className:"_5r8k"},c('React').createElement(c('Grid.react'),{cols:4,fixed:true},this.renderStickers()))));}});f.exports=s;},null);
__d('StickersFlyoutTagSelector.react',['cx','fbt','BanzaiLogger','Grid.react','ScrollableArea.react','React','ReactDOM','Image.react','StickersFlyoutStickerSelector.react','StickerInterfaces','StickerState','StickerUtils','XUIButton.react','XUICloseButton.react','XUITextInput.react','getObjectValues'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('Grid.react').GridItem,k=c('React').PropTypes,l=320,m=278,n=44,o=c('React').createClass({displayName:'StickersFlyoutTagSelector',propTypes:{onStickerClick:k.func.isRequired,onStickerKeyDown:k.func.isRequired,stickerInterface:k.oneOf(c('getObjectValues')(c('StickerInterfaces')))},getInitialState:function(){return {input:'',isScrolling:false,tagChosen:false};},getDefaultProps:function(){return {stickerInterface:c('StickerInterfaces').MESSAGES};},componentDidMount:function(){this.focusInput();},focusInput:function(){setTimeout(function(){if(this.refs.inputField&&this.refs.inputField.focusInput)this.refs.inputField.focusInput();}.bind(this));},_inputChanged:function(p){this.setState({input:p.target.value,tagChosen:false,isScrolling:false});},_normalizeInput:function(p){return p.trim().replace(/\s+/,' ').toLowerCase();},_handleResetButtonClick:function(p){p.preventDefault();this.reset();},reset:function(){this.setState(this.getInitialState());},renderContentArea:function(){if(this.state.tagChosen||this._normalizeInput(this.state.input).length>1){return this.renderStickers();}else return this.renderTags();},render:function(){return (c('React').createElement('div',{className:"_217a"+(this.state.isScrolling?' '+"_1hg1":'')},c('React').createElement('div',{className:"_5jdr"},c('React').createElement('span',{className:"_5jds"}),c('React').createElement(c('XUITextInput.react'),{onChange:this._inputChanged,ref:'inputField',placeholder:i._("Search stickers"),value:this.state.input}),c('React').createElement(c('XUICloseButton.react'),{size:'small',onClick:this._handleResetButtonClick,className:this.state.input.length===0?"hidden_elem":''})),this.renderContentArea()));},selectTag:function(p){c('BanzaiLogger').log('StickersLoggerConfig',{event:'select_tag',tagid:p.id});this.setState({tagChosen:true,input:c('StickerUtils').capitalizeWords(p.name)});this.focusInput();},_onScroll:function(p){this.setState({isScrolling:!!p});},renderStickers:function(){var p=this._normalizeInput(this.state.input);return (c('React').createElement(c('StickersFlyoutStickerSelector.react'),{ref:'selector',height:l-n,userInput:p,onScroll:this._onScroll,onStickerClick:this.props.onStickerClick,onStickerKeyDown:this.props.onStickerKeyDown,stickerInterface:this.props.stickerInterface,tagChosen:this.state.tagChosen}));},renderTags:function(){var p=c('StickerState').getFeaturedTags().filter(function(q){return q.sourceURI!==null;}).sort(function(q,r){return q.order-r.order;}).map(function(q,r){return (c('React').createElement(j,{key:r},c('React').createElement('div',{className:"_t5c"+(r<2?' '+"_1b27":'')+(r%2===0?' '+"_t5d":'')+(r%2!==0?' '+"_t5e":'')},c('React').createElement(c('XUIButton.react'),{image:c('React').createElement(c('Image.react'),{src:q.sourceURI}),label:q.name,onClick:this.selectTag.bind(this,q),className:"_5jdu",style:{background:'#'+q.color_code},disabled:this._normalizeInput(this.state.input).length===1}))));}.bind(this));return (c('React').createElement(c('ScrollableArea.react'),{height:l-n,width:m-16,shadow:true,fade:true,className:"_5jei"},c('React').createElement(c('Grid.react'),{spacing:'pas',cols:2,fixed:true,ref:'grid'},p)));}});f.exports=o;},null);
__d('StickersFlyout.react',['csx','cx','fbt','BanzaiLogger','Event','Keys','MessagesEmoticons.react','ReactComponentWithPureRenderMixin','React','StickerActions','StickerConfig','StickerConstants','StickerInterfaces','StickersFlyoutPackSelector.react','StickersFlyoutStickerSelector.react','StickersFlyoutTagSelector.react','StickerState','StickerStateStore','StoreAndPropBasedStateMixin','XUISpinner.react','getObjectValues','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('StickerConstants').SEARCH_PACK_ID,m=[c('Keys').BACKSPACE,c('Keys').TAB,c('Keys').RETURN,c('Keys').ALT,c('Keys').ESC,c('Keys').SPACE,c('Keys').PAGE_UP,c('Keys').PAGE_DOWN,c('Keys').END,c('Keys').HOME,c('Keys').LEFT,c('Keys').UP,c('Keys').RIGHT,c('Keys').DOWN,c('Keys').DELETE],n=c('React').createClass({displayName:'StickersFlyout',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('StickerStateStore'))],statics:{calculateState:function(o){var p=c('StickerStateStore').getState(o.stickerInterface);return {dataReady:p.trayDataReady,packID:p.packID,numNewPacks:p.numNewPacks,packs:p.trayPacks};}},propTypes:{stickerInterface:k.oneOf(c('getObjectValues')(c('StickerInterfaces'))),onStickerSelect:k.func.isRequired,onEmoticonSelect:k.func,onShown:k.func,onHidden:k.func,onEscKeyDown:k.func,shown:k.bool},getDefaultProps:function(){return {stickerInterface:c('StickerInterfaces').MESSAGES,shown:false};},componentDidMount:function(){if(this.props.shown)this._onShown();},componentWillReceiveProps:function(o){if(o.shown){this._onShown();}else this._onHidden();},_onShown:function(){c('BanzaiLogger').log('StickersLoggerConfig',{event:'open_tray'});if(!this.state.dataReady)this.loadTrayData();if(this.state.packID===l)this.refs.tagSelector&&this.refs.tagSelector.focusInput();this.refs.packSelector.onFlyoutShown();this.props.onShown&&this.props.onShown();},_onHidden:function(){this.resetTagSelector();this.props.onHidden&&this.props.onHidden();},componentDidUpdate:function(o){if(!o.shown&&this.props.shown){this._onShown();}else if(o.shown&&!this.props.shown)this._onHidden();},_onKeyDown:function(event){if(event.keyCode===c('Keys').ESC&&this.props.onEscKeyDown){event.preventDefault();event.stopPropagation();this.props.onEscKeyDown();}else if(this.state.packID!==l&&m.indexOf(event.keyCode)===-1){c('StickerActions').selectPack(l);this.setState(n.calculateState(this.props));}},resetTagSelector:function(){this.refs.tagSelector&&this.refs.tagSelector.reset();},loadTrayData:function(){c('StickerState').onTrayDataReady(function(){}.bind(this));},loadPack:function(){if(!this.state.dataReady)return (c('React').createElement('div',{className:"_e0r"},c('React').createElement(c('XUISpinner.react'),{size:'large'})));if(this.state.packID===c('StickerConstants').EMOTICON_PACK_ID)return (c('React').createElement('div',{className:"_5r8l",'data-id':this.state.packID},c('React').createElement(c('MessagesEmoticons.react'),{onEmoticonSelect:this.props.onEmoticonSelect})));if(this.state.packID===l&&c('StickerConfig').WebStickerSearch)return (c('React').createElement('div',{className:"_5r8l"},c('React').createElement(c('StickersFlyoutTagSelector.react'),{ref:'tagSelector',className:"fbStickersFlyoutTagSelector",onStickerClick:this._onStickerClick,onStickerKeyDown:this._onStickerKeyDown,stickerInterface:this.props.stickerInterface})));return (c('React').createElement('div',{className:"_5r8l",'data-id':this.state.packID},c('React').createElement(c('StickersFlyoutStickerSelector.react'),{ref:'selector',packID:this.state.packID,onStickerClick:this._onStickerClick,onStickerKeyDown:this._onStickerKeyDown,stickerInterface:this.props.stickerInterface})));},_onStickerClick:function(o,event){c('StickerState').updateRecentlyUsed(o);this.props.onStickerSelect(o,event);},_onStickerKeyDown:function(o,event){if(event.keyCode===c('Keys').RETURN){event.stopPropagation();event.preventDefault();this._onStickerClick(o,event);}},render:function(){return (c('React').createElement('div',{'aria-label':j._("Stickers"),className:c('joinClasses')(this.props.className,"_5r8f"),onKeyDown:this._onKeyDown,role:'dialog'},c('React').createElement('div',{className:"_5r8e"},c('React').createElement(c('StickersFlyoutPackSelector.react'),{ref:'packSelector',numNewPacks:this.state.numNewPacks,selectedPackID:this.state.packID,packs:this.state.packs,stickerInterface:this.props.stickerInterface,resetTagSelectorFunc:this.resetTagSelector})),c('React').createElement('div',{className:"_5r8m"},this.loadPack())));}});f.exports=n;},null);