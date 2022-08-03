const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("returns default temperature of 20", () => {
    const thermostat = new Thermostat();

    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("returns temp of 21 when incrementing thermostat by 1", () => {
    const thermostat = new Thermostat();
    thermostat.up();

    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("returns temp of 22 when incrementing thermostat by 1, twice", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();

    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("returns temp of 19 when reducing thermostat by 1", () => {
    const thermostat = new Thermostat();
    thermostat.down();

    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("initially has power saving mode on", () => {
    const thermostat = new Thermostat();

    expect(thermostat.getSavingState()).toEqual(true);
  });

  it("turns power saving mode off", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);

    expect(thermostat.getSavingState()).toEqual(false);
  });

  it("doesn't let you set a temp higher than 25 when power saving mode is on", () => {
    const thermostat = new Thermostat();

    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("increments temp above 25 after turning off power saving mode", () => {
    const thermostat = new Thermostat();

    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }

    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(26);
  });

  it("doesn't let you set a temp lower than 10", () => {
    const thermostat = new Thermostat();

    for (let i = 0; i < 20; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toEqual(10);
  });

  it("resets temp to 20", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);

    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }

    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});
