
//to display name
document.querySelectorAll("span")[1].innerText=localStorage.getItem("username");
console.log(localStorage.getItem("username"));

//selectors

let startbtn=document.getElementsByClassName("start")[0];
let gametime=document.querySelectorAll("span")[7];



const photos=["../img/bird1.gif","../img/bird2.gif","../img/bird3.gif"];

//create many birds
const createbirds=function(photos){
   setInterval(function(){
      let birdsnum=Math.floor(Math.random()*photos.length);
      let pic=document.createElement("img");
      pic.src=photos[birdsnum]; 
      pic.classList.add("bird");
      document.body.append(pic);
  
      moveRight(pic,0);
    
    },3000)
  
  }

// create bomm
let score=0;
let killed=0;
const createbomm=function(){

        
      let destroytool=document.createElement("img");
        destroytool.src="../img/bomb.png";
        destroytool.classList.add("bomb");
        document.body.append(destroytool);    
        destroytool.onclick=function(){

       
          let birds=  document.querySelectorAll(".bird");
          
          
          for(let i=0; i<birds.length;i++){
          
          
          if
           (120+birds[i].offsetLeft+birds[i].offsetWidth>destroytool.offsetLeft&&birds[i].offsetLeft+birds[i].offsetWidth<destroytool.offsetLeft+destroytool.offsetWidth+410&&
            120+birds[i].offsetTop+birds[i].offsetWidth>destroytool.offsetTop&&birds[i].offsetTop+birds[i].offsetWidth<destroytool.offsetTop+destroytool.offsetWidth+410
              )
            {
             
            
             
      

           if(birds[i].src.includes("/img/bird1.gif")){
            
            score+=5;
            killed++;
           }
           if(birds[i].src.includes("/img/bird3.gif")){
            
                score+=10;
                killed++;
           }
        
        
           if(birds[i].src.includes("/img/bird2.gif")){
            
              score-=15;
              killed++;
           }
           document.getElementsByClassName("score")[0].textContent=score;
           document.getElementsByClassName("killed")[0].textContent=killed;
           birds[i].remove();
            }//end big if
          
            
            
          }//end of for
     
       
           this.remove(); 
         } //end of onclick 
        
         moveDown(destroytool,0);
   
}//end of create bomm


// move birds
const moveRight=function(pic,left){
    pic.style.top=`${Math.floor(Math.random()*(window.innerHeight-pic.height))}px`;

    let id=setInterval(function(){
    
        left+=10;
    
        if(left<(window.innerWidth-pic.width))
        {
          pic.style.left=left+"px";
        }
        else
        {
           clearInterval(id);
          
          moveRight(pic,0);
     
    
        }
    
      },30);
}



//move bomb

const moveDown=function(destroytool,top){
    destroytool.style.left=`${Math.floor(Math.random()*(window.innerWidth-destroytool.width))}px`;

    let bomid=setInterval(function(){
    
        top+=10;
    
        if(top<(innerHeight-destroytool.height))
        { 
          destroytool.style.top=top+"px";
        }
        else
        {
           clearInterval(bomid);
          destroytool.remove();
         createbomm();
          
         
            
    
        }
    
      },100);
    
}








  

startbtn.onclick=function(){

    
            createbirds(photos);
            createbomm();

 
  
  var time=60;
  let gameid=setInterval(function(){
  
    
    if(time>0){
    
      time--;
      console.log(time);
      gametime.textContent=time;
    
    }else{
        if( time==0){
          gametime.textContent=time;
          clearInterval(gameid);
          
      
          playagain();

                  }  
       
    }
    
  },100)


}


const playagain=function(){
 // console.log("hhhh");
 let playdiv= document.createElement("div");
 let playbtn=document.createElement("button");
 playbtn.textContent="playagain";
 playbtn.classList.add("replay");

 playdiv.append(playbtn);
 //playbtn.style.display="none";
 let title= document.createElement("h3");
 title.classList.add("result");
 if(score>=50){
 
 title.textContent="you win";

 }else{
  if(score<50){
  title.textContent="you lose";}
 }
//title.textContent="you win";
 playdiv.append(title);
 document.body.append(playdiv);

 playbtn.onclick=function(){
  location.href="http://127.0.0.1:5500/html/game.html";
  
 }
 
 
}

