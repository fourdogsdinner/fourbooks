(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{220:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(0),i=r.n(n),o=r(47),a=r(7);function l(t){var e=t.src,r=t.className,n=Object(o.default)().font,l=i.a.useMemo((function(){return window.knayi.fontConvert(e,n)}),[e,n]);return Object(a.jsx)("span",{className:r,style:{whiteSpace:"pre-wrap"},children:l})}},222:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));var n=r(228),i=r(0),o=r.n(i),a=r(15),l=r(226),c=r(102),u=r(7);function s(t){var e=t.data,r=void 0===e?[]:e,i=t.renderItem,s=t.separatorHeight,d=void 0===s?8:s,f=t.headerHeight,v=void 0===f?64:f,p=t.NavComponent,g=t.keyExtractor,m=t.contentContainerStyle,h=o.a.useRef(null);Object(n.default)(h);var b=o.a.useCallback((function(t,e){return e.toString()}),[]),j=o.a.useCallback((function(){return Object(u.jsx)("div",{style:{height:d}})}),[d]),y=o.a.useRef(new a.default.Value(0)).current,O=y.interpolate({inputRange:[0,1],outputRange:[0,1],extrapolateLeft:"clamp"}),x=a.default.diffClamp(O,0,v).interpolate({inputRange:[0,v],outputRange:[0,-v]}),R=a.default.event([{nativeEvent:{contentOffset:{y:y}}}],{useNativeDriver:!0});return 0===r.length?Object(u.jsx)(c.default,{}):Object(u.jsxs)(l.SafeAreaView,{style:{flex:1},children:[Object(u.jsx)(a.default.FlatList,{ref:h,contentContainerStyle:[{paddingTop:v+d},m],ItemSeparatorComponent:j,data:r,renderItem:i,keyExtractor:g||b,onScroll:R,scrollEventThrottle:16}),Object(u.jsx)(a.default.View,{style:{transform:[{translateY:x}],position:"absolute",top:0,start:0,end:0,height:v},children:p})]})}},225:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y}));var n=r(27),i=r.n(n),o=r(26),a=r.n(o),l=r(160),c=r.n(l),u=r(35),s=r.n(u),d=r(36),f=r.n(d),v=r(23),p=r.n(v),g=r(0),m=r.n(g),h=r(220),b=r(7);function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p()(t);if(e){var i=p()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f()(this,r)}}var y=function(t){s()(r,t);var e=j(r);function r(){var t;return i()(this,r),(t=e.call(this)).handlePress=t.handlePress.bind(c()(t)),t}return a()(r,[{key:"handlePress",value:function(){var t,e,r;this.props.navigation.navigate("Favorite"===this.props.route?"FavoritePost":"BookPost",{title:null==(t=this.props.item)?void 0:t.title,writer:(null==(e=this.props.item)?void 0:e.writer)||"credit to original writer",serverId:null==(r=this.props.item)?void 0:r.serverId})}},{key:"render",value:function(){var t=this.props.item;return Object(b.jsxs)("div",{className:"card p-2",onClick:this.handlePress,style:{backgroundColor:"inherit",color:"inherit",cursor:"pointer"},title:"click to read more about "+(null==t?void 0:t.title),children:[Object(b.jsx)("div",{className:"card-title",children:Object(b.jsx)(h.default,{src:null==t?void 0:t.title})}),Object(b.jsx)("div",{className:"card-subtitle fs-italic mb-1",children:(null==t?void 0:t.writer)||"credit to original writer"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)(h.default,{src:null==t?void 0:t.intro})})]})}}]),r}(m.a.PureComponent)},226:function(t,e,r){"use strict";r.r(e),r.d(e,"SafeAreaView",(function(){return f}));var n=r(8),i=r.n(n),o=r(0),a=r(2),l=r(3),c=r(49),u=["style","mode","edges"];function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var d={top:8,right:4,bottom:2,left:1};function f(t){var e=t.style,r=void 0===e?{}:e,n=t.mode,f=t.edges,v=i()(t,u),p=Object(c.useSafeAreaInsets)(),g=null!=f?f.reduce((function(t,e){return t|d[e]}),0):15,m=o.useMemo((function(){var t=8&g?p.top:0,e=4&g?p.right:0,i=2&g?p.bottom:0,o=1&g?p.left:0,a=l.default.flatten(r);if("margin"===n){var c=a.margin,u=void 0===c?0:c,s=a.marginVertical,d=void 0===s?u:s,f=a.marginHorizontal,v=void 0===f?u:f,m=a.marginTop,h=void 0===m?d:m,b=a.marginRight,j=void 0===b?v:b,y=a.marginBottom,O=void 0===y?d:y,x=a.marginLeft;return[r,{marginTop:h+t,marginRight:j+e,marginBottom:O+i,marginLeft:(void 0===x?v:x)+o}]}var R=a.padding,T=void 0===R?0:R,k=a.paddingVertical,w=void 0===k?T:k,S=a.paddingHorizontal,C=void 0===S?T:S,N=a.paddingTop,P=void 0===N?w:N,B=a.paddingRight,I=void 0===B?C:B,L=a.paddingBottom,E=void 0===L?w:L,F=a.paddingLeft;return[r,{paddingTop:P+t,paddingRight:I+e,paddingBottom:E+i,paddingLeft:(void 0===F?C:F)+o}]}),[r,p,n,g]);return o.createElement(a.default,s({style:m},v))}},228:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var n=r(11),i=r(0);function o(t){var e=Object(n.useNavigation)(),r=Object(n.useRoute)();i.useEffect((function(){for(var n=e;n&&"tab"!==n.getState().type;)n=n.getParent();if(n)return n.addListener("tabPress",(function(i){var o=e.isFocused(),a=e===n||e.getState().routes[0].key===r.key;requestAnimationFrame((function(){var e=function(t){return null==t.current?null:"scrollToTop"in t.current||"scrollTo"in t.current||"scrollToOffset"in t.current||"scrollResponderScrollTo"in t.current?t.current:"getScrollResponder"in t.current?t.current.getScrollResponder():"getNode"in t.current?t.current.getNode():t.current}(t);o&&a&&e&&!i.defaultPrevented&&("scrollToTop"in e?e.scrollToTop():"scrollTo"in e?e.scrollTo({x:0,y:0,animated:!0}):"scrollToOffset"in e?e.scrollToOffset({offset:0,animated:!0}):"scrollResponderScrollTo"in e&&e.scrollResponderScrollTo({y:0,animated:!0}))}))}))}),[e,t,r.key])}},229:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u}));var n=r(11),i=r(0),o=r.n(i),a=r(225),l=r(222),c=r(7);function u(){var t=Object(n.useNavigation)(),e=o.a.useCallback((function(e){var r=e.item;return Object(c.jsx)(a.default,{item:r,navigation:t,route:"Favorite"})}));return Object(c.jsx)(l.default,{data:[],renderItem:e})}}}]);
//# sourceMappingURL=6.a8c7a110.chunk.js.map