!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("__webpack_no_use_variable",[],n):"object"==typeof exports?exports.__webpack_no_use_variable=n():e.__webpack_no_use_variable=n()}(this,(function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1212)}({1212:function(e,n,t){"use strict";t.r(n);var i,r,c={},l={},u=null,o={1:["华东",[31e4,32e4,33e4,34e4,36e4]],2:["华北",[11e4,12e4,14e4,37e4,13e4,15e4]],3:["华中",[43e4,42e4,41e4]],4:["华南",[44e4,45e4,35e4,46e4]],5:["东北",[21e4,22e4,23e4]],6:["西北",[61e4,65e4,62e4,64e4,63e4]],7:["西南",[5e5,53e4,52e4,54e4,51e4]],8:["港澳台",[81e4,82e4,71e4]],9:["海外",[99e4]]},s={1:["A-G",[34e4,82e4,11e4,5e5,35e4,62e4,44e4,45e4,52e4]],2:["H-K",[46e4,13e4,23e4,41e4,42e4,43e4,32e4,36e4,22e4]],3:["L-S",[21e4,15e4,64e4,63e4,37e4,31e4,14e4,61e4,51e4]],4:["T-Z",[12e4,71e4,65e4,54e4,81e4,53e4,33e4]],5:["OS",[99e4]]},a=function(e,n){var t=[];return $.ajax({url:Site.addRequestPrefix({newPath:"/ajax",oldPath:"../ajax"})+"/city_h.jsp?cmd=getWafNotCk_getCityInfo&Lcid="+n+"&cityCodeList="+Fai.encodeUrl($.toJSON(e)),type:"POST",async:!1,success:function(e){(e=$.parseJSON(e)).success&&($.each(e.cityInfoList,(function(e,t){2052==n||1028==n?c[t.cityCode]=t.cityInfo:l[t.cityCode]=t.cityInfo})),t=e.cityInfoList)}}),t},f=function(e,n,t){if(!e||isNaN(e)||e<=0)return[];var i=[];"undefined"!=typeof(i=2052==n||1028==n?c:l)[e]&&null!=i[e]||("string"!=typeof e&&(e+=""),a(new Array(e),n));var r=undefined;return i[e]&&(r=i[e][2]),r&&(0==r.length?"street"==t&&(r=undefined):"cityOrCounty"==t&&r[0].id.length>6&&(r=undefined)),r||$.ajax({url:Site.addRequestPrefix({newPath:"/ajax",oldPath:"../ajax"})+"/city_h.jsp?cmd=getWafNotCk_cityGetChildren&type="+t+"&Lcid="+n+"&code="+e,type:"POST",async:!1,success:function(n){(n=$.parseJSON(n)).success?(r=n.childList,i[e]&&(i[e][2]=r),$.each(r,(function(e,n){var t=[];t.push(n.name),t.push(n.parentid),i[n.id]=t}))):r=[]},error:function(){r=[]}}),r},h=function(e,n){n?i=i||[]:r=r||[];var t=n?i:r,c=n?2052:1033;t.length||$.ajax({url:Site.addRequestPrefix({newPath:"/ajax",oldPath:"../ajax"})+"/city_h.jsp?cmd=getWafNotCk_getProvinceInfo&Lcid="+c,type:"POST",async:!1,success:function(e){if((e=$.parseJSON(e)).success)for(var n=0,i=e.provinceInfoList.length;n<i;n++)t.push(e.provinceInfoList[n])}});try{var l=o[e][1],u=[];return $.each(t,(function(e,n){$.inArray(parseInt(n.id),l)>=0&&u.push(n)})),u}catch(s){return t}},g=function(e){return"string"!=typeof e&&(e+=""),""!=c[e]&&"undefined"!=c[e]&&null!=c[e]||a(new Array(e),2052),!(!c[e]||"1"!==c[e][1])},d=function(e){var n;if(e)return e.length<=3&&("市"==e.slice(e.length-1,e.length)||"县"==e.slice(e.length-1,e.length)||"盟"==e.slice(e.length-1,e.length))?e.slice(0,e.length-1):"群岛的岛礁及其海域"==(n=e.slice(e.length-9))?e.slice(0,e.length-9):"土家族苗族自治州"==(n=e.slice(e.length-8))||"傣族景颇族自治州"==n||"哈尼族彝族自治州"==n||"布依族苗族自治州"==n||"蒙古族藏族自治州"==n?e.slice(0,e.length-8):"藏族羌族自治州"==(n=e.slice(e.length-7))||"壮族苗族自治州"==n||"黎族苗族自治县"==n||"苗族侗族自治州"==n?e.slice(0,e.length-7):"傈僳族自治州"==(n=e.slice(e.length-6))||"哈萨克自治州"==n?e.slice(0,e.length-6):"彝族自治州"==(n=e.slice(e.length-5))||"藏族自治州"==n||"白族自治州"==n||"傣族自治州"==n||"黎族自治县"==n||"回族自治州"==n||"蒙古自治州"==n?e.slice(0,e.length-5):""==(n=e.slice(e.length-4))?e.slice(0,e.length-4):"蒙古族"==(n=e.slice(e.length-3))||"自治州"==n?e.slice(0,e.length-3):"群岛"==(n=e.slice(e.length-2))||"地区"==n||"林区"==n?e.slice(0,e.length-2):"市"==e.slice(e.length-1,e.length)||"县"==e.slice(e.length-1,e.length)||"盟"==e.slice(e.length-1,e.length)?e.slice(0,e.length-1):e},p=function(e){return f(e,2052,"cityOrCounty")},y=function(e){if(!e)return{id:e,name:"",parentId:0};var n=c[e];return n?{id:e,name:n[0],parentId:n[1]}:("string"!=typeof e&&(e+=""),(n=(a(new Array(e),2052)[0]||{}).cityInfo)?{id:e,name:n[0],parentId:n[1]}:{id:e,name:"",parentId:0})},m=function(e){if(e){if(3==e.length&&"省"==e.slice(e.length-1,e.length))return e.slice(0,e.length-1);var n=e.slice(e.length-6);return"维吾尔自治区"==n?e.slice(0,e.length-6):"特别行政区"==(n=e.slice(e.length-5))||"壮族自治区"==n||"回族自治区"==n?e.slice(0,e.length-5):"自治区"==(n=e.slice(e.length-3))?e.slice(0,e.length-3):"省"==e.slice(e.length-1,e.length)?e.slice(0,e.length-1):e}},v=function(e){return f(e,1033,"cityOrCounty")},P=function(e){if(e)return"Special Administrative Region"==e.slice(e.length-29,e.length)&&(e=e.slice(0,e.length-30)),"Autonomous Region"==e.slice(e.length-17,e.length)&&(e=e.slice(0,e.length-18)),"Province"!=e.slice(e.length-8,e.length)&&"province"!=e.slice(e.length-8,e.length)||(e=e.slice(0,e.length-9)),"Zhuang"==e.slice(e.length-6,e.length)&&(e=e.slice(0,e.length-7)),"Uygur"==e.slice(e.length-5,e.length)&&(e=e.slice(0,e.length-6)),"Hui"==e.slice(e.length-3,e.length)&&(e=e.slice(0,e.length-4)),e},j=function(e){if(e)return"Tibetan Autonomous Prefecture"==e.slice(e.length-29,e.length)&&(e=e.slice(0,e.length-30)),"Li and Miao Autonomous"==e.slice(e.length-22,e.length)&&(e=e.slice(0,e.length-23)),"Li Autonomous"==e.slice(e.length-13,e.length)&&(e=e.slice(0,e.length-14)),"Prefecture"==e.slice(e.length-10,e.length)&&(e=e.slice(0,e.length-11)),"Mongolian"==e.slice(e.length-9,e.length)&&(e=e.slice(0,e.length-10)),"County"==e.slice(e.length-6,e.length)&&(e=e.slice(0,e.length-7)),"City"==e.slice(e.length-4,e.length)&&(e=e.slice(0,e.length-5)),e},I={getAreaGroups:function(){return o},getAreaGroupsPinYin:function(){return s},getProvince:function(e){return function(e){return h(e,!0)}(e)},getCities:function(e){return p(e)},getCounty:function(e){return p(e)},getStreet:function(e){return f(e,2052,"street")},getInfo:function(e){return y(e)},simpleProvinceName:function(e){$.each(e,(function(n){e[n].name=m(e[n].name)}))},simpleProvinceNameStr:function(e){return m(e)},simpleCityName:function(e){$.each(e,(function(n){e[n].name=d(e[n].name)}))},simpleCityNameStr:function(e){return d(e)},simpleProvinceNameEn:function(e){$.each(e,(function(n){e[n].name=P(e[n].name)}))},simpleCityNameEn:function(e){$.each(e,(function(n){e[n].name=j(e[n].name)}))},simpleCityNameStrEn:function(e){return j(e)},simpleProvinceNameStrEn:function(e){return P(e)},getProvinceEn:function(e){return function(e){return h(e,!1)}(e)},getCitiesEn:function(e){return v(e)},getCountyEn:function(e){return v(e)},getStreetEn:function(e){return f(e,1033,"street")},getInfoEn:function(e){return function(e){if(!e)return{id:e,name:"",parentId:0};var n=l[e];return n?{id:e,name:n[0],parentId:n[1]}:("string"!=typeof e&&(e+=""),(n=(a(new Array(e),1033)[0]||{}).cityInfo)?{id:e,name:n[0],parentId:n[1]}:{id:e,name:"",parentId:0})}(e)},simpleCityListStr:function(e){if(!e||e.length<=0)return"未添加地区";var n={};$.each(e,(function(e,t){if(!((""+t).length<6)){var i=y(t);n[i.parentId]?n[i.parentId].count++:n[i.parentId]={count:1,objs:[]},n[i.parentId].objs.push(i)}}));var t=[],i=[];$.each(n,(function(e,n){(function(e,n){if(null!=u)return u[n];u={};var t=[];return t=2052==e||1028==e?c:l,$.each(t,(function(e,n){var t=u[n[1]]||0;t++,u[n[1]]=t})),u[n]})(2052,e)==n.count?(t.push(m(y(e).name)),t.push("、")):$.each(n.objs,(function(e,n){i.push(d(n.name)),i.push("、")}))}));var r=t.join("")+i.join("");return r.slice(0,r.length-1)},isValidProvince:function(e){return g(e)},isValidCity:function(e,n){return function(e,n){if("string"!=typeof e&&(e+=""),""!=c[e]&&"undefined"!=c[e]&&null!=c[e]||a(new Array(e),2052),n){if("string"!=typeof n&&(n+=""),""!=c[n]&&"undefined"!=c[n]&&null!=c[n]||a(new Array(n),2052),c[e]&&c[e][1]===n&&g(n))return!0}else if(c[e]&&"1"!==c[e][1])return!0;return!1}(e,n)},getCityList:function(e,n){return a(e,n)},getAllCityInfo:function(e){return function(e){var n=[];return $.ajax({url:Site.addRequestPrefix({newPath:"/ajax",oldPath:"../ajax"})+"/city_h.jsp?cmd=getWafNotCk_getAllCityInfo",type:"POST",async:!1,success:function(t){(t=$.parseJSON(t)).success&&(2052==e||1028==e?c=t.cityInfoList:l=t.cityInfoList,n=t.cityInfoList)}}),n}(e)},initProvinces:function(e){return function(e){var n=[];$.each(s,(function(e,t){$.each(t[1],(function(e,t){n.push(t+"")}))}));var t=a(n,e);2052==e||1028==e?i=t:r=t}(e)},getCityFormJScache:function(e,n){return function(e,n){var t=[],i=[];return t=2052==e||1028==e?c:l,$.each(t,(function(e,t){var r={};t[1]==n&&(r.id=e,r.name=t[0],r.parentid=t[1],i.push(r))})),i}(e,n)}};window.site_cityUtil=I,n["default"]=I}})}));