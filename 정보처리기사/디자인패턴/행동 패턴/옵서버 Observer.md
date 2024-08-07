# 옵서버 Observer

[옵서버 패턴](https://refactoring.guru/ko/design-patterns/observer)

## 의도

- 옵서버 패턴 : 여러 객체에게 자신이 관찰 중인 객체에 발생하는 모든 이벤트에 대하여 알리는 구독 메커니즘을 정의할 수 있도록 하는 행동 디자인 패턴

![Untitled](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled.png)

## 문제

- `Customer` (손님) 및 `Store` (가게)라는 두 가지 유형의 객체들이 있다고 가정
    - 손님은 곧 매장에 출시될 제품에 매우 관심
    - 손님은 매일 매장을 방문하여 제품 제고를 확인
    - 제품이 매장에 아직 운송되는 동안 이러한 방문은 무의미함

![매장 방문 vs 스팸 발송](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled%201.png)

매장 방문 vs 스팸 발송

- 모든 사람들에게 출시 알림 문자를 보내는 건 관심 없는 고객에겐 스팸 문자가 될 수 있음
- 손님들이 신제품 출시 확인을 위해 시간을 낭비하든지, 매장들이 알림을 원하지 않는 고객들에게 신제품 출시를 알린다든지 자원을 낭비해야 함

## 해결책

- 시간이 지나면 변경될 수 있는 중요한 상태를 가진 객체가 있다고 가정
    - 이 객체는 종종 주체(subject)라고 불림
    - 이 객체는 자신의 상태에 대한 변경에 대해 다른 객체들에 알림을 보내는 역할도 맡을 것이니 해당 객체를 출판사라고 부름
- 옵서버 패턴은 출판사 클래스에 개별 객체들이 그 출판사로부터 오는 이벤트들의 알림들을 구독 또는 취소할 수 있도록 구독 메커니즘을 추가할 것을 제안함
    - 1) 구독자 객체들에 대한 참조의 리스트를 저장하기 위한 배열 필드
    - 2) 그 리스트에 구독자들을 추가하거나 제거할 수 있도록 하는 여러 공개된(public) 메서드들로 구성

![구독 메커니즘을 통해 개별 객체들이 이벤트 알림들을 구독할 수 있음](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled%202.png)

구독 메커니즘을 통해 개별 객체들이 이벤트 알림들을 구독할 수 있음

- 이제 출판사에 중요한 이벤트가 발생할 때마다 구독자 리스트를 참조한 후 그들의 객체들에 있는 특정 알림 메서드를 호출함
- 실제 앱에는 같은 출판사 클래스의 이벤트들을 추적하는 데 관심이 있는 수십 개의 서로 다른 구독자  클래스들이 있을 수 있음
    - 출판사를 이러한 모든 클래스에 결합하고 싶지 않을 것임
    - 출판사 클래스가 다른 사람들에 의해 사용되어야 한다면 이러한 구독자 클래스 중 일부는 미리 알지 못할 수 있음
- 모든 구독자가 같은 인터페이스를 구현하고 출판사가 오직 그 인터페이스를 통해서만 구독자들과 통신하는 것이 매우 중요함
    - 이 인터페이스는 출판사가 알림과 어떤 콘텍스트 데이터를 전달하는 데 사용할 수 있는 매개변수들의 집합과 알림 메서드를 선언해야 함

![출판사는 특정 알림 메서드를 구독자들의 객체들에서부터 호출하여 그들에게 알림을 보냄](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled%203.png)

출판사는 특정 알림 메서드를 구독자들의 객체들에서부터 호출하여 그들에게 알림을 보냄

- 앱에 여러 유형의 출판사가 있고 이들을 구독자들과 호환되도록 하려면 모든 출판사가 같은 인터페이스를 따르도록 할 수 있음
    - 이 인터페이스를 통해 구독자들은 출판자들의 상태들을 그들의 구상 클래스들과 결합하지 않고 관찰할 수 있음

## 실제상황 적용

![잡지 및 신문 구독](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled%204.png)

잡지 및 신문 구독

## 구조

![Untitled](%E1%84%8B%E1%85%A9%E1%86%B8%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20Observer%20ce5be9f1f1864aa1b6918ad35ec1dff7/Untitled%205.png)

1. 출판사
    - 다른 객체들에 관심 이벤트들을 발행함
    - 이러한 이벤트들은 출판사가 상태를 전환하거나 어떤 행동들을 실행할 때 발생함
    - 출판사들에는 구독 인프라가 포함되어 있으며
    - 이 인프라는 현재 구독자들이 리스트를 떠나고 새 구독자들이 리스트에 가입할 수 있도록 함
2. 새 이벤트가 발생하면 출판사는 구독자 리스트를 살펴본 후 각 구독자 객체의 구독자 인터페이스에 선언된 알림 메서드를 호출함
3. 구독자
    - 구독자 인터페이스는 알림 인터페이스를 선언하며 대부분의 경우 단일 `update` 메서드로 구성됨
    - 이 메서드에는 출판사가 업데이트와 함께 어떤 이벤트의 세부 정보들을 전달할 수 있도록 하는 여러 매개변수가 있을 수 있음
4. 구상 구독자
    - 출판사가 보낸 알림들에 대한 응답으로 몇 가지 작업을 수행함
    - 모든 클래스는 출판사가 구상 클래스들과 결합하지 않도록 같은 인터페이스를 구현함
5. 일반적으로 구독자들은 업데이트를 올바르게 처리하기 위해 콘텍스트 정보가 어느정도 필요로 함
    - 출판사들은 종종 콘텍스트 데이터를 알림 메서드의 인수로 전달함
    - 출판사는 자신을 인수로 전달할 수 있으며 구독자가 필요한 데이터를 직접 가져오도록 함
6. 클라이언트
    - 출판사 및 구독자 객체들을 별도로 생성한 후 구독자들을 출판사 업데이트에 등록함