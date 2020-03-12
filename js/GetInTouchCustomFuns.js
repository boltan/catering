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