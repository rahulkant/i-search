/*!CK:2705167661!*//*1459132541,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qyGE6"]); }

__d('P2PPlatformContextBannerShape',['React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=h.shape({shouldShowToBuyer:h.bool,shouldShowToSeller:h.bool,shouldShowPayNux:h.bool});f.exports=i;},null);
__d('P2PPlatformContextShippingOptionShape',['React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=h.shape({formattedShippingPrice:h.string,formattedSubtotal:h.string,formattedTax:h.string,formattedTotal:h.string,id:h.string,rawTotal:h.string,title:h.string});f.exports=i;},null);
__d('P2PPlatformContextShape',['P2PPlatformContextBannerShape','P2PPlatformContextProductItemShape','P2PPlatformContextShippingOptionShape','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=h.shape({id:h.string,banner:c('P2PPlatformContextBannerShape'),buyerID:h.string,product:c('P2PPlatformContextProductItemShape'),sellerID:h.string,shippingOptions:h.arrayOf(c('P2PPlatformContextShippingOptionShape'))});f.exports=i;},null);
__d('P2PRequestSenderNUXChatThreadBanner.react',['fbt','P2PBannerType','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXChatThreadBanner.react','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PRequestSenderNUXChatThreadBanner',propTypes:{threadID:i.string.isRequired},render:function(){return (c('React').createElement(c('P2PSendMoneyNUXChatThreadBanner.react'),{bannerType:c('P2PBannerType').REQUEST_SENDER_NUX,bodyText:h._("Get paid back for dinner, rent or anything else."),buttonText:h._("Get Started"),openRequestTab:true,loggerEventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_REQUEST_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:h._("Now you can request money!")}));}});f.exports=j;},null);
__d('P2PSenderNUXChatThreadBanner.react',['fbt','P2PBannerType','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXChatThreadBanner.react','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PSenderNUXChatThreadBanner',propTypes:{threadID:i.string.isRequired},render:function(){return (c('React').createElement(c('P2PSendMoneyNUXChatThreadBanner.react'),{bannerType:c('P2PBannerType').SENDER_NUX,bodyText:h._("It's free and secure."),buttonText:h._("Get Started"),loggerEventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:h._("Now You Can Send Money!")}));}});f.exports=j;},null);
__d('P2PMessageSellerConfirmationDialog.react',['cx','fbt','ix','Image.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PListRow.react','P2PText.react','React','XUICloseButton.react'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('React').createClass({displayName:'P2PMessageSellerConfirmationDialog',propTypes:{onCancel:k.func.isRequired,onPay:k.func.isRequired},render:function(){return (c('React').createElement(c('P2PDialog.react'),{width:480},c('React').createElement(c('P2PDialogBody.react'),{className:"_4-ft"},c('React').createElement(c('XUICloseButton.react'),{className:"_4-fu",onClick:this.props.onCancel}),c('React').createElement(c('P2PListRow.react'),{offsetRight:16,offsetBottom:0},c('React').createElement(c('Image.react'),{height:100,src:j('/images/p2p/owl.png'),width:105}),c('React').createElement('div',null,c('React').createElement(c('P2PText.react'),{className:"_3-94",size:'large',type:'primary',weight:'bold'},i._("Connect with the seller before you pay")),c('React').createElement(c('P2PText.react'),{size:'medium',type:'primary'},i._("Make sure to discuss price and logistics with the seller before you send payment for this item."))))),c('React').createElement(c('P2PDialogFooter.react'),null,c('React').createElement(c('P2PButton.react'),{label:i._("Start Conversation"),onClick:this.props.onCancel}),c('React').createElement(c('P2PButton.react'),{label:i._("Continue to Pay"),onClick:this.props.onPay,use:'confirm'}))));}});f.exports=l;},null);
__d("XC2CPayNUXBannerImpressionsUpdateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/c2c\/pay_nux_banner_impressions\/_update\/",{});},null);