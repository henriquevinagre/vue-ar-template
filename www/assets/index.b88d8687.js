import{r as e,o as t,c as a,w as n,a as o,p as r,b as i,d as l,e as s,g as d,f as c,h as u,i as p,j as m,m as v,F as h,k as g,l as f,n as w}from"./vendor.7f7c7ab2.js";var b={f7:null,handleSplashscreen:function(){var e=b.f7;window.Capacitor&&!e.device.electron&&setTimeout((()=>{window.Capacitor.Plugins.SplashScreen.hide()}),2e3)},handleAndroidBackButton:function(){var e=b.f7;const t=e.$;!e.device.electron&&window.Capacitor&&window.Capacitor.Plugins.App.addListener("backButton",(function(){if(t(".actions-modal.modal-in").length)return void e.actions.close(".actions-modal.modal-in");if(t(".dialog.modal-in").length)return void e.dialog.close(".dialog.modal-in");if(t(".sheet-modal.modal-in").length)return void e.sheet.close(".sheet-modal.modal-in");if(t(".popover.modal-in").length)return void e.popover.close(".popover.modal-in");if(t(".popup.modal-in").length){if(t(".popup.modal-in>.view").length){const t=e.views.get(".popup.modal-in>.view");if(t&&t.router&&t.router.history.length>1)return void t.router.back()}return void e.popup.close(".popup.modal-in")}if(t(".login-screen.modal-in").length)return void e.loginScreen.close(".login-screen.modal-in");if(t(".page-current .searchbar-enabled").length)return void e.searchbar.disable(".page-current .searchbar-enabled");if(t(".page-current .card-expandable.card-opened").length)return void e.card.close(".page-current .card-expandable.card-opened");const a=e.views.current;a&&a.router&&a.router.history.length>1?a.router.back():t(".panel.panel-in").length&&e.panel.close(".panel.panel-in")}),!1)},handleKeyboard:function(){var e=b.f7;if(window.Capacitor){var t=e.$,a=window.Capacitor.Plugins.Keyboard;a&&(a.setResizeMode({mode:"native"}),a.setScroll({isDisabled:!0}),a.setAccessoryBarVisible({isVisible:!1}),window.addEventListener("keyboardWillShow",(()=>{e.input.scrollIntoView(document.activeElement,0,!0,!0)})),window.addEventListener("keyboardDidShow",(()=>{e.input.scrollIntoView(document.activeElement,0,!0,!0)})),window.addEventListener("keyboardDidHide",(()=>{document.activeElement&&t(document.activeElement).parents(".messagebar").length||a.setAccessoryBarVisible({isVisible:!0})})),t(document).on("touchstart","input, textarea, select",(function(e){var t=e.target.nodeName.toLowerCase(),n=e.target.type;"select"===t||["datetime-local","time","date","datetime"].indexOf(n)>=0?a.setAccessoryBarVisible({isVisible:!0}):a.setAccessoryBarVisible({isVisible:!1})}),!0))}},init:function(e){b.f7=e,b.handleAndroidBackButton(),b.handleSplashscreen(),b.handleKeyboard()}};const E={},T=o("div",{class:"navbar"},[o("div",{class:"navbar-bg"}),o("div",{class:"navbar-inner"},[o("div",{class:"title"},"Assistance Application")])],-1);E.render=function(r,i){const l=e("f7-list-item"),s=e("f7-list"),d=e("f7-page");return t(),a(d,{name:"home"},{default:n((()=>[T,o(s,null,{default:n((()=>[o(l,{title:"AR Screen",link:"/ar/"})])),_:1})])),_:1})};var k,y,C,x,R,S,A,H,V={titulo:"Impressora 001",atributos:[{tipo:"percentagem",nome:"Tinta Preta",valor:53},{tipo:"absoluto",nome:"Papel",valor:13,maximo:50}]};const B={data:()=>({}),methods:{initialize:function(){k=new THREE.Scene;let e=new THREE.AmbientLight(13421772,.5);function t(){S.onResizeElement(),S.copyElementSizeTo(C.domElement),null!==A.arController&&S.copyElementSizeTo(A.arController.canvas),A.arController.addEventListener("getMarker",(function(e){e.data.marker.area>500&&console.log("found marker?",e)}))}k.add(e),y=new THREE.Camera,k.add(y),(C=new THREE.WebGLRenderer({antialias:!0,alpha:!0})).setClearColor(new THREE.Color("lightgrey"),0),C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(window.devicePixelRatio),document.getElementById("ar-renderer").appendChild(C.domElement),x=new THREE.Clock,(A=new THREEx.ArToolkitContext({cameraParametersUrl:"assets/data/camera_para.dat",detectionMode:"mono"})).init((()=>{y.projectionMatrix.copy(A.getProjectionMatrix())})),(S=new THREEx.ArToolkitSource({sourceType:"webcam",sourceWidth:640,sourceHeight:480})).init((()=>{t()})),window.addEventListener("resize",(()=>{t()})),H=new THREE.Group,k.add(H),new THREEx.ArMarkerControls(A,H,{type:"pattern",patternUrl:"assets/data/hiro.patt"}),(R=function(e,t){var a="Arial",n=18,o=4,r={r:255,g:255,b:255,a:.8},i=t,l={r:0,g:0,b:0,a:1},s=e.titulo,d=document.createElement("canvas"),c=d.getContext("2d");c.font="Bold "+n+"px "+a;var u=c.measureText(s).width;c.fillStyle="rgba("+r.r+","+r.g+","+r.b+","+r.a+")",c.strokeStyle="rgba("+i.r+","+i.g+","+i.b+","+i.a+")",c.lineWidth=o,P(c,d.width/2-u/2-o,0,u+2*o,n+3*o,8);let p=0;for(var m=0;m<e.atributos.length;m++){var v=(h=e.atributos[m]).nome+": "+h.valor;switch(h.tipo){case"percentagem":v+="%";break;case"absoluto":v+=" de "+h.maximo}let t=c.measureText(v).width;p=t>p?t:p}P(c,d.width/2-p/2-o,n+3*o,p+2*o,(n+3*o)*e.atributos.length,8),c.textAlign="center",c.fillStyle="rgba("+l.r+", "+l.g+", "+l.b+", 1.0)",c.fillText(s,d.width/2,n+o);for(m=0;m<e.atributos.length;m++){var h;v=(h=e.atributos[m]).nome+": "+h.valor;switch(h.tipo){case"percentagem":v+="%";break;case"absoluto":v+=" de "+h.maximo}c.fillText(v,d.width/2,(n+2*o)*(m+2))}var g=new THREE.Texture(d);g.needsUpdate=!0;var f=new THREE.SpriteMaterial({map:g,depthTest:!1}),w=new THREE.Sprite(f);return w.scale.set(.01*d.width,.01*d.height),w}(V,{r:0,g:0,b:0,a:.8})).position.y=1,H.add(R)},update:function(){!1!==S.ready&&A.update(S.domElement)},render:function(){C.render(k,y)},animate:function(){requestAnimationFrame(this.animate),x.getDelta(),this.update(),this.render()}},mounted(){this.initialize(),this.animate()}};function P(e,t,a,n,o,r){e.beginPath(),e.moveTo(t+r,a),e.lineTo(t+n-r,a),e.quadraticCurveTo(t+n,a,t+n,a+r),e.lineTo(t+n,a+o-r),e.quadraticCurveTo(t+n,a+o,t+n-r,a+o),e.lineTo(t+r,a+o),e.quadraticCurveTo(t,a+o,t,a+o-r),e.lineTo(t,a+r),e.quadraticCurveTo(t,a,t+r,a),e.closePath(),e.fill(),e.stroke()}const L=l("data-v-67200ae5");r("data-v-67200ae5");const _=o("div",{id:"m-container"},[o("video",{id:"video"}),o("div",{id:"ar-renderer"})],-1);i();const z=L(((n,r,i,l,s,d)=>{const c=e("f7-navbar"),u=e("f7-page");return t(),a(u,{name:"AR-Scene"},{default:L((()=>[o(c,{title:"AR","back-link":"Back"}),_])),_:1})}));B.render=z,B.__scopeId="data-v-67200ae5";const M={},I=o("p",null,"Sorry",-1),W=o("p",null,"Requested content not found.",-1);M.render=function(r,i,l,s,d,c){const u=e("f7-navbar"),p=e("f7-block"),m=e("f7-page");return t(),a(m,null,{default:n((()=>[o(u,{title:"Not found","back-link":"Back"}),o(p,{strong:""},{default:n((()=>[I,W])),_:1})])),_:1})};const q=[{path:"/",component:E},{path:"/ar/",component:B},{path:"(.*)",component:M}],D=s({state:{},getters:{},actions:{}}),j={setup(){const e=d(),t={name:"My App",theme:"auto",id:"io.framework7.myapp",store:D,routes:q,input:{scrollIntoViewOnFocus:e.capacitor,scrollIntoViewCentered:e.capacitor},statusbar:{iosOverlaysWebView:!0,androidOverlaysWebView:!1}},a=c(""),n=c("");return u((()=>{p((()=>{e.capacitor&&b.init(m)}))})),{f7params:t,username:a,password:n,alertLoginData:()=>{m.dialog.alert("Username: "+a.value+"<br>Password: "+n.value,(()=>{m.loginScreen.close()}))}}}};j.render=function(r,i,l,s,d,c){const u=e("f7-view"),p=e("f7-app");return t(),a(p,v(s.f7params,{"theme-dark":""}),{default:n((()=>[o(u,{main:"",class:"safe-areas",url:"/"})])),_:1},16)},h.use(g);const O=f(j);w(O),O.mount("#app");
