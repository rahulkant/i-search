<!DOCTYPE html>
<html lang="en">
<head>
  <title>Search Engine</title>
  <link rel="shortcut icon" href="logo.ico" type="image/logo.ico"/>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<style>
    
    #div {
/*        background-color: rgb(128,128,128);
*/        /*background: linear-gradient(to bottom right, red, yellow);*/

    }

    #form {
        margin-left: 200px;
        margin-top: 30px;
        margin-bottom: 10px;
        
    }

    body {
        background: url('bkg.jpg') no-repeat center fixed; 
        background-size: cover;
        /*opacity: 0.6;*/
    }


a:link    {
  color:#0066ff; background-color:transparent; text-decoration:none
}

a:visited {
  color:#1a1aff; background-color:transparent; text-decoration:none
}
a:hover   {
  color:#ff0000; background-color:transparent; text-decoration:underline
}
a:active  {
  color:#cc00cc; background-color:transparent; text-decoration:underline
}
  
  #link {

    font-family: helvetica;
    font-size: 20px;

  }
  #grad {
  /*background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left top, red, yellow); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(bottom right, red, yellow); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(bottom right, red, yellow); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to bottom right, #D3D3D3, white); /* Standard syntax */
   /* Standard syntax */
  background: linear-gradient(to right,#D3D3D3,white,#D3D3D3); 
}

</style>
</style>
</head>
<body>
<!-- <div  id="div" class="container-fluid" style="position: fixed;">
  <form role="form" id="form" class="form-inline" action="search_output1.php" method="POST">
    <div class="form-group">
      <input type="search" class="form-control input-lg" style="width:400px;" name="input" placeholder="Enter query.." .required autofocus>
    </div>
    <button type="submit" class="btn btn-info btn-lg">
    <span class="glyphicon glyphicon-search"></span> Search</button>
  </form>
</div> -->


<div id="design" style="position: absolute; top: 50px; left: 350px; width: 80%%;">
  <img src="logo.png">
</div>

<div id="grad" class="container" style="position: fixed;background-color: #D3D3D3; width: 100%" >
  <form role="form" id="form" action="search_output1.php" method="POST">
    <div class="row">
      <label for="text"></label>
      <div class="col-sm-6">
      <input type="text" class="form-control input-lg" style="width:400px;" name="input" value="<?php echo $_POST['input']; ?>" required autofocus>
      </div>
      
<div class="col-sm-2">
      <select class="form-control" id="sel1" name="operator" style="margin-bottom: 1px">Operator
        <option>And</option>
        <option>Or</option>
        <option>Phrase</option>
        <option>Fuzzy</option>
      </select>
</div>

<div class="col-sm-2">
      <select class="form-control" id="sel1" name="option" style="margin-bottom: 1px">Option
        <option>everywhere</option>
        <option>pdf</option>
        <option>doc</option>
        <option>zip/exe</option>
        <option>jpg</option>
        <option>form</option>
      </select>
</div>

    </div>
    <button type="submit" class="btn btn-info" style="margin-top: 4px;">
    <span class="glyphicon glyphicon-search"></span> Search</button>
  </form>
</div>

<div  class="span2" style="position: fixed; 
    top:122px;
    right: 30px;">
        <div class="footer-list" >
          <h3 align="center"><strong>Quick Links</strong></h3>
          <ul style="font-size: 20px;">
            <a href="http://intranet.iitg.ernet.in/">
              <li>Intranet</li>
            </a>
            <a href="https://webmail.iitg.ernet.in/">
              <li>Webmail</li>
            </a>
            <a href="http://www.iitg.ernet.in/acad/acadCal/academic_calander.htm">
              <li>Acad Calendar</li>
            </a>
            <a href="http://www.iitg.ac.in/aa/pages/campusmap/index.php?hq">
              <li>Campus Map</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
          </ul>
        </div>
      </div>

     <br >
     <br >
     <br >
     <br >
     <br >
     <br >
     <br >
