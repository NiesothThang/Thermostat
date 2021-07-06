describe('Thermostat', function () {

    beforeEach(function () {
        thermostat = new Thermostat()
    })

    it("starts at 20 deg", function () {
        expect(thermostat.currentTemperature()).toEqual(20)
    })

    it("up() increases the temperature", function () {
        thermostat.up()
        expect(thermostat.currentTemperature()).toEqual(21)
    })

    it("down() decreases the temperature", function () {
        thermostat.down()
        expect(thermostat.currentTemperature()).toEqual(19)
    })

    it("temp does not go below 10 deg", function () {
        for (let i = 0; i < 12; i += 1) {
            thermostat.down()
        }
        expect(thermostat.currentTemperature()).toEqual(10)
    });

    it("power saving mode is on by default", function () {
        expect(thermostat.getPowerSavingMode()).toEqual(true);
    })

    it("max temp is 25 deg when PSM is on", function () {
        for (let i = 0; i < 7; i += 1) {
            thermostat.up()
        }
        expect(thermostat.currentTemperature()).toEqual(25)
    })

    it('power saving mode can be switched off', function () {
        thermostat.switchOffPowerMode()
        expect(thermostat.getPowerSavingMode()).toEqual(false)
    })

    it('max temp can be 32 when PSM is switched off', function () {
        thermostat.switchOffPowerMode()
        for (let i = 0; i < 14; i += 1) {
            thermostat.up()
        }
        expect(thermostat.currentTemperature()).toEqual(32)

    })
})
