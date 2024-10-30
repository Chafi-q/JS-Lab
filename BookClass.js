"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookClass = void 0;
class BookClass {
    constructor(title, author, number_of_pages, price, status, number_readed_page, format, suggested_by) {
        this.book = null;
        if (number_readed_page < number_of_pages) {
            this.book = { title,
                author,
                number_of_pages,
                price,
                status,
                number_readed_page,
                format,
                suggested_by,
                finished: false
            };
        }
        else {
            console.log("informations invalides");
        }
    }
    currentlyAt(page) {
        if (!this.book) {
            console.log("livre introuvable");
            return;
        }
        if (page > this.book.number_of_pages) {
            console.log("informations invalides");
            return;
        }
        this.book.number_readed_page = page;
        if (page == this.book.number_of_pages) {
            this.book.finished = true;
        }
    }
    deleteBook() {
        this.book = null;
    }
}
exports.BookClass = BookClass;
