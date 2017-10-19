/** 
 *  @fileOverview Experiment in writing a ROT de-obfuscator. Inspired by Combitech's challenge.
 *
 *  @author       Niklas Brunberg <niklas@lynks.se>
 *
 */
"use strict";

/**
 * Steps every character one step in a ROT carousel.
 * @param   {number} index_rot number of steps, will wrap around if reaches max
 *
 * @returns {string} decaesared_string a character-stepped string
 */
String.prototype.RotN = function (index_rot) {
    // Swedish alphabet, substitute for your own
    var alphabet = "abcdefghijklmnopqrstuvxyzåäö",
        decaesared_string = "",
        source_string = this.toString();

    Array.from(source_string).forEach(function (char) {
        var index_of = alphabet.indexOf(char);
        decaesared_string += (index_of < 0) ? char : alphabet[(index_of + index_rot) % alphabet.length];
    });

    return decaesared_string;
};

var source = "mjufcöuusfkpcc.tf",
    // Set array length to the number of characters in your alphabet
    caesar_steps = Array.from(new Array(28), function (x, i) { return i; }),
    result_at_caesar = {};

caesar_steps.forEach(function (index) {
    result_at_caesar[index] = source.RotN(index);
});

console.table(result_at_caesar);
