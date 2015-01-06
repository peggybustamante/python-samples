<?php


function getWebPage($url){
 		 
 		$ch = curl_init();
      
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_HEADER, 0);
	    curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, true);
	    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    
	    $data = curl_exec($ch);
	    curl_close($ch);
	    return $data;
 		
}

function dataCleaner($data) {
		$data = str_replace('“','"',$data);
		$data = str_replace('”','"',$data);
		$data = str_replace("’","'",$data);
		$data = str_replace('é','e',$data);
		$data = str_replace('®','&reg;',$data);
		$data = str_replace('–','&ndash;',$data);
		$data = str_replace('Â','',$data);
		$data = str_replace(' ',' ',$data);
		$data = str_replace("â€™","'",$data);
		
		return $data;
}


//FDA recalls to JSON
$url1 = "http://api.usa.gov/recalls/search.json?organization=cdc&per_page=50&sort=date";
$json1 = getWebPage($url1);
$fp1 = fopen('data/fda_recalls.json', 'wb');
fwrite($fp1, $json1);
fclose($fp1);

//CPSC (full) recalls to JSON / PAGE 1
$url2 = "http://api.usa.gov/recalls/search.json?organization=cpsc&per_page=50&sort=date";
$json2 = getWebPage($url2);
$fp2 = fopen('data/cpsc_recalls.json', 'wb');
fwrite($fp2, $json2);
fclose($fp2);

//NHTSA recalls to JSON
$url3 = "http://api.usa.gov/recalls/search.json?organization=nhtsa&per_page=50&sort=date";
$json3 = getWebPage($url3);
$fp3 = fopen('data/nhtsa_recalls.json', 'wb');
fwrite($fp3, $json3);
fclose($fp3);


// Below for main recalls page categories


//FDA / FOOD recalls to JSON
$url4 = "http://api.usa.gov/recalls/search.json?organization=cdc&food_type=food&per_page=50&sort=date";
$json4 = getWebPage($url4);
$fp4 = fopen('data/food_recalls.json', 'wb');
fwrite($fp4, $json4);
fclose($fp4);

//FDA / DRUG recalls to JSON
$url5 = "http://api.usa.gov/recalls/search.json?organization=cdc&food_type=drug&per_page=50&sort=date";
$json5 = getWebPage($url5);
$fp5 = fopen('data/drug_recalls.json', 'wb');
fwrite($fp5, $json5);
fclose($fp5);


// Categories for CPSC recalls
$recallCats = array('toy','bicycle','clothing','chair','light','vehicle','stroller','furniture','electronics','battery');

$len = count($recallCats);

for($i=0; $i<$len; $i++) {
	$url = 'http://api.usa.gov/recalls/search.json?organization=cpsc&query='.$recallCats[$i].'&per_page=50&sort=date';
	$json = getWebPage($url);
	$fp = fopen('data/'.$recallCats[$i].'_recalls.json', 'wb');
	fwrite($fp, $json);
	fclose($fp);
}


?>

