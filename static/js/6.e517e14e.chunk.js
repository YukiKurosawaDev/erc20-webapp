(this["webpackJsonperc20-webapp"]=this["webpackJsonperc20-webapp"]||[]).push([[6],{598:function(e,t,n){"use strict";var a=n(59),i={"en-US":{locale:"en-US",language:"English",code:"en"}},s=Object.values(i),o=[{label:"Home",icon:"HomeIcon",href:"/"},{label:"Info",icon:"InfoIcon",href:"/Info"},{label:"RoadMap",icon:"InfoIcon",href:"/RoadMap"},{label:"Donate",icon:"TradeIcon",href:"/donate"},{label:"Contacts",icon:"InfoIcon",href:"/about"},{label:"Github",icon:"IfoIcon",href:"https://github.com/YukiKurosawaDev"}],r=(n(0),n(13));t.a=function(e){var t=e.children;function n(){}return Object(r.jsx)("div",{children:Object(r.jsx)(a.f,{isDark:!1,toggleTheme:n,langs:s,setLang:n,currentLang:"EN",links:o,children:Object(r.jsx)("div",{style:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"2.5%"},children:t})})})}},636:function(e,t,n){"use strict";n.r(t);var a=n(599),i=n(136),s=n(0),o=n.n(s),r=n(598),p=n(59),u=n(629),l=n(7),c=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],y=function e(){Object(l.a)(this,e),this.chainId=0,this.chainName="",this.chainExplorerUrl="",this.chainExplorerName="",this.cryptos=[]},d="0x0000000000000000000000000000000000000000",m={chainId:1,chainName:"ETH MainNet",chainExplorerUrl:"https://etherscan.io/",chainExplorerName:"Etherscan",cryptos:[{cryptoName:"ETH",cryptoAddress:d,cryptoSymbol:"ETH",abi:void 0,donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"BUSD",cryptoAddress:"0x4Fabb145d64652a948d72533023f6E7A623C7C53",cryptoSymbol:"BUSD",abi:void 0,donateOptions:["4","40","400","4000"]},{cryptoName:"USDT",cryptoAddress:"0xdAC17F958D2ee523a2206206994597C13D831ec7",cryptoSymbol:"USDT",abi:void 0,donateOptions:["4","40","400","4000"]}]},b={chainId:4,chainName:"ETH Rinkeby",chainExplorerUrl:"https://rinkeby.etherscan.io/",chainExplorerName:"Etherscan",cryptos:[{cryptoName:"ETH",cryptoAddress:d,cryptoSymbol:"ETH",abi:void 0,donateOptions:["0.001","0.01","0.1","1"]}]},h={chainId:56,chainName:"BSC MainNet",chainExplorerUrl:"https://bscscan.com/",chainExplorerName:"BscScan",cryptos:[{cryptoName:"BNB",cryptoAddress:d,cryptoSymbol:"BNB",abi:void 0,donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"WBNB",cryptoAddress:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",cryptoSymbol:"WBNB",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"guy",type:"address"},{name:"wad",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"src",type:"address"},{name:"dst",type:"address"},{name:"wad",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"wad",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"dst",type:"address"},{name:"wad",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"deposit",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!0,name:"guy",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!0,name:"dst",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"dst",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"src",type:"address"},{indexed:!1,name:"wad",type:"uint256"}],name:"Withdrawal",type:"event"}],donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"BUSD",cryptoAddress:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",cryptoSymbol:"BUSD",abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],donateOptions:["0.4","4","40","400"]},{cryptoName:"USDT",cryptoAddress:"0x55d398326f99059fF775485246999027B3197955",cryptoSymbol:"USDT",abi:c,donateOptions:["0.4","4","40","400"]}]},f={chainId:97,chainName:"BSC TestNet",chainExplorerUrl:"https://testnet.bscscan.com/",chainExplorerName:"BscScan",cryptos:[{cryptoName:"BNB",cryptoAddress:d,cryptoSymbol:"BNB",abi:void 0,donateOptions:["0.001","0.01","0.1","1"]},{cryptoName:"USDT",cryptoAddress:"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",cryptoSymbol:"USDT",abi:c,donateOptions:["0.4","4","40","400"]}]},v=[m,b,h,f];function T(e){return v.find((function(t){return t.chainId===e}))}var g="0x000000007FD703013D6B3Ff60A2F274006B5e237",w=new u.a({supportedChainIds:[m.chainId,b.chainId,h.chainId,f.chainId]});var j=o.a.createContext({connected:!1,setConnected:function(){}}),x=n(602),O=n.n(x),M=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],S=n(13),I=function(e){var t=Object(s.useState)("0"),n=Object(a.a)(t,2),i=n[0],o=n[1],r=e.web3,u=e.account,l=e.chainId,c=e.crypto,y=T(null!==l&&void 0!==l?l:0),m=null===y||void 0===y?void 0:y.cryptos.find((function(e){return e.cryptoAddress===c}));if(c===d)r.eth.getBalance(null!==u&&void 0!==u?u:"").then((function(e){var t=new O.a(10).pow(18),n=new O.a(e).div(t).toFixed(4);o(n)}));else{var b,h=new r.eth.Contract(null!==(b=null===m||void 0===m?void 0:m.abi)&&void 0!==b?b:M,c);h.methods.decimals().call().then((function(e){var t=new O.a(10).pow(e);h.methods.balanceOf(null===u||void 0===u?void 0:u.toString()).call().then((function(e){var n=new O.a(e).div(t).toFixed(4);o(n)}))}))}return Object(S.jsxs)(p.l,{children:[null===m||void 0===m?void 0:m.cryptoName,": ",i," ",null===m||void 0===m?void 0:m.cryptoSymbol]})},B=function(e){var t=Object(s.useContext)(j),n=t.connected,i=t.setConnected,o=Object(s.useState)(new y),r=Object(a.a)(o,2),u=r[0],l=r[1];return Object(S.jsxs)("div",{style:{wordBreak:"break-all"},children:[!n&&Object(S.jsx)(p.a,{onClick:function(){e.activate(e.connector,void 0,!0).then((function(){var t,n;e.active&&null!=e.account&&(i(!0),l(null!==(t=T(null!==(n=e.chainId)&&void 0!==n?n:0))&&void 0!==t?t:new y))}))},scale:"sm",children:"Connect"}),n&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.l,{children:"Address: "}),Object(S.jsx)(p.l,{children:e.account}),Object(S.jsxs)(p.l,{children:["Chain: ",u.chainName]}),u.cryptos.map((function(t){return Object(S.jsx)(I,{web3:e.library,account:e.account,chainId:e.chainId,crypto:t.cryptoAddress},t.cryptoAddress)})),Object(S.jsx)(p.a,{onClick:function(){e.deactivate(),i(!1)},scale:"sm",children:"Disconnect"})]})]})},A=function(e){var t,n,a=e.chainId,i=e.onDismiss,s=localStorage.getItem("hash");return Object(S.jsxs)(p.h,{title:"Thank You!",style:{marginLeft:"auto",marginRight:"auto",width:"80%"},onDismiss:i,children:[Object(S.jsxs)(p.l,{style:{wordBreak:"break-all"},children:["Tx Hash: ",s]}),Object(S.jsxs)(p.e,{href:(null===(t=T(a))||void 0===t?void 0:t.chainExplorerUrl)+"tx/"+s,target:"_blank",children:["View on ",null===(n=T(a))||void 0===n?void 0:n.chainExplorerName]})]})},C=function(e){var t=e.size,n=e.onDismiss;return Object(S.jsxs)(p.h,{title:"",style:{marginLeft:"auto",marginRight:"auto",width:"80%"},onDismiss:n,children:[Object(S.jsx)(p.l,{style:{wordBreak:"break-all",textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto",display:"block"},children:"Processing ... "}),Object(S.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:Object(S.jsx)(p.k,{size:t})})]})},D=function(e){e.chainId;var t=e.onDismiss,n=localStorage.getItem("message");return Object(S.jsx)(p.h,{title:"Transaction Failed",style:{marginLeft:"auto",marginRight:"auto",width:"80%"},onDismiss:t,children:Object(S.jsxs)(p.l,{style:{wordBreak:"break-all"},children:["Error Message:",Object(S.jsx)("br",{})," ",n]})})},E=n(611),k=n.n(E),N=function(e){var t=Object(s.useState)(new O.a("0")),n=Object(a.a)(t,2),i=n[0],o=n[1],r=e.crypto,u=e.web3,l=e.account,c=Object(p.n)(Object(S.jsx)(A,{title:"Thank You!",chainId:e.chainId}),!0),y=Object(a.a)(c,1)[0],m=Object(p.n)(Object(S.jsx)(C,{title:"",size:128}),!0),b=Object(a.a)(m,2),h=b[0],f=b[1],v=Object(p.n)(Object(S.jsx)(D,{title:"",chainId:e.chainId}),!0),w=Object(a.a)(v,1)[0],j=Object(s.useState)(r.donateOptions),x=Object(a.a)(j,2),I=x[0],B=x[1],E=Object(s.useRef)(null),N=Object(s.useRef)(!0);Object(s.useEffect)((function(){if(r.cryptoAddress===d){var e=new O.a(10).pow(18);o(e)}else{var t;new u.eth.Contract(null!==(t=null===r||void 0===r?void 0:r.abi)&&void 0!==t?t:M,r.cryptoAddress).methods.decimals().call().then((function(e){var t=new O.a(10).pow(e);o(t)}))}}),[null===r||void 0===r?void 0:r.abi,r.cryptoAddress,u]),Object(s.useEffect)((function(){if(null===E.current||N.current){var t=N.current?0:5e3;N.current=!1,E.current=setTimeout((function(){var t,n=null===(t=T(e.chainId))||void 0===t?void 0:t.cryptos[0];(null===n||void 0===n?void 0:n.cryptoSymbol)!==r.cryptoSymbol&&(null===n||void 0===n?void 0:n.cryptoSymbol)!=="W"+r.cryptoSymbol?k.a.get("https://api.binance.com/api/v3/ticker/price?symbol="+(null===n||void 0===n?void 0:n.cryptoSymbol)+r.cryptoSymbol).then((function(e){var t=new O.a(e.data.price),a=[];null===n||void 0===n||n.donateOptions.map((function(e,n){return a.push(new O.a(e).times(t).toString()),null})),B(a),E.current=null})).catch((function(e){})):E.current=null}),t)}}));var U=function(e){if(h(),r.cryptoAddress===d)u.eth.estimateGas({from:null===l||void 0===l?void 0:l.toString(),to:g}).then((function(t){console.log(t),u.eth.sendTransaction({from:null===l||void 0===l?void 0:l.toString(),to:g,value:e.toString(),gas:t}).then((function(e){var t=e.transactionHash;localStorage.setItem("hash",t),f(),y()})).catch((function(e){f(),e&&(localStorage.setItem("message",e.message),w())}))})).catch((function(e){f(),e&&(localStorage.setItem("message",e.message),w())}));else{var t;h();var n=new u.eth.Contract(null!==(t=null===r||void 0===r?void 0:r.abi)&&void 0!==t?t:M,r.cryptoAddress).methods.transfer(g,e.toString());n.estimateGas({from:null===l||void 0===l?void 0:l.toString(),to:r.cryptoAddress}).then((function(e){console.log(e),n.send({from:null===l||void 0===l?void 0:l.toString(),to:r.cryptoAddress,gas:e}).then((function(e){var t=e.transactionHash;localStorage.setItem("hash",t),f(),y()})).catch((function(e){f(),e&&(localStorage.setItem("message",e.message),w())}))})).catch((function(e){f(),e&&(localStorage.setItem("message",e.message),w())}))}};return Object(S.jsx)(S.Fragment,{children:I.map((function(e,t){return Object(S.jsxs)(p.a,{onClick:U.bind(undefined,new O.a(e).multipliedBy(i)),scale:"sm",width:"48%",marginBottom:"10px",marginRight:"5px",children:[new O.a(e).toFixed(3)," ",r.cryptoSymbol]},t.toString()+r.cryptoSymbol)}))})},U=function(e){var t=e.library,n=e.chainId,a=e.account,i=o.a.useContext(j).connected,s=T(null!==n&&void 0!==n?n:0);return Object(S.jsx)("div",{style:{padding:"3px"},children:i&&Object(S.jsx)(S.Fragment,{children:null===s||void 0===s?void 0:s.cryptos.map((function(e,i){return Object(S.jsxs)("div",{children:[Object(S.jsx)(N,{crypto:e,web3:t,account:a,chainId:null!==n&&void 0!==n?n:0},e.cryptoAddress+i.toString()),Object(S.jsx)("br",{})]},i)}))})})},F=function(e){var t=e.variant,n=e.children;return Object(S.jsx)("div",{style:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",marginBottom:"10px",wordBreak:"break-all",fontSize:"14px"},children:Object(S.jsx)(p.g,{variant:t,icon:Object(S.jsx)("div",{}),children:n})})},L=function(e){var t=e.children,n=window.screen.availWidth,a={width:n>=1200?"50%":.95*n+"px",marginLeft:"auto",marginRight:"auto",marginTop:"2.5%"};return Object(S.jsxs)("div",{style:a,children:[Object(S.jsx)(F,{variant:"warning",children:"Make sure the site you visit is ksyuki.app"}),t]})};t.default=function(){var e=o.a.useState(),t=Object(a.a)(e,2),n=t[0],u=t[1];o.a.useEffect((function(){n&&n===w&&u(void 0)}),[n]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.b)(),n=t.active,a=t.error,o=t.activate;Object(s.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var i=function(){console.log("Handling 'connect' event"),o(w)},s=function(e){console.log("Handling 'chainChanged' event with payload",e),o(w)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(w)},p=function(e){console.log("Handling 'networkChanged' event with payload",e),o(w)};return t.on("connect",i),t.on("chainChanged",s),t.on("accountsChanged",r),t.on("networkChanged",p),function(){t.removeListener&&(t.removeListener("connect",i),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",r),t.removeListener("networkChanged",p))}}}),[n,a,e,o])}(!function(){var e=Object(i.b)(),t=e.activate,n=e.active,o=Object(s.useState)(!1),r=Object(a.a)(o,2),p=r[0],u=r[1];return Object(s.useEffect)((function(){w.isAuthorized().then((function(e){e?t(w,void 0,!0).catch((function(){u(!0)})):u(!0)}))}),[t,n]),Object(s.useEffect)((function(){!p&&n&&u(!0)}),[p,n]),p}()||!!n);var l=Object(i.b)(),c=l.activate,y=l.account,d=l.library,m=l.chainId,b=l.deactivate,h=l.active,f=Object(s.useState)(!1),v=Object(a.a)(f,2),T=v[0],g=v[1];return Object(S.jsx)("div",{children:Object(S.jsx)(r.a,{children:Object(S.jsx)(j.Provider,{value:{connected:T,setConnected:g},children:Object(S.jsxs)(L,{children:[Object(S.jsxs)(p.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"95%"},children:[Object(S.jsx)(p.d,{variant:"blue",children:"Wallet Info"}),Object(S.jsx)(p.c,{style:{},children:Object(S.jsx)(B,{connector:w,activate:c,account:y,library:d,chainId:m,deactivate:b,active:h})})]}),Object(S.jsxs)(p.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"90%",display:"none"},children:[Object(S.jsx)(p.d,{variant:"blue",children:"Exchange"}),Object(S.jsx)(p.c,{style:{height:"100px"},children:"Under Construction"})]}),Object(S.jsxs)(p.b,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"10px",width:"95%"},children:[Object(S.jsx)(p.d,{variant:"blue",children:"Support This Project"}),Object(S.jsx)(p.c,{style:{height:"500px"},children:Object(S.jsx)(U,{connector:w,account:y,chainId:m,library:d})})]})]})})})})}}}]);
//# sourceMappingURL=6.e517e14e.chunk.js.map