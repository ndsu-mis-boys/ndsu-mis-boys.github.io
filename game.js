// setup renderer and ticker
var renderer = new PIXI.Renderer({ width: 800, height: 600, backgroundColor: 0x1099bb })
document.body.appendChild(renderer.view)
var stage = new PIXI.Container()

// setup RAF
var oldTime = Date.now()

requestAnimationFrame(animate)
function animate() {
    var newTime = Date.now()
    var deltaTime = newTime - oldTime
    oldTime = newTime;
    if (deltaTime < 0) deltaTime = 0
    if (deltaTime > 1000) deltaTime = 1000
    var deltaFrame = deltaTime * 60 / 1000 //1.0 is for single frame
	
    // update your game there
    sprite.rotation += 0.02 * deltaFrame
	
    renderer.render(stage)

    requestAnimationFrame(animate)
}

// setup sprites
var sprite = PIXI.Sprite.from('headphoneDog.png')
sprite.anchor.set(0.5)
sprite.position.set(renderer.screen.width / 2, renderer.screen.height / 2)
sprite.eventMode = 'static'
sprite.buttonMode = true

sprite.on('pointerdown', function() {
    sprite.scale.x *= 1.25
    sprite.scale.y *= 1.25
})

stage.addChild(sprite)
