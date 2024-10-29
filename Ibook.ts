export interface Ibook{
    title:string;
    author:string;
    number_of_pages:string;
    price:number;
    status:status;
    number_readed_page:number;
    format:format;
    suggested_by:string;
    finished:boolean
    
}


enum format {
    PRINT="print",
    PDF="pdf",
    EBOOK="Ebook",
    AUDIOBOOK="AudioBook"
}

enum status {
    READ="Read",
    RE_READ="Re-read",
    CURRENT="Currently reading",
    UNREAD="Unread",
    WANTED="Want to read"

}




