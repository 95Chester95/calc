// function Calc(operator, a, b) {
//   const isNotValid = typeof a !== 'number' || typeof b !== 'number';
//   if (isNotValid) {
//     return 'Error';
//   }
  
//   switch (operator) {
//     case 'sum':
//       return a + b;
      
//     case 'sub':
//       return a - b;
    
//     case 'multi':
//       return a * b;
//       break;
    
//     case 'div':
//       return a / b;
//       break;

//     case 'rem':
//       return a % b;

//     case 'pow':
//       return a ** b;
    
//     default :
//       return 'unknown operation';
//   }
// }

// console.log(Calc('div', 4, 5));
// console.log(Calc('pow', 3, 7));






function Calc(operator, a, b) {
  const isNotValid = typeof a !== 'number' || typeof b !== 'number';
  if (isNotValid) {
    return 'Error';
  }
  
  let operation = {
    sum: a + b,
    sub: a - b,
    multi: a * b,
    div: a / b,
    rem: a % b,
    pow: a **  b,
  }

  if ( operator in operation) {
    return operation[operator] ;
  } else {
    return 'unknown operation';
  }
}



console.log(Calc( '', 4, 2));
console.log(Calc('multi', 3, 7));