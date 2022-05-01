// 10부제 출력 프로그램
'use strict'
function solution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++;
    }
    
    return answer;
}

let arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
