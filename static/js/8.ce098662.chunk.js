(this["webpackJsonperc20-webapp"]=this["webpackJsonperc20-webapp"]||[]).push([[8],{597:function(e,t,n){"use strict";var a=n(59),i={"en-US":{locale:"en-US",language:"English",code:"en"}},s=Object.values(i),p=[{label:"Home",icon:"HomeIcon",href:"/"},{label:"Characters",icon:"GroupsIcon",href:"/chara"},{label:"Info",icon:"InfoIcon",href:"/Info"},{label:"Trade",icon:"TradeIcon",href:"/swap"},{label:"Contacts",icon:"InfoIcon",href:"/about"},{label:"Github",icon:"IfoIcon",href:"https://github.com/YukiKurosawaDev"}],o=(n(0),n(13));t.a=function(e){var t=e.children;function n(){}return Object(o.jsx)("div",{children:Object(o.jsx)(a.f,{isDark:!1,toggleTheme:n,langs:s,setLang:n,currentLang:"EN",links:p,children:Object(o.jsx)("div",{style:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"2.5%"},children:t})})})}},606:function(e,t,n){"use strict";n.r(t);var a=n(598),i=n(136),s=n(0),p=n.n(s),o=n(597),r=n(59),u=n(600),y=n(7),d=function e(){Object(y.a)(this,e),this.chainId=0,this.chainName="",this.chainExplorerUrl="",this.cryptos=[]},l="0x0000000000000000000000000000000000000000",c={chainId:1,chainName:"ETH MainNet",chainExplorerUrl:"https://etherscan.io/",cryptos:[{cryptoName:"ETH",cryptoAddress:l,cryptoSymbol:"ETH",abi:void 0,donateOptions:[]}]},m={chainId:4,chainName:"ETH Rinkeby",chainExplorerUrl:"https://rinkeby.etherscan.io/",cryptos:[{cryptoName:"ETH",cryptoAddress:l,cryptoSymbol:"ETH",abi:void 0,donateOptions:[]}]},b={chainId:56,chainName:"BSC MainNet",chainExplorerUrl:"https://bscscan.com/",cryptos:[{cryptoName:"BNB",cryptoAddress:l,cryptoSymbol:"BNB",abi:void 0,donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"WBNB",cryptoAddress:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",cryptoSymbol:"WBNB",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"guy",type:"address"},{name:"wad",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"src",type:"address"},{name:"dst",type:"address"},{name:"wad",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"wad",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"dst",type:"address"},{name:"wad",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"deposit",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!0,name:"guy",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!0,name:"dst",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"dst",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Withdrawal",type:"event"}],donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"BUSD",cryptoAddress:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",cryptoSymbol:"BUSD",abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],donateOptions:["0.4","4","40","400"]},{cryptoName:"USDT",cryptoAddress:"0x55d398326f99059fF775485246999027B3197955",cryptoSymbol:"USDT",abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],donateOptions:["0.4","4","40","400"]}]},f={chainId:97,chainName:"BSC TestNet",chainExplorerUrl:"https://testnet.bscscan.com/",cryptos:[{cryptoName:"BNB",cryptoAddress:l,cryptoSymbol:"BNB",abi:void 0,donateOptions:[]}]},v=[c,m,b,f];function h(e){return v.find((function(t){return t.chainId===e}))}var T="0x000000007FD703013D6B3Ff60A2F274006B5e237",w=new u.a({supportedChainIds:[c.chainId,m.chainId,b.chainId,f.chainId]});var x=p.a.createContext({connected:!1,setConnected:function(){}}),j=n(599),g=n.n(j),O=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],M=n(13),S=function(e){var t=Object(s.useState)("0"),n=Object(a.a)(t,2),i=n[0],p=n[1],o=e.web3,u=e.account,y=e.chainId,d=e.crypto,c=h(null!==y&&void 0!==y?y:0),m=null===c||void 0===c?void 0:c.cryptos.find((function(e){return e.cryptoAddress===d}));if(d===l)o.eth.getBalance(null!==u&&void 0!==u?u:"").then((function(e){var t=new g.a(10).pow(18),n=new g.a(e).div(t).toFixed(4);p(n)}));else{var b,f=new o.eth.Contract(null!==(b=null===m||void 0===m?void 0:m.abi)&&void 0!==b?b:O,d);f.methods.decimals().call().then((function(e){var t=new g.a(10).pow(e);f.methods.balanceOf(null===u||void 0===u?void 0:u.toString()).call().then((function(e){var n=new g.a(e).div(t).toFixed(4);p(n)}))}))}return Object(M.jsxs)(r.i,{children:[null===m||void 0===m?void 0:m.cryptoName,": ",i," ",null===m||void 0===m?void 0:m.cryptoSymbol]})},C=function(e){var t=Object(s.useContext)(x),n=t.connected,i=t.setConnected,p=Object(s.useState)(new d),o=Object(a.a)(p,2),u=o[0],y=o[1];return Object(M.jsxs)("div",{style:{wordBreak:"break-all"},children:[!n&&Object(M.jsx)(r.a,{onClick:function(){e.activate(e.connector,void 0,!0).then((function(){var t,n;e.active&&null!=e.account&&(i(!0),y(null!==(t=h(null!==(n=e.chainId)&&void 0!==n?n:0))&&void 0!==t?t:new d))}))},scale:"sm",children:"Connect"}),n&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(r.i,{children:"Address: "}),Object(M.jsx)(r.i,{children:e.account}),Object(M.jsxs)(r.i,{children:["Chain: ",u.chainName]}),u.cryptos.map((function(t){return Object(M.jsx)(S,{web3:e.library,account:e.account,chainId:e.chainId,crypto:t.cryptoAddress},t.cryptoAddress)})),Object(M.jsx)(r.a,{onClick:function(){e.deactivate(),i(!1)},scale:"sm",children:"Disconnect"})]})]})},B=function(e){var t=Object(s.useState)(new g.a("0")),n=Object(a.a)(t,2),i=n[0],p=n[1],o=e.crypto,u=e.web3,y=e.account;return Object(s.useEffect)((function(){if(o.cryptoAddress===l){var e=new g.a(10).pow(18);p(e)}else{var t;new u.eth.Contract(null!==(t=null===o||void 0===o?void 0:o.abi)&&void 0!==t?t:O,o.cryptoAddress).methods.decimals().call().then((function(e){var t=new g.a(10).pow(e);p(t)}))}}),[o,u.eth.Contract]),Object(M.jsx)(M.Fragment,{children:o.donateOptions.map((function(e,t){return Object(M.jsxs)(r.a,{onClick:function(){!function(e){var t;o.cryptoAddress===l?u.eth.sendTransaction({from:null===y||void 0===y?void 0:y.toString(),to:T,value:e.toString()}):new u.eth.Contract(null!==(t=null===o||void 0===o?void 0:o.abi)&&void 0!==t?t:O,o.cryptoAddress).methods.transfer(null===y||void 0===y?void 0:y.toString(),e.toString()).send({from:null===y||void 0===y?void 0:y.toString(),to:T})}(new g.a(e).multipliedBy(i))},scale:"sm",width:"48%",marginBottom:"10px",marginRight:"5px",children:[new g.a(e).toFixed(3)," ",o.cryptoSymbol]},t.toString()+o.cryptoSymbol)}))})},I=function(e){var t=e.library,n=e.chainId,a=e.account,i=p.a.useContext(x).connected,s=h(null!==n&&void 0!==n?n:0);return Object(M.jsx)("div",{style:{padding:"3px"},children:i&&Object(M.jsx)(M.Fragment,{children:null===s||void 0===s?void 0:s.cryptos.map((function(e){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(B,{crypto:e,web3:t,account:a},e.cryptoAddress),Object(M.jsx)("br",{})]})}))})})};t.default=function(){var e=p.a.useState(),t=Object(a.a)(e,2),n=t[0],u=t[1];p.a.useEffect((function(){n&&n===w&&u(void 0)}),[n]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.b)(),n=t.active,a=t.error,p=t.activate;Object(s.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var i=function(){console.log("Handling 'connect' event"),p(w)},s=function(e){console.log("Handling 'chainChanged' event with payload",e),p(w)},o=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&p(w)},r=function(e){console.log("Handling 'networkChanged' event with payload",e),p(w)};return t.on("connect",i),t.on("chainChanged",s),t.on("accountsChanged",o),t.on("networkChanged",r),function(){t.removeListener&&(t.removeListener("connect",i),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",o),t.removeListener("networkChanged",r))}}}),[n,a,e,p])}(!function(){var e=Object(i.b)(),t=e.activate,n=e.active,p=Object(s.useState)(!1),o=Object(a.a)(p,2),r=o[0],u=o[1];return Object(s.useEffect)((function(){w.isAuthorized().then((function(e){e?t(w,void 0,!0).catch((function(){u(!0)})):u(!0)}))}),[t,n]),Object(s.useEffect)((function(){!r&&n&&u(!0)}),[r,n]),r}()||!!n);var y=Object(i.b)(),d=y.activate,l=y.account,c=y.library,m=y.chainId,b=y.deactivate,f=y.active,v=Object(s.useState)(!1),h=Object(a.a)(v,2),T=h[0],j=h[1];return Object(M.jsx)("div",{children:Object(M.jsx)(o.a,{children:Object(M.jsxs)(x.Provider,{value:{connected:T,setConnected:j},children:[Object(M.jsxs)(r.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"95%"},children:[Object(M.jsx)(r.d,{variant:"blue",children:"Wallet Info"}),Object(M.jsx)(r.c,{style:{},children:Object(M.jsx)(C,{connector:w,activate:d,account:l,library:c,chainId:m,deactivate:b,active:f})})]}),Object(M.jsxs)(r.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"90%",display:"none"},children:[Object(M.jsx)(r.d,{variant:"blue",children:"Exchange"}),Object(M.jsx)(r.c,{style:{height:"100px"},children:"Under Construction"})]}),Object(M.jsxs)(r.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"95%"},children:[Object(M.jsx)(r.d,{variant:"blue",children:"Support This Project"}),Object(M.jsx)(r.c,{style:{height:"500px"},children:Object(M.jsx)(I,{connector:w,account:l,chainId:m,library:c})})]})]})})})}}}]);
//# sourceMappingURL=8.ce098662.chunk.js.map