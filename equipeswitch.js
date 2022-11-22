var togl=0;
var togl2=0;
var togl3=0;
var togl4=0;
var togl5=0;

var pos="pass";

function Passelac(){

   
    
    if(togl==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";

        document.getElementById("flechegauche").style.display="none";
        document.getElementById("flechedroite").style.display="none";
       
       togl=1; 

       togl2=1; 
       togl3=0;
       togl4=1;
       togl5=1;

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap")[0].style.display="grid";
    document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
    document.getElementsByClassName("profilbigwrap5")[0].style.display="none";


    document.getElementById("flechegauche").style.display="block";
    document.getElementById("flechedroite").style.display="block";

pos="pass";

       togl=0; 

       togl2=0; 
       togl3=1;
       togl4=0;
       togl5=0;
   }


   







}



function lavergne(){

   
    
    if(togl2==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
       

        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";

pos="lav";

       togl2=1; 
       togl=1; 
       
       togl3=0;
       togl4=1;
       togl5=1;
      

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap2")[0].style.display="none";

    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";



    togl=0; 
       togl2=0; 
       
       togl3=1;
       togl4=0;
       togl5=0;

       
   }

}






function elodie(){

   
    
    if(togl3==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
   
       

        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";


pos="elo";

togl=1;
togl2=0;
togl3=1;
togl4=0;
       togl5=0; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap3")[0].style.display="none";


    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";


    togl=0;
    togl2=1;
    togl3=0;
    togl4=1;
       togl5=1; 
   }

}



function mery(){

   
    
    if(togl4==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="grid";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="none";
   
       

        document.getElementById("flechegauche").style.display="block";
    document.getElementById("flechedroite").style.display="block";


pos="mery";

togl=1;
togl2=0;
togl3=0;
togl4=1;

       togl5=0; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap4")[0].style.display="none";



    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";

    togl=0;
    togl2=1;
    togl3=1;
    togl4=0;
       togl5=1; 
   }

}


function cusset(){

   
    
    if(togl5==0){
        
        document.getElementsByClassName("profilbigwrap")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap2")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap3")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap4")[0].style.display="none";
        document.getElementsByClassName("profilbigwrap5")[0].style.display="grid";
   
       

        document.getElementById("flechegauche").style.display="block";
        document.getElementById("flechedroite").style.display="block";

pos="cus";

togl=1;
togl2=0;
togl3=0;
togl4=0;
       togl5=1; 

    
   }
   else{
      
      
    document.getElementsByClassName("profilbigwrap5")[0].style.display="none";


    document.getElementById("flechegauche").style.display="none";
    document.getElementById("flechedroite").style.display="none";


togl=0;
togl2=1;
togl3=1;
togl4=1;
       togl5=0; 
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
            Passelac()
        
        
        break;
      default:
        alert('not found');
    }





} 





function left(){

   


   
    switch (pos) {
      case 'pass':
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