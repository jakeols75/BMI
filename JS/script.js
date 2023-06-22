/* Jacob Ols
   05/25/2023
   Final Project: BMI Calculator CE07*/

   //Problem BMI Calucator: 
   //searching through the html document for the buttons ID this adds a click function to the button to start the calculation
   document.querySelector("#bmiCalc").addEventListener("click", function(e){
        //this conditional statement checks to make sure the values inputed by the user are valid and work correct and are not left blank 
        if(document.querySelector("#heightInFeet").reportValidity() &&
           document.querySelector("#heightInInches").reportValidity() &&
           document.querySelector("#weight").reportValidity())
           {
            //using variables I pulled and stored the value entered in by the user on the web page 
            let heightInFeet = parseInt(document.querySelector("#heightInFeet").value); //this is for height in feet input
            let heightInInches = parseFloat(document.querySelector("#heightInInches").value); //this is for height in inches input
            let weightInPounds = parseFloat(document.querySelector("#weight").value); //this is for the users weight input
            
            let feetToInches = heightInFeet * 12; //to change feet to inches we take the value entered by the user and multiple it by 12 
            let totalHeight = feetToInches + heightInInches; // total height calculates the feet plus the inches together entered by the user 
            
            let bmi = (weightInPounds / (totalHeight * totalHeight)) * 703; // to calculate the bmi i took the total height varible and multiplied it by itself for the square value and then divided that by the weight and multiplied it by 703
            if(bmi < 18.5) 
            { // the first if statement checks if the user bmi is less than 18.5 and changes text in the H1 with the id calculateBmi and sets a source for the image and makes it visible if the statement is true
              //the appropriate text is to display the user is under weight and the image src changed to the underWeight image src  
                document.querySelector("#calculatedBmi").innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in the under weight range for adults your height`;
                document.querySelector("#bmiGraphic").style.visibility = "visible";
                document.querySelector("#bmiGraphic").src = "IMG/underWeight.jpg";
            } else if(bmi >= 18.5 && bmi < 24.9)
            { // the second if statement test if the users bmi is greater than or equal to 18.5 and less than 24.9 and changes the text in the H1 tag and displayed the appropriate img src and makes the img visible
              // the appropriate image and text should display the user is in the normal or healthy range and the image src should change to healthyWeight.jpg
                document.querySelector("#calculatedBmi").innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in the normal or healthy weight range for adults your height`;
                document.querySelector("#bmiGraphic").style.visibility = "visible";
                document.querySelector("#bmiGraphic").src = "IMG/healthyWeight.jpg";
            } else if(bmi >= 24.9 && bmi <29.9)
            {// the third if statement test if the users bmi is greater than or equal to 24.9 and less than 29.9 and changes the H1 tag and the img src to the appropriate text and image
             // the text should display the user is over weight the img src should change to the overWeight img 
                document.querySelector("#calculatedBmi").innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in the over weight range for adults your height`;
                document.querySelector("#bmiGraphic").style.visibility = "visible";
                document.querySelector("#bmiGraphic").src = "IMG/overWeight.jpg";
            } else if(bmi >= 29.9 && bmi < 35)
            { // the forth if statement text if the users bmi is greater than or equal to 29.9 and less than 35 and changes the H1 tag and the image src to the appropriate text and image
              // the text displayed the user is obese for their height and the img src changes to the obeseWeight img 
                document.querySelector("#calculatedBmi").innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in the obese weight range for adults your height`;
                document.querySelector("#bmiGraphic").style.visibility = "visible";
                document.querySelector("#bmiGraphic").src = "IMG/obeseWeight.jpg";

            } else if(bmi >= 35)
            { // the lest if statement test if the users bmi is greater than or equal 35 and the text will display the user is extreme obese and it will change the image src to the extremeobese img
                document.querySelector("#calculatedBmi").innerHTML = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in the extreme obese weight range for adults your height`;
                document.querySelector("#bmiGraphic").style.visibility = "visible";
                document.querySelector("#bmiGraphic").src = "IMG/extremeObeseWeight.jpg";
            }
           }
   });