// ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램
'use strict'
function solution(s){
    let answer="";
    for(let x of s){
        if(x=='A') answer+='#';
        else answer+=x;
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));
