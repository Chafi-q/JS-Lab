import { Book } from "./Book";
import { Format } from "./Book";
import {Status} from "./Book"





export class BookClass {
    private book:Book | null =null;
    constructor(
       title:string,author:string,
       number_of_pages:number,price:number,
       status:Status,number_readed_page:number,
       format:Format,suggested_by:string
    ){
         
        if(number_readed_page<number_of_pages){
            this.book= {title,
                author,
                number_of_pages,
                price,
                status,
                number_readed_page,
                format,
                suggested_by,
                finished:false
            }    
        }else {
            console.log("informations invalides")

        }


    }

    currentlyAt(page:number):void {
        if (!this.book) {
            console.log("livre introuvable");
            return; 
        }


        if(page>this.book.number_of_pages){
            console.log("informations invalides")
          return;
        }    

            this.book.number_readed_page= page;
           
             if(page==this.book.number_of_pages) {
                this.book.finished=true;
             }
            
        
        }


      deleteBook():void {
        this.book=null;
      }





}