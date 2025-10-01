// 만들어 보기 -> 해설
// 더 완벽한 프로그램을 위해선, 0보다 작은 값 입력됐을 경우 알려줄 것!!

// 1~2. 시간 값 가져오기 + 가져온 시간 값을 1초씩 줄이기
var min, sec; // 전역 변수 선언
var timer; // timer 변수 선언 (setInterval() 결과를 저장할 변수)

function startTimer() {
  min = document.querySelector('#startMin').value; // '분' 값 가져옴
  if(min == "") min = 0; // '분' 값이 없다면 0으로 지정
  sec = document.querySelector('#startSec').value; // '초' 값 가져옴
  if(sec == "") sec = 0; // '초' 값이 없다면 0으로 지정
  timer = setInterval(countTimer, 1000); // 1초(1000밀리초)마다 countTimer() 함수 실행
}

function countTimer() {
  if(sec != 0) { // '초' 값이 0이 아닐 때 실행할 명령들 ('초' 값이 있다면)
    sec--;
    document.querySelector('#display').innerText = min + "분" + sec + "초 남았습니다.";
  }
  else { // '초' 값이 0일 경우 처리할 부분
    if(min != 0) { // (sec=0 이면서) '분' 값이 0이 아닐 때 실행할 명령 ('분' 값이 있다면)
      min--; // 1분 줄이고
      sec = 59; // '초' 값을 59초부터 시작
    } else { // (sec=0 이면서) '분' 값이 0일 때, 즉 타이머가 끝났을 때 실행할 명령
      // clearInterval(timer); // 타이머 종료
      clearTimer(timer);
      document.querySelector('#display').innerText = "타이머 종료";
      // '분', '초' 텍스트 필드 영역 지우기
      // document.querySelector('#startMin').value = "";
      // document.querySelector('#startSec').value = "";
    }
  }
}

// 3. 타이머 리셋하기
/* 
function resetTimer() {
  clearTimer(timer); // 타이머 종료 [PDF - 해당 함수 미선언]
  document.getElementById("display").innerText = ""; // 표시 영역 지움
  document.getElementById("startMin").value = ""; // '분' 값 지움
  document.getElementById("startSec").value = ""; // '초' 값 지움
}

// 공유한 JS 참고 수정 (PDF 문서와 JS 파일과의 차이점)
// clearTimer(timer) 함수 실행시 코드
function clearTimer() {
  clearInterval(timer);
}
*/

function resetTimer() {
  clearTimer(timer);
}

function clearTimer(t) { // 매개변수 t를 이용해 타이머 이름을 받음
  clearInterval(t); // 넘겨받은 타이머 종료
  document.getElementById("display").innerText = "";
  document.getElementById("startMin").value = "";
  document.getElementById("startSec").value = "";
}

// 59초 일때는 화면에 출력X 오류 발견 (정상 작동은 되지만) => 공유한 JS도 동일한 문제점