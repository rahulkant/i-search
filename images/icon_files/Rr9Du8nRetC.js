/*!CK:2765002322!*//*1459448930,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["JXE8n"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};},null);
__d("PUWErrorCodes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};},null);
__d("PUWMethods",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};},null);
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13};},null);
__d('TreeMap',['Map','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(v,w,x){this.key=v;this.value=w;this.time=x;}function i(v){this.$TreeMap1=function(w,x){var y=v(w,x);return y!==0?y:w.time-x.time;};this.$TreeMap2=new (c('Map'))();this.$TreeMap3=null;this.$TreeMap4=0;this.size=this.$TreeMap2.size;}i.prototype.clear=function(){this.$TreeMap2=new (c('Map'))();this.$TreeMap3=null;this.size=this.$TreeMap2.size;};i.prototype.has=function(v){return this.$TreeMap2.has(v);};i.prototype.set=function(v,w){if(this.has(v))this['delete'](v);var x=new h(v,w,this.$TreeMap4++);this.$TreeMap2.set(v,x);this.$TreeMap3=p(this.$TreeMap3,x,this.$TreeMap1);this.size=this.$TreeMap2.size;return this;};i.prototype.get=function(v){return this.has(v)?this.$TreeMap2.get(v).value:undefined;};i.prototype['delete']=function(v){if(!this.has(v))return false;var w=this.$TreeMap2.get(v);this.$TreeMap3=q(this.$TreeMap3,w,this.$TreeMap1);this.$TreeMap2['delete'](v);this.size=this.$TreeMap2.size;return true;};i.prototype.keys=function(){var v=[];u(this.$TreeMap3,v,function(w){return w.key;});return v;};i.prototype.values=function(){var v=[];u(this.$TreeMap3,v,function(w){return w.value;});return v;};i.prototype.entries=function(){var v=[];u(this.$TreeMap3,v,function(w){return {key:w.key,value:w.value};});return v;};i.prototype.range=function(v,w){var x=[],y=null;if(v)y=new h(v.key,v.value,-1);var z=null;if(w)z=new h(w.key,w.value,this.$TreeMap4);u(this.$TreeMap3,x,function(aa){return {key:aa.key,value:aa.value};},this.$TreeMap1,y,z);return x;};i.prototype.min=function(){if(!this.$TreeMap3)return undefined;var v=r(c('nullthrows')(this.$TreeMap3)),w=v.key,x=v.value;return {key:w,value:x};};i.prototype.max=function(){if(!this.$TreeMap3)return undefined;var v=s(c('nullthrows')(this.$TreeMap3)),w=v.key,x=v.value;return {key:w,value:x};};i.prototype.__testRoot=function(){};function j(v){if(!v)return v;o(v);if(v.balanceFactor<-1){if(v.right&&v.right.balanceFactor<=0){return k(v);}else return l(v);}else if(v.balanceFactor>1){if(v.left&&v.left.balanceFactor>=0){return m(v);}else return n(v);}else return v;}function k(v){var w=v,x=c('nullthrows')(w.right),y=x.left;w.right=y;o(w);c('nullthrows')(x).left=w;o(x);return x;}function l(v){var w=v,x=c('nullthrows')(w.right),y=c('nullthrows')(x.left),z=y.left,aa=y.right;w.right=z;o(w);x.left=aa;o(x);y=c('nullthrows')(y);y.left=w;y.right=x;o(y);return y;}function m(v){var w=v,x=c('nullthrows')(w.left),y=x.right;w.left=y;o(w);x.right=w;o(x);return x;}function n(v){var w=v,x=c('nullthrows')(w.left),y=c('nullthrows')(x.right),z=y.left,aa=y.right;x.right=z;o(x);w.left=aa;o(w);y.left=x;y.right=w;o(y);return y;}function o(v){var w=v.left?v.left.height:-1,x=v.right?v.right.height:-1;v.height=Math.max(w,x)+1;v.balanceFactor=w-x;}function p(v,w,x){if(v==null)return j(w);var y=x(w,v);if(y<0){v.left=p(v.left,w,x);return j(v);}else{v.right=p(v.right,w,x);return j(v);}}function q(v,w,x){if(v==null)return null;if(v===w)if(v.left&&v.right){var y=s(v.left);v.left=t(v.left);y.left=v.left;y.right=v.right;return j(y);}else if(v.left){return j(v.left);}else if(v.right){return j(v.right);}else return null;var z=x(w,v);if(z<0){v.left=q(v.left,w,x);return j(v);}else{v.right=q(v.right,w,x);return j(v);}}function r(v){while(v.left)v=v.left;return v;}function s(v){while(v.right)v=v.right;return v;}function t(v){if(!v)return null;if(v.right==null)return j(v.left||null);v.right=t(v.right);return j(v);}function u(v,w,x,y,z,aa){if(v==null)return;var ba=!y||!z||y(v,z)>=0,ca=!y||!aa||y(v,aa)<=0;if(ba)u(v.left,w,x,y,z,aa);if(ba&&ca)w.push(x(v));if(ca)u(v.right,w,x,y,z,aa);}f.exports=i;},null);
__d('Cache',['DateConsts','Map','TreeMap'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.$Cache1=new (c('Map'))();}h.prototype.has=function(i){return this.$Cache1.has(i);};h.prototype.get=function(i,j){var k=this.__getRaw(i);if(!k)return j;return k.$Cache2;};h.prototype.getAll=function(i,j){var k=new (c('Map'))();i.forEach(function(l){return k.set(l,this.get(l,j));}.bind(this));return k;};h.prototype['delete']=function(i){var j=this.__getRaw(i);if(j&&j.$Cache3)clearTimeout(j.$Cache3);return this.$Cache1['delete'](i);};h.prototype.clear=function(){this.$Cache1.forEach(function(i){if(i&&i.$Cache3)clearTimeout(i.$Cache3);});this.$Cache1.clear();};h.prototype.set=function(i,j,k,l){if(!this.shouldUpdate(i,k))return false;var m=this.__getRaw(i);if(!m)m=this.__getNewRawObject();delete m.$Cache2;delete m.$Cache4;if(m.$Cache3)clearTimeout(m.$Cache3);delete m.$Cache3;m.$Cache2=j;if(k!=null)m.$Cache4=k;if(l!=null&&l>=0)m.$Cache3=setTimeout(this['delete'].bind(this,i),l*c('DateConsts').MS_PER_SEC*c('DateConsts').SEC_PER_MIN);this.__setRaw(i,m);return true;};h.prototype.shouldUpdate=function(i,j){var k=this.__getRaw(i);return (k==null||k.$Cache4==null||j==null||j>k.$Cache4);};h.prototype.size=function(){return this.$Cache1.size;};h.prototype.__getRaw=function(i){return this.$Cache1.get(i);};h.prototype.__setRaw=function(i,j){this.$Cache1.set(i,j);};h.prototype.__getNewRawObject=function(){return {$Cache2:null,$Cache3:null,$Cache4:null,$Cache5:null,$Cache6:null};};h.prototype.__keys=function(){return this.$Cache1.keys();};f.exports=h;},null);
__d('Emscripten',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={isSupported:function(){return (typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);}};},null);
__d('WebWorker',['invariant','BanzaiLogger','WebWorkerConfig','BlobFactory','EventListener','URI','areSameOrigin','destroyOnUnload','SubscriptionsHandler','XHRRequest','arrayContains','emptyFunction','getCrossOriginTransport','performanceNow','memoize','filterObject'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.URL||b.webkitURL;function j(p){'use strict';this.$WebWorker1=false;this.$WebWorker2=null;this.$WebWorker3=p;this.$WebWorker4=null;this.$WebWorker5=c('emptyFunction');this.$WebWorker6=c('emptyFunction');this.$WebWorker7=[];this.$WebWorker8=false;this.$WebWorker9=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){if(!this.$WebWorker8)this.terminate();}.bind(this));this.$WebWorker10('constructed');}j.prototype.setMessageHandler=function(p){'use strict';this.$WebWorker5=p||c('emptyFunction');return this;};j.prototype.setErrorHandler=function(p){'use strict';this.$WebWorker6=p||c('emptyFunction');return this;};j.prototype.postMessage=function(p,q){'use strict';!!this.isCurrentState('constructed')?h(0):void 0;!!this.isCurrentState('terminated')?h(0):void 0;if(this.isCurrentState('preparing')){this.$WebWorker7.push(this.postMessage.bind(this,p,q));return this;}var r={type:'message',message:p};if(q){this.$WebWorker4.postMessage(r,q);}else this.$WebWorker4.postMessage(r);return this;};j.prototype.terminate=function(){'use strict';if(this.isCurrentState('executing'))this.$WebWorker4.terminate();if(!this.isCurrentState('terminated')){this.$WebWorker10('terminated');this.$WebWorker4=null;this.$WebWorker11();this.$WebWorker7=[];}return this;};j.prototype.execute=function(){'use strict';!!this.isCurrentState('terminated')?h(0):void 0;if(['preparing','executing'].some(this.isCurrentState,this))return this;this.$WebWorker10('preparing');j.prepareResource(this.$WebWorker3,this.$WebWorker12.bind(this));return this;};j.prototype.setAllowCrossPageTransition=function(p){'use strict';this.$WebWorker8=p;return this;};j.prototype.isCurrentState=function(p){'use strict';!c('arrayContains')(j.states,p)?h(0):void 0;return p===this.$WebWorker2;};j.prototype.$WebWorker12=function(){'use strict';!!this.isCurrentState('executing')?h(0):void 0;if(this.isCurrentState('terminated'))return;!(this.$WebWorker3.sameOriginURL||this.$WebWorker3.source)?h(0):void 0;if(this.$WebWorker3.sameOriginURL){this.$WebWorker4=new b.Worker(this.$WebWorker3.sameOriginURL);}else{this.$WebWorker4=new b.Worker(j.evalWorkerURL);this.$WebWorker4.postMessage(this.$WebWorker3.source);}this.$WebWorker13('ping',Date.now());if(this.$WebWorker3.dynamicModules)try{this.$WebWorker13('defineModules',this.$WebWorker3.dynamicModules);}catch(p){this.terminate();this.$WebWorker14('define_error',{message:p.message});throw p;}this.$WebWorker15();this.$WebWorker10('executing');this.$WebWorker7.forEach(function(q){return q();});this.$WebWorker7=null;};j.prototype.$WebWorker11=function(){'use strict';this.$WebWorker9.release();};j.prototype.$WebWorker13=function(p){for(var q=arguments.length,r=Array(q>1?q-1:0),s=1;s<q;s++)r[s-1]=arguments[s];'use strict';this.$WebWorker4.postMessage({type:p,args:r});};j.prototype.$WebWorker14=function(event,p){'use strict';j.$WebWorker14(event,this.$WebWorker3.name,babelHelpers['extends']({},p,{cross_page_transition:!!this.$WebWorker8,state:this.$WebWorker2}));};j.$WebWorker16=function(){'use strict';return Object.keys(c('filterObject')({object_url:j.$WebWorker17(),eval_url:n(),data_url:j.$WebWorker18(),worker:j.isSupported(),transferables:j.areTransferablesSupported()},function(p){return !!p;}));};j.prototype.$WebWorker15=function(){'use strict';this.$WebWorker9.addSubscriptions(c('EventListener').listen(this.$WebWorker4,'message',this.$WebWorker19.bind(this)),c('EventListener').listen(this.$WebWorker4,'error',this.$WebWorker20.bind(this)));};j.prototype.$WebWorker20=function(p){'use strict';var q=this.$WebWorker6(p);if(!q&&!p.defaultPrevented)this.$WebWorker14('exception',{message:p.message});};j.prototype.$WebWorker19=function(event){'use strict';var p=event.data;switch(p.type){case 'message':this.$WebWorker5(p.message);break;case 'pong':this.$WebWorker1=true;this.$WebWorker14('executed',{dt:Math.floor(p.args[1]-p.args[0]),bytes:this.$WebWorker3.source.length});break;case 'terminate':this.terminate();break;case 'haste-error':this.terminate();this.$WebWorker14('haste_error',{message:p.message});break;case 'console':var q=p.args.shift();!c('arrayContains')(['log','error','info','debug','warn'],q)?h(0):void 0;b.console[q].apply(b.console,p.args);break;}};j.prototype.$WebWorker10=function(p){'use strict';!c('arrayContains')(j.states,p)?h(0):void 0;this.$WebWorker14('transition',{next_state:p});this.$WebWorker2=p;};j.prepareResource=function(p,q){'use strict';q=q||c('emptyFunction');!(p.sameOriginURL||p.url||p.source)?h(0):void 0;!!!j.isSupported()?h(0):void 0;if(p.sameOriginURL){q();}else if(p.url&&c('areSameOrigin')(new (c('URI'))(p.url),new (c('URI'))(b.location.href))){p.sameOriginURL=p.url;q();}else if(p.source){if(j.$WebWorker21())p.sameOriginURL=j.$WebWorker22(p.source);q();}else if(!p.loading){var r=c('performanceNow')();p.loading=[q];j.$WebWorker23(p.url,function(s){if(s){p.source=s;if(j.$WebWorker21())p.sameOriginURL=j.$WebWorker22(s);}j.$WebWorker14('prepared',p.name,{dt:Math.floor(c('performanceNow')()-r),bytes:s.length});p.loading.forEach(function(t){return t();});p.loading=false;});}else p.loading.push(q);return p;};j.releaseResource=function(p){'use strict';if(p.sameOriginURL.indexOf('blob:')===0){if(i.revokeObjectURL)i.revokeObjectURL(p.sameOriginURL);p.sameOriginURL=null;}return p;};j.isSupported=function(){'use strict';return m&&(j.$WebWorker21()||n());};j.areTransferablesSupported=function(){'use strict';return j.isSupported()&&o();};j.$WebWorker23=function(p,q){'use strict';new (c('XHRRequest'))(p).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseHandler(function(r){q(r);}).setErrorHandler(q.bind(null,null)).send();};j.$WebWorker22=function(p){'use strict';!j.$WebWorker21()?h(0):void 0;if(j.$WebWorker17()){var q=c('BlobFactory').getBlob([p],{type:'application/javascript'});return i.createObjectURL(q);}if(j.$WebWorker18())return 'data:application/javascript,'+encodeURIComponent(p);};j.$WebWorker17=function(){'use strict';return c('BlobFactory').isSupported()&&k();};j.$WebWorker18=function(){'use strict';return l();};j.$WebWorker21=function(){'use strict';return j.$WebWorker17()||j.$WebWorker18();};j.$WebWorker14=function(event,p,q){'use strict';if(!c('WebWorkerConfig').logging.enabled)return;c('BanzaiLogger').log(c('WebWorkerConfig').logging.config,babelHelpers['extends']({},q,{features_array:j.$WebWorker16(),event:event,resource:p}));};var k=c('memoize')(function(){var p,q;if(!i||!i.createObjectURL)return false;try{p=i.createObjectURL(c('BlobFactory').getBlob([''],{type:'application/javascript'}));var s=new b.Worker(p);s.terminate();q=true;}catch(r){q=false;}finally{if(i.revokeObjectURL)i.revokeObjectURL(p);}return q;}),l=c('memoize')(function(){var p;try{var r=new b.Worker('data:application/javascript,');r.terminate();p=true;}catch(q){p=false;}return p;}),m=!!b.Worker,n=c('memoize')(function(){var p;try{var r=new b.Worker(j.evalWorkerURL);r.terminate();p=true;}catch(q){p=false;}return p;}),o=c('memoize')(function(){var p;try{var r=new b.Worker(j.evalWorkerURL),s=new ArrayBuffer(0);r.postMessage({buffer:s},[s]);r.terminate();p=true;}catch(q){p=false;}return p;});j.states=['constructed','preparing','executing','terminated'];j.evalWorkerURL=c('WebWorkerConfig').evalWorkerURL;f.exports=j;},null);
__d('PooledWebWorker',['WebWorker'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('WebWorker'));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this,m);this.$PooledWebWorker1=l;this.$PooledWebWorker2=k;}j.prototype.getIndex=function(){'use strict';return this.$PooledWebWorker1;};j.prototype.getPool=function(){'use strict';return this.$PooledWebWorker2;};f.exports=j;},null);
__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.isSupported=function(){'use strict';return c('PooledWebWorker').isSupported();};function h(i,j){'use strict';this.$WebWorkerPool1=[];for(var k=0;k<j;k++)this.$WebWorkerPool1.push(new (c('PooledWebWorker'))(this,k,i).setErrorHandler(this.$WebWorkerPool2).setMessageHandler(this.$WebWorkerPool3).execute());this.$WebWorkerPool4=0;}h.prototype.setMessageHandler=function(i){'use strict';this.$WebWorkerPool5=i||c('emptyFunction');return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this.$WebWorkerPool1.forEach(function(j){return j.setAllowCrossPageTransition(i);});return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$WebWorkerPool6=i||c('emptyFunction');return this;};h.prototype.postMessage=function(){'use strict';var i=this.getWorker();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];i.postMessage.apply(i,k);return i;};h.prototype.$WebWorkerPool3=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);this.getPool().$WebWorkerPool5.apply(this.getPool(),j);};h.prototype.$WebWorkerPool2=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);return this.getPool().$WebWorkerPool6.apply(this.getPool(),j);};h.prototype.getWorker=function(){'use strict';var i=this.$WebWorkerPool1[this.$WebWorkerPool4];this.$WebWorkerPool4=(this.$WebWorkerPool4+1)%this.$WebWorkerPool1.length;return i;};f.exports=h;},null);
__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','WebWorker','WebWorkerPool','PUWErrorCodes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;i.isSupported=function(){'use strict';return c('WebWorkerPool').isSupported()&&c('Emscripten').isSupported()&&!c('JpegResizerConfig').isGKBlacklisted;};i.getSingleton=function(j){'use strict';if(!h)h=new i(j||i.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return h;};i.prepareResource=function(j){'use strict';c('WebWorker').prepareResource(c('JpegResizeWorkerResource'),j);};function i(j){'use strict';j=j||i.DEFAULT_POOL_SIZE;c('WebWorker').prepareResource(c('JpegResizeWorkerResource'));this.$JpegResizer1=new (c('WebWorkerPool'))(c('JpegResizeWorkerResource'),j).setErrorHandler(this.$JpegResizer2.bind(this)).setMessageHandler(this.$JpegResizer3.bind(this));this.$JpegResizer4={};this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}i.prototype.setHighQuality=function(j){'use strict';if(j){this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer5=i.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer6=i.LOW_QUALITY_RESIZE_WIDTH;}return this;};i.prototype.setAllowCrossPageTransition=function(j){'use strict';this.$JpegResizer1.setAllowCrossPageTransition(j);return this;};i.prototype.resizeBlob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6,this.$JpegResizer5,k,l);};i.prototype.resize360Blob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6*4,this.$JpegResizer5*4,k,l);};i.prototype.$JpegResizer7=function(j,k,l,m,n){'use strict';var o=this.$JpegResizer1.getWorker();if(o.isCurrentState('terminated')){var p=new Error('Worker terminated');p.code=c('PUWErrorCodes').WORKER_TERMINATED;m(p);return this;}var q=o.postMessage({blob:j,height:l,width:k}).getIndex();this.$JpegResizer8(q).unshift({done:m,progress:n});return this;};i.prototype.$JpegResizer8=function(j){'use strict';if(!this.$JpegResizer4.hasOwnProperty(j))this.$JpegResizer4[j]=[];return this.$JpegResizer4[j];};i.prototype.$JpegResizer2=function(j,k){'use strict';j.terminate();var l=this.$JpegResizer8(j.getIndex());this.$JpegResizer9(k);l.forEach(function(m){return m.done(k);});l.length=0;};i.prototype.$JpegResizer3=function(j,k){'use strict';if(k.error)this.$JpegResizer9(k.error);if(k.done){this.$JpegResizer8(j.getIndex()).pop().done(k.error,k.blob,k.skipped);}else{var l=this.$JpegResizer8(j.getIndex()),m=l[l.length-1].progress;if(m)m({written:k.written,total:k.total});}};i.prototype.$JpegResizer9=function(j){'use strict';var k=j.message;if(k.indexOf('Not a JPEG file')!==-1){j.code=c('PUWErrorCodes').BAD_JPEG;}else if(k.indexOf('abort()')!==-1){j.code=c('PUWErrorCodes').WORKER_ABORT;}else j.code=c('PUWErrorCodes').UNKNOWN_RESIZE_ERROR;};i.DEFAULT_POOL_SIZE=3;i.DEFAULT_RESIZE_HEIGHT=2048;i.DEFAULT_RESIZE_WIDTH=2048;i.LOW_QUALITY_RESIZE_HEIGHT=960;i.LOW_QUALITY_RESIZE_WIDTH=960;f.exports=i;},null);
__d('AsyncUploadBase',['ArbiterMixin','AsyncRequest','AsyncResponse','BrowserSupport','Form','forEachObject','mixin','removeFromArray'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;j.parseFiles=function(l){'use strict';var m={};c('forEachObject')(l,function(n,o){if(Array.isArray(n)){m[o]=n;}else{m[o]=[];if(n instanceof window.FileList){for(var p=0;p<n.length;p++)m[o].push(n.item(p));}else if(n instanceof window.File||n instanceof window.Blob)m[o].push(n);}});return m;};function j(l){'use strict';i.constructor.call(this);this._customHeader={};this.setURI(l);this.setNetworkErrorRetryLimit(0);}j.prototype.setAllowCrossOrigin=function(l){'use strict';this._allowCrossOrigin=!!l;return this;};j.prototype.setAllowCrossPageTransition=function(l){'use strict';this._allowCrossPageTransition=!!l;return this;};j.prototype.setCustomHttpHeader=function(l,m){'use strict';this._customHeader[l]=m;return this;};j.prototype.setData=function(l){'use strict';this._data=l;return this;};j.prototype.setLimit=function(l){'use strict';this._limit=l;return this;};j.prototype.setNetworkErrorRetryLimit=function(l){'use strict';this._retryLimit=l;return this;};j.prototype.setPreprocessHandler=function(l){'use strict';this._preprocessHandler=l;return this;};j.prototype.setRelativeTo=function(l){'use strict';this._relativeTo=l;return this;};j.prototype.setStatusElement=function(l){'use strict';this._statusElement=l;return this;};j.prototype.setURI=function(l){'use strict';this._uri=l;return this;};j.prototype.suspend=function(){'use strict';this._suspended=true;return this;};j.prototype.resume=function(){'use strict';this._suspended=false;this._processQueue();return this;};j.prototype.isUploading=function(){'use strict';return this._inFlight;};j.prototype._createFileUpload=function(l,m,n){'use strict';return new k(l,m,n);};j.prototype._processQueue=function(){'use strict';if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var l=this._waiting.shift();if(this._preprocessHandler){this._preprocessHandler(l,this._processUpload.bind(this));}else this._processUpload(l);this._pending.push(l);}};j.prototype._processUpload=function(l){'use strict';var m=c('Form').createFormData(l.getData()||this._data);if(l.getFile()){m.append(l.getName(),l.getFile());var n=l.getFile().uploadID;if(n)m.append('upload_id',n);}var o=new (c('AsyncRequest'))().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(m).setStatusElement(this._statusElement).setHandler(this._success.bind(this,l)).setErrorHandler(this._failure.bind(this,l)).setUploadProgressHandler(this._progress.bind(this,l)).setInitialHandler(this._initial.bind(this,l));for(var p in this._customHeader)o.setRequestHeader(p,this._customHeader[p]);if(this._relativeTo)o.setRelativeTo(this._relativeTo);o.send();l.setAsyncRequest(o);this._inFlight=true;if(!l.getRetryCount())this.inform('start',l);};j.prototype._abort=function(l){'use strict';if(this._pending.indexOf(l)!==-1){c('removeFromArray')(this._pending,l);this._processQueue();}c('removeFromArray')(this._waiting,l);l.abort();};j.prototype._initial=function(l){'use strict';if(l.isAborted())return;this.inform('initial',l);};j.prototype._success=function(l,m){'use strict';if(l.isAborted()){this.inform('success_after_abort',m);return;}this._complete(l);this.inform('success',l.handleSuccess(m));this._processQueue();};j.prototype._retryUpload=function(l){'use strict';l.increaseRetryCount();this._processUpload(l);};j.prototype._failure=function(l,m){'use strict';if(l.isAborted())return;if(m.error===1004&&l.getRetryCount()<this._retryLimit)return this._retryUpload(l);this._complete(l);if(this.inform('failure',l.handleFailure(m))!==false)c('AsyncResponse').defaultErrorHandler(m);this._processQueue();};j.prototype._progress=function(l,event){'use strict';if(l.isAborted())return;this.inform('progress',l.handleProgress(event));};j.prototype._complete=function(l){'use strict';c('removeFromArray')(this._pending,l);if(!this._pending.length)this._inFlight=false;};j.isSupported=function(){'use strict';return c('BrowserSupport').hasFileAPI();};Object.assign(j.prototype,{_limit:10});function k(l,m,n){'use strict';this._name=l;this._file=m;this._data=n;this._success=null;this._response=null;this._progressEvent=null;this._request=null;this._numRetries=0;this._aborted=false;}k.prototype.getName=function(){'use strict';return this._name;};k.prototype.getFile=function(){'use strict';return this._file;};k.prototype.setFile=function(l){'use strict';this._file=l;};k.prototype.getData=function(){'use strict';return this._data;};k.prototype.isComplete=function(){'use strict';return this._success!==null;};k.prototype.isSuccess=function(){'use strict';return this._success===true;};k.prototype.getResponse=function(){'use strict';return this._response;};k.prototype.getProgressEvent=function(){'use strict';return this._progressEvent;};k.prototype.setAsyncRequest=function(l){'use strict';this._request=l;return this;};k.prototype.increaseRetryCount=function(){'use strict';this._numRetries++;return this;};k.prototype.getRetryCount=function(){'use strict';return this._numRetries;};k.prototype.isWaiting=function(){'use strict';return !this._request;};k.prototype.isAborted=function(){'use strict';return this._aborted;};k.prototype.abort=function(){'use strict';this._request=null;this._aborted=true;};k.prototype.handleSuccess=function(l){'use strict';this._success=true;this._response=l;this._progressEvent=null;return this;};k.prototype.handleFailure=function(l){'use strict';this._success=false;this._response=l;this._progressEvent=null;return this;};k.prototype.handleProgress=function(event){'use strict';this._progressEvent=event;return this;};f.exports=j;},null);
__d('AsyncUploadRequest',['AsyncUploadBase'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AsyncUploadBase'));i=h&&h.prototype;j.prototype.setFiles=function(k){'use strict';this._files=c('AsyncUploadBase').parseFiles(k);return this;};j.prototype.abort=function(){'use strict';this._uploads.forEach(function(k){return this._abort(k);}.bind(this),this);};j.prototype.send=function(){'use strict';if(this._inFlight)return;this._inFlight=true;this._uploads=[];for(var k in this._files)this._files[k].forEach(function(l){this._uploads.push(this._createFileUpload(k,l));}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];if(this._uploads.length){this._processQueue();}else this._processUpload(this._createFileUpload(null,null));};j.prototype._processQueue=function(){'use strict';i._processQueue.call(this);if(!this._pending.length&&!this._waiting.length)this.inform('complete',this._uploads);};j.isSupported=function(){'use strict';return c('AsyncUploadBase').isSupported();};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('ErrorDialog',['Dialog','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={showAsyncError:function(i){try{return h.show(i.getErrorSummary(),i.getErrorDescription());}catch(j){alert(i);}},show:function(i,j,k,l){return new (c('Dialog'))().setTitle(i).setBody(j).setButtons([c('Dialog').OK]).setStackable(true).setModal(true).setHandler(k||c('emptyFunction')).setButtonsMessage(l||'').show();}};f.exports=h;},null);
__d('FileForm',['ArbiterMixin','AsyncRequest','AsyncResponse','AsyncUploadRequest','BehaviorsMixin','CurrentUser','DataStore','DOMQuery','Event','Form','JSONPTransport','Parent','URI','isElementNode','mixin','shield'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();function j(m){var n={},o=c('DOMQuery').scry(m,'input[type="file"]');o.forEach(function(p){n[p.name]=p.files;});return n;}function k(m){var n=c('DOMQuery').scry(m,'input[type="file"]');n.forEach(function(o){o.files=null;});}h=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;function l(m,n,o){'use strict';i.constructor.call(this);if(m.getAttribute('rel')==='async')throw new Error('FileForm cannot be used with Primer forms.');if(m.getAttribute('method').toUpperCase()!=='POST')throw new Error('FileForm must be used with POST forms.');this._form=m;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding='multipart/form-data';this._files=null;this._customHeader={};n&&this.enableBehaviors(n);this._options=o||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[c('Event').listen(document.documentElement,'submit',this._submit.bind(this)),c('Event').listen(this._form,'click',this._click.bind(this))];c('DataStore').set(this._form,'FileForm',this);}l.prototype.getRoot=function(){'use strict';return this._form;};l.prototype.setAllowCrossOrigin=function(m){'use strict';this._allowCrossOrigin=!!m;return this;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allowCrossPageTransition=!!m;return this;};l.prototype.setUploadInParallel=function(m){'use strict';this._uploadInParallel=!!m;return this;};l.prototype.setConcurrentLimit=function(m){'use strict';this._concurrentLimit=m;return this;};l.prototype.setCustomHttpHeader=function(m,n){'use strict';this._customHeader[m]=n;return this;};l.prototype.setPreprocessHandler=function(m){'use strict';this._preprocessHandler=m;return this;};l.prototype.setNetworkErrorRetryLimit=function(m){'use strict';this._retryLimit=m;return this;};l.prototype.setFiles=function(m){'use strict';this._files=m;return this;};l.prototype.canUseXHR=function(){'use strict';var m='FormData' in window;if(m)if(!new (c('URI'))(this._form.action).isSameOrigin()&&!this._allowCrossOrigin)m=false;return m;};l.prototype._submit=function(event){'use strict';if(event.isDefaultPrevented()||event.getTarget()!==this._form)return;if(this.inform('submit')===false){event.prevent();return;}return this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame(event);};l.prototype._click=function(event){'use strict';var m=event.getTarget();while(c('isElementNode')(m)){if(m.type==='submit'){this._clickTarget=m;setTimeout(this._unclick.bind(this),0);break;}m=m.parentNode;}};l.prototype._unclick=function(){'use strict';this._clickTarget=null;};l.prototype._sendViaFrame=function(event){'use strict';var m=this._request=new (c('AsyncRequest'))();m.setStatusElement(this._getStatusElement());m.addStatusIndicator();m.setOption('useIframeTransport',true);var n=m.handleResponse.bind(m),o=new (c('JSONPTransport'))('iframe',this._form.action,n),p=o.getTransportFrame(),q=o.getRequestURI().addQueryData({__iframe:true,__user:c('CurrentUser').getID()});this._form.setAttribute('action',q.toString());this._form.setAttribute('target',p.name);m.setJSONPTransport(o);m.setURI(q);m.setHandler(this.success.bind(this,null));m.setErrorHandler(this.failure.bind(this,null));m.setInitialHandler(c('shield')(this.initial,this,null));};l.prototype._sendViaXHR=function(event){'use strict';var m;if(this._uploadInParallel&&c('AsyncUploadRequest').isSupported()){m=new (c('AsyncUploadRequest'))().setPreprocessHandler(this._preprocessHandler).setData(c('Form').serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);for(var n in this._customHeader)m.setCustomHttpHeader(n,this._customHeader[n]);if(this._concurrentLimit)m.setLimit(this._concurrentLimit);if(this._files){m.setFiles(this._files);}else m.setFiles(j(this._form));var o=[m.subscribe('progress',function(s,t){this.progress(t,t.getProgressEvent());}.bind(this)),m.subscribe('initial',function(s,t){this.initial(t,t.getResponse());}.bind(this)),m.subscribe('success',function(s,t){this.success(t,t.getResponse());}.bind(this)),m.subscribe('start',function(s,t){this.inform('start',{upload:t});}.bind(this)),m.subscribe('failure',function(s,t){this.failure(t,t.getResponse());return false;}.bind(this)),m.subscribe('complete',function(){while(o.length)o.pop().unsubscribe();})];}else{var p;if(this._files){p=c('Form').createFormData(c('Form').serialize(this._form,this._clickTarget));var q=c('AsyncUploadRequest').parseFiles(this._files);for(var n in q){var r=q[n];if(r.length===1){p.append(n,r[0]);}else{n=n+'[]';r.forEach(function(s){p.append(n,s);});}}}else p=c('Form').createFormData(this._form,this._clickTarget);m=new (c('AsyncRequest'))().setRawData(p).setHandler(this.success.bind(this,null)).setErrorHandler(this.failure.bind(this,null)).setUploadProgressHandler(this.progress.bind(this,null)).setInitialHandler(c('shield')(this.initial,this,null));}m.setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=m;event&&event.prevent();};l.prototype.forceSendViaXHR=function(){'use strict';return this._sendViaXHR(null);};l.prototype.initial=function(m){'use strict';return this.inform('initial',{upload:m});};l.prototype.success=function(m,n){'use strict';var o={response:n,upload:m};if(this.inform('success',o)!==false)c('Event').fire(this._form,'success',o);this._cleanup();};l.prototype.failure=function(m,n){'use strict';var o={response:n,upload:m};if(this.inform('failure',o)!==false)if(c('Event').fire(this._form,'error',o)!==false)c('AsyncResponse').defaultErrorHandler(n);this._cleanup();};l.prototype.progress=function(m,event){'use strict';this.inform('progress',{event:event,upload:m});};l.prototype.abort=function(){'use strict';if(this._request){this._request.abort();this._cleanup();}};l.prototype.clear=function(){'use strict';k(this._form);};l.prototype.destroy=function(){'use strict';this._cleanup();while(this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;c('DataStore').remove(this._form,'FileForm');};l.prototype._cleanup=function(){'use strict';this._request=null;};l.prototype._getStatusElement=function(){'use strict';return c('Parent').byClass(this._form,'stat_elem')||this._form;};l.getInstance=function(m){'use strict';return c('DataStore').get(m,'FileForm');};Object.assign(l,{EVENTS:['start','submit','initial','progress','success','failure']});f.exports=l;},null);
__d('FileInputUploader',['ArbiterMixin','DOM','DTSG','FileForm','Form','mixin','submitForm'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this._inputElem=k;this._data={};}j.prototype.setInput=function(k){'use strict';this._inputElem=k;return this;};j.prototype.setURI=function(k){'use strict';this._uri=k;return this;};j.prototype.setData=function(k){'use strict';this._data=k;return this;};j.prototype.setPreprocessHandler=function(k){'use strict';this._preprocessHandler=k;return this;};j.prototype.setNetworkErrorRetryLimit=function(k){'use strict';this._retryLimit=k;return this;};j.prototype.setFiles=function(k){'use strict';this._files=k;return this;};j.prototype.setAllowCrossOrigin=function(k){'use strict';this._allowCrossOrigin=!!k;return this;};j.prototype.setAllowCrossPageTransition=function(k){'use strict';this._allowCrossPageTransition=!!k;return this;};j.prototype.setUploadInParallel=function(k){'use strict';this._uploadInParallel=!!k;return this;};j.prototype.setConcurrentLimit=function(k){'use strict';this._concurrentLimit=k;return this;};j.prototype.abort=function(){'use strict';if(this._fileForm){this._fileForm.abort();this._destroyFileForm();}};j.prototype.send=function(){'use strict';this._createForm();var k=this._inputElem.cloneNode(false);c('DOM').replace(this._inputElem,k);c('DOM').appendContent(this._formElem,this._inputElem);c('DOM').appendContent(document.body,this._formElem);c('submitForm')(this._formElem);c('DOM').replace(k,this._inputElem);this._removeFormEl();};j.prototype._onFileFormEvent=function(k,l){'use strict';if(k==='success'||k==='failure')this._destroyFileForm();this.inform(k,l);};j.prototype._createForm=function(){'use strict';this._destroyFileForm();this._formElem=c('DOM').create('form',{action:this._uri,method:'post'});this._fileForm=new (c('FileForm'))(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(c('FileForm').EVENTS,this._onFileFormEvent.bind(this));c('Form').createHiddenInputs(babelHelpers['extends']({fb_dtsg:c('DTSG').getToken()},this._data),this._formElem);};j.prototype._removeFormEl=function(){'use strict';c('DOM').remove(this._formElem);this._formElem=null;};j.prototype._destroyFileForm=function(){'use strict';if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}};f.exports=j;},null);
__d('PagesComposerActionsTypes',['keyMirror'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('keyMirror')({BACKDATE:null,SET_DRAFT:null,SCHEDULE:null,SET_ADS_POST:null,SET_BOOSTED_POST:null});f.exports=h;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){'use strict';this.$VideoUploadFile1=i;this.$VideoUploadFile2=j;this.$VideoUploadFile3=k;this.$VideoUploadFile4=l;}h.fromFile=function(i){'use strict';var j=h.getExtensionFromFileName(i.name);return new this(null,i,i.size,j);};h.fromFileInput=function(i){'use strict';var j=null,k=null,l=h.getExtensionFromFileInput(i);if(c('VideoUploadFeatureDetector').supportsFileAPI()&&i.files.length){j=i.files[0];k=j.size;}return new this(i,j,k,l);};h.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};h.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};h.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};h.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};h.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===c('ImageExtensions').GIF)return c('VideoCreatorProductType').ANIMATED_GIFS;return c('VideoCreatorProductType').CORE_VIDEOS;};h.prototype.getChunk=function(i,j){'use strict';return this.$VideoUploadFile2?c('fileSlice').call(this.$VideoUploadFile2,i,j):null;};h.getExtensionFromFileInput=function(i){'use strict';return this.getExtensionFromFileName(i.value);};h.getExtensionFromFileName=function(i){'use strict';return i.indexOf('.')!=-1?i.split('.').pop().toLowerCase():'';};f.exports=h;},null);