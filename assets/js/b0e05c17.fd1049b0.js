/*! For license information please see b0e05c17.fd1049b0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2633],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(2784),r(3905)),i=["components"],s={id:"making-a-progressive-web-app",title:"Making a Progressive Web App"},l=void 0,p={unversionedId:"making-a-progressive-web-app",id:"making-a-progressive-web-app",title:"Making a Progressive Web App",description:"The production build has all the tools necessary to generate a first-class",source:"@site/../docs/making-a-progressive-web-app.md",sourceDirName:".",slug:"/making-a-progressive-web-app",permalink:"/docs/making-a-progressive-web-app",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/making-a-progressive-web-app.md",tags:[],version:"current",lastUpdatedBy:"Simon Lieschke",lastUpdatedAt:1618193086,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"making-a-progressive-web-app",title:"Making a Progressive Web App"},sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/adding-custom-environment-variables"},next:{title:"Measuring Performance",permalink:"/docs/measuring-performance"}},c=[{value:"Why Opt-in?",id:"why-opt-in",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2},{value:"Offline-First Considerations",id:"offline-first-considerations",children:[],level:2},{value:"Progressive Web App Metadata",id:"progressive-web-app-metadata",children:[],level:2}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The production build has all the tools necessary to generate a first-class\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/progressive-web-apps/"},"Progressive Web App"),",\nbut ",(0,o.kt)("strong",{parentName:"p"},"the offline/cache-first behavior is opt-in only"),"."),(0,o.kt)("p",null,"Starting with Create React App 4, you can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file to\nyour project to use the built-in support for\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/"},"Workbox"),"'s\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest"},(0,o.kt)("inlineCode",{parentName:"a"},"InjectManifest")),"\nplugin, which will\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/using-bundlers"},"compile"),"\nyour service worker and inject into it a list of URLs to\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/precache-files"},"precache"),"."),(0,o.kt)("p",null,"If you start a new project using one of the PWA ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/custom-templates/"},"custom\ntemplates"),", you'll get a\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file that serves as a good starting point for an\noffline-first service worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template cra-template-pwa\n")),(0,o.kt)("p",null,"The TypeScript equivalent is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template cra-template-pwa-typescript\n")),(0,o.kt)("p",null,"If you know that you won't be using service workers, or if you'd prefer to use a\ndifferent approach to creating your service worker, don't create a\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectManifest")," plugin won't be run in that\ncase."),(0,o.kt)("p",null,"In addition to creating your local ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file, it needs to be\nregistered before it will be used. In order to opt-in to the offline-first\nbehavior, developers should look for the following in their\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/src/index.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/index.js")),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://cra.link/PWA\nserviceWorkerRegistration.unregister();\n")),(0,o.kt)("p",null,"As the comment states, switching ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"serviceWorker.register()")," will opt you in to using the service worker."),(0,o.kt)("h2",{id:"why-opt-in"},"Why Opt-in?"),(0,o.kt)("p",null,"Offline-first Progressive Web Apps are faster and more reliable than traditional\nweb pages, and provide an engaging mobile experience:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All static site assets that are a part of your ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," build are cached so\nthat your page loads fast on subsequent visits, regardless of network\nconnectivity (such as 2G or 3G). Updates are downloaded in the background."),(0,o.kt)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means\nyour users will be able to use your app at 10,000 feet and on the subway."),(0,o.kt)("li",{parentName:"ul"},"On mobile devices, your app can be added directly to the user's home screen,\napp icon and all. This eliminates the need for the app store.")),(0,o.kt)("p",null,"However, they ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/2398"},"can make debugging deployments more\nchallenging"),"."),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"workbox-webpack-plugin")),"\nis integrated into production configuration, and it will take care of compiling\na service worker file that will automatically precache all of your\n",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"-generated assets and keep them up to date as you deploy updates. The\nservice worker will use a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"},"cache-first\nstrategy"),"\nfor handling all requests for ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"-generated assets, including ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"},"navigation\nrequests"),"\nfor your HTML, ensuring that your web app is consistently fast, even on a slow\nor unreliable network."),(0,o.kt)("p",null,"Note: Resources that are not generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),", such as static files that are\ncopied over from your local\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/tree/master/packages/cra-template-pwa/template/public/"},(0,o.kt)("inlineCode",{parentName:"a"},"public/")," directory"),"\nor third-party resources, will not be precached. You can optionally set up Workbox\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/route-requests"},"routes"),"\nto apply the runtime caching strategy of your choice to those resources."),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Starting with Create React App 4, you have full control over customizing the\nlogic in this service worker, by creating your own ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file,\nor customizing the one added by the ",(0,o.kt)("inlineCode",{parentName:"p"},"cra-template-pwa")," (or\n",(0,o.kt)("inlineCode",{parentName:"p"},"cra-template-pwa-typescript"),") template. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules"},"additional\nmodules")," from the\nWorkbox project, add in a push notification library, or remove some of the\ndefault caching logic. The one requirement is that you keep ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST"),"\nsomewhere in your file, as the Workbox compilation plugin checks for this value\nwhen generating a manifest of URLs to precache. If you would prefer not to use\nprecaching, you can assign ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST")," to a variable that will be\nignored, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// eslint-disable-next-line no-restricted-globals\nconst ignored = self.__WB_MANIFEST;\n\n// Your custom service worker code goes here.\n")),(0,o.kt)("h2",{id:"offline-first-considerations"},"Offline-First Considerations"),(0,o.kt)("p",null,"If you do decide to opt-in to service worker registration, please take the\nfollowing into account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the initial caching is done, the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"},"service worker lifecycle"),"\ncontrols when updated content ends up being shown to users. In order to guard against\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430"},"race conditions with lazy-loaded content"),',\nthe default behavior is to conservatively keep the updated service worker in the "',(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting"},"waiting"),'"\nstate. This means that users will end up seeing older content until they close (reloading is not\nenough) their existing, open tabs. See ',(0,o.kt)("a",{parentName:"p",href:"https://jeffy.info/2018/10/10/sw-in-c-r-a.html"},"this blog post"),"\nfor more details about this behavior.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Users aren't always familiar with offline-first web apps. It can be useful to\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption"},"let the user know"),'\nwhen the service worker has finished populating your caches (showing a "This web\napp works offline!" message) and also let them know when the service worker has\nfetched the latest updates that will be available the next time they load the\npage (showing a "New content is available once existing tabs are closed." message). Showing\nthese messages is currently left as an exercise to the developer, but as a\nstarting point, you can make use of the logic included in ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/src/serviceWorkerRegistration.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/serviceWorkerRegistration.js")),", which\ndemonstrates which service worker lifecycle events to listen for to detect each\nscenario, and which as a default, only logs appropriate messages to the\nJavaScript console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Service workers ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https"},"require HTTPS"),",\nalthough to facilitate local testing, that policy\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385"},"does not apply to ",(0,o.kt)("inlineCode",{parentName:"a"},"localhost")),".\nIf your production web server does not support HTTPS, then the service worker\nregistration will fail, but the rest of your web app will remain functional.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The service worker is only enabled in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment"},"production environment"),",\ne.g. the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),". It's recommended that you do not enable an\noffline-first service worker in a development environment, as it can lead to\nfrustration when previously cached assets are used and do not include the latest\nchanges you've made locally.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you ",(0,o.kt)("em",{parentName:"p"},"need")," to test your offline-first service worker locally, build\nthe application (using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),") and run a standard http server from your\nbuild directory. After running the build script, ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," will give\ninstructions for one way to test your production build locally and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment"},"deployment instructions")," have\ninstructions for using other methods. ",(0,o.kt)("em",{parentName:"p"},"Be sure to always use an\nincognito window to avoid complications with your browser cache."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By default, the generated service worker file will not intercept or cache any\ncross-origin traffic, like HTTP ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrating-with-an-api-backend"},"API requests"),",\nimages, or embeds loaded from a different domain. Starting with Create\nReact App 4, this can be customized, as explained above."))),(0,o.kt)("h2",{id:"progressive-web-app-metadata"},"Progressive Web App Metadata"),(0,o.kt)("p",null,"The default configuration includes a web app manifest located at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/public/manifest.json"},(0,o.kt)("inlineCode",{parentName:"a"},"public/manifest.json")),", that you can customize with\ndetails specific to your web application."),(0,o.kt)("p",null,"When a user adds a web app to their homescreen using Chrome or Firefox on\nAndroid, the metadata in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/public/manifest.json"},(0,o.kt)("inlineCode",{parentName:"a"},"manifest.json"))," determines what\nicons, names, and branding colors to use when the web app is displayed.\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"},"The Web App Manifest guide"),"\nprovides more context about what each field means, and how your customizations\nwill affect your users' experience."),(0,o.kt)("p",null,"Progressive web apps that have been added to the homescreen will load faster and\nwork offline when there's an active service worker. That being said, the\nmetadata from the web app manifest will still be used regardless of whether or\nnot you opt-in to service worker registration."))}f.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),p=1;p<arguments.length;p++){for(var c in i=Object(arguments[p]))r.call(i,c)&&(l[c]=i[c]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},3426:function(e,t,r){var n=r(7320),a=60103,o=60106;var i=60109,s=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function k(){}function w(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var b=w.prototype=new k;b.constructor=w,n(b,g.prototype),b.isPureReactComponent=!0;var y={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:y.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+C(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=n+C(s=e[p],p);l+=x(s,t,r,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(s=e.next()).done;)l+=x(s=s.value,t,r,c=n+C(s,p++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,r){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function A(){var e=S.current;if(null===e)throw Error(d(321));return e}},2784:function(e,t,r){r(3426)}}]);