const botao = document.getElementById('infP');
const caixaTexto = document.getElementById('caixaTexto');

botao.addEventListener('click', function() {
  if (caixaTexto.style.display === 'none') {
    caixaTexto.style.display = 'block'; // Mostra a caixa de texto
  } else {
    caixaTexto.style.display = 'none'; // Oculta a caixa de texto
  }
}
);
// teste para criar um botão usando html, css e js do meu portifólio
