document.getElementById('generateQR').addEventListener('click', function() {
    var qrInput = document.getElementById('qrInput').value;
    var qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';
    var qr = new QRCode(qrCodeDiv, {
        text: qrInput,
        width: 300,
        height: 300
    });
});
