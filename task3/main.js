// let string="";
// let buttons=document.querySelectorAll('.button')
// Array.from(buttons).forEach((button)=>{
//     button.addEventlistener('click',(e)=>{
//         console.log(e.target)

//     })
// })
// Select input and all buttons
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

// Loop through each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      // Evaluate the expression
      try {
        // replace x with * for JS eval
        let expr = inputField.value.replace(/x/g, '*');
        inputField.value = eval(expr);
      } catch (e) {
        inputField.value = 'Error';
      }
    } else if (value === 'C') {
      // If you add a C (clear) button
      inputField.value = '';
    } else {
      // Append the button’s value to input
      inputField.value += value;
    }
  });
});