<?php
if(isset($_POST['input']))
{
  $query = $_POST['input'];

  if(isset($_POST['operator'])){
    $operator=$_POST['operator'];
    //echo $operator.  "r>";
    if($operator == 'And'){
      $operator = 1;
    }
    if($operator == 'Or'){
      $operator = 2;
    }
    if($operator == 'Phrase'){
      $operator = 3;
    }
    if($operator == 'Fuzzy'){
      $operator = 4;
    }
  }
  
  if(isset($_POST['option'])){
    $option=$_POST['option'];
    //echo $option."<br>";
    if($option == 'everywhere'){
      $option = 1;
    }
    if($option == 'pdf'){
      $option = 2;
    }
    if($option == 'doc'){
      $option = 3;
    }
    
    if($option == 'zip/exe'){
      $option = 4;
    }
    if($option == 'jpg'){
      $option = 5;
    }
    if($option == 'form'){
      $option = 6;
    }

  }
 /* echo $option."<br>";
  echo $operator."<br>";

  echo $query."<br>";*/

$a = array();

$command = 'python3 search.py ' . $option . ' ' . $operator . ' ' . $query;
exec($command, $a);
//echo $a[0];
//var_dump($a[0]);
//echo $a[0];
$n = count($a);

//echo $n;

$link =  array();
$title =  array();
$nl = count($link);
$nt = count($title);


/*$command = 'python3 search.py $option $operator $query';
$temp = shell_exec($command);
$resultData = json_decode($temp, true);
echo $resultData . "<br >";*/

/*function getContents($str, $startDelimiter, $endDelimiter) {
  $contents = array();
  $startDelimiterLength = strlen($startDelimiter);
  $endDelimiterLength = strlen($endDelimiter);
  $startFrom = $contentStart = $contentEnd = 0;
  while (false !== ($contentStart = strpos($str, $startDelimiter, $startFrom))) {
    $contentStart += $startDelimiterLength;
    $contentEnd = strpos($str, $endDelimiter, $contentStart);
    if (false === $contentEnd) {
      break;
    }
    $contents[] = substr($str, $contentStart, $contentEnd - $contentStart);
    $startFrom = $contentEnd + $endDelimiterLength;
    
  }

  return $contents;
}
$sample = $temp ;
print "<br>";
$all_links = getContents($sample, '####', '####') ;
$all_titles = getContents($sample, '&&&&', '&&&&') ;

        $array3 = array_combine($all_links, $all_titles);

foreach($array3 as $lin => $titl){
  echo '<p id="link">';
  echo "<a href='" . $lin. "' target='_blank'>" . "     ".$titl. "</a><br />";
  echo "   ".$lin;
 echo "<p >";
}
echo "</div>";*/



$n = count($a);

//echo $n;
//echo $a[0] . "<br>";
$link =  array();
$title =  array();

echo "<div>";

if($n% 2 != 0){
for ($i=0; $i < $n-7; $i++) { 

  if($i % 2 == 0){
    $title[] = $a[$i];
    //echo $title[$i/2]."<br >";
  }
  if($i % 2 != 0){
    $link[] = $a[$i];
    //echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}
}
else  {
  //echo $a[0] . "<br>";
  for ($i=1; $i < $n-5; $i++) { 

  if($i % 2 != 0){
    $title[] = $a[$i];
    //echo $title[$i/2]."<br >";
  }
  if($i % 2 == 0){
    $link[] = $a[$i];
    //echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}

  # code...
}

for ($i=$n-6; $i < $n; $i++) { 

  if($i % 2 == 0){
    $title[] = $a[$i];
    //echo $title[$i/2]."<br >";
  }
  if($i % 2 != 0){
    $link[] = $a[$i];
    //echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}

//$array3 = array_combine($title, $link);


if ($n % 2 != 0 ) {

  for ($i=0; $i < ($n/2)-3; $i++) { 
  echo '<p id="link">';
  echo "<a href='" . $link[$i]. "' target='_blank'>" .$title[$i]. "</a><br />";
  echo "   ".$link[$i];
  echo "<p >";
    # code...
  }

  echo "Suggestions" . "<br >";
echo $a[$n-7].  "<br>";

for ($i=($n/2)-4; $i < $n/2; $i++) { 
    echo '<p id="link">';
  echo "<a href='" . $link[$i]. "' target='_blank'>" . "     ".$title[$i]. "</a><br />";
  echo "   ".$link[$i];
  echo "<p >";
    # code...
  }

  # code...
}
else {
      echo $a[0]. "<br>";
  for ($i=1; $i < ($n/2)-3; $i++) { 
   
  echo '<p id="link">' . "<a href='" . $link[$i]. "' target='_blank'>" .$title[$i]. "</a><br />";
  echo "   ".$link[$i] . "<p >";
 
    # code...
  }

  echo "Suggestions" . "<br >";
echo $a[$n-7].  "<br>";

for ($i=($n/2) -4; $i < $n/2; $i++) { 
    echo '<p id="link">';
  echo "<a href='" . $link[$i]. "' target='_blank'>" . "     ".$title[$i]. "</a><br />";
  echo "   ".$link[$i];
  echo "<p >";
    # code...
  }

}
echo "</div>";



/*echo "Suggestions" . "<br >";
echo $a[$n-7].  "<br>";
foreach($array3 as $titl => $lin){
  echo '<p id="link">';
  echo "<a href='" . $lin. "' target='_blank'>" . "     ".$titl. "</a><br />";
  echo "   ".$lin;
  echo "<p >";
}*/

}

?>

<div i class="container" style="position: fixed; bottom: 0px; width: 100%;background-color: #f3f3f3;">
    <div class="row">
      <div class="copyright-content">
        <div class="span4">
          <p align="center">Search Engine <strong>i-search</strong> Limited &copy; 2016 All rights reserved.</p>
        </div>
          <div class="span4 offset4">
          <div class="copyright-list">
            <p align="center">Developed by : 
              <a href="https://www.facebook.com/rulesrk007" style="text-decoration: none;">
                Rahul Kant
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007814058253" style="text-decoration: none;">
                | Nilesh Vaishnav
              </a>
              <a href="https://www.facebook.com/rahulraj.gupta.52" style="text-decoration: none;">
                | Rahul Raj Gupta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>