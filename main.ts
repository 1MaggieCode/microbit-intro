input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("Maggie")
    }
})
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(5000)
basic.showIcon(IconNames.Cow)
basic.clearScreen()
basic.forever(function () {
	
})
