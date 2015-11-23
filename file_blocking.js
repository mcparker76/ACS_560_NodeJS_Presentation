/**
 * Created by mcpar on 11/22/2015.
 */

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");