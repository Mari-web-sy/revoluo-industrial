let valor = 0
basic.forever(function () {
    valor = input.lightLevel()
    if (valor <= 150) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        music.play(music.stringPlayable("C D E F G A B C5 ", 160), music.PlaybackMode.UntilDone)
    } else if (true) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
    }
})
