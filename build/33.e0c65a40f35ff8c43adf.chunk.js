(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"07d3755f8d26d78ba3ff":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var r=n("c3351205cf0761bd654a"),c={isLoading:!1,isLoaded:!1,error:null},o=function(e){var t=e.initialState,n=void 0===t?c:t,r=e.requestActions,o=void 0===r?[]:r,a=e.successActions,i=void 0===a?[]:a,u=e.failActions,f=void 0===u?[]:u,d=e.resetActions,s=void 0===d?[]:d;return{isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.isLoading,t=arguments.length>1?arguments[1]:void 0;return!!o.includes(t.type)||!i.includes(t.type)&&!f.includes(t.type)&&(s.includes(t.type)?n.isLoading:e)},isLoaded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.isLoaded,t=arguments.length>1?arguments[1]:void 0;return!!i.includes(t.type)||!o.includes(t.type)&&!f.includes(t.type)&&(s.includes(t.type)?n.isLoaded:e)},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.error,t=arguments.length>1?arguments[1]:void 0;return f.includes(t.type)?{message:t.error.message,code:t.error.code}:o.includes(t.type)||i.includes(t.type)?null:s.includes(t.type)?n.error:e}}},a=function(e){return"".concat(r.b).concat(e)}},"1c2b14b512f678e38462":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("000e687100360508b435"),n("2c62cf50f9b98ad5e2af");var r=n("635837756f63384ac159"),c=n("63f23813e2a31e3092ec");n("20ffe07e14dbfd86f679");var o=function(e){return{done:!0,value:e}},a={};function i(e){return r.channel(e)?"channel":r.stringableFunc(e)?String(e):r.func(e)?e.name:String(e)}function u(e,t,n){var r,i,u,f=t;function d(t,n){if(f===a)return o(t);if(n&&!i)throw f=a,n;r&&r(t);var c=n?e[i](n):e[f]();return f=c.nextState,u=c.effect,r=c.stateUpdater,i=c.errorState,f===a?o(t):u}return c.makeIterator(d,function(e){return d(null,e)},n)}function f(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a,f={done:!1,value:c.take(e)},d=function(e){return a=e};return u({q1:function(){return{nextState:"q2",effect:f,stateUpdater:d}},q2:function(){return{nextState:"q1",effect:(e=a,{done:!1,value:c.fork.apply(void 0,[t].concat(r,[e]))})};var e}},"q1","takeEvery("+i(e)+", "+t.name+")")}function d(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a,f,d={done:!1,value:c.take(e)},s=function(e){return{done:!1,value:c.fork.apply(void 0,[t].concat(r,[e]))}},l=function(e){return{done:!1,value:c.cancel(e)}},p=function(e){return a=e},b=function(e){return f=e};return u({q1:function(){return{nextState:"q2",effect:d,stateUpdater:b}},q2:function(){return a?{nextState:"q3",effect:l(a)}:{nextState:"q1",effect:s(f),stateUpdater:p}},q3:function(){return{nextState:"q1",effect:s(f),stateUpdater:p}}},"q1","takeLatest("+i(e)+", "+t.name+")")}function s(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a,f={done:!1,value:c.take(e)},d=function(e){return a=e};return u({q1:function(){return{nextState:"q2",effect:f,stateUpdater:d}},q2:function(){return{nextState:"q1",effect:(e=a,{done:!1,value:c.call.apply(void 0,[t].concat(r,[e]))})};var e}},"q1","takeLeading("+i(e)+", "+t.name+")")}function l(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];var f,d,s={done:!1,value:c.actionChannel(t,c.sliding(1))},l={done:!1,value:c.delay(e)},p=function(e){return f=e},b=function(e){return d=e};return u({q1:function(){return{nextState:"q2",effect:s,stateUpdater:b}},q2:function(){return{nextState:"q3",effect:{done:!1,value:c.take(d)},stateUpdater:p}},q3:function(){return{nextState:"q4",effect:(e=f,{done:!1,value:c.fork.apply(void 0,[n].concat(o,[e]))})};var e},q4:function(){return{nextState:"q2",effect:l}}},"q1","throttle("+i(t)+", "+n.name+")")}function p(e,t,n){for(var r=e,o=arguments.length,i=new Array(o>3?o-3:0),f=3;f<o;f++)i[f-3]=arguments[f];var d={done:!1,value:c.call.apply(void 0,[n].concat(i))},s={done:!1,value:c.delay(t)};return u({q1:function(){return{nextState:"q2",effect:d,errorState:"q10"}},q2:function(){return{nextState:a}},q10:function(e){if((r-=1)<=0)throw e;return{nextState:"q1",effect:s}}},"q1","retry("+n.name+")")}function b(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];var f,d,s={done:!1,value:c.take(t)},l={done:!1,value:c.race({action:c.take(t),debounce:c.delay(e)})},p=function(e){return f=e},b=function(e){return d=e};return u({q1:function(){return{nextState:"q2",effect:s,stateUpdater:p}},q2:function(){return{nextState:"q3",effect:l,stateUpdater:b}},q3:function(){return d.debounce?{nextState:"q1",effect:(t=f,{done:!1,value:c.fork.apply(void 0,[n].concat(o,[t]))})}:{nextState:"q2",effect:(e=d.action,{done:!1,value:e}),stateUpdater:p};var e,t}},"q1","debounce("+i(t)+", "+n.name+")")}t.actionChannel=c.actionChannel,t.all=c.all,t.apply=c.apply,t.call=c.call,t.cancel=c.cancel,t.cancelled=c.cancelled,t.cps=c.cps,t.delay=c.delay,t.effectTypes=c.effectTypes,t.flush=c.flush,t.fork=c.fork,t.getContext=c.getContext,t.join=c.join,t.put=c.put,t.putResolve=c.putResolve,t.race=c.race,t.select=c.select,t.setContext=c.setContext,t.spawn=c.spawn,t.take=c.take,t.takeMaybe=c.takeMaybe,t.debounce=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return c.fork.apply(void 0,[b,e,t,n].concat(o))},t.retry=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return c.call.apply(void 0,[p,e,t,n].concat(o))},t.takeEvery=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return c.fork.apply(void 0,[f,e,t].concat(r))},t.takeLatest=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return c.fork.apply(void 0,[d,e,t].concat(r))},t.takeLeading=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return c.fork.apply(void 0,[s,e,t].concat(r))},t.throttle=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return c.fork.apply(void 0,[l,e,t,n].concat(o))}},"5bb28af140da1909470a":function(e,t,n){"use strict";e.exports=n("1c2b14b512f678e38462")},"7830fb198d99e49e14ff":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var c=n("8af190b70a6bc55c6f1b"),o=r(c),a=r(n("a88d2aa2cbd689d523e2"));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f,d=[];function s(){f=e(d.map(function(e){return e.props})),l.canUseDOM?t(f):n&&(f=n(f))}var l=function(e){var t,n;function c(){return e.apply(this,arguments)||this}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,c.peek=function(){return f},c.rewind=function(){if(c.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,d=[],e};var i=c.prototype;return i.shouldComponentUpdate=function(e){return!a(e,this.props)},i.componentWillMount=function(){d.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},c}(c.Component);return i(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(l,"canUseDOM",u),l}}},"8b90c23a08a46b4f3be4":function(e,t,n){"use strict";n.d(t,"I",function(){return r}),n.d(t,"h",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"z",function(){return a}),n.d(t,"F",function(){return i}),n.d(t,"H",function(){return u}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return d}),n.d(t,"m",function(){return s}),n.d(t,"o",function(){return l}),n.d(t,"t",function(){return p}),n.d(t,"p",function(){return b}),n.d(t,"r",function(){return v}),n.d(t,"q",function(){return g}),n.d(t,"s",function(){return y}),n.d(t,"B",function(){return h}),n.d(t,"C",function(){return O}),n.d(t,"D",function(){return j}),n.d(t,"E",function(){return m}),n.d(t,"u",function(){return w}),n.d(t,"w",function(){return P}),n.d(t,"v",function(){return _}),n.d(t,"y",function(){return S}),n.d(t,"x",function(){return k}),n.d(t,"j",function(){return x}),n.d(t,"l",function(){return q}),n.d(t,"k",function(){return C}),n.d(t,"i",function(){return E}),n.d(t,"d",function(){return R}),n.d(t,"g",function(){return A}),n.d(t,"f",function(){return L}),n.d(t,"e",function(){return D}),n.d(t,"G",function(){return U}),n.d(t,"A",function(){return I}),n.d(t,"n",function(){return M}),n.d(t,"J",function(){return T}),n.d(t,"K",function(){return J});var r="/users-read",c="/cards-read",o="/booked",a="api/collections/get/posts",i="api/collections/get/services_row",u="api/collections/get/team_members",f="api/collections/get/about_values",d="api/singletons/get/About_Page_Content",s="api/collections/get/experience",l="api/collections/get/help_info",p="api/singletons/get/Location_Page",b="api/singletons/get/iv_drip",v="api/collections/get/iv_drips_options",g="api/collections/get/iv_drips_ingredients",y="api/collections/get/iv_drips_faqs",h="api/singletons/get/sauna",O="api/collections/get/sauna_options",j="api/collections/get/sauna_faqs",m="api/collections/get/sauna_slides",w="api/singletons/get/massage",P="api/collections/get/massage_options",_="api/collections/get/massage_ingredients",S="api/collections/get/massage_slides",k="api/collections/get/massage_faqs",x="api/collections/get/cryo_therapy_options",q="api/collections/get/cryo_therapy_slides",C="api/collections/get/cryo_therapy_faqs",E="api/singletons/get/cryo_therapy",R="api/singletons/get/booster_shot",A="api/collections/get/booster_shot_faqs",L="api/collections/get/booster_shot_options",D="api/collections/get/booster_shot_ingredients",U="api/collections/get/services_pricing",I="api/collections/get/promotional_packs",M="api/collections/get/gift_certificates",T="api/singletons/get/terms_page",J="api/singletons/get/policies_page"},a88d2aa2cbd689d523e2:function(e,t){e.exports=function(e,t,n,r){var c=n?n.call(r,e,t):void 0;if(void 0!==c)return!!c;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var f=o[u];if(!i(f))return!1;var d=e[f],s=t[f];if(!1===(c=n?n.call(r,d,s,f):void 0)||void 0===c&&d!==s)return!1}return!0}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("f2873ecf7390fe7d7c89"),i=n.n(a),u=n("5fa3f8487e09c6182715"),f=n.n(u),d=n("f3b0ff1628e56352bcbf"),s=n.n(d),l=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(l),b=n("6a4f9c383785f9168266"),v=n.n(b),g=n("cc13decd9f9c09598c2f"),y="@@saga-injector/daemon",h="@@saga-injector/once-till-unmount";function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=["@@saga-injector/restart-on-remount",y,h],P=function(e){return v()(f()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},_=function(e){var t={saga:s.a,mode:function(e){return f()(e)&&w.includes(e)}};v()(i()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function S(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;t||Object(g.a)(e);var o=j({},r,{mode:r.mode||y}),a=o.saga,i=o.mode;P(n),_(o);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==y&&i!==h)&&(e.injectedSagas[n]=j({},o,{task:e.runSaga(a,c)}))}}function k(e,t){return function(n){if(t||Object(g.a)(e),P(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==y&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function x(e){return Object(g.a)(e),{injectSaga:S(e,!0),ejectSaga:k(e,!0)}}n.d(t,"a",function(){return q});var q=function(e){var t=e.key,n=e.saga,r=e.mode,a=c.a.useContext(o.ReactReduxContext);c.a.useEffect(function(){var e=x(a.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("d3a850c4000d77bccc89"),c=n.n(r),o=n("f3b0ff1628e56352bcbf"),a=n.n(o),i=n("f2873ecf7390fe7d7c89"),u=n.n(i),f=n("6a4f9c383785f9168266"),d=n.n(f);function s(e){var t={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:c.a,injectedSagas:c.a};d()(u()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d782b72bc5b680c7122c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("5bb28af140da1909470a");Object.keys(r).forEach(function(e){t[e]=r[e]})},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("5fa3f8487e09c6182715"),i=n.n(a),u=n("f3b0ff1628e56352bcbf"),f=n.n(u),d=n("a1cf5d6fa4ed65a6ddd5"),s=n.n(d),l=n("6a4f9c383785f9168266"),p=n.n(l),b=n("cc13decd9f9c09598c2f"),v=n("491cc2e27aa2b4221847");function g(e,t){return function(n,r){t||Object(b.a)(e),p()(i()(n)&&!s()(n)&&f()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(v.a)(e.injectedReducers)))}}function y(e){return Object(b.a)(e),{injectReducer:g(e,!0)}}n.d(t,"a",function(){return h});var h=function(e){var t=e.key,n=e.reducer,r=c.a.useContext(o.ReactReduxContext);c.a.useEffect(function(){y(r.store).injectReducer(t,n)},[])}},db74703af2df647ea204:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return f}),n.d(t,"b",function(){return d});var r=n("bd183afcc37eabd79225"),c=n.n(r),o=n("c3351205cf0761bd654a");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=c.a.create({baseURL:o.b});f.interceptors.request.use(function(t){return e.browser&&(t=i({},t,{headers:i({},t.headers,{Authorization:"Bearer ".concat(o.a)})})),t});var d=c.a.create({baseURL:o.c});d.interceptors.request.use(function(t){return e.browser&&(t=i({},t,{headers:i({},t.headers)})),t})}).call(this,n("26d59f808dff3e83c741"))},f1200c0aa9eec8a0f902:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),c=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),o=n("0d7f0986bcd2f33d8a2a"),a=n("ab039aecd4a1d4fedc0e"),i=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),f=n("cb12d4155305786bdcf4"),d=n("adc20f99e57c573c589c"),s=n("d95b0cf107403b178365"),l=(n("07d3755f8d26d78ba3ff"),"privacy_policies/"),p="".concat(l,"LOAD_PRIVACY_POLICES_REQUEST"),b="".concat(l,"LOAD_PRIVACY_POLICES_SUCCESS");"".concat(l,"LOAD_PRIVACY_POLICES_FAIL");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={privacyPoliciesContent:{}},h=Object(u.combineReducers)({privacyPoliciesContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.privacyPoliciesContent,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case b:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r);default:return e}}}),O=function(e){return e.privacyPolicyPage||y},j=function(){return Object(i.a)(O,function(e){return e})},m=n("d782b72bc5b680c7122c"),w=n("db74703af2df647ea204"),P=n("8b90c23a08a46b4f3be4"),_=function(e){return{type:b,payload:e}},S=regeneratorRuntime.mark(x),k=regeneratorRuntime.mark(q);function x(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.a.get(P.J);case 3:return e=n.sent,t=e.data,n.next=7,Object(m.put)(_(t));case 7:console.log("Privacy Data",t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log({err:n.t0});case 13:case"end":return n.stop()}},S,null,[[0,10]])}function q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.takeLatest)(p,x);case 2:case"end":return e.stop()}},k)}Object(a.defineMessages)({header:{id:"".concat("app.containers.PrivacyPolicyPage",".header"),defaultMessage:"This is the PrivacyPolicyPage container!"}});var C,E=n("0b3cb19af78752326f59"),R=(n("9f43329ed93ba9df6ddc"),E.d.div.withConfig({displayName:"styles__Container",componentId:"wgvr1a-0"})(["padding:100px 0px;"]));function A(e,t,n,r){C||(C="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var a=new Array(o),i=0;i<o;i++)a[i]=arguments[i+3];t.children=a}if(t&&c)for(var u in c)void 0===t[u]&&(t[u]=c[u]);else t||(t=c||{});return{$$typeof:C,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"PrivacyPolicyPage",function(){return D});var L=A(o.Helmet,{},void 0,A("title",{},void 0,"PrivacyPolicyPage"),A("meta",{name:"description",content:"Description of PrivacyPolicyPage"}));function D(e){var t=e.getPrivacyPolicesContent,n=e.privacyPolicyPage;Object(s.a)({key:"privacyPolicyPage",reducer:h}),Object(d.a)({key:"privacyPolicyPage",saga:q}),Object(r.useEffect)(function(){t()},[]);var c=n.privacyPoliciesContent,o=void 0===c?{}:c;return A("div",{},void 0,L,A(f.Row,{},void 0,A(R,{},void 0,A(f.Col,{md:{span:"10",offset:"1"}},void 0,A("div",{dangerouslySetInnerHTML:{__html:o.content}})))))}var U=Object(i.b)({privacyPolicyPage:j()}),I=Object(c.connect)(U,{getPrivacyPolicesContent:function(){return{type:p}}});t.default=Object(u.compose)(I,r.memo)(D)}}]);