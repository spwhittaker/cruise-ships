const Ship = require('../src/Ship.js');

describe("ship has a port", () => {
    it("creates an object", () => {
        const hmsGoodTimes = new Ship('Good Times', 'Berlin');
        expect(hmsGoodTimes).toBeInstanceOf(Object);
    });

    it("has a starting point for a ship", () => {
        const hmsGoodTimes = new Ship('Good Times','Moscow');
        expect(hmsGoodTimes.startingPort).toBeTruthy();
    });

})