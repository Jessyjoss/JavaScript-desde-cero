const usuarios = [
  { user: 'Jessica', password: '4699920' },
  { user: 'Luis', password: '2343944' },
  { user: 'Dora', password: '2196538' },
  { user: 'Jose', password: '0459935' }
];

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("login-error");

  const loginSection = document.getElementById("login-section");
  const commentSection = document.getElementById("comment-section");

  // Validar login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    const validUser = usuarios.find(u => u.user === user && u.password === pass);

    if (validUser) {
      loginSection.style.display = "none";
      commentSection.style.display = "block";
    } else {
      loginError.textContent = "Usuario o contraseña incorrectos.";
    }
  });

  // Agregar comentarios
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    const comment = document.createElement("div");
    comment.classList.add("comment");

    const timestamp = new Date().toLocaleString();

    comment.innerHTML = `
      <p>${commentText}</p>
      <time>${timestamp}</time>
      <button class="delete-btn">Eliminar</button>
    `;

    commentList.prepend(comment);
    commentInput.value = "";

    comment.querySelector(".delete-btn").addEventListener("click", () => {
      comment.remove();
    });
  });
});
