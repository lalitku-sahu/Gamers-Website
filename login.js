var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
    
var username=document.getElementById("username");
var password=document.getElementById("password");
message.onclick=function()  
{
    alert("You are logged in succesfully");
}     
  
var registermessage=document.getElementById("registermessage");
registermessage.onclick=function()  
{
    alert("You have been registered succesfully");
}  

var forgot=document.getElementById("forgot");
forgot.onclick=function()      
{
    alert("You have forgotten your password");
}     
