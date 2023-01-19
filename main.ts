input.onButtonPressed(Button.A, function () {
    basic.showString("How Are You?")
})
input.onButtonPressed(Button.B, function () {
    if (oddOrEven == 0) {
        oddOrEven = 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (oddOrEven == 1) {
        oddOrEven = 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    if (dice == 1) {
        basic.showString("1")
    } else if (dice == 2) {
        basic.showString("2")
    } else if (dice == 3) {
        basic.showString("3")
    } else if (dice == 4) {
        basic.showString("4")
    } else if (dice == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E E D D - ", 120)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E D C C - ", 120)
})
let dice = 0
let oddOrEven = 0
oddOrEven = 0
basic.forever(function () {
	
})
