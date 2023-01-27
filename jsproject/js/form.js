
 
let sendbtn=document.getElementsByClassName("submitform")[0];

sendbtn.onclick=function(){
  localStorage.setItem('username',document.getElementsByName("username")[0].value);
  
 
 location.href="http://127.0.0.1:5500/html/game.html";
}

  
  

 // 


  
 
     
