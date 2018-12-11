<?

echo json_encode($_GET);
	
if ( $curl = curl_init () ) //инициализация сеанса

{
	
	
    curl_setopt ($curl, CURLOPT_URL, 'http://inbonus.ru/ajax/addSubScription.php');//указываем адрес страницы

    curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt ($curl, CURLOPT_POST, true);

    curl_setopt ($curl, CURLOPT_POSTFIELDS, $_POST);

	
    curl_setopt ($curl, CURLOPT_HEADER, 0);

    $result = curl_exec ($curl);//выполнение запроса

    curl_close ($curl);//закрытие сеанса
    
	echo $result;
  } else {
	  echo "ee";
  }



?>
