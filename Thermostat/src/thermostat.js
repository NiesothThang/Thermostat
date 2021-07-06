class Thermostat {
    MIN_TEMP = 10

    constructor() {
        this.temperature = 20
        this.powerSavingModeOn = true
    }

    currentTemperature() {
        return this.temperature
    }

    up() {
        if (this.powerSavingModeOn === true) {
            if (this.temperature < 25) {
                this.temperature = this.temperature + 1
                return this.temperature
            }
        
        } else {
            if (this.temperature < 32){
                this.temperature = this.temperature + 1
                return this.temperature
            }
        }
    }
    down() {
        if (this.temperature > this.MIN_TEMP) {
            this.temperature = this.temperature - 1
            return this.temperature
        }
    }

    getPowerSavingMode() {
        return this.powerSavingModeOn
    }

    switchOffPowerMode(){
        return this.powerSavingModeOn = false
    }
}