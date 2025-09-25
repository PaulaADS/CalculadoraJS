const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const valor = btn.textContent;

    if (valor === 'C') {
      display.value = '';
    } else if (valor === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Erro';
      }
    } else {
      display.value += valor;
    }
  });
});
