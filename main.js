function check()
{
    var num1= Number(document.getElementById("num1").value);
    if (num1<13){
            document.getElementById("display").innerHTML=num1+ " years is a child";
    }
    else if (num1<20) {
            document.getElementById("display").innerHTML=num1+"  years is a teenager";
    }
    else if(num1<60){
            document.getElementById("display").innerHTML=num1+"  years is an adult";
    }
    else if(num1>60){
            document.getElementById("display").innerHTML=num1+" years is a senior";
    }

}