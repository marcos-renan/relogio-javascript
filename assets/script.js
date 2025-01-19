// pegando o valor no html pelo id
const horas = document.getElementById('horas');
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// função para modificar os valores no html
const relogio = setInterval(function time() {

  //variavel que recebe os metodos da classe 'Date'
  let dateToday = new Date();

  // variaveis que modificam o valor no html
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  // se os valores forem menor que 10 é adicionado um '0' antes
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  // setando os valores no id
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
})
