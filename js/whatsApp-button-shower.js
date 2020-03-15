
function WhatStartUp() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('whatsappIcon').style.display = 'inline-block';
        document.getElementById('whatsLink').href = "https://wa.me/972545311922?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%91%D7%A0%D7%95%D7%92%D7%A2%20%D7%9C%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92!";
        document.getElementById('aboutPhoneLink').href = "tel:+972545311922";
    }
}
