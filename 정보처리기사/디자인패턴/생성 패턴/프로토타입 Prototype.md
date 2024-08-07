# 프로토타입 Prototype

[프로토타입 패턴](https://refactoring.guru/ko/design-patterns/prototype)

## 의도

- 프로토타입은 코드를 그들의 클래스들에 의존시키지 않고 기존 객체들을 복사할 수 있도록 하는 생성 디자인 패턴

![Untitled](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20Prototype%20912f322e037d47ac93b413cfd5dff4bd/Untitled.png)

## 문제

- 객체가 있고 그 객체의 정확한 복사본을 만들고 싶다고 가정
  - 먼저 같은 클래스의 새 객체를 생성해야 함
  - 다음 원본 객체의 모든 필드들을 살펴본 후 해당 값들을 새 객체에 복사해야 함
  - 그러나 객체의 필드들 중 일부가 비공개여서 객체 자체의 외부에서 볼 수 없을 수 있으므로 모든 객체를 복사하기엔 불가능

![객체를 ‘외부에서부터’ 복사하는 것은 불가능](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20Prototype%20912f322e037d47ac93b413cfd5dff4bd/Untitled%201.png)

객체를 ‘외부에서부터’ 복사하는 것은 불가능

- 직접적인 접근 방식의 또 다른 문제점
  - 객체의 복제본을 생성하려면 객체의 클래스를 알아야 하므로, 우리의 코드가 해당 클래스에 의존하게 됨
  - 예를 들어) 메서드의 매개변수가 일부 인터페이스를 따르는 모든 객체를 수락할 때 우리는 그 객체가 따르는 인터페이스만 알고, 그 객체의 구상클래스는 알지 못할 수 있음

## 해결책

- 프로토타입 패턴은 실제로 복제되는 객체들에 복제 프로세스를 위임함
  - 패턴은 복제를 지원하는 모든 객체에 대한 공통 인터페이스를 선언함
  - 이 인터페이스를 사용하면 코드를 객체의 클래스에 결합하지 않고도 해당 객체를 복제할 수 있음
  - 이러한 인터페이스에는 단일 `clone` 메서드만 포함
- `clone` 메서드의 구현은 모든 클래스에서 매우 유사함
  - 이 메서드는 현재 클래스의 객체를 만든 후 이전 객체의 모든 필드 값을 새 객체로 전달함
  - 대부분의 프로그래밍 언어는 객체들이 같은 클래스에 속한 다른 객체의 비공개 필드들에 접근(access) 할 수 있도록 하므로 비공개 필드들을 복사하는 것도 가능함
- 복제를 지원하는 객체 = 프로토타입
  - 객체들에 수십 개의 필드와 수백 개의 가능한 설정들이 있는 경우 이를 복제하는 것이 서브클래싱의 대안이 될 수 있음

![미리 만들어진 프로토타입은 서브클래싱의 대안이 됨](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20Prototype%20912f322e037d47ac93b413cfd5dff4bd/Untitled%202.png)

미리 만들어진 프로토타입은 서브클래싱의 대안이 됨

- 프로토타입의 작동 과정
  - 다양한 방식으로 설정된 객체들의 집합을 만듦
  - 설정한 것과 비슷한 객체가 필요한 경우 처음부터 새 객체를 생성하는 대신 프로토타입을 복제하면 됨

## 구조

### 기초 구현

![Untitled](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20Prototype%20912f322e037d47ac93b413cfd5dff4bd/Untitled%203.png)

1. 프로토타입
   - 프로토타입 인터페이스는 복제 메서드들을 선언
   - 이 메서드들의 대부분은 단일 `clone` 메서드
2. 구상 프로토타입
   - 구상 프로토타입 클래스는 복제 메서드를 구현
   - 원본 객체의 데이터를 복제본에 복사
   - 복제 프로세스와 관련된 일부 예외적인 경우들도 처리 가능
     - 예) 연결된 객체 복제, 재귀 종속성 풀기
3. 클라이언트
   - 프로토타입 인터페이스를 따르는 모든 객체의 복사본을 생성 가능

### 프로토타입 레지스트리 구현

![Untitled](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%20Prototype%20912f322e037d47ac93b413cfd5dff4bd/Untitled%204.png)

1. 프로토타입 레지스트리
   - 자주 사용하는 프로토타입들에 쉽게 접근(액세스)하는 방법을 제공
   - 복사될 준비가 된 미리 만들어진 객체들의 집합을 저장
   - `name -> prototype` 해시 맵의 경우
     - 단순히 이름을 검색하는 것보다 더 나은 검색 기준이 필요한 경우 훨씬 더 탄탄한 레지스트리트를 구축 가능
