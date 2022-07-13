input.onButtonPressed(Button.A, function () {
    thisLine = ""
    for (let index = 0; index <= 80; index++) {
        thisLine = "" + thisLine + convertToText(pins.i2cReadNumber(myAddress, NumberFormat.UInt8LE, true)) + ","
    }
    thisLine = "" + thisLine + convertToText(pins.i2cReadNumber(myAddress, NumberFormat.UInt8LE, false))
    serial.writeLine(thisLine)
})
// So far this just returns 'zero'... :(
input.onButtonPressed(Button.B, function () {
    // 25 is the decimal form of 0x19 which is supposed to be the address of the accelerometer
    myAddress = 25
    pins.i2cWriteNumber(
    myAddress,
    15,
    NumberFormat.UInt8LE,
    true
    )
    serial.writeLine(convertToText(pins.i2cReadNumber(myAddress, NumberFormat.UInt8LE, false)))
})
let thisLine = ""
let myAddress = 0
myAddress = 25
basic.forever(function () {
	
})
