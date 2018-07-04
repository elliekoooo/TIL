(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{221:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"meteor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meteor","aria-hidden":"true"}},[t._v("#")]),t._v(" Meteor")]),s("p",[t._v("http://kr.discovermeteor.com/chapters/getting-started/")]),s("h2",{attrs:{id:"설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치","aria-hidden":"true"}},[t._v("#")]),t._v(" 설치")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl https://install.meteor.com | sh\n\nmeteor create microscope # 앱 만들기\ncd microscope\nmeteor --port 8090 # 실행\n\nmeteor add mizzao:bootstrap-3 # 패키지 추가\nmeteor add underscore\n")])])]),s("h2",{attrs:{id:"패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패키지","aria-hidden":"true"}},[t._v("#")]),t._v(" 패키지")]),s("ul",[s("li",[t._v("미티어 코어는 여러 개의 코어 패키지들로 나누어짐. 미티어 앱에 포함.")]),s("li",[t._v("정규 미티어 패키지: isopacks. "),s("code",[t._v("accounts-ui")]),t._v(", "),s("code",[t._v("appcache")]),t._v("같은 퍼스트파티 패키지. 미티어에 포함.")]),s("li",[t._v("써드파티 패키지: 다른 사용자들이 개발한 isopack. 미티어 패키지 서버에 업로드되어 있음. meteor search 명령어로 찾아볼 수 있음.")]),s("li",[t._v("로컬 패키지: 직접 작성한 패키지. "),s("code",[t._v("/packages")]),t._v("디렉터리에 넣는다.")]),s("li",[t._v("npm 패키지: node.js패키지.")])]),s("h2",{attrs:{id:"파일구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파일구조","aria-hidden":"true"}},[t._v("#")]),t._v(" 파일구조")]),s("ul",[s("li",[t._v("/server: 서버에서만 실행되는 코드")]),s("li",[t._v("/client: 클라에서만 실행되는 코드")]),s("li",[t._v("그 밖의 모든 것은 클라, 서버 양쪽 모두에서 실행")]),s("li",[t._v("/public: 정적 자원 넣기(fonts, images...)")])]),s("p",[t._v("파일을 로드하는 순서")]),s("ul",[s("li",[s("p",[t._v("/lib디렉토리에 있는 파일들은 제일 먼저 로드")])]),s("li",[s("p",[s("code",[t._v("main.*")]),t._v("이름 파일들은 그 밖의 다른 모든 파일들보다 나중에 로드.")])]),s("li",[s("p",[t._v("그 밖의 모든 파일들은 파일명의 알파벳 순으로 로드")])]),s("li",[s("p",[t._v("미티어는 파일을 잘 찾는다. "),s("code",[t._v("/client")]),t._v("디렉토리 어디 넣든지 미티어는 이를 찾아 컴파일한다.")])]),s("li",[s("p",[t._v("이는 js나 css파일 경로를 직접 입력할 필요가 없다는 것을 의미.")])])]),s("h2",{attrs:{id:"spacebars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spacebars","aria-hidden":"true"}},[t._v("#")]),t._v(" spacebars")]),s("ul",[s("li",[t._v("Inclusions: 미티어에게 해당 위치에 동일 이름의 템플릿으로 대치하라는 의미.")]),s("li",[t._v("Expressions: 현재 객체의 속성값, 현재 템플릿 매니저에 정의된 템플릿 헬퍼의 리턴 값.")]),s("li",[t._v("Block helpers: 템플릿의 흐름을 제어하는 특별한 태그.")])]),s("h2",{attrs:{id:"collections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collections","aria-hidden":"true"}},[t._v("#")]),t._v(" collections")]),s("ul",[s("li",[t._v("데이터 저장\n"),s("ul",[s("li",[t._v("브라우저 메모리: js변수 같은 것들은 브라우저 메모리에 저장된다. 현재 브라우저 탭에 한정.")]),s("li",[t._v("브라우저 저장소(storage): 쿠키, 로컬 스토리지. 세션 한계를 넘어 저장.")]),s("li",[t._v("서버 데이터베이스: 영구적으로 데이터 저장.")])])])]),s("h3",{attrs:{id:"서버에서의-컬렉션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#서버에서의-컬렉션","aria-hidden":"true"}},[t._v("#")]),t._v(" 서버에서의 컬렉션")]),s("p",[t._v("Mongo 데이터베이스로의 API로 가능")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('meteor mongo\n> db.posts.insert({title: "A new post"});\n> db.posts.find();\n# { "_id": ObjectId(".."), "title" : "A new post"};\n')])])]),s("h3",{attrs:{id:"클라이언트에서-컬렉션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트에서-컬렉션","aria-hidden":"true"}},[t._v("#")]),t._v(" 클라이언트에서 컬렉션")]),s("p",[s("code",[t._v("Posts = new Mongo.Collection('posts');")]),t._v(": 실제 몽고 컬렉션의 로컬 인 브라우저 캐시를 생성하는 것.\n클라이언트 쪽 컬렉션을 '캐시'라고 말하는 것은, 데이터의 부분 집합을 가지며 데이터에 빠르게 접근할 수 있다는 것을 의미.")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('❯ Posts.findOne();\n# {title: "A new post", _id: LocalCollection._ObjectID};\n\n❯ Posts.find().count();\n# 1\n❯ Posts.insert({title: "A second post"});\n# \'xxx\'\n\n❯ Posts.find().count();\n# 2\n')])])]),s("p",[t._v("참고: "),s("code",[t._v("find()")]),t._v("는 커서를 리턴. 반응형 데이터 소스. 그 데이터 내용 얻으려 할 때, 현재 커서 위치에서 데이터를 배열로 변환하는 "),s("code",[t._v("fetch()")]),t._v("를 사용")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 몽고 쉘\n❯ db.posts.find();\n{title: "A new post", _id: ObjectId("..")};\n{title: "A second post", _id: \'yyy\'};\n')])])]),s("p",[t._v("클라에서 서버로 보내는 코드 작성 없이 post를 MongoDB로 삽입했다.\n"),s("code",[t._v("Posts = new Mongo.Collection('posts');")]),t._v(" 요 코드로!\n이는 다른 탭의 브라우저에서도 유지된다.")]),s("h3",{attrs:{id:"데이터베이스-활용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스-활용","aria-hidden":"true"}},[t._v("#")]),t._v(" 데이터베이스 활용")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("meteor reset # 몽고 데이터베이스를 완전히 비운다.\n")])])]),s("h2",{attrs:{id:"미티어-방식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#미티어-방식","aria-hidden":"true"}},[t._v("#")]),t._v(" 미티어 방식")]),s("ul",[s("li",[t._v("미티어 앱은 서버 뿐만 아니라 클라에서도 동작한다.")]),s("li",[t._v("데이터베이스는 "),s("em",[t._v("어디에서나")]),s("ul",[s("li",[t._v("db에 넣기만 하면 미티어가 부분집합을 가져와 클라에 복사해 둘 것이다.")]),s("li",[t._v("=> 1. HTML코드를 클라로 보내는 대신, 미티어 앱은 실제 생 데이터를 보내고 클라가 그것을 처리하게 한다.(데이터만 전송)")]),s("li",[t._v("=> 2. 서버에 갔다오는 시간 기다려야 하는 일 없이 즉시 데이터에 접속할 수 있다.")])])])]),s("h2",{attrs:{id:"발행-publishing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#발행-publishing","aria-hidden":"true"}},[t._v("#")]),t._v(" 발행(Publishing)")])])}],!1,null,null,null);e.default=r.exports}}]);