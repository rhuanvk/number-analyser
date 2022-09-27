const num = document.querySelector('input#value');
const list = document.querySelector('select#list');
const res = document.querySelector('div.answers');
const numArr = [];

// Confere se o número informado no Input está entre os valores esperados
function checkNumber(n) {
  if (n >= 1 && n <= 100) {
    return true;
  } else {
    return false;
  }
}

// Confere se o número informado no Input não está duplicado
function checkList(n, l) {
  if (l.indexOf(n) != -1) {
    return true;
  }
  else {
    return false;
  }
}

// Adiciona ao Select os valores informados no Input
function addNumbers() {
  if (checkNumber(num.value) && !checkList(num.value, numArr)) {
    numArr.push(num.value);
    const listedNumber = document.createElement('option');
    listedNumber.value = `${num.value}`;
    listedNumber.className = 'listed-number';
    listedNumber.innerText += `Number ${num.value} was added.`;
    list.appendChild(listedNumber);
  } else {
    alert('[Error] The number is invalid or it is already in the list.');
  }
  num.value = '';
}

/*
Verifica todos os números informados no Input e retorna:
1 - A quantidade de números;
2 - O maior número;
3 - O menor número;
4 - A soma de todos os valores;
5 - A média dos valores.
*/
function verify() {
  const quantity = document.querySelector('p#quantity');
  const highest = document.querySelector('p#highest');
  const lowest = document.querySelector('p#lowest');
  const sum = document.querySelector('p#sum');
  const average = document.querySelector('p#average');
  let x = 0;
  numArr.sort();
  for (let i = 0; i < numArr.length; i++) {
    x += Number(numArr[i]);
  }

  quantity.innerText = `The quantity of entered numbers is ${numArr.length}.`;
  highest.innerText = `The highest number is ${numArr.at(-1)}.`;
  lowest.innerText = `The lowest number is ${numArr.at(0)}.`;
  sum.innerText = `The sum of all numbers results in ${x}.`;
  average.innerText = `The average value of all numbers is ${x / numArr.length}.`;
}
