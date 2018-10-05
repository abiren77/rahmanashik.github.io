if('serviceWorker' in navigator){
    try {
        navigator.serviceWorker.register('sw.js');
        console.log('service worker registered')
    } catch (error) {
        console.log(error);
    }
}

function calculateCalories(){
    var gender_radio = document.getElementsByName("optradio");
    var gender=null;
    for (var i = 0, length = gender_radio.length; i < length; i++)
    {
        if (gender_radio[i].checked)
        {
            gender = gender_radio[i].value;
            break;
        }
    }

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var activity_combo = document.getElementById("activity_level");
    var activity = activity_combo.options[activity_combo.selectedIndex].value;
    if(weight=="" && height=="" && age==""){
        alert("Please fill in the entire form");
        return;
    }

    var daily_need = 0;
    var energyfactor = 0
    if(activity=="Sedentary"){
        energyfactor=1.2;
    }else if(activity=="Moderately Active"){
        energyfactor=1.3;
    }else if(activity=="Active"){
        energyfactor=1.4;
    }
    console.log(weight);
    console.log(height);
    console.log(age);
    console.log(energyfactor);
    console.log(gender);
    console.log(activity)
    //10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age - 161; 
    //for males= 10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age + 5
    if(gender === "male"){
        daily_need = ((10*parseFloat(weight))+(6.25*parseFloat(height))-(5*parseInt(age))+5)*energyfactor;
    }else{
        daily_need = ((10*parseFloat(weight))+(6.25*parseFloat(height))-(5*parseInt(age))-161)*energyfactor;
    }

    var result_div = document.getElementById('result');
    result_div.innerHTML = "You require "+ daily_need.toString()+" calories per day";
    result_div.style.display = "block";
}
