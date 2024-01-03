document.write("28. to check whether two given integer values are in the range 50..99"+"<br>");
function test28(m,n){
    if((n>=50 && n<=99) || (m>=50 && m<=99)){
        return true;
    }
    return false;
}
document.write("The numbers are :30,50, Ans :"+test28(30,50)+"<br>");
document.write("The numbers are :60,80, Ans :"+test28(60,80)+"<br>");
document.write("The numbers are :40,100, Ans :"+test28(40,100)+"<br><br>")