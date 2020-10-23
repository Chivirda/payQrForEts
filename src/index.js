import './style.css'
import QrCode from 'qrcode'

QrCode.toCanvas('I am a pony!', { errorCorrectionLevel: 'H', function(err, canvas) {
  if (err) throw err

  var container = document.getElementById('canvas')
  container.appendChild(canvas)
}})