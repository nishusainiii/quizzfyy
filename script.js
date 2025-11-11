const quizData = [
  { q: "HTML ka full form kya hai?", options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Transfer Markup Level", "None"], answer: 0 },
  { q: "CSS kisliye use hoti hai?", options: ["Styling", "Database", "Backend", "None"], answer: 0 },
  { q: "JavaScript ka use kisliye hota hai?", options: ["Logic/Interaction", "Styling", "Design", "Database"], answer: 0 },
  { q: "C language kisne banayi?", options: ["Dennis Ritchie", "James Gosling", "Guido Rossum", "Ken Thompson"], answer: 0 },
  { q: "CSS file ka extension kya hota hai?", options: [".css", ".js", ".html", ".php"], answer: 0 },
  { q: "Python ka inventor kaun hai?", options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], answer: 0 },
  { q: "Java kis purpose ke liye use hoti hai?", options: ["App Development", "Database", "Network Cabling", "None"], answer: 0 },
  { q: "HTML me link insert karne ke liye tag kya hai?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
  { q: "Website ke layout ke liye kaunsi language use hoti hai?", options: ["CSS", "Python", "C", "SQL"], answer: 0 },
  { q: "Bootstrap kis type ka framework hai?", options: ["CSS Framework", "Python Library", "C Compiler", "None"], answer: 0 },
  { q: "JavaScript file ka extension kya hota hai?", options: [".js", ".java", ".jsx", ".jsp"], answer: 0 },
  { q: "C++ kisne banayi thi?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "Guido Rossum", "James Gosling"], answer: 0 },
  { q: "HTML me image lagane ka tag kya hai?", options: ["<img>", "<image>", "<src>", "<pic>"], answer: 0 },
  { q: "Frontend technologies me kaun aata hai?", options: ["HTML, CSS, JS", "Python, Java", "SQL, MongoDB", "C, C++"], answer: 0 },
  { q: "Web development ke 3 main parts kya hain?", options: ["Frontend, Backend, Database", "HTML, CSS, JS", "Compiler, Debugger, IDE", "None"], answer: 0 }
];

let current = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = quizData[current];
  questionBox.textContent = `${current + 1}. ${q.q}`;
  optionsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(i);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[current].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((btn, i) => {
    btn.style.pointerEvents = "none";
    if (i === correct) btn.classList.add("correct");
    else if (i === selected) btn.classList.add("wrong");
  });

  if (selected === correct) {
    score++;
    new Audio("https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3").play();
  } else {
    new Audio("https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-buzz-3070.mp3").play();
  }
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) showQuestion();
  else endQuiz();
};

function endQuiz() {
  document.querySelector(".quiz-box h1").textContent = "Quiz Completed 🎉";
  questionBox.style.display = "none";
  optionsBox.style.display = "none";
  nextBtn.style.display = "none";
  scoreBox.style.display = "block";
  scoreText.textContent = `${score} / ${quizData.length}`;
}

restartBtn.onclick = () => {
  current = 0;
  score = 0;
  scoreBox.style.display = "none";
  questionBox.style.display = "block";
  optionsBox.style.display = "block";
  nextBtn.style.display = "block";
  document.querySelector(".quiz-box h1").textContent = "Interactive Quiz";
  showQuestion();
};

showQuestion();
