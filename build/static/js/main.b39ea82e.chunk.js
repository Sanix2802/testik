(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);n(60),n(85);var a=n(0),l=n.n(a),c=n(31),o=n.n(c),r=n(17),i=n.n(r),s=n(54),u=n(55),d=n(57),m=n(56),p=n(58),h=n(6),b=(n(108),n(109),n(110),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={activePanel:"starting",popout:null,fetchedUser:null,authToken:null,server:null,user:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(h.View,{popout:this.state.popout,activePanel:this.state.activePanel},l.a.createElement(h.Panel,{id:"checking"},l.a.createElement(h.Button,{size:"xl",level:"secondary",className:"btn-bot",onClick:this.auth},"\u041f\u043e\u0435\u0445\u0430\u043b\u0438!")),l.a.createElement(h.Panel,{id:"starting"},l.a.createElement("center",null,l.a.createElement("img",{src:"logo.png"})),l.a.createElement("b",null,l.a.createElement("center",null,l.a.createElement(h.Div,{style:{paddingTop:100,paddingBottom:10,color:"white"}}," \u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, ",this.state.fetchedUser?"".concat(this.state.fetchedUser.first_name," ").concat(this.state.fetchedUser.last_name):"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439","!"))),l.a.createElement("center",null,l.a.createElement("b",null,l.a.createElement(h.Div,{style:{paddingTop:25,paddingBottom:6,color:"white"}},"Bot Gorilla 2.0 \u2014 \u041f\u0435\u0440\u0435\u0434\u0435\u043b\u043a\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0431\u043e\u0442\u0430 Bot Gorilla \u0432 \u0432\u0438\u0434\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. \u0412 \u043d\u0451\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435: \u043a\u0443\u043f\u0438\u0442\u044c \u0444\u0435\u0440\u043c\u044b, \u0434\u043e\u043c\u0430, \u043f\u0438\u0442\u043e\u043c\u0446\u0435\u0432, \u0431\u0438\u0437\u043d\u0435\u0441\u044b. \u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435: \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0448\u0430\u0445\u0442\u0435, \u043a\u043e\u043f\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b. \u042d\u0442\u043e \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0436\u0434\u0451\u0442 \u0432\u0430\u0441 \u0437\u0434\u0435\u0441\u044c!"))),l.a.createElement(h.FixedLayout,{vertical:"bottom"},l.a.createElement(h.Button,{size:"xl",level:"secondary",className:"btn-bot"},"\u041f\u043e\u0435\u0445\u0430\u043b\u0438!"))),l.a.createElement(h.Panel,{id:"main"}))}}]),t}(l.a.Component));i.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(b,null),document.getElementById("root"))},59:function(e,t,n){e.exports=n(111)}},[[59,1,2]]]);
//# sourceMappingURL=main.b39ea82e.chunk.js.map