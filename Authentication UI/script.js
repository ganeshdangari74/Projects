function togglePasswordText(inputId, textId) {
  const input = document.getElementById(inputId);
  const text = document.getElementById(textId);

  if (input.type === "password") {
    input.type = "text";
    text.innerText = "Hide password";
  } else {
    input.type = "password";
    text.innerText = "Show password";
  }
}

function checkStrength() {
  const pass = document.getElementById("password").value;
  const strength = document.getElementById("strength");

  if (pass.length < 6) {
    strength.innerText = "Weak password";
    strength.style.color = "red";
  } else if (/[A-Z]/.test(pass) && /\d/.test(pass)) {
    strength.innerText = "Strong password";
    strength.style.color = "green";
  } else {
    strength.innerText = "Medium password";
    strength.style.color = "orange";
  }
}

function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields required");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  const otp = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("otp", otp);

  alert("OTP sent (Demo OTP: " + otp + ")");
  window.location.href = "otp.html";
}

function verifyOTP() {
  const entered = document.getElementById("otpInput").value;
  const otp = localStorage.getItem("otp");

  if (entered === otp) {
    alert("OTP verified");
    window.location.href = "index.html";
  } else {
    alert("Invalid OTP");
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || email !== user.email || password !== user.password) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  } else {
    const user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("userName").innerText = `Hello, ${user.name}`;
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function sendResetOTP() {
  const email = document.getElementById("resetEmail").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || email !== user.email) {
    alert("Email not registered");
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("otp", otp);

  alert("Reset OTP (Demo): " + otp);
  window.location.href = "otp.html";
}