class people{
    #nationality="indonesia"
    constructor(name,age,adress,job,nationality){
        this.name=name
        this.age=age
        this.adress=adress
        this.job=job
        this.nationality=nationality
    }
    get getNationality(){
        return this.#nationality
    }
    set setNationality(value){
        this.#nationality=value
    }

    identitas(name,age,adress){
        return this.name + this.age + this.adress + this.#nationality 
    }
}


const alfi=new people("alfi ",22," persemaian street ","full stack developer ")
alfi.setNationality="russia"
console.log(alfi.getNationality);
console.log(alfi.identitas());


function musim(dingin,panas,semi,gugur){
    return function secaraSempit(makan){
        return `${dingin} ${panas} ${semi} ${gugur} `+makan
    }
    }
console.log(musim('asd')(210));

function validateForm(){
    let b= document.forms["my form"]["fname"]
}

const coba = document.querySelector(".coba");
coba.addEventListener("click", (event)=>{
    coba.style.textDecoration="none"
    event.preventDefault()
document.querySelector("img").style.visibility="hidden"
    //coba.style.color="#ffff"
    console.log("c");
})

function handleClick(){
    console.log("click");
}
