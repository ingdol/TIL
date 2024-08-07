# 비지터 Visitor

[비지터 패턴](https://refactoring.guru/ko/design-patterns/visitor)

## 의도

- 비지터(방문자) 패턴 : 알고리즘들을 그들이 작동하는 객체들로부터 분리할 수 있도록 하는 행동 디자인 패턴

![Untitled](%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A5%20Visitor%20e8c8887b061247929d0765431a56f9f8/Untitled.png)

## 문제

- 하나의 거대한 그래프로 구성된 지리 정보를 사용해 작동하는 앱을 개발하고 있다고 가정
    - 그래프의 각 노드는 도시와 같은 복잡한 객체를 나타낼 수 있지만
    - 산업들, 관광 지역들 등의 더 세부적인 항목들도 나타낼 수 있음
    - 만약 노드들이 나타내는 실제 객체들 사이에 도로가 있으면 노드들은 서로 연결됨
    - 각 노드 유형은 자체 클래스이지만 각 노드는 객치임

![그래프를 XML 형식으로 내보냄](%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A5%20Visitor%20e8c8887b061247929d0765431a56f9f8/Untitled%201.png)

그래프를 XML 형식으로 내보냄

- 그래프를 XML 형식으로 내보내는 작업을 구현한다면
    - 각 노드 클래스에 내보내기 메서드를 추가한 다음 재귀를 활용하여 그래프의 각 노드에 작업하며 내보내기 메서드를 실행해야 함
    - 다형성 덕분에 내보내기 메서드를 호출하는 코드를 노드들의 구상 클래스들에 결합하지 않음
- 시스템 설계자는 기존 노드 클래스들을 변경하는 것을 허용하지 않음
    - 코드가 손상되는 위험을 감수하고 싶지 않기 때문

![XML 내보내기 메서드는 모든 노드 클래스에 추가되어야 했으며, 이러한 변경과 버그가 발생하면 전체 앱이 망가질 위험이 있음](%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A5%20Visitor%20e8c8887b061247929d0765431a56f9f8/Untitled%202.png)

XML 내보내기 메서드는 모든 노드 클래스에 추가되어야 했으며, 이러한 변경과 버그가 발생하면 전체 앱이 망가질 위험이 있음

- 시스템 설계자는 노드 클래스들 내에 XML 내보내기 코드를 넣는 것이 적절한지 의문
    - 이 클래스들의 주 작업은 지리 데이터를 처리하는 것이므로, XML 내보내기 동작은 이상하게 보인다 생각
- 또한 위 기능이 구현된 후에도 마케팅 부서의 누군가가 데이터를 다른 형식으로 내보낼 수 있는 기능 또는 다른 기능을 요청할 가능성이 있음
    - 망가지기 쉬운 클래스들을 다시 한번 변경해야 한다는 문제점 발생

## 해결책

- 비지터 패턴은 우리가 새로운 행동을 기존 클래스들에 통합하는 대신 visitor(방문자)라는 별도의 클래스에 배치할 것을 제안함
    - 이제 행동을 수행해야 했던 원래 객체는 visitor의 메서드 중 하나에 인수로 전달됨
    - 그러면 메서드는 원래 객체 내에 포함된 모든 필요한 데이터에 접근할 수 있음
- 비지터 클래스는 단일 메서드를 정의하는 대신 메서드의 집합을 정의하여 각 메서드가 다른 유형의 인수를 받을 수 있도록 함
    
    ```java
    class ExportVisitor implements Visitor is
        method doForCity(City c) { ... }
        method doForIndustry(Industry f) { ... }
        method doForSightSeeing(SightSeeing ss) { ... }
        // …
    ```
    

- 이런 메서드들을 호출하는 방법
    - 이 메서드들은 시그니처들이 다르므로 다형성을 사용할 수 없음
    - 주어진 객체를 처리할 수 있는 적절한 비지터 메서드를 선택하려면 먼저 그 클래스를 확인
    
    ⇒ 매우 복잡
    
    ```java
    foreach (Node node in graph)
        if (node instanceof City)
            exportVisitor.doForCity((City) node)
        if (node instanceof Industry)
            exportVisitor.doForIndustry((Industry) node)
        // …
    }
    ```
    

- 비지터 패턴에서는 이 문제를 더블 디스패치라는 방법을 사용하여 해결
    - 이 방법은 번거로운 조건문 없이 객체에 적절한 메서드를 실행하는 것을 도움
    - 클라이언트가 호출할 메서드의 적절한 버전을 선택하도록 하는 대신
    - 이 선택권을 비지터에게 인수로 전달되는 객체에게 위임함
    - 이러한 객체들은 자신의 클래스들을 알고 있으므로 비지터에 대한 적합한 메서드를 더 쉽게 선택할 수 있음
    - 그들은 비지터를 ‘수락’하고 어떤 비지터 메서드가 실행되어야 하는지 알려줌
        
        ```java
        // Client code
        foreach (Node node in graph)
            node.accept(exportVisitor)
        
        // City
        class City is
            method accept(Visitor v) is
                v.doForCity(this)
            // …
        
        // Industry
        class Industry is
            method accept(Visitor v) is
                v.doForIndustry(this)
            // …
        ```
        

- 이제 모든 비지터에 대한 공통 인터페이스를 추출하면 기존의 모든 노드가 우리의 앱에 도입하는 모든 비지터와 함꼐 작동할 수 있음
    - 노드와 관련된 새로운 행동을 도입하려면 새 비지터 클래스를 구현하기만 하면 됨

## 실제상황 적용

![좋은 보험 대리인은 항상 다양한 유형의 조직들에 적절한 보험을 판매할 준비가 되어 있음](%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A5%20Visitor%20e8c8887b061247929d0765431a56f9f8/Untitled%203.png)

좋은 보험 대리인은 항상 다양한 유형의 조직들에 적절한 보험을 판매할 준비가 되어 있음

- 방문한 건물에 있는 회사 또는 조직의 유형에 따라 맞춤형 전문 보험 정책들을 제공할 수 있음
    - 주거용 건물을 방문할 때는 의료 보험 판매
    - 은행 방문 → 도난 보험 판매
    - 커피숍 방문 → 화재 및 홍수 보험 판매

## 구조

![Untitled](%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A5%20Visitor%20e8c8887b061247929d0765431a56f9f8/Untitled%204.png)

1. 비지터
    - 객체 구조의 구상 요소들을 인수들로 사용할 수 있는 비지터 메서드들의 집합을 선언함
    - 이러한 메서드들은 ( 앱이 오버로딩을 지원하는 언어로 작성된 경우) 같은 이름을 가질 수 있지만 그들의 매개변수들의 유형은 달라야 함
2. 각 구상 비지터
    - 다양한 구상 요소 클래스들에 맞춤으로 작성된 같은 행동들의 여러 버전을 구현
3. 요소 
    - 비지터를 ‘수락’하는 메서드를 선언
    - 이 메서드에는 비지터 인터페이스 유형으로 선언된 하나의 매개변수가 있어야 함
4. 각 구상 요소
    - 반드시 수락 메서드를 구현해야 함
    - 이 메서드의 목적은 호출을 현재 요소 클래스에 해당하는 적절한 비지터 메서드로 리다이렉트하는 것
    - 기초 요소 클래스가 이 메서드를 구현하더라도 모든 자식 클래스들은 여전히 자신들의 클래스 내에서 이 메서드를 오버라이드해야 하며 비지터 객체에 적절한 메서드를 호출해야 함
5. 클라이언트
    - 일반적으로 컬렉션 또는 기타 복잡한 객체(예 : 복합체 트리)를 나타냄
    - 클라이언트들은 해당 컬렉션의 객체들과 어떠한 추상 인터페이스를 통해 작업하기 때문에 모든 구상 요소 클래스들을 인식하지 못함