(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/tranback.cd849962.png"},30:function(e,a,t){e.exports=t.p+"static/media/APIQUIZ.19a9dee3.png"},31:function(e,a,t){e.exports=t.p+"static/media/tempEngine.85e78c7d.png"},32:function(e,a,t){e.exports=t.p+"static/media/weatherDash.6f5b63c9.png"},33:function(e,a,t){e.exports=t.p+"static/media/workday.17250412.png"},34:function(e,a,t){e.exports=t.p+"static/media/budgetTracker.c9752d28.png"},35:function(e,a,t){e.exports=t.p+"static/media/login.d0a82d29.png"},36:function(e,a,t){e.exports=t.p+"static/media/project1.94097866.png"},37:function(e,a,t){e.exports=t.p+"static/media/burger.6eaa44fd.png"},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l);t(45);var m=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)},s=t(9);var o=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"."},"Frederick Clayton Guthrie III"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{id:"NavAbout"},r.a.createElement(s.b,{to:"/React-portfolio",className:"/"===window.location.pathname||"http://localhost:3000/React-portfolio"===window.location.pathname?"nav-link active":"nav-link"},"About")),r.a.createElement("li",{id:"NavPortfolio"},r.a.createElement(s.b,{to:"/portFolio",className:"/portFolio"===window.location.pathname||"http://localhost:3000/portFolio"===window.location.pathname?"nav-link active":"nav-link"}," PortFolio ")))))},i=t(26),d=t(27),g=t(38),p=t(39),u=t(28),b=t.n(u),h=(t(68),function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={name:"",email:"",message:""},n}return Object(d.a)(t,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),b()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),a.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{id:"contact33",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{id:"contact33",htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{id:"contact33",htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),r.a.createElement("button",{id:"contact33",type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(r.a.Component)),E=(t(69),t(29)),v=t.n(E),f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},"        ",r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"card",className:"card .bg-transparent"},r.a.createElement("a",null,r.a.createElement("img",{id:"me",src:v.a,className:"card-img-top",alt:"my_photo"})),r.a.createElement("div",{className:"card-body .bg-transparent"},r.a.createElement("h5",{className:"card-title"},"About me"),r.a.createElement("p",{className:"card-text mb-3"},'"      I am a full stack web developer with certificate from SMU, where I was educated and certified in: HTML5, CSS3, JavaScript, jQuery, Node.js, Java, Express.js, React.js, Database Theory, MongoDB, MySQL, Git, and more."'),r.a.createElement("p",{className:"card-text2 mb-3"},"I have taken the developers coding bootcamp because technology changes and improves every year and it was time for me to update my skills. I have decided to expand my horizons though Webpage development. I have over 10 years of backend development with many languages like Java,C#, C++ and many operation system like Unix and Windows along with many databases."),r.a.createElement("p",{className:"card-text3 mb-3"},"I started my career in 1980 while I was in Military Intelligence working in electronic warfare and advanced though programing, networking, operation and management. I also hold a master\u2019s degree in information management. Changing programing languages is easy to me. I believe in pseudo-coding and then from there every programing language is just a matter of syntax. "),r.a.createElement("p",{className:"card-text4 mb-3"},"My brand is \u201cWhen you need the one person to pull everything together, I\u2019m your man\u201d."),r.a.createElement("p",{className:"card-text5 mb-3"},"E-Mail : FRED3@MYSELF.COM "))))))},N=(t(70),t(30)),k=t.n(N),y=t(31),w=t.n(y),x=t(32),S=t.n(x),C=t(33),G=t.n(C),I=t(34),M=t.n(I),F=t(35),L=t.n(F),T=t(36),j=t.n(T),P=t(37),D=t.n(P),H=function(){return r.a.createElement("picture",{className:"mt-5 row justify-content-center"},r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:D.a,className:"card-img",alt:"fredGlifestyle"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/burger",className:"btn btn-lg btn-block bg-warning text-dark"}," GitHub Link: Burger"),r.a.createElement("a",{href:"https://gentle-peak-62776.herokuapp.com/",className:"btn btn-lg btn-block bg-warning text-dark"}," Deployed Link: Burger"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:L.a,className:"card-img",alt:"fredGlifestyle"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/TP-Express",className:"btn btn-lg btn-block bg-warning text-dark"}," GitHub Link: TP Express"),r.a.createElement("a",{href:"https://arcane-chamber-47434.herokuapp.com/",className:"btn btn-lg btn-block bg-warning text-dark"}," Deployed Link: TP Express"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:j.a,className:"card-img",alt:"fredGlifestyle"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/project1.1",className:"btn btn-lg btn-block bg-warning text-dark"},"GitHub Link: Project1.1"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:M.a,className:"card-img",alt:"fredGlifestyle"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/Budget-Trackers",className:"btn btn-lg btn-block bg-warning text-dark"},"GitHub Link: Budget Tracker"),r.a.createElement("a",{href:"https://lit-escarpment-52457.herokuapp.com/",className:"btn btn-lg btn-block bg-warning text-dark"},"Deployed Link: Budget Tracker"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:k.a,className:"card-img",alt:"fredGquiz"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:" mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/APICodeQuiz/",className:"btn btn-lg btn-block bg-warning text-dark"},"GitHub Link:Quiz Game"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:S.a,className:"card-img",alt:"fredGweather"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/weatherDash/",className:"btn text-dark btn-lg btn-block bg-warning text-dark"},"GitHub Link:Weather App"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:w.a,className:"card-img",alt:"fredGEmployee"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/Template-Engine---Employee-Summary",className:"btn  btn-lg btn-block bg-warning text-dark"},"GitHub Link:Template-Engine---Employee-Summary"))))),r.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-12 mb-3"},r.a.createElement("div",{className:"col lg-12"},r.a.createElement("img",{id:"port",src:G.a,className:"card-img",alt:"FredGplanner"}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("div",{className:"h-100 mt-5"},r.a.createElement("a",{href:"https://github.com/fred-smu/WorkDayScheduler/",className:"btn btn-lg btn-block bg-warning text-dark"},"GitHub Link:Day Planner"))))))},B=(t(71),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"footerRow",className:"row"},r.a.createElement("footer",{className:"col-12 footer-copyright text-center py-5"},r.a.createElement("a",{className:"fa fab fa-github fa-2x nav-link bg-warning text-dark",href:"https://github.com/fred-smu"},"."),"\xa9 Copyright",r.a.createElement("a",{className:"fa fab fa-linkedin fa-2x nav-link bg-warning text-dark",href:"https://www.linkedin.com/in/fredguthrieiii/"},"."))))}),A=t(6),O=function(){return r.a.createElement(s.a,null,r.a.createElement(m,null,r.a.createElement(o,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:f}),r.a.createElement(A.a,{exact:!0,path:"/React-portfolio",component:f}),r.a.createElement(A.a,{exact:!0,path:"/contact",component:h}),r.a.createElement(A.a,{exact:!0,path:"/portFolio",component:H}),r.a.createElement(A.a,{path:"/",render:function(){return r.a.createElement("div",null,A.a.path,"  404 Error Page not found")}})),r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b8951682.chunk.js.map