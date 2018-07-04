(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{230:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"단축-평가-값-short-circuit-evaluation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단축-평가-값-short-circuit-evaluation","aria-hidden":"true"}},[t._v("#")]),t._v(" 단축 평가 값 (Short-circuit Evaluation)")]),s("blockquote",[s("p",[t._v("논리 연산자들은 왼쪽->오른쪽 순으로 실행됨.\n이 연산자들은 결과를 얻게 되는 순간 단축 평가(즉, 평가의 중단)를 시행.\nfalse && 표현식 -> 이미 false발견\ntrue || 표현식 -> 이미 true\n그러나 그 결과값은 (반드시 true 또는 false가 아니라) 평가를 중단하게 된 계기가 된 값을 리턴한다.")])]),s("h2",{attrs:{id:"예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제","aria-hidden":"true"}},[t._v("#")]),t._v(" 예제")]),s("h3",{attrs:{id:"ex-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-1","aria-hidden":"true"}},[t._v("#")]),t._v(" ex.1")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"바보"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"천재"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//"바보"')]),t._v("\n")])])]),s("p",[t._v("내용을 가진 문자열은 true니까 you에 me값이 대입된다.")]),s("h3",{attrs:{id:"ex-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-2","aria-hidden":"true"}},[t._v("#")]),t._v(" ex.2")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"천재"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//"천재"')]),t._v("\n")])])]),s("h3",{attrs:{id:"ex-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-3","aria-hidden":"true"}},[t._v("#")]),t._v(" ex.3")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//"천재"')]),t._v("\n")])])]),s("p",[t._v("me가 값을 가지고 있지 않은 경우엔 빈 객체 생성")]),s("h3",{attrs:{id:"ex-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-4","aria-hidden":"true"}},[t._v("#")]),t._v(" ex.4")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("vA "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvB "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvC "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vA"),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("vB"),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("vC"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//do something")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("세 값 중 어느 하나라도 true로 취급될 수 있으면 if내의 코드가 실행.")]),s("li",[t._v("경험 많은 개발자들은 그래서 비용이 높은 코드는 가능한 한 나중에 평가되도록 작성한다.")]),s("li",[t._v("OR연산자를 사용할 땐 true를 리턴할 가능성이 높은 코드를 첫 번째 조건으로 작성하고,")]),s("li",[t._v("AND연산자에선 false를 첫번째로.")])]),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고")]),s("p",[t._v("인터랙티브 프론트엔드 웹 개발 교과서 자바스크립트&제이쿼리 (제이펍) p.169")])])}],!1,null,null,null);a.default=r.exports}}]);