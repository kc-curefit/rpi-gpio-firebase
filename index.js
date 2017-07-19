var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT, write);

function write() {
  console.log('Writting to pin 7');
  gpio.write(7, true, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('Written to pin 7');
  });
}