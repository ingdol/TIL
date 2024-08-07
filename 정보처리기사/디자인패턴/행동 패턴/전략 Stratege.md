# 전략 Stratege

[전략 패턴](https://refactoring.guru/ko/design-patterns/strategy)

## 의도

- 전략 패턴
    - 알고리즘들의 패밀리를 정의
    - 각 패밀리를 별도의 클래스에 넣은 후 그들의 객체들을 상호교환할 수 있도록 함

![Untitled](%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8%20Stratege%20b40a72a6b9bf44aeb1c532c727577124/Untitled.png)

## 문제

- 여행자들을 위한 네비 앱을 만든다고 가정
    - 기능 : 사용자들이 빠르게 방향을 잡을 수 있도록 함
    - 가장 많이 요청되는 기능 중 하나 : 자동 경로 계획 기능
        - 사용자가 주소를 입력하면 지도에 표시된 해당 목적지로 가는 가장 빠른 경로를 볼 수 있음
- 도로로 된 경로만 제공 → 대중교통 정보 제공 → 자전거 정보 제공 → 도시의 모든 관광 명소들을 지나는 경로
    - 점차 기능이 추가됨

![Untitled](%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8%20Stratege%20b40a72a6b9bf44aeb1c532c727577124/Untitled%201.png)

- 새 경로 구축 알고리즘을 추가할 때마다 내비게이터의 메인 클래스의 크기가 두배로 늘어남
    - 알고리즘 중 하나를 변경하려면 전체 클래스에 영향이 미쳐 이미 작동하는 코드에서 오류가 발생할 가능성이 높아짐

## 해결책

- 전략 패턴은 특정 작업을 다양한 방식으로 수행하는 클래스를 선택한 후 모든 알고리즘을 전략들(strategies)이라는 별도의 클래스들을 추출할 것을 제안함
- 콘텍스트(context)라는 원래 클래스에는 전략 중 하나에 대한 참조를 저장하기 위한 필드가 있어야 함
    - 콘텍스트는 작업을 자체적으로 실행하는 대신 연결된 전략 개체에 위임함
- 콘텍스트는 작업에 적합한 알고리즘을 선택할 책임이 없음
    - 대신 클라이언트가 원하는 전략을 콘텍스트에 전달함
    - 사실 콘텍스트는 전략들에 대해 많이 알지 못함
    - 콘텍스트는 같은 일반 인터페이스를 통해 모든 전략과 함께 작동
    - 이 일반 인터페이스는 선택된 전략 내에 캡슐화된 알고리즘을 작동시킬 단일 메서드만 노출함
- 이렇게 하면 콘텍스트가 구상 전략들에 의존하지 않게 되므로 콘텍스트 또는 다른 전략들의 코드를 변경하지 않고도 새 알고리즘을 추가하거나 기존 알고리즘들을 수정할 수 있음

![경로 계획 전략들](%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8%20Stratege%20b40a72a6b9bf44aeb1c532c727577124/Untitled%202.png)

경로 계획 전략들

- 네비 앱에서 각 경로 구축 알고리즘을 단일 `buildRoute` 메서드를 사용하여 자체 클래스로 추출할 수 있음
    - 이 메서드는 출발지와 목적지를 받은 후 경로의 체크포인트들의 컬렉션을 반환함
- 같은 인수가 주어졌더라도 각 경로 구축 클래스는 다른 경로를 구축할 수 있찌만 주 내비게이터 클래스는 어떤 알고리즘이 선택되었는지 별로 신경 쓰지 않음
    - 왜냐하면 주 내비게이터 클래스의 주요 작업은 지도에 체크포인트들의 집합을 렌더링하는 것이기 때문
    - 이 클래스에는 활성 경로 구축 전략을 전환하는 메서드가 있어, 클래스의 클라이언트들이(예 : UI 버튼들) 현재 선택된 경로 구축 행동들을 다른 행등으로 대체할 수 있음

## 실제상황 적용

![공항에 도착하기 위한 다양한 전략들](%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8%20Stratege%20b40a72a6b9bf44aeb1c532c727577124/Untitled%203.png)

공항에 도착하기 위한 다양한 전략들

## 구조

![Untitled](%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8%20Stratege%20b40a72a6b9bf44aeb1c532c727577124/Untitled%204.png)

1. 콘텍스트
    - 구상 전략 중 하나에 대한 참조를 유지하고 전략 인터페이스를 통해서만 이 객체와 통신함
2. 전략
    - 모든 구상 전략에 공통
    - 콘텍스트가 전략을 실행하는 데 사용하는 메서드를 선언함
3. 구상 전략들
    - 콘텍스트가 사용하는 알고리즘의 다양한 변형들을 구현함
4. 콘텍스트 
    - 알고리즘을 실행해야 할 때마다 연결된 전략 객체의 실행 메서드를 호출함
    - 알고리즘이 어떻게 실행되는지와 자신이 어떤 유형의 전략과 함께 작동하는지를 모름
5. 클라이언트
    - 특정 전략 객체를 만들어 콘텍스트에 전달함
    - 콘텍스트는 클라이언트들이 런타임에 콘텍스트와 관련된 전략을 대체할 수 있도록 하는 세터를 노출함