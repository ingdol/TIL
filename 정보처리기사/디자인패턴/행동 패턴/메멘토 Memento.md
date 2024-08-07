# 메멘토 Memento

[메멘토 패턴](https://refactoring.guru/ko/design-patterns/memento)

## 의도

- 메멘토 : 객체의 구현 세부 사항을 공개하지 않으면서 해당 객체의 이전 상태를 저장하고 복원할 수 있게 해주는 행동 디자인 패턴

![Untitled](%E1%84%86%E1%85%A6%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A9%20Memento%204b545337918f4faca37096acb3668a62/Untitled.png)

## 문제

- 텍스트 편집기 앱을 만들고 있다고 가정
    - 간단한 텍스트 편집 외에도 텍스트의 서식 지정, 인라인 이미지들의 삽입 등을 할 수 있음
- 텍스트에 수행된 모든 작업을 실행 취소하도록 필요할 때
    - 이 기능을 구현하기 위해 직접 접근 방식을 적용하기로 함
    - 앱은 모든 작업을 수행하기 전에 모든 객체의 상태를 기록해 어떤 스토리지에 저장
    - 나중에 사용자가 작업을 실행 취소하면 앱은 기록에서 가장 최신 스냅샷을 가져와 모든 객체의 상태를 복원하는 데 사용

![앱은 작업을 실행하기 전에 객체들의 상태의 스냅샷을 저장하며, 이 스냅샷은 나중에 객체들을 이전 상태로 복원하는 데 사용할 수 있음](%E1%84%86%E1%85%A6%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A9%20Memento%204b545337918f4faca37096acb3668a62/Untitled%201.png)

앱은 작업을 실행하기 전에 객체들의 상태의 스냅샷을 저장하며, 이 스냅샷은 나중에 객체들을 이전 상태로 복원하는 데 사용할 수 있음

- 상태 스냅샷은 어떻게 생성될까?
    - 객체의 모든 필드를 살펴본 후 해당 값들을 스토리지에 복사해야 할 것임
    - 이는 객체의 내용에 대한 액세스 제한이 상당히 완화되어 있는 경우에만 작동할 것임
    - 불행히, 대부분의 실제 객체들은 모든 중요한 데이터를 비공개 필드에 숨김
- 이 문제를 무시하고, 객체들이 열린 관계들을 선호해 그들의 상태를 공개했다고 가정
    - 원하는 대로 객체들의 상태에 대한 스냅샷들을 생성할 수 있음
    - 하지만 몇 가지 심각한 문제가 남음
        - 일부 필드를 추가 또는 제거하거나, 편집기 클래스들을 리팩토링하기로 결정할지도 모르기 때문
        - 영향받은 객체들의 상태를 복사하는 역할을 맡은 클래스들을 변경해야 함

![객체의 비공개 상태는 어떻게 복사할까?](%E1%84%86%E1%85%A6%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A9%20Memento%204b545337918f4faca37096acb3668a62/Untitled%202.png)

객체의 비공개 상태는 어떻게 복사할까?

- 편집기 상태의 실제 ‘스냅샷’들에 어떤 데이터가 포함되어 있는지 살펴봄
    - 이 안에는 최소한 실제 텍스트, 커서 좌표, 현재 스크롤 위치 등이 포함되어 있을 것임
    - 스냅샷을 만들려면 이러한 값들을 수집한 후 일종의 컨테이너에 넣어야 함
- 이러한 컨테이너 객체들을 기록에 해당하는 어떤 리스트에 많이 저장하게 될 것임
    - 이 컨테이너들은 결국 한 클래스의 객체들이 될 것임
    - 이 클래스에는 메서드는 거의 없을 테지만, 편집기의 상태를 미러링하는 필드는 많이 있을 것임
    - 다른 객체들이 스냅샷에서 데이터를 읽고 스냅샷에 데이터를 쓸 수 있도록 하려면, 아마도 해당 스냅샷의 필드를 공개해야 할 것임
    - 그러면 편집기의 모든 (비공개 포함) 상태들이 노출될 것이고 다른 클래스들은 스냅샷 클래스에 발생하는 모든 자그마한 변경에도 영향을 받게 됨
    - 편집기의 모든 상태가 노출되지 않았다면 이러한 변경들은 외부 클래스에는 영향을 미치지 않은 채 비공개 필드와 메서드 안에서 변경이 발생하는 것을 끝났을것임

⇒ 이제 교착 상태에 빠지게 됨

- 클래스 내부의 세부 정보를 모두 공개하면 클래스가 너무 취약해짐
    - 하지만 클래스의 상태에 접근하지 못하게 되면 스냅샷을 생성할 수 없게 됨
    - ‘실행 취소’는 대체 어떻게 구현해야 할까?

## 해결책

- 위의 모든 문제는 캡슐화의 실패로 인해 발생
    - 일부 객체들은 원래 해야 할 일보다 더 많은 일들을 수행하려고 함
    - 예를 들어) 이러한 객체들은 어떤 작업을 수행하는 데 필 요한 데이터를 수집하기 위해 다른 객체들이 실제 작업을 수행하도록 놔두는 대신 그들의 비공개 공간을 침범함
