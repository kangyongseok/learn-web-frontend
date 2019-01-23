# Vue-cli v.3x 사용하기

## 환경세팅
```javascript
$ npm r- g vue-cli // 기존에 설치된 vue-cli 버전 삭제
$ npm i -g @vue/cli // 3.x 버전설치
$ vue --version // 버전확인
$ vue add router // router 모듈 추가
$ vue add vuex // 상태관리패턴 라이브러리 추가
$ npm install -D less-loader less // less 문법 사용
$ npm install --save axios // HTTP 클라이언트 라이브러리 설치
$ npm install --save es6-promise // IE 에서 axios 를 사용하기위한 polyfill
$ npm i bootstrap jquery popper.js // 부트스트랩과 제이쿼리사용
```

**main.js**

```javascript
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.prototype.$http = axios // axios 전역으로 사용
```

**webpack.config.js**  
[es6-promise 문서](https://github.com/stefanpenner/es6-promise)   
[axios polyfill 관련 문서](http://vuejs.kr/update/2017/01/04/http-request-with-axios/)
```javascript
require('es6-promise').polyfill();
```

**style**

```html
<style lang="less" scope>

</style>
```