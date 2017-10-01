/*!CK:338391731!*//*1457414090,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nqea\/"]); }

__d("PagesHovercardImpressionConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ACT_LOG_MESSAGE_BUTTON_IMPRESSION:"message_button_impression",ACT_LOG_MESSAGE_BUTTON_CLICK:"message_button_click"};},null);
__d("XPagesHovercardImpressionController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/hovercard\/impression\/",{});},null);
__d('PageHovercardUtilities',['AsyncRequest','Event','PagesHovercardImpressionConstants','XPagesHovercardImpressionController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={registerMessageButton:function(i,j){c('Event').listen(i,'click',function(){var k=c('PagesHovercardImpressionConstants').ACT_LOG_MESSAGE_BUTTON_CLICK,l=c('XPagesHovercardImpressionController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(l).setData({pageID:j,action:k}).send();});}};f.exports=h;},null);