[부스트코스] edwith 웹 프로그래밍
===

1. [JDK 다운 및 설치](https://www.edwith.org/boostcourse-web/lecture/16680/)
2. [환경설정](https://www.edwith.org/boostcourse-web/lecture/16681/)
3. [확인](https://www.edwith.org/boostcourse-web/lecture/16681/)
    ```
    java -version
    javac -version
    ```
4. [이클립스 설치 및 환경설정](https://www.edwith.org/boostcourse-web/lecture/16682/)
    - 통합 개발환경 IDE
5. [Tomcat 설치](https://www.edwith.org/boostcourse-web/lecture/16684/)
    - 가장 많이 사용되는 WAS

## Example

- example1 : 부스트코스의 [나를소개하는 홈페이지 만들기](https://www.edwith.org/boostcourse-web/joinLectures/12944) 프로젝트 수행


서블릿?
---
- 자바 웹 어플리케이션의 구성요소 중 동적인 처리를 하는 프로그램의 역할입니다.

- 서블릿을 정의해보면 서블릿(servlet)은 WAS에 동작하는 JAVA 클래스입니다. 

- 서블릿은 HttpServlet 클래스를 상속받아야 합니다.

- 서블릿과 JSP로부터 최상의 결과를 얻으려면, 웹 페이지를 개발할 때 이 두 가지(JSP, 서블릿)를 조화롭게 사용해야 합니다.

- 예를 들어, 웹 페이지를 구성하는 화면(HTML)은 JSP로 표현하고, 복잡한 프로그래밍은 서블릿으로 구현합니다.

    ```
    버전에 따라 작성 방법이 다름
    3.0 spec 이상과 미만으로 나뉨
    3.0 미만에서는 web.xml 파일에 등록
    ```

Srvlet 라이프 사이클
---

**HttpServlet의 3가지 메소드를 오버라이딩**

1. WAS는 서블릿 요청을 받으면 해당 서블릿이 메모리에 있는지 확인
2. 만약 메모리에 없다면 해당 서블릿 클래스를 메모리에 올리는 작업
3. 이 과정에서 `Servlet` 객체 생성
4. `init()` 메서드 호출
5. `service()` 메서드 호출
6. 이 다음부터 웹 리로드시 `service()` 메서드만 실행
7. 응답해야하는 모든 내용은 `service()` 에 구현
8. 웹 애플리케이션이 갱신되거나 WAS가 종료될때  `destroy()` 메서드 호출



요청과 응답
---

WAS 는 웹 브라우저로부터 Servlet 요청을 받으면
- 요청할때 가지고 있는 정보를 HttpServletRequest 객체를 생성하여 저장
- 웹 브라우저에게 응답을 보낼때 사용하기 위하여 HttpServletResponse 객체를 생성
- 생성된 HttpServletRequest, HttpServletResponse 객체를 서블릿에게 전달


**HttpServletRequest**

- http 프로토콜의 request 정보를 서블릿에게 전달하기 위한 목적으로 사용
- 헤더정보, 파라미터, 쿠키, URI, URL, 등의 정보를 읽어들이는 메소드를 가짐
- Body의  Stream을 읽어 들이는 메소드를 가지고 있다.

**HttpServletResponse**

- WAS는 어떤 클라이언트가 요청을 보냈는지 알고있고, 해당 클라이언트에게 응답을 보내기 위한 HttpServletResponse 객체를 생성하여 서블릿에게 전달
- 서블릿은 해당객체를 이용하여 content type, 응답코드, 응답메세지 등을 전송


