<?php
header("Content-type:text/html;charset=utf-8");
//1.先是获取用户名
	$username=$_POST["username"];
	$useremail=$_POST["useremail"];
	$userpass=$_POST["userpassword"];
	
//2.搭桥
	$conn=mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败");
	}else{
	//3.选择数据库
	mysql_select_db("students",$conn);
	//4.执行语句
//	$sqlstr = "select * from ptns where id='$username'";
//
//	$result=mysql_query($sqlstr,$conn);
//	
//	$rows = mysql_num_rows($result);
	
	//mysql_close($conn);
//	echo $result;
	//响应
//	if($result <= 0){
		$str ="insert into ptns(username,pass,email) values('$username','$userpass','$useremail')";
		echo "sqstr:".$str;
		$result = mysql_query($str,$conn);
		//$result1 = mysql_query($str,$conn);
		echo $result;
//		$result=mysql_query($sqlstr,$conn);
//		$tt=mysql_fetch_array($result1);
//		echo $result;
		mysql_close($conn);
//		if($result==0){
//			echo "1"; 
//		}else{
//			echo "0";
//		}
//		echo $tt;
//	}else{
//		echo "-1";
//	}

}

?>