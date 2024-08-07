# 무결성 (Integrity)

## 무결성이란?

- 데이터베이스에서 데이터의 정확성, 일관성, 신뢰성을 유지하기 위한 개념
- 무결성 제약 조건은 데이터의 품질을 보장하기 위해 설정

### 더 쉬운 설명

- 무결성은 깨지지 않는 유리컵
    - 데이터가 완전하고 정확한 상태를 유지

## 무결성 제약 조건

### 1. 개체 무결성

- 데이터베이스에서 각 행이 고유하고 중복되지 않음을 보장하기 위함
- 기본 키가 설정되며, 이는 각 행을 유일하게 식별
    - 중복 값 안됨
    - NULL 허용하지 않음

**더 쉬운 설명**

- 개체 무결성은 모든 사람이 고유한 주민등록번호를 가지는 것
    - 기본 키는 신분증과 같음 → 각 행을 유일하게 식별

### 2. 도메인/속성 무결성

- 데이터베이스에서 각 속성이 정의된 데이터 타입과 값의 범위를 준수하도록 보장
- 데이터의 일관성과 정확성을 유지

**더 쉬운 설명**

- 도메인/속성 무결성은 잘 정리된 옷장
    - 각 칸에 특정 종류와 크기, 색상의 옷만 들어갈 수 있음
    - 데이터베이스의 각 속성도 정해진 데이터 타입과 값의 범위를 가져야 함

### 3. 참조 무결성

- 데이터베이스에서 두 테이블 간의 관계를 정확히 유지하기 위한 개념
- 주로 외래 키 제약 조건을 통해 구현

**더 쉬운 설명**

- 참조 무결성은 안전한 다리
    - 외래 키는 다리의 기둥, 기본 키는 다리의 시작점
    - 다리의 각 부분이 정확히 연결되어 있어야 안전하게 건널 수 있음
    - 데이터베이스에서도 테이블 간의 관계가 정확히 유지되어야 데이터가 일관되게 정확하게 유지