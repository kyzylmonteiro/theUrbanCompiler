(this["webpackJsonpthe-urban-compiler"]=this["webpackJsonpthe-urban-compiler"]||[]).push([[0],{51:function(e){e.exports=JSON.parse('[{"definition":"[Hella]. Originated from the streets of [San Francisco] in the [Hunters Point] neighborhood. It is commonly used in place of \\"really\\" or \\"very\\" when describing something.","permalink":"http://hella.urbanup.com/691669","thumbs_up":11096,"sound_urls":["http://wav.urbandictionary.com/hella-26082.wav"],"author":"TeknoTurd","word":"hella","defid":691669,"current_vote":"","written_on":"2004-05-27T00:00:00.000Z","example":"The [Fillmore] is hella better than [the Mission].\\r\\n\\r\\n[Thank God] LA is hella far away.","thumbs_down":3051,"functions":["p5.rect(50,75,350,250);//hella big rectangle","p5.rect(50,50,250,250);//hella big square"]},{"definition":"A [multi-purpose] word invented by people in north california, indigenous to the [Bay Area]. \\r\\n\\r\\nAdjective: To describe a lot of something or something good.\\r\\n\\r\\nNoun: A lot of\\r\\n\\r\\nAdverb: Suplemental, inferrs a great quantity or that you\'re doing something and [DOING IT RIGHT]!\\r\\n\\r\\nInterjection: An affirmation of what someone just said","permalink":"http://hella.urbanup.com/429279","thumbs_up":4762,"sound_urls":["http://wav.urbandictionary.com/hella-26082.wav"],"author":"Jaime Portocarrero","word":"Hella","defid":429279,"current_vote":"","written_on":"2004-01-05T00:00:00.000Z","example":"Adjective: This party is [hella chill].\\r\\n\\r\\nNoun: I have hella.\\r\\n\\r\\nAdverb: The Bay areais fuckin hella better than [socal]\\r\\n\\r\\nInterjection: Nicole: Dude that shit was [off tha hook]\\r\\nJaime: hella!","thumbs_down":1520,"functions":["p5.noFill(); \\n p5.stroke(10);\\np5.rect(450,10,70,100);\\n p5.rect(225,150,100,50); \\n p5.rect(150,135,170,100); \\n p5.rect(150,115,200,10); \\n p5.rect(150,30,120,100);//hella lot of rectangle"]},{"definition":"When [something] is [turned up] or [popping] ...","permalink":"http://lit.urbanup.com/7514041","thumbs_up":11365,"sound_urls":["http://wav.urbandictionary.com/lit-40984.wav"],"author":"fatoubobala","word":"lit","defid":7514041,"current_vote":"","written_on":"2014-01-24T00:00:00.000Z","example":"John : did [you go] to that party last night\\n\\n[Daquan] : yes [that shit] was lit","thumbs_down":2600,"functions":["p5.fill(0,0,200);\\n p5.noStroke()\\n p5.ellipse(500,200,50,50);//A lit circle","p5.fill(0,0,200);\\n p5.noStroke()\\n p5.rect(500,200,50,50);//A lit square"]},{"definition":"[Something] that is [fucking amazing] in any [sense].","permalink":"http://lit.urbanup.com/3719917","thumbs_up":4608,"sound_urls":["http://wav.urbandictionary.com/lit-40984.wav"],"author":"Greg Nighbor","word":"LIT","defid":3719917,"current_vote":"","written_on":"2009-02-13T00:00:00.000Z","example":"Cody Hottenroth, Greg Nighbor, and [Kirk] [Emmer] are [fucking LIT]!\\r\\n\\r\\n\\r\\n","thumbs_down":1330,"functions":["p5.translate(580, 200);\\n p5.fill(173, 216, 250); \\n p5.noStroke(); \\n for (let i = 0; i < 10; i ++) {\\n p5.ellipse(0, 30, 20, 80);\\n p5.rotate(p5.PI/5);\\n} p5.translate(-580, -200);\\n //A lit Flower"]}]')},52:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_p5__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(53),react_p5__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_p5__WEBPACK_IMPORTED_MODULE_5__),Output=function(_React$Component){Object(E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Output,_React$Component);var _super=Object(E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Output);function Output(){var _this;Object(E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Output);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.x=50,_this.y=50,_this.setup=function(e,t){e.createCanvas(925,350).parent(t)},_this.draw=function(p5){p5.clear(),_this.props.fs.length>=1&&eval(_this.props.fs.join("\n")),eval(_this.props.code)},_this}return Object(E_Projects_theUrbanCompiler_the_urban_compiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Output,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_p5__WEBPACK_IMPORTED_MODULE_5___default.a,{setup:this.setup,draw:this.draw})}}]),Output}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Output},61:function(e,t,a){e.exports=a(79)},66:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(66),a(54)),_=a(13),s=a(14),c=a(10),u=a(16),p=a(18),d=(a(67),a(48)),m=a.n(d),h=a(41),b=a.n(h),f=a(28),E=(a(68),a(69),a(70),a(108)),g=a(50),v=a.n(g),O=(a(71),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).myRef=r.a.createRef(),n.state={code:n.props.code},n.demoMethod=n.demoMethod.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"demoMethod",value:function(){this.props.sendCode(this.state.code)}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.userID!==e.userID&&this.setState((function(e){return{code:e.code}}),(function(){return t.refs.myRef=t.state.code}))}},{key:"componentDidMount",value:function(){m.a.highlightAll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"codeEditor"},this.props.fs.length>=1?r.a.createElement("div",null,this.props.fs.map((function(e){return r.a.createElement("div",{highlight:function(e){return Object(f.highlight)(e,f.languages.processing)}},r.a.createElement(b.a,{className:"editor",value:e,highlight:function(e){return Object(f.highlight)(e,f.languages.processing)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,maxHeight:"100%"}}))}))):r.a.createElement(r.a.Fragment,null),r.a.createElement(b.a,{ref:this.myRef,className:"editor",value:this.state.code,onValueChange:function(t){return e.setState({code:t})},highlight:function(e){return Object(f.highlight)(e,f.languages.processing)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,maxHeight:"100%"}}),r.a.createElement("div",{className:"playButton"},r.a.createElement(E.a,{color:"primary",size:"small","aria-label":"add",onClick:this.demoMethod},r.a.createElement(v.a,null))))}}]),a}(r.a.Component)),C=a(51),y=(a(77),a(114)),k=a(116),D=a(117),M=a(113),w=a(112),j=a(115),P=C,A=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({word:e.target.value})},n.state={word:""},n.demoMethod=n.demoMethod.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"demoMethod",value:function(e){this.props.sendData(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dictionarySection"},r.a.createElement("div",{className:"heading"},r.a.createElement(w.a,{className:"formControl"},r.a.createElement(k.a,{id:"demo-simple-select-helper-label"},"Choose Slang"),r.a.createElement(j.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.word,onChange:this.handleChange},r.a.createElement(D.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(D.a,{value:"Hella"},"Hella"),r.a.createElement(D.a,{value:"Lit"},"Lit"),r.a.createElement(D.a,{value:"Dope"},"Dope")),r.a.createElement(M.a,null,"All definitions from urban Dictionary"))),r.a.createElement("div",{className:"meaningsDisplay"},P.map((function(t){return r.a.createElement("div",null,t.word.toUpperCase()===e.state.word.toUpperCase()?r.a.createElement("div",{className:"meaningBlock",id:t.defid},t.definition.split("[").join(" ").split("]").join(" "),r.a.createElement(y.a,{disableElevation:!0,variant:"contained",color:"primary",onClick:function(){return e.demoMethod(t.functions)},style:{float:"right",margin:"10px"}},"Select")):r.a.createElement(r.a.Fragment,null))}))))}}]),a}(r.a.Component),T=(a(78),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).demoMethod=n.demoMethod.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"demoMethod",value:function(e){this.props.sendFunc(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"functionSection"},r.a.createElement(k.a,{style:{textAlign:"center",margin:"auto"},id:"demo-simple-select-helper-label"},"Code Snippets"),this.props.functions.length>=1?r.a.createElement("div",{className:"meaningsDisplay"},this.props.functions.map((function(t){return r.a.createElement("div",{className:"meaningBlock"},t.split("//")[1].toUpperCase(),r.a.createElement(y.a,{disableElevation:!0,variant:"contained",color:"primary",onClick:function(){return e.demoMethod(t)},style:{float:"right",margin:"10px"}},"Add"))}))):r.a.createElement(r.a.Fragment,null))}}]),a}(r.a.Component)),I=a(52),U=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={code:"",outputCode:"",functions:"",fs:""},n.getData=n.getData.bind(Object(c.a)(n)),n.getOutputCode=n.getOutputCode.bind(Object(c.a)(n)),n.getFunc=n.getFunc.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"getData",value:function(e){this.setState({functions:e})}},{key:"getOutputCode",value:function(e){this.setState({outputCode:e})}},{key:"getFunc",value:function(e){this.setState((function(t){return{fs:[].concat(Object(l.a)(t.fs),[e])}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"leftSection"},r.a.createElement("div",{className:"outputArea"},r.a.createElement(I.a,{code:this.state.outputCode,fs:this.state.fs})),r.a.createElement("div",{className:"codingArea"},r.a.createElement("div",{style:{fontSize:"12px",color:"gray",textAlign:"center"}},"Type P5js code below or choose a slang and then a code snippet"),r.a.createElement(O,{fs:this.state.fs,code:this.state.outputCode,sendCode:this.getOutputCode}))),r.a.createElement("div",{className:"rightSection"},r.a.createElement("div",{className:"meaningsSection"},r.a.createElement(A,{sendData:this.getData})),r.a.createElement("div",{className:"functionsSection"},r.a.createElement(T,{sendFunc:this.getFunc,functions:this.state.functions}))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.a9a8ab1b.chunk.js.map