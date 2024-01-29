



function calculateBMI(){
    //get the value of weight and height
    var weight =parseFloat(document.getElementById('weight').value)
    var height =parseFloat(document.getElementById('height').value)

    //check for any type of possible errors
if(isNaN(weight)|| isNaN(height) || weight<=0 ||height<=0){
    alert('Please enter the valida values for weight and height ')
    return ;
}
    //calculate bmi
    var bmi=weight/((height/100)* (height/100))

    //display result 
    displayResult(bmi);
}


function displayResult(bmi){
//get the dom for result
var resultElement=document.getElementById('result')

resultElement.innerHTML='Ypur BMI is:' + bmi.toFixed(2);

//for additional comment 
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


  