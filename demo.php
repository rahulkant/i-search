<?php
  $option = 1;
  $operation = 1;
  $query = "sanjay bose";


$command = 'python3 search.py ' . $option . ' ' . $operation . ' ' . $query;

$a = array();
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


if($n% 2 != 0){
for ($i=0; $i < $n-7; $i++) { 

  if($i % 2 == 0){
    $title[$i/2] = $a[$i];
    echo $title[$i/2]."<br >";
  }
  else{
    $link[($i/2) + 1] = $a[$i];
    echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}
}
else  {
  echo $a[0]."<br>";
  for ($i=1; $i < $n-7; $i++) { 

  if($i % 2 != 0){
    $title[$i/2] = $a[$i];
    echo $title[$i/2]."<br >";
  }
  else{
    $link[($i/2) + 1] = $a[$i];
    echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}

  # code...
}

//echo "Suggestions" . "<br >";
echo $a[$n-7]."<br>";
for ($i=$n-6; $i < $n; $i++) { 

  if($i % 2 == 0){
    $title[$i/2] = $a[$i];
    echo $title[$i/2]."<br >";
  }
  else{
    $link[($i/2) + 1] = $a[$i];
    echo $link[($i/2) + 1] . "<br >";
  }
  # code...
}
echo $n ,"<br>";
echo $nl ,"<br>";
echo $nt ,"<br>";

/*$temp = shell_exec($command);
echo $temp . "<br >";*/
//echo "<br><br>";

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
    //$str =  $startDelimiter. $str;
  }

  return $contents;
}
$sample = $temp ;
print "<br>";
$all_links = getContents($sample, '####', '####') ;
$all_titles = getContents($sample, '&&&&', '&&&&') ;

        $array3 = array_combine($all_links, $all_titles);


foreach($array3 as $letter => $number){
            echo "$letter:$number <br />";
        }*/

/*foreach ($all_links as $link) {
	print trim($link) . "<br >";
}

foreach ($all_links as $link) {
  print trim($link) . "<br >";
}*/

//$result = json_decode($temp);
/*var_dump($temp);*/

/*$output = shell_exec("ls");
echo $output;*/

/*$a = array();
exec('python3 search.py ', $a);
//echo $a[0];
var_dump($a[0])*/



?>
