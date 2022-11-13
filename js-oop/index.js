class RedLight {
    constructor(light) {
        this.light = light;
    }
    switch() {
        this.light.setState(this.light.redLight);
        console.log("准许通行");
    }
}
class YellowLight {
    constructor(light) {
        this.light = light;
    }
    switch() {
        this.light.setState(this.light.yellowLight);
        console.log("禁止通行");
    }
}
class GreenLight {
    constructor(light) {
        this.light = light;
    }
    switch() {
        this.light.setState(this.light.greenLight);
        console.log("警示");
    }
}


class Light {
    constructor() {
        this.redLight = new RedLight(this);
        this.greenLight = new GreenLight(this);
        this.yellowLight = new YellowLight(this);
        this.currentState = null
    }
    setState(newState) {
        this.currentState = newState;
    }
    init() {
        this.currentState = this.redLight;
    }
}
const light = new Light();
light.init();
// console.log(light)
setInterval(() =>{
    light.currentState.switch() 
} ,6 * 100)