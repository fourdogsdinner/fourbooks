(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{220:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var n=r(0),a=r.n(n),o=r(47),i=r(7);function c(t){var e=t.src,r=t.className,n=Object(o.default)().font,c=a.a.useMemo((function(){return window.knayi.fontConvert(e,n)}),[e,n]);return Object(i.jsx)("span",{className:r,style:{whiteSpace:"pre-wrap"},children:c})}},221:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return a}));r(0);var n=r(7);function a(t){var e=t.children,r=t.className,a=t.id;return Object(n.jsx)("div",{className:"offcanvas offcanvas-start "+r,tabIndex:"-1",id:""+a,"aria-labelledby":a+"Label",children:e})}a.Control=function(t){var e=t.id,r=t.children,a=t.className;return Object(n.jsx)("div",{className:a,"data-bs-toggle":"offcanvas","data-bs-target":"#"+e,"aria-controls":e,children:r})},a.Header=function(t){var e=t.className,r=t.children;return Object(n.jsxs)("div",{className:"offcanvas-header "+e,children:[Object(n.jsx)("h5",{className:"offcanvas-title",id:"offcanvasExampleLabel",children:r}),Object(n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})},a.Body=function(t){var e=t.children,r=t.className;return Object(n.jsx)("div",{className:"offcanvas-body "+r,children:e})}},222:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u}));var n=r(228),a=r(0),o=r.n(a),i=r(15),c=r(226),s=r(102),l=r(7);function u(t){var e=t.data,r=void 0===e?[]:e,a=t.renderItem,u=t.separatorHeight,d=void 0===u?8:u,f=t.headerHeight,v=void 0===f?64:f,p=t.NavComponent,b=t.keyExtractor,m=t.contentContainerStyle,h=o.a.useRef(null);Object(n.default)(h);var j=o.a.useCallback((function(t,e){return e.toString()}),[]),g=o.a.useCallback((function(){return Object(l.jsx)("div",{style:{height:d}})}),[d]),O=o.a.useRef(new i.default.Value(0)).current,y=O.interpolate({inputRange:[0,1],outputRange:[0,1],extrapolateLeft:"clamp"}),x=i.default.diffClamp(y,0,v).interpolate({inputRange:[0,v],outputRange:[0,-v]}),k=i.default.event([{nativeEvent:{contentOffset:{y:O}}}],{useNativeDriver:!0});return 0===r.length?Object(l.jsx)(s.default,{}):Object(l.jsxs)(c.SafeAreaView,{style:{flex:1},children:[Object(l.jsx)(i.default.FlatList,{ref:h,contentContainerStyle:[{paddingTop:v+d},m],ItemSeparatorComponent:g,data:r,renderItem:a,keyExtractor:b||j,onScroll:k,scrollEventThrottle:16}),Object(l.jsx)(i.default.View,{style:{transform:[{translateY:x}],position:"absolute",top:0,start:0,end:0,height:v},children:p})]})}},223:function(t,e,r){"use strict";r.r(e),r.d(e,"store",(function(){return n})),r.d(e,"db",(function(){return a}));window.firebase.initializeApp({apiKey:"AIzaSyDfBJrvpVfqELfmEylFrFCI9lH-8Y05U-s",authDomain:"fourbooks-mobile.firebaseapp.com",databaseURL:"https://fourbooks-mobile-default-rtdb.firebaseio.com",projectId:"fourbooks-mobile",storageBucket:"fourbooks-mobile.appspot.com",messagingSenderId:"838079290450",appId:"1:838079290450:web:56d5ffa5b74fd676e0d38b"});var n=window.firebase.firestore(),a=window.firebase.database()},224:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));r(0);var n=r(220),a=r(89),o=r(221),i=r(7);function c(){return Object(i.jsx)(o.default.Control,{className:"btn btn-primary btn-sm",id:"bookTitles",children:Object(i.jsx)(a.default,{name:"list"})})}var s=r(103);function l(t){var e=t.title,r=void 0===e?"FourBooks":e,a=t.headerRight,o=void 0===a?Object(i.jsx)(s.default,{}):a,l=t.headerLeft;return Object(i.jsx)("nav",{style:{height:64,zIndex:99999},className:"navbar bg-primary navbar-dark shadow",children:Object(i.jsxs)("div",{className:"container-fluid",children:[l||Object(i.jsx)(c,{}),Object(i.jsx)("div",{className:"navbar-brand fw-bold",children:Object(i.jsx)(n.default,{src:r})}),o]})})}},225:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return O}));var n=r(27),a=r.n(n),o=r(26),i=r.n(o),c=r(160),s=r.n(c),l=r(35),u=r.n(l),d=r(36),f=r.n(d),v=r(23),p=r.n(v),b=r(0),m=r.n(b),h=r(220),j=r(7);function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p()(t);if(e){var a=p()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var O=function(t){u()(r,t);var e=g(r);function r(){var t;return a()(this,r),(t=e.call(this)).handlePress=t.handlePress.bind(s()(t)),t}return i()(r,[{key:"handlePress",value:function(){var t,e,r;this.props.navigation.navigate("Favorite"===this.props.route?"FavoritePost":"BookPost",{title:null==(t=this.props.item)?void 0:t.title,writer:(null==(e=this.props.item)?void 0:e.writer)||"credit to original writer",serverId:null==(r=this.props.item)?void 0:r.serverId})}},{key:"render",value:function(){var t=this.props.item;return Object(j.jsxs)("div",{className:"card p-2",onClick:this.handlePress,style:{backgroundColor:"inherit",color:"inherit",cursor:"pointer"},title:"click to read more about "+(null==t?void 0:t.title),children:[Object(j.jsx)("div",{className:"card-title",children:Object(j.jsx)(h.default,{src:null==t?void 0:t.title})}),Object(j.jsx)("div",{className:"card-subtitle fs-italic mb-1",children:(null==t?void 0:t.writer)||"credit to original writer"}),Object(j.jsx)("p",{className:"card-text",children:Object(j.jsx)(h.default,{src:null==t?void 0:t.intro})})]})}}]),r}(m.a.PureComponent)},226:function(t,e,r){"use strict";r.r(e),r.d(e,"SafeAreaView",(function(){return f}));var n=r(8),a=r.n(n),o=r(0),i=r(2),c=r(3),s=r(49),l=["style","mode","edges"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var d={top:8,right:4,bottom:2,left:1};function f(t){var e=t.style,r=void 0===e?{}:e,n=t.mode,f=t.edges,v=a()(t,l),p=Object(s.useSafeAreaInsets)(),b=null!=f?f.reduce((function(t,e){return t|d[e]}),0):15,m=o.useMemo((function(){var t=8&b?p.top:0,e=4&b?p.right:0,a=2&b?p.bottom:0,o=1&b?p.left:0,i=c.default.flatten(r);if("margin"===n){var s=i.margin,l=void 0===s?0:s,u=i.marginVertical,d=void 0===u?l:u,f=i.marginHorizontal,v=void 0===f?l:f,m=i.marginTop,h=void 0===m?d:m,j=i.marginRight,g=void 0===j?v:j,O=i.marginBottom,y=void 0===O?d:O,x=i.marginLeft;return[r,{marginTop:h+t,marginRight:g+e,marginBottom:y+a,marginLeft:(void 0===x?v:x)+o}]}var k=i.padding,w=void 0===k?0:k,P=i.paddingVertical,N=void 0===P?w:P,R=i.paddingHorizontal,C=void 0===R?w:R,I=i.paddingTop,S=void 0===I?N:I,T=i.paddingRight,B=void 0===T?C:T,E=i.paddingBottom,D=void 0===E?N:E,L=i.paddingLeft;return[r,{paddingTop:S+t,paddingRight:B+e,paddingBottom:D+a,paddingLeft:(void 0===L?C:L)+o}]}),[r,p,n,b]);return o.createElement(i.default,u({style:m},v))}},227:function(t,e,r){"use strict";r.r(e),r.d(e,"getIntroDataAsync",(function(){return i})),r.d(e,"getStoryDataAsync",(function(){return c}));var n=r(21),a=r.n(n),o=r(223),i=function(t){var e,r;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(o.store.collection("Dashboard").doc("Intro").get());case 3:return e=n.sent,r=e.data(),n.abrupt("return",r.timestamp===(null==t?void 0:t.timestamp)?t:r);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0.code),n.abrupt("return",t);case 12:case"end":return n.stop()}}),null,null,[[0,8]],Promise)},c=function(t){var e;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.a.awrap(o.db.ref().child("Books").child(t).get());case 3:return e=r.sent,r.abrupt("return",e.val());case 7:return r.prev=7,r.t0=r.catch(0),console.log(r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),null,null,[[0,7]],Promise)}},228:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var n=r(11),a=r(0);function o(t){var e=Object(n.useNavigation)(),r=Object(n.useRoute)();a.useEffect((function(){for(var n=e;n&&"tab"!==n.getState().type;)n=n.getParent();if(n)return n.addListener("tabPress",(function(a){var o=e.isFocused(),i=e===n||e.getState().routes[0].key===r.key;requestAnimationFrame((function(){var e=function(t){return null==t.current?null:"scrollToTop"in t.current||"scrollTo"in t.current||"scrollToOffset"in t.current||"scrollResponderScrollTo"in t.current?t.current:"getScrollResponder"in t.current?t.current.getScrollResponder():"getNode"in t.current?t.current.getNode():t.current}(t);o&&i&&e&&!a.defaultPrevented&&("scrollToTop"in e?e.scrollToTop():"scrollTo"in e?e.scrollTo({x:0,y:0,animated:!0}):"scrollToOffset"in e?e.scrollToOffset({offset:0,animated:!0}):"scrollResponderScrollTo"in e&&e.scrollResponderScrollTo({y:0,animated:!0}))}))}))}),[e,t,r.key])}},231:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return V}));var n=r(11),a=r(0),o=r.n(a),i=r(112),c=r(220),s=r(221),l=r(27),u=r.n(l),d=r(26),f=r.n(d),v=r(160),p=r.n(v),b=r(35),m=r.n(b),h=r(36),j=r.n(h),g=r(23),O=r.n(g),y=r(7);function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=O()(t);if(e){var a=O()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return j()(this,r)}}var k=function(t){m()(r,t);var e=x(r);function r(){var t;return u()(this,r),(t=e.call(this)).handlePress=t.handlePress.bind(p()(t)),t}return f()(r,[{key:"handlePress",value:function(){var t,e,r;this.props.navigation.navigate("BookPost",{title:null==(t=this.props.item)?void 0:t.title,writer:(null==(e=this.props.item)?void 0:e.writer)||"credit to original writer",serverId:null==(r=this.props.item)?void 0:r.serverId})}},{key:"render",value:function(){var t,e=this.props.index+1+". "+(null==(t=this.props.item)?void 0:t.title);return Object(y.jsx)("div",{className:"p-2 border-bottom border-1",onClick:this.handlePress,children:Object(y.jsx)(c.default,{src:e})})}}]),r}(o.a.PureComponent);function w(t){var e=t.data,r=Object(n.useNavigation)(),a=o.a.useCallback((function(t){var e=t.item,n=t.index;return Object(y.jsx)(k,{item:e,index:n,navigation:r})}),[]),l=o.a.useCallback((function(t){return t.title}),[]);return Object(y.jsxs)(s.default,{id:"bookTitles",children:[Object(y.jsx)(s.default.Header,{children:Object(y.jsx)(c.default,{src:"\u1005\u102c\u1021\u102f\u1015\u1039\u1031\u1001\u102b\u1004\u1039\u1038\u1005\u1025\u1039\u1019\u103a\u102c\u1038"})}),Object(y.jsx)(s.default.Body,{children:Object(y.jsx)(i.default,{data:e,renderItem:a,keyExtractor:l,contentContainerStyle:{paddingBottom:69}})})]})}var P=r(225),N=r(224),R=r(222),C=r(5),I=r.n(C),S=r(6),T=r.n(S),B=r(21),E=r.n(B),D=r(227),L=r(104);function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){I()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var H={data:[],error:!1};function V(){var t=function(){var t=o.a.useState(H),e=T()(t,2),r=e[0],n=e[1],a=Object(L.default)("@books"),i=a.getItem,c=a.setItem,s=o.a.useCallback((function(t){n((function(e){return F(F({},e),{},{data:t})}))}),[]),l=o.a.useCallback((function(){var t,e;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=i(),r.next=3,E.a.awrap(Object(D.getIntroDataAsync)(t));case 3:if(!(e=r.sent)){r.next=7;break}return s(e.data),r.abrupt("return",c(e));case 7:return r.abrupt("return",c((function(t){return F(F({},t),{},{error:!0})})));case 8:case"end":return r.stop()}}),null,null,null,Promise)}),[]);return o.a.useEffect((function(){l()}),[]),{data:r.data,error:r.error,getInitialData:l}}(),e=Object(n.useNavigation)(),r=o.a.useCallback((function(t){var r=t.item;return Object(y.jsx)(P.default,{item:r,navigation:e,name:"Book"})}),[]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(R.default,{data:t.data,renderItem:r,NavComponent:Object(y.jsx)(N.default,{})}),t.data.length>0&&Object(y.jsx)(w,{data:t.data})]})}}}]);
//# sourceMappingURL=3.975ca0a2.chunk.js.map