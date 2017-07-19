var gpio = require("gpio");
var switch1, switch2, switch3, switch4

switch1 = gpio.export(4, {
    direction: "out",
    ready: function () {
        switch1.set(1)
        console.log("switch 1 ready")
    }
})

switch2 = gpio.export(17, {
    direction: "out",
    ready: function () {
        switch2.set(0)
        console.log("switch 2 ready")
    }
})

switch3 = gpio.export(27, {
    direction: "out",
    ready: function () {
        switch3.set(1)
        console.log("switch 3 ready")
    }
})

switch4 = gpio.export(22, {
    direction: "out",
    ready: function () {
        switch4.set(0)
        console.log("switch 4 ready")
    }
});

