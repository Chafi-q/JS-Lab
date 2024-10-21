console.log("here")


const original={
    a:1,
    b:{
        c:3
    }
}

const modified={
    ...original
    ,d:4
}

const modified2={
    original
    ,d:4
}

//console.log(modified)
//console.log(modified2)


// primitive :variable qui se copie
// objet : identifiant qui sera copie
// b prend l'identifiant de l'objet

/*const origin={a:1,b:{prop:true}}
const copy={...origin};

copy.a=22
copy.b.prop=false;

console.log(origin)

console.log(copy)



const list=new Array(1,2,3)
console.log(list)




let counter=0;


const timer=(setTimeout(() => {

    const timer=(setTimeout(() => {
        counter+=1;
        console.log(counter)
    }, 1000))


    counter+=1;
    console.log(counter)



}, 1000))



const promise =new Promise((res,rej)=>{
    setTimeout(() => {
        res("step 1")
    },3000);


})

console.log("PENDING ...")
promise
       .then((result)=>{
        console.log(result)
        return new Promise((res)=>{
            setTimeout(() => {
                res("step 2")
            },2000);
        
        })
       })
       .then((result)=>{console.log(result)})
       .catch(()=>{console.log("error")})
       
       
*/






    setTimeout(()=>{
        console.log("First")
    },0);
    
    const promise=fetch()
                  .then((response)=> response.json())
                  .catch((error)=>console.log(error) );
    
    let i;
    
    for(i=0;i<100000;i++){
    
    }
    console.log("second")
    













