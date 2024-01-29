function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }
  
    var bmi = weight / ((height / 100) * (height / 100));
    displayResult(bmi);
  }
  
  function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  
    if (bmi < 18.5) {
      resultElement.innerHTML += '<br>Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      resultElement.innerHTML += '<br>Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      resultElement.innerHTML += '<br>Overweight';
    } else {
      resultElement.innerHTML += '<br>Obese';
    }
  }
  