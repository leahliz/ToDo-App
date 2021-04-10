$(document).ready(function(){

    var xhttp=new XMLHttpRequest();
    var url="https://jsonplaceholder.typicode.com/todos";
xhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
   var response=JSON.parse(this.response);
   console.log(response);
   var output="";
   for (var i=0; i<response.length; i++){if(response[i].completed==false){
    output +="<th>"+"<input type=\"checkbox\" id="+i+" onclick=\"checkbox_check("+i+");\">"+"</input>"+"</th>";
}
else{
output+= "<th>"+"<input type=\"checkbox\" checked disabled>"+"</input>"+"</th>";
}
      output += "<th>"+response[i].title +"</th><br>" ;
      
      
   }

   document.getElementById("list").innerHTML=output;
   
}
}
xhttp.open("GET",url,true);
xhttp.send();

  var count=0;
  
  function checkbox_check(y){
      var checkbox=document.getElementById(y);
      var promise=new Promise(function(resolve,reject){
          if(checkbox.checked==true)
          resolve();
          else 
          reject();
      })
  }
  
 
  checkbox_check(y).then(function(){
     ++count;
     display(count);
 })  
  .catch(function(){
      display(count);
  })
  function display(c){
      if(c==5)
      alert("Successfully completed five tasks");
  }    
 console.log(count);
});