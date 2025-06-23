document.addEventListener('DOMContentLoaded', function () {
  const btnTurmas = document.getElementById('btnTurmas');
  const listaTurmas = document.getElementById('listaTurmas');
  const painelTurma = document.getElementById('painelTurma');
  const nomeTurma = document.getElementById('nomeTurma');

  btnTurmas.addEventListener('click', function (e) {
    e.preventDefault();
    listaTurmas.classList.toggle('mostrar');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown') || e.target.closest('#listaTurmas a')) {
      listaTurmas.classList.remove('mostrar');
    }
  });
  listaTurmas.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const turma = this.getAttribute('data-turma');
      nomeTurma.textContent = turma;
      painelTurma.style.display = 'block';
    });
  });
  const btnCadastro = document.getElementById('btnCadastro');
  const listaCadastro = document.getElementById('listaCadastro');

  btnCadastro.addEventListener('click', function (e) {
    e.preventDefault();
    listaCadastro.classList.toggle('mostrar');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown') || e.target.closest('#listaCadastro a')) {
      listaCadastro.classList.remove('mostrar');
    }
  });
});