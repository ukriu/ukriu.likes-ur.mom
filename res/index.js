function p(e,o="",n=""){var t=document.getElementById("data"),r=document.createElement("p");r.textContent=`${e}: ${o}${n}`,t.appendChild(r)}!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).BrowserDetector=o()}(this,(function(){"use strict";function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o={chrome:"Google Chrome",brave:"Brave",crios:"Google Chrome",edge:"Microsoft Edge",edg:"Microsoft Edge",fennec:"Mozilla Firefox",jsdom:"JsDOM",mozilla:"Mozilla Firefox",msie:"Microsoft Internet Explorer",opera:"Opera",opios:"Opera",opr:"Opera",rv:"Microsoft Internet Explorer",safari:"Safari",samsungbrowser:"Samsung Browser",electron:"Electron"},n={android:"Android",androidTablet:"Android Tablet",cros:"Chrome OS",fennec:"Android Tablet",ipad:"IPad",iphone:"IPhone",jsdom:"JsDOM",linux:"Linux",mac:"Macintosh",tablet:"Android Tablet",win:"Windows","windows phone":"Windows Phone",xbox:"Microsoft Xbox"},t=function(e){var o=new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,"})?")),n=Number(e).toString().match(o);return n?n[0]:null},r=function(){return"undefined"!=typeof window?window.navigator:null},i=function(){function i(e){var o;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,i),this.userAgent=e||(null===(o=r())||void 0===o?void 0:o.userAgent)||null}var a,s,c;return a=i,s=[{key:"parseUserAgent",value:function(e){var i,a,s,c={},l=e||this.userAgent||"",d=l.toLowerCase().replace(/\s\s+/g," "),p=/(edge)\/([\w.]+)/.exec(d)||/(edg)[/]([\w.]+)/.exec(d)||/(opr)[/]([\w.]+)/.exec(d)||/(jsdom)[/]([\w.]+)/.exec(d)||/(samsungbrowser)[/]([\w.]+)/.exec(d)||/(electron)[/]([\w.]+)/.exec(d)||/(chrome)[/]([\w.]+)/.exec(d)||/(crios)[/]([\w.]+)/.exec(d)||/(opios)[/]([\w.]+)/.exec(d)||/(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d)||/(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d)||/(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d)||/(webkit)[/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||/(fennec)[/]([\w.]+)/.exec(d)||d.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[],u=/(ipad)/.exec(d)||/(ipod)/.exec(d)||/(iphone)/.exec(d)||/(jsdom)/.exec(d)||/(windows phone)/.exec(d)||/(xbox)/.exec(d)||/(win)/.exec(d)||/(tablet)/.exec(d)||/(android)/.test(d)&&!1===/(mobile)/.test(d)&&["androidTablet"]||/(android)/.exec(d)||/(mac)/.exec(d)||/(linux)/.exec(d)||/(cros)/.exec(d)||[],m=p[5]||p[3]||p[1]||null,w=u[0]||null,f=p[4]||p[2]||null,g=r();"chrome"===m&&"function"==typeof(null==g||null===(i=g.brave)||void 0===i?void 0:i.isBrave)&&(m="brave"),m&&(c[m]=!0),w&&(c[w]=!0);var h=Boolean(c.tablet||c.android||c.androidTablet),x=Boolean(c.ipad||c.tablet||c.androidTablet),v=Boolean(c.android||c.androidTablet||c.tablet||c.ipad||c.ipod||c.iphone||c["windows phone"]),b=Boolean(c.cros||c.mac||c.linux||c.win),y=Boolean(c.brave||c.chrome||c.crios||c.opr||c.safari||c.edg||c.electron),A=Boolean(c.msie||c.rv);return{name:null!==(a=o[m])&&void 0!==a?a:null,platform:null!==(s=n[w])&&void 0!==s?s:null,userAgent:l,version:f,shortVersion:f?t(parseFloat(f),2):null,isAndroid:h,isTablet:x,isMobile:v,isDesktop:b,isWebkit:y,isIE:A}}},{key:"getBrowserInfo",value:function(){var e=this.parseUserAgent();return{name:e.name,platform:e.platform,userAgent:e.userAgent,version:e.version,shortVersion:e.shortVersion}}}],c=[{key:"VERSION",get:function(){return"3.2.0"}}],s&&e(a.prototype,s),c&&e(a,c),Object.defineProperty(a,"prototype",{writable:!1}),i}();return i})),document.addEventListener("DOMContentLoaded",(async()=>{const e=document.getElementById("loading"),o=o=>e.innerText=o;document.getElementById("shrink-image");const n=document.getElementById("intro-music");document.getElementById("user-data");setTimeout((()=>{n.play()}),8e3);const t=await(await fetch("https://wtfismyip.com/json").catch(o)).json().catch(o);console.log(t),p("IP Address",t.YourFuckingIPAddress),p("Full Location",t.YourFuckingLocation);const r=await(await fetch(`https://we-are-jammin.xyz/json/${t.YourFuckingIPAddress}`).catch((()=>o("Disable your aggressive ad-blocker and refresh")))).json().catch(o);console.log(r),p("Country",r.country),p("Region",r.regionName),p("City",r.city),p("ZIP Code",r.zip),p("Latitude",r.lat),p("Longitude",r.lon),p("Timezone",r.timezone),p("ISP",r.isp),p("Organization",r.org),p("Autonomous System",r.as);const i=new BrowserDetector(window.navigator.userAgent).parseUserAgent();p("Browser Name",i.name),p("Platform Name",i.platform),p("Browser Version",i.version),p("Mobile/Tablet",i.isMobile||i.isTablet?"Yes":"No"),p("Referrer",document.referrer||"None"),p("System Languages",navigator.languages.join(", ")),p("Screen Width",screen.width+"px"),p("Screen Height",screen.height+"px"),screen.width==window.width&&screen.height==window.height||(p("Window Width",window.outerWidth+"px"),p("Window Height",window.outerHeight+"px")),p("Display Pixel Depth",screen.pixelDepth),void 0!==screen.orientation&&(p("Screen Orientation",screen.orientation.type.split("-")[0]),p("Screen Rotation",screen.orientation.angle+" degrees")),p("CPU Threads",navigator.hardwareConcurrency),p("Available Browser Memory",void 0!==window.performance.memory?Math.round(window.performance.memory.jsHeapSizeLimit/1024/1024)+"MB":null),p("Also, I did it with you mom"),p("https://ukriu.com"),setTimeout((()=>{!function(e,o){let n=e.volume/o*50,t=setInterval((()=>{e.volume>n?e.volume-=n:(e.volume=0,clearInterval(t),e.pause())}),50)}(n,5e3)}),75e3)}));