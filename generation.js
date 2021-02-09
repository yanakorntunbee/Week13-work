function myHello(){
    let a = "Hello";
    console.log(a); // Black End
    document.getElementById("hContent").innerHTML=a; // Front End
}
myHello();
function myGeneration(){
    let gen = prompt("Please Enter of age");
    if(gen>2553 && gen<=2564){
        console.log(gen + "Gen Alpha"); //Black end
        document.getElementById("hContent").innerHTML=gen + " = Gen Alpha"; //Front End
    }else if(gen>=2540 && gen<=2553){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Gen z";
    }
    else if(gen>=2522 && gen<2540){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Gen Y";
    }
    else if(gen>=2507 && gen<2522){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Gen X";
    }
    else if(gen>=2488 && gen<2507){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Baby Boomer";
    }else if(gen>=2468 && gen<2488){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Silent Generation";
    }else if(gen>=2444 && gen<2467){
        console.log(gen + "Gen z");
        document.getElementById("hContent").innerHTML=gen + " = Greatest Generation";
    }else{
        console.log("Error");
        document.getElementById("hContent").innerHTML="ERROR";
    }
}
myGeneration();