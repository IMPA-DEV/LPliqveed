<?php

if (!empty($_POST)) {
//	$to = "info@liqveed.com";
	$to = "maxon.pro2015@gmail.com";
	$subject = "Liqveed Subscribe";


// данные с мыла
	$email = trim($_POST["email"]);


	$start = array('utm_source', 'utm_campaign', 'utm_keyword', 'utm_geo', 'utm_matchtype', 'utm_site', 'utm_placement', 'utm_position', 'utm_ad');
	$finish = array('Source', 'ID Campaign', 'Keyword', 'GEO', 'Matchtype', 'Google', 'Placement', 'AD Position', 'ID AD');

//preg_match('/utm_referrer=(.+)&/', $_SERVER['HTTP_REFERER'], $out2);
//preg_match_all('/([a-zA-Z_]+?)=([a-zA-Z0-9+]+)/', $_SERVER['HTTP_REFERER'], $out);

	$repl = array('+','%20','%2B','%3A','%2F','%3D','%26','%23','%3F','%40','%2C');
	$replto = array(' ',' ','+',':','/','=','&','#','?','@',',');
	preg_match_all('/([a-zA-Z_]+?)=([a-zA-Z0-9+:\/.%]+)/', $_SERVER['HTTP_REFERER'], $out);
	for ($i=0;$i<count($out[0]);$i++)
	{
		$advertising .= "<tr><td class=\"bold\">".str_replace($start, $finish, $out[1][$i]).':</td><td>'.str_replace($repl, $replto, $out[2][$i])."</td></tr>";
	}



// текст письма
	$message .= '
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Liqveed Subscribe</title>
  <style>

    body {
        font-family: "Trebuchet MS", Helvetica, sans-serif;
    }
    table {
	width: 100%;
    }
    h1 {
    font-size:medium;
    }
    caption {
     text-align:left;
     margin:1% 0;
     padding:5px;
     background-color: #E6E6E6;
     font-weight:600;
	 }
	 td {
	 width:50%
	 }
	 .subinfo {
	 background-color: #E6E6E6;
	 font-size:x-small;
	 line-height:1;
	 padding:5px;
	 }
	 .bold {
	 font-weight:bold;
	 }
  </style>
</head>
<body>
<table>
<caption>Lead Information:</caption>
	<tr>
		<td class="bold">Email:</td>
        <td>'.$email.'</td>
	</tr>
</table>';

	$message .= '
<div class="subinfo">
</div>
</body>
</html>
';

//<p>Form submitted from website: '. preg_replace('/\?.*/', '', $_SERVER['HTTP_REFERER']).'</p>

	$headers = 'Content-type: text/html; charset="utf-8"';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
	$headers .= "From: Liqveed <admin@liqveed.com> \r\n";
	if($email!='') {
		mail($to, $subject, $message, $headers);
	} else {
		return true;
	}

}
else {return true;
}

?>

<?php
//mail("maxon.pro2015@gmail.com", "the subject", $message,
//	"From: admin@nirkov.ru \r\n"
//	."X-Mailer: PHP/" . phpversion());
//?>
