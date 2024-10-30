import{BookClass} from './BookClass'
import {Format} from './Book'
import {Status} from './Book'

let Books: BookClass[]=[
   new BookClass( "Humiliation","Mahdi Elmandjra",
    220
    ,140,
    Status.CURRENT,
    20,
    Format.PRINT),
    new BookClass( "Humillación","Mahdi Elmandjra",
        220
        ,70,
        Status.UNREAD,
        0,
        Format.PRINT) ,
    
    new BookClass( "Maghreb et Francophonie","Mahdi Elmandjra",
            220
            ,140,
            Status.UNREAD,
            0,
            Format.PDF) ,

]



const title=document.getElementById("title") as HTMLInputElement;
const printButton= document.getElementById("save") as HTMLButtonElement;
const printValue = document.getElementById("entredTitle") as HTMLOutputElement;

function printEntredValue():void{
   printValue.textContent= title.toString();
}

printButton.addEventListener("click",printEntredValue)
  

