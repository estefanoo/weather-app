(this["webpackJsonpwheater-app-front"]=this["webpackJsonpwheater-app-front"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/location.2b5e332a.svg"},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(2),s=a(1),i=a.n(s),u=a(3),m=Object(n.createContext)(null),h=a(9),d=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.metaweather.com/api/location/search/?".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n[0].woeid,e.next=9,fetch("https://www.metaweather.com/api/location/".concat(r));case 9:return c=e.sent,e.next=12,c.json();case 12:return l=e.sent,e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(a(16),function(){var e=Object(n.useContext)(m).setDataWeather,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),p=Object(o.a)(s,2),E=p[0],f=p[1],w=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!(c.trim().length>3)){t.next=9;break}return t.next=5,d("query=".concat(c));case 5:n=t.sent,r=n.consolidated_weather,l=n.title,o=n.timezone,e({weathers:r[0],city:l,zone:o,nextWeathers:r.slice(1)}),f((function(e){return[c].concat(Object(h.a)(e))}));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"weatherSearch animate__animated animate__slideInLeft"},r.a.createElement("div",{className:"weatherSearch-close"},r.a.createElement("span",{onClick:function(){document.querySelector(".weatherSearch").style.width="0"}},"X")),r.a.createElement("div",{className:"weatherSearch-header"},r.a.createElement("form",{onSubmit:w},r.a.createElement("select",{onChange:function(e){l(e.currentTarget.value)}},r.a.createElement("option",{className:"country",value:""},"Choose a city"),r.a.createElement("option",{className:"country",disabled:!0},"*Argentina"),r.a.createElement("option",{value:"Buenos Aires"},"*Buenos Aires"),r.a.createElement("option",{className:"country",disabled:!0},"*USA"),r.a.createElement("option",{value:"San Francisco"},"San Francisco"),r.a.createElement("option",{value:"New York"},"New York"),r.a.createElement("option",{className:"country",disabled:!0},"*Peru"),r.a.createElement("option",{value:"Lima"},"Lima"),r.a.createElement("option",{className:"country",disabled:!0},"*Brazil"),r.a.createElement("option",{value:"Bras\xedlia"},"Bras\xedlia"),r.a.createElement("option",{value:"Rio de Janeiro"},"Rio de Janeiro"),r.a.createElement("option",{value:"Salvador"},"Salvador"),r.a.createElement("option",{value:"S\xe3o Paulo"},"S\xe3o Paulo")),r.a.createElement("button",{type:"submit"},"Search"))),r.a.createElement("form",{className:"weatherSearch-cities",onSubmit:w},E&&E.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return function(e){l(e)}(e)},type:"submit"},r.a.createElement("span",null,e))}))))}),E=a(8),f=a.n(E),w=(a(17),function(){var e=Object(n.useContext)(m),t=e.dataWeather,a=e.setDataWeather,c=Object(n.useState)("lattlong=0,0"),l=Object(o.a)(c,2),s=l[0],h=l[1];navigator.geolocation.getCurrentPosition((function(e){h("lattlong=".concat(e.coords.latitude,",").concat(e.coords.longitude))}));var E=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s);case 2:t=e.sent,n=t.consolidated_weather,r=t.title,c=t.timezone,a({weathers:n[0],city:r,zone:c,nextWeathers:n.slice(1)});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E()}),[]);var w=t.weathers,v=t.city,b=t.zone;return r.a.createElement("div",{className:"weatherToday"},r.a.createElement("div",{className:"weatherToday-buttons"},r.a.createElement("button",{className:"weatherToday-button-search",onClick:function(){document.querySelector(".weatherSearch").style.width="100%"}},"Search for places"),r.a.createElement("div",{className:"weatherToday-button-ubication",onClick:E},r.a.createElement("img",{src:f.a,alt:""}))),r.a.createElement("div",{className:"weatherToday-info"},r.a.createElement("img",{src:w&&"https://www.metaweather.com/static/img/weather/".concat(w.weather_state_abbr,".svg"),alt:"wheaterIcon"}),r.a.createElement("div",{className:"weatherToday-info-temperature"},r.a.createElement("h1",null,w&&Math.floor(w.the_temp)),r.a.createElement("span",null,"\xb0C")),r.a.createElement("h2",null,v),r.a.createElement("div",null,r.a.createElement("p",null,"Today - ",w&&function(e){var t=new Date("".concat(e)).toDateString().split(" ");return t[1]+" "+t[2]+" "+t[3]}(w.applicable_date)),r.a.createElement("span",null,b))),r.a.createElement(p,null))}),v=(a(18),function(){var e=Object(n.useContext)(m).dataWeather,t=e.weathers,a=e.nextWeathers;return r.a.createElement("div",{className:"weatherInfo"},r.a.createElement("div",{className:"weatherInfo-week-cards"},a&&a.map((function(e,t){return r.a.createElement("div",{className:"weatherInfo-week-card",key:t},r.a.createElement("p",null,function(e){var t=new Date("".concat(e)).toDateString().split(" ");return t[0]+" "+t[2]+" "+t[1]}(e.applicable_date)),r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),alt:"wheaterIcon"}),r.a.createElement("div",{className:"numbers"},r.a.createElement("span",null,Math.floor(e.max_temp),"\xb0C"),r.a.createElement("span",null,Math.floor(e.min_temp),"\xb0C")))}))),r.a.createElement("div",{className:"weatherInfo-today"},r.a.createElement("div",{className:"weatherInfo-today-title"},r.a.createElement("h3",null,"Today's Hightlights")),r.a.createElement("div",{className:"weatherInfo-today-cards"},r.a.createElement("div",{className:"weatherInfo-today-card"},r.a.createElement("p",null,"Wind status"),r.a.createElement("div",{className:"weatherInfo-today-especific"},r.a.createElement("h4",null,t&&Math.floor(t.wind_speed)," "),r.a.createElement("p",null," mph"))),r.a.createElement("div",{className:"weatherInfo-today-card"},r.a.createElement("p",null,"Humidity"),r.a.createElement("div",{className:"weatherInfo-today-especific"},r.a.createElement("h4",null,t&&t.humidity),r.a.createElement("p",null,"%"))),r.a.createElement("div",{className:"weatherInfo-today-card"},r.a.createElement("p",null,"Visibility"),r.a.createElement("div",{className:"weatherInfo-today-especific"},r.a.createElement("h4",null,t&&Math.floor(t.visibility)),r.a.createElement("p",null,"miles"))),r.a.createElement("div",{className:"weatherInfo-today-card"},r.a.createElement("p",null,"Air Pressure"),r.a.createElement("div",{className:"weatherInfo-today-especific"},r.a.createElement("h4",null,t&&t.air_pressure),r.a.createElement("p",null,"mb"))))))});a(19);var b=function(){var e=Object(n.useState)({weathers:null,city:null,zone:null,nextWeathers:null}),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.Provider,{value:{dataWeather:a,setDataWeather:c}},r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(v,null)))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e5af0c3f.chunk.js.map