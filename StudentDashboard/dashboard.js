// Show logged-in user
window.onload = function () {
    let user = localStorage.getItem("user");

    if (!user) {
        // If not logged in, go back to login page
        window.location.href = "../login/index.html";
    } else {
        document.getElementById("welcome").innerText = "Welcome, " + user;
    }
};

// Start exam
function startExam() {
    alert("Click OK to Start Exam");
    // later redirect to exam page
    window.location.href = "../Exam/exam.html";
}

// Logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "../login/index.html";
}