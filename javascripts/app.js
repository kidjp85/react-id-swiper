webpackJsonp([0,3],[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=t(1),r=a(i),l=t(153),u=a(l),s=t(154),o=a(s);u["default"].render(r["default"].createElement(o["default"],null),document.getElementById("app"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(155),u=a(l),s=t(156),o=a(s),d=t(157),p=a(d),c=t(186),f=a(c),m=t(187),g=a(m),w=t(188),v=a(w),b=t(189),_=a(b),E=t(190),B=a(E),x=t(191),P=a(x),C=t(192),S=a(C),M=t(193),k=a(M),h=t(194),j=a(h),y=t(195),V=a(y),N=t(196),O=a(N),I=t(197),R=a(I),T=t(198),D=a(T),z=t(199),F=a(z),q=t(200),L=a(q),A=t(201),H=a(A),G=t(202),J=a(G),K=t(203),Q=a(K),U=t(204),W=a(U),X=t(205),Y=a(X),Z=t(206),$=a(Z),ee=t(207),ne=a(ee),te=t(208),ae=a(te),ie=t(209),re=a(ie);n["default"]=function(){return r["default"].createElement("div",{className:"body-container"},r["default"].createElement(o["default"],null),r["default"].createElement(u["default"],null),r["default"].createElement("div",{className:"container"},r["default"].createElement(re["default"],null),r["default"].createElement(p["default"],null),r["default"].createElement(g["default"],null),r["default"].createElement(f["default"],null),r["default"].createElement(v["default"],null),r["default"].createElement(_["default"],null),r["default"].createElement(B["default"],{id:"auto-slides-per-view"}),r["default"].createElement(P["default"],{id:"centered-slides"}),r["default"].createElement(S["default"],{id:"centered-slides-auto"}),r["default"].createElement(k["default"],null),r["default"].createElement(j["default"],{id:"multi-row"}),r["default"].createElement(V["default"],{id:"grad-cursor"}),r["default"].createElement(O["default"],null),r["default"].createElement(R["default"],null),r["default"].createElement(D["default"],null),r["default"].createElement(F["default"],{showImage:"true",id:"fade-effect"}),r["default"].createElement(L["default"],{showImage:"true",id:"cube-effect"}),r["default"].createElement(H["default"],{showImage:"true",id:"coverflow-effect"}),r["default"].createElement(J["default"],{showImage:"true",id:"flip-effect"}),r["default"].createElement(Q["default"],null),r["default"].createElement(W["default"],null),r["default"].createElement(Y["default"],{id:"customized-pagination"}),r["default"].createElement($["default"],{id:"fraction-pagination"}),r["default"].createElement(ne["default"],null),r["default"].createElement(ae["default"],null)))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i);n["default"]=function(){return r["default"].createElement("nav",{className:"navbar navbar-default app-header"},r["default"].createElement("div",{className:"container-fluid"},r["default"].createElement("div",{className:"navbar-header"},r["default"].createElement("h2",{className:"navbar-brand"},"React Idangerous Swiper"))))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i);n["default"]=function(){return r["default"].createElement("a",{href:"https://github.com/kidjp85/react-id-swiper"},r["default"].createElement("img",{className:"github-fork",src:"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n="var React = require('react');\nvar Swiper = require('react-id-swiper');\n\nvar Example = React.createClass({\n  render: function() {\n    return (\n      <Swiper>\n        <div>Slide 1</div>\n        <div>Slide 2</div>\n        <div>Slide 3</div>\n        <div>Slide 4</div>\n        <div>Slide 5</div>\n      </Swiper>\n    );\n  }\n});\n\nmodule.exports = Example;",t="import React from 'react';\nimport Swiper from 'react-id-swiper';\n\nclass Example extends React.Component {\n  render() {\n    <Swiper>\n      <div>Slide 1</div>\n      <div>Slide 2</div>\n      <div>Slide 3</div>\n      <div>Slide 4</div>\n      <div>Slide 5</div>\n    </Swiper>\n  }\n}\n\nexport default Example;";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Default Setup"}),r["default"].createElement(o["default"],{es5:n,es6:t}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(159),u=a(l),s=t(162),o=a(s);n["default"]=function(e){var n=function(n){return e.showImage?"":n.title},a=function(n){return e.showImage?{backgroundImage:"url("+t(163)("./img_"+n.id+".jpg")+")"}:{}};return r["default"].createElement("div",{className:"row",id:e.id},r["default"].createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 slide-content"},r["default"].createElement("h2",null,e.title),r["default"].createElement(u["default"],e.params,o["default"].map(function(e){return r["default"].createElement("div",{className:"demo-slide",key:e.id,style:a(e)},n(e))}))))}},,,,function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});for(var t=[],a=1;10>=a;a++)t.push({id:a,title:"Slide #"+a});n["default"]=t},function(e,n,t){function a(e){return t(i(e))}function i(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./img_1.jpg":164,"./img_10.jpg":165,"./img_2.jpg":166,"./img_3.jpg":167,"./img_4.jpg":168,"./img_5.jpg":169,"./img_6.jpg":170,"./img_7.jpg":171,"./img_8.jpg":172,"./img_9.jpg":173};a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=163},function(e,n,t){e.exports=t.p+"images/img_1.jpg"},function(e,n,t){e.exports=t.p+"images/img_10.jpg"},function(e,n,t){e.exports=t.p+"images/img_2.jpg"},function(e,n,t){e.exports=t.p+"images/img_3.jpg"},function(e,n,t){e.exports=t.p+"images/img_4.jpg"},function(e,n,t){e.exports=t.p+"images/img_5.jpg"},function(e,n,t){e.exports=t.p+"images/img_6.jpg"},function(e,n,t){e.exports=t.p+"images/img_7.jpg"},function(e,n,t){e.exports=t.p+"images/img_8.jpg"},function(e,n,t){e.exports=t.p+"images/img_9.jpg"},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(175),u=a(l),s=t(176);n["default"]=function(e){return r["default"].createElement(s.Tabs,null,r["default"].createElement(s.TabList,null,r["default"].createElement(s.Tab,null,"ES5"),r["default"].createElement(s.Tab,null,"ES6")),r["default"].createElement(s.TabPanel,null,r["default"].createElement(u["default"],null,e.es5)),r["default"].createElement(s.TabPanel,null,r["default"].createElement(u["default"],null,e.es6)))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i);n["default"]=function(e){return r["default"].createElement("div",{className:"highlight"},r["default"].createElement("pre",null,r["default"].createElement("code",{className:"language-javascript","data-lang":"javascript"},e.children)))}},,,,,,,,,,,function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Responsive / Fullscreen + Pagination",params:n}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,direction:"vertical"},t="var React = require('react');\nvar Swiper = require('react-id-swiper');\n\nvar Example = React.createClass({\n  render: function() {\n    var params = {\n      pagination: '.swiper-pagination',\n      paginationClickable: true,\n      direction: \"vertical\"\n    };\n\n    return (\n      <Swiper \n        pagination={params.pagination}\n        paginationClickable={params.paginationClickable}\n        direction={params.direction}>\n        <div>Slide 1</div>\n        <div>Slide 2</div>\n        <div>Slide 3</div>\n        <div>Slide 4</div>\n        <div>Slide 5</div>\n      </Swiper>\n    );\n  }\n});\n\nmodule.exports = Example;",a="import React from 'react';\nimport Swiper from 'react-id-swiper';\n\nclass Example extends React.Component {\n  render() {\n    const params = {\n      pagination: '.swiper-pagination',\n      paginationClickable: true,\n      direction: \"vertical\"\n    }\n    <Swiper {...params}>\n      <div>Slide 1</div>\n      <div>Slide 2</div>\n      <div>Slide 3</div>\n      <div>Slide 4</div>\n      <div>Slide 5</div>\n    </Swiper>\n  }\n}\n\nexport default Example;";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Vertical Slides + Responsive / Fullscreen",params:n}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Space Between Slides",params:n}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:3,paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Slides Per View / Carousel Mode",params:n}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:"auto",paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 'auto',\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 'auto',\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Auto Slides Per View / Carousel Mode",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:4,centeredSlides:!0,paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 4,\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 4,\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Centered Slides",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 'auto',\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 'auto',\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Centered Slides + Auto Slides Per View",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:3,paginationClickable:!0,spaceBetween:30,freeMode:!0},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  paginationClickable: true,\n  spaceBetween: 30,\n  freeMode: true\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  paginationClickable: true,\n  spaceBetween: 30,\n  freeMode: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Free Mode / No Fixed Positions",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:3,slidesPerColumn:2,paginationClickable:!0,spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  slidesPerColumn: 2,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 3,\n  slidesPerColumn: 2,\n  paginationClickable: true,\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Multi Row Slides Layout",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",slidesPerView:4,centeredSlides:!0,paginationClickable:!0,spaceBetween:30,grabCursor:!0},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 4,\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30,\n  grabCursor: true\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  slidesPerView: 4,\n  centeredSlides: true,\n  paginationClickable: true,\n  spaceBetween: 30,\n  grabCursor: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Grab Cusor",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={scrollbar:".swiper-scrollbar",scrollbarHide:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,grabCursor:!0},t="...\nvar params = {\n  scrollbar: '.swiper-scrollbar',\n  scrollbarHide: true,\n  slidesPerView: 'auto',\n  centeredSlides: true,\n  spaceBetween: 30,\n  grabCursor: true\n};\n...",a="...\nconst params = {\n  scrollbar: '.swiper-scrollbar',\n  scrollbarHide: true,\n  slidesPerView: 'auto',\n  centeredSlides: true,\n  spaceBetween: 30,\n  grabCursor: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Scrollbar",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:30},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  spaceBetween: 30\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  spaceBetween: 30\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Navigation Buttons",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,paginationClickable:!0,spaceBetween:30,loop:!0},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  slidesPerView: 1,\n  paginationClickable: true,\n  spaceBetween: 30,\n  loop: true\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  slidesPerView: 1,\n  paginationClickable: true,\n  spaceBetween: 30,\n  loop: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Loop Mode / Infinite Loop",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",effect:"fade"},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  effect: 'fade'\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  effect: 'fade'\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Fade Effect",params:n,id:e.id,showImage:e.showImage}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",effect:"cube",grabCursor:!0,cube:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  effect: 'cube',\n  grabCursor: true,\n  cube: {\n    shadow: true,\n    slideShadows: true,\n    shadowOffset: 20,\n    shadowScale: 0.94\n  }\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  effect: 'cube',\n  grabCursor: true,\n  cube: {\n    shadow: true,\n    slideShadows: true,\n    shadowOffset: 20,\n    shadowScale: 0.94\n  }\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"3D Cube Effect",params:n,id:e.id,showImage:e.showImage}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  effect: 'coverflow',\n  grabCursor: true,\n  centeredSlides: true,\n  slidesPerView: 'auto',\n  coverflow: {\n    rotate: 50,\n    stretch: 0,\n    depth: 100,\n    modifier: 1,\n    slideShadows : true\n  }\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  effect: 'coverflow',\n  grabCursor: true,\n  centeredSlides: true,\n  slidesPerView: 'auto',\n  coverflow: {\n    rotate: 50,\n    stretch: 0,\n    depth: 100,\n    modifier: 1,\n    slideShadows : true\n  }\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"3D Coverflow Effect",params:n,id:e.id,showImage:e.showImage}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",effect:"flip",grabCursor:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  effect: 'flip',\n  grabCursor: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev'\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  effect: 'flip',\n  grabCursor: true,\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev'\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"3D Flip Effect",params:n,id:e.id,showImage:e.showImage}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",direction:"vertical",slidesPerView:1,paginationClickable:!0,spaceBetween:30,mousewheelControl:!0},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  direction: 'vertical',\n  slidesPerView: 1,\n  paginationClickable: true,\n  spaceBetween: 30,\n  mousewheelControl: true\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  direction: 'vertical',\n  slidesPerView: 1,\n  paginationClickable: true,\n  spaceBetween: 30,\n  mousewheelControl: true\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Mousewheel Control",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",paginationClickable:!0,spaceBetween:30,centeredSlides:!0,autoplay:2500,autoplayDisableOnInteraction:!1},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  paginationClickable: true,\n  spaceBetween: 30,\n  centeredSlides: true,\n  autoplay: 2500,\n  autoplayDisableOnInteraction: false\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  paginationClickable: true,\n  spaceBetween: 30,\n  centeredSlides: true,\n  autoplay: 2500,\n  autoplayDisableOnInteraction: false\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Autoplay",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,paginationBulletRender:function(e,n){return'<span class="'+n+'">'+(e+1)+"</span>"}},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  paginationBulletRender: function (index, className) {\n    return '<span class=\"' + className + '\">' + (index + 1) + '</span>';\n  }\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  paginationBulletRender: (index, className) => {\n    return '<span class=\"' + className + '\">' + (index + 1) + '</span>';\n  }\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Customized Pagination",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationType:"fraction"},t="...\nvar params = {\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  pagination: '.swiper-pagination',\n  paginationType: 'fraction'\n};\n...",a="...\nconst params = {\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  pagination: '.swiper-pagination',\n  paginationType: 'fraction'\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Fraction Pagination",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationType:"progress"},t="...\nvar params = {\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  pagination: '.swiper-pagination',\n  paginationType: 'progress'\n};\n...",a="...\nconst params = {\n  nextButton: '.swiper-button-next',\n  prevButton: '.swiper-button-prev',\n  pagination: '.swiper-pagination',\n  paginationType: 'progress'\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Progress Pagination",params:n,id:e.id}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i),l=t(158),u=a(l),s=t(174),o=a(s);n["default"]=function(e){var n={pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:5,spaceBetween:50,breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},t="...\nvar params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  slidesPerView: 5,\n  spaceBetween: 50,\n  breakpoints: {\n    1024: {\n      slidesPerView: 4,\n      spaceBetween: 40\n    },\n    768: {\n      slidesPerView: 3,\n      spaceBetween: 30\n    },\n    640: {\n      slidesPerView: 2,\n      spaceBetween: 20\n    },\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 10\n    }\n  }\n};\n...",a="...\nconst params = {\n  pagination: '.swiper-pagination',\n  paginationClickable: true,\n  slidesPerView: 5,\n  spaceBetween: 50,\n  breakpoints: {\n    1024: {\n      slidesPerView: 4,\n      spaceBetween: 40\n    },\n    768: {\n      slidesPerView: 3,\n      spaceBetween: 30\n    },\n    640: {\n      slidesPerView: 2,\n      spaceBetween: 20\n    },\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 10\n    }\n  }\n};\n...";return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement(u["default"],{title:"Responsive Breakpoints",params:n}),r["default"].createElement(o["default"],{es5:t,es6:a}))}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),r=a(i);n["default"]=function(){return r["default"].createElement("div",{className:"demo-box"},r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 btn-group"},r["default"].createElement("a",{className:"button",href:"https://github.com/kidjp85/react-id-swiper/zipball/master"},r["default"].createElement("small",null,"Download"),".zip file",r["default"].createElement("i",{className:"icono-paperClip"}))),r["default"].createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 btn-group"},r["default"].createElement("a",{className:"button",href:"https://github.com/kidjp85/react-id-swiper/tarball/master"},r["default"].createElement("small",null,"Download"),".taz.gz file",r["default"].createElement("i",{className:"icono-paperClip"})))))}}]);