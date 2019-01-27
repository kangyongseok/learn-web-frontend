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


JSP
---

**.jsp 가 실행될때 벌어지는 일**
JSP 는 그 자체로 실행되는것이 아닌 JAVA 와 CLASS 파일로 변환된 후에 실행되게 된다. 서블릿소스로 컴파일이 진행된다.

**JSP 기본형태**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Insert title here</title>
        </head>
    <body>
        

    </body>
    </html>
```

**jsp 의 life cycle**

기본적으로 jsp 에서 `<% %>` 안에 입력되는 것들은 `service` 에 자동으로 포함되어진다. 매번 갱신되고 호출되는건 `service()` 메서드 밖에 없기 때문이다.

만약 `init()` 이나 `desctroy()` 메서드에 포함시키고 싶다면
`<%! 선언식 %>` 를 사용해서 내부에 해당하는 소스를 입력하면 된다.

**스크립트 요소의 이해**

- 선언문 : `<%! %>` 전역변수 선언 및 메소드 선언에 사용
- 스크립트릿 : `<% %>` 프로그래밍 코드 기술에 사용
- 표현식 : `<%=%>` 화면에 출력할 내용 기술에 사용

**JSP 내장객체**

![내장객체](https://cphinf.pstatic.net/mooc/20180130_74/1517275973733EL11k_PNG/2_3_4_jsp_.PNG)



**redirect VS forward**
- redirect : 요청이 여러번 왔다 갔다함 그래서 req, res 객체가 두번 생성되고 새롭게 요청하는것이기 때문에 url 주소가 요청한주소가 아니라 redirect 한 주소로 변경된다.

- forward : 일부 작업은 요청받은 servlet 이 처리하고 나머지 작업은 다른 servlet 에 요청하여 맡기는 작업이기때문에 req, res 객체는 한번만 생성된다. 서버가 내부적으로 옮겨줬을 뿐이지 새로운 요청이 들어온것은 아니다.

**servlet VS JSP**

서블릿은 프로그램 로직을 짜기엔 편하지만 화면에 출력이 불편하고  
JSP 는 화면에 출력은쉽지만 프로그램 로직을 짜기엔 불편

## servlet and JSP 연동

**LogicServlet.java**

```java
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    int v1 = (int)(Math.random() * 100) + 1;
    int v2 = (int)(Math.random() * 100) + 1;
    int result = v1 + v2;
    
    request.setAttribute("v1", v1);
    request.setAttribute("v2", v2);
    request.setAttribute("result", result);
    
    RequestDispatcher rd = request.getRequestDispatcher("/jsp/result.jsp");
    rd.forward(request, response);
}
```

`servlet` 에서 로직을 생성하고   
`request.setAttribute` 에 이름과 함께 값을 저장  
`RequestDispatcher rd = request.getRequestDispatcher("/jsp/result.jsp");` 로 해당 jsp 로 저장한 값을 보낼준비를하고  
`rd.forward(request, response);` 요청객체와 응답객체를 같이 전달해 준다.

**result.jsp**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	int v1 = (int)request.getAttribute("v1");
	int v2 = (int)request.getAttribute("v2");
	int result = (int)request.getAttribute("result");
%>
<%= v1 %> + <%= v2 %> = <%= result %>
</body>
</html>
```
