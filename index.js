
       function validate(){
    var user=document.getElementById("username");
    var pass=document.getElementById("password");

function valUser(user,valPass,redirect){
    if(user.value=="admin"){
        valPass();
    }
   if(user.value!="admin")
   alert("invalid username");
   
}

function valPass(){
let reg=12345;
    if(pass.value==reg){
    redirect();
}}
function redirect(){
 
    var red=document.getElementById("re");
    red.setAttribute("action","home.html");
    
}
valUser(user,valPass());

}