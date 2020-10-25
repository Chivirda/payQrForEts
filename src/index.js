import './style.css'
import QrCode from 'qrcode'


QrCode.toCanvas('I am a pony!', { errorCorrectionLevel: 'H', width: 400, height: 400 }, function (err, canvas) {
  if (err) throw err
 
  var container = document.getElementById('container')
  container.appendChild(canvas)
})