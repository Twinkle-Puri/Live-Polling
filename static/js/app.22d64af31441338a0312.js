webpackJsonp([1],{"01KJ":function(t,e){},"4+Ov":function(t,e){},CMLp:function(t,e){},CZeo:function(t,e){},DPCb:function(t,e){},FRVB:function(t,e){},MJoH:function(t,e){},N5AY:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("FRVB")},null,null).exports,o=s("/ocq"),r=s("BO1k"),c=s.n(r),l=s("mtWM"),d=s.n(l),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"blur",staticStyle:{display:"none"}}),this._v(" "),e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]};var v=s("VU/8")({},u,!1,function(t){s("yCTx")},null,null).exports,h={directives:{"local-highlight":{bind:function(t,e,s){var a=0;if(e.modifiers.delayed&&(a=3e3),e.modifiers.blink){var i=e.value.mainColor,n=e.value.secondColor,o=i;setTimeout(function(){setInterval(function(){o=o==n?i:n,"background"==e.arg?t.style.backgroundColor=o:t.style.color=o},e.value.delay)},a)}else setTimeout(function(){"background"==e.arg?t.style.backgroundColor=e.value.mainColor:t.style.color=e.value.mainColor},a)}}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[s("a",{staticClass:"navbar-brand",staticStyle:{"margin-left":"60px"},attrs:{href:"#"}},[t._v("Live Polling")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("router-link",{attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-home",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Home")])]),t._v(" "),s("router-link",{attrs:{to:"/aboutus",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-vcard",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("About Us")])]),t._v(" "),s("router-link",{attrs:{to:"/contactus",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-phone",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Contact Us")])]),t._v(" "),s("router-link",{attrs:{to:"/rule",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-edit",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Rule")])]),t._v(" "),s("router-link",{attrs:{to:"/spolling",tag:"li","active-class":"active"}},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"fa fa-bar-chart",staticStyle:{"font-size":"24px"}}),t._v("Poll")])])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var m=s("VU/8")(h,p,!1,function(t){s("ixR9")},"data-v-2e1101a7",null).exports,f={components:{Loader:v,appHeader:m},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,a=!1,i=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code (Q1001)"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("SUBMIT")])])],1)])],1)},staticRenderFns:[]};var C=s("VU/8")(f,g,!1,function(t){s("bhNR")},null,null).exports,_={components:{Loader:v,appHeader:m},data:function(){return{code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;this.showLoader=!0,d.a.get("/static/json/questions.json").then(function(e){var s=!0,a=!1,i=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Poll",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("START")])])],1)])],1)},staticRenderFns:[]};var j=s("VU/8")(_,b,!1,function(t){s("CMLp")},"data-v-7c7f1ee0",null).exports,w=s("WaEV"),y=s.n(w),x={props:["quizData"],components:{Loader:v,appHeader:m},data:function(){return{gamesList:[],game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,score:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[]}},methods:{submitAnswer:function(t){var e=this;clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++;var s={answer:-1==t?"Not Answer":["A","B","C","D"][t-1]};socket.emit("submitAnswer",s),setTimeout(function(){e.game="",e.currentId="",e.correctId=""},1e3)},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},finishQuiz:function(){this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer);var t={type:"pie",data:{labels:["Correct","Incorrect","NotAnswer"],datasets:[{label:"Quiz",backgroundColor:["#228B22","#ffce56","#36a2eb"],data:this.result,borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{ticks:[{beginAtZero:!0}]}}};this.createChart("quiz-result",t)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Home"}),this.gamesList=this.quizData,socket.on("startPoll",function(e){t.isComplete=!1,console.log(e),t.game=t.gamesList.filter(function(t){return t.id==e.id})[0],t.timer=t.game.timer,t.countdown()}),socket.on("finishQuiz",function(e){t.isComplete=e,t.finishQuiz()})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[s("canvas",{attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.game?t._e():s("div",{staticClass:"col-12 box"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"points"},[t._v("Score "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.score))])]),t._v(" "),s("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),s("div",{staticClass:"timer"},[s("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),s("div",{staticClass:"quiz"},[s("div",[s("div",{staticClass:"col-12 center"},[s("div",{staticClass:"col-md-10 question"},[t._v("\r\n                            "+t._s(t.game.question)+"\r\n                        ")])]),t._v(" "),s("div",{staticClass:"col-md-12 center"},[s("div",{staticClass:"row col-12 options"},t._l(t.game.options,function(e,a){return s("div",{key:a,staticClass:"col-md-5 option",class:[e.id==t.currentId?e.id==t.correctId?"correct":"incorrect":"",e.id==t.correctId?"correct":""],on:{click:function(s){t.submitAnswer(e.id)}}},[t._v("\r\n                            "+t._s(e.value)+"\r\n                        ")])}))])])]),t._v(" "),s("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}})],1),t._v(" "),t.isComplete||""!=t.game?t._e():s("div",{staticClass:"col-12 box"},[s("loader"),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[t._v("Get Ready")])],1)])])],1)},staticRenderFns:[]};var z=s("VU/8")(x,k,!1,function(t){s("MJoH")},"data-v-4c9763f4",null).exports,q=s("fZjL"),I=s.n(q),L={props:["quizData"],components:{Loader:v,appHeader:m},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{finish:function(){this.isComplete=!this.isComplete,this.drawChart(),socket.emit("finishQuiz",this.isComplete)},start:function(){this.gamesList=this.quizData,this.game=this.gamesList.filter(function(t){return 1==t.id})[0],this.timer=this.game.timer},getPoll:function(){this.poll=0,this.pollAnswers={};for(var t=["A","B","C","D"],e=0;e<this.game.options.length;e++)this.pollAnswers[t[e]]=0;console.log(this.pollAnswers);var s={id:this.activeQuestion};socket.emit("startPoll",s),this.drawChart(),this.countdown()},previous:function(){this.poll=0;var t=--this.activeQuestion;this.openQuestion(t)},next:function(){this.poll=0;var t=++this.activeQuestion;this.openQuestion(t)},openQuestion:function(t){var e=this;clearInterval(this.counter),this.showLoader=!0,setTimeout(function(){e.showLoader=!1,e.currentId="",e.correctId="",t<=e.gamesList.length&&(e.game=e.gamesList.filter(function(e){return e.id==t})[0],e.timer=e.game.timer)},1e3)},submitAnswer:function(t){clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},drawChart:function(){var t=this;this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer),console.log(this.pollAnswers);var e={type:"bar",data:{labels:I()(this.pollAnswers),datasets:[{label:"Quiz",backgroundColor:"#ff6953",data:I()(this.pollAnswers).map(function(e){return t.pollAnswers[e]}),borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}};this.createChart("quiz-result",e)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Admin"}),socket.on("addUser",function(e){t.loggedInIds.push(e)}),socket.on("submitAnswer",function(e){t.pollAnswers[e.answer]?t.pollAnswers[e.answer]++:t.pollAnswers[e.answer]=1,console.log(t.pollAnswers),t.poll++})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[s("canvas",{staticStyle:{height:"350px"},attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.gamesList?t._e():s("div",{staticClass:"col-12 box"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"points"},[t._v("Poll "),s("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.poll))])]),t._v(" "),s("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),s("div",{staticClass:"timer"},[s("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),s("div",{staticClass:"quiz"},[s("div",[s("div",{staticClass:"col-12 center"},[s("div",{staticClass:"col-md-10 question"},[t._v("\r\n                    "+t._s(t.game.question)+"\r\n                ")])]),t._v(" "),s("div",{staticClass:"col-md-12 center"},[s("div",{staticClass:"row col-md-12 options"},t._l(t.game.options,function(e,a){return s("div",{key:a,staticClass:"col-md-5 option",class:[e.id==t.currentId?e.id==t.correctId?"correct":"incorrect":"",e.id==t.correctId?"correct":""],on:{click:function(s){t.submitAnswer(e.id)}}},[t._v("\r\n                        "+t._s(e.value)+"\r\n                    ")])}))])])]),t._v(" "),s("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}}),t._v(" "),s("div",{staticClass:"left-icon",class:1==t.activeQuestion?"custom-disable":"",on:{click:t.previous}},[s("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),s("div",{staticClass:"right-icon",class:t.activeQuestion==t.gamesList.length?"custom-disable":"",on:{click:t.next}},[s("i",{staticClass:"fa fa-chevron-right"})])],1),t._v(" "),""!=t.gamesList?s("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[s("button",{staticClass:"btn btn-primary c-btn",on:{click:t.getPoll}},[t._v("Poll")]),t._v(" "),s("button",{staticClass:"btn btn-primary c-btn",on:{click:t.finish}},[t._v("Finish")])]):s("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[s("button",{staticClass:"btn btn-primary c-btn",staticStyle:{"margin-top":"90px"},on:{click:t.start}},[t._v("Start")]),t._v(" "),s("div",{staticClass:"col-12"},t._l(t.loggedInIds,function(e,a){return s("span",{key:a,staticClass:"user"},[t._v("\r\n                "+t._s(e)+" \r\n            ")])}))])])])],1)},staticRenderFns:[]};var E=s("VU/8")(L,S,!1,function(t){s("gM9r")},"data-v-29f5eee0",null).exports,A={components:{appHeader:m}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"color"},[e("app-Header"),this._v(" "),e("header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("h1",[this._v(" ABOUT US")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"alert alert-success"},[e("p",[this._v(" We are developing an live polling application by taking advantage of the centralized database with a web interface. The main concept of this project is to build a website, which should be able to allow people to give their question live. ")])]),this._v(" "),e("div",{staticClass:"alert alert-info"},[e("p",[this._v("Get real time valuable feedback in which we can get interests in various sessions or speakers.")])]),this._v(" "),e("div",{staticClass:"alert alert-warning"},[e("p",[this._v("Combine single  as well as  multiple choice question and integrate live visualization of incoming answers. Response appear in an animated graphs and charts.")])])])])])}]};var F=s("VU/8")(A,R,!1,function(t){s("oSzI")},null,null).exports,U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[s("a",{staticClass:"btn btn-success up",attrs:{href:"#"},on:{click:function(e){t.like++}}},[s("i",{staticClass:"fa fa-thumbs-up"}),t._v(t._s(t.like)+" LIKE ")]),t._v(" "),s("a",{staticClass:"btn btn-primary down",attrs:{href:"#"},on:{click:function(e){t.dislike++}}},[s("i",{staticClass:"fa fa-thumbs-down"}),t._v(t._s(t.dislike)+" DISLIKE ")])])])])},staticRenderFns:[]};var P={components:{appHeader:m,appFeedback:s("VU/8")({data:function(){return{like:10,dislike:1}}},U,!1,function(t){s("DPCb")},"data-v-99752ff4",null).exports}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("h2",[this._v("RULES")]),this._v(" "),e("div",{staticClass:"alert alert-success"},[e("p",[this._v(" We will provided 15 second or 20 second to the user to answer the question.")])]),this._v(" "),e("div",{staticClass:"alert alert-info"},[e("p",[this._v(" User has to give response within given time period.")])]),this._v(" "),e("div",{staticClass:"alert alert-warning"},[e("p",[this._v("User have to enter the Poll code")])])])])}]};var H=s("VU/8")(P,N,!1,function(t){s("wzOq")},null,null).exports,V={components:{appHeader:m}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h1",[this._v(" Contact US")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"alert alert-info"},[e("p",[this._v("For more details you can contact us on")])]),this._v(" "),e("div",{staticClass:"alert alert-danger"},[e("a",{attrs:{href:"#"}},[this._v("psitlivepolling@gmail.com ")])])])])}]};var D=s("VU/8")(V,B,!1,function(t){s("nX4N")},null,null).exports,O={components:{Loader:v},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{createChart:function(t,e){var s=document.getElementById(t);new y.a(s,{type:e.type,data:e.data,options:e.options})},drawChart:function(){this.createChart("myChart",{type:"bar",data:{labels:["A","B","C"],datasets:[{label:"Poll",backgroundColor:"red",data:[50,30,89],borderColor:"white",hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderWidth:1}]},options:{animation:{duration:5e4,easing:"easeOutBounce"},responsive:!0,title:{display:!0,text:"Live Polling"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},mounted:function(){this.drawChart()}},Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-container"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"col-12 box"},[e("canvas",{staticStyle:{height:"400px",width:"90%"},attrs:{id:"myChart"}})])])])}]};var $={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[e("a",{attrs:{href:"#"}},[this._v("psitlivepolling@gmail.com")])])])}]};var T={components:{appHeader:m,appChart:s("VU/8")(O,Q,!1,function(t){s("Vo9x")},"data-v-3725d305",null).exports,appFooter:s("VU/8")({},$,!1,function(t){s("N5AY")},"data-v-41924f30",null).exports}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-Header"),this._v(" "),e("div",{staticClass:"content"},[e("app-chart")],1),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var W=s("VU/8")(T,M,!1,function(t){s("CZeo")},null,null).exports,X={components:{Loader:v,appHeader:m},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:"",title:"COMING SOON"}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,a=!1,i=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),e("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"col-12"},[e("router-link",{attrs:{to:"/quiz","active-class":"active"}},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"}},[this._v("Audience poll")])])],1),this._v(" "),e("div",{staticClass:"col-12"},[e("router-link",{attrs:{to:"/survey"}},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{title:this.title,disabled:this.disable}},[this._v("Survey Poll")])])],1)])])],1)},staticRenderFns:[]};var Z=s("VU/8")(X,K,!1,function(t){s("4+Ov")},"data-v-74f3c533",null).exports,G={components:{Loader:v,appHeader:m},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(e){var s=!0,a=!1,i=void 0;try{for(var n,o=c()(e.data);!(s=(n=o.next()).done);s=!0){var r=n.value;if(r.code==t.code){t.quiz=r.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(e){console.log(e),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),t._v(" "),s("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[s("div",{staticClass:"col-md-4"},[t.showLoader?s("loader"):t._e(),t._v(" "),s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code (Q1006)"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12"},[t.isIncorrectCode?s("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("SUBMIT")])])],1)])],1)},staticRenderFns:[]};var Y=s("VU/8")(G,J,!1,function(t){s("01KJ")},null,null).exports;a.a.use(o.a);var tt=new o.a({routes:[{path:"/",name:"Index",component:W},{path:"/home",name:"Home",component:C},{path:"/aboutus",name:"Aboutus",component:F},{path:"/contactus",name:"Contactus",component:D},{path:"/rule",name:"Rule",component:H},{path:"/admin",name:"Admin",component:j},{path:"/quiz",name:"Quiz",component:z,props:!0},{path:"/poll",name:"Poll",component:E,props:!0},{path:"/spolling",name:"Spolling",component:Z},{path:"/survey",name:"Survey",component:Y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:tt,components:{App:n},template:"<App/>"})},Vo9x:function(t,e){},bhNR:function(t,e){},gM9r:function(t,e){},ixR9:function(t,e){},nX4N:function(t,e){},oSzI:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return s(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="uslO"},wzOq:function(t,e){},yCTx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.22d64af31441338a0312.js.map