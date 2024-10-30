"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookClass_1 = require("./BookClass");
const Book_1 = require("./Book");
const Book_2 = require("./Book");
let Books = [
    new BookClass_1.BookClass("Humiliation", "Mahdi Elmandjra", 220, 140, Book_2.Status.CURRENT, 20, Book_1.Format.PRINT),
    new BookClass_1.BookClass("Humillación", "Mahdi Elmandjra", 220, 70, Book_2.Status.UNREAD, 0, Book_1.Format.PRINT),
    new BookClass_1.BookClass("Maghreb et Francophonie", "Mahdi Elmandjra", 220, 140, Book_2.Status.UNREAD, 0, Book_1.Format.PDF),
];
const title = document.getElementById("title");
const printButton = document.getElementById("save");
const printValue = document.getElementById("entredTitle");
function printEntredValue() {
    printValue.textContent = title.toString();
}
printButton.addEventListener("click", printEntredValue);
