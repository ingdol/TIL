// 가장 작은 수를 출력하는 프로그램

'use strict'
function solution(arr){         
    // let answer = arr[0];
    // for(let i=0; i < arr.length; i++) {
    //     if (answer > arr[i]) answer = arr[i];
    // }

    let answer, min = Number.MAX_SAFE_INTEGER;
    // Number.MAX_SAFE_INTEGER : 안정적인 최대값 넣어줌
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;
}

let arr=[5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// 내장함수로 최솟값, 최댓값 구하기
console.log(Math.min(...arr));
console.log(Math.max(...arr));
// Math.min(인자)만 가능하기 때문에 배열은 펼쳐줘야함 -> spread 연산자 사용

// 다른방법
console.log(Math.min.apply(null, arr));
