let questions = [
    {
        question: "What is Java?",
        A: "Programming Language",
        B: "Coffee",
        C: "Operating System",
        D: "Browser",
        answer: "A"
    },
    {
        question: "HTML stands for?",
        A: "Hyper Tool Markup Language",
        B: "Hyper Text Markup Language",
        C: "High Text Machine Language",
        D: "None",
        answer: "B"
    }
];

let currentIndex = 0;
let userAnswers = new Array(questions.length);

// Load question
function loadQuestion() {
    let q = questions[currentIndex];

    document.getElementById("question").innerText = q.question;
    document.getElementById("optA").innerText = q.A;
    document.getElementById("optB").innerText = q.B;
    document.getElementById("optC").innerText = q.C;
    document.getElementById("optD").innerText = q.D;

    // restore selected answer
    let options = document.getElementsByName("option");
    options.forEach(opt => opt.checked = false);

    if (userAnswers[currentIndex]) {
        document.querySelector(`input[value=${userAnswers[currentIndex]}]`).checked = true;
    }
}

// Save answer
function saveAnswer() {
    let options = document.getElementsByName("option");
    options.forEach(opt => {
        if (opt.checked) {
            userAnswers[currentIndex] = opt.value;
        }
    });
}

// Next question
function nextQuestion() {
    saveAnswer();
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

// Previous question
function prevQuestion() {
    saveAnswer();
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

// Submit exam
function submitExam() {
    saveAnswer();

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    // Store result data
localStorage.setItem("score", score);
localStorage.setItem("total", questions.length);
localStorage.setItem("correct", score);

// Redirect to result page
window.location.href = "../Result/result.html";
}

// TIMER (2 minutes)
let time = 120;

function startTimer() {
    let timer = setInterval(() => {
        let min = Math.floor(time / 60);
        let sec = time % 60;

        document.getElementById("timer").innerText =
            `Time Left: ${min}:${sec < 10 ? '0' + sec : sec}`;

        time--;

        if (time < 0) {
            clearInterval(timer);
            alert("Time Up! Auto Submitting...");
            submitExam();
        }
    }, 1000);
}

// Initialize
loadQuestion();
startTimer();