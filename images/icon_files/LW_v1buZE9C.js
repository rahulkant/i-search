/*!CK:3278675350!*//*1459219102,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Q7kJ7"]); }

__d('legacy:ci-nateon-login-util',['CINateOnLoginUtil'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.CINateOnLoginUtil=c('CINateOnLoginUtil');},3);
__d('ChatInputBasic.react',['cx','FocusListener','FlipDirectionOnKeypress','React','ReactDOM','TextAreaControl','setImmediate'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();c('FocusListener');c('FlipDirectionOnKeypress');var i=c('React').PropTypes,j=c('React').createClass({displayName:'ChatInputBasic',_oldHeight:undefined,_textAreaControl:undefined,propTypes:{initializeThingsWithInputFn:i.func.isRequired,inputKeyDown:i.func.isRequired,onBlur:i.func,onFocus:i.func,placeholder:i.string,resizeFn:i.func.isRequired},getInitialState:function(){return {value:''};},componentDidMount:function(){this._oldHeight=c('ReactDOM').findDOMNode(this).getBoundingClientRect().height;this.props.resizeFn(this._oldHeight);this.props.initializeThingsWithInputFn(c('ReactDOM').findDOMNode(this.refs.input),this.getValue);this._textAreaControl=c('TextAreaControl').getInstance(this.refs.input);},componentDidUpdate:function(){c('setImmediate')(function(){var k=c('ReactDOM').findDOMNode(this).getBoundingClientRect().height;if(this._oldHeight!==k)this.props.resizeFn(k);this._oldHeight=k;}.bind(this));},onChange:function(k){this._textAreaControl&&this._textAreaControl.onupdate();this.setState({value:k.target.value||''});},focus:function(){this.refs.input.focus();},getValue:function(){return this.state.value;},resetState:function(){this.setState(this.getInitialState());},appendText:function(k){this.setState({value:this.state.value+k});},render:function(){return (c('React').createElement('textarea',babelHelpers['extends']({ref:'input'},this.props,{value:this.state.value,onChange:this.onChange,onKeyDown:this.props.inputKeyDown,autogrow:'true',className:"_552m uiTextareaNoResize uiTextareaAutogrow",'data-jsid':'input'})));}});f.exports=j;},null);