(function(){var n,t,e,i;window._version="v-1463481183206",window.taigaConfig={api:"http://localhost:8000/api/v1/",eventsUrl:null,eventsMaxMissedHeartbeats:5,eventsHeartbeatIntervalTime:6e4,debug:!0,defaultLanguage:"en",themes:["taiga","material-design","high-contrast"],defaultTheme:"taiga",publicRegisterEnabled:!0,feedbackEnabled:!0,privacyPolicyUrl:null,termsOfServiceUrl:null,maxUploadFileSize:null,contribPlugins:[]},window.taigaContribPlugins=[],window._decorators=[],window.addDecorator=function(n,t){return window._decorators.push({provider:n,decorator:t})},window.getDecorators=function(){return window._decorators},e=function(n){return $("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />')},n=function(n){return new Promise(function(t,i){return $.getJSON(n).then(function(n){return window.taigaContribPlugins.push(n),n.css&&e(n.css),n.js?ljs.load(n.js,t):t()})})},t=function(t){var e;return e=[],_.map(t,function(t){return e.push(n(t))}),Promise.all(e)},i=$.getJSON("/conf.json"),i.done(function(n){return window.taigaConfig=_.assign({},window.taigaConfig,n)}),i.fail(function(){return console.error("Your conf.json file is not a valid json file, please review it.")}),i.always(function(){return window.taigaConfig.contribPlugins.length>0?t(window.taigaConfig.contribPlugins).then(function(){return ljs.load("/"+window._version+"/js/app.js",function(){return angular.bootstrap(document,["taiga"])})}):ljs.load("/"+window._version+"/js/app.js",function(){return angular.bootstrap(document,["taiga"])})})}).call(this);