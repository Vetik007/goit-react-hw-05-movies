"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{854:function(n,e,r){var t=r(8402),a=r(184);e.Z=function(n){var e=n.isLoading;return(0,a.jsx)(t.VL,{visible:e,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"],wrapperStyle:{display:"block",marginTop:"5px",marginLeft:"auto",marginRight:"auto"}})}},3174:function(n,e,r){r.d(e,{Z:function(){return S}});var t,a,i,o,c,s,u,l,p,d,f,x=r(7689),h=r(2134),g=r(168),v=r(5706),m=r(1087),Z=(v.Z.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n"]))),v.Z.li(a||(a=(0,g.Z)(["\n  list-style: none;\n  padding: 15px;\n  margin: 0;\n"]))),(0,v.Z)(m.rU)(i||(i=(0,g.Z)(["\n  text-decoration: none;\n  color: black;\n  :hover {\n    color: red;\n  }\n"]))),v.Z.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n\n  :hover {\n    scale: 1.1;\n  }\n"]))),v.Z.img(c||(c=(0,g.Z)(["\n  width: 200px;\n"]))),v.Z.ul(s||(s=(0,g.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n"])))),b=v.Z.li(u||(u=(0,g.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  max-height: 100%;\n  min-height: 390px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n"]))),w=(0,v.Z)(m.rU)(l||(l=(0,g.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: var(--accent);\n  }\n"]))),y=v.Z.img(p||(p=(0,g.Z)(["\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),k=v.Z.p(d||(d=(0,g.Z)(["\n  height: 100%;\n  padding: 10px 8px;\n  font-weight: 500;\n  font-size: 18px;\n  transition: all 200ms ease-in-out;\n"]))),j=v.Z.div(f||(f=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n\n  :hover {\n    scale: 1.1;\n  }\n"]))),_=r(184),S=function(n){var e=n.movies,r=(0,x.TH)();return e?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.title,a=n.original_name,i=n.poster_path;return(0,_.jsx)(b,{children:(0,_.jsx)(w,{to:"/movies/".concat(e),state:{from:r},children:(0,_.jsxs)(j,{children:[i?(0,_.jsx)(y,{src:"https://image.tmdb.org/t/p/w500/".concat(i),alt:t}):(0,_.jsx)(h.ofX,{size:200}),(0,_.jsx)(k,{children:null!==t&&void 0!==t?t:a})]})})},e)}))}),(0,_.jsx)(x.j3,{})]}):null}},5295:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,i,o=r(9439),c=r(2791),s=r(1087),u=r(6338),l=r(7596),p={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},d=r(168),f=r(5706),x=f.Z.button(t||(t=(0,d.Z)(["\n  cursor: pointer;\n  color: black;\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 10px 15px;\n  background: transparent;\n\n  :hover {\n    color: white;\n    box-shadow: 2px 2px 15px #8707ff inset;\n  }\n"]))),h=f.Z.form(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),g=f.Z.input(i||(i=(0,d.Z)(["\n  margin-right: 10px;\n  color: black;\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 10px 25px;\n  background: transparent;\n  max-width: 190px;\n  :hover {\n    box-shadow: 2px 2px 15px #8707ff inset;\n  }\n"]))),v=r(2134),m=r(184),Z=function(n){var e=n.searchMovies,r=(0,c.useState)(""),t=(0,o.Z)(r,2),a=t[0],i=t[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(h,{onSubmit:function(n){if(n.preventDefault(),!a)return l.Am.error("Please enter your search details",p);e(a),i("")},children:[(0,m.jsx)(g,{type:"text",placeholder:"Enter for search movies",name:"query",value:a,onChange:function(n){i(n.target.value.toLowerCase())}}),(0,m.jsx)(x,{type:"submit",children:(0,m.jsx)(v.RB5,{size:"15"})})]})})},b=r(3174),w=r(854),y=function(){var n,e=(0,s.lr)(),r=(0,o.Z)(e,2),t=r[0],a=r[1],i=(0,c.useState)([]),l=(0,o.Z)(i,2),p=l[0],d=l[1],f=(0,c.useState)(!1),x=(0,o.Z)(f,2),h=x[0],g=x[1],v=(0,c.useState)(null),y=(0,o.Z)(v,2),k=y[0],j=y[1],_=null!==(n=t.get("query"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){_&&(g(!0),(0,u.bI)(_).then((function(n){var e=n.results;d(e)})).catch((function(n){return j(n)})).finally((function(){return g(!1)})))}),[_]),(0,m.jsxs)(m.Fragment,{children:[k&&(0,m.jsx)("h2",{children:k.message}),(0,m.jsx)(Z,{searchMovies:function(n){a(""!==n?{query:n}:{})}}),p.length>0&&(0,m.jsx)(b.Z,{movies:p}),h&&(0,m.jsx)(w.Z,{})]})}},6338:function(n,e,r){r.d(e,{Me:function(){return p},Y5:function(){return l},bI:function(){return u},np:function(){return d},yF:function(){return s}});var t=r(5861),a=r(4687),i=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d7fac244b345f78f55899e7714233f87",s=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=295.4d9fa44c.chunk.js.map