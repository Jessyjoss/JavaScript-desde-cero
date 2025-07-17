// Lista de usuarios válidos
const usuarios = [
  { user: 'Jessica', password: '4699920' },
  { user: 'Luis', password: '2343944' },
  { user: 'Dora', password: '2196538' },
  { user: 'Jose', password: '0459935' }
];

// Referencias a los elementos del DOM
const loginForm = document.getElementById('login-form');
const booksForm = document.getElementById('books-form');
const commentform = document.getElementById('comment-form');

const loginSection = document.getElementById('login-section');
const booksSection = document.getElementById('books-section');
const commentSection = document.getElementById('comment-section');

const toCommentsButton = document.getElementById('to-comments');

// Validar inicio de sesión
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Buscar usuario válido en la lista
  const usuarioValido = usuarios.find(
    (u) => u.user === username && u.password === password
  );

  if (usuarioValido) {
    loginSection.style.display = 'none';
    booksSection.style.display = 'block';
  } else {
    document.getElementById('login-error').textContent =
      'Usuario o contraseña incorrectos';
  }
});

// Ir a sección de comentarios
toCommentsButton.addEventListener('click', function () {
  booksSection.style.display = 'none';
  commentSection.style.display = 'block';
});

// Registrar libros
booksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('book-title').value;
  const location = document.getElementById('book-location').value;

  const list = document.getElementById('books-list');
  const entry = document.createElement('p');
  entry.textContent = `📖 ${title} - Ubicación: ${location}`;
  list.appendChild(entry);

  booksForm.reset();
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
  })