(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,r){},15:function(t,e,r){},18:function(t,e,r){},19:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(4),o=r.n(c),s=r(2),i=r(5),u=r(6),l=r(8),p=r(7),d=(r(14),r(15),r(1)),m=r.n(d),f=a.a.memo((function(t){var e=t.productList;return a.a.createElement("ul",{className:"Productlist"},e.map((function(t){return a.a.createElement("li",{className:"Productlist__item",key:t},t)})))}));f.propTypes={productList:m.a.arrayOf(m.a.string).isRequired};r(18);var h=a.a.memo((function(t){var e=t.onClick,r=t.text;return a.a.createElement("button",{className:"btn",type:"button",onClick:e},r)}));h.propTypes={onClick:m.a.func.isRequired,text:m.a.string.isRequired};var b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(t){Object(l.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={productList:[].concat(b),isStarted:!1},t.start=function(){t.setState({isStarted:!0})},t.reverse=function(){t.setState((function(t){return{productList:Object(s.a)(t.productList).reverse()}}))},t.sortAlphabet=function(){t.setState((function(t){return{productList:Object(s.a)(t.productList).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState((function(){return{productList:[].concat(b)}}))},t.sortLength=function(){t.setState((function(t){return{productList:Object(s.a)(t.productList).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.isStarted?a.a.createElement("div",null,a.a.createElement(f,{productList:this.state.productList}),a.a.createElement(h,{text:"Reverse",onClick:this.reverse}),a.a.createElement(h,{text:"Sort alphabetically",onClick:this.sortAlphabet}),a.a.createElement(h,{text:"Reset",onClick:this.reset}),a.a.createElement(h,{text:"Sort by length",onClick:this.sortLength})):a.a.createElement(h,{text:"Start",onClick:this.start}))}}]),r}(a.a.PureComponent);o.a.render(a.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,r){t.exports=r(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.a53f5352.chunk.js.map