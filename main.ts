let ma = 0
input.onGesture(Gesture.Shake, function () {
    ma = randint(1, 3)
    if (ma == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
