/* Copyright 2013-2014 Robert Schroll
 *
 * This file is part of Beru and is distributed under the terms of
 * the GPL. See the file COPYING for full details.
 */

var handlers = {"Log": function (message) { console.log(message); } };
var context = "messaging://"

function registerHandler(name, handler) {
    handlers[name] = handler;
}

function handleMessage(message) {
    if (message === "" || message.indexOf("127") === 0)
        return;

    try {
        var command = JSON.parse(message);
    } catch (error) {
        console.log("Error parsing message: " + message);
        return;
    }

    var handler = handlers[command[0]];
    if (handler === undefined)
        console.log("No handler for " + command[0]);
    else
        handler(command[1]);
}

function sendMessage(command, arguments) {
    var req = bookWebView.rootFrame.sendMessage(context, "MESSAGE",
                                                {command: command, arguments: arguments});
    req.onerror = function (code, explanation) {
        console.log("Error " + code + ": " + explanation);
        console.log("  " + command)
    }
}
