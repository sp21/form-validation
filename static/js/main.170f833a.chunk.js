(this["webpackJsonpform-validation"]=this["webpackJsonpform-validation"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(19),r=a.n(n),c=(a(26),a(2)),i=(a(27),a(8)),l=a(9),d=a(11),o=a(10),m=a.p+"static/media/image1.79d9af15.jpg",j=a.p+"static/media/image2.6a19c5a9.jpg",h=a.p+"static/media/image3.093a5030.jpg",p=a.p+"static/media/image4.ef688660.jpg",b=(a(28),a(0)),u=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={achievements:null,edit:null},e.handleEdit=function(){e.setState((function(){return{edit:!0}}))},e.handleView=function(){e.setState((function(){return{achievements:e.props.emp.achievements}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.emp;return console.log(e),this.state.edit?Object(b.jsx)(c.a,{to:"/edit/"+e.empId,push:!0}):Object(b.jsxs)("div",{className:"card",style:{width:"300px",margin:"15px"},children:[Object(b.jsx)("img",{className:"card-img-top",src:e.image,alt:"Card cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title text-center",children:e.ename}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsxs)("span",{children:["Id: ",e.empId]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Age:",e.age]}),Object(b.jsx)("br",{}),e.age<25&&Object(b.jsx)("span",{className:"text-info",children:"Fresher"}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[" Salary:",e.salary]}),Object(b.jsx)("br",{})]}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:this.state.achievements})}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleEdit,children:"Edit"}),Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.handleView,children:"View"})]})]})}}]),a}(s.Component),g={empId:100,ename:"Jack",age:20,salary:5e4,image:m,achievements:"Has got 10 bravo and one mvp award"},v={empId:101,ename:"Russel",age:30,salary:5e4,image:j,achievements:"Has got 3 bravo and one mvp award"},x={empId:102,ename:"Jackie",age:20,salary:5e4,image:h,achievements:"Has got 30 bravo and one mvp award"},O={empId:103,ename:"Chan",age:30,salary:5e4,image:p,achievements:"Has got 10 bravo and one mvp award"},f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).empArr=[g,v,x,O],e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"text-center text-primary",children:"Employee Details"}),Object(b.jsx)("div",{className:"row",children:this.empArr.map((function(e,t){return Object(b.jsx)(u,{emp:e},t)}))})]})}}]),a}(s.Component),y=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={empId:"",ename:"",age:"",salary:"",achievements:"",formError:{enameError:"",ageError:""},fieldValidity:{enameValidity:!1,ageValidity:!1},formValid:!1,succesMessage:""},e.validateName=function(t){var a=t.target.value,s=e.state.formError,n=e.state.fieldValidity;e.setState({ename:t.target.value}),a.length<=6?(s.enameError="The Length Must be greater than 6",n.enameValidity=!1):(s.enameError="",n.enameValidity=!0),e.setState({fieldValidity:n}),e.setState({formValid:n.enameValidity&&n.ageValidity})},e.validateAge=function(t){var a=t.target.value,s=e.state.formError,n=e.state.fieldValidity;e.setState({age:t.target.value}),a<=21?(s.ageError="The Age should not be lesser than 21",n.ageValidity=!1):(s.ageError="",n.ageValidity=!0),e.setState({fieldValidity:n}),e.setState({formValid:n.enameValidity&&n.ageValidity})},e.validateSalary=function(t){var a=t.target.value;e.setState({salary:a})},e.validateAchievement=function(t){var a=t.target.value;e.setState({achievements:a})},e.update=function(t){if(t.preventDefault(),e.state.formValid)var a={empId:e.props.match.params.empId,ename:e.state.ename,age:e.state.age,salary:e.state.salary,achievements:e.state.achievements};e.setState({succesMessage:JSON.stringify(a)})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:{width:500,margin:"0px auto"},children:[Object(b.jsxs)("h1",{className:"text-center",children:["The Selected Id is ",this.props.match.params.empId]}),Object(b.jsxs)("form",{style:{textAlign:"left"},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Employee ID:"}),Object(b.jsx)("input",{className:"form-control",type:"text",disabled:!0,value:this.props.match.params.empId})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Employee Name:"}),Object(b.jsx)("input",{className:"form-control",type:"text",onChange:this.validateName,value:this.state.ename})]}),Object(b.jsx)("span",{className:"text-danger",children:this.state.formError.enameError}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Employee Age:"}),Object(b.jsx)("input",{className:"form-control",type:"text",onChange:this.validateAge,value:this.state.age})]}),Object(b.jsx)("span",{className:"text-danger",children:this.state.formError.ageError}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Salary:"}),Object(b.jsxs)("select",{className:"form-control",onChange:this.validateSalary,value:this.state.salary,children:[Object(b.jsx)("option",{value:"10000",children:"10000"}),Object(b.jsx)("option",{value:"20000",children:"20000"}),Object(b.jsx)("option",{value:"30000",children:"30000"})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Achievements:"}),Object(b.jsx)("textarea",{className:"form-control",onChange:this.validateAchievement,value:this.state.achievements})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.update,disabled:!this.state.formValid,children:"Update"}),Object(b.jsx)("span",{className:"text-success",children:this.state.succesMessage})]})]})}}]),a}(s.Component);var N=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(c.d,{children:[Object(b.jsx)(c.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(c.a,{to:"/card"})}}),Object(b.jsx)(c.b,{path:"/card",component:f}),Object(b.jsx)(c.b,{path:"/edit/:empId",component:y})]})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))},E=a(13);r.a.render(Object(b.jsx)(E.a,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),V()}},[[35,1,2]]]);
//# sourceMappingURL=main.170f833a.chunk.js.map