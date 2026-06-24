function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("error-msg");

    // Clear previous error
    errorMsg.textContent = "";

    // Validation
    if (email === "" || password === "") {
        errorMsg.textContent = "Please fill all fields!";
        return;
    }

    // Dummy login (for now)
    if (email === "Vikas" && password === "1234") {
        
        // Save user session
        localStorage.setItem("user", email);

        // Redirect to dashboard
        window.location.href = "../StudentDashboard/student-dashboard.html";
    } 
    else {
        errorMsg.textContent = "Invalid email or password!";
    }
}