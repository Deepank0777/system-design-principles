/**
 * Dependency Inversion
 * Classes should be dependent upon Interfaces rather on concreate classes
 */
class WiredKeyboard{

}
class WiredMouse{

}

class LaptopW{

    private wired_keyboard: WiredKeyboard;
    private wired_mouse: WiredMouse;

    constructor(wired_keyboard: WiredKeyboard, wired_mouse: WiredMouse){
        this.wired_keyboard = wired_keyboard;
        this.wired_mouse = wired_mouse;
    }
}

/**
 * ** Problem **
 * The Laptop class above are depending upon classes 'WiredKeyboard' & 'WiredMouse'
 * let's suppose if we want to work with Bluetooth devices then this dependecy will stop us
 * 
 * ** Solution **
 * 
 */

interface Keyboard{
    type:string
    color:string
    model: string
}

interface Mouse{
    type:string
    color:string
    model: string
}

class Laptop{

    private keyboard: Keyboard;
    private mouse: Mouse;

    constructor(keyboard: Keyboard, mouse: Mouse){
        this.keyboard = keyboard;
        this.mouse = mouse;
    }
}
const wired_keyboard:Keyboard = {
    type: 'wired',
    color: 'black',
    model: 'kwb001'
}
const bluetooth_keyboard:Keyboard = {
    type: 'bluetooth',
    color: 'white',
    model: 'kbw001'
}
const wired_mouse:Mouse = {
    type: 'wired',
    color: 'black',
    model: 'mwb001'
}
const bluetooth_mouse:Mouse = {
    type: 'bluetooth',
    color: 'white',
    model: 'mbw001'
}

new Laptop(wired_keyboard, wired_mouse)
new Laptop(bluetooth_keyboard, bluetooth_mouse)