// ==UserScript==
// @name         Skyward Shit
// @description  LogMeIn
// @version      1
// @namespace    Abe
// @license      Public Domain
// @include      https://skystu.crowley.k12.tx.us/*
// @grant        none
// ==/UserScript==

function o(l){return document.getElementById(l);}

var x = o("login");
var y = o("password");
var z = o("bLogin")

x.value = "the.hype";
y.value = "54321";
z.click();
