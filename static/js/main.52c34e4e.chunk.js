(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=(c(21),c(9)),h=c.n(u);function v(e){return fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=b3f6f4e3","&t=").concat(e)).then((function(e){return e.json()})).catch((function(e){return{Response:"False",Error:e}}))}var O=function(e){var t=e.onAddMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],d=Object(r.useState)(null),m=Object(n.a)(d,2),u=m[0],O=m[1],x=Object(r.useState)(!1),p=Object(n.a)(x,2),f=p[0],g=p[1],N=Object(r.useState)(!1),y=Object(n.a)(N,2),w=y[0],k=y[1],I=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i,s,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k(!0),a&&a.trim().length){e.next=7;break}return g(!0),k(!1),e.abrupt("return");case 7:return e.next=9,v(a);case 9:if(!("Error"in(c=e.sent))){e.next=14;break}return g(!0),k(!1),e.abrupt("return");case 14:i=c.Title,s=c.Plot,n=c.imdbID,r=c.Poster,O({title:i,description:s,imgUrl:"N/A"!==r?r:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(n),imdbId:n}),k(!1);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:I,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:a,onChange:function(e){s(e.target.value),g(!1)}})}),f&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":w}),disabled:!a.length,children:u?"Search again":"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:u&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){u&&(t(u),O(null),s(""))},children:"Add to the list"})})]})]}),u&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:u})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAddMovie:function(e){i((function(t){return t.some((function(t){return t.imdbId===e.imdbId}))?c:[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.52c34e4e.chunk.js.map