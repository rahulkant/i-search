/*!CK:3990315633!*//*1459132544,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UgCoR"]); }

__d('MessagesEmoticons.react',['cx','fbt','Grid.react','React','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('Grid.react').GridItem,k=c('React').PropTypes,l=8,m={smile:i._("smile"),frown:i._("frown"),tongue:i._("tongue"),grin:i._("grin"),gasp:i._("gasp"),wink:i._("wink"),pacman:i._("pacman"),grumpy:i._("grumpy"),unsure:i._("unsure"),cry:i._("cry"),kiki:i._("kiki"),glasses:i._("glasses"),sunglasses:i._("sunglasses"),heart:i._("heart"),devil:i._("devil"),angel:i._("angel"),squint:i._("squint"),confused:i._("confused"),upset:i._("upset"),colonthree:i._("colonthree"),like:i._("like")},n=c('React').createClass({displayName:'MessagesEmoticons',propTypes:{onEmoticonSelect:k.func},getDefaultProps:function(){return {onEmoticonSelect:c('emptyFunction')};},getEmoticons:function(){return Object.keys(m).map(function(o){return (c('React').createElement(j,{key:o},c('React').createElement('div',{className:"panelCell"},c('React').createElement('a',{'aria-label':m[o],className:'emoticon emoticon_'+o,onClick:function(){return this.props.onEmoticonSelect(o);}.bind(this)}))));}.bind(this));},render:function(){return (c('React').createElement('div',{className:"emoticonsTable"},c('React').createElement(c('Grid.react'),{cols:l,alignv:'middle',alignh:'center',spacing:'pam'},this.getEmoticons())));}});f.exports=n;},null);
__d('DialogFitHeight',['AbstractDialogFitHeight'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.getHeightProperty=function(){'use strict';return 'height';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);