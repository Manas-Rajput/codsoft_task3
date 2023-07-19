let result = document.getElementById('result');

function appendValue(value) {
  result.value +=value;
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = result.value.replace('x', '*');
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}
