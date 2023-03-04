let fname=document.getElementById("fname");
let password=document.getElementById("password");

function login(){
    if(fname.value=="pavi"&& password.value=="1234p")
    {
      alert("Welocme to kitchen story "+fname.value +"\n Happy Eating");
      location.href="homepage.html";
    }
    else if(fname.value=="admin"&&password.value=="admin")
    {
        location.href="login.html";
    }
    else{
        alert("Login not successfull \n please try again "+fname.value);
        location.href="login.html";
    }
}

let search=document.getElementById("search");
function searchfunc()
{
    if(search.value=="burger")
    {
        location.href="burger.html";
    }
   else if(search.value=="pasta")
    {
        location.href="pasta.html";
    }
   else if(search.value=="milkshake")
    {
        location.href="milkshake.html";
    }
    else{
        alert("please type a valid food available");
        location.href="homepage.html";
    }
}

function back()
{
    location.href="homepage.html";
}

function logout()
{
    alert("you have successfully logged out \n  please login");
    location.href="login.html";
}

let pasta1_p=90;
let pasta2_p=100;
let pasta1_q=0;
let pasta2_q=0;
let bill_b1="";
let bill_b2="";
let i=0;
let j=0;
let k=0;

document.getElementById("pasta1").addEventListener("click",function()
{
while(j<1)
{
    i=i+1;
    j=j+1;
}if(this.value==""||this.value==0)
{
    i=i-1;
    j=0;
    pasta1_q=0;
    bill_b1="";
    printbill()
}
else
{
    pasta1_q=document.getElementById("pasta1").value;
    bill_b1="<tr><td>White Sauce Pasta</td><td>"+pasta1_q+"</td><td>"+pasta1_p*pasta1_q+"</td></tr>"
printbill();
}
});

document.getElementById("pasta2").addEventListener("click",function()
{
while(k<1)
{
    i=i+1;
    k=k+1;
}if(this.value==""||this.value==0)
{
    i=i-1;
    k=0;
    pasta2_q=0;
    bill_b2="";
    printbill()
}
else
{
    pasta2_q=document.getElementById("pasta2").value;
    bill_b2="<tr><td>cherry spinach pasta</td><td>"+pasta2_q+"</td><td>"+pasta2_p*pasta2_q+"</td></tr>"
printbill();
}
});
function printbill(){
    document.getElementById("cartvalue").innerHTML=bill_b1+bill_b2;
    document.getElementById("amount").innerText=pasta1_p*pasta1_q+pasta2_p*pasta2_q;
    document.getElementById("count").inert=i;
}
function checkout()
{
    
   alert("your order bill amount is "+(pasta1_p*pasta1_q+pasta2_p*pasta2_q));

    location.href="order-confirmation.html";
}
