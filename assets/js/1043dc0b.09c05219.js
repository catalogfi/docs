"use strict";(self.webpackChunkcatalog_docs=self.webpackChunkcatalog_docs||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,m=c["".concat(o,".").concat(p)]||c[p]||h[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},s="API",l={unversionedId:"catalog-accounts/instant-wallet/api",id:"catalog-accounts/instant-wallet/api",title:"API",description:"Description",source:"@site/docs/catalog-accounts/instant-wallet/api.md",sourceDirName:"catalog-accounts/instant-wallet",slug:"/catalog-accounts/instant-wallet/api",permalink:"/docs/catalog-accounts/instant-wallet/api",draft:!1,editUrl:"https://github.com/catalogfi/docs/blob/main/docs/catalog-accounts/instant-wallet/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Insurance",permalink:"/docs/catalog-accounts/instant-wallet/insurance"},next:{title:"Introduction",permalink:"/docs/catalog-swaps/introduction"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Authentication",id:"authentication",level:2},{value:"User Flow",id:"user-flow",level:2},{value:"Creation",id:"creation",level:3},{value:"Querying",id:"querying",level:3},{value:"Funding",id:"funding",level:3},{value:"Sending",id:"sending",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>btc_newWallet</code>",id:"btc_newwallet",level:3},{value:"<code>btc_getWalletByAddress</code>",id:"btc_getwalletbyaddress",level:3},{value:"<code>btc_getWalletByPublicKey</code>",id:"btc_getwalletbypublickey",level:3},{value:"<code>btc_getRefundTx</code>",id:"btc_getrefundtx",level:3},{value:"<code>btc_submitDeposit</code>",id:"btc_submitdeposit",level:3},{value:"<code>btc_send</code>",id:"btc_send",level:3},{value:"<code>btc_commit</code>",id:"btc_commit",level:3}],d={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The Guardian API follows the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC 2.0 specification"),"."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Authentication is required for most API calls to make sure the request sender is actually the owner of the account. The user's Catalog Account is used as the single source of truth to identify the user. All following requests will need to be authorized by the associated private key. During the funding and sending process, the Bitcoin transaction signature is used for authentication instead of requiring a separate signature. In the case of a refund attempt, a secret is used for verification. This is because secret creation is verified by the Catalog Account, and should always be kept private."),(0,i.kt)("h2",{id:"user-flow"},"User Flow"),(0,i.kt)("p",null,"Let's step through an example user flow to outline common API interactions."),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The user sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"btc_newWallet")," request to the Guardian, which returns the Instant Wallet address alongside the Guardian public key (i.e. the second signer of the 2-of-2 multisig). The user will then be able to deposit funds to the returning address to start using their Instant Wallet."),(0,i.kt)("h3",{id:"querying"},"Querying"),(0,i.kt)("p",null,"The user sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"btc_getWallet")," request to the Guardian, which returns the wallet details, such as the address, public keys, and the current active UTXO if it exists."),(0,i.kt)("h3",{id:"funding"},"Funding"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Funding an Instant Wallet places a temporary hold on new funding and send requests as the Guardian does not process them while external transactions are being confirmed. All Instant Wallet funding transactions must originate from a user's Catalog Account. Additionally, the refund transaction must be kept secure as it is the only way to recover funds in the event the Guardian becomes unresponsive.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Funding an empty wallet")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user constructs a funding transaction which sends funds to the wallet address she got from creation. If this is not a segwit transaction, they will need to sign this as the signature will affect the transaction hash. The user ",(0,i.kt)("em",{parentName:"li"},"does not")," need to submit the transaction to the blockchain network."),(0,i.kt)("li",{parentName:"ol"},"The user generates a secret locally, and sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_getRefundTx")," request to the Guardian. The Guardian will verify the request and return a refund transaction with the Guardian signature."),(0,i.kt)("li",{parentName:"ol"},"The user verifies the refund transaction and signature."),(0,i.kt)("li",{parentName:"ol"},"The user sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_submitDeposit")," request to the Guardian, which contains the signed funding transaction. The Guardian will verify and store this transaction if valid (the signature from the funding transaction is used to verify the user)."),(0,i.kt)("li",{parentName:"ol"},"The Relayer will broadcast the transaction. The user will only be able to use their Instant Wallet once the funding transaction is confirmed. They should not send additional funding requests until this process is completed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Funding a non-empty wallet")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user fetches the current wallet status using the ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_getWallet")," method."),(0,i.kt)("li",{parentName:"ol"},"The user constructs a transaction which contains the current funding UTXO as the inital input. The initial output address must be that of the Instant Wallet. The user will need to sign all inputs except the first one.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n    \"input\": {\n        fundingUtxo,\n        User's other utxo1,\n        User's other utxo2,\n        ...\n    },\n    \"output\": {\n        walletAddress,\n        User's address (if there's any change)\n    }\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The user generates a secret locally, and sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_getRefundTx")," request to the Guardian. The Guardian checks if the transaction inputs are signed (except the first one) and uses this to verify the request sender. The Guardian will not process send and other funding requests during this time, until this funding request is finalized. The Guardian will return the refund transaction with the Guardian signature. The Guardian will also provide a signature for the initial input, so the user can submit this funding UTXO.")),(0,i.kt)("h3",{id:"sending"},"Sending"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Send all funds in a single request")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user constructs the send transaction, which has the funding UTXO as the only input. Any recipient address(es) can be specified, as the Guardian only verifies the input."),(0,i.kt)("li",{parentName:"ol"},"The user signs the send transaction and submits a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_send")," request to Guardian. The Guardian will use the transaction signature to authenticate the request sender. The Guardian will not process other Instant Wallet transactions during this time. It will then sign the input, and send the signed transaction to Relayer to broadcast to the network. The Guardian will also return the signature to allow the user to submit the send transaction themselves. If the server fails to provide this signature, the user can use the refund transaction to get their funds back."),(0,i.kt)("li",{parentName:"ol"},"In order to get the Guardian commitment, the user sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_commit")," request and provides the secret generated during the funding process. This secret is used to verify the user's identity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Send a portion of the funds")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user constructs the send transaction, which has the funding UTXO as the only input. This will include a change transaction back to the Instant Wallet address."),(0,i.kt)("li",{parentName:"ol"},"The user sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_getRefundTx")," request to get a new refund transaction and signature. This allows the user to move the funds to the refund address as soon as the send transaction is successful."),(0,i.kt)("li",{parentName:"ol"},"The user sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_send")," request to submit the send transaction. This transaction is signed by the user, allowing the Guardian to verify the sender."),(0,i.kt)("li",{parentName:"ol"},"In order to get the Guardian commitment, the user sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"btc_commit")," request and provides the secret generated during the original funding process. This secret is used to verify the user's identity.")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"btc_newwallet"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_newWallet")),(0,i.kt)("p",null,"Creates a new Instant Wallet for Bitcoin. If the wallet already exists, this will not recreate the wallet or create a new one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public_key")," ","[string]"," (required): The compressed public key in hexadecimal format.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]",": The address of the new Instant Wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guardian_public_key")," ","[string]",": The Guardian public key in hexadecimal format, i.e. the second signer of the 2-of-2 multi-sig.")),(0,i.kt)("h3",{id:"btc_getwalletbyaddress"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_getWalletByAddress")),(0,i.kt)("p",null,"Get the Instant Wallet details with the given address."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]"," (required): The Instant Wallet address.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guardian_public_key")," ","[string]",": The Guardian public key in hexadecimal format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_utxo")," ","[struct]"," (optional): The current funding UTXO details, if it exists.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "funding_utxo": {\n        "tx_hash": "string",\n        "tx_index": "int64",\n        "tx_amount": "int64",\n        "status": "string",\n        "refund_waitblocks": "int64",\n        "refund_secret": "string",\n        "refund_secret_hash": "string",\n        "refund_raw": "string",\n        "refund_guardian_signature": "string"\n    }\n}\n')),(0,i.kt)("h3",{id:"btc_getwalletbypublickey"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_getWalletByPublicKey")),(0,i.kt)("p",null,"Get the Instant Wallet details with the given public key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public_key")," ","[string]"," (required): The Instant Wallet public key.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guardian_public_key")," ","[string]",": The Guardian public key in hexadecimal format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_utxo")," ","[struct]"," (optional): The current funding UTXO details, if it exists.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "funding_utxo": {\n        "tx_hash": "string",\n        "tx_index": "int64",\n        "tx_amount": "int64",\n        "status": "string",\n        "refund_waitblocks": "int64",\n        "refund_secret": "string",\n        "refund_secret_hash": "string",\n        "refund_raw": "string",\n        "refund_guardian_signature": "string"\n    }\n}\n')),(0,i.kt)("h3",{id:"btc_getrefundtx"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_getRefundTx")),(0,i.kt)("p",null,"Get refund transaction details. This method is used prior to funding. If the wallet provided already has funds, this method will prevent the Guardian from processing other fund or send requests until this is complete. This method will return an error if the funding UTXO is not confirmed or is in the process of funding or sending."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]"," (required): Wallet address to be funded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secret_hash")," ","[string]"," (required): Hexadecimal encoding of the secret hash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utxo_hash")," ","[string]"," (required): Hash of the funding UTXO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utxo_index")," ","[int64]"," (required): Index of the funding UTXO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utxo_amount")," ","[int64]"," (required): Amount of the funding UTXO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit_tx")," ","[string]"," (optional): The partially signed raw transaction, if the wallet is not empty.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wait_block")," ","[int64]",": Wait block number in the refund script."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"raw_tx")," ","[string]",": Raw refund transaction in hexadecimal format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guardian_signature")," ","[string]",": Guardian signature for the refund transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit_guardian_signature")," ","[string]"," (optional): Guardian signature for the new funding transaction, if ",(0,i.kt)("inlineCode",{parentName:"li"},"deposit_tx")," is provided.")),(0,i.kt)("h3",{id:"btc_submitdeposit"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_submitDeposit")),(0,i.kt)("p",null,"Confirms a funding request once the deposit has reached sufficient confirmation."),(0,i.kt)("p",null,"Submit funding transaction details. If the provided details are valid, this method will prevent the Guardian from processing other fund or send requests until this is complete. The wallet will be ready-to-use once the funding transaction reaches sufficient confirmations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]"," (required): Wallet address to be funded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secret_hash")," ","[string]"," (required): Hexadecimal encoding of the secret hash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"raw_funding_tx")," ","[string]"," (required): Raw funding transaction, fully signed by user and Guardian.")),(0,i.kt)("h3",{id:"btc_send"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_send")),(0,i.kt)("p",null,"Send Bitcoin from an Instant Wallet. The user needs to include the send transaction hash in order to get a new refund transaction in return."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]"," (required): Address of the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"send_tx")," ","[string]"," (required): Send transaction in raw bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secret_hash")," ","[string]"," (optional): Secret hash for the new refund transaction, if this is a partial send.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guardian_signature")," ","[string]",": Guardian signature for the refund transaction.")),(0,i.kt)("h3",{id:"btc_commit"},(0,i.kt)("inlineCode",{parentName:"h3"},"btc_commit")),(0,i.kt)("p",null,"Receive a commitment that the user will receive the funds eventually."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wallet_address")," ","[string]"," (required): Address of the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tx_hash")," ","[string]"," (required): Transaction hash for the send transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secret")," ","[string]"," (required): Secret for the refund script.")))}h.isMDXComponent=!0}}]);