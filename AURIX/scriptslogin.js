const footer = document.createElement('footer');
footer.className = 'bottom-logo';

const paragraph = document.createElement('p');
paragraph.className = 'footer-text';
paragraph.innerHTML = 'Todos os direitos reservados © 2025<br>Desenvolvido por <strong>Aurix</strong>';

const logo = document.createElement('img');
logo.src = 'logosanquim.webp';
logo.alt = 'Logo Sanquim';
logo.className = 'footer-logo';

footer.appendChild(paragraph);
footer.appendChild(logo);

document.body.appendChild(footer);

function toggleSenha() {
  const senhaInput = document.getElementById("senha");
  const toggleIcon = document.getElementById("toggleSenha");

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    senhaInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
function irParaPainel() {
  const urlParams = new URLSearchParams(window.location.search);
  const perfil = urlParams.get('perfil');

  if (perfil === "professor") {
    window.location.href = "principalprof.html";
  } else if (perfil === "aluno") {
    window.location.href = "principalaluno.html";
  } else if (perfil === "coordenador") {
    window.location.href = "principalcoord.html";
  } else {
    alert("Perfil não reconhecido.");
  }
}
function esqueciSenha() {
  const email = prompt("Digite o seu e-mail para recuperar a senha:");

  if (email) {
    alert("Se o e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha.");
  } else {
    alert("Por favor, insira um e-mail válido.");
  }
}