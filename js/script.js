// 問題を格納する配列
const questions = [];
// 現在の問題番号
let currentIndex = 0;


// 問題を生成する処理
for (let i = 0; i < 10; i++) {
  // 1桁と1桁の足し算の問題を生成する
  const a = Math.floor(Math.random() * 2) + 1;
  const b = Math.floor(Math.random() * 2) + 1;
  const question = `${a} + ${b} =`;
  const answer = a + b;
  questions.push({ question, answer });
}

// 回答をチェックする処理
function checkAnswer() {
  // 入力された答えを取得する
  const input = document.getElementById('answer').value;

  // 入力された答えが正解かどうかを判定する
  if (input == questions[currentIndex].answer) {
    // 正解の場合は「正解」というアラートを表示する
    alert('正解！');
  } else {
    // 不正解の場合は「不正解」というアラートを表示する
    alert('不正解');
  }

  // テキストフィールドを空にする
  document.getElementById('answer').value = '';

  // 問題を進める
  currentIndex++;

  // 問題が終了した場合は、何もしない
  if (currentIndex >= questions.length) {
    return;
  }

  // 次の問題を表示する
  showQuestion();
}

// 問題をフェードインさせる処理
function fadeInQuestion() {
  // 問題を取得する
  const question = document.getElementById('question');

  // 問題のopacityを0から1に変更する
  question.style.opacity = 0;
  let i = 0;
  const fadeIn = setInterval(function () {
    if (i >= 1) {
      clearInterval(fadeIn);
    }
    i += 0.1;
    question.style.opacity = i;
  }, 50);
}


// 問題を表示する処理
function showQuestion() {
  // 問題が存在しない場合は、何もしない
  if (questions.length == 0) {
    return;
  }

  // 問題を取得する
  const question = questions[currentIndex].question;

  // 問題を表示する
  document.getElementById('question').innerHTML = question;

  // 問題をフェードインさせる
  fadeInQuestion();
}
// 問題を表示する
showQuestion();