(this["webpackJsonperc20-webapp"]=this["webpackJsonperc20-webapp"]||[]).push([[8],{597:function(e,n,t){"use strict";var a=t(59),i={"en-US":{locale:"en-US",language:"English",code:"en"}},o=Object.values(i),r=[{label:"Home",icon:"HomeIcon",href:"/"},{label:"Characters",icon:"GroupsIcon",href:"/chara"},{label:"Info",icon:"InfoIcon",href:"/Info"},{label:"Trade",icon:"TradeIcon",href:"/swap"},{label:"Contacts",icon:"InfoIcon",href:"/about"},{label:"Github",icon:"IfoIcon",href:"https://github.com/Takeya_Yuki"}],s=(t(0),t(13));n.a=function(e){var n=e.children;function t(){}return Object(s.jsx)("div",{children:Object(s.jsx)(a.b,{isDark:!1,toggleTheme:t,langs:o,setLang:t,currentLang:"EN",links:r,children:Object(s.jsx)("div",{style:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"2.5%"},children:n})})})}},606:function(e,n,t){"use strict";t.r(n);var a=t(599),i=t(235),o=t(600),r=t(0),s=t(598),d=t(597),l=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],c=t(13);n.default=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],u=n[1],p=Object(i.b)(),b=p.activate,y=p.account,m=p.library,v=p.active,f=p.chainId,h=p.deactivate,j=new o.a({supportedChainIds:[1,3,4,5,42,56,97]});return Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("span",{children:[y,"=",t]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){b(j).then((function(){v&&null!=y&&(console.log(y),m.eth.getBalance(null===y||void 0===y?void 0:y.toString()).then((function(e){var n=new s.BigNumber(e).div(new s.BigNumber("1000000000000000000")).toFixed(4),t=[56,97].indexOf(null!==f&&void 0!==f?f:1)>-1?" BNB":" ETH";u(n+t)})))}))},children:"Connect"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){h(),u("")},children:"Disconnect"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){m.eth.sendTransaction({from:null===y||void 0===y?void 0:y.toString(),to:null===y||void 0===y?void 0:y.toString()})},children:"SendBNB"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){var e=new m.eth.Contract(l,"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd");console.log(e),e.methods.transfer(null===y||void 0===y?void 0:y.toString(),"10000000000000000").send({from:null===y||void 0===y?void 0:y.toString(),to:null===y||void 0===y?void 0:y.toString()})},children:"SendUSDT"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){var e=new m.eth.Contract(l,"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd");console.log(e),e.methods.approve("0x0ff64DEB206Dd1B147b48DA4C2ace73FaBBcc690","10000000000000000").send({from:null===y||void 0===y?void 0:y.toString(),to:null===y||void 0===y?void 0:y.toString()}),e.methods.approve("0x0ff64DEB206Dd1B147b48DA4C2ace73FaBBcc690","0").send({from:null===y||void 0===y?void 0:y.toString(),to:null===y||void 0===y?void 0:y.toString()})},children:"ApproveUSDT"}),Object(c.jsx)("br",{})]})})}}}]);
//# sourceMappingURL=8.ae67684d.chunk.js.map