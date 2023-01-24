input.onButtonPressed(Button.A, function () {
    basic.showString("How Are You?",60)
})
input.onGesture(Gesture.TiltLeft, function () {
    if (sprite_on == 1) {
        sprite.move(-1)
        if (sprite.get(LedSpriteProperty.X) == 0) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 1) {
            music.playTone(294, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 2) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 3) {
            music.playTone(349, music.beat(BeatFraction.Whole))
        } else {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    sprite_on = 1
    sprite = game.createSprite(2, 2)
})
input.onButtonPressed(Button.AB, function () {
    coin = randint(0, 1)
    for (let index = 0; index < 8; index++) {
        basic.showString("H",10)
basic.showString("T",10)
    }
    for (let index = 0; index < 3; index++) {
        basic.showString("H", 50)
basic.showString("T", 50)
    }
    basic.showString(" ",1)
if (coin == 0) {
        basic.showString("Heads!")
    } else {
        basic.showString("Tails!")
    }
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
    } else {
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
input.onPinPressed(TouchPin.P1, function () {
    sprite_on = 0
    sprite.delete()
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showString("1", 10)
basic.showString("2", 10)
basic.showString("3", 10)
basic.showString("4", 10)
basic.showString("5", 10)
basic.showLeds(`
        . # # # .
        # . . . .
        # # # # .
        # . . . #
        . # # # .
        `, 10)
    }
    dice = randint(1, 6)
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
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (sprite_on == 1) {
        sprite.move(1)
        if (sprite.get(LedSpriteProperty.X) == 0) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 1) {
            music.playTone(294, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 2) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        } else if (sprite.get(LedSpriteProperty.X) == 3) {
            music.playTone(349, music.beat(BeatFraction.Whole))
        } else {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E E D D - ", 120)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E D C C - ", 120)
})
let dice = 0
let coin = 0
let sprite: game.LedSprite = null
let oddOrEven = 0
let sprite_on = 0
sprite_on = 0
oddOrEven = 0
basic.showString("FIDGET! pin 2 = game", 50)
basic.forever(function () {
	
})
