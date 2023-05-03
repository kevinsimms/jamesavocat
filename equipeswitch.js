













var togl=0;
var togl2=0;
var togl3=0;
var togl4=0;
var togl5=0;
var togl6=0;
var togl7=0;

var pos="pass";

function Passelac(){

   
    
    if(togl==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";

        document.getElementById("flechegauche").style.display="none";
        document.getElementById("flechedroite").style.display="none";
       
        document.getElementById("name1").style.color="black";

        document.getElementById("nospartenaires").style.marginTop="300px";
       togl=1; 

       togl2=0; 
       togl3=0;
       togl4=0;
       togl5=0;
       togl6=0;
       togl7=0; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap")[0].style.display="grid";
    document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap7")[0].style.display="none";


    document.getElementById("name1").style.color="rgb(255, 170, 70)";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="black";


        document.getElementById("nospartenaires").style.marginTop="0px";


    document.getElementById("flechegauche").style.display="block";
    document.getElementById("flechedroite").style.display="block";

pos="pass";

       togl=0; 

       togl2=0; 
       togl3=0;
       togl4=0;
       togl5=0;
       togl6=0;
       togl7=0; 
   }


   







}



function lavergne(){

   
    
    if(togl2==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="none";
       

        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="rgb(255, 170, 70)";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="black";




        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";

        document.getElementById("nospartenaires").style.marginTop="0px";

pos="lav";

      
       togl=1; 
       togl2=1; 
       togl3=0;
       togl4=0;
       togl5=0;
       togl6=0;
       togl7=0; 
      

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap2")[0].style.display="none";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";

    document.getElementById("name2").style.color="black";

    document.getElementById("nospartenaires").style.marginTop="300px";

    togl=1; 
       togl2=0; 
       
       togl3=0;
       togl4=0;
       togl5=0;
       togl6=0;
       togl7=0; 

       
   }

}






function elodie(){

   
    
    if(togl3==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="none";
   
        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="rgb(255, 170, 70)";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="black";

        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";


        document.getElementById("nospartenaires").style.marginTop="0px";


        
pos="elo";

togl=1;
togl2=0;
togl3=1;
togl4=0;
       togl5=0;
       togl6=0;
       togl7=0;  

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap3")[0].style.display="none";


    document.getElementById("name3").style.color="black";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";

    document.getElementById("nospartenaires").style.marginTop="300px";


    togl=1;
    togl2=0;
    togl3=0;
    togl4=0;
       togl5=0;
       togl6=0;
       togl7=0;  
   }

}



function mery(){

   
    
    if(togl4==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="none";
   
        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="rgb(255, 170, 70)";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="black";

        

        document.getElementById("flechegauche").style.display="block";
    document.getElementById("flechedroite").style.display="block";



    document.getElementById("nospartenaires").style.marginTop="0px";

pos="mery";

togl=1;
togl2=0;
togl3=0;
togl4=1;

       togl5=0; 
       togl6=0;
       togl7=0; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap4")[0].style.display="none";


    document.getElementById("name4").style.color="black";


    document.getElementById("nospartenaires").style.marginTop="300px";


    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";

    togl=1;
    togl2=0;
    togl3=0;
    togl4=0;
       togl5=0; 
       togl6=0;
       togl7=0; 
   }

}


function cusset(){

   
    
    if(togl5==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="none";
   
       
        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="rgb(255, 170, 70)";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="black";



        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";


        document.getElementById("nospartenaires").style.marginTop="0px";


pos="cus";

togl=1;
togl2=0;
togl3=0;
togl4=0;
       togl5=1; 
       togl6=0;
       togl7=0; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap5")[0].style.display="none";


    document.getElementById("name5").style.color="black";


    document.getElementById("nospartenaires").style.marginTop="300px";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";


togl=1;
togl2=0;
togl3=0;
togl4=0;
       togl5=0; 
       togl6=0;
       togl7=0; 
   }

}






function vallade(){

   
    
    if(togl6==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="none";
   
       
        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="rgb(255, 170, 70)";
        document.getElementById("name7").style.color="black";



        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";


        document.getElementById("nospartenaires").style.marginTop="0px";


pos="val";

togl=1;
togl2=0;
togl3=0;
togl4=0;
togl5=0;
       togl6=1; 
       togl7=0;

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap6")[0].style.display="none";


    document.getElementById("name6").style.color="black";


    document.getElementById("nospartenaires").style.marginTop="300px";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";


togl=1;
togl2=0;
togl3=0;
togl4=0;
       togl5=0; 
       togl6=0; 
       togl7=0; 
   }

}





function abdelmoumene(){

   
    
    if(togl7==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap6")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap7")[0].style.display="grid";
   
       
        document.getElementById("name1").style.color="black";
        document.getElementById("name2").style.color="black";
        document.getElementById("name3").style.color="black";
        document.getElementById("name4").style.color="black";
        document.getElementById("name5").style.color="black";
        document.getElementById("name6").style.color="black";
        document.getElementById("name7").style.color="rgb(255, 170, 70)";



        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";


        document.getElementById("nospartenaires").style.marginTop="0px";


pos="abdel";

togl=1;
togl2=0;
togl3=0;
togl4=0;
togl5=0;
togl6=0;
       togl7=1; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap7")[0].style.display="none";


    document.getElementById("name7").style.color="black";


    document.getElementById("nospartenaires").style.marginTop="300px";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";


togl=1;
togl2=0;
togl3=0;
togl4=0;
       togl5=0; 
       togl6=0;
       togl7=0; 
   }

}







function right(){

   


   
    switch (pos) {
      case 'pass':
     
        lavergne();
        break;
      case 'lav':
    
        elodie();

       
        break;
        case 'elo':
    mery();
       
        break;
        case 'mery':
    cusset();
       
        break;

        case 'cus':
            vallade();
        
        
        break;

        case 'val':
            abdelmoumene();
        
        
        break;

        case 'abdel':
            Passelac();
        
        
        break;


      default:
        alert('not found');
    }





} 





function left(){

   


   
    switch (pos) {
      case 'pass':
        abdelmoumene();
        
        break;

        case 'abdel':
        vallade();
        
        break;

        case 'val':
            cusset();
            
            break;


      case 'lav':
    
        
        
        Passelac();
        break;
        case 'elo':
           
            lavergne();
       
        break;
        case 'mery':
            elodie();
 
       
        break;

        case 'cus':
           
            mery();
        
        
        break;
      default:
        alert('not found');
    }





} 



document.addEventListener('keydown', (event) => {
    var name = event.key;
    
    if(name=="ArrowRight"){right();}
    if(name=="ArrowLeft"){left();}
   
  }, false);






 