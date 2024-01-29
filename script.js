function calculateBMI() {
    // Get user input
    var weight = parseFloat(document.getElementById('weight').value);
    var weightUnit = document.getElementById('weightUnit').value;
    var height = parseFloat(document.getElementById('height').value);
    var heightUnit = document.getElementById('heightUnit').value;
  
    // Convert weight to kilograms
    if (weightUnit === 'lb') {
      weight = weight * 0.453592; // 1 lb = 0.453592 kg
    }
  
    // Convert height to centimeters
    if (heightUnit === 'ft') {
      var feet = Math.floor(height);
      var inches = (height - feet) * 12;
      height = (feet * 30.48) + (inches * 2.54); // 1 ft = 30.48 cm, 1 inch = 2.54 cm
    }
  
    // Check if the input is valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }
  
    // Calculate BMI
    var bmi = weight / (height / 100 * height / 100); // Convert height to meters
  
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  
    // Provide interpretation of BMI
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
  