var canvas = document.createElement("canvas")
document.body.appendChild(canvas)
var ctx = canvas.getContext("2d")
var _scale = 0

function loop() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    _scale = canvas.height*.2
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.save()
    ctx.translate(canvas.width*.5,canvas.height*.5)
    ctx.scale(_scale,_scale)
    ctx.fillRect(0,0,1,1)
    ctx.restore()
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)
