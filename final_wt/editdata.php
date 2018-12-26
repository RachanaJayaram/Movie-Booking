<?php
extract($_GET);
$display=str_replace(" ","_",$moviename);
$moviename=$display;
$seats=explode(",",$seats);
$count=0;
foreach($seats as $number=>$seatnumber)
{
    $count+=1;
}
$db=mysqli_connect('localhost:3306','root','','MOVIES');
if(isset($db))
{
  for($i=0;$i<$count;$i++)
  {
    $str="SELECT * FROM ".$moviename." WHERE seatname ='".$seats[$i]."';";
    $res=mysqli_query($db,$str);
    if(mysqli_num_rows($res)==1)
    {
      $altering="UPDATE ".$moviename." SET status='OCCUPIED' WHERE seatname='".$seats[$i]."';";
      $query=mysqli_query($db,$altering);
    }
  }
  header('Location:Thenks.html');
}
?>
