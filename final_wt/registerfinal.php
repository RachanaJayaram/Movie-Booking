<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="login.css" />
    <script src=""></script>
</head>
<?php
$display=" ";
if($_SERVER["REQUEST_METHOD"] == "POST")
{
      $display=" ";
      extract($_POST);
      $db=mysqli_connect('localhost:3306','root','','USERS');
      if(isset($db))
      {
        $str="SELECT * FROM USERS WHERE EMAIL='".$email."';";
        //echo $str;
        $res=mysqli_query($db,$str);
        if($email!='' && $phonenumber!='' && $password!='' && $password1!='')
          {
            error_reporting(E_PARSE);
            $phonenumber1=$phonenumber-0;
            if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
              $display = "<br><br>Invalid Email";
            }
            else if(gettype($phonenumber1)!='double')
            {
              $display="<br><br>Invalid Phone Number";
            }
            else if(strlen($password)<11)
            {
              $display='<br><br>Weak Password';
            }
            else if($password1!=$password)
            {
              $display="<br><br>Passwords Dont Match";
            }
           else if(mysqli_num_rows($res)==1)
            {
              $display="<br><br>This Account Already Exists";
            }
          else
          {
            $str1="INSERT INTO USERS(EMAIL,PHONENUMBER,PASSWORD) VALUES('".$email."','".$phonenumber."','".$password."');";
            echo $str1;
            $res1=mysqli_query($db,$str1);
            header('Location:loginfinal.php');
          }
        }
        else{
          $display="<br><br>Fill In The Details!";
        }
      }
}
?>
<script type="text/javascript">
  <!--
  function CheckPasswordStrength()
  {
    var pass=document.getElementById("Password");
    var v1=document.getElementById("textarea");
    password=pass.value;
    if(password.length<=10 && password.length!=0)
    {
      v1.innerHTML="<br><br>The password is weak.";
    }
    else
    {
      v1.innerHTML=" ";
    }
  }
  function CheckPasswordStrength1(password1)
  {
    var pass=document.getElementById("Password");
    var v1=document.getElementById("textarea");
    v1.style.color="white";
    var password=pass.value;
    if(password.length!=0 && password1!=password)
    {
      v1.innerHTML="<br><br>The passwords dont match.";
    }
    else {
      v1.innerHTML=" ";
    }
  }
    -->
</script>
<body style="background-color:black" background="img.png">
        <div id="container">
        <form id="form"  method="post" style="top:40px;width:400px;left:400px;" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
              <h1>Register</h1>
              <hr>
            <div class="label" >Email Id <br/>
            <input id="Email" name="email" type="text" placeholder="example123@email.com">

            </div> <br/>
            <div class="label" >Phone Number<br/>
                <input id="Phone Number" name="phonenumber" type="text" placeholder="Enter Your Phone Number Here">
            </div>
            <br/>
            <div class="label" >Password <br/>
            <input id="Password" type="password"
            onkeyup="CheckPasswordStrength()" name="password" placeholder="Enter Your Password Here" style="padding-left:1px;">
        </div>  <br/>
            <div class="label">Confirm Password <br/>
        <input id="Confirm Password" name="password1" onkeyup="CheckPasswordStrength1(this.value)" type="password" placeholder="Re-enter Your Password" style="padding-left:1px;">
        <span id="textarea"><?php echo $display?></span>
        </div>
            <hr>
            <input type="submit"  style="margin-left:25px;padding-left:40px;font-size:17px;width:240px;"id="button1" value="Create a new account"></input>
            <br>
            <br>
            <a href="loginfinal.php" style="margin-left:25px;width:100%;text-decoration:none;" id ="signin" class="button">Go To Login Page </a>

            <br/>
            <br/>


        </div>

        </form>
    </div>

</body>
</html>
