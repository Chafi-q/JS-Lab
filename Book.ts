export interface Book{
    title:string;
    author:string;
    number_of_pages:number;
    price:number;
    status:Status;
    number_readed_page:number;
    format:Format;
    suggested_by?:string;
    finished:boolean
    
}


export enum Format {
    PRINT="print",
    PDF="pdf",
    EBOOK="Ebook",
    AUDIOBOOK="AudioBook"
}

export enum Status {
    READED="Read",
    RE_READED="Re-read",
    CURRENT="Currently reading",
    UNREAD="Unread",
    WANTED="Want to read"

}




