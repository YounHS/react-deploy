(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(e,s,c){},14:function(e,s,c){"use strict";c.r(s);var a=c(0),i=c(1),n=c.n(i),t=c(7),r=c.n(t),l=(c(13),c(2)),o=c(3),j=c(5),m=c(4),d=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:" Show navigation "})," ",Object(a.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:" Hide navigation "})," ",Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsxs)("li",{className:"current",children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:" Home "})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:" About "})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#resume",children:" Resume "})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:" Works "})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:" Testimonials "})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{className:"smoothscroll",href:"#contact",children:" Contact "})]})]})," "]}),Object(a.jsxs)("div",{className:"row banner",children:[Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("h1",{className:"responsive-headline",children:" This is 'YounHS' "})," ",Object(a.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:[" I am a ",e.role,". ",e.roleDescription," "]})," ",Object(a.jsx)("hr",{}),Object(a.jsxs)("ul",{className:"social",children:[" ",e.socialLinks&&e.socialLinks.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:e.url,target:"_blank",children:[" ",Object(a.jsx)("i",{className:e.className,children:" "})]})},e.name)}))," "]})," "]})," "]}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsxs)("a",{className:"smoothscroll",href:"#about",children:[" ",Object(a.jsx)("i",{className:"icon-down-circle",children:" "})]})})]})," "]})}}]),c}(i.Component),h=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:e.aboutme}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"columns contact-details",children:[Object(a.jsx)("h2",{children:"Contact Details"}),Object(a.jsxs)("p",{className:"address",children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.address}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.website})]})]})})]})]})})}}]),c}(i.Component),b=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsxs)("section",{id:"resume",children:[Object(a.jsxs)("div",{className:"row education",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Education"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(a.jsx)("div",{className:"row item",children:Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("h3",{children:e.UniversityName}),Object(a.jsxs)("p",{className:"info",children:[e.specialization,Object(a.jsx)("span",{children:"\u2022"})," ",Object(a.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(a.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(a.jsxs)("div",{className:"row work",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Work"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(a.jsx)("div",{className:"row item",children:Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("h3",{children:e.CompanyName}),Object(a.jsxs)("p",{className:"info",children:[e.specialization,Object(a.jsx)("span",{children:"\u2022"})," ",Object(a.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(a.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("p",{children:e.skillsDescription}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(a.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),c}(i.Component),O=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsxs)("section",{id:"portfolio",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:" PROJECT HISTORY "})," ",Object(a.jsxs)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:[" ",e.portfolio&&e.portfolio.map((function(e){return Object(a.jsxs)("div",{className:"columns portfolio-item",children:[Object(a.jsxs)("div",{className:"item-wrap",children:[Object(a.jsxs)("a",{href:"#modal-01",children:[Object(a.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(a.jsxs)("div",{className:"overlay",children:[Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsxs)("h5",{children:[" ",e.name," "]})," ",Object(a.jsxs)("p",{children:[" ",e.description," "]})," "]})," "]})," "]})," "]})," "]},"".concat(e.name))}))," "]})," "]})," "]})," "]})}}]),c}(i.Component),u=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsxs)("section",{id:"testimonials",children:[Object(a.jsxs)("div",{className:"text-container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"two columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Client Testimonials"})})}),Object(a.jsxs)("div",{className:"ten columns flex-container",children:[Object(a.jsx)("div",{className:"flexslider",children:Object(a.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("blockquote",{children:[Object(a.jsx)("p",{children:e.description}),Object(a.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),c}(i.Component),p=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsxs)("div",{className:"row section-head",children:[Object(a.jsxs)("div",{className:"ten columns",children:[Object(a.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below "})," "]})," "]})," ",Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("aside",{className:"eigth columns footer-widgets",children:[Object(a.jsxs)("div",{className:"widget",children:[Object(a.jsxs)("h4",{children:[" Phone: ",e.Phone," "]})," ",Object(a.jsxs)("h4",{children:[" E - mail: ",e.email," "]})," ",Object(a.jsxs)("h4",{children:[" KakaoTalk ID: ",e.kakaoId," "]})," "]})," "]})," "]})," "]})}}]),c}(i.Component),x=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"twelve columns",children:Object(a.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})})}))})}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(i.Component),v={imagebaseurl:"https://YounHS.github.io/",name:"Youn Hyeonsu",role:"SoftWare Engineer and Data Engineer who is oriented toward data science",Phone:"+82-10-6222-3889",skypeid:"Your skypeid",email:"cranky@kakao.com",kakaoId:"ILWEE1",roleDescription:"I have experience in open source analysis, so I can learn new technology quickly. I like to analyze and visualize various data.",socialLinks:[{name:"facebook",url:"https://www.facebook.com/musclebat",className:"fa fa-facebook"},{name:"github",url:"https://github.com/YounHS/",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/gwangjinmusclebat/",className:"fa fa-instagram"}],aboutme:"I am currently working as a 'Technical Research Personnel' in Korea. I have gained experience by participating in various tasks such as REST API server development, STM32 embedded programming, and data analysis, etc... I am interested in Data Analysis. Based on this interest, I am making efforts to acquire Data Analysis-related technologies and certificates.",address:"Korea",website:"https://github.com/YounHS/",education:[{UniversityName:"Sejong University",specialization:"Computer Engineering",MonthOfPassing:"Feb",YearOfPassing:"2019",Achievements:"Master's degree"},{UniversityName:"Soongsil University",specialization:"Computer Engineering",MonthOfPassing:"Aug",YearOfPassing:"2016",Achievements:"Bachelor's degree"}],work:[{CompanyName:"IMR Inc.",specialization:"Research and Development",MonthOfLeaving:"NaN",YearOfLeaving:"NaN",Achievements:"Technical Research Personnel"}],skillsDescription:"Skill Proficiency",skills:[{skillname:"Spring Framework"},{skillname:"Pandas"},{skillname:"Scikit-Learn"},{skillname:"PostGreSQL"},{skillname:"Docker"},{skillname:"Kubernetes"},{skillname:"Reactjs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/profilepic.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/console.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/judah.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/retrocam.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},f=function(e){Object(j.a)(c,e);var s=Object(m.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{resumeData:v}),Object(a.jsx)(h,{resumeData:v}),Object(a.jsx)(b,{resumeData:v}),Object(a.jsx)(O,{resumeData:v}),Object(a.jsx)(u,{resumeData:v}),Object(a.jsx)(p,{resumeData:v}),Object(a.jsx)(x,{resumeData:v})]})}}]),c}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ab41cfcc.chunk.js.map