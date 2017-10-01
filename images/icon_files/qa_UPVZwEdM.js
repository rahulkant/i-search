/*!CK:578292893!*//*1459132541,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["0Ojrq"]); }

__d('ChatTabOfficeStatus',['fbt','formatDate','CSS'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=1,j=2,k=3,l={update:function(m,n){if(!m||!n||!n.officeStatus)return;this._updateIcon(m,n);this._updateTooltip(m,n);},_updateIcon:function(m,n){c('CSS').removeClass(m,'officeStatusNone');c('CSS').removeClass(m,'officeStatusAvailable');c('CSS').removeClass(m,'officeStatusSporadic');c('CSS').removeClass(m,'officeStatusOutOfOffice');switch(n.officeStatus){case i:c('CSS').addClass(m,'officeStatusAvailable');break;case j:c('CSS').addClass(m,'officeStatusSporadic');break;case k:c('CSS').addClass(m,'officeStatusOutOfOffice');break;default:c('CSS').addClass(m,'officeStatusNone');break;}},_updateTooltip:function(m,n){var o='';switch(n.officeStatus){case i:o+=h._("AVAILABLE");o+='\n';break;case j:o+=h._("SPORADIC");o+='\n';break;case k:o+=h._("OFF THE GRID");o+='\n';break;default:o+=h._("UNKNOWN");o+='\n';break;}if(n.officeStatusComment)o+=n.officeStatusComment;if(n.officeStatusLocation)o+=' ('+n.officeStatusLocation+')';if(n.officeStatusComment||n.officeStatusLocation)o+='\n';if(n.officeStatusEndDate){var p=c('formatDate')(n.officeStatusEndDate,'M d, Y');o+=h._("Until {date}",[h.param('date',p)]);}m.setAttribute('data-tooltip-content',o);m.setAttribute('data-hover','tooltip');}};f.exports=l;},null);
__d('ChatAddToThreadButton.react',['cx','fbt','Link.react','ReactComponentWithPureRenderMixin','React','TrackingNodes'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ChatAddToThreadButton',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{isFBAtWork:j.bool,onClick:j.func,shown:j.bool},render:function(){if(!this.props.shown)return null;var l=this.props.isFBAtWork?i._("Add more co-workers to chat"):i._("Add more friends to chat"),m=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.ADD_TO_THREAD);return (c('React').createElement(c('Link.react'),{'aria-label':l,className:"_3olv _3jyj button",'data-ft':m,'data-hover':'tooltip','data-tooltip-alignv':'top',onClick:this.props.onClick}));}});f.exports=k;},null);
__d('ChatVideoCallButton.react',['cx','invariant','Bootloader','FBID','FBRTCCallabilityStore','Keys','Link.react','MercuryIDs','MercuryParticipants','MercuryThreads','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin','TrackingNodes','VideoCallTypedLogger'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('MercuryThreads').get(),k=c('React').PropTypes,l={isCallable:false,shown:false,user:null},m=c('React').createClass({displayName:'ChatVideoCallButton',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('FBRTCCallabilityStore'),c('MercuryParticipants'))],propTypes:{isAudio:k.bool,isGroupChat:k.bool,threadID:k.string,viewer:k.string.isRequired},statics:{calculateState:function(n){if(!n.threadID)return babelHelpers['extends']({},l);if(n.isGroupChat)return {isCallable:true,shown:true,user:null};var o=c('MercuryIDs').getUserIDFromThreadID(n.threadID);if(o===n.viewer||!c('FBID').isUser(o))return babelHelpers['extends']({},l);!(o&&c('FBID').isUser(o))?i(0):void 0;var p=c('MercuryIDs').getParticipantIDFromUserID(o),q=c('MercuryParticipants').getOrFetch(p);return {isCallable:c('FBRTCCallabilityStore').isCallable(o),shown:true,user:q};}},getTooltipLabel:function(){var n=this.state.user;if(!n)return undefined;return this.props.isAudio?c('FBRTCCallabilityStore').voiceCallButtonTooltip(n.fbid,n.short_name):c('FBRTCCallabilityStore').callButtonTooltip(n.fbid,n.short_name);},render:function(){if(!this.state.shown)return null;var n=c('TrackingNodes').getTrackingInfo(this.props.isAudio?c('TrackingNodes').types.VIDEOCHAT:c('TrackingNodes').types.VOICECHAT),o=JSON.stringify({videochat:'call_clicked_bhat_tab'});return (c('React').createElement(c('Link.react'),{'aria-label':this.getTooltipLabel(),className:"button"+(' '+"_3olv")+(this.props.isAudio?' '+"_2fpc":'')+(!this.props.isAudio?' '+"_2fpd":'')+(this.state.isCallable?' '+"enabled":''),'data-ft':n,'data-gt':o,'data-hover':'tooltip','data-tooltip-content':this.getTooltipLabel(),'data-tooltip-position':'above',onClick:this._handleClick,onKeyUp:this._handleKeyUp}));},_handleClick:function(n){n.preventDefault();if(!this.state.isCallable)return;this._initiateCall();},_handleKeyUp:function(n){n.preventDefault();if(n.keyCode!==c('Keys').RETURN||!this.state.isCallable)return;if(n.target){!(n.target instanceof HTMLElement)?i(0):void 0;n.target.blur();}this._initiateCall();},_initiateCall:function(){!!!this.props.threadID?i(0):void 0;var n=this.props.isAudio?'chat_tab_voice_icon':'chat_tab_icon';if(this.props.isGroupChat){j.getThreadMeta(this.props.threadID,function(o){var p=o.participants.map(function(r){return c('MercuryIDs').getUserIDFromParticipantID(r);}).filter(function(r){return r!==this.props.viewer;}.bind(this)),q={clickSource:n,conferenceName:'GROUP:'+o.thread_fbid,hasVideo:!this.props.isAudio,usersToRing:p};c('Bootloader').loadModules(["FBRTCCore"],function(r){r.startGroupCall(q);});}.bind(this));}else c('Bootloader').loadModules(["FBRTCCore"],function(o){o.startOutgoingCall(this.state.user.fbid,n,this.props.isAudio);new (c('VideoCallTypedLogger'))().setEvent('chat_tab_call_click').log();}.bind(this));}});f.exports=m;},null);