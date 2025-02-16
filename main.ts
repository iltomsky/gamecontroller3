basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left) && !(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right))) {
        basic.showString("Y")
    } else {
        basic.showString("N")
    }
})
