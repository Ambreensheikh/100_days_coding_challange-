"use strict";
// make enhanced object laptop
let laptop = {
    make: "hp", model: "probook", year: 2022,
    // describe function
    describe: function () {
        console.log(`This laptop is `, `${laptop.make}, ${laptop.model}, ${laptop.year}`);
    }
};
laptop.describe();
