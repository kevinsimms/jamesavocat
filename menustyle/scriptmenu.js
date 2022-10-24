var tog=0;


function toggle(){

    if(tog==0){
        
         /* var toggled= document.getElementById("togglemenu");
        toggled.style.display="block"; */

        var toggled2= document.getElementById("line");
        toggled2.style.border="1px solid #FFFFFF";
        toggled2.style.transform="rotate(45deg)"; 
        toggled2.style.marginTop ="15px";
        toggled2.style.transitionDuration = "0.8s";

        var toggled3= document.getElementById("line2");
        toggled3.style.opacity="0";
        toggled3.style.transitionDuration = "0.8s";

        var toggled4= document.getElementById("line3");
        toggled4.style.border="1px solid #FFFFFF";
        toggled4.style.transform="rotate(-45deg)"; 
        toggled4.style.transitionDuration = "0.8s";

        
       

        var toggled5= document.getElementById("togglemenu");
        toggled5.style.marginLeft = "-10px";
        toggled5.style.transitionDuration = "0.8s";
    
        
        tog=1; 

       /*  var toggled= document.getElementById("button");
        toggled.style.backgroundColor="red"; */
    }
    else{
       
        var toggled5= document.getElementById("togglemenu");
        toggled5.style.marginLeft = "-501px";
        toggled5.style.transitionDuration = "0.8s";

        var toggled2= document.getElementById("line");
        toggled2.style.border="1px solid #000000";
        toggled2.style.transform="rotate(0deg)";
        toggled2.style.marginTop ="4px";
        toggled2.style.transitionDuration = "0.8s";

        var toggled3= document.getElementById("line2");
        toggled3.style.opacity="1";
        toggled3.style.transitionDuration = "0.8s";

        var toggled4= document.getElementById("line3");
        toggled4.style.border="1px solid #000000";
        toggled4.style.transform="rotate(0deg)"; 
        toggled4.style.transitionDuration = "0.8s";







        tog=0; 
    }


}























window.onresize = resizing; 


function resizing(){

   


    if(window.innerWidth>1120){
        document.getElementById("togglemenu").style.marginLeft = "-501px";

     



    }

    if(window.innerWidth<1120){
        var toggled2= document.getElementById("line");
        toggled2.style.border="1px solid #000";
        toggled2.style.transform="rotate(0deg)";
        toggled2.style.marginTop ="4px";
        toggled2.style.transitionDuration = "0.8s";

        var toggled3= document.getElementById("line2");
        toggled3.style.opacity="1";
        
        toggled3.style.transitionDuration = "0.8s";

        var toggled4= document.getElementById("line3");
        toggled4.style.border="1px solid #000";
        toggled4.style.transform="rotate(0deg)"; 
        toggled4.style.transitionDuration = "0.8s";

     



    }



}

resizing();