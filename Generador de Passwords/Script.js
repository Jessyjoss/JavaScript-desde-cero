const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const includeUppercase = document.getElementById("include-uppercase");
const includeLowercase = document.getElementById("include-lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

const strengthBar = document.getElementById("bar");
const strengthLabel = document.getElementById("strength-label");

// Caracteres disponibles
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+{}[]|;:,.<>?/";

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let charset = "";

  if (includeUppercase.checked) charset += UPPERCASE;
  if (includeLowercase.checked) charset += LOWERCASE;
  if (includeNumbers.checked) charset += NUMBERS;
  if (includeSymbols.checked) charset += SYMBOLS;

  if (charset.length === 0) {
    return "Selecciona al menos una opción";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    password += charset[index];
  }

  return password;
}

function evaluateStrength(password) {
  let strength = 0;
  if (password.length >= 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let percent = (strength / 5) * 100;
  strengthBar.style.width = percent + "%";

  if (percent <= 40) {
    strengthBar.style.backgroundColor = "#ff4d4d";
    strengthLabel.textContent = "Débil";
  } else if (percent <= 70) {
    strengthBar.style.backgroundColor = "#ffb700";
    strengthLabel.textContent = "Media";
  } else {
    strengthBar.style.backgroundColor = "#00ff88";
    strengthLabel.textContent = "Fuerte";
  }
}

// Actualizar número de longitud
lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

// Generar contraseña
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const password = generatePassword();
  passwordInput.value = password;
  evaluateStrength(password);
});

// Copiar al portapapeles
copyBtn.addEventListener("click", () => {
  if (passwordInput.value.trim() === "") return;
  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "✅";
  setTimeout(() => (copyBtn.textContent = "📋"), 1500);
});
