// 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
function solution(s, t){
    let answer=0;
    for(let x of s){
        if(x===t) answer++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
