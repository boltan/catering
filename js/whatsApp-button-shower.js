
function WhatStartUp() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('whatsappIcon').style.display = 'inline-block';
        document.getElementById('aboutWhatsappLink').style.display = 'block';
        document.getElementById('aboutPhoneLink').style.display = 'block';
        document.getElementById('aboutWhatsappSpan').style.display = 'none';
        document.getElementById('aboutPhoneSpan').style.display = 'none';
    }
}
