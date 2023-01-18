<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
<title>James Avocats equipe</title>

<link rel="stylesheet" href="menustyle/menustyle.css">
 <link rel="stylesheet" href="menustyle/menustyle1110.css">
 <link rel="stylesheet" href="menustyle/menumobile.css">


 

 <link rel="stylesheet" href="avocatprofil/passelac.css">
 <link rel="stylesheet" href="avocatprofil/passelacmobile.css">



 <link rel="stylesheet" href="footercss.css">

 <link rel="stylesheet" href="equipe.css">
 <link rel="stylesheet" href="equipemobile.css">

</head>
<body>


<?php

$link='equipe.php';

include "menueng.php"; 
?>


<img src="images/photoensembleavocat.jpeg" alt ="photo1" class="photoensemble reveal" > 



<div id="thirdpartbis">

<div id="posterwrap">

<div id="posterensemble">

<div id="poster1" class="poster1reveal" onclick="Passelac()">
<img src="images/passelac.jpeg" alt ="photo1" class="photoavocat" > 
    <div id=name1>
<h4 class="firstname">Anne-Charlotte</h4><h4 class="surname"> PASSELAC</h4>
   
<h5>Partner</h5>
</div>
</div>



<div id="poster1" class="poster1reveal2" onclick="lavergne()">
<img src="images/lavergne.jpeg" alt ="photo1" class="photoavocat" > 

  <div id=name2>
<h4 class="firstname">Anne-Laure</h4><h4 class="surname"> LAVERGNE</h4>
  
<h5>Partner</h5>

</div>
</div>



<div id="poster1"  class="poster1reveal3" onclick="elodie()">
<img src="images/pinet.jpeg" alt ="photo1" class="photoavocat" > 
<div id=name3>
<h4 class="firstname">Elodie</h4><h4 class="surname"> PINET</h4>

<h5>Partner</h5>
</div>
</div>



<div id="poster1" class="poster1reveal4" onclick="mery()">
<img src="images/mery.jpeg" alt ="photo1" class="photoavocat" > 
<div id=name4>
<h4 class="firstname">Antoine</h4><h4 class="surname"> MERY</h4>

<h5>Associate</h5>
</div>
</div>




<div id="poster1" class="poster1reveal4" onclick="cusset()">
<img src="images/ousset.jpeg" alt ="photo1" class="photoavocat" > 
<div id=name5>
<h4 class="firstname">Malika</h4><h4 class="surname"> CUSSET</h4>

<h5>Legal assistant</h5>
</div>
</div>




</div>



 

</div>


</div>




<?php
include "avocatprofil/passelaceng.php";
 include "avocatprofil/lavergneeng.php";
 include "avocatprofil/elodieeng.php";
 include "avocatprofil/meryeng.php";
 include "avocatprofil/cusseteng.php";

?>




 

<div id="nospartenaires">
<p>Our partners :</p>

<img id="revo" src="images/revoavocat.png" alt ="revo" > 

</div>

<div id="verticallinepart"></div>


 




<?php
  include "footereng.php"; 
?>

<script src="menustyle/scriptmenu.js"></script>
<script src="equipeswitch.js"></script>

<script src="menucolor/equipecolor.js"></script>

<?php

if(isset($_GET['avo'])){

if($_GET["avo"]=='lavergne'){
  
echo '<script>lavergne();   document.getElementById("titreavocat2").scrollIntoView();</script>';

}


if($_GET["avo"]=='elodie'){
  
  echo '<script>elodie();  document.getElementById("titreavocat3").scrollIntoView();</script>';
  
  }


  if($_GET["avo"]=='antoine'){
  
    echo '<script>mery();  document.getElementById("titreavocat4").scrollIntoView();</script>';
    
    }

    if($_GET["avo"]=='malika'){
  
      echo '<script>cusset();  document.getElementById("titreavocat5").scrollIntoView();</script>';
      
      }



    }
?>



</body>

</html>