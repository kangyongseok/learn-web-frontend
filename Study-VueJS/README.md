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
<<<<<<< HEAD


## Vue Life Cycle

1. **Creation 컴포넌트 초기화 단계**
    - 라이프사이클중 가장 처음 실행
    - 컴포넌트가 돔에 추가되기전
    - 서버렌더링에서도 지원되는 훅
    - 클라이언트와 서버단 렌더링 모두에서 처리할 일은 이 단계에서
    - `beforeCreate` 훅과 `Created` 훅이 있다.

        **beforeCreate**
        - 모든 훅 중에서 가장 먼저 실행되는 훅
        - 아직 data 와 event가 세팅되기 전이다.

        **created**
        - data 와 event가 활성화 되어 접근 가능
        - 여전히 템플릿와 가상돔은 마운트 및 렌더링 되지 않은 상태


2. **Mounting : 돔 삽입 단계**
    - 초기렌더링 직전에 컴포넌트에 직접 접근 
    - 서버렌더링에서는 지원 X
    - 초기랜더링 직전에 돔을 변경하고자 한다면 이 단계를 활용
    - 컴포넌트초기에 세팅되어야할 데이터페치는 created 단계를 사용

        **beforeMount**
        - 템플릿와 렌더함수들이 컴파일 된 후에 첫 렌더링이 일어나기 직전에 실행
        - 대부분의 경우에 사용하지 않는것이 좋다.

        **mounted**
        - 컴포넌트, 템플릿, 렌더링 된 돔에 접근 할 수 있다.
        - 모든 하위컴포넌트가 마운트된 상태를 보장하지는 않는다.
        - vm.$nextTick 을 사용하면 전체가 렌더링되고 난 후의 상태를 보장 할 수 있다.
        ```javascript
        mounted() {
            console.log(this.$el.textContent) // can use $el
            this.$nextTick(function () {
                // 모든 화면이 렌더링된 후 실행합니다.
            })
        }
        ```
        - 주의할점은 부모와 자식관계의 컴포넌트에서 생각한 순서대로 mounted가 발생하지는 않는다. 부모는 자식의 mounted 훅이 끝나기를 기다린다.

3. **Updating: Diff 및 재 렌더링 단계**
    - 컴포넌트에서 사용되는 동적인 속성들이 변경되거나 재 랜더링이 발생되면 실행
    - 주로 디버깅이나 프로파일링 등을 위해 컴포넌트 재 랜더링 시점을 알고 싶을때 사용

        **beforeUpdate**
        - 컴포넌트의 데이터가 변하여 업데이트 사이클이 시작될때 실행
        - 재 랜더링 전의 새상태의 데이터를 얻을 수 있고 더 많은 변경이 가능

        **updated**
        - 컴포넌트의 데이터가 변하여 재 랜더링이 일어난 후에 실행
        - 돔이 업데이트 완료된 상태이므로 돔 종속적인 연산 가능

4. **Destruction 해체단계**
    **destroyed**
    - 뷰 인스턴스가 제거된 후에 호출
    - Vue 인스턴스의 모든 디렉티브가 바인딩 해제되고 모든 이벤트 리스너가 제거되면 모든 하위 Vue 인스턴스도 삭제된다.

=======
>>>>>>> c7be8fa3d0be792fbbe59cd4954bae8d43827441
