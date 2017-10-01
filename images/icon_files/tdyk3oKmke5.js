/*!CK:2532228278!*//*1459132459,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8hQYJ"]); }

__d('VideoWithSpacePlayPause',['Event','Run','VideoPlayerReason'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=32;function i(j){'use strict';this.$VideoWithSpacePlayPause1=j;var k=c('Event').listen(window,'keypress',this.$VideoWithSpacePlayPause2.bind(this));c('Run').onLeave(function(){return k.remove();});}i.prototype.$VideoWithSpacePlayPause2=function(j){'use strict';if(this.$VideoWithSpacePlayPause1.isFullscreen()&&j.charCode==h)if(this.$VideoWithSpacePlayPause1.isState('playing')){this.$VideoWithSpacePlayPause1.pause(c('VideoPlayerReason').USER);}else this.$VideoWithSpacePlayPause1.play(c('VideoPlayerReason').USER);};f.exports=i;},null);