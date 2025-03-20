---
title: Flutter Mixin이 뭘까?
tags:
  - AREA
  - 개발
  - flutter
---
# Flutter Mixin 설명
 
## 개요

Mixin은 여러 클래스에서 공통 기능을 재사용할 때 쓰임.

Dart에서 mixin 키워드로 선언하고, with 키워드로 적용함.

상속 대신 코드 중복 줄이려고 사용함.


## 예시 코드

```dart
mixin Logger {
  void log(String message) {
    print("Log: $message");
  }
}

class Person with Logger {
  String name;
  Person(this.name);
  
  void introduce() {
    log("내 이름은 $name");
  }
}

void main() {
  var person = Person("철수");
  person.introduce();
}
```

## 정리

Mixin 덕분에 여러 클래스에서 공통 기능을 손쉽게 재사용 가능함.

코드 관리가 간단해지고 깔끔해짐.