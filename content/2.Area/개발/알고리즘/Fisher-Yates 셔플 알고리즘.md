---
title: Fisher-Yates 셔플 알고리즘은 뭐냐
tags:
  - AREA
  - 개발
  - 알고리즘
  - 참고자료
---
# Fisher-Yates 알고리즘
Fisher-Yates 알고리즘은 배열을 무작위로 섞는 간단하고 강력한 방법임.

## 알고리즘 원리

1. **뒤에서부터 시작**  
   - 배열의 마지막 요소부터 진행함.
2. **랜덤 인덱스 선택 및 교환**  
   - 현재 인덱스와 0부터 현재 인덱스 사이의 랜덤한 인덱스 선택, 두 값을 교환함.
3. **순차 진행**  
   - 앞쪽으로 이동하며 반복함.


## 코드 구현

```js
function fisherYates(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
```

## 예시
  
**카드 5장 [A, B, C, D, E]가 있을 때 :**
1. 카드 ‘E’와 0~4 사이 랜덤 카드 교환
2. 카드 ‘D’와 0~3 사이 랜덤 카드 교환
3. 반복 후 순서가 완전히 랜덤해짐

## 결론

Fisher-Yates 알고리즘은 간단하면서 모든 경우가 동일 확률로 나오도록 보장함.

빠르고 효율적임.