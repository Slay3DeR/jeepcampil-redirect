fetch('https://connect.facebook.net/en_US/fbevents.js', { mode: 'no-cors' })
.then(response => response.text())
.then(scriptText => {
    let script = document.createElement('script');
    script.innerHTML = scriptText;
    document.head.appendChild(script);
})
.catch(error => console.log("⚠️ Facebook Pixel נחסם על ידי AdBlock!", error));
