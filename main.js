const button= document.querySelector(".nav-toggle")
const links= document.querySelector(".links")

button.addEventListener("click", function (){
    // console.log(links.classList);
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }else{
    //     links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")   
})

// con add agrego una clasw
// con remove la elimino
// con toggle ALTERNO LA CLASE