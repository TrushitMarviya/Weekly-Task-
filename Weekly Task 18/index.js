let index1 = 0 ;
let index2 = 0 ;
let index3 = 0 ;
let index4 = 0 ;
let stop1 = setInterval (()=>{
    index1++
    document.getElementById("h1").innerText = index1
    if(index1 == 2536)
        clearInterval(stop1)
    },1);
let stop2 = setInterval (()=>{
    index2++
    document.getElementById("h2").innerText = index2
    if(index2 == 6784)
        clearInterval(stop2)
    },1);
let stop3= setInterval (()=>{
    index3++
    document.getElementById("h3").innerText = index3
    if(index3 == 2239)
        clearInterval(stop3)
    }, 1);
let stop4 = setInterval (()=>{
    index4++
    document.getElementById("h4").innerText = index4
    if(index4 == 434)
        clearInterval(stop4)
    },1);


    let link = document.getElementById("icon1");
    let box = document.querySelector('.box1') 

    link.addEventListener("click" , ()=>{      
            box.style.display = "block";
    })
    let link2 = document.getElementById("icon2");
    link2.addEventListener("click" , ()=>{      
            box.style.display = "none";
    })
  