let age = prompt("Please Enter any where value of age :");
if(age>=25){
    alert(age + "year ago");
    console.log(age + "adult");
    document.getElementById("hContent").innerHTML=age + " Adut age";
}else if(age<=20){
    alert(age + "year ago");
    document.getElementById("hContent").innerHTML=age + " Baby age";
}else{
    alert("Error");
    document.getElementById("hContent").innerHTML= "Error";
}


