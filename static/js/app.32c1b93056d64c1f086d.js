webpackJsonp([1],{"3IqU":function(t,e){},"4dt1":function(t,e){},CMLp:function(t,e){},FM43:function(t,e){},FRVB:function(t,e){},FuZZ:function(t,e){},N5AY:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},a,!1,function(t){s("FRVB")},null,null).exports,o=s("/ocq"),r=s("BO1k"),c=s.n(r),l=s("mtWM"),d=s.n(l),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"blur",staticStyle:{display:"none"}}),this._v(" "),e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]};var h=s("VU/8")({},u,!1,function(t){s("yCTx")},null,null).exports,v={data:function(){return{}},directives:{"local-highlight":{bind:function(t,e,s){var i=0;if(e.modifiers.delayed&&(i=3e3),e.modifiers.blink){var a=e.value.mainColor,n=e.value.secondColor,o=a;setTimeout(function(){setInterval(function(){o=o==n?a:n,"background"==e.arg?t.style.backgroundColor=o:t.style.color=o},e.value.delay)},i)}else setTimeout(function(){"background"==e.arg?t.style.backgroundColor=e.value.mainColor:t.style.color=e.value.mainColor},i)}}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[s("a",{staticClass:"navbar-brand",staticStyle:{"margin-left":"60px"},attrs:{href:"#"}},[t._v("Live Polling")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("router-link",{attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-home",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Home")])]),t._v(" "),s("router-link",{attrs:{to:"/aboutus",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-vcard",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("About Us")])]),t._v(" "),s("router-link",{attrs:{to:"/contactus",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-phone",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Contact Us")])]),t._v(" "),s("router-link",{attrs:{to:"/rule",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-edit",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Rule")])]),t._v(" "),s("router-link",{attrs:{to:"/spolling",title:t.title,tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-bar-chart",staticStyle:{"font-size":"24px"}}),t._v("Poll")])])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var p=s("VU/8")(v,m,!1,function(t){s("cVkv")},"data-v-dc0e9080",null).exports,f={components:{Loader:h,appHeader:p},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,i=!1,a=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){i=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw a}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code (Q1001)"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("SUBMIT")])])],1)])],1)},staticRenderFns:[]};var _=s("VU/8")(f,g,!1,function(t){s("bhNR")},null,null).exports,C={components:{Loader:h,appHeader:p},data:function(){return{code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;this.showLoader=!0,d.a.get("/static/json/questions.json").then(function(e){var s=!0,i=!1,a=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Poll",params:{quizData:t.quiz}});break}}}catch(t){i=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw a}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("START")])])],1)])],1)},staticRenderFns:[]};var b=s("VU/8")(C,w,!1,function(t){s("CMLp")},"data-v-7c7f1ee0",null).exports,j=s("WaEV"),y=s.n(j),k={props:["quizData"],components:{Loader:h,appHeader:p},data:function(){return{gamesList:[],game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,score:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[]}},methods:{submitAnswer:function(t){var e=this;clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++;var s={answer:-1==t?"Not Answer":["A","B","C","D"][t-1]};socket.emit("submitAnswer",s),setTimeout(function(){e.game="",e.currentId="",e.correctId=""},1e3)},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},finishQuiz:function(){this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer);var t={type:"pie",data:{labels:["Correct","Incorrect","NotAnswer"],datasets:[{label:"Quiz",backgroundColor:["#228B22","#ffce56","#36a2eb"],data:this.result,borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{ticks:[{beginAtZero:!0}]}}};this.createChart("quiz-result",t)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Quiz1"}),this.gamesList=this.quiz1Data,socket.on("startPoll",function(e){t.isComplete=!1,console.log(e),t.game=t.gamesList.filter(function(t){return t.id==e.id})[0],t.timer=t.game.timer,t.countdown()}),socket.on("finishQuiz",function(e){t.isComplete=e,t.finishQuiz()})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[s("canvas",{attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.game?t._e():s("div",{staticClass:"col-12 box"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"points"},[t._v("Score "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.score))])]),t._v(" "),s("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),s("div",{staticClass:"timer"},[s("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),s("div",{staticClass:"quiz"},[s("div",[s("div",{staticClass:"col-12 center"},[s("div",{staticClass:"col-md-10 question"},[t._v("\r\n                            "+t._s(t.game.question)+"\r\n                        ")])]),t._v(" "),s("div",{staticClass:"col-md-12 center"},[s("div",{staticClass:"row col-12 options"},t._l(t.game.options,function(e,i){return s("div",{key:i,staticClass:"col-md-5 option",class:[e.id==t.currentId?(e.id,t.currentId,"correct"):"",e.id==t.currenttId?"correct":""],on:{click:function(s){t.submitAnswer(e.id)}}},[t._v("\r\n                            "+t._s(e.value)+"\r\n                        ")])}))])])]),t._v(" "),s("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}})],1),t._v(" "),t.isComplete||""!=t.game?t._e():s("div",{staticClass:"col-12 box"},[s("loader"),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[t._v("Get Ready")])],1)])])],1)},staticRenderFns:[]};var z=s("VU/8")(k,x,!1,function(t){s("lIKg")},"data-v-1af50fd6",null).exports,I={props:["quizData"],components:{Loader:h,appHeader:p},data:function(){return{gamesList:[],game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,score:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[]}},methods:{submitAnswer:function(t){var e=this;clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++;var s={answer:-1==t?"Not Answer":["A","B","C","D"][t-1]};socket.emit("submitAnswer",s),setTimeout(function(){e.game="",e.currentId="",e.correctId=""},1e3)},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},finishQuiz:function(){this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer);var t={type:"bar",data:{labels:["A","B","C","D"],datasets:[{label:"Quiz",backgroundColor:["#228B22","#ffce56","#36a2eb"],data:this.result,borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{ticks:[{beginAtZero:!0}]}}};this.createChart("quiz-result",t)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Home"}),this.gamesList=this.quizData,socket.on("startPoll",function(e){t.isComplete=!1,console.log(e),t.game=t.gamesList.filter(function(t){return t.id==e.id})[0],t.timer=t.game.timer,t.countdown()}),socket.on("finishQuiz",function(e){t.isComplete=e,t.finishQuiz()})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[s("canvas",{attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.game?t._e():s("div",{staticClass:"col-12 box"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"points"},[t._v("Score "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.score))])]),t._v(" "),s("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),s("div",{staticClass:"timer"},[s("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),s("div",{staticClass:"quiz"},[s("div",[s("div",{staticClass:"col-12 center"},[s("div",{staticClass:"col-md-10 question"},[t._v("\r\n                            "+t._s(t.game.question)+"\r\n                        ")])]),t._v(" "),s("div",{staticClass:"col-md-12 center"},[s("div",{staticClass:"row col-12 options"},t._l(t.game.options,function(e,i){return s("div",{key:i,staticClass:"col-md-5 option",class:[e.id==t.currentId?(e.id,t.currentId,"correct"):"",e.id==t.currentId?"correct":""],on:{click:function(s){t.submitAnswer(e.id)}}},[t._v("\r\n                            "+t._s(e.value)+"\r\n                        ")])}))])])]),t._v(" "),s("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}})],1),t._v(" "),t.isComplete||""!=t.game?t._e():s("div",{staticClass:"col-12 box"},[s("loader"),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[t._v("Get Ready")])],1)])])],1)},staticRenderFns:[]};var L=s("VU/8")(I,q,!1,function(t){s("oIWH")},"data-v-00ad7b3f",null).exports,S=s("fZjL"),E=s.n(S),A={props:["quizData"],components:{Loader:h,appHeader:p},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{finish:function(){this.isComplete=!this.isComplete,this.drawChart(),socket.emit("finishQuiz",this.isComplete)},start:function(){this.gamesList=this.quizData,this.game=this.gamesList.filter(function(t){return 1==t.id})[0],this.timer=this.game.timer},getPoll:function(){this.poll=0,this.pollAnswers={};for(var t=["A","B","C","D"],e=0;e<this.game.options.length;e++)this.pollAnswers[t[e]]=0;console.log(this.pollAnswers);var s={id:this.activeQuestion};socket.emit("startPoll",s),this.drawChart(),this.countdown()},previous:function(){this.poll=0;var t=--this.activeQuestion;this.openQuestion(t)},next:function(){this.poll=0;var t=++this.activeQuestion;this.openQuestion(t)},openQuestion:function(t){var e=this;clearInterval(this.counter),this.showLoader=!0,setTimeout(function(){e.showLoader=!1,e.currentId="",e.correctId="",t<=e.gamesList.length&&(e.game=e.gamesList.filter(function(e){return e.id==t})[0],e.timer=e.game.timer)},1e3)},submitAnswer:function(t){clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},drawChart:function(){var t=this;this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer),console.log(this.pollAnswers);var e={type:"bar",data:{labels:E()(this.pollAnswers),datasets:[{label:"Poll",backgroundColor:"#ff6953",data:E()(this.pollAnswers).map(function(e){return t.pollAnswers[e]}),borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}};this.createChart("quiz-result",e)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Admin"}),socket.on("addUser",function(e){t.loggedInIds.push(e)}),socket.on("submitAnswer",function(e){t.pollAnswers[e.answer]?t.pollAnswers[e.answer]++:t.pollAnswers[e.answer]=1,console.log(t.pollAnswers),t.poll++})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[s("canvas",{staticStyle:{height:"350px"},attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.gamesList?t._e():s("div",{staticClass:"col-12 box"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"points"},[t._v("Poll "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.poll))])]),t._v(" "),s("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),s("div",{staticClass:"timer"},[s("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),s("div",{staticClass:"quiz"},[s("div",[s("div",{staticClass:"col-12 center"},[s("div",{staticClass:"col-md-10 question"},[t._v("\r\n                    "+t._s(t.game.question)+"\r\n                ")])]),t._v(" "),s("div",{staticClass:"col-md-12 center"},[s("div",{staticClass:"row col-md-12 options"},t._l(t.game.options,function(e,i){return s("div",{key:i,staticClass:"col-md-5 option",class:[e.id==t.currentId?e.id==t.correctId?"correct":"incorrect":"",e.id==t.correctId?"correct":""],on:{click:function(s){t.submitAnswer(e.id)}}},[t._v("\r\n                        "+t._s(e.value)+"\r\n                    ")])}))])])]),t._v(" "),s("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}}),t._v(" "),s("div",{staticClass:"left-icon",class:1==t.activeQuestion?"custom-disable":"",on:{click:t.previous}},[s("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),s("div",{staticClass:"right-icon",class:t.activeQuestion==t.gamesList.length?"custom-disable":"",on:{click:t.next}},[s("i",{staticClass:"fa fa-chevron-right"})])],1),t._v(" "),""!=t.gamesList?s("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[s("button",{staticClass:"btn btn-primary c-btn",on:{click:t.getPoll}},[t._v("Poll")]),t._v(" "),s("button",{staticClass:"btn btn-primary c-btn",on:{click:t.finish}},[t._v("Finish")])]):s("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[s("button",{staticClass:"btn btn-primary c-btn",staticStyle:{"margin-top":"90px"},on:{click:t.start}},[t._v("Start")]),t._v(" "),s("div",{staticClass:"col-12"},t._l(t.loggedInIds,function(e,i){return s("span",{key:i,staticClass:"user"},[t._v("\r\n                "+t._s(e)+" \r\n            ")])}))])])])],1)},staticRenderFns:[]};var F=s("VU/8")(A,U,!1,function(t){s("3IqU")},"data-v-19c2226d",null).exports,R={components:{appHeader:p}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"color"},[e("app-Header"),this._v(" "),e("header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("h1",[this._v(" ABOUT US")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"alert alert-success"},[e("p",[this._v(" We are developing an live polling application by taking advantage of the centralized database with a web interface. The main concept of this project is to build a website, which should be able to allow people to give their question live. ")])]),this._v(" "),e("div",{staticClass:"alert alert-info"},[e("p",[this._v("Get real time valuable feedback in which we can get interests in various sessions or speakers.")])]),this._v(" "),e("div",{staticClass:"alert alert-warning"},[e("p",[this._v("Combine single  as well as  multiple choice question and integrate live visualization of incoming answers. Response appear in an animated graphs and charts.")])])])])])}]};var N=s("VU/8")(R,P,!1,function(t){s("oSzI")},null,null).exports,H={components:{appHeader:p}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("h2",[this._v("RULES")]),this._v(" "),e("div",{staticClass:"alert alert-success"},[e("p",[this._v(" We will provided 15 second or 20 second to the user to answer the question.")])]),this._v(" "),e("div",{staticClass:"alert alert-info"},[e("p",[this._v(" User has to give response within given time period.")])]),this._v(" "),e("div",{staticClass:"alert alert-warning"},[e("p",[this._v("User have to enter the Poll code")])])])])}]};var V=s("VU/8")(H,Q,!1,function(t){s("srIE")},null,null).exports,D={components:{appHeader:p}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h1",[this._v(" Contact US")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"alert alert-info"},[e("p",[this._v("For more details you can contact us on")])]),this._v(" "),e("div",{staticClass:"alert alert-danger"},[e("a",{attrs:{href:"#"}},[this._v("psitlivepolling@gmail.com ")])])])])}]};var $=s("VU/8")(D,T,!1,function(t){s("nX4N")},null,null).exports,M={components:{Loader:h},data:function(){return{title:"",slides:7,slide:0,sliding:null,gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1}}},B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-md-8"},[s("br"),s("br"),s("br"),s("br"),t._v(" "),s("div",{staticClass:"col-12 box"},[s("div",{attrs:{id:"carousel"}},[s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:"Have any question??"}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})]),t._v(" "),s("figure",[s("img",{attrs:{src:"http://thumb1.shutterstock.com/display_pic_with_logo/1112138/551774983/stock-photo-thinking-woman-in-glasses-with-her-fingers-on-the-chin-is-standing-near-a-concrete-wall-with-551774983.jpg",width:"260",height:"210",alt:""}})])])])])])])}]};var O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[e("a",{attrs:{href:"#"}},[this._v("psitlivepolling@gmail.com")])])])}]};var W={components:{appHeader:p,appChart:s("VU/8")(M,B,!1,function(t){s("4dt1")},"data-v-23d25848",null).exports,appFooter:s("VU/8")({},O,!1,function(t){s("N5AY")},"data-v-41924f30",null).exports}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-Header"),t._v(" "),s("div",{staticClass:"content"},[s("app-chart")],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("app-footer")],1)},staticRenderFns:[]};var Z=s("VU/8")(W,X,!1,function(t){s("QTZu")},"data-v-01a96fba",null).exports,G={components:{Loader:h,appHeader:p},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,i=!1,a=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){i=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw a}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),e("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"col-12"},[e("router-link",{attrs:{to:"/home"}},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"}},[this._v("Audience poll")])])],1),this._v(" "),e("div",{staticClass:"col-12"},[e("router-link",{attrs:{to:"/survey"}},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{title:this.title}},[this._v("Survey Poll")])])],1)])])],1)},staticRenderFns:[]};var K=s("VU/8")(G,J,!1,function(t){s("FuZZ")},"data-v-46c339a0",null).exports,Y={components:{Loader:h,appHeader:p},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,i=!1,a=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz1",params:{quizData:t.quiz}});break}}}catch(t){i=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw a}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code (Q1005)"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("SUBMIT")])])],1)])],1)},staticRenderFns:[]};var et=s("VU/8")(Y,tt,!1,function(t){s("n1ar")},null,null).exports,st={components:{Loader:h,appHeader:p},data:function(){return{text:"Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla\n        tempor. Laborum consequat non elit enim exercitation cillum aliqua\n        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis\n        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam\n        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum\n        nisi sit est tempor laborum mollit labore officia laborum excepteur\n        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur\n        ipsum commodo tempor sunt in proident."}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("app-header")],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3",attrs:{id:"spy"}},[s("ul",{staticClass:"nav nav-pills flex-column"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#scroll1"}},[t._v("First Section")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#scroll2"}},[t._v("Second Section")])])])]),t._v(" "),s("div",{staticClass:"col-sm-9 scrollspy-example",attrs:{"data-spy":"scroll","data-target":"#spy"}},[s("div",{attrs:{id:"scroll1"}},[s("h2",[t._v("First Section")]),t._v(" "),s("p",[t._v("\r\n    During Compile time, the compiler converts the source code into Microsoft Intermediate Language (MSIL). Microsoft Intermediate Language (MSIL) are CPU-Independent set of instructions that can be effectively converted to the native code. Now with the help of JIT compiler, IL code can be executed on any computer architecture supported by the JIT compiler.\r\n    ")])]),t._v(" "),s("div",{attrs:{id:"scroll2"}},[s("h2",[t._v("Second Section")]),t._v(" "),s("p",[t._v("\r\n    During Compile time, the compiler converts the source code into Microsoft Intermediate Language (MSIL). Microsoft Intermediate Language (MSIL) are CPU-Independent set of instructions that can be effectively converted to the native code. Now with the help of JIT compiler, IL code can be executed on any computer architecture supported by the JIT compiler.\r\n    ")])])])])])}]};var at=s("VU/8")(st,it,!1,function(t){s("FM43")},"data-v-7b160dac",null).exports,nt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[e("h1",[this._v("Animation")]),this._v(" "),e("button",{staticClass:"btn btn-primary"},[this._v(" show alert")])])])])}]};var ot=s("VU/8")({data:function(){return{}}},nt,!1,function(t){s("UpM3")},null,null).exports;i.a.use(o.a);var rt=new o.a({routes:[{path:"/",name:"Index",component:Z},{path:"/home",name:"Home",component:_},{path:"/aboutus",name:"Aboutus",component:N},{path:"/contactus",name:"Contactus",component:$},{path:"/rule",name:"Rule",component:V},{path:"/admin",name:"Admin",component:b},{path:"/quiz",name:"Quiz",component:z,props:!0},{path:"/quiz1",name:"Quiz1",component:L,props:!0},{path:"/poll",name:"Poll",component:F,props:!0},{path:"/spolling",name:"Spolling",component:K},{path:"/survey",name:"Survey",component:et},{path:"/type",name:"Type",component:at},{path:"/dir",name:"Type",component:ot}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:rt,components:{App:n},template:"<App/>"})},QTZu:function(t,e){},UpM3:function(t,e){},bhNR:function(t,e){},cVkv:function(t,e){},lIKg:function(t,e){},n1ar:function(t,e){},nX4N:function(t,e){},oIWH:function(t,e){},oSzI:function(t,e){},srIE:function(t,e){},uslO:function(t,e,s){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="uslO"},yCTx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.32c1b93056d64c1f086d.js.map