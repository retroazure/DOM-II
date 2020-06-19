// Your code goes here

const title = document.querySelector(".logo-heading");

title.addEventListener("mouseover",()=>
{
    title.style.color = "hotpink";
});

title.addEventListener("mouseleave",()=>
{
    title.style.color = "black";
});

const bodySel = document.querySelector("body");

const busImg = document.querySelector("body > div > header > img");

bodySel.addEventListener("keydown", (e) =>{
    if(e.code === "KeyU"){
        
        busImg.src = "https://img.pixers.pics/pho_wat(s3:700/FO/58/68/50/69/700_FO58685069_dc65c648dd2b85de1c14476aa67e9056.jpg,700,525,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,475,jpg)/murais-de-parede-school-bus-cartoon.jpg.jpg";
    }
    if(e.code === "KeyI"){

      busImg.src = "img/fun-bus.jpg"; 
    }

    if(e.code === "KeyO"){
        console.log(e);
        bodySel.style.backgroundColor = "white";
        document.querySelector("header").style.backgroundColor = "white";
    }
});

bodySel.addEventListener("wheel", (e)=>{
    if(e.deltaY < 0){
        busImg.style.opacity = "1";
    }
    else if(e.deltaY > 0){
        busImg.style.opacity = "0.1";
    }
});

busImg.addEventListener("drag", (e)=>{
    // console.log(e);
    title.innerHTML = "Sad Bus";
});

bodySel.addEventListener("dragend", (e)=>{
    // console.log(e);
    title.innerHTML = "Fun Bus";
});

window.addEventListener("load", (e)=>{
    console.log(e);
    bodySel.style.backgroundColor = "lightblue";
    document.querySelector("header").style.backgroundColor = "lightyellow";
    e.stopPropagation;
});

for(let i = 1; i<=4; i++){
    const navBar = document.querySelector("nav a:nth-child("+i+")");
    navBar.addEventListener("focus", (e)=>
    {
        navBar.style.color = "hotpink";
    }, true);
    navBar.addEventListener("focusout", (e)=>
    {
        navBar.style.color = "black";
    }, true);
}

window.addEventListener("resize", (e)=>{
    bodySel.style.backgroundColor = "lightgreen";
});

window.addEventListener("scroll", (e)=>{
    bodySel.style.backgroundColor = "lightpink";
});

const nav = document.querySelector("nav");

const inputs = document.createElement("input");

const latestinput = nav.appendChild(inputs);

latestinput.style.width = "20%";

latestinput.value = "Some text";

latestinput.addEventListener("select", (e)=>{
    alert("This is a selector");
    latestinput.remove();
    e.preventDefault();
    e.stopPropagation;
});

nav.addEventListener("dblclick", (e)=>{
    const newInput = document.createElement("input");
    const newInput2 = nav.appendChild(newInput);

    newInput2.style.width = "20%";

    newInput2.value = "Some text";

    e.preventDefault();
    e.stopPropagation;
});

