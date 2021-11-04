
//challenge 1:your age in days
function love(){
var name1=document.getElementById("First").value;
var name2=document.getElementById("Second").value;
if(name1&&name2.length<=2){
  alert("Enter  The Valid Name ");
}
else{
  var random = Math.floor(Math.random()*100);
  document.getElementById("print").innerHTML=name1+"  "+"  and " + "  "+  name2  + "  " + " " +" are "+ "   " + random +"% "+  "  "+ "of " +"love" +"♥♥";
}
if(random<=50 || random<=80){
  document.getElementById("statement").innerHTML="good relationship🧸";
}
  else{
  document.getElementById("statement").innerHTML="lovely relationship😘😘";
}

if(random==0){
  document.getElementById("statement").innerHTML="Try to find new one😂";
}
}
