document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelector('button').addEventListener("click", (e) => {
    e.preventDefault();
    // if, convert was clicked
    // getting the inputted value
    document.getElementById('convert').onclick =
    // calcaulate the temperature conversion
      function conversionTemp() {
        let givenTemp = document.getElementById('tempSubmit').value
        if (document.getElementById("tempC").checked) {
          // inform the calculated value
          document.getElementById("result").innerHTML = ((givenTemp * 9/5) + 32).toFixed(3);
          console.log(resultValue, "C value calculated")
        }
        else {
          document.getElementById("result").innerHTML = ((givenTemp - 32) * (5/9)).toFixed(3);
        }
      }
      // if, clear was clicked
    
    document.getElementById('clear').addEventListener('click', (e) => {
      document.getElementById('tempSubmit').value = "";
    })
  })

  // inform the 0 value to html

})