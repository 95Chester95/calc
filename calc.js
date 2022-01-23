function Calc(operator, a, b) {
  const isNotValid = typeof a !== 'number' || typeof b !== 'number';
  if (isNotValid) {
    return 'Error';
  }
  
  switch (operator) {
    case 'sum':
      return a + b;
      
    case 'sub':
      return a - b;
    
    case 'multi':
      return a * b;
      break;
    
    case 'div':
      return a / b;
      break;

    case 'rem':
      return a % b;

    case 'pow':
      return a ** b;
    
    default :
      return 'unknown operation';
  }
}

console.log(Calc('div', 4, 5));
console.log(Calc('pow', 3, 7));