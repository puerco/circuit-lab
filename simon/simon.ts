let jugando = false
let listaColores: number[] = []
let listaRespuestas: number[] = []
let index = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    colorea(4)
    checaNumero(4)
})
input.touchA7.onEvent(ButtonEvent.Click, function () {
    colorea(3)
    checaNumero(3)
})
function colorea(numColor: number) {
    if (!(jugando)) {
        return
    }
    if (numColor == 3) {
        light.setAll(0x000000)
        light.setPixelColor(3, 0x7f00ff)
        light.setPixelColor(4, 0x7f00ff)
        music.playTone(523, music.beat(BeatFraction.Half))
    } else if (numColor == 4) {
        light.setAll(0x000000)
        light.setPixelColor(5, 0xff8000)
        light.setPixelColor(6, 0xff8000)
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (numColor == 2) {
        light.setAll(0x000000)
        light.setPixelColor(0, 0x00ff00)
        light.setPixelColor(1, 0x00ff00)
        music.playTone(262, music.beat(BeatFraction.Half))
    } else {
        light.setAll(0x000000)
        light.setPixelColor(8, 0x00ffff)
        light.setPixelColor(9, 0x00ffff)
        music.playTone(330, music.beat(BeatFraction.Half))
    }
}
input.onGesture(Gesture.Shake, function () {
    jugando = true
    listaColores = []
    while (true) {
        listaColores.push(Math.randomRange(1, 4))
        for (let color2 of listaColores) {
            colorea(color2)
            light.setAll(0x000000)
            pause(200)
        }
        listaRespuestas = []
        while (listaColores.length != listaRespuestas.length) {
            if (!(jugando)) {
                return
            }
            pause(100)
        }
        pause(2000)
    }
})
input.touchA3.onEvent(ButtonEvent.Click, function () {
    colorea(1)
    checaNumero(1)
})
input.touchA6.onEvent(ButtonEvent.Click, function () {
    colorea(3)
    checaNumero(3)
})
input.touchA2.onEvent(ButtonEvent.Click, function () {
    colorea(1)
    checaNumero(1)
})
input.touchA1.onEvent(ButtonEvent.Click, function () {
    colorea(4)
    checaNumero(4)
})
input.touchA4.onEvent(ButtonEvent.Click, function () {
    colorea(2)
    checaNumero(2)
})
input.touchA5.onEvent(ButtonEvent.Click, function () {
    colorea(2)
    checaNumero(2)
})
function checaNumero(numeroPicado: number) {
    if (!(jugando)) {
        return
    }
    listaRespuestas.push(numeroPicado)
    index = listaRespuestas.length - 1
    if (listaRespuestas[index] == listaColores[index]) {
        if (listaColores.length == listaRespuestas.length) {
            pause(200)
            light.setAll(0x00ff00)
            music.powerUp.play()
        }
    } else {
        jugando = false
        light.setAll(0xff0000)
        music.wawawawaa.play()
    }
}
