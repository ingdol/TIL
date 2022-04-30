// 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램
'use strict'
function solution(arr){
    let answer=[];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if(x%2 === 1) {
            sum += x;
            if (min > x) {
                min = x;
            }
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

let arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
