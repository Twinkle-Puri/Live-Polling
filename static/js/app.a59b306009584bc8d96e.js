webpackJsonp([1],{"0Y0R":function(t,s){},"8dUA":function(t,s){},"8yU+":function(t,s){},CMLp:function(t,s){},FRVB:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("FRVB")},null,null).exports,r=e("/ocq"),o=e("BO1k"),l=e.n(o),c=e("mtWM"),d=e.n(c),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"blur",staticStyle:{display:"none"}}),this._v(" "),s("div",{staticClass:"lds-roller"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")])])}]};var v=e("VU/8")({},u,!1,function(t){e("yCTx")},null,null).exports,h={directives:{"local-highlight":{bind:function(t,s,e){var a=0;if(s.modifiers.delayed&&(a=3e3),s.modifiers.blink){var i=s.value.mainColor,n=s.value.secondColor,r=i;setTimeout(function(){setInterval(function(){r=r==n?i:n,"background"==s.arg?t.style.backgroundColor=r:t.style.color=r},s.value.delay)},a)}else setTimeout(function(){"background"==s.arg?t.style.backgroundColor=s.value.mainColor:t.style.color=s.value.mainColor},a)}}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[e("a",{staticClass:"navbar-brand",staticStyle:{"margin-left":"60px"},attrs:{href:"#"}},[t._v("Live Polling")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("router-link",{attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"fa fa-home",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Home")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutus",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"fa fa-vcard",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("About Us")])]),t._v(" "),e("router-link",{attrs:{to:"/contactus",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"fa fa-phone",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Contact Us")])]),t._v(" "),e("router-link",{attrs:{to:"/rule",tag:"li","active-class":"active",exact:""}},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"fa fa-edit",staticStyle:{"font-size":"24px","margin-right":"5px"}}),t._v("Rule")])]),t._v(" "),e("router-link",{attrs:{to:"/home",tag:"li","active-class":"active",styel:"margin-right:30px;"}},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"fa fa-bar-chart",staticStyle:{"font-size":"24px"}}),t._v("Poll")])])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}]};var m=e("VU/8")(h,p,!1,function(t){e("OK2Y")},"data-v-4362c066",null).exports,f={components:{Loader:v,Header:m},data:function(){return{name:"",code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;socket.emit("addUser",this.name),this.showLoader=!0,d.a.get("./static/json/questions.json").then(function(s){var e=!0,a=!1,i=void 0;try{for(var n,r=l()(s.data);!(e=(n=r.next()).done);e=!0){var o=n.value;if(o.code==t.code){t.quiz=o.quiz,t.$router.push({name:"Quiz",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(s){console.log(s),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4||this.name.length<4}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[e("div",{staticClass:"col-md-4"},[t.showLoader?e("loader"):t._e(),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code (Q1005) "},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[t.isIncorrectCode?e("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("SUBMIT")])])],1)])],1)},staticRenderFns:[]};var C=e("VU/8")(f,g,!1,function(t){e("PjpA")},null,null).exports,_={components:{Loader:v,appHeader:m},data:function(){return{code:"",isIncorrectCode:!1,showLoader:!1,quiz:""}},methods:{validateCode:function(){var t=this;this.showLoader=!0,d.a.get("/static/json/questions.json").then(function(s){var e=!0,a=!1,i=void 0;try{for(var n,r=l()(s.data);!(e=(n=r.next()).done);e=!0){var o=n.value;if(o.code==t.code){t.quiz=o.quiz,t.$router.push({name:"Poll",params:{quizData:t.quiz}});break}}}catch(t){a=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw i}}""==t.quiz&&(t.isIncorrectCode=!0),t.showLoader=!1,console.log(t.quiz)}).catch(function(s){console.log(s),t.showLoader=!1})}},computed:{disable:function(){return this.code.length<4}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("app-header"),t._v(" "),e("div",{staticClass:"center",staticStyle:{"margin-top":"200px"}},[e("div",{staticClass:"col-md-4"},[t.showLoader?e("loader"):t._e(),t._v(" "),e("div",{staticClass:"col-12",staticStyle:{"padding-top":"10px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control reset-border",attrs:{type:"text",placeholder:"Enter Code"},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[t.isIncorrectCode?e("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("Incorrect Code")]):t._e()]),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-primary btn-block reset-border",staticStyle:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.validateCode}},[t._v("START")])])],1)])],1)},staticRenderFns:[]};var w=e("VU/8")(_,b,!1,function(t){e("CMLp")},"data-v-7c7f1ee0",null).exports,j=e("fZjL"),x=e.n(j),y=e("WaEV"),k=e.n(y),z={props:["quizData"],components:{Loader:v},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{finish:function(){this.isComplete=!this.isComplete,this.drawChart(),socket.emit("finishQuiz",this.isComplete)},start:function(){this.gamesList=this.quizData,this.game=this.gamesList.filter(function(t){return 1==t.id})[0],this.timer=this.game.timer},getPoll:function(){this.poll=0,this.pollAnswers={};for(var t=["A","B","C","D"],s=0;s<this.game.options.length;s++)this.pollAnswers[t[s]]=0;console.log(this.pollAnswers);var e={id:this.activeQuestion};socket.emit("startPoll",e),this.drawChart(),this.countdown()},previous:function(){this.poll=0;var t=--this.activeQuestion;this.openQuestion(t)},next:function(){this.poll=0;var t=++this.activeQuestion;this.openQuestion(t)},openQuestion:function(t){var s=this;clearInterval(this.counter),this.showLoader=!0,setTimeout(function(){s.showLoader=!1,s.currentId="",s.correctId="",t<=s.gamesList.length&&(s.game=s.gamesList.filter(function(s){return s.id==t})[0],s.timer=s.game.timer)},1e3)},submitAnswer:function(t){clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,s){var e=document.getElementById(t);new k.a(e,{type:s.type,data:s.data,options:s.options})},drawChart:function(){var t=this;this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer),console.log(this.pollAnswers);var s={type:"bar",data:{labels:x()(this.pollAnswers),datasets:[{label:"Quiz",backgroundColor:"#ff6953",data:x()(this.pollAnswers).map(function(s){return t.pollAnswers[s]}),borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}};this.createChart("quiz-result",s)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Admin"}),socket.on("addUser",function(s){t.loggedInIds.push(s)}),socket.on("submitAnswer",function(s){t.pollAnswers[s.answer]?t.pollAnswers[s.answer]++:t.pollAnswers[s.answer]=1,console.log(t.pollAnswers),t.poll++})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"custom-container"},[e("div",{staticClass:"col-md-8"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[e("canvas",{staticStyle:{height:"350px"},attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.gamesList?t._e():e("div",{staticClass:"col-12 box"},[t.showLoader?e("loader"):t._e(),t._v(" "),e("div",{staticClass:"points"},[t._v("Poll "),e("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.poll))])]),t._v(" "),e("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),e("div",{staticClass:"timer"},[e("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),e("div",{staticClass:"quiz"},[e("div",[e("div",{staticClass:"col-12 center"},[e("div",{staticClass:"col-md-10 question"},[t._v("\r\n                    "+t._s(t.game.question)+"\r\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-12 center"},[e("div",{staticClass:"row col-md-12 options"},t._l(t.game.options,function(s,a){return e("div",{key:a,staticClass:"col-md-5 option",class:[s.id==t.currentId?s.id==t.correctId?"correct":"incorrect":"",s.id==t.correctId?"correct":""],on:{click:function(e){t.submitAnswer(s.id)}}},[t._v("\r\n                        "+t._s(s.value)+"\r\n                    ")])}))])])]),t._v(" "),e("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}}),t._v(" "),e("div",{staticClass:"left-icon",class:1==t.activeQuestion?"custom-disable":"",on:{click:t.previous}},[e("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),e("div",{staticClass:"right-icon",class:t.activeQuestion==t.gamesList.length?"custom-disable":"",on:{click:t.next}},[e("i",{staticClass:"fa fa-chevron-right"})])],1),t._v(" "),""!=t.gamesList?e("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.getPoll}},[t._v("Poll")]),t._v(" "),e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.finish}},[t._v("Finish")])]):e("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.start}},[t._v("Start")]),t._v(" "),e("div",{staticClass:"col-12"},t._l(t.loggedInIds,function(s,a){return e("span",{key:a,staticClass:"user"},[t._v("\r\n                "+t._s(s)+" \r\n            ")])}))])])])},staticRenderFns:[]};var L=e("VU/8")(z,I,!1,function(t){e("xZeJ")},"data-v-215c03b2",null).exports,A={props:["quizData"],components:{Loader:v,appHeader:m},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{finish:function(){this.isComplete=!this.isComplete,this.drawChart(),socket.emit("finishQuiz",this.isComplete)},start:function(){this.gamesList=this.quizData,this.game=this.gamesList.filter(function(t){return 1==t.id})[0],this.timer=this.game.timer},getPoll:function(){this.poll=0,this.pollAnswers={};for(var t=["A","B","C","D"],s=0;s<this.game.options.length;s++)this.pollAnswers[t[s]]=0;console.log(this.pollAnswers);var e={id:this.activeQuestion};socket.emit("startPoll",e),this.drawChart(),this.countdown()},previous:function(){this.poll=0;var t=--this.activeQuestion;this.openQuestion(t)},next:function(){this.poll=0;var t=++this.activeQuestion;this.openQuestion(t)},openQuestion:function(t){var s=this;clearInterval(this.counter),this.showLoader=!0,setTimeout(function(){s.showLoader=!1,s.currentId="",s.correctId="",t<=s.gamesList.length&&(s.game=s.gamesList.filter(function(s){return s.id==t})[0],s.timer=s.game.timer)},1e3)},submitAnswer:function(t){clearInterval(this.counter),this.currentId=t,-1!=t&&(this.correctId=this.game.answer),-1==t?this.notanswer++:t==this.game.answer?(this.correct++,this.score+=this.game.point):this.inCorrect++},countdown:function(){var t=this;this.counter=setInterval(function(){t.timer--},1e3)},createChart:function(t,s){var e=document.getElementById(t);new k.a(e,{type:s.type,data:s.data,options:s.options})},drawChart:function(){var t=this;this.result=[],this.result.push(this.correct),this.result.push(this.inCorrect),this.result.push(this.notanswer),console.log(this.pollAnswers);var s={type:"bar",data:{labels:x()(this.pollAnswers),datasets:[{label:"Quiz",backgroundColor:"#ff6953",data:x()(this.pollAnswers).map(function(s){return t.pollAnswers[s]}),borderColor:"white",borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Result"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}};this.createChart("quiz-result",s)}},created:function(){var t=this;void 0==this.quizData&&this.$router.push({name:"Admin"}),socket.on("addUser",function(s){t.loggedInIds.push(s)}),socket.on("submitAnswer",function(s){t.pollAnswers[s.answer]?t.pollAnswers[s.answer]++:t.pollAnswers[s.answer]=1,console.log(t.pollAnswers),t.poll++})},watch:{timer:function(){0==this.timer&&(console.log("Done"),this.submitAnswer(-1))}}},q={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("app-header"),t._v(" "),e("div",{staticClass:"custom-container"},[e("div",{staticClass:"col-md-8"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"col-12 box"},[e("canvas",{staticStyle:{height:"350px"},attrs:{id:"quiz-result"}})]),t._v(" "),t.isComplete||""==t.gamesList?t._e():e("div",{staticClass:"col-12 box"},[t.showLoader?e("loader"):t._e(),t._v(" "),e("div",{staticClass:"points"},[t._v("Poll "),e("span",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.poll))])]),t._v(" "),e("div",{staticClass:"round"},[t._v("Poll "+t._s(t.game.id)+" of "+t._s(t.gamesList.length))]),t._v(" "),e("div",{staticClass:"timer"},[e("div",{staticClass:"count"},[t._v(t._s(t.timer))])]),t._v(" "),e("div",{staticClass:"quiz"},[e("div",[e("div",{staticClass:"col-12 center"},[e("div",{staticClass:"col-md-10 question"},[t._v("\r\n                    "+t._s(t.game.question)+"\r\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-12 center"},[e("div",{staticClass:"row col-md-12 options"},t._l(t.game.options,function(s,a){return e("div",{key:a,staticClass:"col-md-5 option",class:[s.id==t.currentId?s.id==t.correctId?"correct":"incorrect":"",s.id==t.correctId?"correct":""],on:{click:function(e){t.submitAnswer(s.id)}}},[t._v("\r\n                        "+t._s(s.value)+"\r\n                    ")])}))])])]),t._v(" "),e("div",{staticClass:"progress",style:{width:100-t.timer/t.game.timer*100+"%"}}),t._v(" "),e("div",{staticClass:"left-icon",class:1==t.activeQuestion?"custom-disable":"",on:{click:t.previous}},[e("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),e("div",{staticClass:"right-icon",class:t.activeQuestion==t.gamesList.length?"custom-disable":"",on:{click:t.next}},[e("i",{staticClass:"fa fa-chevron-right"})])],1),t._v(" "),""!=t.gamesList?e("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.getPoll}},[t._v("Poll")]),t._v(" "),e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.finish}},[t._v("Show Result")])]):e("div",{staticClass:"col-12",staticStyle:{"margin-top":"10px","text-align":"center"}},[e("button",{staticClass:"btn btn-primary c-btn",on:{click:t.start}},[t._v("Start")]),t._v(" "),e("div",{staticClass:"col-12"},t._l(t.loggedInIds,function(s,a){return e("span",{key:a,staticClass:"user"},[t._v("\r\n                "+t._s(s)+" \r\n            ")])}))])])])],1)},staticRenderFns:[]};var S=e("VU/8")(A,q,!1,function(t){e("8yU+")},"data-v-1d248464",null).exports,E={components:{appHeader:m}},U={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"color"},[s("app-Header"),this._v(" "),s("header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("h1",[this._v(" ABOUT US")]),this._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"alert alert-success"},[s("p",[this._v(" We are developing an live polling application by taking advantage of the centralized database with a web interface. The main concept of this project is to build a website, which should be able to allow people to give their question live. ")])]),this._v(" "),s("div",{staticClass:"alert alert-info"},[s("p",[this._v("Get real time valuable feedback in which we can get interests in various sessions or speakers.")])]),this._v(" "),s("div",{staticClass:"alert alert-warning"},[s("p",[this._v("Combine single  as well as  multiple choice question and integrate live visualization of incoming answers. Response appear in an animated graphs and charts.")])])])])])}]};var R=e("VU/8")(E,U,!1,function(t){e("oSzI")},null,null).exports,F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"area"}),e("nav",{staticClass:"main-menu",staticStyle:{"margin-bottom":"10px"}},[e("ul",[t._m(0),t._v(" "),e("li",{staticClass:"has-subnav"},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fa fa-home fa-2x"}),t._v(" "),e("span",{staticClass:"nav-text"},[t._v("\n                          HOME\n                      ")])])],1),t._v(" "),e("li",{staticClass:"has-subnav"},[e("router-link",{attrs:{to:"/aboutus"}},[e("i",{staticClass:"fa fa-list fa-2x"}),t._v(" "),e("span",{staticClass:"nav-text"},[t._v("\n                          ABOUT US\n                      ")])])],1),t._v(" "),e("li",{staticClass:"has-subnav"},[e("router-link",{attrs:{to:"/contactus"}},[e("i",{staticClass:"fa fa-phone"}),t._v(" "),e("span",{staticClass:"nav-text"},[t._v("\n                       CONTACT US\n                      ")])])],1),t._v(" "),e("li",{staticClass:"has-subnav"},[e("router-link",{attrs:{to:"/quiz"}},[e("i",{staticClass:"fa fa-bar-chart-o fa-2x"}),t._v(" "),e("span",{staticClass:"nav-text"},[t._v("\n                  REGISTRATION\n                      ")])])],1),t._v(" "),e("li",{staticClass:"has-subnav"},[e("router-link",{attrs:{to:"/rule"}},[e("i",{staticClass:"fa fa-edit fa-2x"}),t._v(" "),e("span",{staticClass:"nav-text"},[t._v("\n                      RULES\n                      ")])])],1)]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-bars",staticStyle:{"font-size":"36px"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"logout"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-hand-o-right fa-2x"}),this._v(" "),s("span",{staticClass:"nav-text"})])])])}]};var P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[e("a",{staticClass:"btn btn-success up",attrs:{href:"#"},on:{click:function(s){t.like++}}},[e("i",{staticClass:"fa fa-thumbs-up"}),t._v(t._s(t.like)+" LIKE ")]),t._v(" "),e("a",{staticClass:"btn btn-primary down",attrs:{href:"#"},on:{click:function(s){t.dislike++}}},[e("i",{staticClass:"fa fa-thumbs-down"}),t._v(t._s(t.dislike)+" DISLIKE ")])])])])},staticRenderFns:[]};var Q={components:{appHeader:m,appMenu:e("VU/8")({},F,!1,function(t){e("8dUA")},"data-v-11550fde",null).exports,appFeedback:e("VU/8")({data:function(){return{like:10,dislike:1}}},P,!1,function(t){e("R7V0")},"data-v-4bdf3bda",null).exports}},V={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("h2",[this._v("RULES")]),this._v(" "),s("div",{staticClass:"alert alert-success"},[s("p",[this._v(" We will provided 15 second or 20 second to the user to answer the question.")])]),this._v(" "),s("div",{staticClass:"alert alert-info"},[s("p",[this._v(" User has to give response within given time period.")])]),this._v(" "),s("div",{staticClass:"alert alert-warning"},[s("p",[this._v("User have to enter the Poll code")])])])])}]};var H=e("VU/8")(Q,V,!1,function(t){e("fURZ")},null,null).exports,N={components:{appHeader:m}},B={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("h1",[this._v(" Contact US")]),this._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"alert alert-info"},[s("p",[this._v("For more details you can contact us on")])]),this._v(" "),s("div",{staticClass:"alert alert-danger"},[s("a",{attrs:{href:"#"}},[this._v("psitlivepolling@gmail.com ")])])])])}]};var O=e("VU/8")(N,B,!1,function(t){e("nX4N")},null,null).exports,T={components:{Loader:v},data:function(){return{gamesList:"",game:"",result:[],timer:"",counter:"",showLoader:!1,correct:0,inCorrect:0,notanswer:0,poll:0,isComplete:!1,correctId:"",currentId:"",loggedInIds:[],activeQuestion:1,pollAnswers:{}}},methods:{createChart:function(t,s){var e=document.getElementById(t);new k.a(e,{type:s.type,data:s.data,options:s.options})},drawChart:function(){this.createChart("myChart",{type:"bar",data:{labels:["A","B","C"],datasets:[{label:"Poll",backgroundColor:"red",data:[50,30,89],borderColor:"white",hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderWidth:1}]},options:{animation:{duration:5e4,easing:"easeOutBounce"},responsive:!0,title:{display:!0,text:"Live Polling"},tooltips:{mode:"index",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},mounted:function(){this.drawChart()}},D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"custom-container"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"col-12 box"},[s("canvas",{staticStyle:{height:"350px",width:"90%"},attrs:{id:"myChart"}})])])])}]};var $=e("VU/8")(T,D,!1,function(t){e("0Y0R")},"data-v-fb94de2a",null).exports,W={components:{appFeedback:Feedback,appHeader:m,appChart:$}},M={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("app-Header"),this._v(" "),s("app-feedback"),this._v(" "),s("div",{staticClass:"content"},[s("app-chart")],1)],1)},staticRenderFns:[]};var X=e("VU/8")(W,M,!1,function(t){e("oS+r")},null,null).exports;a.a.use(r.a);var Z=new r.a({routes:[{path:"/",name:"Index",component:X},{path:"/home",name:"Home",component:C},{path:"/aboutus",name:"Aboutus",component:R},{path:"/contactus",name:"Contactus",component:O},{path:"/rule",name:"Rule",component:H},{path:"/admin",name:"Admin",component:w},{path:"/quiz",name:"Quiz",component:L,props:!0},{path:"/poll",name:"Poll",component:S,props:!0}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:Z,components:{App:n},template:"<App/>"})},OK2Y:function(t,s){},PjpA:function(t,s){},R7V0:function(t,s){},fURZ:function(t,s){},nX4N:function(t,s){},"oS+r":function(t,s){},oSzI:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return e(n(t))}function n(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="uslO"},xZeJ:function(t,s){},yCTx:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.a59b306009584bc8d96e.js.map