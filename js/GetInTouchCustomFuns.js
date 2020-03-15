var isMobile = false;


function StartUp() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('mobileConP').style.display = 'block';
        document.getElementById('desktopConP').style.display = 'none';
        isMobile = true;
        document.getElementById('whatsappIcon').style.display = 'block';
    }
}

function keyreader(Key) {
    var url = window.location.href;
    KeysValues = url.split(/[\?&]+/);
    for (i = 0; i < KeysValues.length; i++) {
      KeyValue= KeysValues[i].split("=");
      if (KeyValue[0] == Key) {
        return KeyValue[1];
    }
  }
}
