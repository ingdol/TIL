// 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램
'use strict'
function solution(s){  
    let answer="";
    for (let x of s) {
        if( x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}
console.log(solution("StuDY"));
