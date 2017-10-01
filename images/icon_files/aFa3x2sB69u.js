/*!CK:3549564679!*//*1459274940,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DX6tv"]); }

__d('ChatTabComposer.react',['csx','cx','fbt','BootloadedComponent.react','ChatConfig','ChatInputBasic.react','ChatInput.react','ChatContentSearchButton.react','CSS','JSResource','MercuryConfig','P2PSendMoneyContainerBootloader.react','ReactComponentWithPureRenderMixin','React','StickerActions'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=77,m=c('React').createClass({displayName:'ChatTabComposer',_fileUploader:null,_photoUploader:null,mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{initializeThingsWithInputFn:k.func,inputKeyDown:k.func,onBlur:k.func,onEmojiSelect:k.func,onEscape:k.func,onFocus:k.func,onTab:k.func,p2pProps:k.object,participantIDs:k.arrayOf(k.string),photoUploaderProps:k.object,placeHolder:k.string,resizeFn:k.func,showP2PButton:k.bool,stickerButtonProps:k.object,uploadPhotoFn:k.func},getInitialState:function(){return {inputHeight:0,stickerFlyoutShown:false};},render:function(){return (c('React').createElement('div',{className:"_1d4_",onClick:this._handleClick},this._renderInput(),c('React').createElement('div',{className:"_552n"},this._renderIcons())));},resetInput:function(){this.refs.input.resetState();},uploadURL:function(n){if(!this._fileUploader)return;this._fileUploader.uploadURL(n);},isUploading:function(){return !!(this._fileUploader&&this._fileUploader.isUploading()||this._photoUploader&&this._photoUploader.isUploading());},getInput:function(){return this.refs.input;},_renderInput:function(){var n={};if(this.state.inputHeight)n.minHeight=this.state.inputHeight;var o=c('ChatConfig').get('chat_basic_input')?c('ChatInputBasic.react'):c('ChatInput.react');return (c('React').createElement('div',{className:"_552h",style:n},c('React').createElement(o,{initializeThingsWithInputFn:this.props.initializeThingsWithInputFn,inputKeyDown:this.props.inputKeyDown,onBlur:this.props.onBlur,onEscape:this._handleEscape,onFocus:this.props.onFocus,onTab:this.props.onTab,ref:'input',resizeFn:function(p){p=Math.min(p,l);this.setState({inputHeight:p});this.props.resizeFn&&this.props.resizeFn(p);}.bind(this),uploadPhotoFn:function(p){this._photoUploader&&this._photoUploader.uploadFiles([p]);}.bind(this),placeholder:this.props.placeholder})));},_renderIcons:function(){return [this._renderPhotoUploader(),this._renderStickerButton(),this._renderContentSearchButton(),this._renderEmojiButton(),this._renderP2PButton(),this._renderFileUploader(),this._renderLikeButton()];},_renderPhotoUploader:function(){var n=this.props.photoUploaderProps||{};return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('ChatPhotoUploader.react'),bootloadPlaceholder:c('React').createElement('span',{className:n.className},c('React').createElement('a',{className:n.linkClassName})),key:'photos',onMount:function(o){return this._photoUploader=o;}.bind(this)},n)));},_renderFileUploader:function(){var n=this.props.fileUploaderProps||{};return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('ChatPhotoUploader.react'),bootloadPlaceholder:c('React').createElement('span',{className:n.className},c('React').createElement('a',{className:n.linkClassName})),key:'files',onMount:function(o){return this._fileUploader=o;}.bind(this)},n)));},_renderStickerButton:function(){var n=this.props.stickerButtonProps;if(!n)return null;return (c('React').createElement('div',{className:"_6gd",key:'stickers'},c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('ChatStickerButton.react'),bootloadPlaceholder:c('React').createElement('span',{className:n.className}),onFlyoutShown:function(){this.refs.input.focus();this.setState({stickerFlyoutShown:true});}.bind(this),onFlyoutHidden:function(){this.setState({stickerFlyoutShown:false});}.bind(this)},n))));},_renderContentSearchButton:function(){if(!c('ChatConfig').get('chat_content_search'))return null;return (c('React').createElement('div',{className:"_6gd",key:'contentsearch'},c('React').createElement(c('ChatContentSearchButton.react'),{className:"_6gb _6gs",getQuery:function(){return this.refs.input.getValue();}.bind(this),onSelect:this._handleContentSearchSelect})));},_renderEmojiButton:function(){if(!c('ChatConfig').get('www_messenger_emoji_picker'))return null;var n={className:"_6gb _3oxr",onSelect:function(o){this.props.onEmojiSelect&&this.props.onEmojiSelect(o);}.bind(this)};return (c('React').createElement('div',{className:"_6gd",key:'emojipicker'},c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('ChatEmojiButton.react'),bootloadPlaceholder:c('React').createElement('span',{className:n.className})},n))));},_renderLikeButton:function(){if(!c('ChatConfig').get('hotlike'))return null;var n=c('MercuryConfig').CustomColorChatTabGK?this.props.thread&&this.props.thread.custom_color:null,o=(!n?"_6h1":'')+(' '+"_6gb");return (c('React').createElement('div',{className:"_6gd _5ep3",key:'like'},c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('a',{className:o}),bootloadLoader:c('JSResource')('MessengerHotLikeButton.react'),className:o,customColor:n,customLike:this.props.thread&&this.props.thread.custom_like_icon,sendSticker:this.props.onStickerSelect,sendCustomLike:this.props.onCustomLikeSelect,threadID:this.props.threadID})));},_renderP2PButton:function(){if(!this.props.p2pProps||!this.props.showP2PButton)return null;var n=this.props.p2pProps;n.threadID=this.props.threadID;if(this.props.participantIDs&&this.props.participantIDs.length)n.participantIDs=this.props.participantIDs;return (c('React').createElement('div',{className:"_6gd",key:'p2p'},c('React').createElement(c('P2PSendMoneyContainerBootloader.react'),n)));},_handleClick:function(n){if(c('CSS').matchesSelector(n.target,"._1d4_")||c('CSS').matchesSelector(n.target,"._552h")||c('CSS').matchesSelector(n.target,"._552n"))this.refs.input.focus();},_handleEscape:function(n){if(this.state.stickerFlyoutShown)return c('StickerActions').hideStickerTray();this.props.onEscape&&this.props.onEscape(n);},_handleContentSearchSelect:function(n,o){if(n.platformFBID.toString()!==c('MercuryConfig').MessengerAppID){this.uploadURL({attribution_app_id:n.platformFBID,errorDialogParams:{body:j._("There was a problem sending this GIF. Choose another one and try again."),title:j._("Couldn't Send GIF")},external_image_url:n.source.url,preview_url:n.media.preview?n.media.preview.url:n.media.thumbnail.url,source:n.source});}else this.props.onStickerSelect&&this.props.onStickerSelect(n.resultID.toString);}});f.exports=m;},null);
__d('ChatTabComposerContainer.react',['cx','fbt','ChatTabComposer.react','MercuryIDs','MercuryThreads','MercuryMessageActions','P2PGKValues','ReactComponentWithPureRenderMixin','React','MercuryShareAttachmentRenderLocations','SimpleXUIDialog','StoreAndPropBasedStateMixin'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j='right',k=c('React').PropTypes,l=c('React').createClass({displayName:'ChatTabComposerContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('MercuryThreads'))],propTypes:{threadID:k.string,viewer:k.string.isRequired,onEmoticonSelect:k.func,onFileUploadFail:k.func,onPhotoUploadFail:k.func,onStickerSelect:k.func,onUploadCancel:k.func,onUploadComplete:k.func,onUploadSubmit:k.func},statics:{calculateState:function(m){var n=c('MercuryThreads').getForFBID(m.viewer),o=m.threadID?n.getOrFetch(m.threadID):null,p=c('P2PGKValues').P2PVisible&&m.viewer!==c('MercuryIDs').getUserIDFromThreadID(m.threadID);return {thread:o,showP2PButton:p,participantIDs:[],placeholder:m.placeholder};}},componentDidMount:function(){this.props.onMount(this);},render:function(){return (c('React').createElement(c('ChatTabComposer.react'),babelHelpers['extends']({fileUploaderProps:this._getFileUploaderProps(),ref:'composer',thread:this.state.thread},this.props,{p2pProps:this._getP2PProps(),participantIDs:this.state.participantIDs,photoUploaderProps:this._getPhotoUploaderProps(),placeholder:this.state.placeholder,showP2PButton:this.state.showP2PButton,stickerButtonProps:this._getStickerButtonProps()})));},onSend:function(){this.refs.composer.resetInput();},setPlaceholder:function(m){this.setState({placeholder:m});},setParticipantIDs:function(m){m=m||[];this.setState({participantIDs:m});},getInput:function(){return this.refs.composer.getInput();},isUploading:function(){return this.refs.composer.isUploading();},_getP2PProps:function(){if(!this.state.showP2PButton)return {};return {button:c('React').createElement('i',{className:"hidden_elem"}),className:"_6ga _6gb",flyoutAlignment:j,referrer:c('MercuryShareAttachmentRenderLocations').CHAT,threadID:this.props.threadID,onTrigger:this.props.onP2PTrigger};},_getStickerButtonProps:function(){var m={className:"_6gb _6gf",flyoutAlignment:j,threadID:this.props.threadID,onEmoticonSelect:this.props.onEmoticonSelect,onStickerSelect:this.props.onStickerSelect};return m;},_getPhotoUploaderProps:function(){var m={className:"_6gd",customUI:true,imageClassName:"hidden_elem",linkClassName:"_6gb _6ge",onLastUploadCancel:this._handleUploadCancel,onAllUploadsComplete:this._handleUploadComplete,onLastUploadFail:this._handlePhotoUploadFail,onSubmit:this._handleUploadSubmit};return m;},_getFileUploaderProps:function(){var m=this._getPhotoUploaderProps();m.linkClassName="_6gb _6gg";m.imagesOnly=false;m.onLastUploadFail=this._handleFileUploadFail;return m;},_handleUploadComplete:function(m,n){c('MercuryMessageActions').getForFBID(this.props.viewer).confirmAttachmentPlaceholder(n.upload_id,n);this.props.onUploadComplete&&this.props.onUploadComplete(n);},_handleUploadCancel:function(m,n){c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(n.upload_id,n);this.props.onUploadCancel&&this.props.onUploadCancel(n);},_handleFileUploadFail:function(m,n){c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(n.upload_id,n);var o=i._("File Upload Failed"),p=i._("Please try again. There was a problem uploading the file.");if(n.errorDialogParams){o=n.errorDialogParams.title||o;p=n.errorDialogParams.body||p;}this._showErrorDialog(o,p);this.props.onFileUploadFail&&this.rops.onFileUploadFail(n);},_handlePhotoUploadFail:function(m,n){c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(n.upload_id,n);var o=i._("Photo Upload Failed"),p=i._("Please try again. Make sure you are uploading a valid photo.");if(n.errorDialogParams){o=n.errorDialogParams.title||o;p=n.errorDialogParams.body||p;}this._showErrorDialog(o,p);this.props.onPhotoUploadFail&&this.rops.onPhotoUploadFail(n);},_handleUploadSubmit:function(m,n){this.props.onUploadSubmit&&this.props.onUploadSubmit(n);},_showErrorDialog:function(m,n){c('SimpleXUIDialog').show(n,m);}});f.exports=l;},null);