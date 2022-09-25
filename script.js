/*
adicionar um numero entre 1 e 100
exibe em tela os numeros adicionados
botao finalizar para chamar a funçao
funcao ira retornar:
1 - a quantidade de numeros cadastrados
2 - o maior numero cadastrado
3 - o menor numero cadastrado
4 - a soma de todos os valores
5 - a media dos valores
*/

// Adiciona ao Select os valores informados no Input
function numbersToList(num) {
  num = document.querySelector('input#value').value;
  const list = document.querySelector('select#list');
  const listedNumber = document.createElement('option');
  listedNumber.value = `${num}`;
  listedNumber.innerText += `Number ${num} was added.`;
  list.appendChild(listedNumber);
}

