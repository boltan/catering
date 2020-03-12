function StartUp() {
    var blink = keyreader("blink");
    if(blink == null)
    {
        return;
    }
    else if(blink == 1)
    {
        massegeIconOnClick();
    }
    else if(blink == 2)
    {
        phoneIconOnClick();
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


async function phoneIconOnClick() {
    var phone = document.getElementById("ajiPhone");
    phone.scrollIntoView();
    var blinkDuration = 300;
    phone.style.color = 'blue';
    await new Promise(r => setTimeout(r, blinkDuration));
    phone.style.color = '#212529';
    await new Promise(r => setTimeout(r, blinkDuration));
    phone.style.color = 'blue';
    await new Promise(r => setTimeout(r, blinkDuration));
    phone.style.color = '#212529';
    await new Promise(r => setTimeout(r, blinkDuration));
    phone.style.color = 'blue';
    await new Promise(r => setTimeout(r, blinkDuration));
    phone.style.color = '#212529';
}

async function massegeIconOnClick() {
    var panel = document.getElementById("formPanel");
    panel.scrollIntoView();
    var blinkDuration = 300;
    panel.style.border = '2px dashed red';
    await new Promise(r => setTimeout(r, blinkDuration));
    panel.style.border = 'none';
    await new Promise(r => setTimeout(r, blinkDuration));
    panel.style.border = '2px dashed red';
    await new Promise(r => setTimeout(r, blinkDuration));
    panel.style.border = 'none';
    await new Promise(r => setTimeout(r, blinkDuration));
    panel.style.border = '2px dashed red';
    await new Promise(r => setTimeout(r, blinkDuration));
    panel.style.border = 'none';
}