- 메멘토는 상태 스냅샷들의 생성을 해당 상태의 실제 소유자인 originator(오리지네이터) 객체에 위임함
    - 그러면 다른 객체들이 ‘외부’에서 편집기의 상태를 복사하려 시도하는 대신,
    - 자신의 상태에 대한 완전한 접근 권한을 갖는 편집기 클래스가 자체적으로 스냅샷을 생성할 수 있음
- 이 패턴은 메멘토라는 특수 객체에 객체 상태의 복사본을 저장하라고 제안함
    - 메멘토의 내용에는 메멘토를 생성한 객체를 제외한 다른 어떤 객체도 접근할 수 없음
    - 다른 객체들은 메멘토들과 제한된 인터페이스를 사용해 통신해야 함
    - 이러한 인터페이스는 스냅샷의 메타데이터(생성 시간, 수행 작업의 이름 등)를 가져올 수 있도록 할 수 있지만, 스냅샷에 포함된 원래 객체의 상태는 가져오지 못함

![오리지네이터는 메멘토에 대한 전체 접근 권한이 있지만 케어테이커(caretaker)는 메타데이터에만 접근할 수 있음](%E1%84%86%E1%85%A6%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A9%20Memento%204b545337918f4faca37096acb3668a62/Untitled%203.png)

오리지네이터는 메멘토에 대한 전체 접근 권한이 있지만 케어테이커(caretaker)는 메타데이터에만 접근할 수 있음

- 이러한 제한 정책을 사용하면 일반적으로 케어테이커라는 다른 객체들 안에 메멘토들을 저장할 수 있음
    - 케이테이커는 제한된 인터페이스를 통해서만 메멘토와 작업하기 때문에 메멘토 내부에 저장된 상태를 변경할 수 없음
    - 동시에 오리지네이터는 메멘토 내부의 모든 필드에 접근할 수 있으므로 언제든지 자신의 이전 상태를 복원할 수 있음
- 위의 텍스트 편집의 경우) 별도의 기록 클래스를 만들어 케어테이커의 역할을 하도록 함
    - 케어테이커 내부의 메멘토들의 스택은 편집기가 작업을 실행하려고 할 때마다 계속 늘어날 것임
    - 앱의 UI 내에서 이 스택을 렌더링하여 이전에 수행한 작업들의 기록을 사용자에게 표시할 수도 있음
- 사용자가 실행 취소를 작동 → 기록은 스택에서 가장 최근의 메멘토를 가져옴 → 편집기에 다시 전달 → 롤백 요청
    - 편집기는 메멘톤에 대한 완전한 접근 권한이 있으므로 메멘토에서 가져온 값들로 자신의 상태를 변경함

## 구조

### 중첩된 클래스들에 기반한 구현

- 이 패턴의 고전적인 구현은 수많은 인기 프로그래밍 언어(C++, C#, 자바)에서 사용할 수 있는 중첩 클래스에 대한 지원에 의존함

![Untitled](%E1%84%86%E1%85%A6%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A9%20Memento%204b545337918f4faca37096acb3668a62/Untitled%204.png)

1. 오리지네이터
    - 오리지네이터 클래스 : 자신의 상태에 대한 스냅샷들을 생성
    - 필요시 스냅샷에서 자신의 상태를 복원 가능
2. 메멘토
    - 오리지네이터의 상태의 스냅샷 역할을 하는 값 객체
    - 관행적으로 메멘토는 불변으로 만든 후 생성자를 통해 데이터를 한 번만 전달
3. 케어테이커
    - ‘언제’ 그리고 ‘왜’ 오리지네이터의 상태를 캡처해야 하는지 뿐만 아니라 상태가 복원돼야 하는 시기도 알고 있음
    - 메멘토의 스택을 저장하여 오리지네이터의 기록을 추적할 수 있음
    - 오리지네이터가 과거로 돌아가야 할 때 케어테이커는 맨 위의 메멘토를 스택에서 가져온 후 오리지네이터의 복원 메서드에 전달함
4. 이 구현에서 메멘토 클래스는 오리지네이터 내부에 중첩됨
    - 오리지네이터가 메멘토의 필드들과 메서드들이 비공개로 선언된 경우에도 접근할 수 있도록 함
    - 반면, 케어테이커는 메멘토의 필드들과 메서드들에 매우 제한된 접근 권한을 가지므로 메멘토들을 스택에 저장할 수는 있지만 그들의 상태를 변조할 수는 없음