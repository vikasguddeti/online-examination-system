window.onload = function () {

    let user = localStorage.getItem("user");
    let score = localStorage.getItem("score");
    let total = localStorage.getItem("total");
    let correct = localStorage.getItem("correct");

    let wrong = total - correct;

    document.getElementById("user").innerText = "Student: " + user;
    document.getElementById("score").innerText = score;
    document.getElementById("total").innerText = total;
    document.getElementById("correct").innerText = correct;
    document.getElementById("wrong").innerText = wrong;
};

// Go back
function goDashboard() {
    window.location.href = "../StudentDashboard/student-dashboard.html";
}