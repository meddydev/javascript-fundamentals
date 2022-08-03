class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingState = true;
  }

  getTemperature() {
    return this.temp;
  }

  getSavingState() {
    return this.powerSavingState;
  }

  setPowerSavingMode(trueOrFalse) {
    this.powerSavingState = trueOrFalse;
  }

  up() {
    if (this.powerSavingState === true && this.temp < 25) {
      this.temp += 1;
    } else if (this.powerSavingState === false && this.temp < 32) {
      this.temp += 1;
    }
  }

  down() {
    if (this.temp > 10) {
      this.temp -= 1;
    }
  }

  reset() {
    this.temp = 20;
  }
}

module.exports = Thermostat;
